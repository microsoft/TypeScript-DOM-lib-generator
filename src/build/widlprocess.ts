import * as webidl2 from "webidl2";
import * as Browser from "./types.ts";
import { getEmptyWebIDL } from "./helpers.ts";

export function convert(text: string, commentMap: Record<string, string>) {
  const rootTypes = webidl2.parse(text);
  const partialInterfaces: Browser.Interface[] = [];
  const partialMixins: Browser.Interface[] = [];
  const partialDictionaries: Browser.Dictionary[] = [];
  const partialNamespaces: Browser.Interface[] = [];
  const includes: webidl2.IncludesType[] = [];
  const namespaceNested: Record<string, Browser.Interface> = {};
  const browser = getEmptyWebIDL();
  for (const rootType of rootTypes) {
    if (rootType.type === "interface") {
      const converted = convertInterface(rootType, commentMap);
      if (rootType.partial) {
        partialInterfaces.push(converted);
      } else {
        browser.interfaces!.interface[rootType.name] = converted;
      }
    } else if (rootType.type === "interface mixin") {
      const converted = convertInterfaceMixin(rootType, commentMap);
      if (rootType.partial) {
        partialMixins.push(converted);
      } else {
        browser.mixins!.mixin[rootType.name] = converted;
      }
    } else if (rootType.type === "namespace") {
      const converted = convertNamespace(rootType, commentMap);
      if (rootType.partial) {
        partialNamespaces.push(converted);
      } else {
        browser.namespaces!.push(converted);
      }
    } else if (rootType.type === "callback interface") {
      browser.callbackInterfaces!.interface[rootType.name] =
        convertInterfaceCommon(rootType, commentMap);
    } else if (rootType.type === "callback") {
      browser.callbackFunctions!.callbackFunction[rootType.name] =
        convertCallbackFunctions(rootType);
      addComments(
        browser.callbackFunctions!.callbackFunction[rootType.name],
        commentMap,
        rootType.name,
      );
    } else if (rootType.type === "dictionary") {
      const converted = convertDictionary(rootType, commentMap);
      if (rootType.partial) {
        partialDictionaries.push(converted);
      } else {
        browser.dictionaries!.dictionary[rootType.name] = converted;
      }
    } else if (rootType.type === "enum") {
      browser.enums!.enum[rootType.name] = convertEnum(rootType);
    } else if (rootType.type === "typedef") {
      browser.typedefs!.typedef.push(convertTypedef(rootType));
    } else if (rootType.type === "includes") {
      includes.push(rootType);
    }
  }
  return {
    browser,
    partialInterfaces,
    partialMixins,
    partialDictionaries,
    partialNamespaces,
    includes,
    namespaceNested,
  };
}

function hasExtAttr(extAttrs: webidl2.ExtendedAttribute[], name: string) {
  return extAttrs.some((extAttr) => extAttr.name === name);
}

function getExtAttr(extAttrs: webidl2.ExtendedAttribute[], name: string) {
  const attr = extAttrs.find((extAttr) => extAttr.name === name);
  if (!attr || !attr.rhs) {
    return [];
  }
  if (attr.rhs.type === ("*" as any)) {
    return ["*"];
  }
  return attr.rhs.type === "identifier-list" ||
    attr.rhs.type === "string-list" ||
    attr.rhs.type === "decimal-list" ||
    attr.rhs.type === "integer-list"
    ? (
        attr.rhs.value as webidl2.ExtendedAttributeRightHandSideIdentifier[]
      ).map((item) => item.value)
    : [attr.rhs.value];
}

function getExtAttrConcatenated(
  extAttrs: webidl2.ExtendedAttribute[],
  name: string,
) {
  const extAttr = getExtAttr(extAttrs, name);
  if (extAttr.length) {
    return extAttr.join(" ");
  }
}

function convertInterface(
  i: webidl2.InterfaceType,
  commentMap: Record<string, string>,
) {
  const result = convertInterfaceCommon(i, commentMap);
  if (i.inheritance) {
    result.extends = i.inheritance;
  }
  return result;
}

function convertInterfaceMixin(
  i: webidl2.InterfaceMixinType,
  commentMap: Record<string, string>,
) {
  const result = convertInterfaceCommon(i, commentMap);
  result.mixin = true;
  result.noInterfaceObject = true;
  return result;
}

function addComments(
  obj: any,
  commentMap: Record<string, string>,
  container: string,
  member?: string,
) {
  const key =
    container.toLowerCase() + (member ? "-" + member.toLowerCase() : "");
  if (commentMap[key]) {
    obj.comment = commentMap[key];
  }
}

function convertInterfaceCommon(
  i:
    | webidl2.InterfaceType
    | webidl2.InterfaceMixinType
    | webidl2.CallbackInterfaceType,
  commentMap: Record<string, string>,
) {
  const result: Browser.Interface = {
    name: i.name,
    constants: { constant: {} },
    methods: { method: {} },
    anonymousMethods: { method: [] },
    properties: { property: {}, namesakes: {} },
    constructor:
      getConstructor(i.members, i.name) ||
      getOldStyleConstructor(i.extAttrs, i.name),
    namedConstructor: getLegacyFactoryFunction(i.extAttrs, i.name),
    exposed: getExtAttrConcatenated(i.extAttrs, "Exposed"),
    global: getExtAttrConcatenated(i.extAttrs, "Global"),
    noInterfaceObject:
      hasExtAttr(i.extAttrs, "LegacyNoInterfaceObject") ||
      hasExtAttr(i.extAttrs, "NoInterfaceObject"),
    legacyWindowAlias: getExtAttr(i.extAttrs, "LegacyWindowAlias"),
    legacyNamespace: getExtAttr(i.extAttrs, "LegacyNamespace")[0],
    secureContext: hasExtAttr(i.extAttrs, "SecureContext"),
    transferable: hasExtAttr(i.extAttrs, "Transferable"),
  };
  if (!result.exposed && i.type === "interface" && !i.partial) {
    result.exposed = "Window";
  }
  for (const member of i.members) {
    if (member.type === "const") {
      result.constants!.constant[member.name] = convertConstantMember(member);
      addComments(
        result.constants!.constant[member.name],
        commentMap,
        i.name,
        member.name,
      );
    } else if (member.type === "attribute") {
      const { properties } = result;
      const prop = convertAttribute(member, result.exposed);
      addComments(prop, commentMap, i.name, member.name);

      if (member.name in properties!.namesakes!) {
        properties!.namesakes![member.name].push(prop);
      } else if (member.name in properties!.property) {
        const existing = properties!.property[member.name];
        delete properties!.property[member.name];
        properties!.namesakes![member.name] = [existing, prop];
      } else {
        properties!.property[member.name] = prop;
      }
    } else if (member.type === "operation") {
      const operation = convertOperation(member, result.exposed);
      const { method } = result.methods!;
      if (!member.name) {
        result.anonymousMethods!.method.push(operation);
      } else if (method.hasOwnProperty(member.name)) {
        method[member.name].signature.push(...operation.signature);
      } else {
        method[member.name] = operation as Browser.Method;
      }
      if (member.name) {
        addComments(method[member.name], commentMap, i.name, member.name);
      }
    } else if (
      (member.type as string) === "async_iterable" ||
      member.type === "iterable" ||
      member.type === "maplike" ||
      member.type === "setlike"
    ) {
      // TODO(saschanaz): @types/webidl2 doesn't support async_iterable
      const iterableLike = member as
        | webidl2.IterableDeclarationMemberType
        | webidl2.MaplikeDeclarationMemberType
        | webidl2.SetlikeDeclarationMemberType;
      // Compatibility between `async_iterable` and `async iterable`
      const kind =
        iterableLike.type === "iterable" && iterableLike.async
          ? "async_iterable"
          : iterableLike.type;
      result.iterator = {
        kind,
        readonly: iterableLike.readonly,
        param: iterableLike.arguments.map(convertArgument),
        type: iterableLike.idlType.map(convertIdlType),
      };
    }
  }

  return result;
}

function getConstructor(
  members: webidl2.IDLInterfaceMemberType[],
  parent: string,
) {
  const constructor: Browser.Constructor = {
    signature: [],
  };
  for (const member of members) {
    if (member.type === "constructor") {
      constructor.signature.push({
        type: parent,
        param: member.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signature.length) {
    return constructor;
  }
}

function getOldStyleConstructor(
  extAttrs: webidl2.ExtendedAttribute[],
  parent: string,
) {
  const constructor: Browser.Constructor = {
    signature: [],
  };
  for (const extAttr of extAttrs) {
    if (extAttr.name === "Constructor") {
      constructor.signature.push({
        type: parent,
        param: extAttr.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signature.length) {
    return constructor;
  }
}

function getLegacyFactoryFunction(
  extAttrs: webidl2.ExtendedAttribute[],
  parent: string,
): Browser.NamedConstructor | undefined {
  for (const extAttr of extAttrs) {
    if (
      extAttr.name === "LegacyFactoryFunction" &&
      extAttr.rhs &&
      typeof extAttr.rhs.value === "string"
    ) {
      return {
        name: extAttr.rhs.value,
        signature: [
          {
            type: parent,
            param: extAttr.arguments
              ? extAttr.arguments.map(convertArgument)
              : [],
          },
        ],
      };
    }
  }
}

function convertOperation(
  operation: webidl2.OperationMemberType,
  inheritedExposure: string | undefined,
): Browser.AnonymousMethod | Browser.Method {
  const isStringifier = operation.special === "stringifier";
  const type = operation.idlType
    ? convertIdlType(operation.idlType)
    : isStringifier
      ? { type: "DOMString" }
      : undefined;
  if (!type) {
    throw new Error("Unexpected anonymous operation");
  }
  return {
    name: operation.name || undefined,
    signature: [
      {
        ...type,
        param: operation.arguments.map(convertArgument),
      },
    ],
    getter: operation.special === "getter",
    static: operation.special === "static",
    stringifier: isStringifier,
    exposed:
      getExtAttrConcatenated(operation.extAttrs, "Exposed") ||
      inheritedExposure,
    secureContext: hasExtAttr(operation.extAttrs, "SecureContext"),
  };
}

function convertCallbackFunctions(
  c: webidl2.CallbackType,
): Browser.CallbackFunction {
  return {
    name: c.name,
    signature: [
      {
        ...convertIdlType(c.idlType),
        param: c.arguments.map(convertArgument),
      },
    ],
  };
}

function convertArgument(arg: webidl2.Argument): Browser.Param {
  const idlType = convertIdlType(arg.idlType);
  if (hasExtAttr(arg.extAttrs, "LegacyNullToEmptyString")) {
    idlType.nullable = true;
  }
  return {
    name: arg.name,
    ...idlType,
    optional: arg.optional,
    variadic: arg.variadic,
    allowShared: hasExtAttr(arg.extAttrs, "AllowShared"),
  };
}

function convertAttribute(
  attribute: webidl2.AttributeMemberType,
  inheritedExposure: string | undefined,
): Browser.Property {
  const isEventHandler =
    typeof attribute.idlType.idlType === "string" &&
    attribute.idlType.idlType.endsWith("EventHandler"); // includes OnErrorEventHandler
  return {
    name: attribute.name,
    ...convertIdlType(attribute.idlType),
    static: attribute.special === "static",
    stringifier: attribute.special === "stringifier",
    readonly: attribute.readonly,
    eventHandler: isEventHandler ? attribute.name.slice(2) : undefined,
    exposed:
      getExtAttrConcatenated(attribute.extAttrs, "Exposed") ||
      inheritedExposure,
    putForwards: getExtAttr(attribute.extAttrs, "PutForwards")[0],
    secureContext: hasExtAttr(attribute.extAttrs, "SecureContext"),
    allowShared: hasExtAttr(attribute.extAttrs, "AllowShared"),
  };
}

function convertConstantMember(
  constant: webidl2.ConstantMemberType,
): Browser.Constant {
  return {
    name: constant.name,
    type: constant.idlType.idlType as string,
    value: convertConstantValue(constant.value),
  };
}

function convertConstantValue(value: webidl2.ValueDescription): string {
  switch (value.type) {
    case "string":
      return `"${value.value}"`;
    case "boolean":
    case "number":
    case "sequence":
      return `${value.value}`;
    case "null":
    case "NaN":
      return value.type;
    case "Infinity":
      return (value.negative ? "-" : "") + value.type;
    case "dictionary":
      return "{}";
    default:
      throw new Error(`Not implemented: ${(value as any).type}`);
  }
}

function convertNamespace(
  namespace: webidl2.NamespaceType,
  commentMap: Record<string, string>,
) {
  const result: Browser.Interface = {
    name: namespace.name,
    namespace: true,
    constructor: { signature: [] },
    methods: { method: {} },
    properties: { property: {} },
    exposed: getExtAttrConcatenated(namespace.extAttrs, "Exposed"),
  };
  for (const member of namespace.members) {
    if (member.type === "attribute") {
      result.properties!.property[member.name] = convertAttribute(
        member,
        result.exposed,
      );
      addComments(
        result.properties!.property[member.name],
        commentMap,
        namespace.name,
        member.name,
      );
    } else if (member.type === "operation" && member.idlType) {
      const operation = convertOperation(member, result.exposed);
      const { method } = result.methods!;
      if (method[member.name!]) {
        method[member.name!].signature.push(...operation.signature);
      } else {
        method[member.name!] = operation as Browser.Method;
      }
      if (member.name) {
        addComments(
          method[member.name],
          commentMap,
          namespace.name,
          member.name,
        );
      }
    }
  }

  return result;
}

function convertDictionary(
  dictionary: webidl2.DictionaryType,
  commentsMap: Record<string, string>,
) {
  const result: Browser.Dictionary = {
    name: dictionary.name,
    members: { member: {} },
  };
  if (dictionary.inheritance) {
    result.extends = dictionary.inheritance;
  }
  for (const member of dictionary.members) {
    result.members.member[member.name] = convertDictionaryMember(member);
    addComments(
      result.members.member[member.name],
      commentsMap,
      dictionary.name,
      member.name,
    );
  }
  addComments(result, commentsMap, dictionary.name);
  return result;
}

function convertDictionaryMember(
  member: webidl2.DictionaryMemberType,
): Browser.Member {
  return {
    name: member.name,
    default: member.default ? convertConstantValue(member.default) : undefined,
    required: member.required,
    ...convertIdlType(member.idlType),
  };
}

function convertEnum(en: webidl2.EnumType): Browser.Enum {
  return {
    name: en.name,
    value: en.values.map((value) => value.value),
  };
}

function convertTypedef(typedef: webidl2.TypedefType): Browser.TypeDef {
  return {
    name: typedef.name,
    ...convertIdlType(typedef.idlType),
  };
}

function convertIdlType(i: webidl2.IDLTypeDescription): Browser.Typed {
  if (typeof i.idlType === "string") {
    return {
      type: i.idlType,
      nullable: i.nullable,
      allowShared: hasExtAttr(i.extAttrs, "AllowShared"),
    };
  }
  if (i.generic) {
    return {
      type: i.generic,
      subtype: !Array.isArray(i.idlType)
        ? convertIdlType(i.idlType)
        : i.idlType.length === 1
          ? convertIdlType(i.idlType[0])
          : i.idlType.map(convertIdlType),
      nullable: i.nullable,
    };
  }
  if (i.union) {
    return {
      type: (i.idlType as webidl2.IDLTypeDescription[]).map(convertIdlType),
      nullable: i.nullable,
    };
  }
  throw new Error("Unsupported IDL type structure");
}
