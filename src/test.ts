import * as fs from "fs";
import child_process from "child_process";
import { printUnifiedDiff } from "print-diff";
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

function compareToBaselines(baselineFolder: URL, outputFolder: URL) {
  let baselineFiles: string[] = [];
  try {
    baselineFiles = fs.readdirSync(baselineFolder);
  } catch {
    // do nothing
  }

  let outputFiles: string[] = [];
  try {
    outputFiles = fs.readdirSync(outputFolder);
  } catch {
    // do nothing
  }

  for (const file of new Set([...baselineFiles, ...outputFiles])) {
    if (file.startsWith(".")) {
      continue;
    }

    let baselineStats: fs.Stats | undefined;
    try {
      baselineStats = fs.statSync(new URL(file, baselineFolder));
    } catch {
      // do nothing
    }

    let outputStats: fs.Stats | undefined;
    try {
      outputStats = fs.statSync(new URL(file, outputFolder));
    } catch {
      // do nothing
    }

    const baseline = baselineStats?.isFile()
      ? normalizeLineEndings(
          fs.readFileSync(new URL(file, baselineFolder)).toString(),
        )
      : null;

    const generated = outputStats?.isFile()
      ? normalizeLineEndings(
          fs.readFileSync(new URL(file, outputFolder)).toString(),
        )
      : null;

    if (baseline !== null || generated !== null) {
      if (baseline !== generated) {
        console.error(
          `Test failed: '${file}' is different from baseline file.`,
        );
        printUnifiedDiff(baseline ?? "", generated ?? "");
        return false;
      }

      continue;
    }

    if (baselineStats?.isDirectory() || outputStats?.isDirectory()) {
      const childBaselineFolder = new URL(`${file}/`, baselineFolder);
      const childOutputFolder = new URL(`${file}/`, outputFolder);
      if (!compareToBaselines(childBaselineFolder, childOutputFolder)) {
        return false;
      }

      continue;
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
  const targets = ["es5", "es6", "es2018"];
  const modules = [
    "dom",
    "webworker",
    "sharedworker",
    "serviceworker",
    "audioworklet",
  ];
  const suffixes: Record<string, string[]> = {
    es5: ["generated.d.ts"],
    es6: ["generated.d.ts", "iterable.generated.d.ts"],
    es2018: ["generated.d.ts", "asynciterable.generated.d.ts"],
  };

  const allPassed =
    compareToBaselines(baselineFolder, outputFolder) &&
    modules.every((mod) =>
      targets.every((target) =>
        compileGeneratedFiles(
          target,
          ...suffixes[target].map((suffix) => `${mod}.${suffix}`),
        ),
      ),
    );

  if (allPassed) {
    console.log("All tests passed.");
    process.exit(0);
  }

  process.exit(1);
}

test();
