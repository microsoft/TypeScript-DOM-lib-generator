
/////////////////////////////
/// Worker APIs
/////////////////////////////

interface Algorithm {
    name: string;
}

interface CacheQueryOptions {
    cacheName?: string;
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

interface EventInit {
    scoped?: boolean;
    bubbles?: boolean;
    cancelable?: boolean;
}

interface GetNotificationOptions {
    tag?: string;
}

interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[];
}

interface KeyAlgorithm {
    name?: string;
}

interface MessageEventInit extends EventInit {
    lastEventId?: string;
    channel?: string;
    data?: any;
    origin?: string;
    ports?: MessagePort[];
    source?: any;
}

interface NotificationOptions {
    body?: string;
    dir?: NotificationDirection;
    icon?: string;
    lang?: string;
    tag?: string;
}

interface ObjectURLOptions {
    oneTimeOnly?: boolean;
}

interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | null;
    userVisibleOnly?: boolean;
}

interface RequestInit {
    signal?: AbortSignal;
    body?: Blob | BufferSource | FormData | string | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}

interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientType;
}

interface ExtendableEventInit extends EventInit {
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: Client | ServiceWorker | MessagePort | null;
    ports?: MessagePort[] | null;
}

interface FetchEventInit extends ExtendableEventInit {
    request: Request;
    clientId?: string | null;
    isReload?: boolean;
}

interface NotificationEventInit extends ExtendableEventInit {
    notification: Notification;
    action?: string;
}

interface PushEventInit extends ExtendableEventInit {
    data?: BufferSource | USVString;
}

interface SyncEventInit extends ExtendableEventInit {
    tag: string;
    lastChance?: boolean;
}

type EventListener = (evt: Event) => void | { handleEvent(evt: Event): void; };

type WebKitEntriesCallback = (entries: WebKitEntry[]) => void | { handleEvent(entries: WebKitEntry[]): void; };

type WebKitErrorCallback = (err: DOMError) => void | { handleEvent(err: DOMError): void; };

type WebKitFileCallback = (file: File) => void | { handleEvent(file: File): void; };

declare class AudioBuffer {
    readonly duration: number;
    readonly length: number;
    readonly numberOfChannels: number;
    readonly sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
    getChannelData(channel: number): Float32Array;
}

declare class Blob {
    readonly size: number;
    readonly type: string;
    msClose(): void;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
    constructor(blobParts?: any[], options?: BlobPropertyBag);
}

declare class Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<Request[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<Response[]>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare class CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    open(cacheName: string): Promise<Cache>;
}

interface CloseEvent extends Event {}
declare class CloseEvent {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
    constructor(typeArg: string, eventInitDict?: CloseEventInit);
}

declare class Console {
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    clear(): void;
    count(countTitle?: string): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(value?: any, ...optionalParams: any[]): void;
    dirxml(value: any): void;
    error(message?: any, ...optionalParams: any[]): void;
    exception(message?: string, ...optionalParams: any[]): void;
    group(groupTitle?: string, ...optionalParams: any[]): void;
    groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    msIsIndependentlyComposed(element: any): boolean;
    profile(reportName?: string): void;
    profileEnd(): void;
    select(element: any): void;
    table(...data: any[]): void;
    time(timerName?: string): void;
    timeEnd(timerName?: string): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}

declare class Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

declare class CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: string;
    readonly usages: string[];
}

declare class DOMError {
    readonly name: string;
    toString(): string;
}

declare class DOMException {
    readonly code: number;
    readonly message: string;
    readonly name: string;
    toString(): string;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly PARSE_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SERIALIZE_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    constructor(message?: string, name?: string);
    static readonly ABORT_ERR: number;
    static readonly DATA_CLONE_ERR: number;
    static readonly DOMSTRING_SIZE_ERR: number;
    static readonly HIERARCHY_REQUEST_ERR: number;
    static readonly INDEX_SIZE_ERR: number;
    static readonly INUSE_ATTRIBUTE_ERR: number;
    static readonly INVALID_ACCESS_ERR: number;
    static readonly INVALID_CHARACTER_ERR: number;
    static readonly INVALID_MODIFICATION_ERR: number;
    static readonly INVALID_NODE_TYPE_ERR: number;
    static readonly INVALID_STATE_ERR: number;
    static readonly NAMESPACE_ERR: number;
    static readonly NETWORK_ERR: number;
    static readonly NO_DATA_ALLOWED_ERR: number;
    static readonly NO_MODIFICATION_ALLOWED_ERR: number;
    static readonly NOT_FOUND_ERR: number;
    static readonly NOT_SUPPORTED_ERR: number;
    static readonly PARSE_ERR: number;
    static readonly QUOTA_EXCEEDED_ERR: number;
    static readonly SECURITY_ERR: number;
    static readonly SERIALIZE_ERR: number;
    static readonly SYNTAX_ERR: number;
    static readonly TIMEOUT_ERR: number;
    static readonly TYPE_MISMATCH_ERR: number;
    static readonly URL_MISMATCH_ERR: number;
    static readonly VALIDATION_ERR: number;
    static readonly WRONG_DOCUMENT_ERR: number;
}

declare class DOMStringList {
    readonly length: number;
    contains(str: string): boolean;
    item(index: number): string | null;
    [index: number]: string;
}

interface ErrorEvent extends Event {}
declare class ErrorEvent {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
    initErrorEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number): void;
    constructor(type: string, errorEventInitDict?: ErrorEventInit);
}

declare class Event {
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    cancelBubble: boolean;
    readonly currentTarget: EventTarget;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    returnValue: boolean;
    readonly srcElement: any;
    readonly target: EventTarget;
    readonly timeStamp: number;
    readonly type: string;
    readonly scoped: boolean;
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    deepPath(): EventTarget[];
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    constructor(typeArg: string, eventInitDict?: EventInit);
    static readonly AT_TARGET: number;
    static readonly BUBBLING_PHASE: number;
    static readonly CAPTURING_PHASE: number;
}

declare class EventTarget {
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface File extends Blob {}
declare class File {
    readonly lastModifiedDate: Date;
    readonly name: string;
    readonly webkitRelativePath: string;
    readonly lastModified: number;
    constructor(parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag);
}

declare class FileList {
    readonly length: number;
    item(index: number): File;
    [index: number]: File;
}

interface FileReader extends EventTarget, MSBaseReader {}
declare class FileReader {
    readonly error: DOMError;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    addEventListener<K extends keyof MSBaseReaderEventMap>(type: K, listener: (this: FileReader, ev: MSBaseReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSBaseReaderEventMap>(type: K, listener: (this: FileReader, ev: MSBaseReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare class FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
}

declare class Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: ForEachCallback): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    constructor(init?: HeadersInit);
}

declare class IDBCursor {
    readonly direction: IDBCursorDirection;
    key: IDBKeyRange | IDBValidKey;
    readonly primaryKey: any;
    source: IDBObjectStore | IDBIndex;
    advance(count: number): void;
    continue(key?: IDBKeyRange | IDBValidKey): void;
    delete(): IDBRequest;
    update(value: any): IDBRequest;
    readonly NEXT: string;
    readonly NEXT_NO_DUPLICATE: string;
    readonly PREV: string;
    readonly PREV_NO_DUPLICATE: string;
    static readonly NEXT: string;
    static readonly NEXT_NO_DUPLICATE: string;
    static readonly PREV: string;
    static readonly PREV_NO_DUPLICATE: string;
}

interface IDBCursorWithValue extends IDBCursor {}
declare class IDBCursorWithValue {
    readonly value: any;
}

interface IDBDatabaseEventMap {
    "abort": Event;
    "error": Event;
}

interface IDBDatabase extends EventTarget {}
declare class IDBDatabase {
    readonly name: string;
    readonly objectStoreNames: DOMStringList;
    onabort: (this: IDBDatabase, ev: Event) => any;
    onerror: (this: IDBDatabase, ev: Event) => any;
    version: number;
    onversionchange: (ev: IDBVersionChangeEvent) => any;
    close(): void;
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener(type: "versionchange", listener: (this: IDBDatabase, ev: IDBVersionChangeEvent) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: "versionchange", listener: (this: IDBDatabase, ev: IDBVersionChangeEvent) => any, options?: boolean | EventListenerOptions): void;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare class IDBFactory {
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare class IDBIndex {
    keyPath: string | string[];
    readonly name: string;
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    multiEntry: boolean;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    get(key: IDBKeyRange | IDBValidKey): IDBRequest;
    getKey(key: IDBKeyRange | IDBValidKey): IDBRequest;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
}

declare class IDBKeyRange {
    readonly lower: any;
    readonly lowerOpen: boolean;
    readonly upper: any;
    readonly upperOpen: boolean;
    static bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    static lowerBound(lower: any, open?: boolean): IDBKeyRange;
    static only(value: any): IDBKeyRange;
    static upperBound(upper: any, open?: boolean): IDBKeyRange;
}

declare class IDBObjectStore {
    readonly indexNames: DOMStringList;
    keyPath: string | string[];
    readonly name: string;
    readonly transaction: IDBTransaction;
    autoIncrement: boolean;
    add(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
    clear(): IDBRequest;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    createIndex(name: string, keyPath: string | string[], optionalParameters?: IDBIndexParameters): IDBIndex;
    delete(key: IDBKeyRange | IDBValidKey): IDBRequest;
    deleteIndex(indexName: string): void;
    get(key: any): IDBRequest;
    index(name: string): IDBIndex;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    put(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}

interface IDBOpenDBRequest extends IDBRequest {}
declare class IDBOpenDBRequest {
    onblocked: (this: IDBOpenDBRequest, ev: Event) => any;
    onupgradeneeded: (this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

interface IDBRequest extends EventTarget {}
declare class IDBRequest {
    readonly error: DOMException;
    onerror: (this: IDBRequest, ev: Event) => any;
    onsuccess: (this: IDBRequest, ev: Event) => any;
    readonly readyState: IDBRequestReadyState;
    readonly result: any;
    source: IDBObjectStore | IDBIndex | IDBCursor;
    readonly transaction: IDBTransaction;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

interface IDBTransaction extends EventTarget {}
declare class IDBTransaction {
    readonly db: IDBDatabase;
    readonly error: DOMException;
    readonly mode: IDBTransactionMode;
    onabort: (this: IDBTransaction, ev: Event) => any;
    oncomplete: (this: IDBTransaction, ev: Event) => any;
    onerror: (this: IDBTransaction, ev: Event) => any;
    abort(): void;
    objectStore(name: string): IDBObjectStore;
    readonly READ_ONLY: string;
    readonly READ_WRITE: string;
    readonly VERSION_CHANGE: string;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    static readonly READ_ONLY: string;
    static readonly READ_WRITE: string;
    static readonly VERSION_CHANGE: string;
}

interface IDBVersionChangeEvent extends Event {}
declare class IDBVersionChangeEvent {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}

declare class ImageData {
    data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
    constructor(width: number, height: number);
    constructor(array: Uint8ClampedArray, width: number, height: number);
}

declare class MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

interface MessageEvent extends Event {}
declare class MessageEvent {
    readonly data: any;
    readonly origin: string;
    readonly ports: any;
    readonly source: any;
    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: any): void;
    constructor(type: string, eventInitDict?: MessageEventInit);
}

interface MessagePortEventMap {
    "message": MessageEvent;
}

interface MessagePort extends EventTarget {}
declare class MessagePort {
    onmessage: (this: MessagePort, ev: MessageEvent) => any;
    close(): void;
    postMessage(message?: any, transfer?: any[]): void;
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

interface Notification extends EventTarget {}
declare class Notification {
    readonly body: string;
    readonly dir: NotificationDirection;
    readonly icon: string;
    readonly lang: string;
    onclick: (this: Notification, ev: Event) => any;
    onclose: (this: Notification, ev: Event) => any;
    onerror: (this: Notification, ev: Event) => any;
    onshow: (this: Notification, ev: Event) => any;
    readonly permission: NotificationPermission;
    readonly tag: string;
    readonly title: string;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    constructor(title: string, options?: NotificationOptions);
    static requestPermission(callback?: NotificationPermissionCallback): Promise<NotificationPermission>;
}

declare class Performance {
    readonly navigation: PerformanceNavigation;
    readonly timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): any;
    getEntriesByName(name: string, entryType?: string): any;
    getEntriesByType(entryType: string): any;
    getMarks(markName?: string): any;
    getMeasures(measureName?: string): any;
    mark(markName: string): void;
    measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
}

declare class PerformanceNavigation {
    readonly redirectCount: number;
    readonly type: number;
    toJSON(): any;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
    static readonly TYPE_BACK_FORWARD: number;
    static readonly TYPE_NAVIGATE: number;
    static readonly TYPE_RELOAD: number;
    static readonly TYPE_RESERVED: number;
}

declare class PerformanceTiming {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly domLoading: number;
    readonly fetchStart: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly msFirstPaint: number;
    readonly navigationStart: number;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
    readonly secureConnectionStart: number;
    toJSON(): any;
}

declare class Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

declare class PositionError {
    readonly code: number;
    readonly message: string;
    toString(): string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
    static readonly PERMISSION_DENIED: number;
    static readonly POSITION_UNAVAILABLE: number;
    static readonly TIMEOUT: number;
}

interface ProgressEvent extends Event {}
declare class ProgressEvent {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
    initProgressEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number): void;
    constructor(type: string, eventInitDict?: ProgressEventInit);
}

declare class PushManager {
    getSubscription(): Promise<PushSubscription>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare class PushSubscription {
    readonly endpoint: USVString;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): any;
    unsubscribe(): Promise<boolean>;
}

declare class PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null;
    readonly userVisibleOnly: boolean;
}

declare class ReadableStream {
    readonly locked: boolean;
    cancel(): Promise<void>;
    getReader(): ReadableStreamReader;
}

declare class ReadableStreamReader {
    cancel(): Promise<void>;
    read(): Promise<any>;
    releaseLock(): void;
}

interface Request extends Object, Body {}
declare class Request {
    readonly cache: RequestCache;
    readonly credentials: RequestCredentials;
    readonly destination: RequestDestination;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: RequestMode;
    readonly redirect: RequestRedirect;
    readonly referrer: string;
    readonly referrerPolicy: ReferrerPolicy;
    readonly type: RequestType;
    readonly url: string;
    readonly signal: AbortSignal;
    clone(): Request;
    constructor(input: Request | string, init?: RequestInit);
}

interface Response extends Object, Body {}
declare class Response {
    readonly body: ReadableStream | null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    readonly redirected: boolean;
    clone(): Response;
    constructor(body?: any, init?: ResponseInit);
    error: () => Response;
    redirect: (url: string, status?: number) => Response;
}

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

interface ServiceWorker extends EventTarget, AbstractWorker {}
declare class ServiceWorker {
    onstatechange: (this: ServiceWorker, ev: Event) => any;
    readonly scriptURL: USVString;
    readonly state: ServiceWorkerState;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

interface ServiceWorkerRegistration extends EventTarget {}
declare class ServiceWorkerRegistration {
    readonly active: ServiceWorker | null;
    readonly installing: ServiceWorker | null;
    onupdatefound: (this: ServiceWorkerRegistration, ev: Event) => any;
    readonly pushManager: PushManager;
    readonly scope: USVString;
    readonly sync: SyncManager;
    readonly waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare class SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare class URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
    readonly searchParams: URLSearchParams;
    toString(): string;
    constructor(url: string, base?: string | URL);
    static createObjectURL(object: any, options?: ObjectURLOptions): string;
    static revokeObjectURL(url: string): void;
}

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface WebSocket extends EventTarget {}
declare class WebSocket {
    binaryType: string;
    readonly bufferedAmount: number;
    readonly extensions: string;
    onclose: (this: WebSocket, ev: CloseEvent) => any;
    onerror: (this: WebSocket, ev: Event) => any;
    onmessage: (this: WebSocket, ev: MessageEvent) => any;
    onopen: (this: WebSocket, ev: Event) => any;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    constructor(url: string, protocols?: string | string[]);
    static readonly CLOSED: number;
    static readonly CLOSING: number;
    static readonly CONNECTING: number;
    static readonly OPEN: number;
}

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
}

interface Worker extends EventTarget, AbstractWorker {}
declare class Worker {
    onmessage: (this: Worker, ev: MessageEvent) => any;
    postMessage(message: any, transfer?: any[]): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    constructor(stringUrl: string);
}

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

interface XMLHttpRequest extends EventTarget, XMLHttpRequestEventTarget {}
declare class XMLHttpRequest {
    onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    readonly responseXML: any;
    readonly status: number;
    readonly statusText: string;
    timeout: number;
    readonly upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    msCaching?: string;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string | null;
    msCachingEnabled(): boolean;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    overrideMimeType(mime: string): void;
    send(data?: string): void;
    send(data?: any): void;
    setRequestHeader(header: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    static readonly DONE: number;
    static readonly HEADERS_RECEIVED: number;
    static readonly LOADING: number;
    static readonly OPENED: number;
    static readonly UNSENT: number;
}

interface XMLHttpRequestUpload extends EventTarget, XMLHttpRequestEventTarget {}
declare class XMLHttpRequestUpload {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    onerror: (this: AbstractWorker, ev: ErrorEvent) => any;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface Body {
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface GlobalFetch {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

interface MSBaseReaderEventMap {
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "progress": ProgressEvent;
}

interface MSBaseReader {
    onabort: (this: MSBaseReader, ev: Event) => any;
    onerror: (this: MSBaseReader, ev: ErrorEvent) => any;
    onload: (this: MSBaseReader, ev: Event) => any;
    onloadend: (this: MSBaseReader, ev: ProgressEvent) => any;
    onloadstart: (this: MSBaseReader, ev: Event) => any;
    onprogress: (this: MSBaseReader, ev: ProgressEvent) => any;
    readonly readyState: number;
    readonly result: any;
    abort(): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof MSBaseReaderEventMap>(type: K, listener: (this: MSBaseReader, ev: MSBaseReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSBaseReaderEventMap>(type: K, listener: (this: MSBaseReader, ev: MSBaseReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface NavigatorBeacon {
    sendBeacon(url: USVString, data?: BodyInit): boolean;
}

interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

interface NavigatorID {
    readonly appCodeName: string;
    readonly appName: string;
    readonly appVersion: string;
    readonly platform: string;
    readonly product: string;
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    readonly vendorSub: string;
}

interface NavigatorOnLine {
    readonly onLine: boolean;
}

interface WindowBase64 {
    atob(encodedString: string): string;
    btoa(rawString: string): string;
}

interface WindowConsole {
    readonly console: Console;
}

interface XMLHttpRequestEventTargetEventMap {
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;
}

interface XMLHttpRequestEventTarget {
    onabort: (this: XMLHttpRequest, ev: Event) => any;
    onerror: (this: XMLHttpRequest, ev: ErrorEvent) => any;
    onload: (this: XMLHttpRequest, ev: Event) => any;
    onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onloadstart: (this: XMLHttpRequest, ev: Event) => any;
    onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare class Client {
    readonly frameType: FrameType;
    readonly id: string;
    readonly url: USVString;
    postMessage(message: any, transfer?: any[]): void;
}

declare class Clients {
    claim(): Promise<void>;
    get(id: string): Promise<any>;
    matchAll(options?: ClientQueryOptions): Promise<Client[]>;
    openWindow(url: USVString): Promise<WindowClient>;
}

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "message": MessageEvent;
}

interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {}
declare class DedicatedWorkerGlobalScope {
    onmessage: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface ExtendableEvent extends Event {}
declare class ExtendableEvent {
    waitUntil(f: Promise<any>): void;
    constructor(type: string, eventInitDict?: ExtendableEventInit);
}

interface ExtendableMessageEvent extends ExtendableEvent {}
declare class ExtendableMessageEvent {
    readonly data: any;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: MessagePort[] | null;
    readonly source: Client | ServiceWorker | MessagePort | null;
    constructor(type: string, eventInitDict?: ExtendableMessageEventInit);
}

interface FetchEvent extends ExtendableEvent {}
declare class FetchEvent {
    readonly clientId: string | null;
    readonly isReload: boolean;
    readonly request: Request;
    respondWith(r: Promise<Response>): void;
    constructor(type: string, eventInitDict: FetchEventInit);
}

declare class FileReaderSync {
    readAsArrayBuffer(blob: Blob): any;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): string;
    readAsText(blob: Blob, encoding?: string): string;
}

interface NotificationEvent extends ExtendableEvent {}
declare class NotificationEvent {
    readonly action: string;
    readonly notification: Notification;
    constructor(type: string, eventInitDict: NotificationEventInit);
}

interface PushEvent extends ExtendableEvent {}
declare class PushEvent {
    readonly data: PushMessageData | null;
    constructor(type: string, eventInitDict?: PushEventInit);
}

declare class PushMessageData {
    arrayBuffer(): ArrayBuffer;
    blob(): Blob;
    json(): JSON;
    text(): USVString;
}

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": ExtendableEvent;
    "sync": SyncEvent;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {}
declare class ServiceWorkerGlobalScope {
    readonly clients: Clients;
    onactivate: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onfetch: (this: ServiceWorkerGlobalScope, ev: FetchEvent) => any;
    oninstall: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onmessage: (this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any;
    onnotificationclick: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onnotificationclose: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onpush: (this: ServiceWorkerGlobalScope, ev: PushEvent) => any;
    onpushsubscriptionchange: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onsync: (this: ServiceWorkerGlobalScope, ev: SyncEvent) => any;
    readonly registration: ServiceWorkerRegistration;
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface SyncEvent extends ExtendableEvent {}
declare class SyncEvent {
    readonly lastChance: boolean;
    readonly tag: string;
    constructor(type: string, init: SyncEventInit);
}

interface WindowClient extends Client {}
declare class WindowClient {
    readonly focused: boolean;
    readonly visibilityState: VisibilityState;
    focus(): Promise<WindowClient>;
    navigate(url: USVString): Promise<WindowClient>;
}

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
}

interface WorkerGlobalScope extends EventTarget, WorkerUtils, WindowConsole, GlobalFetch {}
declare class WorkerGlobalScope {
    readonly caches: CacheStorage;
    readonly isSecureContext: boolean;
    readonly location: WorkerLocation;
    onerror: (this: WorkerGlobalScope, ev: ErrorEvent) => any;
    readonly performance: Performance;
    readonly self: WorkerGlobalScope;
    msWriteProfilerMark(profilerMarkName: string): void;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare class WorkerLocation {
    readonly hash: string;
    readonly host: string;
    readonly hostname: string;
    readonly href: string;
    readonly origin: string;
    readonly pathname: string;
    readonly port: string;
    readonly protocol: string;
    readonly search: string;
    toString(): string;
}

interface WorkerNavigator extends Object, NavigatorID, NavigatorOnLine, NavigatorBeacon, NavigatorConcurrentHardware {}
declare class WorkerNavigator {
    readonly hardwareConcurrency: number;
}

interface WorkerUtils extends Object, WindowBase64 {
    readonly indexedDB: IDBFactory;
    readonly msIndexedDB: IDBFactory;
    readonly navigator: WorkerNavigator;
    clearImmediate(handle: number): void;
    clearInterval(handle: number): void;
    clearTimeout(handle: number): void;
    importScripts(...urls: string[]): void;
    setImmediate(handler: (...args: any[]) => void): number;
    setImmediate(handler: any, ...args: any[]): number;
    setInterval(handler: (...args: any[]) => void, timeout: number): number;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
}

interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: (ev: MessageEvent) => any;
    onmessageerror: (ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

interface BroadcastChannelEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;
}

interface ErrorEventInit {
    message?: string;
    filename?: string;
    lineno?: number;
    conlno?: number;
    error?: any;
}

interface ImageBitmapOptions {
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    colorSpaceConversion?: "none" | "default";
    resizeWidth?: number;
    resizeHeight?: number;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
}

interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}

interface URLSearchParams {
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    /**
     * Constructor returning a URLSearchParams object.
     */
    new (init?: string | URLSearchParams): URLSearchParams;
};

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface IDBArrayKey extends Array<IDBValidKey> {
}

interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: Uint8Array;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: AlgorithmIdentifier;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: Uint8Array;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: AlgorithmIdentifier;
}

interface RsaHashedImportParams {
    hash: AlgorithmIdentifier;
}

interface RsaPssParams {
    saltLength: number;
}

interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}

interface EcdsaParams extends Algorithm {
    hash: AlgorithmIdentifier;
}

interface EcKeyGenParams extends Algorithm {
    namedCurve: string;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
    typedCurve: string;
}

interface EcKeyImportParams extends Algorithm {
    namedCurve: string;
}

interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}

interface AesKeyGenParams extends Algorithm {
    length: number;
}

interface AesDerivedKeyParams extends Algorithm {
    length: number;
}

interface AesCbcParams extends Algorithm {
    iv: BufferSource;
}

interface AesCmacParams extends Algorithm {
    length: number;
}

interface AesGcmParams extends Algorithm {
    iv: BufferSource;
    additionalData?: BufferSource;
    tagLength?: number;
}

interface AesCfbParams extends Algorithm {
    iv: BufferSource;
}

interface HmacImportParams extends Algorithm {
    hash?: AlgorithmIdentifier;
    length?: number;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash: AlgorithmIdentifier;
    length: number;
}

interface HmacKeyGenParams extends Algorithm {
    hash: AlgorithmIdentifier;
    length?: number;
}

interface DhKeyGenParams extends Algorithm {
    prime: Uint8Array;
    generator: Uint8Array;
}

interface DhKeyAlgorithm extends KeyAlgorithm {
    prime: Uint8Array;
    generator: Uint8Array;
}

interface DhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

interface DhImportKeyParams extends Algorithm {
    prime: Uint8Array;
    generator: Uint8Array;
}

interface ConcatParams extends Algorithm {
    hash?: AlgorithmIdentifier;
    algorithmId: Uint8Array;
    partyUInfo: Uint8Array;
    partyVInfo: Uint8Array;
    publicInfo?: Uint8Array;
    privateInfo?: Uint8Array;
}

interface HkdfCtrParams extends Algorithm {
    hash: AlgorithmIdentifier;
    label: BufferSource;
    context: BufferSource;
}

interface Pbkdf2Params extends Algorithm {
    salt: BufferSource;
    iterations: number;
    hash: AlgorithmIdentifier;
}

interface RsaOtherPrimesInfo {
    r: string;
    d: string;
    t: string;
}

interface JsonWebKey {
    kty: string;
    use?: string;
    key_ops?: string[];
    alg?: string;
    kid?: string;
    x5u?: string;
    x5c?: string;
    x5t?: string;
    ext?: boolean;
    crv?: string;
    x?: string;
    y?: string;
    d?: string;
    n?: string;
    e?: string;
    p?: string;
    q?: string;
    dp?: string;
    dq?: string;
    qi?: string;
    oth?: RsaOtherPrimesInfo[];
    k?: string;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface AddEventListenerOptions extends EventListenerOptions {
    passive?: boolean;
    once?: boolean;
}

interface AbortController {
    readonly signal: AbortSignal;
    abort(): void;
}

declare var AbortController: {
    prototype: AbortController;
    new(): AbortController;
};

interface AbortSignal extends EventTarget {
    readonly aborted: boolean;
    onabort: (ev: Event) => any;
}

interface EventSource extends EventTarget {
    readonly url: string;
    readonly withCredentials: boolean;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSED: number;
    readonly readyState: number;
    onopen: (evt: MessageEvent) => any;
    onmessage: (evt: MessageEvent) => any;
    onerror: (evt: MessageEvent) => any;
    close(): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
};

interface EventSourceInit {
    readonly withCredentials: boolean;
}

interface DecodeErrorCallback {
    (error: DOMException): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
interface ErrorEventHandler {
    (message: string, filename?: string, lineno?: number, colno?: number, error?: Error): void;
}
interface ForEachCallback {
    (keyId: BufferSource, status: MediaKeyStatus): void;
}
interface FunctionStringCallback {
    (data: string): void;
}
interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface PositionCallback {
    (position: Position): void;
}
interface PositionErrorCallback {
    (error: PositionError): void;
}
declare var onmessage: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any;
declare function close(): void;
declare function postMessage(message: any, transfer?: any[]): void;
declare var caches: CacheStorage;
declare var isSecureContext: boolean;
declare var location: WorkerLocation;
declare var onerror: (this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any;
declare var performance: Performance;
declare var self: WorkerGlobalScope;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function dispatchEvent(evt: Event): boolean;
declare var indexedDB: IDBFactory;
declare var msIndexedDB: IDBFactory;
declare var navigator: WorkerNavigator;
declare function clearImmediate(handle: number): void;
declare function clearInterval(handle: number): void;
declare function clearTimeout(handle: number): void;
declare function importScripts(...urls: string[]): void;
declare function setImmediate(handler: (...args: any[]) => void): number;
declare function setImmediate(handler: any, ...args: any[]): number;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function atob(encodedString: string): string;
declare function btoa(rawString: string): string;
declare var console: Console;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function dispatchEvent(evt: Event): boolean;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = string | Algorithm;
type BodyInit = Blob | BufferSource | FormData | string;
type IDBKeyPath = string;
type RequestInfo = Request | string;
type USVString = string;
type IDBValidKey = number | string | Date | IDBArrayKey;
type BufferSource = ArrayBuffer | ArrayBufferView;
type FormDataEntryValue = string | File;
type HeadersInit = Headers | string[][] | { [key: string]: string };
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "pending" | "done";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type MediaKeyStatus = "usable" | "expired" | "output-downscaled" | "output-not-allowed" | "status-pending" | "internal-error";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "granted" | "denied" | "prompt";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin-only" | "origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestDestination = "" | "document" | "sharedworker" | "subresource" | "unknown" | "worker";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type VisibilityState = "hidden" | "visible" | "prerender" | "unloaded";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
type ClientType = "window" | "worker" | "sharedworker" | "all";
type FrameType = "auxiliary" | "top-level" | "nested" | "none";