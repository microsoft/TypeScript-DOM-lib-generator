const pre = document.querySelector("pre");
if (pre) {
  const attrMap = pre.attributes;
  const value = attrMap["test"].value;
  pre.textContent = `The 'test' attribute contains ${value}.
And 'foo' has ${attrMap["foo"] ? "been" : "not been"} found.`;
};
