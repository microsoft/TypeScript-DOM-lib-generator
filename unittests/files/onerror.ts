// this should not show error
window.onerror = (message: string, source: string, lineno: number, colno: number, error: any) => {};

// this also should not show error
declare var img: HTMLImageElement;
img.onerror = (event: Event) => {};