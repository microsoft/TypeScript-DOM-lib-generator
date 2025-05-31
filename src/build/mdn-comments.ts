import fs from "fs/promises";
const basePath = new URL(
  "../../inputfiles/mdn/files/en-us/web/api/",
  import.meta.url,
);

function extractSummary(markdown: string): string {
  // Remove frontmatter (--- at the beginning)
  markdown = markdown.replace(/^---[\s\S]+?---\n/, "");

  // Normalize line breaks by collapsing consecutive newlines into a single space
  const normalizedText = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) =>
        line &&
        !line.startsWith("#") &&
        !line.startsWith(">") &&
        !line.startsWith("{{"),
    )
    .join(" ")
    .replace(
      /\{\{\s*(Glossary|HTMLElement|SVGAttr|SVGElement|cssxref|jsxref|HTTPHeader)\s*\(\s*["']((?:\\.|[^"\\])*?)["'].*?\)\s*\}\}/gi,
      "$2",
    ) // Extract first argument from multiple templates, handling escaped quotes & spaces
    .replace(
      /\{\{\s*domxref\s*\(\s*["']((?:\\.|[^"\\])*?)["'][^}]*\)\s*\}\}/gi,
      "$1",
    ) // Extract first argument from domxref, handling spaces
    .replace(
      /\{\{\s*(?:event|jsxref|cssref|specname)\s*\|\s*([^}]+)\s*\}\}/gi,
      "$1",
    ) // Handle event, jsxref, cssref, etc.
    .replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, match) => `[MISSING: ${match}]`) // Catch any remaining unhandled templates
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Keep link text but remove URLs
    .replace(/\s+/g, " ") // Normalize spaces
    .replace(/\n\s*/g, "\n") // Ensure line breaks are preserved
    .replace(/"/g, "'")
    .trim();

  // Extract the first sentence (ending in . ! or ?)
  const sentenceMatch = normalizedText.match(/(.*?[.!?])(?=\s|$)/);
  if (sentenceMatch) {
    return sentenceMatch[0]; // Return the first full sentence
  }

  const firstWord = normalizedText.split(" ")[0];
  return firstWord || "";
}

async function walkDirectory(dir: URL): Promise<URL[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const parentDirName = dir.pathname.split("/").filter(Boolean).slice(-1)[0];
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

const types: Record<string, string> = {
  property: "properties",
  method: "methods",
  "landing-page": "ignore",
  interface: "interfaces",
  overview: "ignore",
  event: "events",
};

function generateTypes(content: string): string[] | undefined {
  const pageType = content.match(/page-type:\s*["']?([^"'\n]+)["']?/)!;
  const type = pageType[1].split("-").pop()!;
  const plural = types[type];
  if (!plural) return;

  return [plural, type];
}

function generateSlug(content: string): string[] {
  const match = content.match(/slug:\s*["']?([^"'\n]+)["']?/)!;
  const url = match[1].split(":").pop()!;
  const parts = url.split("/").slice(2); // skip `/en-US/web/api/...`
  return parts; // Keep only top-level and method
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
  types?: string[],
) {
  if (slug.length === 1 || !types) {
    const iface = ensureLeaf(root, slug);
    iface.__comment = summary;
  } else {
    const [ifaceName, memberName] = slug;
    const iface = ensureLeaf(root, [ifaceName, ...types]);

    const mainComment = root[ifaceName]?.__comment;
    if (mainComment !== summary) {
      iface[memberName] = { comment: summary };
    }
  }
}

export async function generateDescriptions(removedComments: string[]): Promise<{
  interfaces: { interface: Record<string, any> };
}> {
  const stats = await fs.stat(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  const results: Record<string, any> = {};
  try {
    const indexPaths = await walkDirectory(basePath);

    await Promise.all(
      indexPaths.map(async (fileURL) => {
        try {
          const content = await fs.readFile(fileURL, "utf-8");
          const slug = generateSlug(content);
          const types = generateTypes(content);
          if (
            !slug ||
            slug.length === 0 ||
            removedComments.includes(slug[0]) ||
            (types && types[0] === "ignore")
          )
            return;

          const summary = extractSummary(content);
          if (
            summary ===
            "When writing code for the Web, there are a large number of Web APIs available."
          )
            console.log(types, slug, summary);
          insertComment(results, slug, summary, types);
        } catch (error) {
          console.error("Error generating API descriptions:", error);
        }
      }),
    );
  } catch (err) {
    console.error("Error generating API descriptions:", err);
  }
  return { interfaces: { interface: results } };
}
