const readable = new ReadableStream({
  type: "bytes",
});

const defaultReader = readable.getReader();
defaultReader.read();

const byobReader = readable.getReader({ mode: "byob" });
byobReader.read(new Uint8Array(1));
byobReader.read(new DataView(new ArrayBuffer(1))).then((result) => {
  if (!result.done) {
    result.value.getUint8(0);
  }
});
