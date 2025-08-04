import { parse, type Value, type Node } from "kdljs";
import type { Enum, Event, Property, Interface, WebIdl, Method } from "./types";
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

  for (const node of nodes) {
    const name = node.values[0];
    if (typeof name !== "string") {
      throw new Error(`Missing name for ${node.name}`);
    }
    switch (node.name) {
      case "enum":
        enums[name] = handleEnum(node);
        break;
      case "interface-mixin":
        mixin[name] = handleMixin(node);
        break;
      default:
        throw new Error(`Unknown node name: ${node.name}`);
    }
  }

  return { enums: { enum: enums }, mixins: { mixin } };
}

/**
 * Handles an enum node by extracting its name and values.
 * Throws an error if the enum name is missing or if the values are not in the correct format.
 * @param node The enum node to handle.
 * @param enums The record of enums to update.
 */
function handleEnum(node: Node): Enum {
  const name = node.properties?.name || node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing enum name");
  }
  const values: string[] = [];

  for (const child of node.children) {
    values.push(child.name);
  }

  return { name, value: values };
}

/**
 * Handles a mixin node by extracting its name and associated members.
 * Throws an error if the mixin name is missing.
 * Adds them to the mixins record under the mixin's name.
 * @param node The mixin node to handle.
 * @param mixins The record of mixins to update.
 */
function handleMixin(node: Node): DeepPartial<Interface> {
  const name = node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing mixin name");
  }

  const event: Event[] = [];
  const property: Record<string, Partial<Property>> = {};
  const method: Record<string, Partial<Method>> = {};

  for (const child of node.children) {
    switch (child.name) {
      case "event":
        event.push(handleEvent(child));
        break;
      case "property": {
        const propName = child.values[0] as string;
        property[propName] = handleProperty(child);
        break;
      }
      case "method": {
        const methodName = child.values[0] as string;
        method[methodName] = handleMethod(child);
        break;
      }
      default:
        throw new Error(`Unknown node name: ${child.name}`);
    }
  }

  return {
    name,
    events: { event },
    properties: { property },
    methods: { method },
    ...optionalMember("extends", "string", node.properties?.extends),
  } as DeepPartial<Interface>;
}

/**
 * Handles a child node of type "event" and adds it to the event array.
 * @param child The child node to handle.
 */
function handleEvent(child: Node): Event {
  return {
    name: child.values[0] as string,
    type: child.properties.type as string,
  };
}

/**
 * Handles a child node of type "property" and adds it to the property object.
 * @param child The child node to handle.
 */
function handleProperty(child: Node): Partial<Property> {
  return {
    name: child.values[0] as string,
    ...optionalMember("exposed", "string", child.properties?.exposed),
    ...optionalMember("optional", "boolean", child.properties?.optional),
    ...optionalMember("overrideType", "string", child.properties?.overrideType),
  };
}

/**
 * Handles a child node of type "method" and adds it to the method object.
 * @param child The child node to handle.
 */
function handleMethod(child: Node): Partial<Method> {
  const name = child.values[0] as string;
  const isArray = child.values[1] as boolean | undefined;
  const returnType = child.properties.returns as string;
  const nullable = child.properties.nullable as boolean;

  const params = child.children.map((c) => ({
    name: c.values[0] as string,
    type: c.properties.type as string,
  }));

  const signature: Method["signature"] = [
    {
      type: isArray ? "sequence" : returnType,
      param: params,
      nullable,
      ...(isArray ? { subtype: { type: returnType } } : {}),
    },
  ];
  return { name, signature };
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
