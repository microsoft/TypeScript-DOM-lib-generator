import { readFileSync } from "fs";
import { parse, ParseError, visit } from "jsonc-parser";
import { URL } from "url";

// Recursively sort object keys
function sortObjectKeys<T>(obj: T): T {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(obj).sort()) {
      sorted[key] = sortObjectKeys((obj as any)[key]);
    }
    return sorted as T;
  }
  return obj;
}

// Check if the content has trailing commas
function hasTrailingCommas(content: string): boolean {
  let foundTrailingComma = false;

  visit(content, {
    onObjectEnd: (offset) => {
      const lastChar = content[offset - 1];
      if (lastChar === ",") {
        foundTrailingComma = true;
      }
    },
    onArrayEnd: (offset) => {
      const lastChar = content[offset - 1];
      if (lastChar === ",") {
        foundTrailingComma = true;
      }
    },
  });

  return foundTrailingComma;
}

export function sortFiles(): void {
  const filenames = ["overridingTypes", "removedTypes", "addedTypes"];

  for (const name of filenames) {
    const filePath = new URL(`../../inputfiles/${name}.jsonc`, import.meta.url);
    const content = readFileSync(filePath, "utf-8");

    const errors: ParseError[] = [];
    const parsed = parse(content, errors, { allowTrailingComma: true });

    if (errors.length > 0) {
      throw new Error(`❌ Syntax error(s) found in ${name}.jsonc:`);
    }

    if (hasTrailingCommas(content)) {
      throw new Error(`❌ Trailing comma detected in ${name}.jsonc`);
    }

    const sorted = sortObjectKeys(parsed);
    const originalStr = JSON.stringify(parsed);
    const sortedStr = JSON.stringify(sorted);

    if (originalStr !== sortedStr) {
      throw new Error(`❌ Keys are not sorted in ${name}.jsonc`);
    }

    console.log(`✅ ${name}.jsonc is valid, sorted, and clean.`);
  }
}
