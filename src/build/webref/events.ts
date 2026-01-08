import { listAll } from "@webref/events";
import { addToNestedMap } from "../utils/map.js";

export async function getInterfaceToEventMap(): Promise<
  Map<string, Map<string, string>>
> {
  const all = await listAll();
  const map = new Map<string, Map<string, string>>();
  for (const item of all) {
    const { targets } = item;
    for (const target of targets) {
      addToNestedMap(map, target.target, item.type, item.interface);
      for (const path of target.bubblingPath ?? []) {
        addToNestedMap(map, path, item.type, item.interface);
      }
    }
  }
  return map;
}
