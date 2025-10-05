import { readFile } from "fs/promises";
const inputFile = new URL("../../inputfiles/mdn.json", import.meta.url);
// These are the subdirectory prefixes we care about for slugs
const subdirectories = [
  "web/api/",
  "webassembly/reference/javascript_interface/",
];

const paths: Record<string, string[]> = {
  "web-api-instance-property": ["properties", "property"],
  "web-api-static-property": ["properties", "property"],
  "web-api-instance-method": ["methods", "method"],
  "web-api-static-method": ["methods", "method"],
  "web-api-interface": [],
  "webgl-extension": [],
  "webgl-extension-method": ["methods", "method"],
  "webassembly-interface": [],
  "webassembly-instance-method": ["methods", "method"],
  "webassembly-instance-property": ["properties", "property"],
  "webassembly-static-method": ["methods", "method"],
};

function ensureLeaf(obj: Record<string, any>, keys: string[]) {
  let leaf = obj;
  for (const key of keys) {
    leaf[key] ??= {};
    leaf = leaf[key];
  }
  return leaf;
}

function insertComment(
  root: Record<string, any>,
  slug: string[],
  summary: string,
  path: string[],
) {
  if (!path.length) {
    const iface = ensureLeaf(root, slug);
    iface.comment = summary;
  } else {
    const [ifaceName, memberName] = slug;
    const target = ensureLeaf(root, [ifaceName, ...path, memberName]);
    target.comment = summary;
  }
}

function extractSlug(slug: string): string[] {
  for (const subdirectory of subdirectories) {
    if (!slug.toLowerCase().startsWith(subdirectory)) continue;
    return slug
      .slice(subdirectory.length)
      .replace(/_static/g, "")
      .split("/");
  }
  return [];
}

function generateComment(summary: string, name: string): string {
  // Escape special regex characters in the name
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return summary
    .replace(/\n/g, " ") // remove newlines
    .replace(
      // Match optional preceding identifier + dot OR just the name itself
      new RegExp(`(?:\\b\\w+\\.)?${escapedName}(\\(\\))?`),
      (match) => `**\`${match}\`**`,
    )
    .trim();
}

export async function generateDescriptions(): Promise<{
  interfaces: { interface: Record<string, any> };
}> {
  const content = await readFile(new URL(inputFile), "utf8");
  const mdn = JSON.parse(content);
  const results: Record<string, any> = {};
  // metadata is an array of objects, each with at least: slug, page-type, summary
  for (const entry of mdn.data) {
    const mdnUrl = entry.mdn_url.split("/en-US/docs/")[1];
    const slugArr = extractSlug(mdnUrl);
    const path = paths[entry.pageType];
    const comment = generateComment(entry.summary, slugArr[slugArr.length - 1]);
    if (!slugArr.length || !path) continue;
    insertComment(results, slugArr, comment, path);
  }
  return { interfaces: { interface: results } };
}
