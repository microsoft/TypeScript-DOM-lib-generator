import { execSync } from "child_process";
import ts from "typescript";
import { fileURLToPath } from "url";

export function gitShowFile(commit: string, path: string): string {
  return execSync(`git show ${commit}:${path}`, { encoding: "utf-8" });
}

function gitLatestTag() {
  return execSync(`git describe --tags --abbrev=0`, {
    encoding: "utf-8",
  }).trim();
}

function mapInterfaceToMembers(interfaces: ts.InterfaceDeclaration[]) {
  const interfaceToMemberMap = new Map<string, string[]>();
  for (const decl of interfaces) {
    interfaceToMemberMap.set(
      decl.name.text,
      decl.members.map((m) => m.name?.getText()).filter((n) => n) as string[],
    );
  }
  return interfaceToMemberMap;
}

function extractTypesFromFile(file: string) {
  const source = ts.createSourceFile(
    "dom",
    file,
    ts.ScriptTarget.ES2015,
    /*setParentNodes */ true,
  );

  const interfaceNames = source.statements
    .filter(ts.isVariableStatement)
    .map((v) => v.declarationList.declarations[0].name.getText(source));
  const tsInterfacedecls = source.statements.filter(ts.isInterfaceDeclaration);
  const idlInterfaceDecls = tsInterfacedecls.filter((i) =>
    interfaceNames.includes(i.name.text),
  );
  const otherDecls = tsInterfacedecls.filter(
    (i) => !interfaceNames.includes(i.name.text),
  );

  const interfaceToMemberMap = mapInterfaceToMembers(idlInterfaceDecls);
  const otherToMemberMap = mapInterfaceToMembers(otherDecls);

  return { interfaceToMemberMap, otherToMemberMap };
}

function compareSet<T>(x: Set<T>, y: Set<T>) {
  function intersection<T>(x: Set<T>, y: Set<T>) {
    const result = new Set<T>();
    for (const i of y) {
      if (x.has(i)) {
        result.add(i);
      }
    }
    return result;
  }
  function difference<T>(x: Set<T>, y: Set<T>) {
    const result = new Set(x);
    for (const i of y) {
      result.delete(i);
    }
    return result;
  }
  const common = intersection(x, y);
  const added = difference(y, common);
  const removed = difference(x, common);
  return { added, removed, common };
}

function diffTypes(previous: string, current: string) {
  function diff(
    previousMap: Map<string, string[]>,
    currentMap: Map<string, string[]>,
  ) {
    const { added, removed, common } = compareSet(
      new Set(previousMap.keys()),
      new Set(currentMap.keys()),
    );
    const modified = new Map<
      string,
      { added: Set<string>; removed: Set<string> }
    >();
    for (const name of common) {
      const previousMembers = new Set(previousMap.get(name));
      const currentMembers = new Set(currentMap.get(name));
      const { added, removed } = compareSet(previousMembers, currentMembers);
      if (!added.size && !removed.size) {
        continue;
      }
      modified.set(name, { added, removed });
    }
    return { added, removed, modified };
  }

  const previousTypes = extractTypesFromFile(previous);
  const currentTypes = extractTypesFromFile(current);
  return {
    interfaces: diff(
      previousTypes.interfaceToMemberMap,
      currentTypes.interfaceToMemberMap,
    ),
    others: diff(previousTypes.otherToMemberMap, currentTypes.otherToMemberMap),
  };
}

function writeAddedRemoved(added: Set<string>, removed: Set<string>) {
  function newlineSeparatedList(names: Set<string>) {
    return [...names].map((a) => `* \`${a}\``).join("\n");
  }
  const output = [];
  if (added.size) {
    output.push(`## New interfaces\n\n${newlineSeparatedList(added)}`);
  }
  if (removed.size) {
    output.push(`## Removed interfaces\n\n${newlineSeparatedList(removed)}`);
  }
  return output.join("\n\n");
}

function writeAddedRemovedInline(added: Set<string>, removed: Set<string>) {
  function commaSeparatedList(names: Set<string>) {
    return [...names].map((a) => `\`${a}\``).join(", ");
  }
  const output = [];
  if (added.size) {
    output.push(`  * Added: ${commaSeparatedList(added)}`);
  }
  if (removed.size) {
    output.push(`  * Removed: ${commaSeparatedList(removed)}`);
  }
  return output.join("\n");
}

const dom = "baselines/dom.generated.d.ts";

export function generateDefaultFromRecentTag(): string {
  const [base = gitLatestTag(), head = "HEAD"] = process.argv.slice(2);
  const previous = gitShowFile(base, dom);
  const current = gitShowFile(head, dom);
  const changelog = generateChangelogFrom(previous, current);
  if (!changelog.length) {
    throw new Error(`No change reported between ${base} and ${head}.`);
  }
  return changelog;
}

export function generateChangelogFrom(
  previous: string,
  current: string,
): string {
  const {
    interfaces: { added, removed, modified },
    others,
  } = diffTypes(previous, current);

  const outputs = [];
  if (added.size || removed.size) {
    outputs.push(writeAddedRemoved(added, removed));
  }

  if (modified.size) {
    const modifiedOutput = [`## Modified\n`];
    for (const [key, value] of modified.entries()) {
      modifiedOutput.push(`* ${key}`);
      modifiedOutput.push(writeAddedRemovedInline(value.added, value.removed));
    }
    outputs.push(modifiedOutput.join("\n"));
  }

  if (others.modified.size) {
    const modifiedOutput = [`### Non-value types\n`];
    for (const [key, value] of others.modified.entries()) {
      modifiedOutput.push(`* ${key}`);
      modifiedOutput.push(writeAddedRemovedInline(value.added, value.removed));
    }
    outputs.push(modifiedOutput.join("\n"));
  }

  const output = outputs.join("\n\n");
  return output;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(generateDefaultFromRecentTag());
}
