import * as fs from "fs";
import * as path from "path";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

fetchIDLs(process.argv.slice(2));

interface IDLSource {
    url: string;
    title: string;
    deprecated?: boolean;
    local?: boolean;
}

const idlSelector = [
    "pre.idl:not(.extract):not(.example)", // bikeshed and ReSpec
    "pre.code code.idl-code", // Web Cryptography
    "pre:not(.extract) code.idl" // HTML
].join(",");

const cssPropSelector = "dfn.css[data-dfn-type=property]";

async function fetchIDLs(filter: string[]) {
    const idlSources = (require("../inputfiles/idlSources.json") as IDLSource[])
        .filter(source => !filter.length || filter.includes(source.title));
    await Promise.all(idlSources.map(async source => {
        if (source.local) {
            return;
        }
        const { idl, comments } = await fetchIDL(source);
        fs.writeFileSync(path.join(__dirname, `../inputfiles/idl/${source.title}.widl`), idl + '\n');
        if (comments) {
            fs.writeFileSync(path.join(__dirname, `../inputfiles/idl/${source.title}.commentmap.json`), comments + '\n');
        }
    }));
}

async function fetchIDL(source: IDLSource) {
    const response = await fetch(source.url);
    if (source.url.endsWith(".idl")) {
        return { idl: await response.text() };
    }
    const dom = JSDOM.fragment(await response.text());
    let idl = extractIDL(dom);
    const css = extractCSSDefinitions(dom);
    if (css) {
        idl = idl ? idl + `\n\n${css}` : css;
    }
    if (!idl) {
        throw new Error(`Found no IDL or CSS from ${source.url}`);
    }
    const comments = processComments(dom);
    return { idl, comments };
}

function extractIDL(dom: DocumentFragment) {
    const elements = Array.from(dom.querySelectorAll(idlSelector))
        .filter(el => {
            if (el.parentElement && el.parentElement.classList.contains("example")) {
                return false;
            }
            const previous = el.previousElementSibling;
            if (!previous) {
                return true;
            }
            return !previous.classList.contains("atrisk") && !previous.textContent!.includes("IDL Index");
        });
    return elements.map(element => trimCommonIndentation(element.textContent!).trim()).join('\n\n');
}

function extractCSSDefinitions(dom: DocumentFragment) {
    const properties = Array.from(dom.querySelectorAll(cssPropSelector))
        .map(element => element.textContent!.trim());

    if (!properties.length) {
        return "";
    }

    return `partial interface CSSStyleDeclaration {${
        properties.map(property => `\n  [CEReactions] attribute [TreatNullAs=EmptyString] CSSOMString ${
            hyphenToCamelCase(property)
        };`).join("")
    }\n};`
}

function hyphenToCamelCase(name: string) {
    const camel = name
        .replace(/^-(\w)/, (_, c) => c)
        .replace(/-(\w)/g, (_, c) => c.toUpperCase());
    return camel === "float" ? "_float" : camel;
}

function processComments(dom: DocumentFragment) {
    const elements = dom.querySelectorAll("dl.domintro");
    if (!elements.length) {
        return undefined;
    }

    const result: Record<string, string> = {};
    for (const element of elements) {
        let child = element.firstElementChild;
        while (child) {
            const key = getKey(child.innerHTML);
            child = child.nextElementSibling;
            const childKey = child && getKey(child.innerHTML);
            if (key && child && (child === element.lastElementChild || !isNextKey(key, childKey))) {
                result[key] = getCommentText(child.textContent!);
                child = child.nextElementSibling;
            }
        }
    }
    if (!Object.keys(result).length) {
        return undefined;
    }
    return JSON.stringify(result, undefined, 4);
}

function isNextKey(k1: string, k2: string | null | undefined) {
    return k2 && k1.split("-")[0] === k2.split("-")[0];
}

function getKey(s: string) {
    const keyRegexp = /#dom-([a-zA-Z-_]+)/i;
    const match = s.match(keyRegexp);
    if (match) {
        return match[1];
    }
    return undefined;
}

function getCommentText(text: string) {
    return text
        .replace(/’/g, "'")
        .split("\n")
        .map(line => line.trim())
        .filter(line => !!line)
        .map(line => line.slice(getIndentation(line))).join("\n");
}

/**
 * Remove common indentation:
 *     <pre>
 *       typedef Type = "type";
 *       dictionary Dictionary {
 *         "member"
 *       };
 *     </pre>
 * Here the textContent has 6 common preceding whitespaces that can be unindented.
 */
function trimCommonIndentation(text: string) {
    const lines = text.split("\n");
    if (!lines[0].trim()) {
        lines.shift();
    }
    if (!lines[lines.length - 1].trim()) {
        lines.pop();
    }
    const commonIndentation = Math.min(...lines.map(getIndentation));
    return lines.map(line => line.slice(commonIndentation)).join("\n");
}

/** Count preceding whitespaces */
function getIndentation(line: string) {
    let count = 0;
    for (const ch of line) {
        if (ch !== " ") {
            break;
        }
        count++;
    }
    return count;
}
