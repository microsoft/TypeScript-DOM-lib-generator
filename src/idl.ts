import fs from "fs";
import path from "path";
import * as webidl2 from "webidl2";
const idlDir = new URL("../node_modules/@webref/idl/", import.meta.url);
const outputDir = new URL("../inputfiles/idl/", import.meta.url);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(idlDir).forEach((file) => {
  if (!file.endsWith(".idl")) return;

  const shortname = path.basename(file, ".idl");
  const idlContent = fs.readFileSync(new URL(file, idlDir), "utf-8");

  let parsed;
  try {
    parsed = webidl2.parse(idlContent);
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e);
    return;
  }

  const entries: Record<string, string> = {};

  for (const def of parsed) {
    if ("members" in def && def.name) {
      def.members.forEach((member: any) => {
        const key = `${def.name.toLowerCase()}-${member.name?.toLowerCase() || member.type}`;
        // You can customize this: read comments from [webidl2] extended attributes or elsewhere.
        let description = member.extAttrs?.find(
          (attr: any) => attr.name === "comment",
        )?.rhs?.value;

        if (!description && member.idlType) {
          description = `Type: ${member.idlType.idlType}`;
        }

        entries[key] = description || "No description available.";
      });
    } else if ("name" in def && typeof def.name === "string") {
      entries[def.name.toLowerCase()] = "No description available.";
    }
  }

  fs.writeFileSync(
    new URL(`${shortname}.json`, outputDir),
    JSON.stringify(entries, null, 2),
  );
});
