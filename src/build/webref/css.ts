import { hyphenToCamelCase } from "../utils/css.js";
export function camelToHyphenCase(name: string): string {
  const dashPrefix = name.startsWith("webkit") ? "-" : "";
  return dashPrefix + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
}

export function generateWebIdlFromCssProperties(properties: string[]): string {
  return `partial interface CSSStyleProperties {${properties
    .map(
      (property) =>
        `\n  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString ${hyphenToCamelCase(
          property,
        )};`,
    )
    .join("")}\n};`;
}
