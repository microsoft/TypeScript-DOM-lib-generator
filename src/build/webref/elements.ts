import { listAll, type Element as WebrefElement } from "@webref/elements";
import type { Interface, WebIdl } from "../types.ts";
import { addToArrayMap } from "../utils/map.ts";

async function getInterfaceToElementMap(): Promise<
  Map<string, WebrefElement[]>
> {
  const all = await listAll();
  const map = new Map<string, WebrefElement[]>();
  for (const item of Object.values(all)) {
    const { elements } = item;
    for (const element of elements) {
      if (!element.interface) {
        continue;
      }
      addToArrayMap(map, element.interface, element);
    }
  }
  return map;
}

export async function getInterfaceElementMergeData(): Promise<WebIdl> {
  const data: WebIdl = { interfaces: { interface: {} } };
  const map = await getInterfaceToElementMap();
  for (const [key, elements] of map) {
    const namespace = key.startsWith("SVG")
      ? "SVG"
      : key.startsWith("MathML")
        ? "MathML"
        : undefined;
    data.interfaces!.interface[key] = {
      element: elements.map((el) => ({
        namespace,
        name: el.name,
        deprecated: el.obsolete,
      })),
    } as Interface;
  }
  return data;
}
