import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractSummary(markdown: string) {
  // Remove frontmatter (--- at the beginning)
  markdown = markdown.replace(/^---[\s\S]+?---\n/, "");

  // Split into lines and find the first meaningful paragraph
  const lines = markdown.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith(">") &&
      !trimmed.startsWith("{{")
    ) {
      return trimmed
        .replace(/\{\{domxref\(["'][^"']+["'],\s*["']([^"']+)["']\)\}\}/g, "$1") // Extract second argument from domxref
        .replace(/\{\{domxref\(["']([^"']+)["']\)\}\}/g, "$1") // Extract single-argument domxref
        .replace(/\{\{[^}]+\}\}/g, "") // Remove other MDN templates like {{CSSRef}}
        .replace(/<[^>]+>/g, "") // Remove HTML tags
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove Markdown bold (**bold**)
        .replace(/_(.*?)_/g, "$1") // Remove Markdown italic (_italic_)
        .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove Markdown links [text](url)
        .replace(/`([^`]+)`/g, "$1") // Remove inline code `code`
        .replace(/&lt;/g, "<") // Decode HTML entities
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " "); // Normalize spaces
    }
  }

  return "";
}

async function getFolders(dirPath: string) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const folders = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(dirPath, entry.name));
    return folders;
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

async function getIndexMdContents(folders: string[]) {
  const results: { [key: string]: string } = {};

  for (const folder of folders) {
    const indexPath = path.join(folder, "index.md");

    try {
      const content = await fs.readFile(indexPath, "utf-8");
      const titleMatch = content.match(/title: (.*)/);
      const title = titleMatch ? titleMatch[1] : "";
      const summary = extractSummary(content);
      results[title] = summary;
    } catch {
      // Ignore missing index.md files
    }
  }

  return results;
}

export async function generateDescription() {
  const basePath = path.resolve(
    __dirname,
    "../mdn-content/files/en-us/web/api",
  );
  const folders = await getFolders(basePath);
  const data = await getIndexMdContents(folders);
  // Write to JSON file
  await fs.writeFile(
    path.resolve(__dirname, "../inputfiles/mdn/") + "/apiDescriptions.json",
    JSON.stringify(data, null, 2),
    "utf-8",
  );
}
