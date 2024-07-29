export const url = new URL("https://example.com");

new EventSource(url);
location.assign(url);
navigator.sendBeacon(url);
navigator.registerProtocolHandler("x-test", url);
new Worker(url);
new SharedWorker(url);
window.open(url);
Response.redirect(url);
