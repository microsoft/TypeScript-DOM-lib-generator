export interface Typed {
  type: string | Typed[];
  subtype?: Typed | Typed[];
  nullable?: boolean;
  overrideType?: string;
  additionalTypes?: string[];
  allowShared?: boolean;
}

export interface Param extends Typed {
  name: string;
  optional?: boolean;
  variadic?: boolean;
}

export interface Signature extends Typed {
  param?: Param[];
  deprecated?: boolean;
  typeParameters?: TypeParameter[];
}

export interface Member extends Typed {
  name: string;
  default?: string;
  required?: boolean;
  specs?: string;
  comment?: string;
}

export interface Property extends Typed {
  name: string;
  eventHandler?: string;
  readonly?: boolean;
  replaceable?: string;
  putForwards?: string;
  stringifier?: boolean;
  tags?: string;
  "property-descriptor-not-enumerable"?: string;
  "content-attribute"?: string;
  "content-attribute-reflects"?: string;
  "content-attribute-value-syntax"?: string;
  "content-attribute-enum-values"?: string;
  "content-attribute-aliases"?: string;
  "content-attribute-boolean"?: string;
  "css-property"?: string;
  "css-property-enum-values"?: string;
  "css-property-initial"?: string;
  "css-property-value-syntax"?: string;
  "css-property-shorthand"?: string;
  "css-property-subproperties"?: string;
  "css-property-animatable"?: string;
  "css-property-aliases"?: string;
  "lenient-this"?: string;
  "treat-null-as"?: string;
  "event-handler-map-to-window"?: string;
  static?: boolean;
  comment?: string;
  optional?: boolean;
  specs?: string;
  deprecated?: boolean;
  exposed?: string;
  secureContext?: boolean;
  mdnUrl?: string;
}

export interface Event {
  name: string;
  type: string;
  dispatch?: string;
  "skips-window"?: string;
  bubbles?: 1;
  cancelable?: 1;
  follows?: string;
  precedes?: string;
  tags?: string;
  aliases?: string;
  specs?: string;
}

export interface AnonymousMethod {
  tags?: string;
  static?: boolean;
  getter?: boolean;
  stringifier?: boolean;
  comment?: string;
  overrideSignatures?: string[];
  additionalSignatures?: string[];
  specs?: string;
  exposed?: string;
  deprecated?: boolean;
  signature: Signature[];
  secureContext?: boolean;
  mdnUrl?: string;
}

export interface Method extends AnonymousMethod {
  name: string;
}

export interface CallbackFunction {
  name: string;
  signature: Signature[];
  tags?: string;
  overrideSignatures?: string[];
  specs?: string;
  typeParameters?: TypeParameter[];
}

export interface Constructor {
  signature: Signature[];
  comment?: string;
  specs?: string;
}

export interface NamedConstructor {
  name: string;
  signature: Signature[];
  specs?: string;
}

export interface Constant extends Typed {
  name: string;
  value: string;
  tags?: string;
  exposed?: string;
  specs?: string;
  comment?: string;
}

export interface ParsedAttribute {
  "enum-values"?: string;
  name: string;
  "value-syntax"?: string;
}

export interface Element {
  name: string;
  namespace?: string;
  deprecated?: boolean;
  specs?: string;
}

export interface TypeParameter {
  name: string;
  extends?: string;
  default?: string;
}

export interface Interface {
  name: string;
  mixin?: boolean;
  namespace?: boolean;
  extends?: string;
  // forward the interface members to another, while keeping the current name.
  forward?: string;
  // "extends" for the original interface, in case `forward: true`.
  forwardExtends?: string;
  comment?: string;
  constants?: {
    constant: Record<string, Constant>;
  };
  methods?: {
    method: Record<string, Method>;
  };
  events?: {
    event: Event[];
  };
  attributelessEvents?: {
    event: Event[];
  };
  properties?: {
    property: Record<string, Property>;
    namesakes?: Record<string, Property[]>;
  };
  constructor?: Constructor;
  implements?: string[];
  anonymousMethods?: {
    method: AnonymousMethod[];
  };
  "anonymous-content-attributes"?: {
    parsedattribute: ParsedAttribute[];
  };
  element?: Element[];
  namedConstructor?: NamedConstructor;
  exposed?: string;
  overrideExposed?: string;
  tags?: string;
  "implicit-this"?: 1;
  overrideThis?: string;
  noInterfaceObject?: boolean;
  global?: string;
  typeParameters?: TypeParameter[];
  overrideIndexSignatures?: string[];
  specs?: string;
  iterator?: Iterator;
  legacyWindowAlias?: string[];
  legacyNamespace?: string;
  nested?: {
    interfaces: Interface[];
    enums: Enum[];
    dictionaries: Dictionary[];
    typedefs: TypeDef[];
  };
  deprecated?: boolean | string;
  secureContext?: boolean;
  mdnUrl?: string;
  transferable?: boolean;
}

export interface Iterator {
  kind: "async_iterable" | "iterable" | "setlike" | "maplike";
  readonly: boolean;
  type: Typed[];
  param?: Param[];
  comments?: {
    comment: Record<string, string>;
  };
  exposed?: string;
  deprecated?: boolean | string;
}

export interface Enum {
  name: string;
  value: string[];
  specs?: string;
  legacyNamespace?: string;
}

export interface TypeDef extends Typed {
  name: string;
  deprecated?: boolean;
  legacyNamespace?: string;
  typeParameters?: TypeParameter[];
}

export interface Dictionary {
  name: string;
  extends?: string;
  members: {
    member: Record<string, Member>;
  };
  overrideIndexSignatures?: string[];
  specs?: string;
  typeParameters?: TypeParameter[];
  legacyNamespace?: string;
}

export interface WebIdl {
  callbackFunctions?: {
    callbackFunction: Record<string, CallbackFunction>;
  };
  callbackInterfaces?: {
    interface: Record<string, Interface>;
  };
  dictionaries?: {
    dictionary: Record<string, Dictionary>;
  };
  enums?: {
    enum: Record<string, Enum>;
  };
  interfaces?: {
    interface: Record<string, Interface>;
  };
  mixins?: {
    mixin: Record<string, Interface>;
  };
  typedefs?: {
    typedef: TypeDef[];
  };
  namespaces?: Interface[];
  events?: Map<string, Map<string, string>>;
}
