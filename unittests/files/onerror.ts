/**
 * window.onerror works as intended with global event handler
 */
window.onerror = (message, src, lineno, colno, error) => {
  if (message && src && lineno && colno && error) {
    return;
  }
};

const div: HTMLElement = document.createElement("div");


/**
 * HTMLElement.onerror works with a single event arg, UIEvent
 */
div.onerror = (event: UIEvent) => {
  if (event) {
    return;
  }
};

/**
 * HTMLElement.onerror works with a single event arg, Event
 */
div.onerror = (event: Event) => {
  if (event) {
    return;
  }
};

/**
 * HTMLElement onerror is nullable
 */
div.onerror = null;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

/**
 * SVGElement.onerror works with a single event arg, UIEvent
 */
svg.onerror = (event: UIEvent) => {
  if (event) {
    return;
  }
};

/**
 * SVGElement.onerror works with a single event arg, Event
 */
svg.onerror = (event: Event) => {
  if (event) {
    return;
  }
};

/**
 * SVGElement onerror is nullable
 */
svg.onerror = null;
