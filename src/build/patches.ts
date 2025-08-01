import { parse, type Node } from "kdljs";
import type { Enum, Event, Property } from "./types";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";
type Properties = Record<string, Partial<Property>>;

/**
 * Converts patch files in KDL to match the [types](types.d.ts).
 */
function parseKDL(kdlText: string) {
  const { output, errors } = parse(kdlText);

  if (errors.length) {
    throw new Error("KDL parse errors", { cause: errors });
  }

  const nodes = output!;
  const enums: Record<string, Enum> = {};
  const mixins: Record<string, any> = {};

  for (const node of nodes) {
    switch (node.name) {
      case "enum":
        handleEnum(node, enums);
        break;
      case "interface-mixin":
        handleMixin(node, mixins);
        break;
      default:
        throw new Error(`Unknown node name: ${node.name}`);
    }
  }

  return { enums: { enum: enums }, mixins: { mixin: mixins } };
}

/**
 * Handles an enum node by extracting its name and values.
 * Throws an error if the enum name is missing or if the values are not in the correct format.
 * @param node The enum node to handle.
 * @param enums The record of enums to update.
 */
function handleEnum(node: Node, enums: Record<string, Enum>) {
  const name = node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing enum name");
  }
  const values: string[] = [];

  for (const child of node.children) {
    values.push(child.name);
  }

  enums[name] = { name, value: values };
}

/**
 * Handles a mixin node by extracting its name and associated members.
 * Throws an error if the mixin name is missing.
 * Adds them to the mixins record under the mixin's name.
 * @param node The mixin node to handle.
 * @param mixins The record of mixins to update.
 */
function handleMixin(node: Node, mixins: Record<string, any>) {
  const name = node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing mixin name");
  }

  const event: Event[] = [];
  const property: Properties = {};

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
      default:
        throw new Error(`Unknown node name: ${child.name}`);
    }
  }

  mixins[name] = { name, events: { event }, properties: { property } };
}

/**
 * Handles a child node of type "event" and adds it to the event array.
 * @param child The child node to handle.
 */
function handleEvent(child: Node) {
  return {
    name: child.values[0] as string,
    type: child.properties.type as string,
  };
}

/**
 * Handles a child node of type "property" and adds it to the property object.
 * @param child The child node to handle.
 */
function handleProperty(child: Node) {
  return {
    name: child.values[0] as string,
    exposed: child.properties?.exposed as string,
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
