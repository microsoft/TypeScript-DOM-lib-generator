const readable = new ReadableStream({
  type: "bytes",
});

const defaultReader = readable.getReader();
defaultReader.read();

const byobReader = readable.getReader({ mode: "byob" });
byobReader.read(new Uint8Array(1));
