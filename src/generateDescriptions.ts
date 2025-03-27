import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanText(text: string): string {
  return text
    .replace(/\{\{domxref\(["']([^"']+)["'](?:,\s*["'][^"']+["'])?\)\}\}/g, "$1") // Extract domxref
    .replace(/\{\{(?:event|jsxref|glossary|cssref|specname)\|([^}]+)\}\}/gi, "$1") // Extract glossary, event, jsxref, etc.
    .replace(/\{\{[^}]+\}\}/g, "") // Remove any other unknown MDN templates
    .replace(/`([^`]+)`/g, "$1") // Keep inline code readable
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Keep link text but remove URLs
    .replace(/\s+/g, " ") // Normalize spaces
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

async function getIndexMdContents(folders: string[]): Promise<{ [key: string]: string }> {
  const results: { [key: string]: string } = {};

  for (const folder of folders) {
    const indexPath = path.join(folder, "index.md");

    try {
      const content = await fs.readFile(indexPath, "utf-8");

      // Improved title extraction
      const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
      const title = titleMatch ? cleanText(titleMatch[1]) : path.basename(folder);

      const summary = extractSummary(content);
      results[title] = summary;
    } catch (error) {
      console.warn(`Skipping ${indexPath}: ${error}`);
    }
  }

  return results;
}

export async function generateDescription() {
  const basePath = path.resolve(__dirname, "../mdn-content/files/en-us/web/api");
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
