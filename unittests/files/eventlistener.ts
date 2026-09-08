document.addEventListener("arbitrary_invalid_event", {
  handleEvent(ev)  {
    return ev.returnValue;
  },
});
const divElement: HTMLElement = document.createElement("div");

/**
 * addEventListener works with a single event arg, Event
 */
divElement.addEventListener(
  "click",
  (event: Event) => {
    if (event) {
      return;
    }
  },
  false,
);
/**
 * HTMLElement addEventListener works with a custom string and single event arg, Event
 */
divElement.addEventListener("beep", (event: Event) => {
  if (event) {
    return;
  }
});

const svgElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg",
);

/**
 * SVGElement addEventListener works with a single event arg, Event
 */
svgElement.addEventListener(
  "click",
  (event: Event) => {
    if (event) {
      return;
    }
  },
  false,
);

/**
 * SVGElement addEventListener works with a custom string and single event arg, Event
 */
svgElement.addEventListener("beep", (event: Event) => {
  if (event) {
    return;
  }
});
