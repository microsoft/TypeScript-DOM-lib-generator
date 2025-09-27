import { parse, type Value, type Node } from "kdljs";
import type {
  Enum,
  Event,
  Property,
  Interface,
  WebIdl,
  Method,
  Typed,
  AnonymousMethod,
} from "./types.js";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

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
  if (!value) return {};
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
function parseKDL(kdlText: string): DeepPartial<WebIdl> {
  const { output, errors } = parse(kdlText);

  if (errors.length) {
    throw new Error("KDL parse errors", { cause: errors });
  }

  const nodes = output!;
  const enums: Record<string, Enum> = {};
  const mixin: Record<string, DeepPartial<Interface>> = {};
  const interfaces: Record<string, DeepPartial<Interface>> = {};

  for (const node of nodes) {
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
      default:
        throw new Error(`Unknown node name: ${node.name}`);
    }
  }

  return {
    enums: { enum: enums },
    mixins: { mixin },
    interfaces: { interface: interfaces },
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
  const name = node.values[0];

  const event: Event[] = [];
  const property: Record<string, Partial<Property>> = {};
  const method: Record<string, Partial<Method>> = {};
  const anonymousMethods: Partial<AnonymousMethod>[] = [];

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
        method[methodName] = handleMethod(child);
        break;
      }
      case "anonymous-method":
        anonymousMethods.push(handleMethod(child, true));
        break;
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
    anonymousMethods: { method: anonymousMethods },
    ...optionalMember("extends", "string", node.properties?.extends),
    ...optionalMember("overrideThis", "string", node.properties?.overrideThis),
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
  return {
    name: string(child.values[0]),
    ...optionalMember("exposed", "string", child.properties?.exposed),
    ...optionalMember("optional", "boolean", child.properties?.optional),
    ...optionalMember("overrideType", "string", child.properties?.overrideType),
    ...optionalMember("type", "string", child.properties?.type),
  };
}

/**
 * Handles a child node of type "method" and adds it to the method object.
 * @param child The child node to handle.
 */
function handleMethod(
  child: Node,
  isAnonymous?: boolean,
): Partial<Method | AnonymousMethod> {
  const name = isAnonymous ? undefined : string(child.values[0]);
  if (!isAnonymous && !name) {
    throw new Error("Method node missing name");
  } else if (isAnonymous && name) {
    throw new Error("Anonymous method should not have a name");
  }

  let typeNode: Node | undefined;
  const params: { name: string; type: string }[] = [];

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
          type: string(c.properties.type),
        });
        break;

      default:
        throw new Error(`Unexpected child "${c.name}" in method "${name}"`);
    }
  }

  const signature: Method["signature"] = [
    {
      param: params,
      ...(typeNode
        ? handleTyped(typeNode)
        : { type: string(child.properties?.returns) }),
    },
  ];
  return {
    ...optionalMember("name", "string", name),
    signature,
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
 * Read, parse, and merge all KDL files under the input folder.
 */
export default async function readPatches(): Promise<any> {
  const patchDirectory = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllFileURLs(patchDirectory);

  const parsedContents = await Promise.all(fileUrls.map(readPatch));

  return parsedContents.reduce((acc, current) => merge(acc, current), {});
}
