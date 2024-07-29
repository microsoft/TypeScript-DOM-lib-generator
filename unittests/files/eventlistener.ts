document.addEventListener("arbitrary_invalid_event", (ev) => {
  return ev.returnValue;
});

document.addEventListener("arbitrary_invalid_event", {
  handleEvent(ev)  {
    return ev.returnValue;
  }
});
