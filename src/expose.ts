import * as Browser from "./types";
import { getEmptyWebIDL, filter, exposesTo, followTypeReferences, filterProperties, mapToArray } from "./helpers";

export function getExposedTypes(webidl: Browser.WebIdl, target: string, forceKnownTypes: Set<string>) {
    const unexposedTypes = new Set<string>();
    const filtered = getEmptyWebIDL();
    if (webidl.interfaces) {
        filtered.interfaces!.interface = filter(webidl.interfaces.interface, o => exposesTo(o, target));
        const unexposedInterfaces = mapToArray(webidl.interfaces.interface).filter(i => !i.exposed || !i.exposed.includes(target));
        for (const i of unexposedInterfaces) {
            unexposedTypes.add(i.name);
        }
    }

    const knownIDLTypes = followTypeReferences(webidl, filtered.interfaces!.interface);
    const isKnownName = (o: { name: string }) => knownIDLTypes.has(o.name) || forceKnownTypes.has(o.name);

    if (webidl.typedefs) {
        const referenced = webidl.typedefs.typedef.filter(t => knownIDLTypes.has(t["new-type"]) || forceKnownTypes.has(t["new-type"]));
        const { exposed, removed } = filterTypedefs(referenced, unexposedTypes);
        removed.forEach(s => unexposedTypes.add(s));
        filtered.typedefs!.typedef = exposed;
    }

    if (webidl["callback-functions"]) filtered["callback-functions"]!["callback-function"] = filterProperties(webidl["callback-functions"]!["callback-function"], isKnownName);
    if (webidl["callback-interfaces"]) filtered["callback-interfaces"]!.interface = filterProperties(webidl["callback-interfaces"]!.interface, isKnownName);
    if (webidl.dictionaries) filtered.dictionaries!.dictionary = filterProperties(webidl.dictionaries.dictionary, isKnownName);
    if (webidl.enums) filtered.enums!.enum = filterProperties(webidl.enums.enum, isKnownName);
    if (webidl.mixins) {
        const mixins = filter(webidl.mixins.mixin, o => exposesTo(o, target));
        filtered.mixins!.mixin = filterProperties(mixins, isKnownName);
    }

    return deepFilterUnexposedTypes(filtered, unexposedTypes);
}

/**
 * Filters unexposed types out from typedefs and
 * removes typedefs that only contains unexposed type names
 * @param typedefs target typedef array
 * @param unexposedTypes type names to be filtered out
 */
function filterTypedefs(typedefs: Browser.TypeDef[], unexposedTypes: Set<string>): { exposed: Browser.TypeDef[], removed: Set<string> } {
    const exposed: Browser.TypeDef[] = [];
    const removed = new Set<string>();

    typedefs.forEach(filterTypedef);
    if (removed.size) {
        const result = filterTypedefs(exposed, removed);
        result.removed.forEach(s => removed.add(s));
        return { exposed: result.exposed, removed }
    }
    else {
        return { exposed, removed };
    }

    function filterTypedef(typedef: Browser.TypeDef) {
        if (typedef["override-type"]) {
            exposed.push(typedef);
        }
        else if (Array.isArray(typedef.type)) {
            const filteredType = filterUnexposedTypeFromUnion(typedef.type, unexposedTypes);
            if (!filteredType.length) {
                removed.add(typedef["new-type"]);
            }
            else {
                exposed.push({ ...typedef, type: flattenType(filteredType) });
            }
        }
        else if (unexposedTypes.has(typedef.type)) {
            removed.add(typedef["new-type"]);
        }
        else {
            exposed.push(typedef);
        }
    }
}

/**
 * Filters out unexposed type names from union types and optional function arguments
 * @param webidl target types
 * @param unexposedTypes type names to be filtered out
 */
function deepFilterUnexposedTypes(webidl: Browser.WebIdl, unexposedTypes: Set<string>) {
    return deepClone(webidl, o => {
        if (Array.isArray(o.type)) {
            return { ...o, type: filterUnexposedTypeFromUnion(o.type, unexposedTypes) }
        }
        if (!o["override-signatures"] && Array.isArray(o.signature)) {
            return { ...o, signature: o.signature.map(filterUnknownTypeFromSignature) };
        }
    });

    function filterUnknownTypeFromSignature(signature: Browser.Signature) {
        if (!signature.param) {
            return signature;
        }
        const param: Browser.Param[] = [];
        for (const p of signature.param) {
            const types = Array.isArray(p.type) ? p.type : [p];
            const filtered = filterUnexposedTypeFromUnion(types, unexposedTypes);
            if (filtered.length >= 1) {
                param.push({ ...p, type: flattenType(filtered) });
            }
            else if (!p.optional) {
                throw new Error("A non-optional parameter has unknown type");
            }
            else {
                // safe to skip
                break;
            }
        }
        return { ...signature, param };
    }
}

function filterUnexposedTypeFromUnion(union: Browser.Typed[], unexposedTypes: Set<string>): Browser.Typed[] {
    const result: Browser.Typed[] = [];
    for (const type of union) {
        if (Array.isArray(type.type)) {
            const filteredUnion = filterUnexposedTypeFromUnion(type.type, unexposedTypes);
            if (filteredUnion.length) {
                result.push({ ...type, type: flattenType(filteredUnion) });
            }
        }
        else if (type["override-type"] || !unexposedTypes.has(type.type)) {
            result.push(type);
        }
    }
    return result;
}

function deepClone<T>(o: T, custom: (o: any) => any): T {
    if (!o || typeof o !== "object") {
        return o;
    }
    if (Array.isArray(o)) {
        return o.map(v => deepClone(v, custom)) as any as T;
    }
    const mapped = custom(o);
    if (mapped !== undefined) {
        return mapped;
    }
    const clone: any = {};
    for (const key of Object.getOwnPropertyNames(o)) {
        clone[key] = deepClone((o as any)[key], custom);
    }
    return clone;
}

function flattenType(type: Browser.Typed[]) {
    if (type.length > 1) {
        return type;
    }
    else if (type.length === 1) {
        return type[0].type;
    }
    throw new Error("Cannot process empty union type");
}
