import { readFileSync } from "fs";
import { parse, ParseError, visit } from "jsonc-parser";
import { URL } from "url";

/**
 * Recursively verify that all object keys are sorted alphabetically.
 * Throws an error if any object has unsorted keys.
 */
function verifyObjectKeysSorted(obj: unknown, path: string = ""): void {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const keys = Object.keys(obj);
    const sortedKeys = [...keys].sort();

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== sortedKeys[i]) {
        throw new Error(
          `❌ Keys are not sorted at ${path || "root object"}.\nExpected order: ${sortedKeys.join(", ")}`,
        );
      }
    }

    for (const key of keys) {
      verifyObjectKeysSorted(
        (obj as Record<string, unknown>)[key],
        path ? `${path}.${key}` : key,
      );
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) =>
      verifyObjectKeysSorted(item, `${path}[${index}]`),
    );
  }
}

/**
 * Check if the given JSONC content has trailing commas.
 */
function hasTrailingCommas(content: string): boolean {
  let found = false;

  visit(content, {
    onObjectEnd: (offset) => {
      if (content[offset - 1] === ",") found = true;
    },
    onArrayEnd: (offset) => {
      if (content[offset - 1] === ",") found = true;
    },
  });

  return found;
}

/**
 * Verify and validate multiple JSONC files:
 * - Check for syntax errors
 * - Disallow trailing commas
 * - Ensure keys are sorted
 */
export function verifyFiles(): void {
  const filenames = ["overridingTypes", "removedTypes", "addedTypes"];

  for (const name of filenames) {
    const filePath = new URL(`../inputfiles/${name}.jsonc`, import.meta.url);
    const content = readFileSync(filePath, "utf-8");

    const errors: ParseError[] = [];
    const parsed = parse(content, errors, { allowTrailingComma: true });

    if (errors.length > 0) {
      throw new Error(`❌ ${name}.jsonc contains syntax error(s).`);
    }

    if (hasTrailingCommas(content)) {
      throw new Error(`❌ ${name}.jsonc has trailing comma(s).`);
    }

    verifyObjectKeysSorted(parsed);

    console.log(`✅ ${name}.jsonc is valid, sorted, and clean.`);
  }
}
verifyFiles();
