// fetch and filter MDN metadata

import fs from "fs/promises";

const url = "https://developer.mozilla.org/en-US/metadata.json";

const res = await fetch(url);
if (!res.ok) {
  throw new Error(`Fetch failed: ${res.statusText}`);
}

const data = await res.json();

// Filter and map the data
const filtered = Object.values(data)
  .filter((entry) => {
    const path = entry.mdn_url.toLowerCase();
    return (
      path.startsWith("/en-us/docs/web/api/") ||
      path.startsWith("/en-us/docs/webassembly/reference/javascript_interface/")
    );
  })
  .map(({ mdn_url, pageType, summary }) => ({
    mdn_url,
    pageType,
    summary,
  }));

// Save to file
await fs.writeFile(
  new URL("../inputfiles/mdn.json", import.meta.url),
  JSON.stringify(filtered, null, 2),
);

console.log("mdn.json updated!");
