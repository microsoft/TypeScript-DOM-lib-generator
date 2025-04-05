import * as fs from "fs";
import commentJson from "comment-json";

// A helper function to recursively sort object keys alphabetically.
function sortObjectKeys<T>(obj: T): T {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const sorted = {} as any;
    Object.keys(obj)
      .sort()
      .forEach((key) => {
        // Recursively sort keys if the value is an object
        sorted[key] = sortObjectKeys((obj as any)[key]);
      });
    return sorted;
  }
  return obj;
}

export function sortFiles() {
  const filePath = new URL(
    "../../inputfiles/overridingTypes.jsonc",
    import.meta.url,
  ); // Replace with your JSONC file path

  // Read the JSONC file content
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse the JSONC file while preserving comments
  const parsed = commentJson.parse(fileContent, undefined, true);

  // Sort the object keys alphabetically (recursively)
  const sortedObject = sortObjectKeys(parsed);

  // Stringify the sorted object back to JSONC format (preserving comments)
  const sortedJsonC = commentJson.stringify(sortedObject, null, 2);

  // Write the sorted content back to the file
  fs.writeFileSync(filePath, sortedJsonC, "utf-8");

  console.log("JSONC file keys sorted successfully.");
}
