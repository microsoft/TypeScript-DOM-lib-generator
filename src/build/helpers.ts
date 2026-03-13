import * as Browser from "./types.ts";

// Extended types used but not defined in the spec
export const arrayBufferViewTypes = new Set([
  "ArrayBufferView",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Int16Array",
  "Uint16Array",
  "Uint8ClampedArray",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
]);
export const bufferSourceTypes = new Set([
  "ArrayBuffer",
  "SharedArrayBuffer",
  ...arrayBufferViewTypes,
]);
export const integerTypes = new Set([
  "byte",
  "octet",
  "short",
  "unsigned short",
  "long",
  "unsigned long",
  "long long",
  "unsigned long long",
]);
export const stringTypes = new Set([
  "ByteString",
  "DOMString",
  "USVString",
  "CSSOMString",
]);
// Trusted Types https://w3c.github.io/trusted-types/dist/spec/
export const trustedStringTypes = new Set([
  "HTMLString",
  "ScriptString",
  "ScriptURLString",
]);
const floatTypes = new Set([
  "float",
  "unrestricted float",
  "double",
  "unrestricted double",
]);
const sameTypes = new Set([
  "any",
  "boolean",
  "Date",
  "Function",
  "Promise",
  "PromiseLike",
  "undefined",
  "void",
  "bigint",
]);
export const baseTypeConversionMap = new Map<string, string>([
  ...[...bufferSourceTypes].map((type) => [type, type] as const),
  ...[...integerTypes, ...floatTypes].map((type) => [type, "number"] as const),
  ...[...stringTypes, ...trustedStringTypes].map(
    (type) => [type, "string"] as const,
  ),
  ...[...sameTypes].map((type) => [type, type] as const),
  ["object", "any"],
  ["sequence", "Array"],
  ["ObservableArray", "Array"],
  ["record", "Record"],
  ["FrozenArray", "ReadonlyArray"],
  ["EventHandler", "EventHandler"],
  ["ArrayBufferLike", "ArrayBufferLike"],
]);

export function deepFilter<T>(
  obj: T,
  fn: (o: any, n: string | undefined) => boolean,
): T {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      return mapDefined(obj, (e) =>
        fn(e, undefined) ? deepFilter(e, fn) : undefined,
      ) as any as T;
    } else {
      const result: any = {};
      for (const e in obj) {
        if (fn(obj[e], e)) {
          result[e] = deepFilter(obj[e], fn);
        }
      }
      return result;
    }
  }
  return obj;
}

export function filterProperties<T, U extends T>(
  obj: Record<string, U>,
  fn: (o: T) => boolean,
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const e in obj) {
    if (fn(obj[e])) {
      result[e] = obj[e];
    }
  }
  return result;
}

export function exposesTo(o: { exposed?: string }, target: string[]): boolean {
  if (!o || typeof o.exposed !== "string") {
    return true;
  }
  if (o.exposed === "*") {
    return true;
  }
  return o.exposed.split(" ").some((e) => target.includes(e));
}

export function merge<T>(
  target: T,
  src: T,
  {
    shallow = false,
    optional = false,
  }: { shallow?: boolean; optional?: boolean } = {},
): T {
  if (typeof target !== "object" || typeof src !== "object") {
    return src;
  }
  if (!target || !src) {
    throw new Error("Either `target` or `src` is null");
  }
  for (const k in src) {
    if (Object.getOwnPropertyDescriptor(src, k)) {
      if (Object.getOwnPropertyDescriptor(target, k)) {
        const targetProp = target[k];
        const srcProp = src[k];
        if (Array.isArray(targetProp) && Array.isArray(srcProp)) {
          mergeNamedArrays(targetProp, srcProp);
        } else {
          if (
            shallow &&
            typeof (targetProp as any).name === "string" &&
            typeof (srcProp as any).name === "string"
          ) {
            target[k] = srcProp;
          } else {
            if (targetProp === srcProp && k !== "name") {
              console.warn(
                `Redundant merge value ${targetProp} in ${JSON.stringify(src)}`,
              );
            }
            target[k] = merge(targetProp, srcProp, { shallow, optional });
          }
        }
      } else if (!optional || typeof src[k] !== "object") {
        target[k] = src[k];
      }
    }
  }
  return target;
}

function mergeNamedArrays<T extends { name: string }>(
  srcProp: T[],
  targetProp: T[],
) {
  const map: any = {};
  for (const e1 of srcProp) {
    const { name } = e1;
    if (name) {
      map[name] = e1;
    }
  }

  for (const e2 of targetProp) {
    const { name } = e2;
    if (name && map[name]) {
      merge(map[name], e2);
    } else {
      srcProp.push(e2);
    }
  }
}

export function distinct<T>(a: T[]): T[] {
  return Array.from(new Set(a).values());
}

export function mapToArray<T>(m?: Record<string, T>): T[] {
  return Object.keys(m || {}).map((k) => m![k]);
}

export function arrayToMap<T, U>(
  array: ReadonlyArray<T>,
  makeKey: (value: T) => string,
  makeValue: (value: T) => U,
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const value of array) {
    result[makeKey(value)] = makeValue(value);
  }
  return result;
}

export function mapValues<T, U>(
  obj: Record<string, T> | undefined,
  fn: (o: T) => U,
): U[] {
  return Object.keys(obj || {}).map((k) => fn(obj![k]));
}

export function mapDefined<T, U>(
  array: ReadonlyArray<T> | undefined,
  mapFn: (x: T, i: number) => U | undefined,
): U[] {
  const result: U[] = [];
  if (array) {
    for (let i = 0; i < array.length; i++) {
      const mapped = mapFn(array[i], i);
      if (mapped !== undefined) {
        result.push(mapped);
      }
    }
  }
  return result;
}

export function toNameMap<T extends { name: string }>(
  array: T[],
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const value of array) {
    result[value.name] = value;
  }
  return result;
}

export function concat<T>(a: T[] | undefined, b: T[] | undefined): T[] {
  return !a ? b || [] : a.concat(b || []);
}

export function getEmptyWebIDL(): Browser.WebIdl {
  return {
    callbackFunctions: {
      callbackFunction: {},
    },
    callbackInterfaces: {
      interface: {},
    },
    dictionaries: {
      dictionary: {},
    },
    enums: {
      enum: {},
    },
    interfaces: {
      interface: {},
    },
    mixins: {
      mixin: {},
    },
    typedefs: {
      typedef: [],
    },
    namespaces: [],
  };
}

export function resolveExposure(
  obj: Record<string, any>,
  exposure: string,
  override?: boolean,
): void {
  if (!exposure) {
    throw new Error("No exposure set");
  }
  if ("exposed" in obj && (override || obj.exposed === undefined)) {
    obj.exposed = exposure;
  }
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key]) {
      resolveExposure(obj[key], exposure, override);
    }
  }
}

function collectTypeReferences(obj: any): string[] {
  const collection: string[] = [];
  if (typeof obj !== "object") {
    return collection;
  }
  if (Array.isArray(obj)) {
    return collection.concat(...obj.map(collectTypeReferences));
  }

  if (typeof obj.type === "string") {
    collection.push(obj.type);
  }
  if (Array.isArray(obj.implements)) {
    collection.push(...obj.implements);
  }
  if (typeof obj.extends === "string") {
    collection.push(obj.extends);
  }

  for (const e in obj) {
    collection.push(...collectTypeReferences(obj[e]));
  }
  return collection;
}

function getNonValueTypeMap(webidl: Browser.WebIdl) {
  const namedTypes: { name: string }[] = [
    ...mapToArray(webidl.callbackFunctions!.callbackFunction),
    ...mapToArray(webidl.callbackInterfaces!.interface),
    ...mapToArray(webidl.dictionaries!.dictionary),
    ...mapToArray(webidl.enums!.enum),
    ...mapToArray(webidl.mixins!.mixin),
    ...webidl.typedefs!.typedef,
  ];
  return new Map(namedTypes.map((t) => [t.name, t] as [string, any]));
}

export function followTypeReferences(
  webidl: Browser.WebIdl,
  filteredInterfaces: Record<string, Browser.Interface>,
): Set<string> {
  const set = new Set<string>();
  const map = getNonValueTypeMap(webidl);

  new Set(collectTypeReferences(filteredInterfaces)).forEach(follow);
  return set;

  function follow(reference: string) {
    if (
      baseTypeConversionMap.has(reference) ||
      reference in filteredInterfaces
    ) {
      return;
    }
    const type = map.get(reference);
    if (!type) {
      return;
    }
    if (!set.has(type.name)) {
      set.add(type.name);
      collectTypeReferences(type).forEach(follow);
    }
  }
}

export function assertUnique(list: string[]): string[] {
  if (new Set(list).size < list.length) {
    throw new Error(`Duplicate items found in the list: ${list}`);
  }
  return list;
}
