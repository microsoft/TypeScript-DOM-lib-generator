const source = new EventSource("/");

source.addEventListener("custom", (event) => {
  event.data; // MessageEvent specific
});
source.addEventListener("custom", (event: MessageEvent) => {});
source.addEventListener("with-handle-event", { handleEvent(event: Event) {} });
