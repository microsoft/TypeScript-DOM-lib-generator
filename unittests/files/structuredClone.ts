function assertType<T>(_x: T) {}

const toBeCloned = {
  name: "abc",
  address: "test",
  age: 30,
  info: {
    url: "https://example.com",
  },
} as const;

const nonMatchingType = { foo: "bar" } as const;
const clone = structuredClone(toBeCloned);

assertType<typeof toBeCloned>(clone);
// @ts-expect-error non matching type
assertType<typeof nonMatchingType>(clone);
