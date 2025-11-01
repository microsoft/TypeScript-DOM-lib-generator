function hyphenToCamelCase(name: string): string {
  const camel = name
    .replace(/^-(\w)/, (_, c) => c)
    .replace(/-(\w)/g, (_, c) => c.toUpperCase());
  return camel === "float" ? "_float" : camel;
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
