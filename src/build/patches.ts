import { parse } from "kdljs";
import type { Enum, Event } from "./types";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

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
      case "mixin":
        handelMixin(node, mixins);
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
function handleEnum(node: any, enums: Record<string, Enum>) {
  const name = node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing enum name");
  }
  const values: string[] = [];

  for (const child of node.children ?? []) {
    values.push(child.name);
  }

  enums[name] = { name, value: values };
}

export function handelMixin(node: any, mixins: Record<string, any>) {
  const name = node.values[0];
  if (typeof name !== "string") {
    throw new Error("Missing mixin name");
  }
  const event: Event[] = [];
  if (node.values[1] == "event") {
    node.children?.forEach((child: any) => {
      event.push({
        name: child.name,
        type: child.values[0],
      });
    });
  }
  mixins[name] = { name, events: { event } };
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
