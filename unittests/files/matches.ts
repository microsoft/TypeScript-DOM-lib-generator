declare const element: Element;
declare const htmlElement: HTMLElement;
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

if (!htmlTableCellElement.matches("th")) {
  htmlTableCellElement.id;
}
