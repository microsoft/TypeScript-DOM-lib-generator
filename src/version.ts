import { execSync } from "child_process";
import { readFile, writeFile } from "fs/promises";
import { generateDefaultFromRecentTag } from "./changelog.ts";

const output = generateDefaultFromRecentTag();

const path = new URL("../CHANGELOG.md", import.meta.url);

const content = await readFile(path, "utf-8");

const { npm_package_version } = process.env;

await writeFile(path, `# v${npm_package_version}\n\n${output}\n\n${content}`);

execSync("git add CHANGELOG.md");
