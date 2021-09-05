/////////////////////////////
/// Worker Async Iterable APIs
/////////////////////////////

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncIterableIterator<any>;
    values(options?: ReadableStreamIteratorOptions): AsyncIterableIterator<any>;
}
