import { execSync } from "child_process";
import { writeFileSync } from "fs";

type Contributor = {
  name: string;
  email: string;
};

const EXCLUDED_USERS = [
  "TypeScript Bot",
  "microsoft-github-policy-service[bot]",
  "dependabot[bot]",
  "github-actions[bot]",
];

function getContributors(): Contributor[] {
  const log = execSync(`git log --format="%aN <%aE>"`, { encoding: "utf-8" });

  const unique = new Map<string, Contributor>();

  log.split("\n").forEach((line) => {
    const match = line.match(/^(.*?) <(.*?)>$/);
    if (match) {
      const name = match[1].trim();
      const email = match[2].trim();

      const shouldExclude = EXCLUDED_USERS.some(
        (u) =>
          name.toLowerCase().includes(u.toLowerCase()) ||
          email.toLowerCase().includes(u.toLowerCase()),
      );

      if (!shouldExclude && !unique.has(`${name} <${email}>`)) {
        unique.set(`${name} <${email}>`, { name, email });
      }
    }
  });

  return Array.from(unique.values());
}

function generateAuthorsMd(contributors: Contributor[]) {
  const content =
    "# Authors\n\n" +
    contributors.map((c) => `- ${c.name} <${c.email}>`).join("\n");

  writeFileSync("AUTHORS.md", content, { encoding: "utf-8" });
  console.log("✅ AUTHORS.md generated");
}

function generateMailmap(contributors: Contributor[]) {
  const emailMap = new Map<string, Set<string>>();

  for (const { name, email } of contributors) {
    if (!emailMap.has(name)) {
      emailMap.set(name, new Set());
    }
    emailMap.get(name)!.add(email);
  }

  const lines: string[] = [];

  for (const [name, emails] of emailMap.entries()) {
    const emailList = Array.from(emails);
    if (emailList.length > 1) {
      const primary = emailList[0];
      emailList.slice(1).forEach((alias) => {
        lines.push(`${name} <${primary}> <${alias}>`);
      });
    }
  }

  if (lines.length > 0) {
    writeFileSync(".mailMap", lines.join("\n") + "\n", { encoding: "utf-8" });
    console.log("✅ .mailMap generated");
  } else {
    console.log("ℹ️  No email aliases found, .mailMap not needed");
  }
}

// Run
const contributors = getContributors();
generateAuthorsMd(contributors);
generateMailmap(contributors);
