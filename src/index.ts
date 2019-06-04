import * as Browser from "./types";
import * as fs from "fs";
import * as path from "path";
import { merge, resolveExposure, markAsDeprecated, mapToArray } from "./helpers";
import { Flavor, emitWebIdl } from "./emitter";
import { convert } from "./widlprocess";
import { getExposedTypes } from "./expose";

function emitDomWorker(webidl: Browser.WebIdl, tsWorkerOutput: string, forceKnownWorkerTypes: Set<string>) {
    const worker = getExposedTypes(webidl, "Worker", forceKnownWorkerTypes);
    const result = emitWebIdl(worker, Flavor.Worker);
    fs.writeFileSync(tsWorkerOutput, result);
    return;
}

function emitDomWeb(webidl: Browser.WebIdl, tsWebOutput: string, forceKnownWindowTypes: Set<string>) {
    const browser = getExposedTypes(webidl, "Window", forceKnownWindowTypes);

    const result = emitWebIdl(browser, Flavor.Web);
    fs.writeFileSync(tsWebOutput, result);
    return;
}

function emitES6DomIterators(webidl: Browser.WebIdl, tsWebIteratorsOutput: string) {
    fs.writeFileSync(tsWebIteratorsOutput, emitWebIdl(webidl, Flavor.ES6Iterators));
}

function emitDom() {
    const __SOURCE_DIRECTORY__ = __dirname;
    const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");
    const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");

    // ${name} will be substituted with the name of an interface
    const removeVerboseIntroductions: [RegExp, string][] = [
        [/^(The|A) ${name} interface of (the\s*)*((?:(?!API)[A-Za-z\d\s])+ API)/, 'This $3 interface '],
        [/^(The|A) ${name} (interface|event|object) (is|represents|describes|defines)?/, ''],
        [/^An object implementing the ${name} interface (is|represents|describes|defines)/, ''],
        [/^The ${name} is an interface representing/, ''],
        [/^This type (is|represents|describes|defines)?/, ''],
        [/^The (((?:(?!API)[A-Za-z\s])+ API)) ${name} (represents|is|describes|defines)/, 'The $1 ']
    ];

    // Create output folder
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const tsWebOutput = path.join(outputFolder, "dom.generated.d.ts");
    const tsWebIteratorsOutput = path.join(outputFolder, "dom.iterable.generated.d.ts");
    const tsWorkerOutput = path.join(outputFolder, "webworker.generated.d.ts");

    const overriddenItems = require(path.join(inputFolder, "overridingTypes.json"));
    const addedItems = require(path.join(inputFolder, "addedTypes.json"));
    const comments = require(path.join(inputFolder, "comments.json"));
    const documentationFromMDN = apiDescriptionsToIdl(require(path.join(inputFolder, 'mdn', 'apiDescriptions.json')));
    const removedItems = require(path.join(inputFolder, "removedTypes.json"));
    const idlSources: any[] = require(path.join(inputFolder, "idlSources.json"));
    const widlStandardTypes = idlSources.map(convertWidl);

    function convertWidl({ title, deprecated }: { title: string; deprecated?: boolean }) {
        const filename = title + ".widl";
        const idl: string = fs.readFileSync(path.join(inputFolder, "idl", filename), { encoding: "utf-8" });
        const commentsMapFilePath = path.join(inputFolder, "idl", title + ".commentmap.json");
        const commentsMap: Record<string, string> = fs.existsSync(commentsMapFilePath) ? require(commentsMapFilePath) : {};
        commentCleanup(commentsMap)
        const result = convert(idl, commentsMap);
        if (deprecated) {
            mapToArray(result.browser.interfaces!.interface).forEach(markAsDeprecated);
            result.partialInterfaces.forEach(markAsDeprecated);
        }
        return result;
    }

    function commentCleanup(commentsMap: Record<string, string>) {
        for (const key in commentsMap) {
            // Filters out phrases for nested comments as we retargets them:
            // "This operation receives a dictionary, which has these members:"
            commentsMap[key] = commentsMap[key].replace(/[,.][^,.]+:$/g, ".");
        }
    }

    function apiDescriptionsToIdl(descriptions: Record<string, string>) {
        const idl: Browser.WebIdl = {
            interfaces: {
                interface: {}
            }
        };

        Object.keys(descriptions).forEach(name => {
            idl.interfaces!.interface[name] = {
                comment: transformVerbosity(name, descriptions[name]),
            } as Browser.Interface;
        });

        return idl;
    }

    function transformVerbosity(name: string, description: string): string {
        for (const regTemplate of removeVerboseIntroductions) {
            const [{ source: template }, replace] = regTemplate;

            const reg = new RegExp(template.replace(/\$\{name\}/g, name) + '\\s*');
            const product = description.replace(reg, replace);
            if (product !== description) {
                return product.charAt(0).toUpperCase() + product.slice(1);
            }
        }

        return description;
    }

    /// Load the input file
    let webidl: Browser.WebIdl = require(path.join(inputFolder, "browser.webidl.preprocessed.json"));

    const knownTypes = require(path.join(inputFolder, "knownTypes.json"));

    for (const w of widlStandardTypes) {
        webidl = merge(webidl, w.browser, true);
    }
    for (const w of widlStandardTypes) {
        for (const partial of w.partialInterfaces) {
            // Fallback to mixins before every spec migrates to `partial interface mixin`.
            const base = webidl.interfaces!.interface[partial.name] || webidl.mixins!.mixin[partial.name];
            if (base) {
                if (base.exposed) resolveExposure(partial, base.exposed);
                merge(base.constants, partial.constants, true);
                merge(base.methods, partial.methods, true);
                merge(base.properties, partial.properties, true);
            }
        }
        for (const partial of w.partialMixins) {
            const base = webidl.mixins!.mixin[partial.name];
            if (base) {
                if (base.exposed) resolveExposure(partial, base.exposed);
                merge(base.constants, partial.constants, true);
                merge(base.methods, partial.methods, true);
                merge(base.properties, partial.properties, true);
            }
        }
        for (const partial of w.partialDictionaries) {
            const base = webidl.dictionaries!.dictionary[partial.name];
            if (base) {
                merge(base.members, partial.members, true);
            }
        }
        for (const include of w.includes) {
            const target = webidl.interfaces!.interface[include.target];
            if (target) {
                if (target.implements) {
                    target.implements.push(include.includes);
                }
                else {
                    target.implements = [include.includes];
                }
            }
        }
    }

    webidl = merge(webidl, documentationFromMDN);
    webidl = prune(webidl, removedItems);
    webidl = merge(webidl, addedItems);
    webidl = merge(webidl, overriddenItems);
    webidl = merge(webidl, comments);
    for (const name in webidl.interfaces!.interface) {
        const i = webidl.interfaces!.interface[name];
        if (i["override-exposed"]) {
            resolveExposure(i, i["override-exposed"]!, true);
        }
    }

    emitDomWeb(webidl, tsWebOutput, new Set(knownTypes.Window));
    emitDomWorker(webidl, tsWorkerOutput, new Set(knownTypes.Worker));
    emitES6DomIterators(webidl, tsWebIteratorsOutput);

    function prune(obj: Browser.WebIdl, template: Partial<Browser.WebIdl>): Browser.WebIdl {
        return filterByNull(obj, template);

        function filterByNull(obj: any, template: any) {
            if (!template) return obj;
            const filtered: any = {};
            for (const k in obj) {
                if (!template.hasOwnProperty(k)) {
                    filtered[k] = obj[k];
                }
                else if (Array.isArray(template[k])) {
                    if (!Array.isArray(obj[k])) {
                        throw new Error(`Removal template ${k} is an array but the original field is not`);
                    }
                    // template should include strings
                    filtered[k] = obj[k].filter((item: any) => {
                        const name = typeof item === "string" ? item : (item.name || item["new-type"]);
                        return !template[k].includes(name);
                    });
                }
                else if (template[k] !== null) {
                    filtered[k] = filterByNull(obj[k], template[k]);
                }
            }
            return filtered;
        }
    }
}

emitDom();
