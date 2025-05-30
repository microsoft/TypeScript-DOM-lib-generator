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

// string:
declare const element: Element;
assertType<string>()(element.textContent)();
element.textContent = null;

declare const characterData: CharacterData;
assertType<string>()(characterData.textContent)();
characterData.textContent = null;

declare const text: Text;
assertType<string>()(text.textContent)();
text.textContent = null;

declare const comment: Comment;
assertType<string>()(comment.textContent)();
comment.textContent = null;

declare const processingInstruction: ProcessingInstruction;
assertType<string>()(processingInstruction.textContent)();
processingInstruction.textContent = null;

declare const documentFragment: DocumentFragment;
assertType<string>()(documentFragment.textContent)();

declare const attr: Attr;
assertType<string>()(attr.textContent)();
attr.textContent = null;

// null:
assertType<null>()(document.textContent)();

declare const documentType: DocumentType;
assertType<null>()(documentType.textContent)();

export {};
