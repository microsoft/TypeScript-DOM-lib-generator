import { execSync } from "child_process";
import { readdir } from "fs/promises";

for (const filename of await readdir(new URL("files/", import.meta.url))) {
  if (filename.endsWith(".ts")) {
    execSync(`node node_modules/@typescript/native/bin/tsc generated/dom.generated.d.ts unittests/files/${filename} --target es2020 --lib es2020 --types --noEmit --ignoreConfig`, {
      stdio: "inherit"
    });
  }
}

for (const filename of await readdir(new URL("files/audioworklet", import.meta.url))) {
  if (filename.endsWith(".ts")) {
    execSync(`node node_modules/@typescript/native/bin/tsc generated/audioworklet.generated.d.ts unittests/files/audioworklet/${filename} --target es2020 --lib es2020 --types --noEmit --ignoreConfig`, {
      stdio: "inherit"
    });
  }
}
