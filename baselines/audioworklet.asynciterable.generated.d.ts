/////////////////////////////
/// AudioWorklet Async Iterable APIs
/////////////////////////////

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R, BuiltinIteratorReturn>;
    values(options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R, BuiltinIteratorReturn>;
}
