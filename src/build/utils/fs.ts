import { readFile } from "fs/promises";

export async function tryReadFile(
  path: string | URL,
): Promise<string | undefined> {
  try {
    return await readFile(path, "utf-8");
  } catch (err: any) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
}
