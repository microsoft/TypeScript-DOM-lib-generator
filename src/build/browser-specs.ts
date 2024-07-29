import { createRequire } from "module";

const require = createRequire(import.meta.url);
const browserSpecs = require("browser-specs") as any[];

export function getLatestSpecNames(): string[] {
  return [
    ...new Set(browserSpecs.map((spec) => spec.series.shortname)),
    ...browserSpecs
      .filter((spec) => spec.seriesComposition === "delta")
      .map((spec) => spec.shortname),

    // https://wiki.whatwg.org/wiki/DOM_XSLTProcessor
    "xsltprocessor",
  ];
}
