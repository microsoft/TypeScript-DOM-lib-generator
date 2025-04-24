/////////////////////////////
/// AudioWorklet APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    /** Type: boolean */
    once?: boolean;
    /** Type: boolean */
    passive?: boolean;
    /** Type: AbortSignal */
    signal?: AbortSignal;
}

interface CustomEventInit<T = any> extends EventInit {
    /** Type: any */
    detail?: T;
}

interface ErrorEventInit extends EventInit {
    /** Type: unsigned long */
    colno?: number;
    /** Type: any */
    error?: any;
    /** Type: USVString */
    filename?: string;
    /** Type: unsigned long */
    lineno?: number;
    /** Type: DOMString */
    message?: string;
}

interface EventInit {
    /** Type: boolean */
    bubbles?: boolean;
    /** Type: boolean */
    cancelable?: boolean;
    /** Type: boolean */
    composed?: boolean;
}

interface EventListenerOptions {
    /** Type: boolean */
    capture?: boolean;
}

interface MessageEventInit<T = any> extends EventInit {
    /** Type: any */
    data?: T;
    /** Type: DOMString */
    lastEventId?: string;
    /** Type: USVString */
    origin?: string;
    /** Type: [object Object] */
    ports?: MessagePort[];
    /** Type: MessageEventSource */
    source?: MessageEventSource | null;
}

interface PromiseRejectionEventInit extends EventInit {
    /** Type: object */
    promise: Promise<any>;
    /** Type: any */
    reason?: any;
}

interface QueuingStrategy<T = any> {
    /** Type: unrestricted double */
    highWaterMark?: number;
    /** Type: QueuingStrategySize */
    size?: QueuingStrategySize<T>;
}

interface QueuingStrategyInit {
    /** Type: unrestricted double */
    highWaterMark: number;
}

interface ReadableStreamGetReaderOptions {
    /** Type: ReadableStreamReaderMode */
    mode?: ReadableStreamReaderMode;
}

interface ReadableStreamIteratorOptions {
    /** Type: boolean */
    preventCancel?: boolean;
}

interface ReadableStreamReadDoneResult<T> {
    done: true;
    value: T | undefined;
}

interface ReadableStreamReadValueResult<T> {
    done: false;
    value: T;
}

interface ReadableWritablePair<R = any, W = any> {
    /** Type: ReadableStream */
    readable: ReadableStream<R>;
    /** Type: WritableStream */
    writable: WritableStream<W>;
}

interface StreamPipeOptions {
    /** Type: boolean */
    preventAbort?: boolean;
    /** Type: boolean */
    preventCancel?: boolean;
    /** Type: boolean */
    preventClose?: boolean;
    /** Type: AbortSignal */
    signal?: AbortSignal;
}

interface StructuredSerializeOptions {
    /** Type: [object Object] */
    transfer?: Transferable[];
}

interface TextDecodeOptions {
    /** Type: boolean */
    stream?: boolean;
}

interface TextDecoderOptions {
    /** Type: boolean */
    fatal?: boolean;
    /** Type: boolean */
    ignoreBOM?: boolean;
}

interface TextEncoderEncodeIntoResult {
    /** Type: unsigned long long */
    read: number;
    /** Type: unsigned long long */
    written: number;
}

interface Transformer<I = any, O = any> {
    /** Type: TransformerFlushCallback */
    flush?: TransformerFlushCallback<O>;
    /** Type: any */
    readableType?: undefined;
    /** Type: TransformerStartCallback */
    start?: TransformerStartCallback<O>;
    /** Type: TransformerTransformCallback */
    transform?: TransformerTransformCallback<I, O>;
    /** Type: any */
    writableType?: undefined;
}

interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
    start?: (controller: ReadableByteStreamController) => any;
    type: "bytes";
}

interface UnderlyingDefaultSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
    start?: (controller: ReadableStreamDefaultController<R>) => any;
    type?: undefined;
}

interface UnderlyingSink<W = any> {
    /** Type: UnderlyingSinkAbortCallback */
    abort?: UnderlyingSinkAbortCallback;
    /** Type: UnderlyingSinkCloseCallback */
    close?: UnderlyingSinkCloseCallback;
    /** Type: UnderlyingSinkStartCallback */
    start?: UnderlyingSinkStartCallback;
    /** Type: any */
    type?: undefined;
    /** Type: UnderlyingSinkWriteCallback */
    write?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    /** Type: unsigned long long */
    autoAllocateChunkSize?: number;
    /** Type: UnderlyingSourceCancelCallback */
    cancel?: UnderlyingSourceCancelCallback;
    /** Type: UnderlyingSourcePullCallback */
    pull?: UnderlyingSourcePullCallback<R>;
    /** Type: UnderlyingSourceStartCallback */
    start?: UnderlyingSourceStartCallback<R>;
    /** Type: ReadableStreamType */
    type?: ReadableStreamType;
}

/**
 * The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController)
 */
interface AbortController {
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)
     */
    abort(reason?: any): void;
}

declare var AbortController: {
    prototype: AbortController;
    new(): AbortController;
};

interface AbortSignalEventMap {
    "abort": Event;
}

/**
 * The **`AbortSignal`** interface represents a signal object that allows you to communicate with an asynchronous operation (such as a fetch request) and abort it if required via an AbortController object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal)
 */
interface AbortSignal extends EventTarget {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)
     */
    readonly aborted: boolean;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event)
     */
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/reason)
     */
    readonly reason: any;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/throwIfAborted)
     */
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AbortSignal: {
    prototype: AbortSignal;
    new(): AbortSignal;
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static)
     */
    abort(reason?: any): AbortSignal;
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/any_static)
     */
    any(signals: AbortSignal[]): AbortSignal;
};

/**
 * The **`AudioWorkletGlobalScope`** interface of the Web Audio API represents a global execution context for user-supplied code, which defines custom AudioWorkletProcessor-derived classes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope)
 */
interface AudioWorkletGlobalScope extends WorkletGlobalScope {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentFrame)
     */
    readonly currentFrame: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentTime)
     */
    readonly currentTime: number;
    /**
     * Type: float
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/sampleRate)
     */
    readonly sampleRate: number;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
     */
    registerProcessor(name: string, processorCtor: AudioWorkletProcessorConstructor): void;
}

declare var AudioWorkletGlobalScope: {
    prototype: AudioWorkletGlobalScope;
    new(): AudioWorkletGlobalScope;
};

/**
 * The **`AudioWorkletProcessor`** interface of the Web Audio API represents an audio processing code behind a custom AudioWorkletNode.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletProcessor)
 */
interface AudioWorkletProcessor {
    /**
     * Type: MessagePort
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletProcessor/port)
     */
    readonly port: MessagePort;
}

declare var AudioWorkletProcessor: {
    prototype: AudioWorkletProcessor;
    new(): AudioWorkletProcessor;
};

interface AudioWorkletProcessorImpl extends AudioWorkletProcessor {
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Record<string, Float32Array>): boolean;
}

/**
 * The **`ByteLengthQueuingStrategy`** interface of the Streams API provides a built-in byte length queuing strategy that can be used when constructing streams.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy)
 */
interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /**
     * Type: Function
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/size)
     */
    readonly size: QueuingStrategySize<ArrayBufferView>;
}

declare var ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
};

/**
 * The **`CompressionStream`** interface of the Compression Streams API is an API for compressing a stream of data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream)
 */
interface CompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<BufferSource>;
}

declare var CompressionStream: {
    prototype: CompressionStream;
    new(format: CompressionFormat): CompressionStream;
};

/**
 * The **`CountQueuingStrategy`** interface of the Streams API provides a built-in chunk counting queuing strategy that can be used when constructing streams.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy)
 */
interface CountQueuingStrategy extends QueuingStrategy {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /**
     * Type: Function
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/size)
     */
    readonly size: QueuingStrategySize;
}

declare var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new(init: QueuingStrategyInit): CountQueuingStrategy;
};

/**
 * The **`CustomEvent`** interface represents events initialized by an application for any purpose.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent)
 */
interface CustomEvent<T = any> extends Event {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
     */
    readonly detail: T;
    /**
     * Type: undefined
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)
     */
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};

/**
 * The **`DOMException`** interface represents an abnormal event (called an **exception**) that occurs as a result of calling a method or accessing a property of a web API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException)
 */
interface DOMException extends Error {
    /**
     * Type: unsigned short
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
     */
    readonly code: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message)
     */
    readonly message: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name)
     */
    readonly name: string;
    /** Type: unsigned short */
    readonly INDEX_SIZE_ERR: 1;
    /** Type: unsigned short */
    readonly DOMSTRING_SIZE_ERR: 2;
    /** Type: unsigned short */
    readonly HIERARCHY_REQUEST_ERR: 3;
    /** Type: unsigned short */
    readonly WRONG_DOCUMENT_ERR: 4;
    /** Type: unsigned short */
    readonly INVALID_CHARACTER_ERR: 5;
    /** Type: unsigned short */
    readonly NO_DATA_ALLOWED_ERR: 6;
    /** Type: unsigned short */
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    /** Type: unsigned short */
    readonly NOT_FOUND_ERR: 8;
    /** Type: unsigned short */
    readonly NOT_SUPPORTED_ERR: 9;
    /** Type: unsigned short */
    readonly INUSE_ATTRIBUTE_ERR: 10;
    /** Type: unsigned short */
    readonly INVALID_STATE_ERR: 11;
    /** Type: unsigned short */
    readonly SYNTAX_ERR: 12;
    /** Type: unsigned short */
    readonly INVALID_MODIFICATION_ERR: 13;
    /** Type: unsigned short */
    readonly NAMESPACE_ERR: 14;
    /** Type: unsigned short */
    readonly INVALID_ACCESS_ERR: 15;
    /** Type: unsigned short */
    readonly VALIDATION_ERR: 16;
    /** Type: unsigned short */
    readonly TYPE_MISMATCH_ERR: 17;
    /** Type: unsigned short */
    readonly SECURITY_ERR: 18;
    /** Type: unsigned short */
    readonly NETWORK_ERR: 19;
    /** Type: unsigned short */
    readonly ABORT_ERR: 20;
    /** Type: unsigned short */
    readonly URL_MISMATCH_ERR: 21;
    /** Type: unsigned short */
    readonly QUOTA_EXCEEDED_ERR: 22;
    /** Type: unsigned short */
    readonly TIMEOUT_ERR: 23;
    /** Type: unsigned short */
    readonly INVALID_NODE_TYPE_ERR: 24;
    /** Type: unsigned short */
    readonly DATA_CLONE_ERR: 25;
}

declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    /** Type: unsigned short */
    readonly INDEX_SIZE_ERR: 1;
    /** Type: unsigned short */
    readonly DOMSTRING_SIZE_ERR: 2;
    /** Type: unsigned short */
    readonly HIERARCHY_REQUEST_ERR: 3;
    /** Type: unsigned short */
    readonly WRONG_DOCUMENT_ERR: 4;
    /** Type: unsigned short */
    readonly INVALID_CHARACTER_ERR: 5;
    /** Type: unsigned short */
    readonly NO_DATA_ALLOWED_ERR: 6;
    /** Type: unsigned short */
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    /** Type: unsigned short */
    readonly NOT_FOUND_ERR: 8;
    /** Type: unsigned short */
    readonly NOT_SUPPORTED_ERR: 9;
    /** Type: unsigned short */
    readonly INUSE_ATTRIBUTE_ERR: 10;
    /** Type: unsigned short */
    readonly INVALID_STATE_ERR: 11;
    /** Type: unsigned short */
    readonly SYNTAX_ERR: 12;
    /** Type: unsigned short */
    readonly INVALID_MODIFICATION_ERR: 13;
    /** Type: unsigned short */
    readonly NAMESPACE_ERR: 14;
    /** Type: unsigned short */
    readonly INVALID_ACCESS_ERR: 15;
    /** Type: unsigned short */
    readonly VALIDATION_ERR: 16;
    /** Type: unsigned short */
    readonly TYPE_MISMATCH_ERR: 17;
    /** Type: unsigned short */
    readonly SECURITY_ERR: 18;
    /** Type: unsigned short */
    readonly NETWORK_ERR: 19;
    /** Type: unsigned short */
    readonly ABORT_ERR: 20;
    /** Type: unsigned short */
    readonly URL_MISMATCH_ERR: 21;
    /** Type: unsigned short */
    readonly QUOTA_EXCEEDED_ERR: 22;
    /** Type: unsigned short */
    readonly TIMEOUT_ERR: 23;
    /** Type: unsigned short */
    readonly INVALID_NODE_TYPE_ERR: 24;
    /** Type: unsigned short */
    readonly DATA_CLONE_ERR: 25;
};

/**
 * The **`DecompressionStream`** interface of the Compression Streams API is an API for decompressing a stream of data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DecompressionStream)
 */
interface DecompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<BufferSource>;
}

declare var DecompressionStream: {
    prototype: DecompressionStream;
    new(format: CompressionFormat): DecompressionStream;
};

/**
 * The **`ErrorEvent`** interface represents events providing information related to errors in scripts or in files.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent)
 */
interface ErrorEvent extends Event {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno)
     */
    readonly colno: number;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/error)
     */
    readonly error: any;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/filename)
     */
    readonly filename: string;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/lineno)
     */
    readonly lineno: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/message)
     */
    readonly message: string;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};

/**
 * The **`Event`** interface represents an event which takes place on an `EventTarget`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event)
 */
interface Event {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
     */
    readonly bubbles: boolean;
    /**
     * Type: boolean
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
     */
    cancelBubble: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
     */
    readonly cancelable: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)
     */
    readonly composed: boolean;
    /**
     * Type: EventTarget
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
     */
    readonly currentTarget: EventTarget | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)
     */
    readonly defaultPrevented: boolean;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)
     */
    readonly eventPhase: number;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
     */
    readonly isTrusted: boolean;
    /**
     * Type: boolean
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)
     */
    returnValue: boolean;
    /**
     * Type: EventTarget
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)
     */
    readonly srcElement: EventTarget | null;
    /**
     * Type: EventTarget
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)
     */
    readonly target: EventTarget | null;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
     */
    readonly timeStamp: DOMHighResTimeStamp;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)
     */
    readonly type: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
     */
    composedPath(): EventTarget[];
    /**
     * Type: undefined
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
     */
    preventDefault(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
     */
    stopImmediatePropagation(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)
     */
    stopPropagation(): void;
    /** Type: unsigned short */
    readonly NONE: 0;
    /** Type: unsigned short */
    readonly CAPTURING_PHASE: 1;
    /** Type: unsigned short */
    readonly AT_TARGET: 2;
    /** Type: unsigned short */
    readonly BUBBLING_PHASE: 3;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    /** Type: unsigned short */
    readonly NONE: 0;
    /** Type: unsigned short */
    readonly CAPTURING_PHASE: 1;
    /** Type: unsigned short */
    readonly AT_TARGET: 2;
    /** Type: unsigned short */
    readonly BUBBLING_PHASE: 3;
};

interface EventListener {
    (evt: Event): void;
}

interface EventListenerObject {
    handleEvent(object: Event): void;
}

/**
 * The **`EventTarget`** interface is implemented by objects that can receive events and may have listeners for them.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)
 */
interface EventTarget {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
     */
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

interface GenericTransformStream {
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/readable)
     */
    readonly readable: ReadableStream;
    /**
     * Type: WritableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/writable)
     */
    readonly writable: WritableStream;
}

/**
 * The **`MessageEvent`** interface represents a message received by a target object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent)
 */
interface MessageEvent<T = any> extends Event {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/data)
     */
    readonly data: T;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)
     */
    readonly origin: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * Type: MessageEventSource
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/source)
     */
    readonly source: MessageEventSource | null;
    /**
     * Type: undefined
     * @deprecated
     */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};

interface MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface MessageEventTarget<T> {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
     */
    onmessage: ((this: T, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
     */
    onmessageerror: ((this: T, ev: MessageEvent) => any) | null;
    addEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessagePortEventMap extends MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`MessagePort`** interface of the Channel Messaging API represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort)
 */
interface MessagePort extends EventTarget, MessageEventTarget<MessagePort> {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/start)
     */
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

/**
 * The **`PromiseRejectionEvent`** interface represents events which are sent to the global script context when JavaScript Promises are rejected.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent)
 */
interface PromiseRejectionEvent extends Event {
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/promise)
     */
    readonly promise: Promise<any>;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/reason)
     */
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

/**
 * The **`ReadableByteStreamController`** interface of the Streams API represents a controller for a readable byte stream.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController)
 */
interface ReadableByteStreamController {
    /**
     * Type: ReadableStreamBYOBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/byobRequest)
     */
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/enqueue)
     */
    enqueue(chunk: ArrayBufferView<ArrayBuffer>): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/error)
     */
    error(e?: any): void;
}

declare var ReadableByteStreamController: {
    prototype: ReadableByteStreamController;
    new(): ReadableByteStreamController;
};

/**
 * The `ReadableStream` interface of the Streams API represents a readable stream of byte data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream)
 */
interface ReadableStream<R = any> {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/locked)
     */
    readonly locked: boolean;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/cancel)
     */
    cancel(reason?: any): Promise<void>;
    /**
     * Type: ReadableStreamReader
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader)
     */
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeThrough)
     */
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeTo)
     */
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee)
     */
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number }): ReadableStream<Uint8Array<ArrayBuffer>>;
    new<R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};

/**
 * The `ReadableStreamBYOBReader` interface of the Streams API defines a reader for a ReadableStream that supports zero-copy reading from an underlying byte source.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)
 */
interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)
     */
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
     */
    releaseLock(): void;
}

declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array<ArrayBuffer>>): ReadableStreamBYOBReader;
};

/**
 * The **`ReadableStreamBYOBRequest`** interface of the Streams API represents a 'pull request' for data from an underlying source that will made as a zero-copy transfer to a consumer (bypassing the stream's internal queues).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest)
 */
interface ReadableStreamBYOBRequest {
    /**
     * Type: ArrayBufferView
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view)
     */
    readonly view: ArrayBufferView<ArrayBuffer> | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond)
     */
    respond(bytesWritten: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
     */
    respondWithNewView(view: ArrayBufferView<ArrayBuffer>): void;
}

declare var ReadableStreamBYOBRequest: {
    prototype: ReadableStreamBYOBRequest;
    new(): ReadableStreamBYOBRequest;
};

/**
 * The **`ReadableStreamDefaultController`** interface of the Streams API represents a controller allowing control of a ReadableStream's state and internal queue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController)
 */
interface ReadableStreamDefaultController<R = any> {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/enqueue)
     */
    enqueue(chunk?: R): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/error)
     */
    error(e?: any): void;
}

declare var ReadableStreamDefaultController: {
    prototype: ReadableStreamDefaultController;
    new(): ReadableStreamDefaultController;
};

/**
 * The **`ReadableStreamDefaultReader`** interface of the Streams API represents a default reader that can be used to read stream data supplied from a network (such as a fetch request).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader)
 */
interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/read)
     */
    read(): Promise<ReadableStreamReadResult<R>>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
     */
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};

interface ReadableStreamGenericReader {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/closed)
     */
    readonly closed: Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/cancel)
     */
    cancel(reason?: any): Promise<void>;
}

/**
 * The **`TextDecoder`** interface represents a decoder for a specific text encoding, such as `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK`, etc.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder)
 */
interface TextDecoder extends TextDecoderCommon {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/decode)
     */
    decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

interface TextDecoderCommon {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/encoding)
     */
    readonly encoding: string;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/fatal)
     */
    readonly fatal: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/ignoreBOM)
     */
    readonly ignoreBOM: boolean;
}

/**
 * The **`TextDecoderStream`** interface of the Encoding API converts a stream of text in a binary encoding, such as UTF-8 etc., to a stream of strings.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoderStream)
 */
interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
}

declare var TextDecoderStream: {
    prototype: TextDecoderStream;
    new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
};

/**
 * The **`TextEncoder`** interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder)
 */
interface TextEncoder extends TextEncoderCommon {
    /**
     * Type: Uint8Array
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encode)
     */
    encode(input?: string): Uint8Array<ArrayBuffer>;
    /**
     * Type: TextEncoderEncodeIntoResult
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
     */
    encodeInto(source: string, destination: Uint8Array<ArrayBufferLike>): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
    prototype: TextEncoder;
    new(): TextEncoder;
};

interface TextEncoderCommon {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encoding)
     */
    readonly encoding: string;
}

/**
 * The **`TextEncoderStream`** interface of the Encoding API converts a stream of strings into bytes in the UTF-8 encoding.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoderStream)
 */
interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<string>;
}

declare var TextEncoderStream: {
    prototype: TextEncoderStream;
    new(): TextEncoderStream;
};

/**
 * The **`TransformStream`** interface of the Streams API represents a concrete implementation of the pipe chain _transform stream_ concept.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream)
 */
interface TransformStream<I = any, O = any> {
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable)
     */
    readonly readable: ReadableStream<O>;
    /**
     * Type: WritableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable)
     */
    readonly writable: WritableStream<I>;
}

declare var TransformStream: {
    prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};

/**
 * The **`TransformStreamDefaultController`** interface of the Streams API provides methods to manipulate the associated ReadableStream and WritableStream.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController)
 */
interface TransformStreamDefaultController<O = any> {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue)
     */
    enqueue(chunk?: O): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error)
     */
    error(reason?: any): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/terminate)
     */
    terminate(): void;
}

declare var TransformStreamDefaultController: {
    prototype: TransformStreamDefaultController;
    new(): TransformStreamDefaultController;
};

/**
 * The **`URL`** interface is used to parse, construct, normalize, and encode URL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)
 */
interface URL {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash)
     */
    hash: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host)
     */
    host: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname)
     */
    hostname: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href)
     */
    href: string;
    toString(): string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin)
     */
    readonly origin: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password)
     */
    password: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname)
     */
    pathname: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port)
     */
    port: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol)
     */
    protocol: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search)
     */
    search: string;
    /**
     * Type: URLSearchParams
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams)
     */
    readonly searchParams: URLSearchParams;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username)
     */
    username: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON)
     */
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string | URL, base?: string | URL): URL;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/canParse_static)
     */
    canParse(url: string | URL, base?: string | URL): boolean;
    /**
     * Type: URL
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/parse_static)
     */
    parse(url: string | URL, base?: string | URL): URL | null;
};

/**
 * The **`URLSearchParams`** interface defines utility methods to work with the query string of a URL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
 */
interface URLSearchParams {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size)
     */
    readonly size: number;
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
     */
    delete(name: string, value?: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
     */
    has(name: string, value?: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
     */
    set(name: string, value: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort)
     */
    sort(): void;
    /** Returns a string containing a query string suitable for use in a URL. Does not include the question mark. */
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};

/**
 * The **`WorkletGlobalScope`** interface is an abstract class that specific worklet scope classes inherit from.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkletGlobalScope)
 */
interface WorkletGlobalScope {
}

declare var WorkletGlobalScope: {
    prototype: WorkletGlobalScope;
    new(): WorkletGlobalScope;
};

/**
 * The **`WritableStream`** interface of the Streams API provides a standard abstraction for writing streaming data to a destination, known as a sink.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream)
 */
interface WritableStream<W = any> {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked)
     */
    readonly locked: boolean;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close)
     */
    close(): Promise<void>;
    /**
     * Type: WritableStreamDefaultWriter
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/getWriter)
     */
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
    prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

/**
 * The **`WritableStreamDefaultController`** interface of the Streams API represents a controller allowing control of a WritableStream's state.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController)
 */
interface WritableStreamDefaultController {
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/error)
     */
    error(e?: any): void;
}

declare var WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    new(): WritableStreamDefaultController;
};

/**
 * The **`WritableStreamDefaultWriter`** interface of the Streams API is the object returned by WritableStream.getWriter() and once created locks the writer to the `WritableStream` ensuring that no other streams can write to the underlying sink.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter)
 */
interface WritableStreamDefaultWriter<W = any> {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed)
     */
    readonly closed: Promise<void>;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready)
     */
    readonly ready: Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close)
     */
    close(): Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock)
     */
    releaseLock(): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/write)
     */
    write(chunk?: W): Promise<void>;
}

declare var WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
};

declare namespace WebAssembly {
    interface CompileError extends Error {
    }

    var CompileError: {
        prototype: CompileError;
        new(message?: string): CompileError;
        (message?: string): CompileError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Global) */
    interface Global<T extends ValueType = ValueType> {
        /** Type: any */
        value: ValueTypeMap[T];
        /** Type: any */
        valueOf(): ValueTypeMap[T];
    }

    var Global: {
        prototype: Global;
        new<T extends ValueType = ValueType>(descriptor: GlobalDescriptor<T>, v?: ValueTypeMap[T]): Global<T>;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance) */
    interface Instance {
        /**
         * Type: object
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)
         */
        readonly exports: Exports;
    }

    var Instance: {
        prototype: Instance;
        new(module: Module, importObject?: Imports): Instance;
    };

    interface LinkError extends Error {
    }

    var LinkError: {
        prototype: LinkError;
        new(message?: string): LinkError;
        (message?: string): LinkError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory) */
    interface Memory {
        /**
         * Type: ArrayBuffer
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)
         */
        readonly buffer: ArrayBuffer;
        /**
         * Type: unsigned long
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
         */
        grow(delta: number): number;
    }

    var Memory: {
        prototype: Memory;
        new(descriptor: MemoryDescriptor): Memory;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module) */
    interface Module {
    }

    var Module: {
        prototype: Module;
        new(bytes: BufferSource): Module;
        /**
         * Type: [object Object]
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
         */
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        /**
         * Type: [object Object]
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
         */
        exports(moduleObject: Module): ModuleExportDescriptor[];
        /**
         * Type: [object Object]
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
         */
        imports(moduleObject: Module): ModuleImportDescriptor[];
    };

    interface RuntimeError extends Error {
    }

    var RuntimeError: {
        prototype: RuntimeError;
        new(message?: string): RuntimeError;
        (message?: string): RuntimeError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table) */
    interface Table {
        /**
         * Type: unsigned long
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/length)
         */
        readonly length: number;
        /**
         * Type: any
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
         */
        get(index: number): any;
        /**
         * Type: unsigned long
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
         */
        grow(delta: number, value?: any): number;
        /**
         * Type: undefined
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
         */
        set(index: number, value?: any): void;
    }

    var Table: {
        prototype: Table;
        new(descriptor: TableDescriptor, value?: any): Table;
    };

    interface GlobalDescriptor<T extends ValueType = ValueType> {
        /** Type: boolean */
        mutable?: boolean;
        /** Type: ValueType */
        value: T;
    }

    interface MemoryDescriptor {
        /** Type: unsigned long */
        initial: number;
        /** Type: unsigned long */
        maximum?: number;
        shared?: boolean;
    }

    interface ModuleExportDescriptor {
        /** Type: ImportExportKind */
        kind: ImportExportKind;
        /** Type: USVString */
        name: string;
    }

    interface ModuleImportDescriptor {
        /** Type: ImportExportKind */
        kind: ImportExportKind;
        /** Type: USVString */
        module: string;
        /** Type: USVString */
        name: string;
    }

    interface TableDescriptor {
        /** Type: TableKind */
        element: TableKind;
        /** Type: unsigned long */
        initial: number;
        /** Type: unsigned long */
        maximum?: number;
    }

    interface ValueTypeMap {
        anyfunc: Function;
        externref: any;
        f32: number;
        f64: number;
        i32: number;
        i64: bigint;
        v128: never;
    }

    interface WebAssemblyInstantiatedSource {
        /** Type: Instance */
        instance: Instance;
        /** Type: Module */
        module: Module;
    }

    type ImportExportKind = "function" | "global" | "memory" | "table";
    type TableKind = "anyfunc" | "externref";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    type ValueType = keyof ValueTypeMap;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
     */
    function compile(bytes: BufferSource): Promise<Module>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
     */
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
     */
    function validate(bytes: BufferSource): boolean;
}

/** The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox). */
/**
 * The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console)
 */
interface Console {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/assert_static)
     */
    assert(condition?: boolean, ...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static)
     */
    clear(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static)
     */
    count(label?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static)
     */
    countReset(label?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static)
     */
    debug(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static)
     */
    dir(item?: any, options?: any): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static)
     */
    dirxml(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)
     */
    error(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static)
     */
    group(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static)
     */
    groupCollapsed(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static)
     */
    groupEnd(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)
     */
    info(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)
     */
    log(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static)
     */
    table(tabularData?: any, properties?: string[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static)
     */
    time(label?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static)
     */
    timeEnd(label?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static)
     */
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static)
     */
    trace(...data: any[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static)
     */
    warn(...data: any[]): void;
}

declare var console: Console;

interface AudioWorkletProcessorConstructor {
    new (options: any): AudioWorkletProcessorImpl;
}

interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}

interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}

interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}

interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}

interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}

interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}

/**
 * Type: unsigned long long
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentFrame)
 */
declare var currentFrame: number;
/**
 * Type: double
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentTime)
 */
declare var currentTime: number;
/**
 * Type: float
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/sampleRate)
 */
declare var sampleRate: number;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
 */
declare function registerProcessor(name: string, processorCtor: AudioWorkletProcessorConstructor): void;
type AllowSharedBufferSource = ArrayBufferLike | ArrayBufferView<ArrayBufferLike>;
type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
type DOMHighResTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type MessageEventSource = MessagePort;
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type Transferable = MessagePort | ReadableStream | WritableStream | TransformStream | ArrayBuffer;
type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
