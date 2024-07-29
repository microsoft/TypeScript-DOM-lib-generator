export function addToArrayMap<T>(
  map: Map<string, T[]>,
  name: string,
  value: T,
): void {
  const array = map.get(name) || [];
  array.push(value);
  map.set(name, array);
}

export function addToStringMap(
  map: Map<string, string>,
  name: string,
  value: string,
): void {
  const old = map.get(name) || "";
  map.set(name, `${old}\n${value}\n`);
}
