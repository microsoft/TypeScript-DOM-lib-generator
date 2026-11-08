document.body.addEventListener("command", (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
  const source: Element | null = event.source;
});

document.body.oncommand = (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
};

document.addEventListener("command", (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
});

window.oncommand = (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
};

oncommand = (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
};

window.addEventListener("command", (event) => {
  const commandEvent: CommandEvent = event;
  const source: Element | null = event.source;
});

addEventListener("command", (event) => {
  const commandEvent: CommandEvent = event;
  const command: string = event.command;
});
