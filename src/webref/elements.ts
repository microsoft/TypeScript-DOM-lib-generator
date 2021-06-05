import { listAll } from "@webref/elements";
import { Interface, WebIdl } from "../types.js";

function addToArrayMap<T>(map: Map<string, T[]>, name: string, value: T): void {
  const array = map.get(name) || [];
  array.push(value);
  map.set(name, array);
}

async function getInterfaceToElementMap(): Promise<{
  html: Map<string, string[]>;
  svg: Map<string, string[]>;
}> {
  const all = await listAll();
  const html = new Map<string, string[]>();
  const svg = new Map<string, string[]>();
  for (const item of Object.values(all)) {
    const { elements } = item;
    for (const element of elements) {
      if (!element.interface) {
        continue;
      }
      const targetMap = element.interface.startsWith("SVG") ? svg : html;
      addToArrayMap(targetMap, element.interface, element.name);
    }
  }
  return { html, svg };
}

export async function getInterfaceElementMergeData(): Promise<WebIdl> {
  const data: WebIdl = { interfaces: { interface: {} } };
  const { html, svg } = await getInterfaceToElementMap();
  for (const [key, elements] of html) {
    data.interfaces!.interface[key] = {
      element: elements.map((el) => ({
        name: el,
      })),
    } as Interface;
  }
  for (const [key, elements] of svg) {
    data.interfaces!.interface[key] = {
      element: elements.map((el) => ({
        namespace: "SVG",
        name: el,
      })),
    } as Interface;
  }
  return data;
}
