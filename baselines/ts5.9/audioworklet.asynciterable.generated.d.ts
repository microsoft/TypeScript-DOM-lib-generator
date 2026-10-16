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

interface ReadableStreamConstructor {
    /**
     * The **`ReadableStream.from()`** static method returns a ReadableStream from a provided iterable or async iterable object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/from_static)
     */
    from(asyncIterable: AsyncIterable<any>): ReadableStream;
}
