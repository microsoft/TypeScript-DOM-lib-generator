import { listAll as listAllIdl } from "@webref/idl";
import { listAll as listAllCss } from "@webref/css";
import { generateWebIdlFromCssProperties } from "./css.js";
import { addToStringMap } from "../utils/map.js";

export async function getWebidls(): Promise<Map<string, string>> {
  const idl = await listAllIdl();
  const css = await listAllCss();

  const map = new Map<string, string>();
  for (const [key, file] of Object.entries(idl)) {
    const text = await file.text();
    map.set(key, text);
  }
  for (const [key, data] of Object.entries(css)) {
    const properties = data.properties.map((p) => p.name);
    if (properties.length) {
      addToStringMap(map, key, generateWebIdlFromCssProperties(properties));
    }
  }
  return map;
}
