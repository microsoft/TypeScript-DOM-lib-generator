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
  }));

// Save to file
await fs.writeFile(
  new URL("../inputfiles/mdn.json", import.meta.url),
  JSON.stringify(filtered, null, 2),
);

console.log("mdn.json updated!");
