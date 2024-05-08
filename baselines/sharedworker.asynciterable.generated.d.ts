/////////////////////////////
/// SharedWorker Async Iterable APIs
/////////////////////////////

interface FileSystemDirectoryHandle {
    [Symbol.asyncIterator](): AsyncIterableIterator<[string, FileSystemHandle], BuiltinIteratorReturn>;
    entries(): AsyncIterableIterator<[string, FileSystemHandle], BuiltinIteratorReturn>;
    keys(): AsyncIterableIterator<string, BuiltinIteratorReturn>;
    values(): AsyncIterableIterator<FileSystemHandle, BuiltinIteratorReturn>;
}

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R, BuiltinIteratorReturn>;
    values(options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R, BuiltinIteratorReturn>;
}
