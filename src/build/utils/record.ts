export function filterMapRecord<T extends object, V>(
  object: Record<string, T> | undefined,
  mapper: (key: string, value: T) => V | undefined,
  forNamespace?: boolean,
): Record<string, V> | undefined {
  if (!object) {
    return;
  }
  const result = {} as Record<string, V>;
  for (const [key, value] of Object.entries(object)) {
    const mdnKey =
      forNamespace || ("static" in value && value.static)
        ? `${key}_static`
        : key;
    const newValue = mapper(mdnKey, value);
    if (newValue !== undefined) {
      result[key] = newValue;
    }
  }
  return result;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isEmptyRecord(o: object | undefined): boolean {
  return !o || !Object.keys(o).length;
}
