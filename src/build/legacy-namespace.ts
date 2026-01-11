import * as Browser from "./types.ts";
import { mapToArray, arrayToMap } from "./helpers.ts";

export function collectLegacyNamespaceTypes(
  webidl: Browser.WebIdl,
): Browser.Interface[] {
  if (!webidl.namespaces) {
    return [];
  }

  const namespaceMap: Record<string, Browser.Interface> = arrayToMap(
    webidl.namespaces,
    (i) => i.name,
    (i) => i,
  );
  for (const i of mapToArray(webidl.interfaces!.interface)) {
    if (i.legacyNamespace) {
      getNamespace(i.legacyNamespace).nested!.interfaces.push(i);
    }
  }
  for (const i of mapToArray(webidl.dictionaries!.dictionary)) {
    if (i.legacyNamespace) {
      getNamespace(i.legacyNamespace).nested!.dictionaries.push(i);
    }
  }
  for (const i of mapToArray(webidl.enums!.enum)) {
    if (i.legacyNamespace) {
      getNamespace(i.legacyNamespace).nested!.enums.push(i);
    }
  }
  for (const i of webidl.typedefs!.typedef) {
    if (i.legacyNamespace) {
      getNamespace(i.legacyNamespace).nested!.typedefs.push(i);
    }
  }

  return mapToArray(namespaceMap);

  function getNamespace(name: string) {
    if (name in namespaceMap) {
      const nestedAdded = addEmptyNested(namespaceMap[name]);
      namespaceMap[name] = nestedAdded;
      return nestedAdded;
    }
    throw new Error(`Couldn't find a namespace named ${name}.`);
  }
}

function addEmptyNested(namespace: Browser.Interface): Browser.Interface {
  if (namespace.nested) {
    return namespace;
  }
  return {
    ...namespace,
    nested: {
      interfaces: [],
      enums: [],
      dictionaries: [],
      typedefs: [],
    },
  };
}
