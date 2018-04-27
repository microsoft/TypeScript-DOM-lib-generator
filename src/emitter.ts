import * as Browser from "./types";
import { mapToArray, distinct, map, toNameMap, mapDefined, arrayToMap, flatMap } from "./helpers";

export const enum Flavor {
    Web,
    Worker,
    ES6Iterators
}

// Note:
// Eventhandler's name and the eventName are not just off by "on".
// For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
type EventHandler = { name: string; eventName: string; eventType: string };

/// Decide which members of a function to emit
enum EmitScope {
    StaticOnly,
    InstanceOnly,
    All
}

const defaultEventType = "Event";
// Extended types used but not defined in the spec
const extendedTypes = new Set(["ArrayBuffer", "ArrayBufferView", "DataView", "Int8Array", "Uint8Array", "Int16Array", "Uint16Array", "Uint8ClampedArray", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]);
const integerTypes = new Set(["byte", "octet", "short", "unsigned short", "long", "unsigned long", "long long", "unsigned long long"]);
const tsKeywords = new Set(["default", "delete", "continue"]);
const extendConflictsBaseTypes: Record<string, { extendType: string[], memberNames: Set<string> }> = {
    "AudioContext": { extendType: ["OfflineContext"], memberNames: new Set(["suspend"]) },
    "HTMLCollection": { extendType: ["HTMLFormControlsCollection"], memberNames: new Set(["namedItem"]) },
};
const eventTypeMap: Record<string, string> = {
    "abort": "UIEvent",
    "complete": "Event",
    "click": "MouseEvent",
    "error": "ErrorEvent",
    "load": "Event",
    "loadstart": "Event",
    "progress": "ProgressEvent",
    "readystatechange": "ProgressEvent",
    "resize": "UIEvent",
    "timeout": "ProgressEvent"
};

// Used to decide if a member should be emitted given its static property and
// the intended scope level.
function matchScope(scope: EmitScope, x: { static?: 1 | undefined }) {
    return scope === EmitScope.All || (scope === EmitScope.StaticOnly) === !!x.static;
}

/// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
function adjustParamName(name: string) {
    return tsKeywords.has(name) ? `_${name}` : name;
}

function getElements<K extends string, T>(a: Record<K, Record<string, T>> | undefined, k: K): T[] {
    return a ? mapToArray(a[k]) : [];
}

function createTextWriter(newLine: string) {
    let output: string;
    let indent: number;
    let lineStart: boolean;
    /** print declarations conflicting with base interface to a side list to write them under a diffrent name later */
    let stack: { content: string, indent: number }[] = [];

    const indentStrings: string[] = ["", "    "];
    function getIndentString(level: number) {
        if (indentStrings[level] === undefined) {
            indentStrings[level] = getIndentString(level - 1) + indentStrings[1];
        }
        return indentStrings[level];
    }

    function write(s: string) {
        if (lineStart) {
            output += getIndentString(indent);
            lineStart = false;
        }
        output += s;
    }

    function reset(): void {
        output = "";
        indent = 0;
        lineStart = true;
        stack = [];
    }

    function writeLine() {
        if (!lineStart) {
            output += newLine;
            lineStart = true;
        }
    }

    reset();

    return {
        reset: reset,

        resetIndent() { indent = 0; },
        increaseIndent() { indent++; },
        decreaseIndent() { indent--; },

        print: write,
        printLine(c: string) { writeLine(); write(c); },

        clearStack() { stack = []; },
        stackIsEmpty() { return stack.length === 0; },
        printLineToStack(content: string) { stack.push({ content, indent }); },
        printStackContent() {
            stack.forEach(e => {
                const oldIndent = indent;
                indent = e.indent;
                this.printLine(e.content);
                indent = oldIndent;
            });
        },

        getResult() { return output; }
    };
}

function isEventHandler(p: Browser.Property) {
    return p.type === "EventHandlerNonNull" || p.type === "EventHandler";
}

export function emitWebIDl(webidl: Browser.WebIdl, flavor: Flavor) {
    // Global print target
    const printer = createTextWriter("\n");

    const pollutor = getElements(webidl.interfaces, "interface").find(i => flavor === Flavor.Web ? !!i["primary-global"] : !!i.global);

    const allNonCallbackInterfaces = getElements(webidl.interfaces, "interface").concat(getElements(webidl.mixins, "mixin"));
    const allInterfaces = getElements(webidl.interfaces, "interface").concat(
        getElements(webidl["callback-interfaces"], "interface"),
        getElements(webidl.mixins, "mixin"));

    const allInterfacesMap = toNameMap(allInterfaces);
    const allLegacyWindowAliases = flatMap(allInterfaces, i => i["legacy-window-alias"]);
    const allDictionariesMap = webidl.dictionaries ? webidl.dictionaries.dictionary : {};
    const allEnumsMap = webidl.enums ? webidl.enums.enum : {};
    const allCallbackFunctionsMap = webidl["callback-functions"] ? webidl["callback-functions"]!["callback-function"] : {};
    const allTypeDefsMap = new Set(webidl.typedefs && webidl.typedefs.typedef.map(td => td["new-type"]));

    /// Event name to event type map
    const eNameToEType = arrayToMap(flatMap(allNonCallbackInterfaces, i => i.events ? i.events.event : []), e => e.name, e => eventTypeMap[e.name] || e.type);

    /// Tag name to element name map
    const tagNameToEleName = getTagNameToElementNameMap();

    /// Interface name to all its implemented / inherited interfaces name list map
    /// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
    const iNameToIDependList = arrayToMap(allNonCallbackInterfaces, i => i.name, i => getExtendList(i.name).concat(getImplementList(i.name)));

    /// Distinct event type list, used in the "createEvent" function
    const distinctETypeList = distinct(
        flatMap(allNonCallbackInterfaces, i => i.events ? i.events.event.map(e => e.type) : [])
            .concat(allNonCallbackInterfaces.filter(i => i.extends === "Event" && i.name.endsWith("Event")).map(i => i.name))
    ).sort();

    /// Interface name to its related eventhandler name list map
    /// Note:
    /// In the xml file, each event handler has
    /// 1. eventhanlder name: "onready", "onabort" etc.
    /// 2. the event name that it handles: "ready", "SVGAbort" etc.
    /// And they don't just differ by an "on" prefix!
    const iNameToEhList = arrayToMap(allInterfaces, i => i.name, i =>
        !i.properties ? [] : mapDefined<Browser.Property, EventHandler>(mapToArray(i.properties.property), p => {
            const eventName = p["event-handler"]!;
            if (eventName === undefined) return undefined;
            const eType = eNameToEType[eventName] || defaultEventType;
            const eventType = eType === "Event" || dependsOn(eType, "Event") ? eType : defaultEventType;
            return { name: p.name, eventName, eventType };
        }));

    // Map of interface.Name -> List of base interfaces with event handlers
    const iNameToEhParents = arrayToMap(allInterfaces, i => i.name, getParentsWithEventHandler);

    return flavor === Flavor.ES6Iterators ? emitES6DomIterators() : emit();

    function getTagNameToElementNameMap() {
        const preferedElementMap: Record<string, string> = {
            "script": "HTMLScriptElement",
            "a": "HTMLAnchorElement",
            "title": "HTMLTitleElement",
            "style": "HTMLStyleElement",
            "td": "HTMLTableDataCellElement",
            "th": "HTMLTableHeaderCellElement"
        };

        function resolveElementConflict(tagName: string, iNames: string[]) {
            const name = preferedElementMap[tagName] || "";
            if (iNames.includes(name)) return name;
            throw new Error("Element conflict occured! Typename: " + tagName);
        }

        const result: Record<string, string> = {};
        for (const i of allNonCallbackInterfaces) {
            if (i.element) {
                for (const e of i.element) {
                    result[e.name] = result[e.name] ? resolveElementConflict(e.name, [result[e.name], i.name]) : i.name;
                }
            }
        }
        return result;
    }

    function getExtendList(iName: string): string[] {
        const i = allInterfacesMap[iName];
        if (!i || !i.extends || i.extends === "Object") return [];
        else return getExtendList(i.extends).concat(i.extends);
    }

    function getImplementList(iName: string) {
        const i = allInterfacesMap[iName];
        return i && i.implements || [];
    }

    function getParentsWithEventHandler(i: Browser.Interface) {
        function getParentEventHandler(i: Browser.Interface): Browser.Interface[] {
            return iNameToEhList[i.name] && iNameToEhList[i.name].length ? [i] : getParentsWithEventHandler(i);
        }

        const extendedParentWithEventHandler = allInterfacesMap[i.extends] && getParentEventHandler(allInterfacesMap[i.extends]) || [];
        const implementedParentsWithEventHandler = i.implements ? flatMap(i.implements, i => getParentEventHandler(allInterfacesMap[i])) : [];
        return extendedParentWithEventHandler.concat(implementedParentsWithEventHandler);
    }

    function getEventTypeInInterface(eName: string, i: Browser.Interface) {
        if (i.events) {
            const event = i.events.event.find(e => e.name === eName);
            if (event && event.type) {
                return event.type;
            }
        }
        return eNameToEType[eName] || "Event";
    }

    /// Determine if interface1 depends on interface2
    function dependsOn(i1Name: string, i2Name: string) {
        return iNameToIDependList[i1Name]
            ? iNameToIDependList[i1Name].includes(i2Name)
            : i2Name === "Object";
    }

    // Some params have the type of "(DOMString or DOMString [] or Number)"
    // we need to transform it into [“DOMString", "DOMString []", "Number"]
    function decomposeTypes(t: string) {
        return t.replace(/[\(\)]/g, "").split(" or ");
    }

    /// Get typescript type using object dom type, object name, and it's associated interface name
    function convertDomTypeToTsType(obj: Browser.Typed): string {
        if (obj["override-type"]) return obj["override-type"]!;
        if (!obj.type) throw new Error("Missing type " + JSON.stringify(obj));
        const type = convertDomTypeToTsTypeWorker(obj);
        return type.nullable ? makeNullable(type.name) : type.name;
    }

    function convertDomTypeToTsTypeWorker(obj: Browser.Typed): { name: string; nullable: boolean } {
        let type;
        if (typeof obj.type === "string") {
            type = { name: convertDomTypeToTsTypeSimple(obj.type), nullable: !!obj.nullable };
        }
        else {
            const types = obj.type.map(convertDomTypeToTsTypeWorker);
            const isAny = types.find(t => t.name === "any");
            if (isAny) {
                type = {
                    name: "any",
                    nullable: false
                };
            }
            else {
                type = {
                    name: types.map(t => t.name).join(" | "),
                    nullable: !!types.find(t => t.nullable)
                };
            }
        }

        const subtypes = arrayify(obj.subtype).map(convertDomTypeToTsTypeWorker);
        const subtypeString = subtypes.map(subtype => subtype.nullable ? makeNullable(subtype.name) : subtype.name).join(", ");

        return {
            name: (type.name === "Array" && subtypeString) ? makeArrayType(subtypeString, obj) : `${type.name}${subtypeString ? `<${subtypeString}>` : ""}`,
            nullable: type.nullable
        };
    }

    function makeArrayType(elementType: string, obj: Browser.Typed): string {
        if (obj.subtype && !Array.isArray(obj.subtype) && obj.subtype.type === "float") {
            return "number[] | Float32Array";
        }

        return elementType.includes("|") ? `(${elementType})[]` : `${elementType}[]`;
    }

    function arrayify(obj: undefined | Browser.Typed | Browser.Typed[]) {
        if (!obj) {
            return [];
        }
        if (!Array.isArray(obj)) {
            return [obj];
        }
        return obj;
    }

    function convertDomTypeToTsTypeSimple(objDomType: string): string {
        switch (objDomType) {
            case "DOMHighResTimeStamp": return "number";
            case "DOMTimeStamp": return "number";
            case "EventListener": return "EventListenerOrEventListenerObject";
            case "double":
            case "unrestricted double": return "number";
            case "float": return "number";
            case "object": return "any";
            case "ByteString":
            case "DOMString":
            case "USVString": return "string";
            case "sequence": return "Array";
            case "record": return "Record";
            case "FrozenArray": return "ReadonlyArray";
            case "WindowProxy": return "Window";
            case "any":
            case "boolean":
            case "BufferSource":
            case "Date":
            case "Function":
            case "Promise":
            case "void": return objDomType;
            default:
                if (integerTypes.has(objDomType)) return "number";
                if (extendedTypes.has(objDomType)) return objDomType;
                if (flavor === Flavor.Worker && (objDomType === "Element" || objDomType === "Window" || objDomType === "Document" || objDomType === "AbortSignal" || objDomType === "HTMLFormElement")) return "object";
                if (flavor === Flavor.Web && objDomType === "Client") return "object";
                // Name of an interface / enum / dict. Just return itself
                if (allInterfacesMap[objDomType] ||
                    allLegacyWindowAliases.includes(objDomType) ||
                    allCallbackFunctionsMap[objDomType] ||
                    allDictionariesMap[objDomType] ||
                    allEnumsMap[objDomType]) return objDomType;
                // Name of a type alias. Just return itself
                if (allTypeDefsMap.has(objDomType)) return objDomType;
                // Union types
                if (objDomType.includes(" or ")) {
                    const allTypes: string[] = decomposeTypes(objDomType).map(t => convertDomTypeToTsTypeSimple(t.replace("?", "")));
                    return allTypes.includes("any") ? "any" : allTypes.join(" | ");
                }
                else {
                    // Check if is array type, which looks like "sequence<DOMString>"
                    const unescaped = objDomType; // System.Web.HttpUtility.HtmlDecode(objDomType)
                    const genericMatch = /^(\w+)<([\w, <>]+)>$/;
                    const match = genericMatch.exec(unescaped);
                    if (match) {
                        const tName: string = convertDomTypeToTsTypeSimple(match[1]);
                        const paramName: string = convertDomTypeToTsTypeSimple(match[2]);
                        return tName === "Array" ? paramName + "[]" : tName + "<" + paramName + ">";
                    }
                    if (objDomType.endsWith("[]")) {
                        return convertDomTypeToTsTypeSimple(objDomType.replace("[]", "").trim()) + "[]";
                    }
                }
        }

        throw new Error("Unknown DOM type: " + objDomType);
    }

    function makeNullable(originalType: string) {
        switch (originalType) {
            case "any": return "any";
            case "void": return "void";
            default:
                if (originalType.includes("| null")) return originalType;
                else if (originalType.includes("=>")) return "(" + originalType + ") | null";
                else return originalType + " | null";
        }
    }

    function convertDomTypeToNullableTsType(obj: Browser.Typed) {
        const resolvedType = convertDomTypeToTsType(obj);
        return obj.nullable ? makeNullable(resolvedType) : resolvedType;
    }

    function emitConstant(c: Browser.Constant) {
        printer.printLine(`readonly ${c.name}: ${convertDomTypeToTsType(c)};`);
    }

    function emitConstants(i: Browser.Interface) {
        if (i.constants) {
            mapToArray(i.constants.constant)
                .sort(compareName)
                .forEach(emitConstant);
        }
    }

    function matchSingleParamMethodSignature(m: Browser.Method, expectedMName: string, expectedMType: string, expectedParamType: string) {
        return expectedMName === m.name &&
            m.signature && m.signature.length === 1 &&
            convertDomTypeToNullableTsType(m.signature[0]) === expectedMType &&
            m.signature[0].param && m.signature[0].param!.length === 1 &&
            convertDomTypeToTsType(m.signature[0].param![0]) === expectedParamType;
    }

    function processInterfaceType(i: Browser.Interface | Browser.Dictionary, name: string) {
        return i["type-parameters"] ? name + "<" + i["type-parameters"]!.join(", ") + ">" : name;
    }

    /// Emit overloads for the createElement method
    function emitCreateElementOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "createElement", "Element", "string")) {
            printer.printLine("createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];");
            printer.printLine("createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;");
        }
    }

    /// Emit overloads for the getElementsByTagName method
    function emitGetElementsByTagNameOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "getElementsByTagName", "NodeList", "string")) {
            printer.printLine(`getElementsByTagName<K extends keyof HTMLElementTagNameMap>(${m.signature[0].param![0].name}: K): NodeListOf<HTMLElementTagNameMap[K]>;`);
            printer.printLine(`getElementsByTagName<K extends keyof SVGElementTagNameMap>(${m.signature[0].param![0].name}: K): NodeListOf<SVGElementTagNameMap[K]>;`);
            printer.printLine(`getElementsByTagName(${m.signature[0].param![0].name}: string): NodeListOf<Element>;`);
        }
    }

    /// Emit overloads for the querySelector method
    function emitQuerySelectorOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelector", "Element | null", "string")) {
            printer.printLine("querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;");
            printer.printLine("querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;");
            printer.printLine("querySelector<E extends Element = Element>(selectors: string): E | null;");
        }
    }

    /// Emit overloads for the querySelectorAll method
    function emitQuerySelectorAllOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelectorAll", "NodeList", "string")) {
            printer.printLine("querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;");
            printer.printLine("querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;");
            printer.printLine("querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;");
        }
    }

    function emitHTMLElementTagNameMap() {
        printer.printLine("interface HTMLElementTagNameMap {");
        printer.increaseIndent();
        for (const e of Object.keys(tagNameToEleName).sort()) {
            const value = tagNameToEleName[e];
            if (iNameToIDependList[value] && !iNameToIDependList[value].includes("SVGElement")) {
                printer.printLine(`"${e.toLowerCase()}": ${value};`);
            }
        }
        printer.decreaseIndent();
        printer.printLine("}");
        printer.printLine("");
    }

    function emitSVGElementTagNameMap() {
        printer.printLine("interface SVGElementTagNameMap {");
        printer.increaseIndent();
        for (const e of Object.keys(tagNameToEleName).sort()) {
            const value = tagNameToEleName[e];
            if (iNameToIDependList[value] && iNameToIDependList[value].includes("SVGElement")) {
                printer.printLine(`"${e}": ${value};`);
            }
        }
        printer.decreaseIndent();
        printer.printLine("}");
        printer.printLine("");
    }

    function emitElementTagNameMap() {
        printer.printLine("/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */");
        printer.printLine("interface ElementTagNameMap extends HTMLElementTagNameMap, SVGElementTagNameMap { }");
        printer.printLine("");
    }

    /// Emit overloads for the createEvent method
    function emitCreateEventOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "createEvent", "Event", "string")) {
            // Emit plurals. For example, "Events", "MutationEvents"
            const hasPlurals = ["Event", "MutationEvent", "MouseEvent", "SVGZoomEvent", "UIEvent"];
            for (const x of distinctETypeList) {
                printer.printLine(`createEvent(eventInterface: "${x}"): ${x};`);
                if (hasPlurals.includes(x)) {
                    printer.printLine(`createEvent(eventInterface: "${x}s"): ${x};`);
                }
            }
            printer.printLine("createEvent(eventInterface: string): Event;");
        }
    }

    /// Generate the parameters string for function signatures
    function paramsToString(ps: Browser.Param[]) {
        function paramToString(p: Browser.Param) {
            const isOptional = !p.variadic && p.optional;
            const pType = isOptional ? convertDomTypeToTsType(p) : convertDomTypeToNullableTsType(p);
            return (p.variadic ? "..." : "") +
                adjustParamName(p.name) +
                (isOptional ? "?: " : ": ") +
                pType +
                (p.variadic ? "[]" : "");
        }
        return ps.map(paramToString).join(", ");
    }

    function emitCallBackInterface(i: Browser.Interface) {
        if (i.name === "EventListener") {
            printer.printLine(`interface ${i.name} {`);
            printer.increaseIndent();
            printer.printLine("(evt: Event): void;");
            printer.decreaseIndent();
            printer.printLine("}");
        }
        else {
            const methods = mapToArray(i.methods.method);
            const m = methods[0];
            const overload = m.signature[0];
            const paramsString = overload.param ? paramsToString(overload.param) : "";
            const returnType = overload.type ? convertDomTypeToTsType(overload) : "void";
            printer.printLine(`type ${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType}; };`);
        }
        printer.printLine("");
    }

    function emitCallBackFunction(cb: Browser.CallbackFunction) {
        printer.printLine(`interface ${cb.name} {`);
        printer.increaseIndent();
        emitSignatures(cb, "", "", s => printer.printLine(s));
        printer.decreaseIndent();
        printer.printLine("}");
        printer.printLine("");
    }

    function emitCallBackFunctions() {
        getElements(webidl["callback-functions"], "callback-function")
            .sort(compareName)
            .forEach(emitCallBackFunction);
    }

    function emitEnum(e: Browser.Enum) {
        printer.printLine(`type ${e.name} = ${e.value.map(v => `"${v}"`).join(" | ")};`);
    }

    function emitEnums() {
        getElements(webidl.enums, "enum")
            .sort(compareName)
            .forEach(emitEnum);
    }

    function emitEventHandlerThis(prefix: string, i: Browser.Interface) {
        if (prefix === "") {
            return `this: ${i.name}, `;
        }
        else {
            return pollutor ? `this: ${pollutor.name}, ` : "";
        }
    }

    // A covariant  EventHandler is one that is defined in a parent interface as then redefined in current interface with a more specific argument types
    // These patterns are unsafe, and flagged as error under --strictFunctionTypes.
    // Here we know the property is already defined on the interface, we elide its declaration if the parent has the same handler defined
    function isCovariantEventHandler(i: Browser.Interface, p: Browser.Property) {
        return isEventHandler(p) &&
            iNameToEhParents[i.name] && iNameToEhParents[i.name].length > 0 &&
            !!iNameToEhParents[i.name].find(
                i => iNameToEhList[i.name] && iNameToEhList[i.name].length > 0 &&
                    !!iNameToEhList[i.name].find(e => e.name === p.name));
    }

    function emitProperty(prefix: string, i: Browser.Interface, emitScope: EmitScope, p: Browser.Property, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (conflictedMembers.has(p.name)) {
                printer.printLineToStack(content);
            }
            else {
                printer.printLine(content);
            }
        }

        emitComments(p, printLine);

        // Treat window.name specially because of https://github.com/Microsoft/TypeScript/issues/9850
        if (p.name === "name" && i.name === "Window" && emitScope === EmitScope.All) {
            printLine("declare const name: never;");
        }
        else {
            let pType: string;
            if (p["override-type"]) {
                pType = p["override-type"]!;
            }
            else if (isEventHandler(p)) {
                // Sometimes event handlers with the same name may actually handle different
                // events in different interfaces. For example, "onerror" handles "ErrorEvent"
                // normally, but in "SVGSVGElement" it handles "SVGError" event instead.
                const eType = p["event-handler"] ? getEventTypeInInterface(p["event-handler"]!, i) : "Event";
                pType = `(${emitEventHandlerThis(prefix, i)}ev: ${eType}) => any`;
                if (p.type === "EventHandler") {
                    pType = `(${pType}) | null`;
                }
            }
            else {
                pType = convertDomTypeToTsType(p);
            }
            const requiredModifier = p.required === undefined || p.required === 1 ? "" : "?";
            pType = p.nullable ? makeNullable(pType) : pType;
            const readOnlyModifier = p["read-only"] === 1 && prefix === "" ? "readonly " : "";
            printLine(`${prefix}${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`);
        }
    }

    function emitComments(entity: { comment?: string; deprecated?: 1 }, print: (s: string) => void) {
        if (entity.comment) {
            print(entity.comment);
        }
        if (entity.deprecated) {
            print(`/** @deprecated */`);
        }
    }

    function emitProperties(prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        if (i.properties) {
            mapToArray(i.properties.property)
                .filter(m => matchScope(emitScope, m))
                .filter(p => !isCovariantEventHandler(i, p))
                .sort(compareName)
                .forEach(p => emitProperty(prefix, i, emitScope, p, conflictedMembers));
        }
    }

    function emitMethod(prefix: string, _i: Browser.Interface, m: Browser.Method, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (m.name && conflictedMembers.has(m.name)) {
                printer.printLineToStack(content);
            }
            else {
                printer.printLine(content);
            }
        }

        emitComments(m, printLine);

        switch (m.name) {
            case "createElement": return emitCreateElementOverloads(m);
            case "createEvent": return emitCreateEventOverloads(m);
            case "getElementsByTagName": return emitGetElementsByTagNameOverloads(m);
            case "querySelector": return emitQuerySelectorOverloads(m);
            case "querySelectorAll": return emitQuerySelectorAllOverloads(m);
        }
        emitSignatures(m, prefix, m.name, printLine);
    }

    function emitSignature(s: Browser.Signature, prefix: string | undefined, name: string | undefined, printLine: (s: string) => void) {
        const paramsString = s.param ? paramsToString(s.param) : "";
        let returnType = convertDomTypeToTsType(s);
        returnType = s.nullable ? makeNullable(returnType) : returnType;
        printLine(`${prefix || ""}${name || ""}(${paramsString}): ${returnType};`);
    }

    function emitSignatures(method: { signature?: Browser.Signature[], "override-signatures"?: string[], "additional-signatures"?: string[] }, prefix: string, name: string, printLine: (s: string) => void) {
        if (method["override-signatures"]) {
            method["override-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
        }
        else if (method.signature) {
            if (method["additional-signatures"]) {
                method["additional-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
            }
            method.signature.forEach(sig => emitSignature(sig, prefix, name, printLine));
        }
    }

    function emitMethods(prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
        // Otherwise, this is EventTarget.addEventListener, we want to keep that.
        if (i.methods) {
            mapToArray(i.methods.method)
                .filter(m => matchScope(emitScope, m) && !(prefix !== "" && (m.name === "addEventListener" || m.name === "removeEventListener")))
                .sort(compareName)
                .forEach(m => emitMethod(prefix, i, m, conflictedMembers));
        }

        // The window interface inherited some methods from "Object",
        // which need to explicitly exposed
        if (i.name === "Window" && prefix === "declare function ") {
            printer.printLine("declare function toString(): string;");
        }
    }

    // Emit forEach for iterators
    function emitIteratorForEach(i: Browser.Interface) {
        if (!i.iterator) {
            return;
        }
        const subtype = i.iterator.subtype.map(convertDomTypeToTsType);
        const value = subtype[subtype.length - 1];
        const key = subtype.length > 1 ? subtype[0] :
            i.iterator.type === "iterable" ? "number" : value;
        const name = i.name.replace(/ extends \w+/, "");
        printer.printLine(`forEach(callbackfn: (value: ${value}, key: ${key}, parent: ${name}) => void, thisArg?: any): void;`);
    }

    /// Emit the properties and methods of a given interface
    function emitMembers(prefix: string, emitScope: EmitScope, i: Browser.Interface) {
        const conflictedMembers = extendConflictsBaseTypes[i.name] ? extendConflictsBaseTypes[i.name].memberNames : new Set();
        emitProperties(prefix, emitScope, i, conflictedMembers);
        const methodPrefix = prefix.startsWith("declare var") ? "declare function " : "";
        emitMethods(methodPrefix, emitScope, i, conflictedMembers);
        if (emitScope === EmitScope.InstanceOnly) {
            emitIteratorForEach(i);
        }
    }

    /// Emit all members of every interfaces at the root level.
    /// Called only once on the global polluter object
    function emitAllMembers(i: Browser.Interface) {
        emitMembers(/*prefix*/ "declare var ", EmitScope.All, i);

        for (const relatedIName of iNameToIDependList[i.name]) {
            const i = allInterfacesMap[relatedIName];
            if (i) {
                emitAllMembers(i);
            }
        }
    }

    function emitEventHandlers(prefix: string, i: Browser.Interface) {
        const fPrefix = prefix.startsWith("declare var") ? "declare function " : "";

        for (const addOrRemove of ["add", "remove"]) {
            const optionsType = addOrRemove === "add" ? "AddEventListenerOptions" : "EventListenerOptions";
            if (tryEmitTypedEventHandlerForInterface(addOrRemove, optionsType)) {
                // only emit the string event handler if we just emited a typed handler
                printer.printLine(`${fPrefix}${addOrRemove}EventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ${optionsType}): void;`);
            }
        }

        return;

        function emitTypedEventHandler(prefix: string, addOrRemove: string, iParent: Browser.Interface, optionsType: string) {
            printer.printLine(`${prefix}${addOrRemove}EventListener<K extends keyof ${iParent.name}EventMap>(type: K, listener: (this: ${i.name}, ev: ${iParent.name}EventMap[K]) => any, options?: boolean | ${optionsType}): void;`);
        }

        function tryEmitTypedEventHandlerForInterface(addOrRemove: string, optionsType: string) {
            if (iNameToEhList[i.name] && iNameToEhList[i.name].length) {
                emitTypedEventHandler(fPrefix, addOrRemove, i, optionsType);
                return true;
            }
            if (iNameToEhParents[i.name] && iNameToEhParents[i.name].length) {
                iNameToEhParents[i.name]
                    .sort(compareName)
                    .forEach(i => emitTypedEventHandler(fPrefix, addOrRemove, i, optionsType));
                return true;
            }
            return false;
        }
    }

    function emitConstructorSignature(i: Browser.Interface) {
        const constructor = typeof i.constructor === "object" ? i.constructor : undefined;

        // Emit constructor signature
        if (constructor) {
            emitComments(constructor, s => printer.print(s));
            emitSignatures(constructor, "", "new", s => printer.printLine(s));
        }
        else {
            printer.printLine(`new(): ${i.name};`);
        }
    }

    function emitConstructor(i: Browser.Interface) {
        printer.printLine(`declare var ${i.name}: {`);
        printer.increaseIndent();

        printer.printLine(`prototype: ${i.name};`);
        emitConstructorSignature(i);
        emitConstants(i);
        emitMembers(/*prefix*/ "", EmitScope.StaticOnly, i);

        printer.decreaseIndent();
        printer.printLine("};");
        printer.printLine("");

        if (flavor === Flavor.Web && i["legacy-window-alias"]) {
            for (const alias of i["legacy-window-alias"]!) {
                printer.printLine(`type ${alias} = ${i.name};`);
                printer.printLine(`declare var ${alias}: typeof ${i.name};`);
                printer.printLine("");
            }
        }
    }

    function emitNamedConstructor(i: Browser.Interface) {
        const nc = i["named-constructor"];
        if (nc) {
            printer.printLine(`declare var ${nc.name}: {`);
            printer.increaseIndent();
            nc.signature.forEach(s => printer.printLine(`new(${s.param ? paramsToString(s.param) : ""}): ${i.name};`));
            printer.decreaseIndent();
            printer.printLine(`};`);
        }
    }

    /// Emit all the named constructors at root level
    function emitNamedConstructors() {
        getElements(webidl.interfaces, "interface")
            .sort(compareName)
            .forEach(emitNamedConstructor);
    }

    function emitInterfaceDeclaration(i: Browser.Interface) {
        function processIName(iName: string) {
            return extendConflictsBaseTypes[iName] ? `${iName}Base` : iName;
        }

        const processedIName = processIName(i.name);

        if (processedIName !== i.name) {
            printer.printLineToStack(`interface ${processInterfaceType(i, i.name)} extends ${processedIName} {`);
        }

        printer.printLine(`interface ${processInterfaceType(i, processedIName)}`);

        const finalExtends = distinct([i.extends || "Object"].concat(i.implements || [])
            .filter(i => i !== "Object")
            .map(processIName));

        if (finalExtends && finalExtends.length) {
            printer.print(` extends ${finalExtends.join(", ")}`);
        }
        printer.print(" {");
    }

    /// To decide if a given method is an indexer and should be emited
    function shouldEmitIndexerSignature(i: Browser.Interface, m: Browser.Method) {
        if (m.getter && m.signature && m.signature[0].param && m.signature[0].param!.length === 1) {
            // TypeScript array indexer can only be number or string
            // for string, it must return a more generic type then all
            // the other properties, following the Dictionary pattern
            switch (convertDomTypeToTsType(m.signature[0].param![0])) {
                case "number": return true;
                case "string":
                    if (convertDomTypeToTsType(m.signature[0]) === "any") {
                        return true;
                    }
                    const sig = m.signature[0];
                    const mTypes = distinct(i.methods && map(i.methods.method, m => m.signature && m.signature.length && m.signature[0].type || "void").filter(t => t !== "void") || []);
                    const amTypes = distinct(i["anonymous-methods"] && i["anonymous-methods"]!.method.map(m => m.signature[0].type).filter(t => t !== "void") || []); // |>  Array.distinct
                    const pTypes = distinct(i.properties && map(i.properties.property, m => m.type).filter(t => t !== "void") || []); // |>  Array.distinct

                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) return amTypes[0] === sig.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
            }
        }
        return false;
    }

    function emitIndexers(emitScope: EmitScope, i: Browser.Interface) {
        if (i["overide-index-signatures"]) {
            i["overide-index-signatures"]!.forEach(s => printer.printLine(`${s};`));
        }
        else {
            // The indices could be within either Methods or Anonymous Methods
            mapToArray(i.methods && i.methods.method)
                .concat(i["anonymous-methods"] && i["anonymous-methods"]!.method || [])
                .filter(m => shouldEmitIndexerSignature(i, m) && matchScope(emitScope, m))
                .forEach(m => {
                    const indexer = (m.signature && m.signature.length && m.signature[0].param && m.signature[0].param!.length) ? m.signature[0].param![0] : undefined;
                    if (indexer) {
                        printer.printLine(`[${indexer.name}: ${convertDomTypeToTsType(indexer)}]: ${convertDomTypeToTsType({
                            type: m.signature[0].type,
                            subtype: m.signature[0].subtype,
                            nullable: undefined
                        })};`);
                    }
                });
        }
    }

    function emitInterfaceEventMap(i: Browser.Interface) {
        function emitInterfaceEventMapEntry(eHandler: EventHandler) {
            printer.printLine(`"${eHandler.eventName}": ${getEventTypeInInterface(eHandler.eventName, i)};`);
        }

        if (iNameToEhList[i.name] && iNameToEhList[i.name].length) {
            printer.printLine(`interface ${i.name}EventMap`);
            if (iNameToEhParents[i.name] && iNameToEhParents[i.name].length) {
                const extend = iNameToEhParents[i.name].map(i => i.name + "EventMap");
                printer.print(` extends ${extend.join(", ")}`);
            }
            printer.print(" {");
            printer.increaseIndent();
            iNameToEhList[i.name]
                .sort(compareName)
                .forEach(emitInterfaceEventMapEntry);
            printer.decreaseIndent();
            printer.printLine("}");
            printer.printLine("");
        }
    }

    function emitInterface(i: Browser.Interface) {
        printer.clearStack();
        emitInterfaceEventMap(i);

        printer.resetIndent();
        emitInterfaceDeclaration(i);
        printer.increaseIndent();

        emitMembers(/*prefix*/ "", EmitScope.InstanceOnly, i);
        emitConstants(i);
        emitEventHandlers(/*prefix*/ "", i);
        emitIndexers(EmitScope.InstanceOnly, i);

        printer.decreaseIndent();
        printer.printLine("}");
        printer.printLine("");

        if (!printer.stackIsEmpty()) {
            printer.printStackContent();
            printer.printLine("}");
            printer.printLine("");
        }
    }

    function emitStaticInterface(i: Browser.Interface) {
        // Some types are static types with non-static members. For example,
        // NodeFilter is a static method itself, however it has an "acceptNode" method
        // that expects the user to implement.
        const hasNonStaticMethod = i.methods && !!mapToArray(i.methods.method).find(m => !m.static);
        const hasProperty = i.properties && mapToArray(i.properties.property).find(p => !p.static);
        const hasNonStaticMember = hasNonStaticMethod || hasProperty;

        // For static types with non-static members, we put the non-static members into an
        // interface, and put the static members into the object literal type of 'declare var'
        // For static types with only static members, we put everything in the interface.
        // Because in the two cases the interface contains different things, it might be easier to
        // read to separate them into two functions.
        function emitStaticInterfaceWithNonStaticMembers() {
            printer.resetIndent();
            emitInterfaceDeclaration(i);
            printer.increaseIndent();

            emitMembers(/*prefix*/ "", EmitScope.InstanceOnly, i);
            emitEventHandlers(/*prefix*/ "", i);
            emitIndexers(EmitScope.InstanceOnly, i);

            printer.decreaseIndent();
            printer.printLine("}");
            printer.printLine("");
            printer.printLine(`declare var ${i.name}: {`);
            printer.increaseIndent();
            emitConstants(i);
            emitMembers(/*prefix*/ "", EmitScope.StaticOnly, i);
            printer.decreaseIndent();
            printer.printLine("};");
            printer.printLine("");
        }

        function emitPureStaticInterface() {
            printer.resetIndent();
            emitInterfaceDeclaration(i);
            printer.increaseIndent();

            emitMembers(/*prefix*/ "", EmitScope.StaticOnly, i);
            emitConstants(i);
            emitEventHandlers(/*prefix*/ "", i);
            emitIndexers(EmitScope.StaticOnly, i);
            printer.decreaseIndent();
            printer.printLine("}");
            printer.printLine(`declare var ${i.name}: ${i.name};`);
            printer.printLine("");
        }

        if (hasNonStaticMember) {
            emitStaticInterfaceWithNonStaticMembers();
        }
        else {
            emitPureStaticInterface();
        }
    }

    function emitNonCallbackInterfaces() {
        for (const i of allNonCallbackInterfaces.sort(compareName)) {
            // If the static attribute has a value, it means the type doesn't have a constructor
            if (i.static) {
                emitStaticInterface(i);
            }
            else if (i["no-interface-object"]) {
                emitInterface(i);
            }
            else {
                emitInterface(i);
                emitConstructor(i);
            }
        }
    }

    function emitDictionary(dict: Browser.Dictionary) {
        if (!dict.extends || dict.extends === "Object") {
            printer.printLine(`interface ${processInterfaceType(dict, dict.name)} {`);
        }
        else {
            printer.printLine(`interface ${processInterfaceType(dict, dict.name)} extends ${dict.extends} {`);
        }
        printer.increaseIndent();
        if (dict.members) {
            mapToArray(dict.members.member)
                .sort(compareName)
                .forEach(m => printer.printLine(`${m.name}${m.required === 1 ? "" : "?"}: ${convertDomTypeToTsType(m)};`));
        }
        printer.decreaseIndent();
        printer.printLine("}");
        printer.printLine("");
    }

    function emitDictionaries() {
        getElements(webidl.dictionaries, "dictionary")
            .sort(compareName)
            .forEach(emitDictionary);
    }

    function emitTypeDef(typeDef: Browser.TypeDef) {
        printer.printLine(`type ${typeDef["new-type"]} = ${convertDomTypeToTsType(typeDef)};`);
    }

    function emitTypeDefs() {
        if (webidl.typedefs) {
            webidl.typedefs.typedef
                .forEach(emitTypeDef);
        }
    }

    function compareName(c1: { name: string }, c2: { name: string }) {
        return c1.name < c2.name ? -1 : c1.name > c2.name ? 1 : 0;
    }

    function emit() {
        printer.reset();
        printer.printLine("/////////////////////////////");
        if (flavor === Flavor.Worker) {
            printer.printLine("/// Worker APIs");
        }
        else {
            printer.printLine("/// DOM APIs");
        }
        printer.printLine("/////////////////////////////");
        printer.printLine("");

        emitDictionaries();
        getElements(webidl["callback-interfaces"], "interface")
            .sort(compareName)
            .forEach(i => emitCallBackInterface(i));
        emitNonCallbackInterfaces();

        // // Add missed interface definition from the spec
        // InputJson.getAddedItems InputJson.Interface flavor |> Array.iter EmitAddedInterface

        printer.printLine("declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;");
        printer.printLine("");

        emitCallBackFunctions();

        if (flavor !== Flavor.Worker) {
            emitHTMLElementTagNameMap();
            emitSVGElementTagNameMap();
            emitElementTagNameMap();
            emitNamedConstructors();
        }

        if (pollutor) {
            emitAllMembers(pollutor);
            emitEventHandlers("declare var ", pollutor);
        }

        emitTypeDefs();
        emitEnums();

        return printer.getResult();
    }

    function emitIterator(i: Browser.Interface) {

        // check anonymous unsigned long getter and length property
        const isIterableGetter = (m: Browser.Method) =>
            m.getter === 1 && !!m.signature.length && !!m.signature[0].param && m.signature[0].param!.length === 1 && typeof m.signature[0].param![0].type === "string" && integerTypes.has(<string>m.signature[0].param![0].type);

        function findIterableGetter() {
            const anonymousGetter = i["anonymous-methods"] && i["anonymous-methods"]!.method.find(isIterableGetter);

            if (anonymousGetter) return anonymousGetter;
            else if (i.methods) return mapToArray(i.methods.method).find(isIterableGetter);
            else return undefined;
        }

        function findLengthProperty(p: Browser.Property) {
            return p.name === "length" && typeof p.type === "string" && integerTypes.has(p.type);
        }

        function getIteratorSubtypes() {
            if (i.iterator) {
                if (i.iterator.subtype.length === 1) {
                    return [convertDomTypeToTsType(i.iterator.subtype[0])];
                }
                return i.iterator.subtype.map(convertDomTypeToTsType);
            }
            else if (i.name !== "Window" && i.properties) {
                const iterableGetter = findIterableGetter();
                const lengthProperty = mapToArray(i.properties.property).find(findLengthProperty);
                if (iterableGetter && lengthProperty) {
                    return [convertDomTypeToTsType({ type: iterableGetter.signature[0].type })];
                }
            }
        }

        function stringifySingleOrTupleTypes(types: string[]) {
            if (types.length === 1) {
                return types[0]
            }
            return `[${types.join(", ")}]`;
        }

        function emitIterableDeclarationMethods(subtypes: string[]) {
            let [keyType, valueType] = subtypes;
            if (!valueType) {
                valueType = keyType;
                keyType = "number";
            }
            printer.printLine(`entries(): IterableIterator<[${keyType}, ${valueType}]>;`);
            printer.printLine(`keys(): IterableIterator<${keyType}>;`);
            printer.printLine(`values(): IterableIterator<${valueType}>;`);
        }

        function getIteratorExtends(iterator: Browser.Iterator | undefined, subtypes: string[]) {
            if (!iterator) {
                return "";
            }
            const base = iterator.type === "maplike" ? `Map<${subtypes[0]}, ${subtypes[1]}>` :
                iterator.type === "setlike" ? `Set<${subtypes[0]}>` : undefined;
            if (!base) {
                return "";
            }
            const result = iterator.readonly ? `Readonly${base}` : base;
            return `extends ${result} `;
        }

        const subtypes = getIteratorSubtypes();
        if (subtypes) {
            const iteratorExtends = getIteratorExtends(i.iterator, subtypes);
            const name = extendConflictsBaseTypes[i.name] ? `${i.name}Base` : i.name;
            printer.printLine(`interface ${name} ${iteratorExtends}{`);
            printer.increaseIndent();
            if (!iteratorExtends) {
                printer.printLine(`[Symbol.iterator](): IterableIterator<${stringifySingleOrTupleTypes(subtypes)}>`);
            }
            if (i.iterator && i.iterator.type === "iterable") {
                emitIterableDeclarationMethods(subtypes);
            }
            printer.decreaseIndent();
            printer.printLine("}");
            printer.printLine("");
        }
    }

    function emitES6DomIterators() {
        printer.reset();
        printer.printLine("/////////////////////////////");
        printer.printLine("/// DOM ES6 APIs");
        printer.printLine("/////////////////////////////");
        printer.printLine("");

        allInterfaces
            .sort(compareName)
            .forEach(emitIterator);

        return printer.getResult();
    }
}
