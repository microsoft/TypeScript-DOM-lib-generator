//! This file:
//! - Locates all KDL files in the `patches/` directory.
//! - Parses and type-checks them.
//! - Merges their contents and applies structural transformations over the main IDL dataset.

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
  TypeDef,
} from "./types.ts";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.ts";

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

interface OverridableMethod extends Omit<Method, "signature"> {
  signature: DeepPartial<Signature>[] | Record<number, DeepPartial<Signature>>;
}

function optionalMember<const T>(prop: string, type: T, value?: Value) {
  if (value === undefined) {
    return {};
  }
  if (typeof value !== type) {
    throw new Error(`Expected type ${value} for ${prop}`);
  }
  return {
    [prop]: value as T extends "string"
      ? string
      : T extends "number"
        ? number
        : T extends "boolean"
          ? boolean
          : never,
  };
}

function string(arg: unknown): string {
  if (typeof arg !== "string") {
    throw new Error(`Expected a string but found ${typeof arg}`);
  }
  return arg;
}

function handleSingleTypeNode(type: Node): DeepPartial<Typed> {
  const isTyped = type.name == "type";
  if (!isTyped) {
    throw new Error("Expected a type node");
  }
  const typeValue = type.values[0];
  const subType =
    type.children.length > 0 ? handleTyped(type.children) : undefined;
  const isUnion = typeof type.properties.union == "boolean";
  return {
    ...optionalMember("type", "string", typeValue),
    subtype:
      isUnion && typeof subType?.type !== "string" ? subType?.type : subType,
    ...optionalMember("nullable", "boolean", type.properties?.nullable),
  };
}

function handleTyped(
  typeNodes: Node[],
  property?: Value,
): DeepPartial<Typed> | undefined {
  if (property) {
    if (typeNodes.length) {
      throw new Error("Type nodes can't coexist with type property");
    }
    return {
      type: string(property),
      subtype: undefined,
    };
  }

  const types = typeNodes.map(handleSingleTypeNode);
  if (typeNodes.length > 1) {
    // union types
    return { type: types };
  }
  // either a non-union type or no type
  return types[0];
}

function handleTypeParameters(value: Value | Node) {
  if (!value) {
    return {};
  }
  if (typeof value === "string") {
    return { typeParameters: [{ name: value }] };
  }
  const node = value as Node;
  return {
    typeParameters: [
      {
        name: string(node.values[0]),
        ...optionalMember("default", "string", node.properties?.default),
        ...optionalMember("extends", "string", node.properties?.extends),
      },
    ],
  };
}

function optionalNestedMember<T>(prop: string, object: object, output: T) {
  return Object.entries(object).length ? { [prop]: output } : {};
}

/**
 * Converts parsed KDL Document nodes to match the [types](types.d.ts).
 */
function convertKDLNodes(nodes: Node[]): DeepPartial<WebIdl> {
  const enums: Record<string, Partial<Enum>> = {};
  const mixin: Record<string, DeepPartial<Interface>> = {};
  const interfaces: Record<string, DeepPartial<Interface>> = {};
  const dictionary: Record<string, DeepPartial<Dictionary>> = {};
  const typedefs: DeepPartial<TypeDef>[] = [];

  for (const node of nodes) {
    // Note: no "removals" handling here; caller is responsible for splitting
    const name = string(node.values[0]);
    switch (node.name) {
      case "enum":
        enums[name] = handleEnum(node);
        break;
      case "interface-mixin":
        mixin[name] = merge(
          mixin[name],
          handleMixinAndInterfaces(node, "mixin"),
        );
        break;
      case "interface":
        interfaces[name] = merge(
          interfaces[name],
          handleMixinAndInterfaces(node, "interface"),
        );
        break;
      case "dictionary":
        dictionary[name] = merge(dictionary[name], handleDictionary(node));
        break;
      case "typedef":
        typedefs.push(handleTypedef(node));
        break;
      default:
        throw new Error(`Unknown node name: ${node.name}`);
    }
  }

  return {
    ...optionalNestedMember("enums", enums, { enum: enums }),
    ...optionalNestedMember("mixins", mixin, { mixin }),
    ...optionalNestedMember("interfaces", interfaces, {
      interface: interfaces,
    }),
    ...optionalNestedMember("dictionaries", dictionary, { dictionary }),
    ...optionalNestedMember("typedefs", typedefs, { typedef: typedefs }),
  };
}

/**
 * Handles an enum node by extracting its name and values.
 * Throws an error if the enum name is missing or if the values are not in the correct format.
 * @param node The enum node to handle.
 * @param enums The record of enums to update.
 */
function handleEnum(node: Node): Partial<Enum> {
  const name = string(node.properties?.name || node.values[0]);
  const values: string[] = [];

  for (const child of node.children) {
    values.push(child.name);
  }

  return {
    name,
    ...optionalNestedMember("value", values, values),
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
function handleMixinAndInterfaces(
  node: Node,
  type: "mixin" | "interface",
): DeepPartial<Interface> {
  const name = string(node.properties?.name || node.values[0]);

  const event: Event[] = [];
  const property: Record<string, DeepPartial<Property>> = {};
  let method: Record<string, DeepPartial<OverridableMethod>> = {};
  let constructor: DeepPartial<OverridableMethod> | undefined;
  let typeParameters = {};
  const includes: string[] = [];

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
        const m = handleMethodAndConstructor(child);
        method = merge(method, {
          [methodName]: m,
        });
        break;
      }
      case "constructor": {
        const c = handleMethodAndConstructor(child, true);
        constructor = merge(constructor, c);
        break;
      }
      case "typeParameters": {
        typeParameters = handleTypeParameters(child);
        break;
      }
      case "includes": {
        includes.push(string(child.values[0]));
        break;
      }
      default:
        throw new Error(`Unknown node name: ${child.name}`);
    }
  }

  const interfaceObject = type === "interface" && {
    ...typeParameters,
    ...(constructor ? { constructor } : {}),
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
    ...optionalNestedMember("events", event, { event }),
    ...optionalNestedMember("properties", property, { property }),
    ...optionalNestedMember("methods", method, { method }),
    ...optionalNestedMember("implements", includes, includes),
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
function handleProperty(child: Node): DeepPartial<Property> {
  const typeNodes = child.children.filter((c) => c.name === "type");

  return {
    name: string(child.values[0]),
    ...optionalMember("exposed", "string", child.properties?.exposed),
    ...optionalMember("optional", "boolean", child.properties?.optional),
    ...optionalMember("overrideType", "string", child.properties?.overrideType),
    ...handleTyped(typeNodes, child.properties?.type),
    ...optionalMember("readonly", "boolean", child.properties?.readonly),
    ...optionalMember("deprecated", "string", child.properties?.deprecated),
    ...optionalMember("mdnUrl", "string", child.properties?.mdnUrl),
  };
}

function handleParam(node: Node) {
  const name = string(node.values[0]);
  let additionalTypes: string[] | undefined;
  const typeNodes: Node[] = [];

  for (const child of node.children) {
    switch (child.name) {
      case "additionalTypes": {
        if (additionalTypes) {
          throw new Error("Unexpected multiple additionalTypes node");
        }
        additionalTypes = child.values.map(string);
        break;
      }
      case "type": {
        typeNodes.push(child);
        break;
      }
      default:
        throw new Error(`Unexpected child "${child.name}" in param "${name}"`);
    }
  }

  return {
    name,
    ...handleTyped(typeNodes, node.properties?.type),
    ...optionalMember("overrideType", "string", node.properties?.overrideType),
    additionalTypes,
  };
}

/**
 * Handles a child node of type "method" or "constructor" and adds it to the method or constructor object.
 * @param child The child node to handle.
 * @param isConstructor Whether the child node is a constructor.
 */
function handleMethodAndConstructor(
  child: Node,
  isConstructor: boolean = false,
): DeepPartial<OverridableMethod> {
  const name = isConstructor ? undefined : string(child.values[0]);

  // Collect all type nodes into an array
  const typeNodes: Node[] = [];
  const params: DeepPartial<Param>[] = [];

  for (const c of child.children) {
    switch (c.name) {
      case "type":
        typeNodes.push(c);
        break;

      case "param":
        params.push(handleParam(c));
        break;

      default:
        throw new Error(`Unexpected child "${c.name}" in method "${name}"`);
    }
  }

  const signatureIndex = child.properties?.signatureIndex;
  const type = handleTyped(typeNodes, child.properties?.returns);

  let signature: OverridableMethod["signature"] = [];
  if (type || params.length > 0) {
    // Determine the actual signature object
    const signatureObj: DeepPartial<Signature> = {
      param: params,
      ...type,
    };
    if (typeof signatureIndex == "number") {
      signature = { [signatureIndex]: signatureObj };
    } else {
      signature = [signatureObj];
    }
  }
  return {
    name,
    signature,
    ...optionalMember("exposed", "string", child.properties.exposed),
  };
}

/**
 * Handles dictionary nodes
 * @param child The dictionary node to handle.
 */
function handleDictionary(child: Node): DeepPartial<Dictionary> {
  const name = string(child.values[0]);
  const member: Record<string, DeepPartial<Member>> = {};
  let typeParameters = {};

  for (const c of child.children) {
    switch (c.name) {
      case "member": {
        const memberName = string(c.values[0]);
        member[memberName] = handleMember(c);
        break;
      }
      case "typeParameters": {
        typeParameters = handleTypeParameters(c);
        break;
      }
      default:
        throw new Error(`Unknown node name: ${c.name}`);
    }
  }

  return {
    name,
    members: { member },
    ...typeParameters,
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
function handleMember(c: Node): DeepPartial<Member> {
  const name = string(c.values[0]);
  const typeNodes = c.children.filter((c) => c.name === "type");
  return {
    name,
    ...handleTyped(typeNodes, c.properties?.type),
    ...optionalMember("required", "boolean", c.properties?.required),
    ...optionalMember("deprecated", "string", c.properties?.deprecated),
    ...optionalMember("overrideType", "string", c.properties?.overrideType),
  };
}

/**
 * Handles typedef nodes
 * @param node The typedef node to handle.
 */
function handleTypedef(node: Node): DeepPartial<TypeDef> {
  const typeNodes: Node[] = [];
  let typeParameters = {};
  for (const child of node.children) {
    switch (child.name) {
      case "type":
        typeNodes.push(child);
        break;
      case "typeParameters": {
        typeParameters = handleTypeParameters(child);
        break;
      }
      default:
        throw new Error(
          `Unexpected child "${child.name}" in typedef "${node.values[0]}"`,
        );
    }
  }
  return {
    name: string(node.values[0]),
    ...handleTyped(typeNodes),
    ...optionalMember(
      "legacyNamespace",
      "string",
      node.properties?.legacyNamespace,
    ),
    ...optionalMember("overrideType", "string", node.properties?.overrideType),
    ...typeParameters,
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
 * Read and parse a single KDL file into its KDL Document structure.
 */
async function readPatchDocument(fileUrl: URL): Promise<Document> {
  const text = await readFile(fileUrl, "utf8");
  const { output, errors } = parse(text);
  if (errors.length) {
    throw new Error(`KDL parse errors in ${fileUrl.toString()}`, {
      cause: errors,
    });
  }
  return output!;
}
/**
 * Recursively remove all 'name' fields from the object and its children, and
 * replace any empty objects ({} or []) with null.
 */
function convertForRemovals(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(convertForRemovals).filter((v) => v !== undefined);
  }
  if (obj && typeof obj === "object") {
    const newObj: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "name") {
        const cleaned = convertForRemovals(value);
        // (intentionally covers null too)
        if (typeof cleaned === "object") {
          newObj[key] = cleaned;
        } else if (cleaned !== undefined) {
          newObj[key] = null;
        }
      }
    }
    // Replace empty objects with null
    return Object.keys(newObj).length === 0 ? null : newObj;
  }
  return obj;
}

/**
 * Read, parse, and merge all KDL files under the input folder.
 * Splits the main patch content and the removals from each file for combined processing.
 *
 * Returns:
 *   {
 *     patches: merged patch contents (excluding removals),
 *     removalPatches: merged removals, with names stripped
 *   }
 */
export default async function readPatches(): Promise<{
  patches: any;
  removalPatches: any;
}> {
  const patchDirectory = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllFileURLs(patchDirectory);

  // Stage 1: Parse all file KDLs into Documents
  const documents = await Promise.all(fileUrls.map(readPatchDocument));

  // Stage 2: Group by patches or removals
  const merged = documents.flat();
  const patchNodes = merged.filter((node) => node.name !== "removals");
  const removalNodes = merged
    .filter((node) => node.name === "removals")
    .map((node) => node.children)
    .flat();

  // Stage 3: Convert the nodes for patches and removals respectively
  const patches = convertKDLNodes(patchNodes);
  const removalPatches = convertForRemovals(
    convertKDLNodes(removalNodes),
  ) as DeepPartial<WebIdl>;

  return { patches, removalPatches };
}
