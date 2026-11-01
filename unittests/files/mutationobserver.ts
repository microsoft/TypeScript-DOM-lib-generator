const observer = new MutationObserver(() => {});

// @ts-expect-error options are required, observe() throws without them
observer.observe(document.body);

observer.observe(document.body, { childList: true });
observer.observe(document.body, { attributeFilter: ["class"] });

declare const options: MutationObserverInit;
observer.observe(document.body, options);
