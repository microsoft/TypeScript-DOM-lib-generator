import { parse, type Value, type Node, type Document } from "kdljs";
import type {
  Enum,
  Event,
  Property,
  Interface,
  WebIdl,
  Method,
  Typed,
  Param,
  Dictionary,
  Member,
  Signature,
} from "./types.js";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

type ParsedType = DeepPartial<WebIdl> & { removals?: DeepPartial<WebIdl> };

interface OverridableMethod extends Omit<Method, "signature"> {
  signature: DeepPartial<Signature>[] | Record<number, DeepPartial<Signature>>;
}

function optionalMember<const T>(
  prop: string,
  type: T,
  value?: Value | DeepPartial<WebIdl>,
) {
  if (value === undefined) {
    return {};
  }
  // Support deep property assignment, e.g. prop = "a.b.c"
  const propPath = prop.split(".");
  if (typeof value !== type) {
    throw new Error(
      `Expected type ${type} for ${prop} but got ${typeof value}`,
    );
  }
  // If value is an object, ensure it is not empty (has at least one key)
  if (type === "object" && typeof value === "object" && value !== null) {
    if (Object.keys(value as object).length === 0) {
      return {};
    }
  }

  // Build the nested object dynamically
  let nested: any = value as T extends "string"
    ? string
    : T extends "number"
      ? number
      : T extends "boolean"
        ? boolean
        : never;
  for (let i = propPath.length - 1; i >= 0; i--) {
    nested = { [propPath[i]]: nested };
  }
  return nested;
}

function string(arg: unknown): string {
  if (typeof arg !== "string") {
    throw new Error(`Expected a string but found ${typeof arg}`);
  }
  return arg;
}

function handleTyped(type: Node): Typed {
  const isTyped = type.name == "type";
  if (!isTyped) {
    throw new Error("Expected a type node");
  }
  const name = string(type.values[0]);
  const subType =
    type.children.length > 0 ? handleTyped(type.children[0]) : undefined;
  return {
    type: name,
    subtype: subType,
    ...optionalMember("nullable", "boolean", type.properties?.nullable),
  };
}

function handleTypeParameters(value: Value) {
  if (!value) {
    return {};
  }
  return {
    typeParameters: [
      {
        name: string(value),
      },
    ],
  };
}

/**
 * Converts patch files in KDL to match the [types](types.d.ts).
 */
function parseKDL(kdlText: string | Document): ParsedType {
  const { output, errors } =
    typeof kdlText === "string"
      ? parse(kdlText)
      : { output: kdlText, errors: [] };

  if (errors.length) {
    throw new Error("KDL parse errors", { cause: errors });
  }

  const nodes = output!;
  const enums: Record<string, Enum> = {};
  const mixin: Record<string, DeepPartial<Interface>> = {};
  const interfaces: Record<string, DeepPartial<Interface>> = {};
  const dictionary: Record<string, DeepPartial<Dictionary>> = {};
  let removals: DeepPartial<WebIdl> = {};

  for (const node of nodes) {
    if (node.name === "removals") {
      removals = parseKDL(node.children);
      continue;
    }
    const name = string(node.values[0]);
    switch (node.name) {
      case "enum":
        enums[name] = handleEnum(node);
        break;
      case "interface-mixin":
        mixin[name] = handleMixinandInterfaces(node, "mixin");
        break;
      case "interface":
        interfaces[name] = handleMixinandInterfaces(node, "interface");
        break;
      case "dictionary":
        dictionary[name] = handleDictionary(node);
        break;
      default:
        throw new Error(`Unknown node name: ${node.name}`);
    }
  }

  return {
    ...optionalMember("enums.enum", "object", enums),
    ...optionalMember("mixins.mixin", "object", mixin),
    ...optionalMember("interfaces.interface", "object", interfaces),
    ...optionalMember("dictionaries.dictionary", "object", dictionary),
    ...optionalMember("removals", "object", removals),
  };
}

/**
 * Handles an enum node by extracting its name and values.
 * Throws an error if the enum name is missing or if the values are not in the correct format.
 * @param node The enum node to handle.
 * @param enums The record of enums to update.
 */
function handleEnum(node: Node): Enum {
  const name = string(node.properties?.name || node.values[0]);
  const values: string[] = [];

  for (const child of node.children) {
    values.push(child.name);
  }

  return {
    name,
    value: values,
    ...optionalMember(
      "legacyNamespace",
      "string",
      node.properties.legacyNamespace,
    ),
  };
}

/**
 * Handles a mixin node by extracting its name and associated members.
 * Throws an error if the mixin name is missing.
 * Adds them to the mixins record under the mixin's name.
 * @param node The mixin node to handle.
 * @param mixins The record of mixins to update.
 */
function handleMixinandInterfaces(
  node: Node,
  type: "mixin" | "interface",
): DeepPartial<Interface> {
  const name = string(node.properties?.name || node.values[0]);

  const event: Event[] = [];
  const property: Record<string, Partial<Property>> = {};
  let method: Record<string, DeepPartial<OverridableMethod>> = {};

  for (const child of node.children) {
    switch (child.name) {
      case "event":
        event.push(handleEvent(child));
        break;
      case "property": {
        const propName = string(child.values[0]);
        property[propName] = handleProperty(child);
        break;
      }
      case "method": {
        const methodName = string(child.values[0]);
        const m = handleMethod(child);
        method = merge(method, {
          [methodName]: m,
        });
        break;
      }
      default:
        throw new Error(`Unknown node name: ${child.name}`);
    }
  }

  const interfaceObject = type === "interface" && {
    ...optionalMember("exposed", "string", node.properties?.exposed),
    ...optionalMember("deprecated", "string", node.properties?.deprecated),
    ...optionalMember(
      "noInterfaceObject",
      "boolean",
      node.properties?.noInterfaceObject,
    ),
  };
  return {
    name,
    events: { event },
    properties: { property },
    methods: { method },
    ...optionalMember("extends", "string", node.properties?.extends),
    ...optionalMember("overrideThis", "string", node.properties?.overrideThis),
    ...optionalMember("forward", "string", node.properties?.forward),
    ...optionalMember(
      "forwardExtends",
      "string",
      node.properties?.forwardExtends,
    ),
    ...optionalMember(
      "replaceReference",
      "string",
      node.properties?.replaceReference,
    ),
    ...handleTypeParameters(node.properties?.typeParameters),
    ...interfaceObject,
  } as DeepPartial<Interface>;
}

/**
 * Handles a child node of type "event" and adds it to the event array.
 * @param child The child node to handle.
 */
function handleEvent(child: Node): Event {
  return {
    name: string(child.values[0]),
    type: string(child.properties.type),
  };
}

/**
 * Handles a child node of type "property" and adds it to the property object.
 * @param child The child node to handle.
 */
function handleProperty(child: Node): Partial<Property> {
  let typeNode: Node | undefined;
  for (const c of child.children) {
    if (c.name === "type") {
      typeNode = c;
      break;
    }
  }

  return {
    name: string(child.values[0]),
    ...optionalMember("exposed", "string", child.properties?.exposed),
    ...optionalMember("optional", "boolean", child.properties?.optional),
    ...optionalMember("overrideType", "string", child.properties?.overrideType),
    ...(typeNode
      ? handleTyped(typeNode)
      : optionalMember("type", "string", child.properties?.type)),
    ...optionalMember("readonly", "boolean", child.properties?.readonly),
    ...optionalMember("deprecated", "boolean", child.properties?.deprecated),
  };
}

/**
 * Handles a child node of type "method" and adds it to the method object.
 * @param child The child node to handle.
 */
function handleMethod(child: Node): DeepPartial<OverridableMethod> {
  const name = string(child.values[0]);

  let typeNode: Node | undefined;
  const params: Partial<Param>[] = [];

  for (const c of child.children) {
    switch (c.name) {
      case "type":
        if (typeNode) {
          throw new Error(`Method "${name}" has multiple type nodes (invalid)`);
        }
        typeNode = c;
        break;

      case "param":
        params.push({
          name: string(c.values[0]),
          ...optionalMember("type", "string", c.properties?.type),
          ...optionalMember(
            "overrideType",
            "string",
            c.properties?.overrideType,
          ),
        });
        break;

      default:
        throw new Error(`Unexpected child "${c.name}" in method "${name}"`);
    }
  }

  // Determine the actual signature object
  const signatureObj: DeepPartial<Signature> = {
    param: params,
    ...(typeNode
      ? handleTyped(typeNode)
      : {
          type: string(child.properties?.returns),
          subtype: undefined,
        }),
  };

  let signature: OverridableMethod["signature"];
  const signatureIndex = child.properties?.signatureIndex;
  if (typeof signatureIndex == "number") {
    signature = { [signatureIndex]: signatureObj };
  } else {
    signature = [signatureObj];
  }
  return { name, signature };
}

/**
 * Handles dictionary nodes
 * @param child The dictionary node to handle.
 */
function handleDictionary(child: Node): DeepPartial<Dictionary> {
  const name = string(child.values[0]);
  const member: Record<string, Partial<Member>> = {};

  for (const c of child.children) {
    switch (c.name) {
      case "member": {
        const memberName = string(c.values[0]);
        member[memberName] = handleMember(c);
        break;
      }
      default:
        throw new Error(`Unknown node name: ${c.name}`);
    }
  }

  return {
    name,
    members: { member },
    ...handleTypeParameters(child.properties?.typeParameters),
    ...optionalMember(
      "legacyNamespace",
      "string",
      child.properties?.legacyNamespace,
    ),
    ...optionalMember("overrideType", "string", child.properties?.overrideType),
  };
}

/**
 * Handles dictionary member nodes
 * @param c The member node to handle.
 */
function handleMember(c: Node): Partial<Member> {
  const name = string(c.values[0]);
  return {
    name,
    ...optionalMember("type", "string", c.properties?.type),
    ...optionalMember("required", "boolean", c.properties?.required),
    ...optionalMember("deprecated", "boolean", c.properties?.deprecated),
    ...optionalMember("overrideType", "string", c.properties?.overrideType),
  };
}

/**
 * Collect all file URLs in a directory.
 */
async function getAllFileURLs(folder: URL): Promise<URL[]> {
  const entries = await readdir(folder, { withFileTypes: true });
  return entries.map((entry) => new URL(entry.name, folder));
}

/**
 * Read and parse a single KDL file.
 */
export async function readPatch(fileUrl: URL): Promise<any> {
  const text = await readFile(fileUrl, "utf8");
  return parseKDL(text);
}

/**
 * Remove all name fields from the object and its children as we don't want
 * the names to be part of the removal.
 */
function removeNamesDeep(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(removeNamesDeep);
  }
  if (obj && typeof obj === "object") {
    const newObj: { [key: string]: unknown } = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key !== "name") {
        newObj[key] = removeNamesDeep(value);
      }
    }
    return newObj;
  }
  return obj;
}

/**
 * Read, parse, and merge all KDL files under the input folder.
 */
export default async function readPatches(
  folder: "patches" | "removals",
): Promise<any> {
  const patchDirectory = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllFileURLs(patchDirectory);

  const parsedContents = await Promise.all(fileUrls.map(readPatch));
  const res = parsedContents.reduce((acc, current) => merge(acc, current), {});
  const { removals, ...withoutRemovals } = res;
  if (folder == "removals") {
    return removeNamesDeep(removals);
  }
  return withoutRemovals;
}
