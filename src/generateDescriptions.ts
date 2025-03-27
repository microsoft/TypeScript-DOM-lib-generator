import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanText(text: string): string {
  return text
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
    .replace(/\\(["'])/g, "$1") // Remove backslashes from escaped quotes
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">") // Decode HTML entities
    .replace(/`([^`]+)`/g, "$1") // Keep inline code readable
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Keep link text but remove URLs
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Normalize spaces
    .replace(/\n\s*/g, "\n") // Ensure line breaks are preserved
    .replace(/"/g, "'")
    .trim();
}

function extractSummary(markdown: string): string {
  // Remove frontmatter (--- at the beginning)
  markdown = markdown.replace(/^---[\s\S]+?---\n/, "");

  // Find the first meaningful paragraph
  const lines = markdown.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith(">") &&
      !trimmed.startsWith("{{")
    ) {
      return cleanText(trimmed);
    }
  }

  return "";
}

async function getFolders(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(dirPath, entry.name));
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

async function getIndexMdContents(
  folders: string[],
): Promise<{ [key: string]: string }> {
  const results: { [key: string]: string } = {};

  for (const folder of folders) {
    const indexPath = path.join(folder, "index.md");

    try {
      const content = await fs.readFile(indexPath, "utf-8");

      // Improved title extraction
      const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
      const title = titleMatch
        ? cleanText(titleMatch[1])
        : path.basename(folder);

      const summary = extractSummary(content);
      results[title] = summary;
    } catch (error) {
      console.warn(`Skipping ${indexPath}: ${error}`);
    }
  }

  return results;
}

export async function generateDescription() {
  const basePath = path.resolve(
    __dirname,
    "../mdn-content/files/en-us/web/api",
  );
  const outputDir = path.resolve(__dirname, "../inputfiles/mdn/");
  const outputFile = path.join(outputDir, "apiDescriptions.json");

  try {
    await fs.mkdir(outputDir, { recursive: true });
    const folders = await getFolders(basePath);
    const data = await getIndexMdContents(folders);
    await fs.writeFile(outputFile, JSON.stringify(data, null, 2), "utf-8");
    console.log(`API descriptions saved to ${outputFile}`);
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }
}
