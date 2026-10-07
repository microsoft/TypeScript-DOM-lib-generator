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

declare const node: Node;
assertType<Node>()(node.cloneNode())();

const div = document.createElement("div");
assertType<HTMLDivElement>()(div.cloneNode(true))();

declare const documentFragment: DocumentFragment;
assertType<DocumentFragment>()(documentFragment.cloneNode())();

declare const elementOrFragment: Element | DocumentFragment;
assertType<Element | DocumentFragment>()(elementOrFragment.cloneNode())();

class FancyButton extends HTMLButtonElement {}
declare const fancyButton: FancyButton;
assertType<FancyButton>()(fancyButton.cloneNode())();

export {};
