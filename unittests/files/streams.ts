const readableStream = new ReadableStream<string>({
  start(controller) {
    controller.desiredSize;
    controller.enqueue("a");
  },
  pull(controller) {
    controller.enqueue("b");
    controller.close();
  },
});

const defaultReader1 = readableStream.getReader();
defaultReader1.read().then((result) => {
  if (!result.done) {
    result.value.charAt(0);
  }
});

const readableByteStream = new ReadableStream({
  type: "bytes",
  start(controller) {
    controller.desiredSize;
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

const defaultReader2 = readableByteStream.getReader();
defaultReader2.read().then((result) => {
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
