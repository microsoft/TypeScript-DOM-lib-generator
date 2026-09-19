// fetch and filter MDN metadata

import fs from "fs/promises";

const url = "https://developer.mozilla.org/en-US/metadata.json";

const res = await fetch(url);
if (!res.ok) {
  throw new Error(`Fetch failed: ${res.statusText}`);
}

const data = await res.json();
const entries = Object.values(data);

const latestEntry = entries.reduce((latest, entry) =>
  !latest || entry.modified > latest.modified ? entry : latest,
);
const commit = latestEntry?.source?.last_commit_url.match(
  /\/commit\/([0-9a-f]{40})$/,
)?.[1];
if (!commit) {
  throw new Error("Could not determine the mdn/content commit");
}

// Filter and map the data
const filtered = entries
  .filter((entry) => {
    const path = entry.mdn_url;
    return (
      path.startsWith("/en-US/docs/Web/API/") ||
      path.startsWith(
        "/en-US/docs/WebAssembly/Reference/JavaScript_interface/",
      ) ||
      path.startsWith("/en-US/docs/Web/CSS/Reference/Properties/")
    );
  })
  .map(({ mdn_url, pageType, summary }) => ({
    mdn_url,
    pageType,
    summary,
  }))
  .sort((a, b) => a.mdn_url.localeCompare(b.mdn_url));

// Save to file
await fs.writeFile(
  new URL("../inputfiles/mdn.json", import.meta.url),
  JSON.stringify(filtered, null, 2),
);
await fs.writeFile(
  new URL("../inputfiles/mdn.commit", import.meta.url),
  `${commit}\n`,
);

console.log("mdn.json updated!");
