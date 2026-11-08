const div: HTMLDivElement = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
const input: HTMLInputElement = document.createElementNS("http://www.w3.org/1999/xhtml", "input");
const custom: HTMLElement = document.createElementNS("http://www.w3.org/1999/xhtml", "my-element");
const circle: SVGCircleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");

// @ts-expect-error an XHTML div is not an input element
const wrong: HTMLInputElement = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
