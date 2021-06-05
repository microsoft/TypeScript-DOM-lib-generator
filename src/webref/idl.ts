import { listAll, IDLFile } from "@webref/idl";
import { readFile } from "fs/promises";
import { join } from "path";
import { IDLSource } from "../idlfetcher";
let webref: Record<string, IDLFile>;

export async function getWidl(source: IDLSource): Promise<string> {
  if (!webref) {
    webref = await listAll();
  }

  if (!source.shortName) {
    const filename = source.title + ".widl";
    return readFile(join(__dirname, "../../inputfiles/idl", filename), {
      encoding: "utf-8",
    });
  }
  return await webref[source.shortName].text();
}
