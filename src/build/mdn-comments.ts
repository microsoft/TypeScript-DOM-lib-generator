import fs from "fs/promises";
import { fileURLToPath } from "url";

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

  // List of abbreviations that should not split sentences
  const abbreviations = new Set(["i.e"]);

  const splitter = (paragraph: string) => {
    return (
      paragraph
        .match(/(?:\b(?:[A-Z][a-z]+|I)\b[^.!?]*[.!?](?=\s|$))/g)
        ?.filter((sentence) => {
          return !abbreviations.has(
            sentence
              .toLowerCase()
              .trim()
              .replace(/[^a-z.]/gi, ""),
          );
        }) || []
    );
  };

  const sentenceMatch = splitter(normalizedText);
  if (sentenceMatch.length > 0) {
    return sentenceMatch[0]; // Return the first full sentence
  }

  return normalizedText.split(" ")[0] || ""; // Fallback: first word if no sentence found
}

async function getFolders(dirPath: URL): Promise<URL[]> {
  try {
    const entries = await fs.readdir(fileURLToPath(dirPath), {
      withFileTypes: true,
    });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => new URL(entry.name + "/", dirPath));
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

async function getIndexMdContents(
  folders: URL[],
): Promise<{ [key: string]: string }> {
  const results: { [key: string]: string } = {};

  for (const folder of folders) {
    const indexPath = new URL("index.md", folder);

    try {
      const content = await fs.readFile(fileURLToPath(indexPath), "utf-8");

      // Improved title extraction
      const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
      const filename = fileURLToPath(folder).split("/").pop();
      const title = titleMatch
        ? titleMatch[1].replace(/ extension$/, "")
        : filename || "";

      const summary = extractSummary(content);
      results[title] = summary;
    } catch (error) {
      console.warn(`Skipping ${indexPath}: ${error}`);
    }
  }

  return results;
}

export async function generateDescription(): Promise<Record<string, string>> {
  try {
    const folders = await getFolders(basePath);
    if (folders.length > 0) {
      return await getIndexMdContents(folders);
    }
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }

  return {};
}
