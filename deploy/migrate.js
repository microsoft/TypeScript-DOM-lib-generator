// @ts-check
// Mainly a quick script to migrate the generated files into a TypeScript clone.
//
// node ./deploy/migrate.js [optional/file/path/to/tsc]

import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const maybeTSWorkingDir = [process.argv[2], "../TypeScript", "TypeScript"];
const tscWD = maybeTSWorkingDir.find((wd) => existsSync(wd));

if (!tscWD) {
  throw new Error(
    "Could not find a TypeScript clone to put the generated files in.",
  );
}

const libDir = join(tscWD, "tsc", "internal", "bundled", "libs");
const copyrightNotice = readFileSync(
  join(tscWD, "tsc", "internal", "bundled", "CopyrightNotice.txt"),
  "utf8",
);
const generatedFiles = readdirSync("generated");
const filesToSend = generatedFiles.filter(
  (file) => file.includes("dom.") || file.includes("webworker."),
);

filesToSend.forEach((file) => {
  const contents = readFileSync(join("generated", file), "utf8");
  const target = `lib.${file.replace(".generated", "")}`;
  const newFilePath = join(libDir, target);
  writeFileSync(newFilePath, `${copyrightNotice}\n${contents}`);
});

console.log(
  `Moved ${filesToSend
    .map((file) => `lib.${file.replace(".generated", "")}`)
    .join(", ")} to '${libDir}'.`,
);
