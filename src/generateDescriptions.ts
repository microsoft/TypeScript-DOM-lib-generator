import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getFoldersRecursively(dirPath: string, folders: string[] = []) {
    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const entryPath = path.join(dirPath, entry.name);
            if (entry.isDirectory()) {
                folders.push(entryPath);
                await getFoldersRecursively(entryPath, folders);
            }
        }

        return folders;
    } catch (error) {
        console.error('Error reading directories:', error);
        return [];
    }
}

async function getIndexMdContents(folders: string[]) {
    const results = [];

    for (const folder of folders) {
        const indexPath = path.join(folder, 'index.md');

        try {
            const content = await fs.readFile(indexPath, 'utf-8');
            const titleMatch = content.match(/title: (.*)/);
            const title = titleMatch ? titleMatch[1] : '';
            results.push({ [title]: "desc" });
            
        } catch (error) {
            // Ignore missing index.md files
        }
    }

    return results;
}

async function generateDescription() {
    const basePath = path.resolve(__dirname, "../mdn-content/files/en-us/web/api");
    const folders = await getFoldersRecursively(basePath);
    const data = await getIndexMdContents(folders);
    // Write to JSON file
    await fs.writeFile('output.json', JSON.stringify(data, null, 2), 'utf-8');
}

await generateDescription();
