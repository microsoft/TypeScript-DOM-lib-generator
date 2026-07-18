import { readFile } from "fs/promises";
import { hyphenToCamelCase } from "./utils/css.ts";

const inputFile = new URL("../../inputfiles/mdn.json", import.meta.url);

// Valid subdirectories for our use case
const subdirectories = [
  "Web/API/",
  "WebAssembly/Reference/JavaScript_interface/",
  "Web/CSS/Reference/Properties/",
];

const paths: Record<string, string[]> = {
  "css-property": ["CSSStyleProperties", "properties", "property"],
  "css-shorthand-property": ["CSSStyleProperties", "properties", "property"],
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

/**
 * Maps MDN interface names to internal mixing interface names that should
 * share the same documentation comments.
 *
 * This mapping is primarily used to ensure that documentation from MDN for mixin-related
 * interfaces is propagated to all corresponding internal mixin utilities. For example, many DOM
 * mixin interfaces in the spec do not exist directly in the MDN docs, but their comments can
 * be derived from the main interface.
 *
 * Key:    MDN interface name as it appears in the MDN JSON data.
 * Value:  Array of internal mixin interface names that should receive the same MDN documentation.
 *
 * Add to this map whenever a mixin in the internal API structure is meant to expose
 * the same set of documentation as an MDN interface.
 */
const interfaceAliasMap: Record<string, string[]> = {
  HTMLAnchorElement: ["HyperlinkElementUtils", "HTMLHyperlinkElementUtils"],
  Document: ["DocumentOrShadowRoot"],
  HTMLButtonElement: ["PopoverTargetAttributes"],
  Element: ["ARIAMixin"],
};

function extractSlug(mdnUrl: string): string[] {
  for (const subdirectory of subdirectories) {
    if (!mdnUrl.startsWith(subdirectory)) {
      continue;
    }
    return mdnUrl
      .slice(subdirectory.length)
      .replace(/_static/g, "")
      .split("/");
  }
  return [];
}

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
  name: string,
) {
  const target = ensureLeaf(root, [...slug.slice(0, -1), ...path, name]);
  target.comment = summary;
}

function generateComment(summary: string, name: string): string | undefined {
  // Ban any non-alphanumeric characters in the name for safe regex
  // For now the only known exception is `RTCStatsReport/Symbol.iterator`.
  if (name.match(/\W/)) {
    return;
  }

  return summary
    .replace(/\n/g, " ") // remove newlines
    .replace(
      // Match optional preceding identifier + dot OR just the name itself
      new RegExp(`(?:\\b\\w+\\.)?${name}(\\(\\))?`),
      (match) => `**\`${match}\`**`,
    )
    .trim();
}

export async function generateDescriptions(): Promise<{
  interfaces: { interface: Record<string, any> };
  mixins: { mixin: Record<string, any> };
}> {
  const content = await readFile(new URL(inputFile), "utf8");
  const mdn = JSON.parse(content);
  const results: Record<string, any> = {};
  const mixinResults: Record<string, any> = {};

  // metadata is an array of objects, each with at least: slug, page-type, summary
  for (const entry of mdn) {
    const mdnUrl = entry.mdn_url.split("/en-US/docs/")[1];
    const slugArr = extractSlug(mdnUrl);
    const path = paths[entry.pageType];
    if (!slugArr.length || !path) {
      continue;
    }
    const leaf = slugArr.at(-1)!;
    const name = ["css-property", "css-shorthand-property"].includes(
      entry.pageType,
    )
      ? hyphenToCamelCase(leaf)
      : leaf;
    const comment = generateComment(entry.summary, name);
    if (!comment) {
      continue;
    }
    // Insert under the original name
    insertComment(results, slugArr, comment, path, name);

    // If this is an interface or member of a known-alias interface, insert a duplicate under the alias name(s)
    // Only need to do this if the interface being referenced is in our alias map.
    // Only alias when the slugArr's 0th element matches an aliased interface.
    if (slugArr.length > 0 && interfaceAliasMap[slugArr[0]]) {
      for (const alias of interfaceAliasMap[slugArr[0]]) {
        // Copy slugArr, but replace the base interface name with the alias
        const aliasedSlugArr = [alias, ...slugArr.slice(1)];
        insertComment(mixinResults, aliasedSlugArr, comment, path, name);
      }
    }
  }
  // The mixin output will contain interfaces (from mixinInterfaces) that are being aliased as mixins
  return {
    interfaces: { interface: results },
    mixins: { mixin: mixinResults },
  };
}
