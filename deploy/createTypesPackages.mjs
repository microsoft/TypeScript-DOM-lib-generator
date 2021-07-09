// @ts-check

// node deploy/createTypesPackages.mjs

// prettier-ignore
export const packages = [
    {
      name: "@types/web",
      description: "Types for the DOM, and other web technologies in browsers",
      readme: "./readmes/web.md",
      files: [
        { from: "../generated/dom.generated.d.ts", to: "index.d.ts" },
        { from: "../generated/dom.iterable.generated.d.ts", to: "index.iterable.d.ts" }
      ],
    },
    {
      name: "@types/webworker",
      description: "Types for the global scope of Web Workers",
      readme: "./readmes/webworker.md",
      files: [
        { from: "../generated/webworker.generated.d.ts", to: "index.d.ts" },
        { from: "../generated/webworker.iterable.generated.d.ts", to: "index.iterable.d.ts" }
      ],
    },
    {
      name: "@types/serviceworker",
      description: "Types for the global scope of Service Workers",
      readme: "./readmes/serviceworker.md",
      files: [
        { from: "../generated/serviceworker.generated.d.ts", to: "index.d.ts" },
        { from: "../generated/serviceworker.iterable.generated.d.ts", to: "index.iterable.d.ts" }
      ],
    },
    {
      name: "@types/audioworklet",
      description: "Types for the global scope of Audio Worklets",
      readme: "./readmes/audioworklet.md",
      files: [
        { from: "../generated/audioworklet.generated.d.ts", to: "index.d.ts" },
        { from: "../generated/audioworklet.iterable.generated.d.ts", to: "index.iterable.d.ts" }
      ],
    },
    {
      name: "@types/sharedworker",
      description: "Types for the global scope of Shared Workers",
      readme: "./readmes/sharedworker.md",
      files: [
        { from: "../generated/sharedworker.generated.d.ts", to: "index.d.ts" },
        { from: "../generated/sharedworker.iterable.generated.d.ts", to: "index.iterable.d.ts" }
      ],
    },
  ];

// Note: You can add 'version: "1.0.0"' to a package above
// to set the major or minor, otherwise it will always bump
// the patch.

import { join, dirname } from "path";
import fs from "fs";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import semver from "semver";
import pkg from "prettier";
const { format } = pkg;
import { execSync } from "child_process";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const go = async () => {
  const gitSha = execSync("git rev-parse HEAD").toString().trim().slice(0, 7);

  const generatedDir = join(__dirname, "generated");
  const templateDir = join(__dirname, "template");

  for (const pkg of packages) {
    const folderName = pkg.name.replace("@", "").replace("/", "-");
    const packagePath = join(generatedDir, folderName);

    if (fs.existsSync(packagePath)) fs.rmSync(packagePath, { recursive: true });
    fs.mkdirSync(packagePath, { recursive: true });

    // Migrate in the template files
    for (const templateFile of fs.readdirSync(templateDir)) {
      if (templateFile.startsWith(".")) continue;

      const templatedFile = join(templateDir, templateFile);
      fs.copyFileSync(templatedFile, join(packagePath, templateFile));
    }

    // Add the reference files in the config above
    pkg.files.forEach((fileRef) => {
      fs.copyFileSync(
        join(__filename, "..", fileRef.from),
        join(packagePath, fileRef.to)
      );
    });

    // Setup the files in the repo
    const newPkgJSON = await updatePackageJSON(packagePath, pkg, gitSha);
    copyREADME(pkg, newPkgJSON, join(packagePath, "README.md"));

    // Done
    console.log("Built:", pkg.name);
  }
};

async function updatePackageJSON(packagePath, pkg, gitSha) {
  const pkgJSONPath = join(packagePath, "package.json");
  const packageText = fs.readFileSync(pkgJSONPath, "utf8");
  const packageJSON = JSON.parse(packageText);
  packageJSON.name = pkg.name;
  packageJSON.description = pkg.description;

  // Bump the last version of the number from npm,
  // or use the _version in tsconfig if it's higher,
  // or default to 0.0.1
  let version = pkg.version || "0.0.1";
  try {
    const npmResponse = await fetch(
      `https://registry.npmjs.org/${packageJSON.name}`
    );
    const npmPackage = await npmResponse.json();

    const semverMarkers = npmPackage["dist-tags"].latest.split(".");
    const bumpedVersion = `${semverMarkers[0]}.${semverMarkers[1]}.${
      Number(semverMarkers[2]) + 1
    }`;

    if (semver.gt(bumpedVersion, version)) {
      version = bumpedVersion;
    }
  } catch (error) {
    console.error("Caught error in grabbing version for package");
    console.error(error);
    // NOOP, this is for the first deploy, which will set it to 0.0.1
  }

  packageJSON.version = version;
  packageJSON.domLibGeneratorSha = gitSha;

  fs.writeFileSync(
    pkgJSONPath,
    format(JSON.stringify(packageJSON), { filepath: pkgJSONPath })
  );

  return packageJSON;
}

// Copies the README and adds some rudimentary templating to the file.
function copyREADME(pkg, pkgJSON, writePath) {
  let readme = fs.readFileSync(join(__filename, "..", pkg.readme), "utf-8");

  const htmlEncodedTag =
    encodeURIComponent(pkgJSON.name) + "%40" + pkgJSON.version;

  readme = readme
    .replace("{{version}}", pkgJSON.version)
    .replace(
      "{{release_href}}",
      `https://github.com/microsoft/TypeScript-DOM-lib-generator/releases/tag/${htmlEncodedTag}`
    );

  fs.writeFileSync(writePath, readme);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await go();
}
