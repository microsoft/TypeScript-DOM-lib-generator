function assertType<T>(_x: T) {}

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
declare function assertExact<T extends true>(): void;

declare const flag: boolean;

function takesMemory(_memory: WebAssembly.Memory) {}

function testWebAssemblyMemory() {
  // A shared memory exposes an ArrayBufferLike, which can be narrowed to a SharedArrayBuffer.
  const sharedMemory = new WebAssembly.Memory({
    initial: 1,
    maximum: 1,
    shared: true,
  });
  assertExact<Equals<typeof sharedMemory.buffer, ArrayBufferLike>>();
  assertExact<
    Equals<ReturnType<typeof sharedMemory.toFixedLengthBuffer>, ArrayBufferLike>
  >();
  assertExact<
    Equals<ReturnType<typeof sharedMemory.toResizableBuffer>, ArrayBufferLike>
  >();
  const sharedBuffer = sharedMemory.buffer;
  if (sharedBuffer instanceof SharedArrayBuffer) {
    assertExact<Equals<typeof sharedBuffer, SharedArrayBuffer>>();
  }

  // A non-shared memory exposes an ArrayBuffer, as before.
  const memory = new WebAssembly.Memory({ initial: 1 });
  assertExact<Equals<typeof memory.buffer, ArrayBuffer>>();
  assertExact<
    Equals<ReturnType<typeof memory.toFixedLengthBuffer>, ArrayBuffer>
  >();
  assertExact<
    Equals<ReturnType<typeof memory.toResizableBuffer>, ArrayBuffer>
  >();
  const view: Uint8Array<ArrayBuffer> = new Uint8Array(memory.buffer);
  assertType<Uint8Array<ArrayBuffer>>(view);

  // When `shared` is not known statically, the buffer can be either.
  const maybeShared = new WebAssembly.Memory({ initial: 1, shared: flag });
  assertExact<Equals<typeof maybeShared.buffer, ArrayBufferLike>>();
  assertExact<
    Equals<ReturnType<typeof maybeShared.toFixedLengthBuffer>, ArrayBufferLike>
  >();
  assertExact<
    Equals<ReturnType<typeof maybeShared.toResizableBuffer>, ArrayBufferLike>
  >();

  // A shared memory is still a plain `WebAssembly.Memory`.
  const plain: WebAssembly.Memory = sharedMemory;
  assertType<WebAssembly.Memory>(plain);
  takesMemory(sharedMemory);
  const exported: WebAssembly.ExportValue = sharedMemory;
  assertType<WebAssembly.ExportValue>(exported);

  // @ts-expect-error A shared memory's buffer may be a SharedArrayBuffer.
  const notArrayBuffer: ArrayBuffer = sharedMemory.buffer;
  assertType<ArrayBuffer>(notArrayBuffer);
}
