window.onerror = (message: string, source: string, lineno: number, colno: number, error: any) => {};

declare var img: HTMLImageElement;
img.onerror = (event: Event) => {};