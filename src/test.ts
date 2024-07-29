import * as fs from "fs";
import child_process from "child_process";
import { printInlineDiff } from "print-diff";
import { fileURLToPath } from "url";

const baselineFolder = new URL("../baselines/", import.meta.url);
const outputFolder = new URL("../generated/", import.meta.url);
const tscPath = new URL(
  "../node_modules/typescript/lib/tsc.js",
  import.meta.url,
);

function normalizeLineEndings(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

function compareToBaselines() {
  for (const file of fs.readdirSync(baselineFolder)) {
    if (file.startsWith(".")) {
      continue;
    }

    const baseline = normalizeLineEndings(
      fs.readFileSync(new URL(file, baselineFolder)).toString(),
    );
    const generated = normalizeLineEndings(
      fs.readFileSync(new URL(file, outputFolder)).toString(),
    );
    if (baseline !== generated) {
      console.error(`Test failed: '${file}' is different from baseline file.`);
      printInlineDiff(baseline, generated);
      return false;
    }
  }
  return true;
}

function compileGeneratedFiles(lib: string, ...files: string[]) {
  try {
    child_process.execSync(
      `node ${fileURLToPath(
        tscPath,
      )} --strict --lib ${lib} --types --noEmit ${files
        .map((file) => fileURLToPath(new URL(file, outputFolder)))
        .join(" ")}`,
    );
  } catch (e: any) {
    console.error(`Test failed: could not compile '${files.join(",")}':`);
    console.error(e.stdout.toString());
    console.error();
    return false;
  }
  return true;
}

function test() {
  if (
    compareToBaselines() &&
    compileGeneratedFiles("es5", "dom.generated.d.ts") &&
    compileGeneratedFiles(
      "es6",
      "dom.generated.d.ts",
      "dom.iterable.generated.d.ts",
    ) &&
    compileGeneratedFiles(
      "es2018",
      "dom.generated.d.ts",
      "dom.asynciterable.generated.d.ts",
    ) &&
    compileGeneratedFiles("es5", "webworker.generated.d.ts") &&
    compileGeneratedFiles(
      "es6",
      "webworker.generated.d.ts",
      "webworker.iterable.generated.d.ts",
    ) &&
    compileGeneratedFiles(
      "es2018",
      "webworker.generated.d.ts",
      "webworker.asynciterable.generated.d.ts",
    ) &&
    compileGeneratedFiles("es5", "sharedworker.generated.d.ts") &&
    compileGeneratedFiles(
      "es6",
      "sharedworker.generated.d.ts",
      "sharedworker.iterable.generated.d.ts",
    ) &&
    compileGeneratedFiles(
      "es2018",
      "sharedworker.generated.d.ts",
      "sharedworker.asynciterable.generated.d.ts",
    ) &&
    compileGeneratedFiles("es5", "serviceworker.generated.d.ts") &&
    compileGeneratedFiles(
      "es6",
      "serviceworker.generated.d.ts",
      "serviceworker.iterable.generated.d.ts",
    ) &&
    compileGeneratedFiles(
      "es2018",
      "serviceworker.generated.d.ts",
      "serviceworker.asynciterable.generated.d.ts",
    ) &&
    compileGeneratedFiles("es5", "audioworklet.generated.d.ts") &&
    compileGeneratedFiles(
      "es6",
      "audioworklet.generated.d.ts",
      "audioworklet.iterable.generated.d.ts",
    ) &&
    compileGeneratedFiles(
      "es2018",
      "audioworklet.generated.d.ts",
      "audioworklet.asynciterable.generated.d.ts",
    )
  ) {
    console.log("All tests passed.");
    process.exit(0);
  }
  process.exit(1);
}

test();
