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
        console.error('Error:', error);
        return [];
    }
}

async function generateDescription() {
    const basePath = path.resolve(__dirname, "../mdn-content/files/en-us/web/api");
    const folders = await getFoldersRecursively(basePath);
    console.log(folders);
}

await generateDescription();
