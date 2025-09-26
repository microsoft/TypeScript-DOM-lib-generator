/////////////////////////////
/// AudioWorklet APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}

interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
}

interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface ExceptionOptions {
    traceStack?: boolean;
}

interface MessageEventInit<T = any> extends EventInit {
    data?: T;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
}

interface QueuingStrategyInit {
    /**
     * Creates a new ByteLengthQueuingStrategy with the provided high water mark.
     *
     * Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.
     */
    highWaterMark: number;
}

interface ReadableStreamGetReaderOptions {
    /**
     * Creates a ReadableStreamBYOBReader and locks the stream to the new reader.
     *
     * This call behaves the same way as the no-argument variant, except that it only works on readable byte streams, i.e. streams which were constructed specifically with the ability to handle "bring your own buffer" reading. The returned BYOB reader provides the ability to directly read individual chunks from the stream via its read() method, into developer-supplied buffers, allowing more precise control over allocation.
     */
    mode?: ReadableStreamReaderMode;
}

interface ReadableStreamIteratorOptions {
    /**
     * Asynchronously iterates over the chunks in the stream's internal queue.
     *
     * Asynchronously iterating over the stream will lock it, preventing any other consumer from acquiring a reader. The lock will be released if the async iterator's return() method is called, e.g. by breaking out of the loop.
     *
     * By default, calling the async iterator's return() method will also cancel the stream. To prevent this, use the stream's values() method, passing true for the preventCancel option.
     */
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
    readable: ReadableStream<R>;
    /**
     * Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.
     *
     * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
     */
    writable: WritableStream<W>;
}

interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    /**
     * Pipes this readable stream to a given writable stream destination. The way in which the piping process behaves under various error conditions can be customized with a number of passed options. It returns a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
     *
     * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
     *
     * Errors and closures of the source and destination streams propagate as follows:
     *
     * An error in this source readable stream will abort destination, unless preventAbort is truthy. The returned promise will be rejected with the source's error, or with any error that occurs during aborting the destination.
     *
     * An error in destination will cancel this source readable stream, unless preventCancel is truthy. The returned promise will be rejected with the destination's error, or with any error that occurs during canceling the source.
     *
     * When this source readable stream closes, destination will be closed, unless preventClose is truthy. The returned promise will be fulfilled once this process completes, unless an error is encountered while closing the destination, in which case it will be rejected with that error.
     *
     * If destination starts out closed or closing, this source readable stream will be canceled, unless preventCancel is true. The returned promise will be rejected with an error indicating piping to a closed stream failed, or with any error that occurs during canceling the source.
     *
     * The signal option can be set to an AbortSignal to allow aborting an ongoing pipe operation via the corresponding AbortController. In this case, this source readable stream will be canceled, and destination aborted, unless the respective options preventCancel or preventAbort are set.
     */
    preventClose?: boolean;
    signal?: AbortSignal;
}

interface StructuredSerializeOptions {
    transfer?: Transferable[];
}

interface TextDecodeOptions {
    stream?: boolean;
}

interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}

interface TextEncoderEncodeIntoResult {
    read: number;
    written: number;
}

interface Transformer<I = any, O = any> {
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
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
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: ReadableStreamType;
}

interface WebAssemblyCompileOptions {
    builtins?: string[];
    importedStringConstants?: string | null;
}

/**
 * The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController)
 */
interface AbortController {
    /**
     * The **`signal`** read-only property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort an asynchronous operation as desired.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * The **`abort()`** method of the AbortController interface aborts an asynchronous operation before it has completed.
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
     * The **`aborted`** read-only property returns a value that indicates whether the asynchronous operations the signal is communicating with are aborted (`true`) or not (`false`).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)
     */
    readonly aborted: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event) */
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    /**
     * The **`reason`** read-only property returns a JavaScript value that indicates the abort reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/reason)
     */
    readonly reason: any;
    /**
     * The **`throwIfAborted()`** method throws the signal's abort AbortSignal.reason if the signal has been aborted; otherwise it does nothing.
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
     * The **`AbortSignal.abort()`** static method returns an AbortSignal that is already set as aborted (and which does not trigger an AbortSignal/abort_event event).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static)
     */
    abort(reason?: any): AbortSignal;
    /**
     * The **`AbortSignal.any()`** static method takes an iterable of abort signals and returns an AbortSignal.
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
     * The read-only **`currentFrame`** property of the AudioWorkletGlobalScope interface returns an integer that represents the ever-increasing current sample-frame of the audio block being processed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentFrame)
     */
    readonly currentFrame: number;
    /**
     * The read-only **`currentTime`** property of the AudioWorkletGlobalScope interface returns a double that represents the ever-increasing context time of the audio block being processed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentTime)
     */
    readonly currentTime: number;
    /**
     * The read-only **`sampleRate`** property of the AudioWorkletGlobalScope interface returns a float that represents the sample rate of the associated BaseAudioContext the worklet belongs to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/sampleRate)
     */
    readonly sampleRate: number;
    /**
     * The **`registerProcessor`** method of the AudioWorkletGlobalScope interface registers a class constructor derived from AudioWorkletProcessor interface under a specified _name_.
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
     * The read-only **`port`** property of the AudioWorkletProcessor interface returns the associated MessagePort.
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
     * The read-only **`ByteLengthQueuingStrategy.highWaterMark`** property returns the total number of bytes that can be contained in the internal queue before backpressure is applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/size) */
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
    readonly readable: ReadableStream<Uint8Array>;
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
     * The read-only **`CountQueuingStrategy.highWaterMark`** property returns the total number of chunks that can be contained in the internal queue before backpressure is applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/size) */
    readonly size: QueuingStrategySize;
}

declare var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new(init: QueuingStrategyInit): CountQueuingStrategy;
};

/**
 * The **`CustomEvent`** interface can be used to attach custom data to an event generated by an application.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent)
 */
interface CustomEvent<T = any> extends Event {
    /**
     * The read-only **`detail`** property of the CustomEvent interface returns any data passed when initializing the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
     */
    readonly detail: T;
    /**
     * The **`CustomEvent.initCustomEvent()`** method initializes a CustomEvent object.
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
     * The **`code`** read-only property of the DOMException interface returns one of the legacy error code constants, or `0` if none match.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
     */
    readonly code: number;
    /**
     * The **`message`** read-only property of the DOMException interface returns a string representing a message or description associated with the given error name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message)
     */
    readonly message: string;
    /**
     * The **`name`** read-only property of the DOMException interface returns a string that contains one of the strings associated with an error name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name)
     */
    readonly name: string;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}

declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
};

/**
 * The **`DecompressionStream`** interface of the Compression Streams API is an API for decompressing a stream of data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DecompressionStream)
 */
interface DecompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array>;
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
     * The **`colno`** read-only property of the ErrorEvent interface returns an integer containing the column number of the script file on which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno)
     */
    readonly colno: number;
    /**
     * The **`error`** read-only property of the ErrorEvent interface returns a JavaScript value, such as an Error or DOMException, representing the error associated with this event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/error)
     */
    readonly error: any;
    /**
     * The **`filename`** read-only property of the ErrorEvent interface returns a string containing the name of the script file in which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/filename)
     */
    readonly filename: string;
    /**
     * The **`lineno`** read-only property of the ErrorEvent interface returns an integer containing the line number of the script file on which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/lineno)
     */
    readonly lineno: number;
    /**
     * The **`message`** read-only property of the ErrorEvent interface returns a string containing a human-readable error message describing the problem.
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
     * The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
     */
    readonly bubbles: boolean;
    /**
     * The **`cancelBubble`** property of the Event interface is deprecated.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
     */
    cancelBubble: boolean;
    /**
     * The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
     */
    readonly cancelable: boolean;
    /**
     * The read-only **`composed`** property of the Event interface returns a boolean value which indicates whether or not the event will propagate across the shadow DOM boundary into the standard DOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)
     */
    readonly composed: boolean;
    /**
     * The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
     */
    readonly currentTarget: EventTarget | null;
    /**
     * The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)
     */
    readonly defaultPrevented: boolean;
    /**
     * The **`eventPhase`** read-only property of the Event interface indicates which phase of the event flow is currently being evaluated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)
     */
    readonly eventPhase: number;
    /**
     * The **`isTrusted`** read-only property of the Event interface is a boolean value that is `true` when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via EventTarget.dispatchEvent().
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
     */
    readonly isTrusted: boolean;
    /**
     * The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)
     */
    returnValue: boolean;
    /**
     * The deprecated **`Event.srcElement`** is an alias for the Event.target property.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)
     */
    readonly srcElement: EventTarget | null;
    /**
     * The read-only **`target`** property of the Event interface is a reference to the object onto which the event was dispatched.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)
     */
    readonly target: EventTarget | null;
    /**
     * The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
     */
    readonly timeStamp: DOMHighResTimeStamp;
    /**
     * The **`type`** read-only property of the Event interface returns a string containing the event's type.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)
     */
    readonly type: string;
    /**
     * The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
     */
    composedPath(): EventTarget[];
    /**
     * The **`Event.initEvent()`** method is used to initialize the value of an event created using Document.createEvent().
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * The **`preventDefault()`** method of the Event interface tells the user agent that the event is being explicitly handled, so its default action, such as page scrolling, link navigation, or pasting text, should not be taken.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
     */
    preventDefault(): void;
    /**
     * The **`stopImmediatePropagation()`** method of the Event interface prevents other listeners of the same event from being called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
     */
    stopImmediatePropagation(): void;
    /**
     * The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)
     */
    stopPropagation(): void;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
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
     * The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
     */
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    /**
     * The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
     */
    dispatchEvent(event: Event): boolean;
    /**
     * The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.
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
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/writable) */
    readonly writable: WritableStream;
}

/**
 * The **`MessageEvent`** interface represents a message received by a target object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent)
 */
interface MessageEvent<T = any> extends Event {
    /**
     * The **`data`** read-only property of the MessageEvent interface represents the data sent by the message emitter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/data)
     */
    readonly data: T;
    /**
     * The **`lastEventId`** read-only property of the MessageEvent interface is a string representing a unique ID for the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * The **`origin`** read-only property of the MessageEvent interface is a string representing the origin of the message emitter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)
     */
    readonly origin: string;
    /**
     * The **`ports`** read-only property of the MessageEvent interface is an array of MessagePort objects containing all MessagePort objects sent with the message, in order.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * The **`source`** read-only property of the MessageEvent interface is a `MessageEventSource` (which can be a WindowProxy, MessagePort, or ServiceWorker object) representing the message emitter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/source)
     */
    readonly source: MessageEventSource | null;
    /** @deprecated */
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
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
    onmessage: ((this: T, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
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
     * The **`close()`** method of the MessagePort interface disconnects the port, so it is no longer active.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/close)
     */
    close(): void;
    /**
     * The **`postMessage()`** method of the MessagePort interface sends a message from the port, and optionally, transfers ownership of objects to other browsing contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * The **`start()`** method of the MessagePort interface starts the sending of messages queued on the port.
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
     * The PromiseRejectionEvent interface's **`promise`** read-only property indicates the JavaScript Promise which was rejected.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/promise)
     */
    readonly promise: Promise<any>;
    /**
     * The PromiseRejectionEvent **`reason`** read-only property is any JavaScript value or Object which provides the reason passed into Promise.reject().
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
     * The **`byobRequest`** read-only property of the ReadableByteStreamController interface returns the current BYOB request, or `null` if there are no pending requests.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/byobRequest)
     */
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    /**
     * The **`desiredSize`** read-only property of the ReadableByteStreamController interface returns the number of bytes required to fill the stream's internal queue to its 'desired size'.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`close()`** method of the ReadableByteStreamController interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/close)
     */
    close(): void;
    /**
     * The **`enqueue()`** method of the ReadableByteStreamController interface enqueues a given chunk on the associated readable byte stream (the chunk is transferred into the stream's internal queues).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/enqueue)
     */
    enqueue(chunk: ArrayBufferView): void;
    /**
     * The **`error()`** method of the ReadableByteStreamController interface causes any future interactions with the associated stream to error with the specified reason.
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
     * The **`locked`** read-only property of the ReadableStream interface returns whether or not the readable stream is locked to a reader.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/locked)
     */
    readonly locked: boolean;
    /**
     * The **`cancel()`** method of the ReadableStream interface returns a Promise that resolves when the stream is canceled.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/cancel)
     */
    cancel(reason?: any): Promise<void>;
    /**
     * The **`getReader()`** method of the ReadableStream interface creates a reader and locks the stream to it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader)
     */
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    /**
     * The **`pipeThrough()`** method of the ReadableStream interface provides a chainable way of piping the current stream through a transform stream or any other writable/readable pair.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeThrough)
     */
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    /**
     * The **`pipeTo()`** method of the ReadableStream interface pipes the current `ReadableStream` to a given WritableStream and returns a Promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeTo)
     */
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    /**
     * The **`tee()`** method of the ReadableStream interface tees the current readable stream, returning a two-element array containing the two resulting branches as new ReadableStream instances.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee)
     */
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number }): ReadableStream<Uint8Array>;
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
     * The **`read()`** method of the ReadableStreamBYOBReader interface is used to read data into a view on a user-supplied buffer from an associated readable byte stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)
     */
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    /**
     * The **`releaseLock()`** method of the ReadableStreamBYOBReader interface releases the reader's lock on the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
     */
    releaseLock(): void;
}

declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array>): ReadableStreamBYOBReader;
};

/**
 * The **`ReadableStreamBYOBRequest`** interface of the Streams API represents a 'pull request' for data from an underlying source that will made as a zero-copy transfer to a consumer (bypassing the stream's internal queues).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest)
 */
interface ReadableStreamBYOBRequest {
    /**
     * The **`view`** getter property of the ReadableStreamBYOBRequest interface returns the current view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view)
     */
    readonly view: ArrayBufferView | null;
    /**
     * The **`respond()`** method of the ReadableStreamBYOBRequest interface is used to signal to the associated readable byte stream that the specified number of bytes were written into the ReadableStreamBYOBRequest.view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond)
     */
    respond(bytesWritten: number): void;
    /**
     * The **`respondWithNewView()`** method of the ReadableStreamBYOBRequest interface specifies a new view that the consumer of the associated readable byte stream should write to instead of ReadableStreamBYOBRequest.view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
     */
    respondWithNewView(view: ArrayBufferView): void;
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
     * The **`desiredSize`** read-only property of the ReadableStreamDefaultController interface returns the desired size required to fill the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`close()`** method of the ReadableStreamDefaultController interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/close)
     */
    close(): void;
    /**
     * The **`enqueue()`** method of the ReadableStreamDefaultController interface enqueues a given chunk in the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/enqueue)
     */
    enqueue(chunk?: R): void;
    /**
     * The **`error()`** method of the ReadableStreamDefaultController interface causes any future interactions with the associated stream to error.
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
     * The **`read()`** method of the ReadableStreamDefaultReader interface returns a Promise providing access to the next chunk in the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/read)
     */
    read(): Promise<ReadableStreamReadResult<R>>;
    /**
     * The **`releaseLock()`** method of the ReadableStreamDefaultReader interface releases the reader's lock on the stream.
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
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/closed) */
    readonly closed: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/cancel) */
    cancel(reason?: any): Promise<void>;
}

/**
 * The **`TextDecoder`** interface represents a decoder for a specific text encoding, such as `UTF-8`, `ISO-8859-2`, or `GBK`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder)
 */
interface TextDecoder extends TextDecoderCommon {
    /**
     * The **`TextDecoder.decode()`** method returns a string containing text decoded from the buffer passed as a parameter.
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
     * Returns encoding's name, lowercased.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/encoding)
     */
    readonly encoding: string;
    /**
     * Returns true if error mode is "fatal", otherwise false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/fatal)
     */
    readonly fatal: boolean;
    /**
     * Returns the value of ignore BOM.
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
 * The **`TextEncoder`** interface enables you to character encoding a JavaScript string using UTF-8.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder)
 */
interface TextEncoder extends TextEncoderCommon {
    /**
     * The **`TextEncoder.encode()`** method takes a string as input, and returns a Global_Objects/Uint8Array containing the string character encoding using UTF-8.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encode)
     */
    encode(input?: string): Uint8Array;
    /**
     * The **`TextEncoder.encodeInto()`** method takes a string to encode and a destination Uint8Array to put resulting UTF-8 encoded text into, and returns an object indicating the progress of the encoding.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
     */
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
    prototype: TextEncoder;
    new(): TextEncoder;
};

interface TextEncoderCommon {
    /**
     * Returns "utf-8".
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
    readonly readable: ReadableStream<Uint8Array>;
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
     * The **`readable`** read-only property of the TransformStream interface returns the ReadableStream instance controlled by this `TransformStream`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable)
     */
    readonly readable: ReadableStream<O>;
    /**
     * The **`writable`** read-only property of the TransformStream interface returns the WritableStream instance controlled by this `TransformStream`.
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
     * The **`desiredSize`** read-only property of the TransformStreamDefaultController interface returns the desired size to fill the queue of the associated ReadableStream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`enqueue()`** method of the TransformStreamDefaultController interface enqueues the given chunk in the readable side of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue)
     */
    enqueue(chunk?: O): void;
    /**
     * The **`error()`** method of the TransformStreamDefaultController interface errors both sides of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error)
     */
    error(reason?: any): void;
    /**
     * The **`terminate()`** method of the TransformStreamDefaultController interface closes the readable side and errors the writable side of the stream.
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
     * The **`hash`** property of the URL interface is a string containing a `'#'` followed by the fragment identifier of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash)
     */
    hash: string;
    /**
     * The **`host`** property of the URL interface is a string containing the host, which is the URL.hostname, and then, if the port of the URL is nonempty, a `':'`, followed by the URL.port of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host)
     */
    host: string;
    /**
     * The **`hostname`** property of the URL interface is a string containing either the domain name or IP address of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname)
     */
    hostname: string;
    /**
     * The **`href`** property of the URL interface is a string containing the whole URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href)
     */
    href: string;
    toString(): string;
    /**
     * The **`origin`** read-only property of the URL interface returns a string containing the Unicode serialization of the origin of the represented URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin)
     */
    readonly origin: string;
    /**
     * The **`password`** property of the URL interface is a string containing the password component of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password)
     */
    password: string;
    /**
     * The **`pathname`** property of the URL interface represents a location in a hierarchical structure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname)
     */
    pathname: string;
    /**
     * The **`port`** property of the URL interface is a string containing the port number of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port)
     */
    port: string;
    /**
     * The **`protocol`** property of the URL interface is a string containing the protocol or scheme of the URL, including the final `':'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol)
     */
    protocol: string;
    /**
     * The **`search`** property of the URL interface is a search string, also called a _query string_, that is a string containing a `'?'` followed by the parameters of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search)
     */
    search: string;
    /**
     * The **`searchParams`** read-only property of the URL interface returns a URLSearchParams object allowing access to the GET decoded query arguments contained in the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams)
     */
    readonly searchParams: URLSearchParams;
    /**
     * The **`username`** property of the URL interface is a string containing the username component of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username)
     */
    username: string;
    /**
     * The **`toJSON()`** method of the URL interface returns a string containing a serialized version of the URL, although in practice it seems to have the same effect as URL.toString().
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON)
     */
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string | URL, base?: string | URL): URL;
    /**
     * The **`URL.canParse()`** static method of the URL interface returns a boolean indicating whether or not an absolute URL, or a relative URL combined with a base URL, are parsable and valid.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/canParse_static)
     */
    canParse(url: string | URL, base?: string | URL): boolean;
    /**
     * The **`URL.parse()`** static method of the URL interface returns a newly created URL object representing the URL defined by the parameters.
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
     * The **`size`** read-only property of the URLSearchParams interface indicates the total number of search parameter entries.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size)
     */
    readonly size: number;
    /**
     * The **`append()`** method of the URLSearchParams interface appends a specified key/value pair as a new search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
     */
    append(name: string, value: string): void;
    /**
     * The **`delete()`** method of the URLSearchParams interface deletes specified parameters and their associated value(s) from the list of all search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
     */
    delete(name: string, value?: string): void;
    /**
     * The **`get()`** method of the URLSearchParams interface returns the first value associated to the given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
     */
    get(name: string): string | null;
    /**
     * The **`getAll()`** method of the URLSearchParams interface returns all the values associated with a given search parameter as an array.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
     */
    getAll(name: string): string[];
    /**
     * The **`has()`** method of the URLSearchParams interface returns a boolean value that indicates whether the specified parameter is in the search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
     */
    has(name: string, value?: string): boolean;
    /**
     * The **`set()`** method of the URLSearchParams interface sets the value associated with a given search parameter to the given value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
     */
    set(name: string, value: string): void;
    /**
     * The **`URLSearchParams.sort()`** method sorts all key/value pairs contained in this object in place and returns `undefined`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort)
     */
    sort(): void;
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
     * The **`locked`** read-only property of the WritableStream interface returns a boolean indicating whether the `WritableStream` is locked to a writer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked)
     */
    readonly locked: boolean;
    /**
     * The **`abort()`** method of the WritableStream interface aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * The **`close()`** method of the WritableStream interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close)
     */
    close(): Promise<void>;
    /**
     * The **`getWriter()`** method of the WritableStream interface returns a new instance of WritableStreamDefaultWriter and locks the stream to that instance.
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
     * The read-only **`signal`** property of the WritableStreamDefaultController interface returns the AbortSignal associated with the controller.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * The **`error()`** method of the WritableStreamDefaultController interface causes any future interactions with the associated stream to error.
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
     * The **`closed`** read-only property of the WritableStreamDefaultWriter interface returns a Promise that fulfills if the stream becomes closed, or rejects if the stream errors or the writer's lock is released.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed)
     */
    readonly closed: Promise<void>;
    /**
     * The **`desiredSize`** read-only property of the WritableStreamDefaultWriter interface returns the desired size required to fill the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`ready`** read-only property of the WritableStreamDefaultWriter interface returns a Promise that resolves when the desired size of the stream's internal queue transitions from non-positive to positive, signaling that it is no longer applying backpressure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready)
     */
    readonly ready: Promise<void>;
    /**
     * The **`abort()`** method of the WritableStreamDefaultWriter interface aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * The **`close()`** method of the WritableStreamDefaultWriter interface closes the associated writable stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close)
     */
    close(): Promise<void>;
    /**
     * The **`releaseLock()`** method of the WritableStreamDefaultWriter interface releases the writer's lock on the corresponding stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock)
     */
    releaseLock(): void;
    /**
     * The **`write()`** method of the WritableStreamDefaultWriter interface writes a passed chunk of data to a WritableStream and its underlying sink, then returns a Promise that resolves to indicate the success or failure of the write operation.
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

    /**
     * The **`WebAssembly.Exception`** object represents a runtime exception thrown from WebAssembly to JavaScript, or thrown from JavaScript to a WebAssembly exception handler.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception)
     */
    interface Exception {
        /**
         * The read-only **`stack`** property of an object instance of type `WebAssembly.Exception` _may_ contain a stack trace.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)
         */
        readonly stack: string | undefined;
        /**
         * The **`getArg()`** prototype method of the `Exception` object can be used to get the value of a specified item in the exception's data arguments.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
         */
        getArg(index: number): any;
        /**
         * The **`is()`** prototype method of the `Exception` object can be used to test if the `Exception` matches a given tag.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
         */
        is(exceptionTag: Tag): boolean;
    }

    var Exception: {
        prototype: Exception;
        new(exceptionTag: Tag, payload: any[], options?: ExceptionOptions): Exception;
    };

    /**
     * A **`WebAssembly.Global`** object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more `WebAssembly.Module` instances.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Global)
     */
    interface Global<T extends ValueType = ValueType> {
        value: ValueTypeMap[T];
        valueOf(): ValueTypeMap[T];
    }

    var Global: {
        prototype: Global;
        new<T extends ValueType = ValueType>(descriptor: GlobalDescriptor<T>, v?: ValueTypeMap[T]): Global<T>;
    };

    /**
     * A **`WebAssembly.Instance`** object is a stateful, executable instance of a `WebAssembly.Module`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance)
     */
    interface Instance {
        /**
         * The **`exports`** read-only property of the `WebAssembly.Instance` object prototype returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript.
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

    /**
     * The **`WebAssembly.Memory`** object is a resizable ArrayBuffer or SharedArrayBuffer that holds raw bytes of memory accessed by a `WebAssembly.Instance`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory)
     */
    interface Memory {
        /**
         * The read-only **`buffer`** prototype property of the `WebAssembly.Memory` object returns the buffer contained in the memory.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)
         */
        readonly buffer: ArrayBuffer;
        /**
         * The **`grow()`** prototype method of the `WebAssembly.Memory` object increases the size of the memory instance by a specified number of WebAssembly pages.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
         */
        grow(delta: AddressValue): AddressValue;
    }

    var Memory: {
        prototype: Memory;
        new(descriptor: MemoryDescriptor): Memory;
    };

    /**
     * A **`WebAssembly.Module`** object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently shared with Workers, and instantiated multiple times.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module)
     */
    interface Module {
    }

    var Module: {
        prototype: Module;
        new(bytes: BufferSource, options?: WebAssemblyCompileOptions): Module;
        /**
         * The **`WebAssembly.Module.customSections()`** static method returns a copy of the contents of all custom sections in the given module with the given string name.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
         */
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        /**
         * The **`WebAssembly.Module.exports()`** static method returns an array containing descriptions of all the declared exports of the given `Module`.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
         */
        exports(moduleObject: Module): ModuleExportDescriptor[];
        /**
         * The **`WebAssembly.Module.imports()`** static method returns an array containing descriptions of all the declared imports of the given `Module`.
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

    /**
     * The **`WebAssembly.Table`** object is a JavaScript wrapper object — an array-like structure representing a WebAssembly table, which stores homogeneous references.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table)
     */
    interface Table {
        /**
         * The read-only **`length`** prototype property of the `WebAssembly.Table` object returns the length of the table, i.e., the number of elements in the table.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/length)
         */
        readonly length: AddressValue;
        /**
         * The **`get()`** prototype method of the `WebAssembly.Table()` object retrieves the element stored at a given index.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
         */
        get(index: AddressValue): any;
        /**
         * The **`grow()`** prototype method of the `WebAssembly.Table` object increases the size of the `Table` instance by a specified number of elements, filled with the provided value.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
         */
        grow(delta: AddressValue, value?: any): AddressValue;
        /**
         * The **`set()`** prototype method of the `WebAssembly.Table` object mutates a reference stored at a given index to a different value.
         *
         * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
         */
        set(index: AddressValue, value?: any): void;
    }

    var Table: {
        prototype: Table;
        new(descriptor: TableDescriptor, value?: any): Table;
    };

    /**
     * The **`WebAssembly.Tag`** object defines a _type_ of a WebAssembly exception that can be thrown to/from WebAssembly code.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Tag)
     */
    interface Tag {
    }

    var Tag: {
        prototype: Tag;
        new(type: TagType): Tag;
    };

    interface TagType {
    }

    var TagType: {
        prototype: TagType;
        new(): TagType;
    };

    interface GlobalDescriptor<T extends ValueType = ValueType> {
        mutable?: boolean;
        value: T;
    }

    interface MemoryDescriptor {
        address?: AddressType;
        initial: AddressValue;
        maximum?: AddressValue;
        shared?: boolean;
    }

    interface ModuleExportDescriptor {
        kind: ImportExportKind;
        name: string;
    }

    interface ModuleImportDescriptor {
        kind: ImportExportKind;
        module: string;
        name: string;
    }

    interface TableDescriptor {
        address?: AddressType;
        element: TableKind;
        initial: AddressValue;
        maximum?: AddressValue;
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
        instance: Instance;
        module: Module;
    }

    type ImportExportKind = "function" | "global" | "memory" | "table" | "tag";
    type TableKind = "anyfunc" | "externref";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    type ValueType = keyof ValueTypeMap;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compile_static) */
    function compile(bytes: BufferSource, options?: WebAssemblyCompileOptions): Promise<Module>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) */
    function instantiate(bytes: BufferSource, importObject?: Imports, options?: WebAssemblyCompileOptions): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/validate_static) */
    function validate(bytes: BufferSource, options?: WebAssemblyCompileOptions): boolean;
}

/** The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox). */
/**
 * The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console)
 */
interface Console {
    /**
     * The **`console.assert()`** static method writes an error message to the console if the assertion is false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/assert_static)
     */
    assert(condition?: boolean, ...data: any[]): void;
    /**
     * The **`console.clear()`** static method clears the console if possible.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static)
     */
    clear(): void;
    /**
     * The **`console.count()`** static method logs the number of times that this particular call to `count()` has been called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static)
     */
    count(label?: string): void;
    /**
     * The **`console.countReset()`** static method resets counter used with console/count_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static)
     */
    countReset(label?: string): void;
    /**
     * The **`console.debug()`** static method outputs a message to the console at the 'debug' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static)
     */
    debug(...data: any[]): void;
    /**
     * The **`console.dir()`** static method displays a list of the properties of the specified JavaScript object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static)
     */
    dir(item?: any, options?: any): void;
    /**
     * The **`console.dirxml()`** static method displays an interactive tree of the descendant elements of the specified XML/HTML element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static)
     */
    dirxml(...data: any[]): void;
    /**
     * The **`console.error()`** static method outputs a message to the console at the 'error' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)
     */
    error(...data: any[]): void;
    /**
     * The **`console.group()`** static method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console/groupEnd_static is called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static)
     */
    group(...data: any[]): void;
    /**
     * The **`console.groupCollapsed()`** static method creates a new inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static)
     */
    groupCollapsed(...data: any[]): void;
    /**
     * The **`console.groupEnd()`** static method exits the current inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static)
     */
    groupEnd(): void;
    /**
     * The **`console.info()`** static method outputs a message to the console at the 'info' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)
     */
    info(...data: any[]): void;
    /**
     * The **`console.log()`** static method outputs a message to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)
     */
    log(...data: any[]): void;
    /**
     * The **`console.table()`** static method displays tabular data as a table.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static)
     */
    table(tabularData?: any, properties?: string[]): void;
    /**
     * The **`console.time()`** static method starts a timer you can use to track how long an operation takes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static)
     */
    time(label?: string): void;
    /**
     * The **`console.timeEnd()`** static method stops a timer that was previously started by calling console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static)
     */
    timeEnd(label?: string): void;
    /**
     * The **`console.timeLog()`** static method logs the current value of a timer that was previously started by calling console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static)
     */
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    /**
     * The **`console.trace()`** static method outputs a stack trace to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static)
     */
    trace(...data: any[]): void;
    /**
     * The **`console.warn()`** static method outputs a warning message to the console at the 'warning' log level.
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
 * The read-only **`currentFrame`** property of the AudioWorkletGlobalScope interface returns an integer that represents the ever-increasing current sample-frame of the audio block being processed.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentFrame)
 */
declare var currentFrame: number;
/**
 * The read-only **`currentTime`** property of the AudioWorkletGlobalScope interface returns a double that represents the ever-increasing context time of the audio block being processed.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/currentTime)
 */
declare var currentTime: number;
/**
 * The read-only **`sampleRate`** property of the AudioWorkletGlobalScope interface returns a float that represents the sample rate of the associated BaseAudioContext the worklet belongs to.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/sampleRate)
 */
declare var sampleRate: number;
/**
 * The **`registerProcessor`** method of the AudioWorkletGlobalScope interface registers a class constructor derived from AudioWorkletProcessor interface under a specified _name_.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
 */
declare function registerProcessor(name: string, processorCtor: AudioWorkletProcessorConstructor): void;
type AddressValue = any;
type AllowSharedBufferSource = ArrayBufferLike | ArrayBufferView;
type BufferSource = ArrayBufferView | ArrayBuffer;
type DOMHighResTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type MessageEventSource = MessagePort;
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type Transferable = MessagePort | ReadableStream | WritableStream | TransformStream | ArrayBuffer;
type AddressType = "i32" | "i64";
type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
