// This should be CSSStyleProperties as of 2025,
// but a decade-usage of CSSStyleDeclaration blocks it

const foo = { width: "10px" } as CSSStyleDeclaration;
foo.height = "20px";

document.body.style.width = "10px";
