// @ts-check

// node deploy/deployChangedPackages.js

// Builds on the results of createTypesPackages.js and deploys the
// ones which have changed.

import * as fs from "fs";
import * as path from "path";
import { spawnSync } from "child_process";
import { Octokit } from "@octokit/rest";
import { printUnifiedDiff } from "print-diff";
import { generateChangelogFrom } from "../lib/changelog.ts";
import { packages } from "./createTypesPackages.js";
import { fileURLToPath } from "node:url";
import fetch from "node-fetch";
import pRetry from "p-retry";

verify();

const uploaded = [];

// Loop through generated packages, deploying versions for anything which has different
// .d.ts files from the version available on npm.
const generatedDir = new URL("generated/", import.meta.url);
for (const dirName of fs.readdirSync(generatedDir)) {
  const packageDir = new URL(`${dirName}/`, generatedDir);
  const localPackageJSONPath = new URL("package.json", packageDir);
  const newTSConfig = fs.readFileSync(localPackageJSONPath, "utf-8");
  const pkgJSON = JSON.parse(newTSConfig);

  // This assumes we'll only _ever_ ship patches, which may change in the
  // future someday.
  const [maj, min, patch] = pkgJSON.version.split(".");
  const olderVersion = `${maj}.${min}.${patch - 1}`;

  console.log(`\nLooking at ${dirName} vs ${olderVersion}`);

  // We'll need to map back from the filename in the npm package to the
  // generated file in baselines inside the git tag
  const thisPackageMeta = packages.find((p) => p.name === pkgJSON.name);
  if (!thisPackageMeta) {
    throw new Error(`Couldn't find ${pkgJSON.name}`);
  }

  const dtsFiles = readdirRecursive(fileURLToPath(packageDir)).filter((f) =>
    f.endsWith(".d.ts"),
  );

  const releaseNotes = [];

  // Look through each .d.ts file included in a package to
  // determine if anything has changed
  let upload = false;
  for (const file of dtsFiles) {
    const filemap = thisPackageMeta.files.find((f) => f.to === file);
    if (!filemap) {
      throw new Error(`Couldn't find ${file} from ${pkgJSON.name}`);
    }

    const generatedDTSPath = new URL(file, packageDir);
    const generatedDTSContent = fs.readFileSync(generatedDTSPath, "utf8");

    try {
      const oldFile = await getFileFromUnpkg(
        `${pkgJSON.name}@${olderVersion}/${filemap.to}`,
      );
      console.log(` - ${file}`);
      if (oldFile !== generatedDTSContent) {
        printUnifiedDiff(oldFile, generatedDTSContent);
      }

      const title = `## \`${file}\``;
      const notes = generateChangelogFrom(oldFile, generatedDTSContent);
      releaseNotes.push(title);
      releaseNotes.push(notes.trim() === "" ? "No changes" : notes);

      upload = upload || oldFile !== generatedDTSContent;
    } catch (error) {
      // Could not find a previous build
      console.log(`
Could not get the file ${file} inside the npm package ${pkgJSON.name} from tag ${olderVersion}.
Assuming that this means we need to upload this package.`);
      console.error(error);
      upload = true;
    }
  }

  // Publish via npm
  if (upload) {
    if (process.env.CI) {
      const publish = spawnSync("npm", ["publish", "--access", "public"], {
        cwd: fileURLToPath(packageDir),
        stdio: "inherit",
      });

      if (publish.status) {
        console.log(publish.stdout?.toString());
        console.log(publish.stderr?.toString());
        process.exit(publish.status);
      } else {
        console.log(publish.stdout?.toString());

        await createRelease(
          `${pkgJSON.name}@${pkgJSON.version}`,
          releaseNotes.join("\n\n"),
        );
      }
    } else {
      console.log(
        "Wanting to run: 'npm publish --access public' in " +
          fileURLToPath(packageDir),
      );
    }

    uploaded.push(dirName);

    console.log("\n# Release notes:\n");
    console.log(releaseNotes.join("\n\n"), "\n\n");
  }
}
console.log("");

// Warn if we did a dry run.
if (!process.env.CI) {
  console.log("Did a dry run because process.env.CI is not set.");
}

if (uploaded.length) {
  console.log("Uploaded: ", uploaded.join(", "));
} else {
  console.log("Nothing to upload");
}

/**
 * @param {string} tag
 * @param {string} body
 */
async function createRelease(tag, body) {
  const authToken = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN;
  const octokit = new Octokit({ auth: authToken });

  try {
    await octokit.repos.createRelease({
      owner: "microsoft",
      repo: "TypeScript-DOM-lib-generator",
      tag_name: tag,
      target_commitish: process.env.GITHUB_SHA,
      name: tag,
      body,
    });
  } catch {
    console.error(
      "Creating the GitHub release failed, this is likely due to re-running the deploy.",
    );
  }
}

function verify() {
  const authToken = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN;
  if (!authToken) {
    throw new Error(
      "There isn't an ENV var set up for creating a GitHub release, expected GITHUB_TOKEN.",
    );
  }
}

/** @param {string} filepath */
async function getFileFromUnpkg(filepath) {
  return pRetry(async () => {
    const resp = await fetch(`https://unpkg.com/${filepath}`);
    if (resp.ok) {
      return resp.text();
    }
    if (resp.status === 404) {
      return "";
    }
    console.error(`Unexpected response status: ${resp.status}`);
    throw new Error(resp.statusText);
  });
}

/** @param {string} dir */
function readdirRecursive(dir) {
  /** @type {string[]} */
  let results = [];
  /** @param {string} currentDir */
  function readDir(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      results.push(path.relative(dir, fullPath));
      if (entry.isDirectory()) {
        readDir(fullPath);
      }
    }
  }
  readDir(dir);
  return results;
}
