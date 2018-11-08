import * as child_process from "child_process";
import * as path from "path";

function exec(cmd: string) {
  return new Promise<{ stdout: string, stderr: string}>((resolve, reject) => {
    child_process.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      }
      else {
        resolve({ stdout, stderr });
      }
    })
  })
}

async function getUnmergedDiffFiles() {
  const lastCommonCommit = (await exec("git merge-base HEAD master")).stdout;
  const files = (await exec(`git --no-pager diff --name-only HEAD ${lastCommonCommit}`)).stdout.trim();
  if (files) {
    return files.split("\n");
  }
  return [];
}

export default async function getUnmergedDiffSpecs() {
  const diffs = await getUnmergedDiffFiles();
  const specs = diffs
    .filter(s => s.startsWith("inputfiles/idl/"))
    .map(s => path.basename(s).split(".")[0]);
  return new Set(specs);
}
