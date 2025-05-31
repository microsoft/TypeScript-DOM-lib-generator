/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
// this should not show error
window.onerror = (_message, _source, _lineno, _colno, _error) => {};

// this also should not show error
declare var img: HTMLImageElement;
img.onerror = (_event: Event) => {};
