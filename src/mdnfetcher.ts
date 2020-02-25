import * as fs from "fs";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

interface Page {
    summary: string;
}

const knownBadDescriptions = [
    "CustomEvent", // too vague; references truncated data
    "IDBTransaction", // just a comment about Firefox 40
    "RTCDtmfSender", // is just 'tbd'
    "SVGMatrix", // too vague; references truncated data
];

fetchInterfaceDescriptions();

async function fetchInterfaceDescriptions() {
    const webIdl = require("../inputfiles/browser.webidl.preprocessed.json");
    const interfaceNames = Object.keys(webIdl.interfaces.interface).sort();
    const descriptions: Record<string, string> = {};

    await interfaceNames.reduce(async (previousRequest, name) => {
        // Issuing too many requests in parallel causes 504 gateway errors, so chain
        await previousRequest;

        const response = await fetch(`https://developer.mozilla.org/en-US/docs/Web/API/${name}$json`);
        if (response.ok) {
            const page = await response.json();
            addDescription(name, page);
        } else if (response.status !== 404) {
            throw new Error(`Failed to fetch ${name}: ${response.statusText}`);
        }
    }, Promise.resolve());

    function addDescription(name: string, page: Page) {
        if (page.summary && !knownBadDescriptions.includes(name)) {
            const fragment = JSDOM.fragment(page.summary);
            descriptions[name] = fragment.textContent!;
        }
    }

    fs.writeFileSync("inputfiles/mdn/apiDescriptions.json", JSON.stringify(descriptions, null, 2));
}
