import * as fs from "fs";
import * as path from "path";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

fetchIDLs();

interface IDLSource {
    url: string;
    title: string;
}

async function fetchIDLs() {
    const idlSources = require("../inputfiles/idlSources.json") as IDLSource[];
    await Promise.all(idlSources.map(async source =>{
        const idl = await fetchIDL(source);
        fs.writeFileSync(path.join(__dirname, `../inputfiles/idl/${source.title}.widl`), idl + '\n');
    }));
}

async function fetchIDL(source: IDLSource) {
    const response = await fetch(source.url);
    const dom = new JSDOM(await response.text());
    const elements = Array.from(dom.window.document.querySelectorAll("pre.idl:not(.extract),code.idl-code"));
    if (!elements.length) {
        throw new Error("Found no IDL code");
    }
    const last = elements[elements.length - 1];
    if (last.previousElementSibling &&
        last.previousElementSibling.textContent!.includes("IDL Index")
    ) {
        // IDL Index includes all IDL codes
        return last.textContent!.trim();
    }

    return elements.map(element => trimCommonIndentation(element.textContent!).trim()).join('\n\n');
}

/**
 * Remove common indentation:
 *     <pre>
 *       typedef Type = "type";
 *       dictionary Dictionary {
 *         "member"
 *       };
 *     </pre>
 * Here the textContent has 6 common preceding whitespaces that can be unindented.
 */
function trimCommonIndentation(text: string) {
    const lines = text.split("\n");
    if (!lines[0].trim()) {
        lines.shift();
    }
    if (!lines[lines.length - 1].trim()) {
        lines.pop();
    }
    const commonIndentation = Math.min(...lines.map(getIndentation));
    return lines.map(line => line.slice(commonIndentation)).join("\n");
}

/** Count preceding whitespaces */
function getIndentation(line: string) {
    let count = 0;
    for (const ch of line) {
        if (ch !== " ") {
            break;
        }
        count++;
    }
    return count;
}
