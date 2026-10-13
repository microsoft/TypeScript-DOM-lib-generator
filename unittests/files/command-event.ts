document.body.addEventListener("command", (event) => {
  const command: string = event.command;
  const source: Element | null = event.source;
});

document.body.oncommand = (event) => {
  const command: string = event.command;
};

document.addEventListener("command", (event) => {
  const command: string = event.command;
});

window.oncommand = (event) => {
  const command: string = event.command;
};

oncommand = (event) => {
  const command: string = event.command;
};
