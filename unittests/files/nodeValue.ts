declare const assertType: <T>() => <T1>(
  _x: T1,
) => StrictEqual<T, T1> extends true
  ? () => void
  : T1 extends T
    ? { error: "Left side is not assignable to right side" }
    : { error: "Right side is not assignable to left side" };

type StrictEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

const div = document.createElement("div");
assertType<string>()(div.textContent)();
div.textContent = null;

const text = document.createTextNode("hello");
assertType<string>()(text.textContent)();

assertType<string | null>()(document.textContent)();

const type = document.doctype!;
assertType<string | null>()(type.textContent)();

export {};
