// @ts-check
// Mainly a quick script to migrate the generated files into the
// lib folder of a TypeScript clone.
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

const generatedFiles = readdirSync("generated");
const filesToSend = generatedFiles.filter(
  (file) => file.includes("dom.") || file.includes("webworker."),
);

filesToSend.forEach((file) => {
  const contents = readFileSync(join("generated", file), "utf8");
  const newFilePath = join(tscWD, "src", "lib", file);
  writeFileSync(newFilePath, contents);
});

console.log(
  `Moved ${filesToSend
    .map((f) => f.replace(".generated", ""))
    .join(", ")} to '${tscWD}/src/lib'.`,
);
