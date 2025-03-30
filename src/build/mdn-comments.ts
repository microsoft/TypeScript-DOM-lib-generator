import fs from "fs/promises";
import * as path from "path";

const basePath = new URL(
  "../../inputfiles/mdn/files/en-us/web/api/",
  import.meta.url,
).pathname;

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
    .join(" ");

  // Extract the first sentence (ending in . ! or ?)
  const sentenceMatch = normalizedText.match(
    /(.*?(?<!\.\s(?:i\.e|e\.g))([.!?]))(?:\s|$)/i,
  );
  if (sentenceMatch) {
    return sentenceMatch[0]; // Return the first full sentence
  }

  return normalizedText.split(" ")[0] || ""; // Fallback: first word if no sentence found
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
        ? titleMatch[1].replace(/ extension$/, "")
        : path.basename(folder);

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
