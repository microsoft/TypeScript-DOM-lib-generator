import * as Browser from "./types";
import {
  mapToArray,
  distinct,
  map,
  toNameMap,
  mapDefined,
  arrayToMap,
  integerTypes,
  baseTypeConversionMap,
} from "./helpers";
import { collectLegacyNamespaceTypes } from "./legacy-namespace";

export const enum Flavor {
  Window,
  Worker,
}

// Note:
// Eventhandler's name and the eventName are not just off by "on".
// For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
type EventHandler = { name: string; eventName: string; eventType: string };

/// Decide which members of a function to emit
enum EmitScope {
  StaticOnly,
  InstanceOnly,
  All,
}

const defaultEventType = "Event";
const tsKeywords = new Set(["default", "delete", "continue"]);
const extendConflictsBaseTypes: Record<
  string,
  { extendType: string[]; memberNames: Set<string> }
> = {
  HTMLCollection: {
    extendType: ["HTMLFormControlsCollection"],
    memberNames: new Set(["namedItem"]),
  },
};
const eventTypeMap: Record<string, string> = {
  abort: "UIEvent",
  complete: "Event",
  click: "MouseEvent",
  error: "ErrorEvent",
  load: "Event",
  loadstart: "Event",
  progress: "ProgressEvent",
  readystatechange: "ProgressEvent",
  resize: "UIEvent",
  timeout: "ProgressEvent",
};

// Namespaces that have been in form of interfaces for years
// and can't be converted to namespaces without breaking type packages
const namespacesAsInterfaces = ["console"];

// Used to decide if a member should be emitted given its static property and
// the intended scope level.
function matchScope(scope: EmitScope, x: { static?: 1 | undefined }) {
  return (
    scope === EmitScope.All || (scope === EmitScope.StaticOnly) === !!x.static
  );
}

/// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
function adjustParamName(name: string) {
  return tsKeywords.has(name) ? `_${name}` : name;
}

function getElements<K extends string, T>(
  a: Record<K, Record<string, T>> | undefined,
  k: K
): T[] {
  return a ? mapToArray(a[k]) : [];
}

function createTextWriter(newLine: string) {
  let output: string;
  let indent: number;
  let lineStart: boolean;
  /** print declarations conflicting with base interface to a side list to write them under a different name later */
  let stack: { content: string; indent: number }[] = [];

  function getIndentString(level: number) {
    return "    ".repeat(level);
  }

  function write(s: string) {
    if (s && lineStart) {
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

  function endLine() {
    output += newLine;
    lineStart = true;
  }

  reset();

  return {
    reset,

    increaseIndent() {
      indent++;
    },
    decreaseIndent() {
      indent--;
    },

    endLine,
    print: write,
    printLine(c: string) {
      write(c);
      endLine();
    },

    clearStack() {
      stack = [];
    },
    stackIsEmpty() {
      return stack.length === 0;
    },
    printLineToStack(content: string) {
      stack.push({ content, indent });
    },
    printStackContent() {
      stack.forEach((e) => {
        const oldIndent = indent;
        indent = e.indent;
        this.printLine(e.content);
        indent = oldIndent;
      });
    },

    getResult() {
      return output;
    },
  };
}

function isEventHandler(p: Browser.Property) {
  return typeof p["event-handler"] === "string";
}

export function emitWebIdl(
  webidl: Browser.WebIdl,
  flavor: Flavor,
  iterator: boolean
): string {
  // Global print target
  const printer = createTextWriter("\n");

  const polluter = getElements(webidl.interfaces, "interface").find((i) =>
    flavor === Flavor.Window ? !!i["primary-global"] : !!i.global
  );

  const allNonCallbackInterfaces = getElements(
    webidl.interfaces,
    "interface"
  ).concat(getElements(webidl.mixins, "mixin"));
  const allInterfaces = getElements(webidl.interfaces, "interface").concat(
    getElements(webidl["callback-interfaces"], "interface"),
    getElements(webidl.mixins, "mixin")
  );

  const allInterfacesMap = toNameMap(allInterfaces);
  const allLegacyWindowAliases = allInterfaces.flatMap(
    (i) => i["legacy-window-alias"]
  );
  const allDictionariesMap = webidl.dictionaries
    ? webidl.dictionaries.dictionary
    : {};
  const allEnumsMap = webidl.enums ? webidl.enums.enum : {};
  const allCallbackFunctionsMap = webidl["callback-functions"]
    ? webidl["callback-functions"]!["callback-function"]
    : {};
  const allTypeDefsMap = new Set(
    webidl.typedefs && webidl.typedefs.typedef.map((td) => td["new-type"])
  );

  /// Event name to event type map
  const eNameToEType = arrayToMap(
    allNonCallbackInterfaces.flatMap((i) => (i.events ? i.events.event : [])),
    (e) => e.name,
    (e) => eventTypeMap[e.name] || e.type
  );

  /// Tag name to element name map
  const tagNameToEleName = getTagNameToElementNameMap();

  /// Interface name to all its implemented / inherited interfaces name list map
  /// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
  const iNameToIDependList = arrayToMap(
    allNonCallbackInterfaces,
    (i) => i.name,
    (i) => getExtendList(i.name).concat(getImplementList(i.name))
  );

  /// Distinct event type list, used in the "createEvent" function
  const distinctETypeList = distinct(
    allNonCallbackInterfaces
      .flatMap((i) => (i.events ? i.events.event.map((e) => e.type) : []))
      .concat(
        allNonCallbackInterfaces
          .filter(
            (i) =>
              i.extends &&
              i.extends.endsWith("Event") &&
              i.name.endsWith("Event")
          )
          .map((i) => i.name)
      )
  ).sort();

  /// Interface name to its related eventhandler name list map
  /// Note:
  /// In the xml file, each event handler has
  /// 1. eventhandler name: "onready", "onabort" etc.
  /// 2. the event name that it handles: "ready", "SVGAbort" etc.
  /// And they don't just differ by an "on" prefix!
  const iNameToEhList = arrayToMap(
    allInterfaces,
    (i) => i.name,
    (i) =>
      !i.properties
        ? []
        : mapDefined<Browser.Property, EventHandler>(
            mapToArray(i.properties.property),
            (p) => {
              const eventName = p["event-handler"]!;
              if (eventName === undefined) return undefined;
              const eType = eNameToEType[eventName] || defaultEventType;
              const eventType =
                eType === "Event" || dependsOn(eType, "Event")
                  ? eType
                  : defaultEventType;
              return { name: p.name, eventName, eventType };
            }
          )
  );

  const iNameToAttributelessEhList = arrayToMap(
    allInterfaces,
    (i) => i.name,
    (i) =>
      !i["attributeless-events"]
        ? []
        : i["attributeless-events"].event.map((e) => {
            return {
              name: "on" + e.name,
              eventName: e.name,
              eventType: e.type,
            };
          })
  );

  const iNameToConstList = arrayToMap(
    allInterfaces,
    (i) => i.name,
    (i) => (!i.constants ? [] : mapToArray(i.constants.constant))
  );

  // Map of interface.Name -> List of base interfaces with event handlers
  const iNameToEhParents = arrayToMap(
    allInterfaces,
    (i) => i.name,
    getParentsWithEventHandler
  );

  const iNameToConstParents = arrayToMap(
    allInterfaces,
    (i) => i.name,
    getParentsWithConstant
  );

  return iterator ? emitES6DomIterators() : emit();

  function getTagNameToElementNameMap() {
    const htmlResult: Record<string, string> = {};
    const htmlDeprecatedResult: Record<string, string> = {};
    const svgResult: Record<string, string> = {};
    for (const i of allNonCallbackInterfaces) {
      if (i.element) {
        for (const e of i.element) {
          if (e.namespace === "SVG") {
            svgResult[e.name] = i.name;
          } else if (e.deprecated) {
            htmlDeprecatedResult[e.name] = i.name;
          } else {
            htmlResult[e.name] = i.name;
          }
        }
      }
    }
    return { htmlResult, htmlDeprecatedResult, svgResult };
  }

  function getExtendList(iName: string): string[] {
    const i = allInterfacesMap[iName];
    if (!i || !i.extends || i.extends === "Object") return [];
    else return getExtendList(i.extends).concat(i.extends);
  }

  function getImplementList(iName: string) {
    const i = allInterfacesMap[iName];
    return (i && i.implements) || [];
  }

  function getParentsWithEventHandler(i: Browser.Interface) {
    function getParentEventHandler(i: Browser.Interface): Browser.Interface[] {
      const hasEventListener =
        iNameToEhList[i.name] && iNameToEhList[i.name].length;
      if (hasEventListener) {
        return [i];
      }
      const ehParents = getParentsWithEventHandler(i);
      if (ehParents.length > 1) {
        return [i];
      }
      return ehParents;
    }

    if (!i.name) {
      throw new Error("Unexpected nameless object: " + JSON.stringify(i));
    }

    const iExtends = i.extends && i.extends.replace(/<.*>$/, "");
    const parentWithEventHandler =
      (allInterfacesMap[iExtends] &&
        getParentEventHandler(allInterfacesMap[iExtends])) ||
      [];
    const mixinsWithEventHandler = (i.implements || []).flatMap((i) =>
      getParentEventHandler(allInterfacesMap[i])
    );

    return distinct(parentWithEventHandler.concat(mixinsWithEventHandler));
  }

  function getParentsWithConstant(i: Browser.Interface) {
    function getParentConstant(i: Browser.Interface): Browser.Interface[] {
      const hasConst =
        iNameToConstList[i.name] && iNameToConstList[i.name].length;
      return (hasConst ? [i] : []).concat(getParentsWithConstant(i));
    }

    const mixinsWithConstant = (i.implements || []).flatMap((i) =>
      getParentConstant(allInterfacesMap[i])
    );

    return distinct(mixinsWithConstant);
  }

  function getEventTypeInInterface(eName: string, i: Browser.Interface) {
    function getGenericEventType(baseName: string) {
      if (baseName === "ProgressEvent" && !i.mixin) {
        return `${baseName}<${i.name}>`;
      }
      return baseName;
    }

    if (i.events) {
      const event = i.events.event.find((e) => e.name === eName);
      if (event && event.type) {
        return getGenericEventType(event.type);
      }
    }
    if (i["attributeless-events"]) {
      const event = i["attributeless-events"].event.find(
        (e) => e.name === eName
      );
      if (event && event.type) {
        return getGenericEventType(event.type);
      }
    }
    return getGenericEventType(eNameToEType[eName]) || "Event";
  }

  /// Determine if interface1 depends on interface2
  function dependsOn(i1Name: string, i2Name: string) {
    return iNameToIDependList[i1Name]
      ? iNameToIDependList[i1Name].includes(i2Name)
      : i2Name === "Object";
  }

  /// Get typescript type using object dom type, object name, and it's associated interface name
  function convertDomTypeToTsType(obj: Browser.Typed): string {
    if (obj["override-type"]) return obj["override-type"]!;
    if (!obj.type) throw new Error("Missing type " + JSON.stringify(obj));
    const type = convertDomTypeToTsTypeWorker(obj);
    return type.nullable ? makeNullable(type.name) : type.name;
  }

  function convertDomTypeToTsReturnType(obj: Browser.Typed): string {
    const type = convertDomTypeToTsType(obj);
    if (type === "undefined") {
      return "void";
    }
    if (type === "Promise<undefined>") {
      return "Promise<void>";
    }
    return type;
  }

  function convertDomTypeToTsTypeWorker(
    obj: Browser.Typed
  ): { name: string; nullable: boolean } {
    let type;
    if (typeof obj.type === "string") {
      type = {
        name: convertDomTypeToTsTypeSimple(obj.type),
        nullable: !!obj.nullable,
      };
    } else {
      const types = obj.type.map(convertDomTypeToTsTypeWorker);
      const isAny = types.some((t) => t.name === "any");
      if (isAny) {
        type = {
          name: "any",
          nullable: false,
        };
      } else {
        type = {
          name: types.map((t) => t.name).join(" | "),
          nullable: types.some((t) => t.nullable) || !!obj.nullable,
        };
      }
    }

    const subtypes = arrayify(obj.subtype).map(convertDomTypeToTsTypeWorker);
    const subtypeString = subtypes
      .map((subtype) =>
        subtype.nullable ? makeNullable(subtype.name) : subtype.name
      )
      .join(", ");

    return {
      name:
        type.name === "Array" && subtypeString
          ? makeArrayType(subtypeString, obj)
          : `${type.name}${subtypeString ? `<${subtypeString}>` : ""}`,
      nullable: type.nullable,
    };
  }

  function makeArrayType(elementType: string, obj: Browser.Typed): string {
    if (
      obj.subtype &&
      !Array.isArray(obj.subtype) &&
      obj.subtype.type === "float"
    ) {
      return "number[] | Float32Array";
    }

    return elementType.includes("|")
      ? `(${elementType})[]`
      : `${elementType}[]`;
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
    if (objDomType === "sequence" && iterator) {
      return "Iterable";
    }
    if (baseTypeConversionMap.has(objDomType)) {
      return baseTypeConversionMap.get(objDomType)!;
    }
    switch (objDomType) {
      case "DOMHighResTimeStamp":
        return "number";
      case "DOMTimeStamp":
        return "number";
      case "EventListener":
        return "EventListenerOrEventListenerObject";
    }
    // Name of an interface / enum / dict. Just return itself
    if (
      allInterfacesMap[objDomType] ||
      allLegacyWindowAliases.includes(objDomType) ||
      allCallbackFunctionsMap[objDomType] ||
      allDictionariesMap[objDomType] ||
      allEnumsMap[objDomType]
    )
      return objDomType;
    // Name of a type alias. Just return itself
    if (allTypeDefsMap.has(objDomType)) return objDomType;

    throw new Error("Unknown DOM type: " + objDomType);
  }

  function makeNullable(originalType: string) {
    switch (originalType) {
      case "any":
        return "any";
      case "void":
        return "void";
      default:
        if (originalType.includes("| null")) return originalType;
        else if (originalType.includes("=>"))
          return "(" + originalType + ") | null";
        else return originalType + " | null";
    }
  }

  function nameWithForwardedTypes(i: Browser.Interface) {
    const typeParameters = i["type-parameters"];

    if (!typeParameters) return i.name;
    if (!typeParameters.length) return i.name;

    return `${i.name}<${typeParameters.map((t) => t.name)}>`;
  }

  function emitConstant(c: Browser.Constant) {
    emitComments(c, printer.printLine);
    printer.printLine(`readonly ${c.name}: ${convertDomTypeToTsType(c)};`);
  }

  function emitConstants(i: Browser.Interface) {
    if (i.constants) {
      mapToArray(i.constants.constant).sort(compareName).forEach(emitConstant);
    }
  }

  function matchParamMethodSignature(
    m: Browser.Method,
    expectedMName: string,
    expectedMType: string,
    expectedParamType: string | string[]
  ) {
    if (!Array.isArray(expectedParamType)) {
      expectedParamType = [expectedParamType];
    }

    return (
      expectedMName === m.name &&
      m.signature &&
      m.signature.length === 1 &&
      convertDomTypeToTsType(m.signature[0]) === expectedMType &&
      m.signature[0].param &&
      m.signature[0].param!.length === expectedParamType.length &&
      expectedParamType.every(
        (pt, idx) => convertDomTypeToTsType(m.signature[0].param![idx]) === pt
      )
    );
  }

  function getNameWithTypeParameter(
    i:
      | Browser.Interface
      | Browser.Dictionary
      | Browser.CallbackFunction
      | Browser.TypeDef,
    name: string
  ) {
    function typeParameterWithDefault(type: Browser.TypeParameter) {
      return (
        type.name +
        (type.extends ? ` extends ${type.extends}` : "") +
        (type.default ? ` = ${type.default}` : "")
      );
    }

    if (!i["type-parameters"]) {
      return name;
    }
    return `${name}<${i["type-parameters"]!.map(typeParameterWithDefault).join(
      ", "
    )}>`;
  }

  /// Emit overloads for the createElement method
  function emitCreateElementOverloads(m: Browser.Method) {
    if (
      matchParamMethodSignature(m, "createElement", "Element", [
        "string",
        "string | ElementCreationOptions",
      ])
    ) {
      printer.printLine(
        "createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];"
      );
      printer.printLine("/** @deprecated */");
      printer.printLine(
        "createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];"
      );
      printer.printLine(
        "createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;"
      );
    }
  }

  /// Emit overloads for the getElementsByTagName method
  function emitGetElementsByTagNameOverloads(m: Browser.Method) {
    if (
      matchParamMethodSignature(
        m,
        "getElementsByTagName",
        "HTMLCollection",
        "string"
      )
    ) {
      printer.printLine(
        `getElementsByTagName<K extends keyof HTMLElementTagNameMap>(${
          m.signature[0].param![0].name
        }: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;`
      );
      printer.printLine(
        `getElementsByTagName<K extends keyof SVGElementTagNameMap>(${
          m.signature[0].param![0].name
        }: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;`
      );
      printer.printLine(
        `getElementsByTagName(${
          m.signature[0].param![0].name
        }: string): HTMLCollectionOf<Element>;`
      );
    }
  }

  /// Emit overloads for the querySelector method
  function emitQuerySelectorOverloads(m: Browser.Method) {
    if (
      matchParamMethodSignature(m, "querySelector", "Element | null", "string")
    ) {
      printer.printLine(
        "querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;"
      );
      printer.printLine(
        "querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;"
      );
      printer.printLine(
        "querySelector<E extends Element = Element>(selectors: string): E | null;"
      );
    }
  }

  /// Emit overloads for the querySelectorAll method
  function emitQuerySelectorAllOverloads(m: Browser.Method) {
    if (
      matchParamMethodSignature(m, "querySelectorAll", "NodeList", "string")
    ) {
      printer.printLine(
        "querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;"
      );
      printer.printLine(
        "querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;"
      );
      printer.printLine(
        "querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;"
      );
    }
  }

  function emitHTMLElementTagNameMap() {
    printer.printLine("interface HTMLElementTagNameMap {");
    printer.increaseIndent();
    for (const [e, value] of Object.entries(
      tagNameToEleName.htmlResult
    ).sort()) {
      printer.printLine(`"${e.toLowerCase()}": ${value};`);
    }
    printer.decreaseIndent();
    printer.printLine("}");
    printer.printLine("");
  }

  function emitHTMLElementDeprecatedTagNameMap() {
    printer.printLine("interface HTMLElementDeprecatedTagNameMap {");
    printer.increaseIndent();
    for (const [e, value] of Object.entries(
      tagNameToEleName.htmlDeprecatedResult
    ).sort()) {
      printer.printLine(`"${e.toLowerCase()}": ${value};`);
    }
    printer.decreaseIndent();
    printer.printLine("}");
    printer.printLine("");
  }

  function emitSVGElementTagNameMap() {
    printer.printLine("interface SVGElementTagNameMap {");
    printer.increaseIndent();
    for (const [e, value] of Object.entries(
      tagNameToEleName.svgResult
    ).sort()) {
      printer.printLine(`"${e}": ${value};`);
    }
    printer.decreaseIndent();
    printer.printLine("}");
    printer.printLine("");
  }

  function emitElementTagNameMap() {
    printer.printLine(
      "/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */"
    );
    printer.printLine(
      "type ElementTagNameMap = HTMLElementTagNameMap & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;"
    );
    printer.printLine("");
  }

  /// Emit overloads for the createEvent method
  function emitCreateEventOverloads(m: Browser.Method) {
    if (matchParamMethodSignature(m, "createEvent", "Event", "string")) {
      // Emit plurals. For example, "Events", "MutationEvents"
      const hasPlurals = [
        "Event",
        "MutationEvent",
        "MouseEvent",
        "SVGZoomEvent",
        "UIEvent",
      ];
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
      if (p.type === "Promise" && !Array.isArray(p.subtype)) {
        p = { name: p.name, type: [p.subtype!, p] };
      }
      const isOptional = !p.variadic && p.optional;
      const pType = convertDomTypeToTsType(p);
      const variadicParams = p.variadic && pType.indexOf("|") !== -1;
      return (
        (p.variadic ? "..." : "") +
        adjustParamName(p.name) +
        (isOptional ? "?: " : ": ") +
        (variadicParams ? "(" : "") +
        pType +
        (variadicParams ? ")" : "") +
        (p.variadic ? "[]" : "")
      );
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
    } else {
      const methods = mapToArray(i.methods.method);
      const m = methods[0];
      const overload = m.signature[0];
      const paramsString = overload.param ? paramsToString(overload.param) : "";
      const returnType = overload.type
        ? convertDomTypeToTsReturnType(overload)
        : "void";
      printer.printLine(
        `type ${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType}; };`
      );
    }
    printer.printLine("");
  }

  function emitCallBackFunction(cb: Browser.CallbackFunction) {
    printer.printLine(`interface ${getNameWithTypeParameter(cb, cb.name)} {`);
    printer.increaseIndent();
    emitSignatures(cb, "", "", printer.printLine);
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
    const values = e.value.slice().sort();
    printer.printLine(
      `type ${e.name} = ${values.map((v) => `"${v}"`).join(" | ")};`
    );
  }

  function emitEnums() {
    getElements(webidl.enums, "enum")
      .sort(compareName)
      .filter((i) => !i["legacy-namespace"])
      .forEach(emitEnum);
  }

  function emitEventHandlerThis(prefix: string, i: Browser.Interface) {
    if (prefix === "") {
      return `this: ${nameWithForwardedTypes(i)}, `;
    } else {
      return polluter ? `this: ${polluter.name}, ` : "";
    }
  }

  // A covariant  EventHandler is one that is defined in a parent interface as then redefined in current interface with a more specific argument types
  // These patterns are unsafe, and flagged as error under --strictFunctionTypes.
  // Here we know the property is already defined on the interface, we elide its declaration if the parent has the same handler defined
  function isCovariantEventHandler(i: Browser.Interface, p: Browser.Property) {
    return (
      isEventHandler(p) &&
      iNameToEhParents[i.name] &&
      iNameToEhParents[i.name].length > 0 &&
      iNameToEhParents[i.name].some(
        (i) =>
          iNameToEhList[i.name] &&
          iNameToEhList[i.name].length > 0 &&
          iNameToEhList[i.name].some((e) => e.name === p.name)
      )
    );
  }

  function emitProperty(
    prefix: string,
    i: Browser.Interface,
    emitScope: EmitScope,
    p: Browser.Property
  ) {
    emitComments(p, printer.printLine);

    // Treat window.name specially because of
    //   - https://github.com/Microsoft/TypeScript/issues/9850
    //   - https://github.com/microsoft/TypeScript/issues/18433
    if (
      p.name === "name" &&
      i.name === "Window" &&
      emitScope === EmitScope.All
    ) {
      printer.printLine("/** @deprecated */");
      printer.printLine("declare const name: void;");
    } else {
      let pType: string;
      if (p["override-type"]) {
        pType = p["override-type"]!;
      } else if (isEventHandler(p)) {
        // Sometimes event handlers with the same name may actually handle different
        // events in different interfaces. For example, "onerror" handles "ErrorEvent"
        // normally, but in "SVGSVGElement" it handles "SVGError" event instead.
        const eType = p["event-handler"]
          ? getEventTypeInInterface(p["event-handler"]!, i)
          : "Event";
        pType = `(${emitEventHandlerThis(prefix, i)}ev: ${eType}) => any`;
        if (typeof p.type === "string" && !p.type.endsWith("NonNull")) {
          pType = `(${pType}) | null`;
        }
      } else {
        pType = convertDomTypeToTsType(p);
      }
      const required = p.required === undefined || p.required === 1;
      const requiredModifier = required || prefix ? "" : "?";
      pType = p.nullable ? makeNullable(pType) : pType;
      if (!required && prefix) {
        pType += " | undefined";
      }
      if (!prefix && !p["read-only"] && p["put-forwards"]) {
        printer.printLine(`get ${p.name}${requiredModifier}(): ${pType};`);

        const forwardingProperty =
          allInterfacesMap[pType].properties?.property[p["put-forwards"]];
        if (!forwardingProperty) {
          throw new Error("Couldn't find [PutForwards]");
        }
        const setterType = `${convertDomTypeToTsType(
          forwardingProperty
        )} | ${pType}`;
        printer.printLine(
          `set ${p.name}${requiredModifier}(${p["put-forwards"]}: ${setterType});`
        );
      } else {
        const readOnlyModifier =
          p["read-only"] === 1 && prefix === "" ? "readonly " : "";
        printer.printLine(
          `${prefix}${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`
        );
      }
    }

    if (p.stringifier) {
      printer.printLine("toString(): string;");
    }
  }

  function emitComments(
    entity: { comment?: string; deprecated?: 1 },
    print: (s: string) => void
  ) {
    if (entity.comment) {
      entity.comment.split("\n").forEach(print);
    }
    if (entity.deprecated && !entity.comment?.includes("@deprecated")) {
      print(`/** @deprecated */`);
    }
  }

  function emitProperties(
    prefix: string,
    emitScope: EmitScope,
    i: Browser.Interface
  ) {
    if (i.properties) {
      mapToArray(i.properties.property)
        .filter((m) => matchScope(emitScope, m))
        .filter((p) => !isCovariantEventHandler(i, p))
        .sort(compareName)
        .forEach((p) => emitProperty(prefix, i, emitScope, p));
    }
  }

  function emitMethod(
    prefix: string,
    m: Browser.Method,
    conflictedMembers: Set<string>
  ) {
    function printLine(content: string) {
      if (m.name && conflictedMembers.has(m.name)) {
        printer.printLineToStack(content);
      } else {
        printer.printLine(content);
      }
    }

    emitComments(m, printLine);

    switch (m.name) {
      case "createElement":
        return emitCreateElementOverloads(m);
      case "createEvent":
        return emitCreateEventOverloads(m);
      case "getElementsByTagName":
        return emitGetElementsByTagNameOverloads(m);
      case "querySelector":
        return emitQuerySelectorOverloads(m);
      case "querySelectorAll":
        return emitQuerySelectorAllOverloads(m);
    }

    // ignore toString() provided from browser.webidl.preprocessed.json
    // to prevent duplication
    if (m.name !== "toString") {
      emitSignatures(m, prefix, m.name, printLine);

      if (m.stringifier) {
        printLine("toString(): string;");
      }
    }
  }

  function emitSignature(
    s: Browser.Signature,
    prefix: string | undefined,
    name: string | undefined,
    printLine: (s: string) => void
  ) {
    const paramsString = s.param ? paramsToString(s.param) : "";
    let returnType = convertDomTypeToTsReturnType(s);
    returnType = s.nullable ? makeNullable(returnType) : returnType;
    emitComments(s, printLine);
    printLine(`${prefix || ""}${name || ""}(${paramsString}): ${returnType};`);
  }

  function emitSignatures(
    method: {
      signature?: Browser.Signature[];
      "override-signatures"?: string[];
      "additional-signatures"?: string[];
    },
    prefix: string,
    name: string,
    printLine: (s: string) => void
  ) {
    if (method["override-signatures"]) {
      method["override-signatures"]!.forEach((s) =>
        printLine(`${prefix}${s};`)
      );
    } else if (method.signature) {
      method["additional-signatures"]?.forEach((s) =>
        printLine(`${prefix}${s};`)
      );
      method.signature.forEach((sig) =>
        emitSignature(sig, prefix, name, printLine)
      );
    }
  }

  function emitMethods(
    prefix: string,
    emitScope: EmitScope,
    i: Browser.Interface,
    conflictedMembers: Set<string>
  ) {
    // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
    // Otherwise, this is EventTarget.addEventListener, we want to keep that.
    if (i.methods) {
      mapToArray(i.methods.method)
        .filter(
          (m) =>
            matchScope(emitScope, m) &&
            !(
              prefix !== "" &&
              (m.name === "addEventListener" ||
                m.name === "removeEventListener")
            )
        )
        .sort(compareName)
        .forEach((m) => emitMethod(prefix, m, conflictedMembers));
    }
    if (i["anonymous-methods"]) {
      const stringifier = i["anonymous-methods"].method.find(
        (m) => m.stringifier
      );
      if (stringifier) {
        printer.printLine("toString(): string;");
      }
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
    const subtype = i.iterator.type.map(convertDomTypeToTsType);
    const value = subtype[subtype.length - 1];
    const key =
      subtype.length > 1
        ? subtype[0]
        : i.iterator.kind === "iterable"
        ? "number"
        : value;
    const name = i["type-parameters"]
      ? `${i.name}<${i["type-parameters"]!.map((p) => p.name).join(", ")}>`
      : i.name;
    printer.printLine(
      `forEach(callbackfn: (value: ${value}, key: ${key}, parent: ${name}) => void, thisArg?: any): void;`
    );
  }

  /// Emit the properties and methods of a given interface
  function emitMembers(
    prefix: string,
    emitScope: EmitScope,
    i: Browser.Interface
  ) {
    const conflictedMembers = extendConflictsBaseTypes[i.name]
      ? extendConflictsBaseTypes[i.name].memberNames
      : new Set<string>();
    emitProperties(prefix, emitScope, i);
    const methodPrefix = prefix.startsWith("declare var")
      ? "declare function "
      : "";
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
      const optionsType =
        addOrRemove === "add"
          ? "AddEventListenerOptions"
          : "EventListenerOptions";
      if (tryEmitTypedEventHandlerForInterface(addOrRemove, optionsType)) {
        // only emit the string event handler if we just emitted a typed handler
        printer.printLine(
          `${fPrefix}${addOrRemove}EventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ${optionsType}): void;`
        );
      }
    }

    return;

    function emitTypedEventHandler(
      prefix: string,
      addOrRemove: string,
      iParent: Browser.Interface,
      optionsType: string
    ) {
      printer.printLine(
        `${prefix}${addOrRemove}EventListener<K extends keyof ${
          iParent.name
        }EventMap>(type: K, listener: (this: ${nameWithForwardedTypes(
          i
        )}, ev: ${
          iParent.name
        }EventMap[K]) => any, options?: boolean | ${optionsType}): void;`
      );
    }

    function tryEmitTypedEventHandlerForInterface(
      addOrRemove: string,
      optionsType: string
    ) {
      const hasEventListener =
        iNameToEhList[i.name] && iNameToEhList[i.name].length;
      const ehParentCount =
        iNameToEhParents[i.name] && iNameToEhParents[i.name].length;

      if (hasEventListener || ehParentCount > 1) {
        emitTypedEventHandler(fPrefix, addOrRemove, i, optionsType);
        return true;
      } else if (ehParentCount === 1) {
        emitTypedEventHandler(
          fPrefix,
          addOrRemove,
          iNameToEhParents[i.name][0],
          optionsType
        );
        return true;
      }
      return false;
    }
  }

  function emitConstructorSignature(i: Browser.Interface) {
    const constructor =
      typeof i.constructor === "object" ? i.constructor : undefined;

    // Emit constructor signature
    if (constructor) {
      emitComments(constructor, printer.print);
      emitSignatures(constructor, "", "new", printer.printLine);
    } else {
      printer.printLine(`new(): ${i.name};`);
    }
  }

  function emitConstructor(i: Browser.Interface, prefix = "") {
    printer.printLine(`${prefix}var ${i.name}: {`);
    printer.increaseIndent();

    printer.printLine(`prototype: ${i.name};`);
    emitConstructorSignature(i);
    emitConstants(i);
    if (iNameToConstParents[i.name] && iNameToConstParents[i.name].length) {
      for (const parent of iNameToConstParents[i.name]) {
        emitConstants(parent);
      }
    }
    emitMembers(/*prefix*/ "", EmitScope.StaticOnly, i);

    printer.decreaseIndent();
    printer.printLine("};");
    printer.printLine("");

    if (flavor === Flavor.Window && i["legacy-window-alias"]) {
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
      nc.signature.forEach((s) =>
        printer.printLine(
          `new(${s.param ? paramsToString(s.param) : ""}): ${i.name};`
        )
      );
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
      printer.printLineToStack(
        `interface ${getNameWithTypeParameter(
          i,
          i.name
        )} extends ${processedIName} {`
      );
    }

    if (i.comment) {
      printer.printLine(`/** ${i.comment} */`);
    }

    printer.print(`interface ${getNameWithTypeParameter(i, processedIName)}`);

    const finalExtends = [i.extends || "Object"]
      .concat((i.implements || []).sort())
      .filter((i) => i !== "Object")
      .map(processIName);

    if (finalExtends.length) {
      printer.print(` extends ${finalExtends.join(", ")}`);
    }
    printer.print(" {");
    printer.endLine();
  }

  /// To decide if a given method is an indexer and should be emitted
  function shouldEmitIndexerSignature(
    i: Browser.Interface,
    m: Browser.AnonymousMethod
  ) {
    if (
      m.getter &&
      m.signature &&
      m.signature[0].param &&
      m.signature[0].param!.length === 1
    ) {
      // TypeScript array indexer can only be number or string
      // for string, it must return a more generic type then all
      // the other properties, following the Dictionary pattern
      switch (convertDomTypeToTsType(m.signature[0].param![0])) {
        case "number":
          return true;
        case "string": {
          if (convertDomTypeToTsType(m.signature[0]) === "any") {
            return true;
          }
          const sig = m.signature[0];
          const mTypes = distinct(
            (i.methods &&
              map(
                i.methods.method,
                (m) =>
                  (m.signature && m.signature.length && m.signature[0].type) ||
                  "void"
              ).filter((t) => t !== "void")) ||
              []
          );
          const amTypes = distinct(
            (i["anonymous-methods"] &&
              i["anonymous-methods"]!.method.map(
                (m) => m.signature[0].type
              ).filter((t) => t !== "void")) ||
              []
          ); // |>  Array.distinct
          const pTypes = distinct(
            (i.properties &&
              map(i.properties.property, (m) => m.type).filter(
                (t) => t !== "void"
              )) ||
              []
          ); // |>  Array.distinct

          if (
            mTypes.length === 0 &&
            amTypes.length === 1 &&
            pTypes.length === 0
          )
            return amTypes[0] === sig.type;
          if (
            mTypes.length === 1 &&
            amTypes.length === 1 &&
            pTypes.length === 0
          )
            return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
          if (
            mTypes.length === 0 &&
            amTypes.length === 1 &&
            pTypes.length === 1
          )
            return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
          if (
            mTypes.length === 1 &&
            amTypes.length === 1 &&
            pTypes.length === 1
          )
            return (
              mTypes[0] === amTypes[0] &&
              amTypes[0] === pTypes[0] &&
              amTypes[0] === sig.type
            );
        }
      }
    }
    return false;
  }

  function emitIndexers(emitScope: EmitScope, i: Browser.Interface) {
    if (i["override-index-signatures"]) {
      i["override-index-signatures"]!.forEach((s) =>
        printer.printLine(`${s};`)
      );
    } else {
      // The indices could be within either Methods or Anonymous Methods
      mapToArray<Browser.AnonymousMethod>(i.methods && i.methods.method)
        .concat(
          (i["anonymous-methods"] && i["anonymous-methods"]!.method) || []
        )
        .filter(
          (m) => shouldEmitIndexerSignature(i, m) && matchScope(emitScope, m)
        )
        .forEach((m) => {
          const indexer =
            m.signature &&
            m.signature.length &&
            m.signature[0].param &&
            m.signature[0].param!.length
              ? m.signature[0].param![0]
              : undefined;
          if (indexer) {
            printer.printLine(
              `[${indexer.name}: ${convertDomTypeToTsType(
                indexer
              )}]: ${convertDomTypeToTsType({
                type: m.signature[0].type,
                "override-type": m.signature[0]["override-type"],
                subtype: m.signature[0].subtype,
                nullable: undefined,
              })};`
            );
          }
        });
    }
  }

  function emitInterfaceEventMap(i: Browser.Interface) {
    function emitInterfaceEventMapEntry(eHandler: EventHandler) {
      printer.printLine(
        `"${eHandler.eventName}": ${getEventTypeInInterface(
          eHandler.eventName,
          i
        )};`
      );
    }

    const hasEventHandlers =
      iNameToEhList[i.name] && iNameToEhList[i.name].length;
    const hasAttributelessEventHandlers =
      iNameToAttributelessEhList[i.name] &&
      iNameToAttributelessEhList[i.name].length;
    const ehParentCount =
      iNameToEhParents[i.name] && iNameToEhParents[i.name].length;

    if (
      hasEventHandlers ||
      hasAttributelessEventHandlers ||
      ehParentCount > 1
    ) {
      printer.print(`interface ${i.name}EventMap`);
      if (ehParentCount) {
        const extend = iNameToEhParents[i.name].map((i) => i.name + "EventMap");
        printer.print(` extends ${extend.join(", ")}`);
      }
      printer.print(" {");
      printer.endLine();
      printer.increaseIndent();
      iNameToEhList[i.name]
        .concat(iNameToAttributelessEhList[i.name])
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
    const hasNonStaticMethod =
      i.methods && mapToArray(i.methods.method).some((m) => !m.static);
    const hasProperty =
      i.properties && mapToArray(i.properties.property).some((p) => !p.static);
    const hasNonStaticMember = hasNonStaticMethod || hasProperty;

    // For static types with non-static members, we put the non-static members into an
    // interface, and put the static members into the object literal type of 'declare var'
    // For static types with only static members, we put everything in the interface.
    // Because in the two cases the interface contains different things, it might be easier to
    // read to separate them into two functions.
    function emitStaticInterfaceWithNonStaticMembers() {
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
    } else {
      emitPureStaticInterface();
    }
  }

  function emitNonCallbackInterfaces() {
    for (const i of allNonCallbackInterfaces.sort(compareName)) {
      if (i["legacy-namespace"]) {
        continue;
      }
      // If the static attribute has a value, it means the type doesn't have a constructor
      if (i.static) {
        emitStaticInterface(i);
      } else if (i["no-interface-object"]) {
        emitInterface(i);
      } else {
        emitInterface(i);
        emitConstructor(i, "declare ");
      }
    }
  }

  function emitNamespace(namespace: Browser.Interface) {
    if (namespace.comment) {
      printer.printLine(`/** ${namespace.comment} */`);
    }

    if (namespacesAsInterfaces.includes(namespace.name)) {
      const name = namespace.name[0].toUpperCase() + namespace.name.slice(1);
      emitInterface({ ...namespace, name });
      printer.printLine(`declare var ${namespace.name}: ${name};`);
      printer.printLine("");
      return;
    }

    printer.printLine(`declare namespace ${namespace.name} {`);
    printer.increaseIndent();

    if (namespace.nested) {
      namespace.nested.interfaces.sort(compareName).forEach((i) => {
        emitInterface(i);
        emitConstructor(i);
      });
      namespace.nested.dictionaries.sort(compareName).forEach(emitDictionary);
      namespace.nested.enums.sort(compareName).forEach(emitEnum);
      namespace.nested.typedefs.forEach(emitTypeDef);
    }

    emitProperties("var ", EmitScope.InstanceOnly, namespace);
    emitMethods("function ", EmitScope.InstanceOnly, namespace, new Set());

    printer.decreaseIndent();
    printer.printLine("}");
    printer.printLine("");
  }

  function emitDictionary(dict: Browser.Dictionary) {
    if (!dict.extends || dict.extends === "Object") {
      printer.printLine(
        `interface ${getNameWithTypeParameter(dict, dict.name)} {`
      );
    } else {
      printer.printLine(
        `interface ${getNameWithTypeParameter(dict, dict.name)} extends ${
          dict.extends
        } {`
      );
    }
    printer.increaseIndent();
    if (dict.members) {
      mapToArray(dict.members.member)
        .sort(compareName)
        .forEach((m) => {
          emitComments(m, printer.printLine);
          printer.printLine(
            `${m.name}${m.required === 1 ? "" : "?"}: ${convertDomTypeToTsType(
              m
            )};`
          );
        });
    }
    if (dict["override-index-signatures"]) {
      dict["override-index-signatures"]!.forEach((s) =>
        printer.printLine(`${s};`)
      );
    }
    printer.decreaseIndent();
    printer.printLine("}");
    printer.printLine("");
  }

  function emitDictionaries() {
    getElements(webidl.dictionaries, "dictionary")
      .sort(compareName)
      .filter((i) => !i["legacy-namespace"])
      .forEach(emitDictionary);
  }

  function emitTypeDef(typeDef: Browser.TypeDef) {
    emitComments(typeDef, printer.printLine);
    printer.printLine(
      `type ${getNameWithTypeParameter(
        typeDef,
        typeDef["new-type"]
      )} = ${convertDomTypeToTsType(typeDef)};`
    );
  }

  function emitTypeDefs() {
    if (webidl.typedefs) {
      webidl.typedefs.typedef
        .filter((i) => !i["legacy-namespace"])
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
    } else {
      printer.printLine("/// DOM APIs");
    }
    printer.printLine("/////////////////////////////");
    printer.printLine("");

    emitDictionaries();
    getElements(webidl["callback-interfaces"], "interface")
      .sort(compareName)
      .forEach((i) => emitCallBackInterface(i));
    emitNonCallbackInterfaces();

    printer.printLine(
      "declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;"
    );
    printer.printLine("");

    collectLegacyNamespaceTypes(webidl).forEach(emitNamespace);

    emitCallBackFunctions();

    if (flavor === Flavor.Window) {
      emitHTMLElementTagNameMap();
      emitHTMLElementDeprecatedTagNameMap();
      emitSVGElementTagNameMap();
      emitElementTagNameMap();
      emitNamedConstructors();
    }

    if (polluter) {
      emitAllMembers(polluter);
      emitEventHandlers("declare var ", polluter);
    }

    emitTypeDefs();
    emitEnums();

    return printer.getResult();
  }

  function emitIterator(i: Browser.Interface) {
    // check anonymous unsigned long getter and length property
    const isIterableGetter = (m: Browser.AnonymousMethod) =>
      m.getter === 1 &&
      !!m.signature.length &&
      !!m.signature[0].param &&
      m.signature[0].param!.length === 1 &&
      typeof m.signature[0].param![0].type === "string" &&
      integerTypes.has(<string>m.signature[0].param![0].type);

    function findIterableGetter() {
      const anonymousGetter =
        i["anonymous-methods"] &&
        i["anonymous-methods"]!.method.find(isIterableGetter);

      if (anonymousGetter) return anonymousGetter;
      else if (i.methods)
        return mapToArray(i.methods.method).find(isIterableGetter);
      else return undefined;
    }

    function findLengthProperty(i: Browser.Interface | undefined) {
      const p = i && i.properties && i.properties.property.length;
      return (
        p &&
        p.name === "length" &&
        typeof p.type === "string" &&
        integerTypes.has(p.type)
      );
    }

    function getIteratorSubtypes() {
      if (i.iterator) {
        if (i.iterator.type.length === 1) {
          return [convertDomTypeToTsType(i.iterator.type[0])];
        }
        return i.iterator.type.map(convertDomTypeToTsType);
      } else if (i.name !== "Window") {
        const iterableGetter = findIterableGetter();
        const lengthProperty =
          findLengthProperty(i) ||
          findLengthProperty(allInterfacesMap[i.extends]);
        if (iterableGetter && lengthProperty) {
          return [
            convertDomTypeToTsType({
              type: iterableGetter.signature[0].type,
              "override-type": iterableGetter.signature[0]["override-type"],
            }),
          ];
        }
      }
    }

    function stringifySingleOrTupleTypes(types: string[]) {
      if (types.length === 1) {
        return types[0];
      }
      return `[${types.join(", ")}]`;
    }

    function emitIterableDeclarationMethods(
      i: Browser.Interface,
      subtypes: string[]
    ) {
      let [keyType, valueType] = subtypes;
      if (!valueType) {
        valueType = keyType;
        keyType = "number";
      }

      const methods = [
        {
          name: "entries",
          definition: `IterableIterator<[${keyType}, ${valueType}]>`,
        },
        {
          name: "keys",
          definition: `IterableIterator<${keyType}>`,
        },
        {
          name: "values",
          definition: `IterableIterator<${valueType}>`,
        },
      ];

      const comments =
        i.iterator && i.iterator.comments && i.iterator.comments.comment;

      methods.forEach((m) => {
        if (comments && comments[m.name]) {
          comments[m.name].split("\n").forEach(printer.printLine);
        }
        printer.printLine(`${m.name}(): ${m.definition};`);
      });
    }

    function getIteratorExtends(
      iterator?: Browser.Iterator,
      subtypes?: string[]
    ) {
      if (!iterator || !subtypes) {
        return "";
      }
      const base =
        iterator.kind === "maplike"
          ? `Map<${subtypes[0]}, ${subtypes[1]}>`
          : iterator.kind === "setlike"
          ? `Set<${subtypes[0]}>`
          : undefined;
      if (!base) {
        return "";
      }
      const result = iterator.readonly ? `Readonly${base}` : base;
      return `extends ${result} `;
    }

    function hasSequenceArgument(s: Browser.Signature) {
      function typeIncludesSequence(type: string | Browser.Typed[]): boolean {
        if (Array.isArray(type)) {
          return type.some((t) => typeIncludesSequence(t.type));
        }
        return type === "sequence" || !!sequenceTypedefMap[type];
      }
      return !!s.param && s.param.some((p) => typeIncludesSequence(p.type));
    }

    function replaceTypedefsInSignatures(
      signatures: Browser.Signature[]
    ): Browser.Signature[] {
      return signatures.map((s) => {
        const params = s.param!.map((p) => {
          const typedef =
            typeof p.type === "string" ? sequenceTypedefMap[p.type] : undefined;
          if (!typedef) {
            return p;
          }
          return { ...p, type: typedef.type };
        });
        return { ...s, param: params };
      });
    }

    const sequenceTypedefs = !webidl.typedefs
      ? []
      : webidl.typedefs.typedef
          .filter((typedef) => Array.isArray(typedef.type))
          .map((typedef) => ({
            ...typedef,
            type: (typedef.type as Browser.Typed[]).filter(
              (t) => t.type === "sequence"
            ),
          }))
          .filter((typedef) => typedef.type.length);
    const sequenceTypedefMap = arrayToMap(
      sequenceTypedefs,
      (t) => t["new-type"],
      (t) => t
    );

    const subtypes = getIteratorSubtypes();
    const methodsWithSequence: Browser.Method[] = mapToArray(
      i.methods ? i.methods.method : {}
    )
      .filter((m) => m.signature && !m["override-signatures"])
      .map((m) => ({
        ...m,
        signature: replaceTypedefsInSignatures(
          m.signature.filter(hasSequenceArgument)
        ),
      }))
      .filter((m) => m.signature.length)
      .sort(compareName);

    if (subtypes || methodsWithSequence.length) {
      const iteratorExtends = getIteratorExtends(i.iterator, subtypes);
      const name = getNameWithTypeParameter(
        i,
        extendConflictsBaseTypes[i.name] ? `${i.name}Base` : i.name
      );
      printer.printLine("");
      printer.printLine(`interface ${name} ${iteratorExtends}{`);
      printer.increaseIndent();

      methodsWithSequence.forEach((m) => emitMethod("", m, new Set()));

      if (subtypes && !iteratorExtends) {
        printer.printLine(
          `[Symbol.iterator](): IterableIterator<${stringifySingleOrTupleTypes(
            subtypes
          )}>;`
        );
      }
      if (i.iterator && i.iterator.kind === "iterable" && subtypes) {
        emitIterableDeclarationMethods(i, subtypes);
      }
      printer.decreaseIndent();
      printer.printLine("}");
    }
  }

  function emitES6DomIterators() {
    printer.reset();
    printer.printLine("/////////////////////////////");
    if (flavor === Flavor.Worker) {
      printer.printLine("/// Worker Iterable APIs");
    } else {
      printer.printLine("/// DOM Iterable APIs");
    }
    printer.printLine("/////////////////////////////");

    allInterfaces.sort(compareName).forEach(emitIterator);

    return printer.getResult();
  }
}
