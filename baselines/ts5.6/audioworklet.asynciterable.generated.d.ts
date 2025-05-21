/////////////////////////////
/// AudioWorklet Async Iterable APIs
/////////////////////////////

interface ReadableStreamAsyncIterator<T> extends AsyncIteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.asyncIterator](): ReadableStreamAsyncIterator<T>;
}

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
    values(options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
}
