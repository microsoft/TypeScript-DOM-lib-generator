// fetch and filter MDN metadata
import fs from "fs";

const url = "https://developer.mozilla.org/en-US/metadata.json";

async function fetchAndFilterMDN() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);

    const data = await res.json();

    // Filter and map the data
    const filtered = Object.values(data)
      .filter((entry) => {
        const path = entry.mdn_url.toLowerCase();
        return (
          path.startsWith("/en-us/docs/web/api/") ||
          path.startsWith(
            "/en-us/docs/webassembly/reference/javascript_interface/",
          )
        );
      })
      .map(({ mdn_url, pageType, summary }) => ({
        mdn_url,
        pageType,
        summary,
      }));

    // Save to file
    fs.writeFileSync(
      "./inputfiles/mdn.json",
      JSON.stringify({ data: filtered }, null, 2),
    );
    console.log("mdn.json created!");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

fetchAndFilterMDN();
