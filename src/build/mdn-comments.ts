import fs from "fs/promises";
const basePath = new URL("../../inputfiles/mdn/files/en-us/", import.meta.url);
const subdirectories = [
  "web/api/",
  "webassembly/reference/javascript_interface/",
];

function trimEnds(str: string) {
  str = str.trim();
  if (
    (str.startsWith("'") && str.endsWith("'")) ||
    (str.startsWith('"') && str.endsWith('"')) ||
    (str.startsWith("(") && str.endsWith(")"))
  ) {
    return str.slice(1, -1).trim();
  }
  throw new Error(`No end to trim in ${str}`);
}

function extractSummary(markdown: string): string {
  // Remove frontmatter (--- at the beginning)
  markdown = markdown.replace(/^---[\s\S]+?---\n/, "");

  const firstParagraphStart = markdown.search(/\n[^{<>\n]/);
  if (firstParagraphStart === -1) {
    throw new Error("Couldn't find the first paragraph somehow", {
      cause: markdown.slice(0, 100),
    });
  }
  const firstParagraphEnd = markdown.indexOf("\n\n", firstParagraphStart);
  const firstParagraph = markdown
    .slice(firstParagraphStart + 1, firstParagraphEnd)
    .replaceAll("\n", " ");

  // Normalize line breaks by collapsing consecutive newlines into a single space
  const normalizedText = firstParagraph
    // Extract first argument from multiple templates, handling escaped quotes & spaces
    .replace(/\{\{ *(?:\w+)?([^}]*)\}\}/g, (_, arg) => {
      arg = arg.trim();
      if (!arg) {
        return "";
      }
      const args = trimEnds(arg).split(",");
      if (args.length > 2) {
        // For whatever reason domxref gives the first argument when there are more than 3 parameters
        return trimEnds(args[0]);
      }
      // For all other cases, the last argument is the plaintext
      return trimEnds(args.at(-1)!);
    })
    // Keep link text but remove URLs
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/"/g, "'")
    .trim();

  if (normalizedText.includes("{{")) {
    throw new Error("Couldn't parse the paragraph", {
      cause: normalizedText,
    });
  }

  // Extract the first sentence (ending in . ! or ?)
  const sentenceMatch = normalizedText.match(/(.*?[.!?])(?=\s|$)/);
  if (sentenceMatch) {
    return sentenceMatch[0]; // Return the first full sentence
  }

  return normalizedText;
}

async function walkDirectory(dir: URL): Promise<URL[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const parentDirName = dir.pathname.split("/").at(-1);
  let results: URL[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === parentDirName) continue;
      const subDir = new URL(`${entry.name}/`, dir);
      results = results.concat(await walkDirectory(subDir));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(new URL(entry.name, dir));
    }
  }

  return results;
}

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

function generatePath(content: string): string[] | undefined {
  const pageType = content.match(/\npage-type: (.+)\n/)!;
  const type = pageType[1];
  return paths[type];
}

function extractSlug(content: string): string[] {
  const match = content.match(/\nslug: (.+)\n/)!;
  const url = match[1].split(":").pop()!;
  const normalized = url.endsWith("_static") ? url.slice(0, -7) : url;
  for (const subdirectory of subdirectories) {
    if (normalized.toLowerCase().startsWith(subdirectory)) {
      return normalized.slice(subdirectory.length).split("/");
    }
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

export async function generateDescriptions(): Promise<{
  interfaces: { interface: Record<string, any> };
}> {
  const stats = await fs.stat(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  const results: Record<string, any> = {};
  const indexPaths = await Promise.all(
    subdirectories.map((dir) => walkDirectory(new URL(dir, basePath))),
  ).then((res) => res.flat());

  await Promise.all(
    indexPaths.map(async (fileURL) => {
      // XXX: Response.json currently causes racy collision
      if (fileURL.pathname.endsWith("web/api/response/json/index.md")) {
        return;
      }
      const content = await fs.readFile(fileURL, "utf-8");
      const slug = extractSlug(content);
      const generatedPath = generatePath(content);
      if (!slug.length || !generatedPath) return;

      const summary = extractSummary(content);
      insertComment(results, slug, summary, generatedPath);
    }),
  );
  return { interfaces: { interface: results } };
}
