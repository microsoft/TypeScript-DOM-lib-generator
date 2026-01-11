import { hyphenToCamelCase } from "../utils/css.ts";

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
