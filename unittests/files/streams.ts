function assertType<T>(_x: T) {}

const readableStream = new ReadableStream<string>({
  start(controller) {
    assertType<ReadableStreamDefaultController<string>>(controller);
    controller.desiredSize;
    controller.enqueue("a");
  },
  pull(controller) {
    assertType<ReadableStreamDefaultController<string>>(controller);
    controller.enqueue("b");
    controller.close();
  },
  cancel(reason) {
    assertType<any>(reason);
  },
});

const defaultReader1 = readableStream.getReader();
assertType<ReadableStreamDefaultReader<string>>(defaultReader1);
defaultReader1.read().then((result) => {
  assertType<ReadableStreamReadResult<string>>(result);
  if (!result.done) {
    result.value.charAt(0);
  }
});

const readableByteStream = new ReadableStream({
  type: "bytes",
  start(controller) {
    assertType<ReadableByteStreamController>(controller);
    controller.desiredSize;
    controller.byobRequest;
  },
  pull(controller) {
    assertType<ReadableByteStreamController>(controller);
    if (controller.byobRequest) {
      assertType<ReadableStreamBYOBRequest>(controller.byobRequest);
      controller.byobRequest.view;
      controller.byobRequest.respond(1);
      controller.byobRequest.respondWithNewView(new Uint32Array(1));
    } else {
      controller.enqueue(new Uint8Array(1));
    }
    controller.close();
  },
  cancel(reason) {
    assertType<any>(reason);
  },
});

const defaultReader2 = readableByteStream.getReader();
assertType<ReadableStreamDefaultReader<Uint8Array>>(defaultReader2);
defaultReader2.read().then((result) => {
  assertType<ReadableStreamReadResult<Uint8Array>>(result);
  if (!result.done) {
    result.value.buffer;
    result.value[0];
  }
});

const byobReader = readableByteStream.getReader({ mode: "byob" });
assertType<ReadableStreamBYOBReader>(byobReader);
byobReader.read(new Uint8Array(1));
byobReader.read(new DataView(new ArrayBuffer(1))).then((result) => {
  assertType<ReadableStreamReadResult<DataView>>(result);
  if (!result.done) {
    result.value.getUint8(0);
  }
});

const writableStream = new WritableStream<number>({
  start(controller) {
    assertType<WritableStreamDefaultController>(controller);
  },
  write(chunk, controller) {
    assertType<number>(chunk);
    assertType<WritableStreamDefaultController>(controller);
    chunk.toFixed(3);
    controller.error("boom!");
  },
  close() {},
  abort(reason) {
    assertType<any>(reason);
  },
});

const defaultWriter = writableStream.getWriter();
assertType<WritableStreamDefaultWriter<number>>(defaultWriter);
defaultWriter.write(42);
defaultWriter.close();
defaultWriter.abort("boom!");

const transformStream = new TransformStream<string, number>({
  start(controller) {
    assertType<TransformStreamDefaultController<number>>(controller);
  },
  transform(chunk, controller) {
    assertType<string>(chunk);
    assertType<TransformStreamDefaultController<number>>(controller);
    controller.enqueue(chunk.length);
    controller.error("boom!");
  },
  flush(controller) {
    assertType<TransformStreamDefaultController<number>>(controller);
    controller.terminate();
  },
});
assertType<ReadableStream<number>>(transformStream.readable);
assertType<WritableStream<string>>(transformStream.writable);
