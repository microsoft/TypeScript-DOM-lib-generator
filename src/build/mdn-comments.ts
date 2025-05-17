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
  let results: URL[] = [];

  for (const entry of entries) {
    const fullPath = new URL(`${entry.name}/`, dir);
    const fullFile = new URL(entry.name, dir);

    if (entry.isDirectory()) {
      results = results.concat(await walkDirectory(fullPath));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(fullFile);
    }
  }

  return results;
}

function generateSlug(content: string): string[] {
  const match = content.match(/slug:\s*["']?([^"'\n]+)["']?/)!;
  const url = match[1].split(":").pop()!;
  const parts = url.split("/").slice(2); // remove first 2 segments
  return parts;
}

function ensureLeaf(
  obj: Record<string, any>,
  keys: string[],
): Record<string, any> {
  let leaf = obj;
  for (const key of keys) {
    leaf[key] ??= {};
    leaf = leaf[key];
  }
  return leaf;
}

export async function generateDescriptions(): Promise<Record<string, any>> {
  const stats = await fs.stat(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  const results: Record<string, any> = {};
  try {
    const indexPaths = await walkDirectory(basePath);

    const promises = indexPaths.map(async (fileURL) => {
      try {
        const content = await fs.readFile(fileURL, "utf-8");
        const slug = generateSlug(content);
        const summary = extractSummary(content);
        const leaf = ensureLeaf(results, slug);
        leaf.__comment = summary;
      } catch (error) {
        console.warn(`Skipping ${fileURL.href}: ${error}`);
      }
    });

    // Wait for all file processing to finish
    await Promise.all(promises);
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }

  return results;
}
