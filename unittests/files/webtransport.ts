function assertType<T>(_x: T) {}

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
declare function assertExact<T extends true>(): void;

declare const receiveStream: WebTransportReceiveStream;
declare const sendStream: WebTransportSendStream;
declare const datagramsWritable: WebTransportDatagramsWritable;

async function testReceiveStream() {
  const result = await receiveStream.getReader().read();
  if (!result.done) {
    assertExact<Equals<typeof result.value, Uint8Array<ArrayBuffer>>>();
  }

  assertType<ReadableStream>(receiveStream);
}

async function testSendStream() {
  const writer = sendStream.getWriter();
  await writer.write(new ArrayBuffer(8));
  await writer.write(new Uint8Array(8));
  await writer.write(new DataView(new ArrayBuffer(8)));
  // @ts-expect-error strings are not BufferSource
  await writer.write("hello");

  assertType<WritableStream>(sendStream);
}

async function testDatagramsWritable() {
  const writer = datagramsWritable.getWriter();
  await writer.write(new ArrayBuffer(8));
  await writer.write(new Uint8Array(8));
  await writer.write(new DataView(new ArrayBuffer(8)));
  // @ts-expect-error strings are not BufferSource
  await writer.write("hello");

  assertType<WritableStream>(datagramsWritable);
}
