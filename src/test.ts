import * as fs from "fs";
import child_process from "child_process";
import { printUnifiedDiff } from "print-diff";
import { fileURLToPath } from "url";

const baselineFolder = new URL("../baselines/", import.meta.url);
const outputFolder = new URL("../generated/", import.meta.url);
const tscPath = new URL("../node_modules/typescript/lib/tsc.js", import.meta.url);

const normalizeLineEndings = (text) => text.replace(/\r\n?/g, "\n");

const getFiles = (folder) => {
  try {
    return fs.readdirSync(folder);
  } catch {
    return [];
  }
};

const readFileContent = (filePath) => {
  try {
    return normalizeLineEndings(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
};

const compareToBaselines = (baselineFolder, outputFolder) => {
  const files = new Set([...getFiles(baselineFolder), ...getFiles(outputFolder)]);

  for (const file of files) {
    if (file.startsWith(".")) continue;

    const baselinePath = new URL(file, baselineFolder);
    const outputPath = new URL(file, outputFolder);

    const isBaselineFile = fs.existsSync(baselinePath) && fs.statSync(baselinePath).isFile();
    const isOutputFile = fs.existsSync(outputPath) && fs.statSync(outputPath).isFile();

    const baseline = isBaselineFile ? readFileContent(baselinePath) : null;
    const generated = isOutputFile ? readFileContent(outputPath) : null;

    if (baseline !== null || generated !== null) {
      if (baseline !== generated) {
        console.error(`Test failed: '${file}' is different from baseline.`);
        printUnifiedDiff(baseline ?? "", generated ?? "");
        return false;
      }
      continue;
    }

    if (fs.existsSync(baselinePath) || fs.existsSync(outputPath)) {
      if (!compareToBaselines(new URL(`${file}/`, baselineFolder), new URL(`${file}/`, outputFolder))) {
        return false;
      }
    }
  }
  return true;
};

const compileGeneratedFiles = (lib, ...files) => {
  try {
    const fileArgs = files.map((file) => fileURLToPath(new URL(file, outputFolder))).join(" ");
    child_process.execSync(`node ${fileURLToPath(tscPath)} --strict --lib ${lib} --types --noEmit ${fileArgs}`);
  } catch (e) {
    console.error(`Test failed: could not compile '${files.join(", ")}'.`);
    console.error(e.stdout.toString());
    return false;
  }
  return true;
};

const test = () => {
  const compileSets = [
    ["es5", ["dom.generated.d.ts"]],
    ["es6", ["dom.generated.d.ts", "dom.iterable.generated.d.ts"]],
    ["es2018", ["dom.generated.d.ts", "dom.asynciterable.generated.d.ts"]],
    ["es5", ["webworker.generated.d.ts"]],
    ["es6", ["webworker.generated.d.ts", "webworker.iterable.generated.d.ts"]],
    ["es2018", ["webworker.generated.d.ts", "webworker.asynciterable.generated.d.ts"]],
    ["es5", ["sharedworker.generated.d.ts"]],
    ["es6", ["sharedworker.generated.d.ts", "sharedworker.iterable.generated.d.ts"]],
    ["es2018", ["sharedworker.generated.d.ts", "sharedworker.asynciterable.generated.d.ts"]],
    ["es5", ["serviceworker.generated.d.ts"]],
    ["es6", ["serviceworker.generated.d.ts", "serviceworker.iterable.generated.d.ts"]],
    ["es2018", ["serviceworker.generated.d.ts", "serviceworker.asynciterable.generated.d.ts"]],
    ["es5", ["audioworklet.generated.d.ts"]],
    ["es6", ["audioworklet.generated.d.ts", "audioworklet.iterable.generated.d.ts"]],
    ["es2018", ["audioworklet.generated.d.ts", "audioworklet.asynciterable.generated.d.ts"]],
  ];

  if (compareToBaselines(baselineFolder, outputFolder) && compileSets.every(([lib, files]) => compileGeneratedFiles(lib, ...files))) {
    console.log("All tests passed.");
    process.exit(0);
  }
  process.exit(1);
};

test();
