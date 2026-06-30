declare const element: Element;
declare const htmlElement: HTMLElement;
declare const htmlDivElement: HTMLDivElement;
declare const htmlTableCellElement: HTMLTableCellElement;

if (element.matches("dt")) {
  const narrowed: HTMLElement = element;
}

if (!htmlElement.matches("dt")) {
  htmlElement.id;
}

if (htmlElement.matches("td")) {
  const narrowed: HTMLTableCellElement = htmlElement;
}

if (htmlElement.matches("div")) {
  const narrowed: HTMLDivElement = htmlElement;
}

if (!htmlDivElement.matches("div")) {
  htmlDivElement.id;
}

if (htmlDivElement.matches("object")) {
  // @ts-expect-error HTMLDivElement should not narrow to HTMLObjectElement.
  const narrowed: HTMLObjectElement = htmlDivElement;
}

if (!htmlTableCellElement.matches("th")) {
  htmlTableCellElement.id;
}
