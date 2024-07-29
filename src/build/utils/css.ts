export function hyphenToCamelCase(name: string): string {
  const camel = name
    .replace(/^-(\w)/, (_, c) => c)
    .replace(/-(\w)/g, (_, c) => c.toUpperCase());
  return camel === "float" ? "_float" : camel;
}

export function camelToHyphenCase(name: string): string {
  const dashPrefix = name.startsWith("webkit") ? "-" : "";
  return dashPrefix + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
}
