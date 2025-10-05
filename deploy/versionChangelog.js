// @ts-check

// npm run ts-changelog @types/web 0.0.1 0.0.3

import { gitShowFile, generateChangelogFrom } from "../lib/changelog.js";
import { packages } from "./createTypesPackages.js";
import { basename } from "path";

const [name, before, to] = process.argv.slice(2);
if (!name || !before || !to) {
  throw new Error(
    "Expected three arguments: package name, version before, version to",
  );
}

const go = () => {
  // We'll need to map back from the filename in the npm package to the
  // generated file in baselines inside the git tag
  const thisPackageMeta = packages.find((p) => p.name === name);
  if (!thisPackageMeta) {
    throw new Error(`Could not find ${name} in ${packages.map((p) => p.name)}`);
  }

  for (const file of thisPackageMeta.files) {
    const filename = `baselines/${basename(file.from)}`;
    const beforeFileText = gitShowFile(`${name}@${before}`, filename);
    const toFileText = gitShowFile(`${name}@${to}`, filename);

    const notes = generateChangelogFrom(beforeFileText, toFileText);

    console.log(`\n## \`${file.to}\`\n`);
    console.log(notes.trim() === "" ? "No changes" : notes);
  }
};

go();
