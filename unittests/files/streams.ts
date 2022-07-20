const readableByteStream = new ReadableStream({
  type: "bytes",
  start(controller) {
    controller.byobRequest;
  },
  pull(controller) {
    if (controller.byobRequest) {
      controller.byobRequest.view;
      controller.byobRequest.respond(1);
      controller.byobRequest.respondWithNewView(new Uint32Array(1));
    } else {
      controller.enqueue(new Uint8Array(1));
    }
    controller.close();
  },
});

const defaultReader = readableByteStream.getReader();
defaultReader.read().then((result) => {
  if (!result.done) {
    result.value.buffer;
    result.value[0];
  }
});

const byobReader = readableByteStream.getReader({ mode: "byob" });
byobReader.read(new Uint8Array(1));
byobReader.read(new DataView(new ArrayBuffer(1))).then((result) => {
  if (!result.done) {
    result.value.getUint8(0);
  }
});
