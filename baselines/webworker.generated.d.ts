/////////////////////////////
/// Worker APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    /** Type: boolean */
    once?: boolean;
    /** Type: boolean */
    passive?: boolean;
    /** Type: AbortSignal */
    signal?: AbortSignal;
}

interface AesCbcParams extends Algorithm {
    /** Type: BufferSource */
    iv: BufferSource;
}

interface AesCtrParams extends Algorithm {
    /** Type: BufferSource */
    counter: BufferSource;
    /** Type: octet */
    length: number;
}

interface AesDerivedKeyParams extends Algorithm {
    /** Type: unsigned short */
    length: number;
}

interface AesGcmParams extends Algorithm {
    /** Type: BufferSource */
    additionalData?: BufferSource;
    /** Type: BufferSource */
    iv: BufferSource;
    /** Type: octet */
    tagLength?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    /** Type: unsigned short */
    length: number;
}

interface AesKeyGenParams extends Algorithm {
    /** Type: unsigned short */
    length: number;
}

interface Algorithm {
    /** Type: DOMString */
    name: string;
}

interface AudioConfiguration {
    /** Type: unsigned long long */
    bitrate?: number;
    /** Type: DOMString */
    channels?: string;
    /** Type: DOMString */
    contentType: string;
    /** Type: unsigned long */
    samplerate?: number;
    /** Type: boolean */
    spatialRendering?: boolean;
}

interface AudioDataCopyToOptions {
    /** Type: AudioSampleFormat */
    format?: AudioSampleFormat;
    /** Type: unsigned long */
    frameCount?: number;
    /** Type: unsigned long */
    frameOffset?: number;
    /** Type: unsigned long */
    planeIndex: number;
}

interface AudioDataInit {
    /** Type: BufferSource */
    data: BufferSource;
    /** Type: AudioSampleFormat */
    format: AudioSampleFormat;
    /** Type: unsigned long */
    numberOfChannels: number;
    /** Type: unsigned long */
    numberOfFrames: number;
    /** Type: float */
    sampleRate: number;
    /** Type: long long */
    timestamp: number;
    /** Type: [object Object] */
    transfer?: ArrayBuffer[];
}

interface AudioDecoderConfig {
    /** Type: DOMString */
    codec: string;
    /** Type: BufferSource */
    description?: BufferSource;
    /** Type: unsigned long */
    numberOfChannels: number;
    /** Type: unsigned long */
    sampleRate: number;
}

interface AudioDecoderInit {
    /** Type: WebCodecsErrorCallback */
    error: WebCodecsErrorCallback;
    /** Type: AudioDataOutputCallback */
    output: AudioDataOutputCallback;
}

interface AudioDecoderSupport {
    /** Type: AudioDecoderConfig */
    config?: AudioDecoderConfig;
    /** Type: boolean */
    supported?: boolean;
}

interface AudioEncoderConfig {
    /** Type: unsigned long long */
    bitrate?: number;
    /** Type: BitrateMode */
    bitrateMode?: BitrateMode;
    /** Type: DOMString */
    codec: string;
    /** Type: unsigned long */
    numberOfChannels: number;
    /** Type: OpusEncoderConfig */
    opus?: OpusEncoderConfig;
    /** Type: unsigned long */
    sampleRate: number;
}

interface AudioEncoderInit {
    /** Type: WebCodecsErrorCallback */
    error: WebCodecsErrorCallback;
    /** Type: EncodedAudioChunkOutputCallback */
    output: EncodedAudioChunkOutputCallback;
}

interface AudioEncoderSupport {
    /** Type: AudioEncoderConfig */
    config?: AudioEncoderConfig;
    /** Type: boolean */
    supported?: boolean;
}

interface AvcEncoderConfig {
    /** Type: AvcBitstreamFormat */
    format?: AvcBitstreamFormat;
}

interface BlobPropertyBag {
    /** Type: EndingType */
    endings?: EndingType;
    /** Type: DOMString */
    type?: string;
}

interface CSSMatrixComponentOptions {
    /** Type: boolean */
    is2D?: boolean;
}

interface CSSNumericType {
    /** Type: long */
    angle?: number;
    /** Type: long */
    flex?: number;
    /** Type: long */
    frequency?: number;
    /** Type: long */
    length?: number;
    /** Type: long */
    percent?: number;
    /** Type: CSSNumericBaseType */
    percentHint?: CSSNumericBaseType;
    /** Type: long */
    resolution?: number;
    /** Type: long */
    time?: number;
}

interface CacheQueryOptions {
    /** Type: boolean */
    ignoreMethod?: boolean;
    /** Type: boolean */
    ignoreSearch?: boolean;
    /** Type: boolean */
    ignoreVary?: boolean;
}

interface ClientQueryOptions {
    /** Type: boolean */
    includeUncontrolled?: boolean;
    /** Type: ClientType */
    type?: ClientTypes;
}

interface CloseEventInit extends EventInit {
    /** Type: unsigned short */
    code?: number;
    /** Type: USVString */
    reason?: string;
    /** Type: boolean */
    wasClean?: boolean;
}

interface CookieInit {
    /** Type: USVString */
    domain?: string | null;
    /** Type: DOMHighResTimeStamp */
    expires?: DOMHighResTimeStamp | null;
    /** Type: USVString */
    name: string;
    /** Type: boolean */
    partitioned?: boolean;
    /** Type: USVString */
    path?: string;
    /** Type: CookieSameSite */
    sameSite?: CookieSameSite;
    /** Type: USVString */
    value: string;
}

interface CookieListItem {
    /** Type: USVString */
    name?: string;
    /** Type: USVString */
    value?: string;
}

interface CookieStoreDeleteOptions {
    /** Type: USVString */
    domain?: string | null;
    /** Type: USVString */
    name: string;
    /** Type: boolean */
    partitioned?: boolean;
    /** Type: USVString */
    path?: string;
}

interface CookieStoreGetOptions {
    /** Type: USVString */
    name?: string;
    /** Type: USVString */
    url?: string;
}

interface CryptoKeyPair {
    /** Type: CryptoKey */
    privateKey: CryptoKey;
    /** Type: CryptoKey */
    publicKey: CryptoKey;
}

interface CustomEventInit<T = any> extends EventInit {
    /** Type: any */
    detail?: T;
}

interface DOMMatrix2DInit {
    /** Type: unrestricted double */
    a?: number;
    /** Type: unrestricted double */
    b?: number;
    /** Type: unrestricted double */
    c?: number;
    /** Type: unrestricted double */
    d?: number;
    /** Type: unrestricted double */
    e?: number;
    /** Type: unrestricted double */
    f?: number;
    /** Type: unrestricted double */
    m11?: number;
    /** Type: unrestricted double */
    m12?: number;
    /** Type: unrestricted double */
    m21?: number;
    /** Type: unrestricted double */
    m22?: number;
    /** Type: unrestricted double */
    m41?: number;
    /** Type: unrestricted double */
    m42?: number;
}

interface DOMMatrixInit extends DOMMatrix2DInit {
    /** Type: boolean */
    is2D?: boolean;
    /** Type: unrestricted double */
    m13?: number;
    /** Type: unrestricted double */
    m14?: number;
    /** Type: unrestricted double */
    m23?: number;
    /** Type: unrestricted double */
    m24?: number;
    /** Type: unrestricted double */
    m31?: number;
    /** Type: unrestricted double */
    m32?: number;
    /** Type: unrestricted double */
    m33?: number;
    /** Type: unrestricted double */
    m34?: number;
    /** Type: unrestricted double */
    m43?: number;
    /** Type: unrestricted double */
    m44?: number;
}

interface DOMPointInit {
    /** Type: unrestricted double */
    w?: number;
    /** Type: unrestricted double */
    x?: number;
    /** Type: unrestricted double */
    y?: number;
    /** Type: unrestricted double */
    z?: number;
}

interface DOMQuadInit {
    /** Type: DOMPointInit */
    p1?: DOMPointInit;
    /** Type: DOMPointInit */
    p2?: DOMPointInit;
    /** Type: DOMPointInit */
    p3?: DOMPointInit;
    /** Type: DOMPointInit */
    p4?: DOMPointInit;
}

interface DOMRectInit {
    /** Type: unrestricted double */
    height?: number;
    /** Type: unrestricted double */
    width?: number;
    /** Type: unrestricted double */
    x?: number;
    /** Type: unrestricted double */
    y?: number;
}

interface EcKeyGenParams extends Algorithm {
    /** Type: NamedCurve */
    namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
    /** Type: NamedCurve */
    namedCurve: NamedCurve;
}

interface EcdhKeyDeriveParams extends Algorithm {
    /** Type: CryptoKey */
    public: CryptoKey;
}

interface EcdsaParams extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
}

interface EncodedAudioChunkInit {
    /** Type: AllowSharedBufferSource */
    data: AllowSharedBufferSource;
    /** Type: unsigned long long */
    duration?: number;
    /** Type: long long */
    timestamp: number;
    /** Type: [object Object] */
    transfer?: ArrayBuffer[];
    /** Type: EncodedAudioChunkType */
    type: EncodedAudioChunkType;
}

interface EncodedAudioChunkMetadata {
    /** Type: AudioDecoderConfig */
    decoderConfig?: AudioDecoderConfig;
}

interface EncodedVideoChunkInit {
    /** Type: AllowSharedBufferSource */
    data: AllowSharedBufferSource;
    /** Type: unsigned long long */
    duration?: number;
    /** Type: long long */
    timestamp: number;
    /** Type: EncodedVideoChunkType */
    type: EncodedVideoChunkType;
}

interface EncodedVideoChunkMetadata {
    /** Type: VideoDecoderConfig */
    decoderConfig?: VideoDecoderConfig;
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

interface EventSourceInit {
    /** Type: boolean */
    withCredentials?: boolean;
}

interface ExtendableCookieChangeEventInit extends ExtendableEventInit {
    /** Type: CookieList */
    changed?: CookieList;
    /** Type: CookieList */
    deleted?: CookieList;
}

interface ExtendableEventInit extends EventInit {
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    /** Type: any */
    data?: any;
    /** Type: DOMString */
    lastEventId?: string;
    /** Type: USVString */
    origin?: string;
    /** Type: [object Object] */
    ports?: MessagePort[];
    /** Type: [object Object],[object Object],[object Object] */
    source?: Client | ServiceWorker | MessagePort | null;
}

interface FetchEventInit extends ExtendableEventInit {
    /** Type: DOMString */
    clientId?: string;
    /** Type: [object Object] */
    handled?: Promise<void>;
    /** Type: [object Object] */
    preloadResponse?: Promise<any>;
    /** Type: Request */
    request: Request;
    /** Type: DOMString */
    resultingClientId?: string;
}

interface FilePropertyBag extends BlobPropertyBag {
    /** Type: long long */
    lastModified?: number;
}

interface FileSystemCreateWritableOptions {
    /** Type: boolean */
    keepExistingData?: boolean;
}

interface FileSystemGetDirectoryOptions {
    /** Type: boolean */
    create?: boolean;
}

interface FileSystemGetFileOptions {
    /** Type: boolean */
    create?: boolean;
}

interface FileSystemReadWriteOptions {
    /** Type: unsigned long long */
    at?: number;
}

interface FileSystemRemoveOptions {
    /** Type: boolean */
    recursive?: boolean;
}

interface FontFaceDescriptors {
    /** Type: CSSOMString */
    ascentOverride?: string;
    /** Type: CSSOMString */
    descentOverride?: string;
    /** Type: CSSOMString */
    display?: FontDisplay;
    /** Type: CSSOMString */
    featureSettings?: string;
    /** Type: CSSOMString */
    lineGapOverride?: string;
    /** Type: CSSOMString */
    stretch?: string;
    /** Type: CSSOMString */
    style?: string;
    /** Type: CSSOMString */
    unicodeRange?: string;
    /** Type: CSSOMString */
    weight?: string;
}

interface FontFaceSetLoadEventInit extends EventInit {
    /** Type: [object Object] */
    fontfaces?: FontFace[];
}

interface GetNotificationOptions {
    /** Type: DOMString */
    tag?: string;
}

interface HkdfParams extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
    /** Type: BufferSource */
    info: BufferSource;
    /** Type: BufferSource */
    salt: BufferSource;
}

interface HmacImportParams extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
    /** Type: unsigned long */
    length?: number;
}

interface HmacKeyGenParams extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
    /** Type: unsigned long */
    length?: number;
}

interface IDBDatabaseInfo {
    /** Type: DOMString */
    name?: string;
    /** Type: unsigned long long */
    version?: number;
}

interface IDBIndexParameters {
    /** Type: boolean */
    multiEntry?: boolean;
    /** Type: boolean */
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    /** Type: boolean */
    autoIncrement?: boolean;
    /** Type: [object Object],[object Object] */
    keyPath?: string | string[] | null;
}

interface IDBTransactionOptions {
    /** Type: IDBTransactionDurability */
    durability?: IDBTransactionDurability;
}

interface IDBVersionChangeEventInit extends EventInit {
    /** Type: unsigned long long */
    newVersion?: number | null;
    /** Type: unsigned long long */
    oldVersion?: number;
}

interface ImageBitmapOptions {
    /** Type: ColorSpaceConversion */
    colorSpaceConversion?: ColorSpaceConversion;
    /** Type: ImageOrientation */
    imageOrientation?: ImageOrientation;
    /** Type: PremultiplyAlpha */
    premultiplyAlpha?: PremultiplyAlpha;
    /** Type: unsigned long */
    resizeHeight?: number;
    /** Type: ResizeQuality */
    resizeQuality?: ResizeQuality;
    /** Type: unsigned long */
    resizeWidth?: number;
}

interface ImageBitmapRenderingContextSettings {
    /** Type: boolean */
    alpha?: boolean;
}

interface ImageDataSettings {
    /** Type: PredefinedColorSpace */
    colorSpace?: PredefinedColorSpace;
}

interface ImageDecodeOptions {
    /** Type: boolean */
    completeFramesOnly?: boolean;
    /** Type: unsigned long */
    frameIndex?: number;
}

interface ImageDecodeResult {
    /** Type: boolean */
    complete: boolean;
    /** Type: VideoFrame */
    image: VideoFrame;
}

interface ImageDecoderInit {
    /** Type: ColorSpaceConversion */
    colorSpaceConversion?: ColorSpaceConversion;
    /** Type: ImageBufferSource */
    data: ImageBufferSource;
    /** Type: unsigned long */
    desiredHeight?: number;
    /** Type: unsigned long */
    desiredWidth?: number;
    /** Type: boolean */
    preferAnimation?: boolean;
    /** Type: [object Object] */
    transfer?: ArrayBuffer[];
    /** Type: DOMString */
    type: string;
}

interface ImageEncodeOptions {
    /** Type: unrestricted double */
    quality?: number;
    /** Type: DOMString */
    type?: string;
}

interface JsonWebKey {
    /** Type: DOMString */
    alg?: string;
    /** Type: DOMString */
    crv?: string;
    /** Type: DOMString */
    d?: string;
    /** Type: DOMString */
    dp?: string;
    /** Type: DOMString */
    dq?: string;
    /** Type: DOMString */
    e?: string;
    /** Type: boolean */
    ext?: boolean;
    /** Type: DOMString */
    k?: string;
    /** Type: [object Object] */
    key_ops?: string[];
    /** Type: DOMString */
    kty?: string;
    /** Type: DOMString */
    n?: string;
    /** Type: [object Object] */
    oth?: RsaOtherPrimesInfo[];
    /** Type: DOMString */
    p?: string;
    /** Type: DOMString */
    q?: string;
    /** Type: DOMString */
    qi?: string;
    /** Type: DOMString */
    use?: string;
    /** Type: DOMString */
    x?: string;
    /** Type: DOMString */
    y?: string;
}

interface KeyAlgorithm {
    /** Type: DOMString */
    name: string;
}

interface LockInfo {
    /** Type: DOMString */
    clientId?: string;
    /** Type: LockMode */
    mode?: LockMode;
    /** Type: DOMString */
    name?: string;
}

interface LockManagerSnapshot {
    /** Type: [object Object] */
    held?: LockInfo[];
    /** Type: [object Object] */
    pending?: LockInfo[];
}

interface LockOptions {
    /** Type: boolean */
    ifAvailable?: boolean;
    /** Type: LockMode */
    mode?: LockMode;
    /** Type: AbortSignal */
    signal?: AbortSignal;
    /** Type: boolean */
    steal?: boolean;
}

interface MediaCapabilitiesDecodingInfo extends MediaCapabilitiesInfo {
    /** Type: MediaDecodingConfiguration */
    configuration?: MediaDecodingConfiguration;
}

interface MediaCapabilitiesEncodingInfo extends MediaCapabilitiesInfo {
    /** Type: MediaEncodingConfiguration */
    configuration?: MediaEncodingConfiguration;
}

interface MediaCapabilitiesInfo {
    /** Type: boolean */
    powerEfficient: boolean;
    /** Type: boolean */
    smooth: boolean;
    /** Type: boolean */
    supported: boolean;
}

interface MediaConfiguration {
    /** Type: AudioConfiguration */
    audio?: AudioConfiguration;
    /** Type: VideoConfiguration */
    video?: VideoConfiguration;
}

interface MediaDecodingConfiguration extends MediaConfiguration {
    /** Type: MediaDecodingType */
    type: MediaDecodingType;
}

interface MediaEncodingConfiguration extends MediaConfiguration {
    /** Type: MediaEncodingType */
    type: MediaEncodingType;
}

interface MediaStreamTrackProcessorInit {
    /** Type: unsigned short */
    maxBufferSize?: number;
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

interface MultiCacheQueryOptions extends CacheQueryOptions {
    /** Type: DOMString */
    cacheName?: string;
}

interface NavigationPreloadState {
    /** Type: boolean */
    enabled?: boolean;
    /** Type: ByteString */
    headerValue?: string;
}

interface NotificationEventInit extends ExtendableEventInit {
    /** Type: DOMString */
    action?: string;
    /** Type: Notification */
    notification: Notification;
}

interface NotificationOptions {
    /** Type: USVString */
    badge?: string;
    /** Type: DOMString */
    body?: string;
    /** Type: any */
    data?: any;
    /** Type: NotificationDirection */
    dir?: NotificationDirection;
    /** Type: USVString */
    icon?: string;
    /** Type: DOMString */
    lang?: string;
    /** Type: boolean */
    requireInteraction?: boolean;
    /** Type: boolean */
    silent?: boolean | null;
    /** Type: DOMString */
    tag?: string;
}

interface OpusEncoderConfig {
    /** Type: unsigned long */
    complexity?: number;
    /** Type: OpusBitstreamFormat */
    format?: OpusBitstreamFormat;
    /** Type: unsigned long long */
    frameDuration?: number;
    /** Type: unsigned long */
    packetlossperc?: number;
    /** Type: boolean */
    usedtx?: boolean;
    /** Type: boolean */
    useinbandfec?: boolean;
}

interface Pbkdf2Params extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
    /** Type: unsigned long */
    iterations: number;
    /** Type: BufferSource */
    salt: BufferSource;
}

interface PerformanceMarkOptions {
    /** Type: any */
    detail?: any;
    /** Type: DOMHighResTimeStamp */
    startTime?: DOMHighResTimeStamp;
}

interface PerformanceMeasureOptions {
    /** Type: any */
    detail?: any;
    /** Type: DOMHighResTimeStamp */
    duration?: DOMHighResTimeStamp;
    /** Type: [object Object],[object Object] */
    end?: string | DOMHighResTimeStamp;
    /** Type: [object Object],[object Object] */
    start?: string | DOMHighResTimeStamp;
}

interface PerformanceObserverInit {
    /** Type: boolean */
    buffered?: boolean;
    /** Type: [object Object] */
    entryTypes?: string[];
    /** Type: DOMString */
    type?: string;
}

interface PermissionDescriptor {
    /** Type: DOMString */
    name: PermissionName;
}

interface PlaneLayout {
    /** Type: unsigned long */
    offset: number;
    /** Type: unsigned long */
    stride: number;
}

interface ProgressEventInit extends EventInit {
    /** Type: boolean */
    lengthComputable?: boolean;
    /** Type: double */
    loaded?: number;
    /** Type: double */
    total?: number;
}

interface PromiseRejectionEventInit extends EventInit {
    /** Type: object */
    promise: Promise<any>;
    /** Type: any */
    reason?: any;
}

interface PushEventInit extends ExtendableEventInit {
    /** Type: PushMessageDataInit */
    data?: PushMessageDataInit;
}

interface PushSubscriptionJSON {
    /** Type: USVString */
    endpoint?: string;
    /** Type: EpochTimeStamp */
    expirationTime?: EpochTimeStamp | null;
    /** Type: [object Object],[object Object] */
    keys?: Record<string, string>;
}

interface PushSubscriptionOptionsInit {
    /** Type: [object Object],[object Object] */
    applicationServerKey?: BufferSource | string | null;
    /** Type: boolean */
    userVisibleOnly?: boolean;
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

interface RTCEncodedAudioFrameMetadata {
    /** Type: [object Object] */
    contributingSources?: number[];
    /** Type: octet */
    payloadType?: number;
    /** Type: short */
    sequenceNumber?: number;
    /** Type: unsigned long */
    synchronizationSource?: number;
}

interface RTCEncodedVideoFrameMetadata {
    /** Type: [object Object] */
    contributingSources?: number[];
    /** Type: [object Object] */
    dependencies?: number[];
    /** Type: unsigned long long */
    frameId?: number;
    /** Type: unsigned short */
    height?: number;
    /** Type: octet */
    payloadType?: number;
    /** Type: unsigned long */
    spatialIndex?: number;
    /** Type: unsigned long */
    synchronizationSource?: number;
    /** Type: unsigned long */
    temporalIndex?: number;
    /** Type: long long */
    timestamp?: number;
    /** Type: unsigned short */
    width?: number;
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

interface RegistrationOptions {
    /** Type: USVString */
    scope?: string;
    /** Type: WorkerType */
    type?: WorkerType;
    /** Type: ServiceWorkerUpdateViaCache */
    updateViaCache?: ServiceWorkerUpdateViaCache;
}

interface ReportingObserverOptions {
    /** Type: boolean */
    buffered?: boolean;
    /** Type: [object Object] */
    types?: string[];
}

interface RequestInit {
    /** Type: BodyInit */
    body?: BodyInit | null;
    /** Type: RequestCache */
    cache?: RequestCache;
    /** Type: RequestCredentials */
    credentials?: RequestCredentials;
    /** Type: HeadersInit */
    headers?: HeadersInit;
    /** Type: DOMString */
    integrity?: string;
    /** Type: boolean */
    keepalive?: boolean;
    /** Type: ByteString */
    method?: string;
    /** Type: RequestMode */
    mode?: RequestMode;
    /** Type: RequestPriority */
    priority?: RequestPriority;
    /** Type: RequestRedirect */
    redirect?: RequestRedirect;
    /** Type: USVString */
    referrer?: string;
    /** Type: ReferrerPolicy */
    referrerPolicy?: ReferrerPolicy;
    /** Type: AbortSignal */
    signal?: AbortSignal | null;
    /** Type: any */
    window?: null;
}

interface ResponseInit {
    /** Type: HeadersInit */
    headers?: HeadersInit;
    /** Type: unsigned short */
    status?: number;
    /** Type: ByteString */
    statusText?: string;
}

interface RsaHashedImportParams extends Algorithm {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    /** Type: HashAlgorithmIdentifier */
    hash: HashAlgorithmIdentifier;
}

interface RsaKeyGenParams extends Algorithm {
    /** Type: unsigned long */
    modulusLength: number;
    /** Type: BigInteger */
    publicExponent: BigInteger;
}

interface RsaOaepParams extends Algorithm {
    /** Type: BufferSource */
    label?: BufferSource;
}

interface RsaOtherPrimesInfo {
    /** Type: DOMString */
    d?: string;
    /** Type: DOMString */
    r?: string;
    /** Type: DOMString */
    t?: string;
}

interface RsaPssParams extends Algorithm {
    /** Type: unsigned long */
    saltLength: number;
}

interface SecurityPolicyViolationEventInit extends EventInit {
    /** Type: USVString */
    blockedURI?: string;
    /** Type: unsigned long */
    columnNumber?: number;
    /** Type: SecurityPolicyViolationEventDisposition */
    disposition?: SecurityPolicyViolationEventDisposition;
    /** Type: USVString */
    documentURI?: string;
    /** Type: DOMString */
    effectiveDirective?: string;
    /** Type: unsigned long */
    lineNumber?: number;
    /** Type: DOMString */
    originalPolicy?: string;
    /** Type: USVString */
    referrer?: string;
    /** Type: DOMString */
    sample?: string;
    /** Type: USVString */
    sourceFile?: string;
    /** Type: unsigned short */
    statusCode?: number;
    /** Type: DOMString */
    violatedDirective?: string;
}

interface StorageEstimate {
    /** Type: unsigned long long */
    quota?: number;
    /** Type: unsigned long long */
    usage?: number;
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

interface VideoColorSpaceInit {
    /** Type: boolean */
    fullRange?: boolean | null;
    /** Type: VideoMatrixCoefficients */
    matrix?: VideoMatrixCoefficients | null;
    /** Type: VideoColorPrimaries */
    primaries?: VideoColorPrimaries | null;
    /** Type: VideoTransferCharacteristics */
    transfer?: VideoTransferCharacteristics | null;
}

interface VideoConfiguration {
    /** Type: unsigned long long */
    bitrate: number;
    /** Type: ColorGamut */
    colorGamut?: ColorGamut;
    /** Type: DOMString */
    contentType: string;
    /** Type: double */
    framerate: number;
    /** Type: boolean */
    hasAlphaChannel?: boolean;
    /** Type: HdrMetadataType */
    hdrMetadataType?: HdrMetadataType;
    /** Type: unsigned long */
    height: number;
    /** Type: DOMString */
    scalabilityMode?: string;
    /** Type: TransferFunction */
    transferFunction?: TransferFunction;
    /** Type: unsigned long */
    width: number;
}

interface VideoDecoderConfig {
    /** Type: DOMString */
    codec: string;
    /** Type: unsigned long */
    codedHeight?: number;
    /** Type: unsigned long */
    codedWidth?: number;
    /** Type: VideoColorSpaceInit */
    colorSpace?: VideoColorSpaceInit;
    /** Type: AllowSharedBufferSource */
    description?: AllowSharedBufferSource;
    /** Type: unsigned long */
    displayAspectHeight?: number;
    /** Type: unsigned long */
    displayAspectWidth?: number;
    /** Type: HardwareAcceleration */
    hardwareAcceleration?: HardwareAcceleration;
    /** Type: boolean */
    optimizeForLatency?: boolean;
}

interface VideoDecoderInit {
    /** Type: WebCodecsErrorCallback */
    error: WebCodecsErrorCallback;
    /** Type: VideoFrameOutputCallback */
    output: VideoFrameOutputCallback;
}

interface VideoDecoderSupport {
    /** Type: VideoDecoderConfig */
    config?: VideoDecoderConfig;
    /** Type: boolean */
    supported?: boolean;
}

interface VideoEncoderConfig {
    /** Type: AlphaOption */
    alpha?: AlphaOption;
    /** Type: AvcEncoderConfig */
    avc?: AvcEncoderConfig;
    /** Type: unsigned long long */
    bitrate?: number;
    /** Type: VideoEncoderBitrateMode */
    bitrateMode?: VideoEncoderBitrateMode;
    /** Type: DOMString */
    codec: string;
    /** Type: DOMString */
    contentHint?: string;
    /** Type: unsigned long */
    displayHeight?: number;
    /** Type: unsigned long */
    displayWidth?: number;
    /** Type: double */
    framerate?: number;
    /** Type: HardwareAcceleration */
    hardwareAcceleration?: HardwareAcceleration;
    /** Type: unsigned long */
    height: number;
    /** Type: LatencyMode */
    latencyMode?: LatencyMode;
    /** Type: DOMString */
    scalabilityMode?: string;
    /** Type: unsigned long */
    width: number;
}

interface VideoEncoderEncodeOptions {
    /** Type: VideoEncoderEncodeOptionsForAvc */
    avc?: VideoEncoderEncodeOptionsForAvc;
    /** Type: boolean */
    keyFrame?: boolean;
}

interface VideoEncoderEncodeOptionsForAvc {
    /** Type: unsigned short */
    quantizer?: number | null;
}

interface VideoEncoderInit {
    /** Type: WebCodecsErrorCallback */
    error: WebCodecsErrorCallback;
    /** Type: EncodedVideoChunkOutputCallback */
    output: EncodedVideoChunkOutputCallback;
}

interface VideoEncoderSupport {
    /** Type: VideoEncoderConfig */
    config?: VideoEncoderConfig;
    /** Type: boolean */
    supported?: boolean;
}

interface VideoFrameBufferInit {
    /** Type: unsigned long */
    codedHeight: number;
    /** Type: unsigned long */
    codedWidth: number;
    /** Type: VideoColorSpaceInit */
    colorSpace?: VideoColorSpaceInit;
    /** Type: unsigned long */
    displayHeight?: number;
    /** Type: unsigned long */
    displayWidth?: number;
    /** Type: unsigned long long */
    duration?: number;
    /** Type: VideoPixelFormat */
    format: VideoPixelFormat;
    /** Type: [object Object] */
    layout?: PlaneLayout[];
    /** Type: long long */
    timestamp: number;
    /** Type: DOMRectInit */
    visibleRect?: DOMRectInit;
}

interface VideoFrameCopyToOptions {
    /** Type: PredefinedColorSpace */
    colorSpace?: PredefinedColorSpace;
    /** Type: VideoPixelFormat */
    format?: VideoPixelFormat;
    /** Type: [object Object] */
    layout?: PlaneLayout[];
    /** Type: DOMRectInit */
    rect?: DOMRectInit;
}

interface VideoFrameInit {
    /** Type: AlphaOption */
    alpha?: AlphaOption;
    /** Type: unsigned long */
    displayHeight?: number;
    /** Type: unsigned long */
    displayWidth?: number;
    /** Type: unsigned long long */
    duration?: number;
    /** Type: long long */
    timestamp?: number;
    /** Type: DOMRectInit */
    visibleRect?: DOMRectInit;
}

interface WebGLContextAttributes {
    /** Type: boolean */
    alpha?: boolean;
    /** Type: boolean */
    antialias?: boolean;
    /** Type: boolean */
    depth?: boolean;
    /** Type: boolean */
    desynchronized?: boolean;
    /** Type: boolean */
    failIfMajorPerformanceCaveat?: boolean;
    /** Type: WebGLPowerPreference */
    powerPreference?: WebGLPowerPreference;
    /** Type: boolean */
    premultipliedAlpha?: boolean;
    /** Type: boolean */
    preserveDrawingBuffer?: boolean;
    /** Type: boolean */
    stencil?: boolean;
}

interface WebGLContextEventInit extends EventInit {
    /** Type: DOMString */
    statusMessage?: string;
}

interface WebTransportCloseInfo {
    /** Type: unsigned long */
    closeCode?: number;
    /** Type: USVString */
    reason?: string;
}

interface WebTransportErrorOptions {
    /** Type: WebTransportErrorSource */
    source?: WebTransportErrorSource;
    /** Type: unsigned long */
    streamErrorCode?: number | null;
}

interface WebTransportHash {
    /** Type: DOMString */
    algorithm?: string;
    /** Type: BufferSource */
    value?: BufferSource;
}

interface WebTransportOptions {
    /** Type: boolean */
    allowPooling?: boolean;
    /** Type: WebTransportCongestionControl */
    congestionControl?: WebTransportCongestionControl;
    /** Type: boolean */
    requireUnreliable?: boolean;
    /** Type: [object Object] */
    serverCertificateHashes?: WebTransportHash[];
}

interface WebTransportSendOptions {
    /** Type: long long */
    sendOrder?: number;
}

interface WebTransportSendStreamOptions extends WebTransportSendOptions {
}

interface WorkerOptions {
    /** Type: RequestCredentials */
    credentials?: RequestCredentials;
    /** Type: DOMString */
    name?: string;
    /** Type: WorkerType */
    type?: WorkerType;
}

interface WriteParams {
    /** Type: [object Object],[object Object],[object Object] */
    data?: BufferSource | Blob | string | null;
    /** Type: unsigned long long */
    position?: number | null;
    /** Type: unsigned long long */
    size?: number | null;
    /** Type: WriteCommandType */
    type: WriteCommandType;
}

/**
 * The **`ANGLE_instanced_arrays`** extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays)
 */
interface ANGLE_instanced_arrays {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
     */
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
     */
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
     */
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88FE;
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
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/timeout_static)
     */
    timeout(milliseconds: number): AbortSignal;
};

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/error_event)
     */
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AnimationFrameProvider {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
     */
    cancelAnimationFrame(handle: number): void;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
     */
    requestAnimationFrame(callback: FrameRequestCallback): number;
}

/**
 * The **`AudioData`** interface of the WebCodecs API represents an audio sample.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData)
 */
interface AudioData {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/duration)
     */
    readonly duration: number;
    /**
     * Type: AudioSampleFormat
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/format)
     */
    readonly format: AudioSampleFormat | null;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfChannels)
     */
    readonly numberOfChannels: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfFrames)
     */
    readonly numberOfFrames: number;
    /**
     * Type: float
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/sampleRate)
     */
    readonly sampleRate: number;
    /**
     * Type: long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/timestamp)
     */
    readonly timestamp: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/allocationSize)
     */
    allocationSize(options: AudioDataCopyToOptions): number;
    /**
     * Type: AudioData
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/clone)
     */
    clone(): AudioData;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource, options: AudioDataCopyToOptions): void;
}

declare var AudioData: {
    prototype: AudioData;
    new(init: AudioDataInit): AudioData;
};

interface AudioDecoderEventMap {
    "dequeue": Event;
}

/**
 * The **`AudioDecoder`** interface of the WebCodecs API decodes chunks of audio.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder)
 */
interface AudioDecoder extends EventTarget {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/decodeQueueSize)
     */
    readonly decodeQueueSize: number;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/dequeue_event)
     */
    ondequeue: ((this: AudioDecoder, ev: Event) => any) | null;
    /**
     * Type: CodecState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/state)
     */
    readonly state: CodecState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/configure)
     */
    configure(config: AudioDecoderConfig): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/decode)
     */
    decode(chunk: EncodedAudioChunk): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/flush)
     */
    flush(): Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioDecoder: {
    prototype: AudioDecoder;
    new(init: AudioDecoderInit): AudioDecoder;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/isConfigSupported_static)
     */
    isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
};

interface AudioEncoderEventMap {
    "dequeue": Event;
}

/**
 * The **`AudioEncoder`** interface of the WebCodecs API encodes AudioData objects.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder)
 */
interface AudioEncoder extends EventTarget {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/encodeQueueSize)
     */
    readonly encodeQueueSize: number;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/dequeue_event)
     */
    ondequeue: ((this: AudioEncoder, ev: Event) => any) | null;
    /**
     * Type: CodecState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/state)
     */
    readonly state: CodecState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/configure)
     */
    configure(config: AudioEncoderConfig): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/encode)
     */
    encode(data: AudioData): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/flush)
     */
    flush(): Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioEncoder: {
    prototype: AudioEncoder;
    new(init: AudioEncoderInit): AudioEncoder;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/isConfigSupported_static)
     */
    isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
};

/**
 * The **`Blob`** interface represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob)
 */
interface Blob {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)
     */
    readonly size: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)
     */
    readonly type: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer)
     */
    arrayBuffer(): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes)
     */
    bytes(): Promise<Uint8Array<ArrayBuffer>>;
    /**
     * Type: Blob
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice)
     */
    slice(start?: number, end?: number, contentType?: string): Blob;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream)
     */
    stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)
     */
    text(): Promise<string>;
}

declare var Blob: {
    prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

interface Body {
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body)
     */
    readonly body: ReadableStream<Uint8Array<ArrayBuffer>> | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed)
     */
    readonly bodyUsed: boolean;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer)
     */
    arrayBuffer(): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob)
     */
    blob(): Promise<Blob>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bytes)
     */
    bytes(): Promise<Uint8Array<ArrayBuffer>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData)
     */
    formData(): Promise<FormData>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json)
     */
    json(): Promise<any>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text)
     */
    text(): Promise<string>;
}

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`BroadcastChannel`** interface represents a named channel that any browsing context of a given origin can subscribe to.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel)
 */
interface BroadcastChannel extends EventTarget {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/name)
     */
    readonly name: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/message_event)
     */
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/messageerror_event)
     */
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/postMessage)
     */
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

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
 * The **`CSSImageValue`** interface of the CSS Typed Object Model API represents values for properties that take an image, for example background-image, list-style-image, or border-image-source.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSImageValue)
 */
interface CSSImageValue extends CSSStyleValue {
}

declare var CSSImageValue: {
    prototype: CSSImageValue;
    new(): CSSImageValue;
};

/**
 * The **`CSSKeywordValue`** interface of the CSS Typed Object Model API creates an object to represent CSS keywords and other identifiers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue)
 */
interface CSSKeywordValue extends CSSStyleValue {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue/value)
     */
    value: string;
}

declare var CSSKeywordValue: {
    prototype: CSSKeywordValue;
    new(value: string): CSSKeywordValue;
};

interface CSSMathClamp extends CSSMathValue {
    /** Type: CSSNumericValue */
    readonly lower: CSSNumericValue;
    /** Type: CSSNumericValue */
    readonly upper: CSSNumericValue;
    /** Type: CSSNumericValue */
    readonly value: CSSNumericValue;
}

declare var CSSMathClamp: {
    prototype: CSSMathClamp;
    new(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): CSSMathClamp;
};

/**
 * The **`CSSMathInvert`** interface of the CSS Typed Object Model API represents a CSS calc used as `calc(1 / <value>).` It inherits properties and methods from its parent CSSNumericValue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert)
 */
interface CSSMathInvert extends CSSMathValue {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert/value)
     */
    readonly value: CSSNumericValue;
}

declare var CSSMathInvert: {
    prototype: CSSMathInvert;
    new(arg: CSSNumberish): CSSMathInvert;
};

/**
 * The **`CSSMathMax`** interface of the CSS Typed Object Model API represents the CSS max function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax)
 */
interface CSSMathMax extends CSSMathValue {
    /**
     * Type: CSSNumericArray
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathMax: {
    prototype: CSSMathMax;
    new(...args: CSSNumberish[]): CSSMathMax;
};

/**
 * The **`CSSMathMin`** interface of the CSS Typed Object Model API represents the CSS min function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin)
 */
interface CSSMathMin extends CSSMathValue {
    /**
     * Type: CSSNumericArray
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathMin: {
    prototype: CSSMathMin;
    new(...args: CSSNumberish[]): CSSMathMin;
};

/**
 * The **`CSSMathNegate`** interface of the CSS Typed Object Model API negates the value passed into it.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate)
 */
interface CSSMathNegate extends CSSMathValue {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate/value)
     */
    readonly value: CSSNumericValue;
}

declare var CSSMathNegate: {
    prototype: CSSMathNegate;
    new(arg: CSSNumberish): CSSMathNegate;
};

/**
 * The **`CSSMathProduct`** interface of the CSS Typed Object Model API represents the result obtained by calling CSSNumericValue.add, CSSNumericValue.sub, or CSSNumericValue.toSum on CSSNumericValue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct)
 */
interface CSSMathProduct extends CSSMathValue {
    /**
     * Type: CSSNumericArray
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathProduct: {
    prototype: CSSMathProduct;
    new(...args: CSSNumberish[]): CSSMathProduct;
};

/**
 * The **`CSSMathSum`** interface of the CSS Typed Object Model API represents the result obtained by calling CSSNumericValue.add, CSSNumericValue.sub, or CSSNumericValue.toSum on CSSNumericValue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum)
 */
interface CSSMathSum extends CSSMathValue {
    /**
     * Type: CSSNumericArray
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathSum: {
    prototype: CSSMathSum;
    new(...args: CSSNumberish[]): CSSMathSum;
};

/**
 * The **`CSSMathValue`** interface of the CSS Typed Object Model API a base class for classes representing complex numeric values.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue)
 */
interface CSSMathValue extends CSSNumericValue {
    /**
     * Type: CSSMathOperator
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue/operator)
     */
    readonly operator: CSSMathOperator;
}

declare var CSSMathValue: {
    prototype: CSSMathValue;
    new(): CSSMathValue;
};

/**
 * The **`CSSMatrixComponent`** interface of the CSS Typed Object Model API represents the matrix() and matrix3d() values of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMatrixComponent)
 */
interface CSSMatrixComponent extends CSSTransformComponent {
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMatrixComponent/matrix)
     */
    matrix: DOMMatrix;
}

declare var CSSMatrixComponent: {
    prototype: CSSMatrixComponent;
    new(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions): CSSMatrixComponent;
};

/**
 * The **`CSSNumericArray`** interface of the CSS Typed Object Model API contains a list of CSSNumericValue objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray)
 */
interface CSSNumericArray {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray/length)
     */
    readonly length: number;
    forEach(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;
    [index: number]: CSSNumericValue;
}

declare var CSSNumericArray: {
    prototype: CSSNumericArray;
    new(): CSSNumericArray;
};

/**
 * The **`CSSNumericValue`** interface of the CSS Typed Object Model API represents operations that all numeric values can perform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue)
 */
interface CSSNumericValue extends CSSStyleValue {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/add)
     */
    add(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/div)
     */
    div(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/equals)
     */
    equals(...value: CSSNumberish[]): boolean;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/max)
     */
    max(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/min)
     */
    min(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/mul)
     */
    mul(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/sub)
     */
    sub(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * Type: CSSUnitValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/to)
     */
    to(unit: string): CSSUnitValue;
    /**
     * Type: CSSMathSum
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/toSum)
     */
    toSum(...units: string[]): CSSMathSum;
    /**
     * Type: CSSNumericType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type)
     */
    type(): CSSNumericType;
}

declare var CSSNumericValue: {
    prototype: CSSNumericValue;
    new(): CSSNumericValue;
};

/**
 * The **`CSSPerspective`** interface of the CSS Typed Object Model API represents the perspective() value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSPerspective)
 */
interface CSSPerspective extends CSSTransformComponent {
    /**
     * Type: CSSPerspectiveValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSPerspective/length)
     */
    length: CSSPerspectiveValue;
}

declare var CSSPerspective: {
    prototype: CSSPerspective;
    new(length: CSSPerspectiveValue): CSSPerspective;
};

/**
 * The **`CSSRotate`** interface of the CSS Typed Object Model API represents the rotate value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate)
 */
interface CSSRotate extends CSSTransformComponent {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/angle)
     */
    angle: CSSNumericValue;
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/x)
     */
    x: CSSNumberish;
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/y)
     */
    y: CSSNumberish;
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/z)
     */
    z: CSSNumberish;
}

declare var CSSRotate: {
    prototype: CSSRotate;
    new(angle: CSSNumericValue): CSSRotate;
    new(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): CSSRotate;
};

/**
 * The **`CSSScale`** interface of the CSS Typed Object Model API represents the scale() and scale3d() values of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale)
 */
interface CSSScale extends CSSTransformComponent {
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/x)
     */
    x: CSSNumberish;
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/y)
     */
    y: CSSNumberish;
    /**
     * Type: CSSNumberish
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/z)
     */
    z: CSSNumberish;
}

declare var CSSScale: {
    prototype: CSSScale;
    new(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): CSSScale;
};

/**
 * The **`CSSSkew`** interface of the CSS Typed Object Model API is part of the CSSTransformValue interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew)
 */
interface CSSSkew extends CSSTransformComponent {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ax)
     */
    ax: CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ay)
     */
    ay: CSSNumericValue;
}

declare var CSSSkew: {
    prototype: CSSSkew;
    new(ax: CSSNumericValue, ay: CSSNumericValue): CSSSkew;
};

/**
 * The **`CSSSkewX`** interface of the CSS Typed Object Model API represents the `skewX()` value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX)
 */
interface CSSSkewX extends CSSTransformComponent {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX/ax)
     */
    ax: CSSNumericValue;
}

declare var CSSSkewX: {
    prototype: CSSSkewX;
    new(ax: CSSNumericValue): CSSSkewX;
};

/**
 * The **`CSSSkewY`** interface of the CSS Typed Object Model API represents the `skewY()` value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY)
 */
interface CSSSkewY extends CSSTransformComponent {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY/ay)
     */
    ay: CSSNumericValue;
}

declare var CSSSkewY: {
    prototype: CSSSkewY;
    new(ay: CSSNumericValue): CSSSkewY;
};

/**
 * The **`CSSStyleValue`** interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue)
 */
interface CSSStyleValue {
    toString(): string;
}

declare var CSSStyleValue: {
    prototype: CSSStyleValue;
    new(): CSSStyleValue;
};

/**
 * The **`CSSTransformComponent`** interface of the CSS Typed Object Model API is part of the CSSTransformValue interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent)
 */
interface CSSTransformComponent {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/is2D)
     */
    is2D: boolean;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/toMatrix)
     */
    toMatrix(): DOMMatrix;
    toString(): string;
}

declare var CSSTransformComponent: {
    prototype: CSSTransformComponent;
    new(): CSSTransformComponent;
};

/**
 * The **`CSSTransformValue`** interface of the CSS Typed Object Model API represents `transform-list` values as used by the CSS transform property.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue)
 */
interface CSSTransformValue extends CSSStyleValue {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/is2D)
     */
    readonly is2D: boolean;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/length)
     */
    readonly length: number;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/toMatrix)
     */
    toMatrix(): DOMMatrix;
    forEach(callbackfn: (value: CSSTransformComponent, key: number, parent: CSSTransformValue) => void, thisArg?: any): void;
    [index: number]: CSSTransformComponent;
}

declare var CSSTransformValue: {
    prototype: CSSTransformValue;
    new(transforms: CSSTransformComponent[]): CSSTransformValue;
};

/**
 * The **`CSSTranslate`** interface of the CSS Typed Object Model API represents the translate() value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate)
 */
interface CSSTranslate extends CSSTransformComponent {
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/x)
     */
    x: CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/y)
     */
    y: CSSNumericValue;
    /**
     * Type: CSSNumericValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/z)
     */
    z: CSSNumericValue;
}

declare var CSSTranslate: {
    prototype: CSSTranslate;
    new(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): CSSTranslate;
};

/**
 * The **`CSSUnitValue`** interface of the CSS Typed Object Model API represents values that contain a single unit type.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue)
 */
interface CSSUnitValue extends CSSNumericValue {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/unit)
     */
    readonly unit: string;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/value)
     */
    value: number;
}

declare var CSSUnitValue: {
    prototype: CSSUnitValue;
    new(value: number, unit: string): CSSUnitValue;
};

/**
 * The **`CSSUnparsedValue`** interface of the CSS Typed Object Model API represents property values that reference custom properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue)
 */
interface CSSUnparsedValue extends CSSStyleValue {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue/length)
     */
    readonly length: number;
    forEach(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;
    [index: number]: CSSUnparsedSegment;
}

declare var CSSUnparsedValue: {
    prototype: CSSUnparsedValue;
    new(members: CSSUnparsedSegment[]): CSSUnparsedValue;
};

/**
 * The **`CSSVariableReferenceValue`** interface of the CSS Typed Object Model API allows you to create a custom name for a built-in CSS value.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue)
 */
interface CSSVariableReferenceValue {
    /**
     * Type: CSSUnparsedValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/fallback)
     */
    readonly fallback: CSSUnparsedValue | null;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/variable)
     */
    variable: string;
}

declare var CSSVariableReferenceValue: {
    prototype: CSSVariableReferenceValue;
    new(variable: string, fallback?: CSSUnparsedValue | null): CSSVariableReferenceValue;
};

/**
 * The **`Cache`** interface provides a persistent storage mechanism for Request / Response object pairs that are cached in long lived memory.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache)
 */
interface Cache {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/add)
     */
    add(request: RequestInfo | URL): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/addAll)
     */
    addAll(requests: RequestInfo[]): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/delete)
     */
    delete(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/keys)
     */
    keys(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/match)
     */
    match(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/matchAll)
     */
    matchAll(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/put)
     */
    put(request: RequestInfo | URL, response: Response): Promise<void>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

/**
 * The **`CacheStorage`** interface represents the storage for Cache objects.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage)
 */
interface CacheStorage {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/delete)
     */
    delete(cacheName: string): Promise<boolean>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/has)
     */
    has(cacheName: string): Promise<boolean>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/keys)
     */
    keys(): Promise<string[]>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/match)
     */
    match(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/open)
     */
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

interface CanvasCompositing {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
     */
    globalAlpha: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
     */
    globalCompositeOperation: GlobalCompositeOperation;
}

interface CanvasDrawImage {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/drawImage)
     */
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath)
     */
    beginPath(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clip)
     */
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fill)
     */
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
     */
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
     */
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/stroke)
     */
    stroke(): void;
    stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    /**
     * Type: [object Object],[object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
     */
    fillStyle: string | CanvasGradient | CanvasPattern;
    /**
     * Type: [object Object],[object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
     */
    strokeStyle: string | CanvasGradient | CanvasPattern;
    /**
     * Type: CanvasGradient
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
     */
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    /**
     * Type: CanvasGradient
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /**
     * Type: CanvasPattern
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createPattern)
     */
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    /**
     * Type: CanvasGradient
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
     */
    filter: string;
}

/**
 * The **`CanvasGradient`** interface represents an opaque object describing a gradient.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasGradient)
 */
interface CanvasGradient {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasGradient/addColorStop)
     */
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};

interface CanvasImageData {
    /**
     * Type: ImageData
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createImageData)
     */
    createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    createImageData(imageData: ImageData): ImageData;
    /**
     * Type: ImageData
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData)
     */
    getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/putImageData)
     */
    putImageData(imageData: ImageData, dx: number, dy: number): void;
    putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
     */
    imageSmoothingEnabled: boolean;
    /**
     * Type: ImageSmoothingQuality
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
     */
    imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arc)
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arcTo)
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/closePath)
     */
    closePath(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/ellipse)
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineTo)
     */
    lineTo(x: number, y: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/moveTo)
     */
    moveTo(x: number, y: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rect)
     */
    rect(x: number, y: number, w: number, h: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)
     */
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;
}

interface CanvasPathDrawingStyles {
    /**
     * Type: CanvasLineCap
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineCap)
     */
    lineCap: CanvasLineCap;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
     */
    lineDashOffset: number;
    /**
     * Type: CanvasLineJoin
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineJoin)
     */
    lineJoin: CanvasLineJoin;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineWidth)
     */
    lineWidth: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/miterLimit)
     */
    miterLimit: number;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getLineDash)
     */
    getLineDash(): number[];
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash)
     */
    setLineDash(segments: number[]): void;
}

/**
 * The **`CanvasPattern`** interface represents an opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasPattern)
 */
interface CanvasPattern {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasPattern/setTransform)
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};

interface CanvasRect {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clearRect)
     */
    clearRect(x: number, y: number, w: number, h: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillRect)
     */
    fillRect(x: number, y: number, w: number, h: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeRect)
     */
    strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasShadowStyles {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
     */
    shadowBlur: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
     */
    shadowColor: string;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
     */
    shadowOffsetX: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
     */
    shadowOffsetY: number;
}

interface CanvasState {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isContextLost)
     */
    isContextLost(): boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/reset)
     */
    reset(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/restore)
     */
    restore(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/save)
     */
    save(): void;
}

interface CanvasText {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillText)
     */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * Type: TextMetrics
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/measureText)
     */
    measureText(text: string): TextMetrics;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeText)
     */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

interface CanvasTextDrawingStyles {
    /**
     * Type: CanvasDirection
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/direction)
     */
    direction: CanvasDirection;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/font)
     */
    font: string;
    /**
     * Type: CanvasFontKerning
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontKerning)
     */
    fontKerning: CanvasFontKerning;
    /**
     * Type: CanvasFontStretch
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontStretch)
     */
    fontStretch: CanvasFontStretch;
    /**
     * Type: CanvasFontVariantCaps
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
     */
    fontVariantCaps: CanvasFontVariantCaps;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
     */
    letterSpacing: string;
    /**
     * Type: CanvasTextAlign
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textAlign)
     */
    textAlign: CanvasTextAlign;
    /**
     * Type: CanvasTextBaseline
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textBaseline)
     */
    textBaseline: CanvasTextBaseline;
    /**
     * Type: CanvasTextRendering
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textRendering)
     */
    textRendering: CanvasTextRendering;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
     */
    wordSpacing: string;
}

interface CanvasTransform {
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getTransform)
     */
    getTransform(): DOMMatrix;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/resetTransform)
     */
    resetTransform(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rotate)
     */
    rotate(angle: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/scale)
     */
    scale(x: number, y: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setTransform)
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/transform)
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/translate)
     */
    translate(x: number, y: number): void;
}

/**
 * The `Client` interface represents an executable context such as a Worker, or a SharedWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client)
 */
interface Client {
    /**
     * Type: FrameType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/frameType)
     */
    readonly frameType: FrameType;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/id)
     */
    readonly id: string;
    /**
     * Type: ClientType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/type)
     */
    readonly type: ClientTypes;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/url)
     */
    readonly url: string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare var Client: {
    prototype: Client;
    new(): Client;
};

/**
 * The `Clients` interface provides access to Client objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients)
 */
interface Clients {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/claim)
     */
    claim(): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/get)
     */
    get(id: string): Promise<Client | undefined>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/matchAll)
     */
    matchAll<T extends ClientQueryOptions>(options?: T): Promise<ReadonlyArray<T["type"] extends "window" ? WindowClient : Client>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/openWindow)
     */
    openWindow(url: string | URL): Promise<WindowClient | null>;
}

declare var Clients: {
    prototype: Clients;
    new(): Clients;
};

/**
 * A `CloseEvent` is sent to clients using WebSockets when the connection is closed.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent)
 */
interface CloseEvent extends Event {
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/code)
     */
    readonly code: number;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/reason)
     */
    readonly reason: string;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/wasClean)
     */
    readonly wasClean: boolean;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
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
 * The **`CookieStore`** interface of the Cookie Store API provides methods for getting and setting cookies asynchronously from either a page or a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore)
 */
interface CookieStore extends EventTarget {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/delete)
     */
    delete(name: string): Promise<void>;
    delete(options: CookieStoreDeleteOptions): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/get)
     */
    get(name: string): Promise<CookieListItem | null>;
    get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/getAll)
     */
    getAll(name: string): Promise<CookieList>;
    getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/set)
     */
    set(name: string, value: string): Promise<void>;
    set(options: CookieInit): Promise<void>;
}

declare var CookieStore: {
    prototype: CookieStore;
    new(): CookieStore;
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
 * The **`Crypto`** interface represents basic cryptography features available in the current context.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto)
 */
interface Crypto {
    /**
     * Type: SubtleCrypto
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/subtle)
     */
    readonly subtle: SubtleCrypto;
    /**
     * Type: ArrayBufferView
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues)
     */
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
    /**
     * Type: DOMString
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)
     */
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

/**
 * The **`CryptoKey`** interface of the Web Crypto API represents a cryptographic key obtained from one of the SubtleCrypto methods SubtleCrypto.generateKey, SubtleCrypto.deriveKey, SubtleCrypto.importKey, or SubtleCrypto.unwrapKey.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey)
 */
interface CryptoKey {
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/algorithm)
     */
    readonly algorithm: KeyAlgorithm;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/extractable)
     */
    readonly extractable: boolean;
    /**
     * Type: KeyType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/type)
     */
    readonly type: KeyType;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/usages)
     */
    readonly usages: KeyUsage[];
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
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
 * The **`DOMMatrix`** interface represents 4×4 matrices, suitable for 2D and 3D operations including rotation and translation.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix)
 */
interface DOMMatrix extends DOMMatrixReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    a: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    b: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    c: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    d: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    e: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    f: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m11: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m12: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m13: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m14: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m21: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m22: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m23: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m24: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m31: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m32: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m33: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m34: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m41: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m42: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m43: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties)
     */
    m44: number;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/invertSelf)
     */
    invertSelf(): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/multiplySelf)
     */
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/preMultiplySelf)
     */
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
     */
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
     */
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateSelf)
     */
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/scale3dSelf)
     */
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/scaleSelf)
     */
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewXSelf)
     */
    skewXSelf(sx?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewYSelf)
     */
    skewYSelf(sy?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/translateSelf)
     */
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    /** Type: DOMMatrix */
    fromFloat32Array(array32: Float32Array<ArrayBuffer>): DOMMatrix;
    /** Type: DOMMatrix */
    fromFloat64Array(array64: Float64Array<ArrayBuffer>): DOMMatrix;
    /** Type: DOMMatrix */
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

/**
 * The **`DOMMatrixReadOnly`** interface represents a read-only 4×4 matrix, suitable for 2D and 3D operations.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly)
 */
interface DOMMatrixReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly a: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly b: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly c: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly d: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly e: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly f: number;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/is2D)
     */
    readonly is2D: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/isIdentity)
     */
    readonly isIdentity: boolean;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m11: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m12: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m13: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m14: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m21: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m22: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m23: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m24: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m31: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m32: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m33: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m34: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m41: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m42: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m43: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties)
     */
    readonly m44: number;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipX)
     */
    flipX(): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipY)
     */
    flipY(): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/inverse)
     */
    inverse(): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/multiply)
     */
    multiply(other?: DOMMatrixInit): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotate)
     */
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
     */
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
     */
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale)
     */
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale3d)
     */
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     * @deprecated
     */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewX)
     */
    skewX(sx?: number): DOMMatrix;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewY)
     */
    skewY(sy?: number): DOMMatrix;
    /**
     * Type: Float32Array
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
     */
    toFloat32Array(): Float32Array<ArrayBuffer>;
    /**
     * Type: Float64Array
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
     */
    toFloat64Array(): Float64Array<ArrayBuffer>;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toJSON)
     */
    toJSON(): any;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/transformPoint)
     */
    transformPoint(point?: DOMPointInit): DOMPoint;
    /**
     * Type: DOMMatrix
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/translate)
     */
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    /** Type: DOMMatrixReadOnly */
    fromFloat32Array(array32: Float32Array<ArrayBuffer>): DOMMatrixReadOnly;
    /** Type: DOMMatrixReadOnly */
    fromFloat64Array(array64: Float64Array<ArrayBuffer>): DOMMatrixReadOnly;
    /** Type: DOMMatrixReadOnly */
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

/**
 * A **`DOMPoint`** object represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint)
 */
interface DOMPoint extends DOMPointReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w)
     */
    w: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x)
     */
    x: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y)
     */
    y: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z)
     */
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint_static)
     */
    fromPoint(other?: DOMPointInit): DOMPoint;
};

/**
 * The **`DOMPointReadOnly`** interface specifies the coordinate and perspective fields used by DOMPoint to define a 2D or 3D point in a coordinate system.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly)
 */
interface DOMPointReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w)
     */
    readonly w: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x)
     */
    readonly x: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y)
     */
    readonly y: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z)
     */
    readonly z: number;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform)
     */
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON)
     */
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    /**
     * Type: DOMPointReadOnly
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/fromPoint_static)
     */
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

/**
 * A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad)
 */
interface DOMQuad {
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p1)
     */
    readonly p1: DOMPoint;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p2)
     */
    readonly p2: DOMPoint;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p3)
     */
    readonly p3: DOMPoint;
    /**
     * Type: DOMPoint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p4)
     */
    readonly p4: DOMPoint;
    /**
     * Type: DOMRect
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/getBounds)
     */
    getBounds(): DOMRect;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/toJSON)
     */
    toJSON(): any;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    /** Type: DOMQuad */
    fromQuad(other?: DOMQuadInit): DOMQuad;
    /** Type: DOMQuad */
    fromRect(other?: DOMRectInit): DOMQuad;
};

/**
 * A **`DOMRect`** describes the size and position of a rectangle.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect)
 */
interface DOMRect extends DOMRectReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/height)
     */
    height: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/width)
     */
    width: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/x)
     */
    x: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/y)
     */
    y: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    /**
     * Type: DOMRect
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/fromRect_static)
     */
    fromRect(other?: DOMRectInit): DOMRect;
};

/**
 * The **`DOMRectReadOnly`** interface specifies the standard properties (also used by DOMRect) to define a rectangle whose properties are immutable.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly)
 */
interface DOMRectReadOnly {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom)
     */
    readonly bottom: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/height)
     */
    readonly height: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left)
     */
    readonly left: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right)
     */
    readonly right: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top)
     */
    readonly top: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/width)
     */
    readonly width: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/x)
     */
    readonly x: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/y)
     */
    readonly y: number;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/toJSON)
     */
    toJSON(): any;
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    /**
     * Type: DOMRectReadOnly
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/fromRect_static)
     */
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

/**
 * The **`DOMStringList`** interface is a legacy type returned by some APIs and represents a non-modifiable list of strings (`DOMString`).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList)
 */
interface DOMStringList {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/length)
     */
    readonly length: number;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/contains)
     */
    contains(string: string): boolean;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/item)
     */
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
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

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap, MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "rtctransform": RTCTransformEvent;
}

/**
 * The **`DedicatedWorkerGlobalScope`** object (the Worker global scope) is accessible through the WorkerGlobalScope.self keyword.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope)
 */
interface DedicatedWorkerGlobalScope extends WorkerGlobalScope, AnimationFrameProvider, MessageEventTarget<DedicatedWorkerGlobalScope> {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
     */
    readonly name: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
     */
    onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new(): DedicatedWorkerGlobalScope;
};

/**
 * The **`EXT_blend_minmax`** extension is part of the WebGL API and extends blending capabilities by adding two new blend equations: the minimum or maximum color components of the source and destination colors.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax)
 */
interface EXT_blend_minmax {
    /** Type: GLenum */
    readonly MIN_EXT: 0x8007;
    /** Type: GLenum */
    readonly MAX_EXT: 0x8008;
}

/**
 * The **`EXT_color_buffer_float`** extension is part of WebGL and adds the ability to render a variety of floating point formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_float)
 */
interface EXT_color_buffer_float {
}

/**
 * The **`EXT_color_buffer_half_float`** extension is part of the WebGL API and adds the ability to render to 16-bit floating-point color buffers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_half_float)
 */
interface EXT_color_buffer_half_float {
    /** Type: GLenum */
    readonly RGBA16F_EXT: 0x881A;
    /** Type: GLenum */
    readonly RGB16F_EXT: 0x881B;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    /** Type: GLenum */
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/**
 * The WebGL API's `EXT_float_blend` extension allows blending and draw buffers with 32-bit floating-point components.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_float_blend)
 */
interface EXT_float_blend {
}

/**
 * The **`EXT_frag_depth`** extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_frag_depth)
 */
interface EXT_frag_depth {
}

/**
 * The **`EXT_sRGB`** extension is part of the WebGL API and adds sRGB support to textures and framebuffer objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_sRGB)
 */
interface EXT_sRGB {
    /** Type: GLenum */
    readonly SRGB_EXT: 0x8C40;
    /** Type: GLenum */
    readonly SRGB_ALPHA_EXT: 0x8C42;
    /** Type: GLenum */
    readonly SRGB8_ALPHA8_EXT: 0x8C43;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210;
}

/**
 * The **`EXT_shader_texture_lod`** extension is part of the WebGL API and adds additional texture functions to the OpenGL ES Shading Language which provide the shader writer with explicit control of LOD (Level of detail).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_shader_texture_lod)
 */
interface EXT_shader_texture_lod {
}

/**
 * The `EXT_texture_compression_bptc` extension is part of the WebGL API and exposes 4 BPTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc)
 */
interface EXT_texture_compression_bptc {
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: 0x8E8C;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: 0x8E8D;
    /** Type: GLenum */
    readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: 0x8E8E;
    /** Type: GLenum */
    readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: 0x8E8F;
}

/**
 * The `EXT_texture_compression_rgtc` extension is part of the WebGL API and exposes 4 RGTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_rgtc)
 */
interface EXT_texture_compression_rgtc {
    /** Type: GLenum */
    readonly COMPRESSED_RED_RGTC1_EXT: 0x8DBB;
    /** Type: GLenum */
    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: 0x8DBC;
    /** Type: GLenum */
    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: 0x8DBD;
    /** Type: GLenum */
    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: 0x8DBE;
}

/**
 * The **`EXT_texture_filter_anisotropic`** extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_filter_anisotropic)
 */
interface EXT_texture_filter_anisotropic {
    /** Type: GLenum */
    readonly TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE;
    /** Type: GLenum */
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF;
}

/**
 * The **`EXT_texture_norm16`** extension is part of the WebGL API and provides a set of new 16-bit signed normalized and unsigned normalized formats (fixed-point texture, renderbuffer and texture buffer).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_norm16)
 */
interface EXT_texture_norm16 {
    /** Type: GLenum */
    readonly R16_EXT: 0x822A;
    /** Type: GLenum */
    readonly RG16_EXT: 0x822C;
    /** Type: GLenum */
    readonly RGB16_EXT: 0x8054;
    /** Type: GLenum */
    readonly RGBA16_EXT: 0x805B;
    /** Type: GLenum */
    readonly R16_SNORM_EXT: 0x8F98;
    /** Type: GLenum */
    readonly RG16_SNORM_EXT: 0x8F99;
    /** Type: GLenum */
    readonly RGB16_SNORM_EXT: 0x8F9A;
    /** Type: GLenum */
    readonly RGBA16_SNORM_EXT: 0x8F9B;
}

/**
 * The **`EncodedAudioChunk`** interface of the WebCodecs API represents a chunk of encoded audio data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk)
 */
interface EncodedAudioChunk {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/byteLength)
     */
    readonly byteLength: number;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/duration)
     */
    readonly duration: number | null;
    /**
     * Type: long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/timestamp)
     */
    readonly timestamp: number;
    /**
     * Type: EncodedAudioChunkType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/type)
     */
    readonly type: EncodedAudioChunkType;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

/**
 * The **`EncodedVideoChunk`** interface of the WebCodecs API represents a chunk of encoded video data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk)
 */
interface EncodedVideoChunk {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/byteLength)
     */
    readonly byteLength: number;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/duration)
     */
    readonly duration: number | null;
    /**
     * Type: long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/timestamp)
     */
    readonly timestamp: number;
    /**
     * Type: EncodedVideoChunkType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/type)
     */
    readonly type: EncodedVideoChunkType;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
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

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The **`EventSource`** interface is web content's interface to server-sent events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource)
 */
interface EventSource extends EventTarget {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event)
     */
    onerror: ((this: EventSource, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event)
     */
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event)
     */
    onopen: ((this: EventSource, ev: Event) => any) | null;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
     */
    readonly readyState: number;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
     */
    readonly url: string;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
     */
    readonly withCredentials: boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
     */
    close(): void;
    /** Type: unsigned short */
    readonly CONNECTING: 0;
    /** Type: unsigned short */
    readonly OPEN: 1;
    /** Type: unsigned short */
    readonly CLOSED: 2;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string | URL, eventSourceInitDict?: EventSourceInit): EventSource;
    /** Type: unsigned short */
    readonly CONNECTING: 0;
    /** Type: unsigned short */
    readonly OPEN: 1;
    /** Type: unsigned short */
    readonly CLOSED: 2;
};

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

/**
 * The **`ExtendableCookieChangeEvent`** interface of the Cookie Store API is the event type passed to ServiceWorkerGlobalScope/cookiechange_event event fired at the ServiceWorkerGlobalScope when any cookie changes occur which match the service worker's cookie change subscription list.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent)
 */
interface ExtendableCookieChangeEvent extends ExtendableEvent {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent/changed)
     */
    readonly changed: ReadonlyArray<CookieListItem>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent/deleted)
     */
    readonly deleted: ReadonlyArray<CookieListItem>;
}

declare var ExtendableCookieChangeEvent: {
    prototype: ExtendableCookieChangeEvent;
    new(type: string, eventInitDict?: ExtendableCookieChangeEventInit): ExtendableCookieChangeEvent;
};

/**
 * The **`ExtendableEvent`** interface extends the lifetime of the `install` and `activate` events dispatched on the global scope as part of the service worker lifecycle.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent)
 */
interface ExtendableEvent extends Event {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil)
     */
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

/**
 * The **`ExtendableMessageEvent`** interface of the Service Worker API represents the event object of a ServiceWorkerGlobalScope/message_event event fired on a service worker (when a message is received on the ServiceWorkerGlobalScope from another context) — extends the lifetime of such events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent)
 */
interface ExtendableMessageEvent extends ExtendableEvent {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/data)
     */
    readonly data: any;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/origin)
     */
    readonly origin: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * Type: [object Object],[object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/source)
     */
    readonly source: Client | ServiceWorker | MessagePort | null;
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

/**
 * This is the event type for `fetch` events dispatched on the ServiceWorkerGlobalScope.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent)
 */
interface FetchEvent extends ExtendableEvent {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/clientId)
     */
    readonly clientId: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/handled)
     */
    readonly handled: Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/preloadResponse)
     */
    readonly preloadResponse: Promise<any>;
    /**
     * Type: Request
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/request)
     */
    readonly request: Request;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/resultingClientId)
     */
    readonly resultingClientId: string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith)
     */
    respondWith(r: Response | PromiseLike<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

/**
 * The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File)
 */
interface File extends Blob {
    /**
     * Type: long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified)
     */
    readonly lastModified: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name)
     */
    readonly name: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)
     */
    readonly webkitRelativePath: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

/**
 * The **`FileList`** interface represents an object of this type returned by the `files` property of the HTML input element; this lets you access the list of files selected with the `<input type='file'>` element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList)
 */
interface FileList {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/length)
     */
    readonly length: number;
    /**
     * Type: File
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/item)
     */
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>;
    "error": ProgressEvent<FileReader>;
    "load": ProgressEvent<FileReader>;
    "loadend": ProgressEvent<FileReader>;
    "loadstart": ProgressEvent<FileReader>;
    "progress": ProgressEvent<FileReader>;
}

/**
 * The **`FileReader`** interface lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader)
 */
interface FileReader extends EventTarget {
    /**
     * Type: DOMException
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error)
     */
    readonly error: DOMException | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort_event)
     */
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error_event)
     */
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/load_event)
     */
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadend_event)
     */
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadstart_event)
     */
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/progress_event)
     */
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readyState)
     */
    readonly readyState: typeof FileReader.EMPTY | typeof FileReader.LOADING | typeof FileReader.DONE;
    /**
     * Type: [object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/result)
     */
    readonly result: string | ArrayBuffer | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort)
     */
    abort(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsArrayBuffer)
     */
    readAsArrayBuffer(blob: Blob): void;
    /**
     * Type: undefined
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsDataURL)
     */
    readAsDataURL(blob: Blob): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsText)
     */
    readAsText(blob: Blob, encoding?: string): void;
    /** Type: unsigned short */
    readonly EMPTY: 0;
    /** Type: unsigned short */
    readonly LOADING: 1;
    /** Type: unsigned short */
    readonly DONE: 2;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    /** Type: unsigned short */
    readonly EMPTY: 0;
    /** Type: unsigned short */
    readonly LOADING: 1;
    /** Type: unsigned short */
    readonly DONE: 2;
};

/**
 * The **`FileReaderSync`** interface allows to read File or Blob objects synchronously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync)
 */
interface FileReaderSync {
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsArrayBuffer)
     */
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsDataURL)
     */
    readAsDataURL(blob: Blob): string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsText)
     */
    readAsText(blob: Blob, encoding?: string): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new(): FileReaderSync;
};

/**
 * The **`FileSystemDirectoryHandle`** interface of the File System API provides a handle to a file system directory.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle)
 */
interface FileSystemDirectoryHandle extends FileSystemHandle {
    readonly kind: "directory";
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle)
     */
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)
     */
    getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/removeEntry)
     */
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/resolve)
     */
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

declare var FileSystemDirectoryHandle: {
    prototype: FileSystemDirectoryHandle;
    new(): FileSystemDirectoryHandle;
};

/**
 * The **`FileSystemFileHandle`** interface of the File System API represents a handle to a file system entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle)
 */
interface FileSystemFileHandle extends FileSystemHandle {
    readonly kind: "file";
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle)
     */
    createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createWritable)
     */
    createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/getFile)
     */
    getFile(): Promise<File>;
}

declare var FileSystemFileHandle: {
    prototype: FileSystemFileHandle;
    new(): FileSystemFileHandle;
};

/**
 * The **`FileSystemHandle`** interface of the File System API is an object which represents a file or directory entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle)
 */
interface FileSystemHandle {
    /**
     * Type: FileSystemHandleKind
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/kind)
     */
    readonly kind: FileSystemHandleKind;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/name)
     */
    readonly name: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/isSameEntry)
     */
    isSameEntry(other: FileSystemHandle): Promise<boolean>;
}

declare var FileSystemHandle: {
    prototype: FileSystemHandle;
    new(): FileSystemHandle;
};

/**
 * The **`FileSystemSyncAccessHandle`** interface of the File System API represents a synchronous handle to a file system entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle)
 */
interface FileSystemSyncAccessHandle {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/flush)
     */
    flush(): void;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/getSize)
     */
    getSize(): number;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/read)
     */
    read(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/truncate)
     */
    truncate(newSize: number): void;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/write)
     */
    write(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
}

declare var FileSystemSyncAccessHandle: {
    prototype: FileSystemSyncAccessHandle;
    new(): FileSystemSyncAccessHandle;
};

/**
 * The **`FileSystemWritableFileStream`** interface of the File System API is a WritableStream object with additional convenience methods, which operates on a single file on disk.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream)
 */
interface FileSystemWritableFileStream extends WritableStream {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/seek)
     */
    seek(position: number): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/truncate)
     */
    truncate(size: number): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/write)
     */
    write(data: FileSystemWriteChunkType): Promise<void>;
}

declare var FileSystemWritableFileStream: {
    prototype: FileSystemWritableFileStream;
    new(): FileSystemWritableFileStream;
};

/**
 * The **`FontFace`** interface of the CSS Font Loading API represents a single usable font face.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace)
 */
interface FontFace {
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/ascentOverride)
     */
    ascentOverride: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/descentOverride)
     */
    descentOverride: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/display)
     */
    display: FontDisplay;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/family)
     */
    family: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/featureSettings)
     */
    featureSettings: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/lineGapOverride)
     */
    lineGapOverride: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/loaded)
     */
    readonly loaded: Promise<FontFace>;
    /**
     * Type: FontFaceLoadStatus
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/status)
     */
    readonly status: FontFaceLoadStatus;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/stretch)
     */
    stretch: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/style)
     */
    style: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/unicodeRange)
     */
    unicodeRange: string;
    /**
     * Type: CSSOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/weight)
     */
    weight: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/load)
     */
    load(): Promise<FontFace>;
}

declare var FontFace: {
    prototype: FontFace;
    new(family: string, source: string | BufferSource, descriptors?: FontFaceDescriptors): FontFace;
};

interface FontFaceSetEventMap {
    "loading": FontFaceSetLoadEvent;
    "loadingdone": FontFaceSetLoadEvent;
    "loadingerror": FontFaceSetLoadEvent;
}

/**
 * The **`FontFaceSet`** interface of the CSS Font Loading API manages the loading of font-faces and querying of their download status.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet)
 */
interface FontFaceSet extends EventTarget {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loading_event)
     */
    onloading: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingdone_event)
     */
    onloadingdone: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingerror_event)
     */
    onloadingerror: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/ready)
     */
    readonly ready: Promise<FontFaceSet>;
    /**
     * Type: FontFaceSetLoadStatus
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/status)
     */
    readonly status: FontFaceSetLoadStatus;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/check)
     */
    check(font: string, text?: string): boolean;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/load)
     */
    load(font: string, text?: string): Promise<FontFace[]>;
    forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    addEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FontFaceSet: {
    prototype: FontFaceSet;
    new(): FontFaceSet;
};

/**
 * The **`FontFaceSetLoadEvent`** interface of the CSS Font Loading API represents events fired at a FontFaceSet after it starts loading font faces.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent)
 */
interface FontFaceSetLoadEvent extends Event {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent/fontfaces)
     */
    readonly fontfaces: ReadonlyArray<FontFace>;
}

declare var FontFaceSetLoadEvent: {
    prototype: FontFaceSetLoadEvent;
    new(type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
};

interface FontFaceSource {
    /**
     * Type: FontFaceSet
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts)
     */
    readonly fonts: FontFaceSet;
}

/**
 * The **`FormData`** interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the Window/fetch, XMLHttpRequest.send() or navigator.sendBeacon() methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData)
 */
interface FormData {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/append)
     */
    append(name: string, value: string | Blob): void;
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/delete)
     */
    delete(name: string): void;
    /**
     * Type: FormDataEntryValue
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/get)
     */
    get(name: string): FormDataEntryValue | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/getAll)
     */
    getAll(name: string): FormDataEntryValue[];
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/has)
     */
    has(name: string): boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/set)
     */
    set(name: string, value: string | Blob): void;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    prototype: FormData;
    new(): FormData;
};

/**
 * The **`GPUError`** interface of the WebGPU API is the base interface for errors surfaced by GPUDevice.popErrorScope and the GPUDevice.uncapturederror_event event.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError)
 */
interface GPUError {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError/message)
     */
    readonly message: string;
}

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
 * The **`Headers`** interface of the Fetch API allows you to perform various actions on HTTP request and response headers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */
interface Headers {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)
     */
    append(name: string, value: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete)
     */
    delete(name: string): void;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get)
     */
    get(name: string): string | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie)
     */
    getSetCookie(): string[];
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has)
     */
    has(name: string): boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)
     */
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

/**
 * The **`IDBCursor`** interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor)
 */
interface IDBCursor {
    /**
     * Type: IDBCursorDirection
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/direction)
     */
    readonly direction: IDBCursorDirection;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/key)
     */
    readonly key: IDBValidKey;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/primaryKey)
     */
    readonly primaryKey: IDBValidKey;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/request)
     */
    readonly request: IDBRequest;
    /**
     * Type: [object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/source)
     */
    readonly source: IDBObjectStore | IDBIndex;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/advance)
     */
    advance(count: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continue)
     */
    continue(key?: IDBValidKey): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continuePrimaryKey)
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/delete)
     */
    delete(): IDBRequest<undefined>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/update)
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

/**
 * The **`IDBCursorWithValue`** interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue)
 */
interface IDBCursorWithValue extends IDBCursor {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue/value)
     */
    readonly value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

/**
 * The **`IDBDatabase`** interface of the IndexedDB API provides a connection to a database; you can use an `IDBDatabase` object to open a transaction on your database then create, manipulate, and delete objects (data) in that database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase)
 */
interface IDBDatabase extends EventTarget {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/name)
     */
    readonly name: string;
    /**
     * Type: DOMStringList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    /** Type: EventHandler */
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close_event)
     */
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    /** Type: EventHandler */
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/versionchange_event)
     */
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/version)
     */
    readonly version: number;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close)
     */
    close(): void;
    /**
     * Type: IDBObjectStore
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/createObjectStore)
     */
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/deleteObjectStore)
     */
    deleteObjectStore(name: string): void;
    /**
     * Type: IDBTransaction
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/transaction)
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

/**
 * The **`IDBFactory`** interface of the IndexedDB API lets applications asynchronously access the indexed databases.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory)
 */
interface IDBFactory {
    /**
     * Type: short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/cmp)
     */
    cmp(first: any, second: any): number;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/databases)
     */
    databases(): Promise<IDBDatabaseInfo[]>;
    /**
     * Type: IDBOpenDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/deleteDatabase)
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Type: IDBOpenDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/open)
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

/**
 * `IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex)
 */
interface IDBIndex {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/keyPath)
     */
    readonly keyPath: string | string[];
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/multiEntry)
     */
    readonly multiEntry: boolean;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/name)
     */
    name: string;
    /**
     * Type: IDBObjectStore
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/objectStore)
     */
    readonly objectStore: IDBObjectStore;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/unique)
     */
    readonly unique: boolean;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

/**
 * The **`IDBKeyRange`** interface of the IndexedDB API represents a continuous interval over some data type that is used for keys.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange)
 */
interface IDBKeyRange {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lower)
     */
    readonly lower: any;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerOpen)
     */
    readonly lowerOpen: boolean;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upper)
     */
    readonly upper: any;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperOpen)
     */
    readonly upperOpen: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/includes)
     */
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    /**
     * Type: IDBKeyRange
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/bound_static)
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * Type: IDBKeyRange
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerBound_static)
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * Type: IDBKeyRange
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/only_static)
     */
    only(value: any): IDBKeyRange;
    /**
     * Type: IDBKeyRange
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperBound_static)
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

/**
 * The **`IDBObjectStore`** interface of the IndexedDB API represents an object store in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore)
 */
interface IDBObjectStore {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/autoIncrement)
     */
    readonly autoIncrement: boolean;
    /**
     * Type: DOMStringList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/indexNames)
     */
    readonly indexNames: DOMStringList;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/keyPath)
     */
    readonly keyPath: string | string[] | null;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/name)
     */
    name: string;
    /**
     * Type: IDBTransaction
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/transaction)
     */
    readonly transaction: IDBTransaction;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/add)
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/clear)
     */
    clear(): IDBRequest<undefined>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Type: IDBIndex
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/createIndex)
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/delete)
     */
    delete(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/deleteIndex)
     */
    deleteIndex(name: string): void;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * Type: IDBIndex
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/index)
     */
    index(name: string): IDBIndex;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    /**
     * Type: IDBRequest
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/put)
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": IDBVersionChangeEvent;
    "upgradeneeded": IDBVersionChangeEvent;
}

/**
 * The **`IDBOpenDBRequest`** interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using IDBFactory.open and IDBFactory.deleteDatabase), using specific event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest)
 */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/blocked_event)
     */
    onblocked: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
     */
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

/**
 * The **`IDBRequest`** interface of the IndexedDB API provides access to results of asynchronous requests to databases and database objects using event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest)
 */
interface IDBRequest<T = any> extends EventTarget {
    /**
     * Type: DOMException
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error)
     */
    readonly error: DOMException | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error_event)
     */
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event)
     */
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * Type: IDBRequestReadyState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/readyState)
     */
    readonly readyState: IDBRequestReadyState;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/result)
     */
    readonly result: T;
    /**
     * Type: [object Object],[object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/source)
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * Type: IDBTransaction
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/transaction)
     */
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

/**
 * The **`IDBTransaction`** interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction)
 */
interface IDBTransaction extends EventTarget {
    /**
     * Type: IDBDatabase
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/db)
     */
    readonly db: IDBDatabase;
    /**
     * Type: IDBTransactionDurability
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/durability)
     */
    readonly durability: IDBTransactionDurability;
    /**
     * Type: DOMException
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error)
     */
    readonly error: DOMException | null;
    /**
     * Type: IDBTransactionMode
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/mode)
     */
    readonly mode: IDBTransactionMode;
    /**
     * Type: DOMStringList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort_event)
     */
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/complete_event)
     */
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error_event)
     */
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort)
     */
    abort(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/commit)
     */
    commit(): void;
    /**
     * Type: IDBObjectStore
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStore)
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

/**
 * The **`IDBVersionChangeEvent`** interface of the IndexedDB API indicates that the version of the database has changed, as the result of an IDBOpenDBRequest.upgradeneeded_event event handler function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent)
 */
interface IDBVersionChangeEvent extends Event {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/newVersion)
     */
    readonly newVersion: number | null;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/oldVersion)
     */
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

/**
 * The **`ImageBitmap`** interface represents a bitmap image which can be drawn to a canvas without undue latency.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap)
 */
interface ImageBitmap {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/height)
     */
    readonly height: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/width)
     */
    readonly width: number;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/close)
     */
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

/**
 * The **`ImageBitmapRenderingContext`** interface is a canvas rendering context that provides the functionality to replace the canvas's contents with the given ImageBitmap.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext)
 */
interface ImageBitmapRenderingContext {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

/**
 * The **`ImageData`** interface represents the underlying pixel data of an area of a canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData)
 */
interface ImageData {
    /**
     * Type: PredefinedColorSpace
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/colorSpace)
     */
    readonly colorSpace: PredefinedColorSpace;
    /**
     * Type: ImageDataArray
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/data)
     */
    readonly data: ImageDataArray;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/height)
     */
    readonly height: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/width)
     */
    readonly width: number;
}

declare var ImageData: {
    prototype: ImageData;
    new(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    new(data: ImageDataArray, sw: number, sh?: number, settings?: ImageDataSettings): ImageData;
};

/**
 * The **`ImageDecoder`** interface of the WebCodecs API provides a way to unpack and decode encoded image data.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder)
 */
interface ImageDecoder {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/complete)
     */
    readonly complete: boolean;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/completed)
     */
    readonly completed: Promise<void>;
    /**
     * Type: ImageTrackList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/tracks)
     */
    readonly tracks: ImageTrackList;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/type)
     */
    readonly type: string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/close)
     */
    close(): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/decode)
     */
    decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/reset)
     */
    reset(): void;
}

declare var ImageDecoder: {
    prototype: ImageDecoder;
    new(init: ImageDecoderInit): ImageDecoder;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/isTypeSupported_static)
     */
    isTypeSupported(type: string): Promise<boolean>;
};

/**
 * The **`ImageTrack`** interface of the WebCodecs API represents an individual image track.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack)
 */
interface ImageTrack {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/animated)
     */
    readonly animated: boolean;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/frameCount)
     */
    readonly frameCount: number;
    /**
     * Type: unrestricted float
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/repetitionCount)
     */
    readonly repetitionCount: number;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/selected)
     */
    selected: boolean;
}

declare var ImageTrack: {
    prototype: ImageTrack;
    new(): ImageTrack;
};

/**
 * The **`ImageTrackList`** interface of the WebCodecs API represents a list of image tracks.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList)
 */
interface ImageTrackList {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/length)
     */
    readonly length: number;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/ready)
     */
    readonly ready: Promise<void>;
    /**
     * Type: long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedIndex)
     */
    readonly selectedIndex: number;
    /**
     * Type: ImageTrack
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedTrack)
     */
    readonly selectedTrack: ImageTrack | null;
    [index: number]: ImageTrack;
}

declare var ImageTrackList: {
    prototype: ImageTrackList;
    new(): ImageTrackList;
};

interface ImportMeta {
    url: string;
    resolve(specifier: string): string;
}

/**
 * The **`KHR_parallel_shader_compile`** extension is part of the WebGL API and enables a non-blocking poll operation, so that compile/link status availability (`COMPLETION_STATUS_KHR`) can be queried without potentially incurring stalls.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/KHR_parallel_shader_compile)
 */
interface KHR_parallel_shader_compile {
    /** Type: GLenum */
    readonly COMPLETION_STATUS_KHR: 0x91B1;
}

/**
 * The **`Lock`** interface of the Web Locks API provides the name and mode of a lock.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock)
 */
interface Lock {
    /**
     * Type: LockMode
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/mode)
     */
    readonly mode: LockMode;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/name)
     */
    readonly name: string;
}

declare var Lock: {
    prototype: Lock;
    new(): Lock;
};

/**
 * The **`LockManager`** interface of the Web Locks API provides methods for requesting a new Lock object and querying for an existing `Lock` object.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager)
 */
interface LockManager {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/query)
     */
    query(): Promise<LockManagerSnapshot>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/request)
     */
    request<T>(name: string, callback: LockGrantedCallback<T>): Promise<T>;
    request<T>(name: string, options: LockOptions, callback: LockGrantedCallback<T>): Promise<T>;
}

declare var LockManager: {
    prototype: LockManager;
    new(): LockManager;
};

/**
 * The **`MediaCapabilities`** interface of the Media Capabilities API provides information about the decoding abilities of the device, system and browser.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities)
 */
interface MediaCapabilities {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo)
     */
    decodingInfo(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/encodingInfo)
     */
    encodingInfo(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}

declare var MediaCapabilities: {
    prototype: MediaCapabilities;
    new(): MediaCapabilities;
};

/**
 * The **`MediaSourceHandle`** interface of the Media Source Extensions API is a proxy for a MediaSource that can be transferred from a dedicated worker back to the main thread and attached to a media element via its HTMLMediaElement.srcObject property.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSourceHandle)
 */
interface MediaSourceHandle {
}

declare var MediaSourceHandle: {
    prototype: MediaSourceHandle;
    new(): MediaSourceHandle;
};

/**
 * The **`MediaStreamTrackProcessor`** interface of the Insertable Streams for MediaStreamTrack API consumes a video MediaStreamTrack object's source and generates a stream of VideoFrame objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor)
 */
interface MediaStreamTrackProcessor {
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor/readable)
     */
    readonly readable: ReadableStream;
}

declare var MediaStreamTrackProcessor: {
    prototype: MediaStreamTrackProcessor;
    new(init: MediaStreamTrackProcessorInit): MediaStreamTrackProcessor;
};

/**
 * The **`MessageChannel`** interface of the Channel Messaging API allows us to create a new message channel and send data through it via its two MessagePort properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel)
 */
interface MessageChannel {
    /**
     * Type: MessagePort
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port1)
     */
    readonly port1: MessagePort;
    /**
     * Type: MessagePort
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port2)
     */
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

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
 * The **`NavigationPreloadManager`** interface of the Service Worker API provides methods for managing the preloading of resources in parallel with service worker bootup.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager)
 */
interface NavigationPreloadManager {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/disable)
     */
    disable(): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/enable)
     */
    enable(): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/getState)
     */
    getState(): Promise<NavigationPreloadState>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/setHeaderValue)
     */
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

/** Available only in secure contexts. */
interface NavigatorBadge {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/clearAppBadge)
     */
    clearAppBadge(): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/setAppBadge)
     */
    setAppBadge(contents?: number): Promise<void>;
}

interface NavigatorConcurrentHardware {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/hardwareConcurrency)
     */
    readonly hardwareConcurrency: number;
}

interface NavigatorID {
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appCodeName)
     */
    readonly appCodeName: string;
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appName)
     */
    readonly appName: string;
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appVersion)
     */
    readonly appVersion: string;
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/platform)
     */
    readonly platform: string;
    /**
     * Type: DOMString
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/product)
     */
    readonly product: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent)
     */
    readonly userAgent: string;
}

interface NavigatorLanguage {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/language)
     */
    readonly language: string;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/languages)
     */
    readonly languages: ReadonlyArray<string>;
}

/** Available only in secure contexts. */
interface NavigatorLocks {
    /**
     * Type: LockManager
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/locks)
     */
    readonly locks: LockManager;
}

interface NavigatorOnLine {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/onLine)
     */
    readonly onLine: boolean;
}

/** Available only in secure contexts. */
interface NavigatorStorage {
    /**
     * Type: StorageManager
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/storage)
     */
    readonly storage: StorageManager;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

/**
 * The **`Notification`** interface of the Notifications API is used to configure and display desktop notifications to the user.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification)
 */
interface Notification extends EventTarget {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/badge)
     */
    readonly badge: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/body)
     */
    readonly body: string;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/data)
     */
    readonly data: any;
    /**
     * Type: NotificationDirection
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/dir)
     */
    readonly dir: NotificationDirection;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/icon)
     */
    readonly icon: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/lang)
     */
    readonly lang: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/click_event)
     */
    onclick: ((this: Notification, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close_event)
     */
    onclose: ((this: Notification, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/error_event)
     */
    onerror: ((this: Notification, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event)
     */
    onshow: ((this: Notification, ev: Event) => any) | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/requireInteraction)
     */
    readonly requireInteraction: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/silent)
     */
    readonly silent: boolean | null;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/tag)
     */
    readonly tag: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/title)
     */
    readonly title: string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close)
     */
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    /**
     * Type: NotificationPermission
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/permission_static)
     */
    readonly permission: NotificationPermission;
};

/**
 * The **`NotificationEvent`** interface of the Notifications API represents a notification event dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent)
 */
interface NotificationEvent extends ExtendableEvent {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/action)
     */
    readonly action: string;
    /**
     * Type: Notification
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/notification)
     */
    readonly notification: Notification;
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

/**
 * The **`OES_draw_buffers_indexed`** extension is part of the WebGL API and enables the use of different blend options when writing to multiple color buffers simultaneously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed)
 */
interface OES_draw_buffers_indexed {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
     */
    blendEquationSeparateiOES(buf: GLuint, modeRGB: GLenum, modeAlpha: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES)
     */
    blendEquationiOES(buf: GLuint, mode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES)
     */
    blendFuncSeparateiOES(buf: GLuint, srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES)
     */
    blendFunciOES(buf: GLuint, src: GLenum, dst: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/colorMaskiOES)
     */
    colorMaskiOES(buf: GLuint, r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
     */
    disableiOES(target: GLenum, index: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
     */
    enableiOES(target: GLenum, index: GLuint): void;
}

/**
 * The **`OES_element_index_uint`** extension is part of the WebGL API and adds support for `gl.UNSIGNED_INT` types to WebGLRenderingContext.drawElements().
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_element_index_uint)
 */
interface OES_element_index_uint {
}

/**
 * The `OES_fbo_render_mipmap` extension is part of the WebGL API and makes it possible to attach any level of a texture to a framebuffer object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_fbo_render_mipmap)
 */
interface OES_fbo_render_mipmap {
}

/**
 * The **`OES_standard_derivatives`** extension is part of the WebGL API and adds the GLSL derivative functions `dFdx`, `dFdy`, and `fwidth`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_standard_derivatives)
 */
interface OES_standard_derivatives {
    /** Type: GLenum */
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8B8B;
}

/**
 * The **`OES_texture_float`** extension is part of the WebGL API and exposes floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float)
 */
interface OES_texture_float {
}

/**
 * The **`OES_texture_float_linear`** extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float_linear)
 */
interface OES_texture_float_linear {
}

/**
 * The **`OES_texture_half_float`** extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float)
 */
interface OES_texture_half_float {
    /** Type: GLenum */
    readonly HALF_FLOAT_OES: 0x8D61;
}

/**
 * The **`OES_texture_half_float_linear`** extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float_linear)
 */
interface OES_texture_half_float_linear {
}

/**
 * The **OES_vertex_array_object** extension is part of the WebGL API and provides vertex array objects (VAOs) which encapsulate vertex array states.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object)
 */
interface OES_vertex_array_object {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES)
     */
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /**
     * Type: WebGLVertexArrayObjectOES
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/createVertexArrayOES)
     */
    createVertexArrayOES(): WebGLVertexArrayObjectOES;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES)
     */
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/isVertexArrayOES)
     */
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    /** Type: GLenum */
    readonly VERTEX_ARRAY_BINDING_OES: 0x85B5;
}

/**
 * The `OVR_multiview2` extension is part of the WebGL API and adds support for rendering into multiple views simultaneously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2)
 */
interface OVR_multiview2 {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
     */
    framebufferTextureMultiviewOVR(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, baseViewIndex: GLint, numViews: GLsizei): void;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: 0x9630;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: 0x9632;
    /** Type: GLenum */
    readonly MAX_VIEWS_OVR: 0x9631;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: 0x9633;
}

interface OffscreenCanvasEventMap {
    "contextlost": Event;
    "contextrestored": Event;
}

/**
 * When using the canvas element or the Canvas API, rendering, animation, and user interaction usually happen on the main execution thread of a web application.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas)
 */
interface OffscreenCanvas extends EventTarget {
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/height)
     */
    height: number;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextlost_event)
     */
    oncontextlost: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextrestored_event)
     */
    oncontextrestored: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/width)
     */
    width: number;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/convertToBlob)
     */
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    /**
     * Type: OffscreenRenderingContext
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/getContext)
     */
    getContext(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    getContext(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    /**
     * Type: ImageBitmap
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
     */
    transferToImageBitmap(): ImageBitmap;
    addEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

/**
 * The **`OffscreenCanvasRenderingContext2D`** interface is a CanvasRenderingContext2D rendering context for drawing to the bitmap of an `OffscreenCanvas` object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvasRenderingContext2D)
 */
interface OffscreenCanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform {
    /**
     * Type: OffscreenCanvas
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/canvas)
     */
    readonly canvas: OffscreenCanvas;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

/**
 * The **`Path2D`** interface of the Canvas 2D API is used to declare a path that can then be used on a CanvasRenderingContext2D object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D)
 */
interface Path2D extends CanvasPath {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D/addPath)
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

/**
 * The **`Performance`** interface provides access to performance-related information for the current page.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance)
 */
interface Performance extends EventTarget {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/resourcetimingbufferfull_event)
     */
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin)
     */
    readonly timeOrigin: DOMHighResTimeStamp;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMarks)
     */
    clearMarks(markName?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMeasures)
     */
    clearMeasures(measureName?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearResourceTimings)
     */
    clearResourceTimings(): void;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntries)
     */
    getEntries(): PerformanceEntryList;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName)
     */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType)
     */
    getEntriesByType(type: string): PerformanceEntryList;
    /**
     * Type: PerformanceMark
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/mark)
     */
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    /**
     * Type: PerformanceMeasure
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/measure)
     */
    measure(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/now)
     */
    now(): DOMHighResTimeStamp;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/setResourceTimingBufferSize)
     */
    setResourceTimingBufferSize(maxSize: number): void;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/toJSON)
     */
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

/**
 * The **`PerformanceEntry`** object encapsulates a single performance metric that is part of the browser's performance timeline.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)
 */
interface PerformanceEntry {
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration)
     */
    readonly duration: DOMHighResTimeStamp;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType)
     */
    readonly entryType: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name)
     */
    readonly name: string;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime)
     */
    readonly startTime: DOMHighResTimeStamp;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

/**
 * **`PerformanceMark`** is an interface for PerformanceEntry objects with an PerformanceEntry.entryType of `'mark'`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark)
 */
interface PerformanceMark extends PerformanceEntry {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark/detail)
     */
    readonly detail: any;
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
};

/**
 * **`PerformanceMeasure`** is an _abstract_ interface for PerformanceEntry objects with an PerformanceEntry.entryType of `'measure'`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure)
 */
interface PerformanceMeasure extends PerformanceEntry {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure/detail)
     */
    readonly detail: any;
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

/**
 * The **`PerformanceObserver`** interface is used to observe performance measurement events and be notified of new PerformanceEntry as they are recorded in the browser's _performance timeline_.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver)
 */
interface PerformanceObserver {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/disconnect)
     */
    disconnect(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/observe)
     */
    observe(options?: PerformanceObserverInit): void;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/takeRecords)
     */
    takeRecords(): PerformanceEntryList;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/supportedEntryTypes_static)
     */
    readonly supportedEntryTypes: ReadonlyArray<string>;
};

/**
 * The **`PerformanceObserverEntryList`** interface is a list of PerformanceEntry that were explicitly observed via the PerformanceObserver.observe method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList)
 */
interface PerformanceObserverEntryList {
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntries)
     */
    getEntries(): PerformanceEntryList;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
     */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /**
     * Type: PerformanceEntryList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
     */
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

/**
 * The **`PerformanceResourceTiming`** interface enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming)
 */
interface PerformanceResourceTiming extends PerformanceEntry {
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectEnd)
     */
    readonly connectEnd: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectStart)
     */
    readonly connectStart: DOMHighResTimeStamp;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/decodedBodySize)
     */
    readonly decodedBodySize: number;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupEnd)
     */
    readonly domainLookupEnd: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupStart)
     */
    readonly domainLookupStart: DOMHighResTimeStamp;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
     */
    readonly encodedBodySize: number;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/fetchStart)
     */
    readonly fetchStart: DOMHighResTimeStamp;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/initiatorType)
     */
    readonly initiatorType: string;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
     */
    readonly nextHopProtocol: string;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectEnd)
     */
    readonly redirectEnd: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectStart)
     */
    readonly redirectStart: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/requestStart)
     */
    readonly requestStart: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseEnd)
     */
    readonly responseEnd: DOMHighResTimeStamp;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStart)
     */
    readonly responseStart: DOMHighResTimeStamp;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStatus)
     */
    readonly responseStatus: number;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/secureConnectionStart)
     */
    readonly secureConnectionStart: DOMHighResTimeStamp;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/serverTiming)
     */
    readonly serverTiming: ReadonlyArray<PerformanceServerTiming>;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/transferSize)
     */
    readonly transferSize: number;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/workerStart)
     */
    readonly workerStart: DOMHighResTimeStamp;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

/**
 * The **`PerformanceServerTiming`** interface surfaces server metrics that are sent with the response in the Server-Timing HTTP header.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming)
 */
interface PerformanceServerTiming {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/description)
     */
    readonly description: string;
    /**
     * Type: DOMHighResTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/duration)
     */
    readonly duration: DOMHighResTimeStamp;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/name)
     */
    readonly name: string;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceServerTiming: {
    prototype: PerformanceServerTiming;
    new(): PerformanceServerTiming;
};

interface PermissionStatusEventMap {
    "change": Event;
}

/**
 * The **`PermissionStatus`** interface of the Permissions API provides the state of an object and an event handler for monitoring changes to said state.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus)
 */
interface PermissionStatus extends EventTarget {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/name)
     */
    readonly name: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/change_event)
     */
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    /**
     * Type: PermissionState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/state)
     */
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var PermissionStatus: {
    prototype: PermissionStatus;
    new(): PermissionStatus;
};

/**
 * The **`Permissions`** interface of the Permissions API provides the core Permission API functionality, such as methods for querying and revoking permissions - Permissions.query - : Returns the user permission status for a given API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions)
 */
interface Permissions {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions/query)
     */
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

declare var Permissions: {
    prototype: Permissions;
    new(): Permissions;
};

/**
 * The **`ProgressEvent`** interface represents events measuring progress of an underlying process, like an HTTP request (for an `XMLHttpRequest`, or the loading of the underlying resource of an img, audio, video, style or link).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent)
 */
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/lengthComputable)
     */
    readonly lengthComputable: boolean;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/loaded)
     */
    readonly loaded: number;
    readonly target: T | null;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/total)
     */
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
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
 * The **`PushEvent`** interface of the Push API represents a push message that has been received.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent)
 */
interface PushEvent extends ExtendableEvent {
    /**
     * Type: PushMessageData
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent/data)
     */
    readonly data: PushMessageData | null;
}

declare var PushEvent: {
    prototype: PushEvent;
    new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

/**
 * The **`PushManager`** interface of the Push API provides a way to receive notifications from third-party servers as well as request URLs for push notifications.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager)
 */
interface PushManager {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/getSubscription)
     */
    getSubscription(): Promise<PushSubscription | null>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/permissionState)
     */
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PermissionState>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/subscribe)
     */
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/supportedContentEncodings_static)
     */
    readonly supportedContentEncodings: ReadonlyArray<string>;
};

/**
 * The **`PushMessageData`** interface of the Push API provides methods which let you retrieve the push data sent by a server in various formats.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData)
 */
interface PushMessageData {
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/arrayBuffer)
     */
    arrayBuffer(): ArrayBuffer;
    /**
     * Type: Blob
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/blob)
     */
    blob(): Blob;
    /**
     * Type: Uint8Array
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/bytes)
     */
    bytes(): Uint8Array<ArrayBuffer>;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/json)
     */
    json(): any;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/text)
     */
    text(): string;
}

declare var PushMessageData: {
    prototype: PushMessageData;
    new(): PushMessageData;
};

/**
 * The `PushSubscription` interface of the Push API provides a subscription's URL endpoint along with the public key and secrets that should be used for encrypting push messages to this subscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription)
 */
interface PushSubscription {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/endpoint)
     */
    readonly endpoint: string;
    /**
     * Type: EpochTimeStamp
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/expirationTime)
     */
    readonly expirationTime: EpochTimeStamp | null;
    /**
     * Type: PushSubscriptionOptions
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/options)
     */
    readonly options: PushSubscriptionOptions;
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/getKey)
     */
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    /**
     * Type: PushSubscriptionJSON
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/toJSON)
     */
    toJSON(): PushSubscriptionJSON;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/unsubscribe)
     */
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

/**
 * The **`PushSubscriptionOptions`** interface of the Push API represents the options associated with a push subscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions)
 */
interface PushSubscriptionOptions {
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/applicationServerKey)
     */
    readonly applicationServerKey: ArrayBuffer | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/userVisibleOnly)
     */
    readonly userVisibleOnly: boolean;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "closing": Event;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The **`RTCDataChannel`** interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel)
 */
interface RTCDataChannel extends EventTarget {
    /**
     * Type: BinaryType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/binaryType)
     */
    binaryType: BinaryType;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmount)
     */
    readonly bufferedAmount: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
     */
    bufferedAmountLowThreshold: number;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/id)
     */
    readonly id: number | null;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/label)
     */
    readonly label: string;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxPacketLifeTime)
     */
    readonly maxPacketLifeTime: number | null;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxRetransmits)
     */
    readonly maxRetransmits: number | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/negotiated)
     */
    readonly negotiated: boolean;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
     */
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close_event)
     */
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/closing_event)
     */
    onclosing: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/error_event)
     */
    onerror: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/message_event)
     */
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/open_event)
     */
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/ordered)
     */
    readonly ordered: boolean;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/protocol)
     */
    readonly protocol: string;
    /**
     * Type: RTCDataChannelState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/readyState)
     */
    readonly readyState: RTCDataChannelState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/send)
     */
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView<ArrayBuffer>): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

/**
 * The **`RTCEncodedAudioFrame`** of the WebRTC API represents an encoded audio frame in the WebRTC receiver or sender pipeline, which may be modified using a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame)
 */
interface RTCEncodedAudioFrame {
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/data)
     */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/timestamp) */
    readonly timestamp: number;
    /**
     * Type: RTCEncodedAudioFrameMetadata
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
     */
    getMetadata(): RTCEncodedAudioFrameMetadata;
}

declare var RTCEncodedAudioFrame: {
    prototype: RTCEncodedAudioFrame;
    new(): RTCEncodedAudioFrame;
};

/**
 * The **`RTCEncodedVideoFrame`** of the WebRTC API represents an encoded video frame in the WebRTC receiver or sender pipeline, which may be modified using a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame)
 */
interface RTCEncodedVideoFrame {
    /**
     * Type: ArrayBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/data)
     */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/timestamp) */
    readonly timestamp: number;
    /**
     * Type: RTCEncodedVideoFrameType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/type)
     */
    readonly type: RTCEncodedVideoFrameType;
    /**
     * Type: RTCEncodedVideoFrameMetadata
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
     */
    getMetadata(): RTCEncodedVideoFrameMetadata;
}

declare var RTCEncodedVideoFrame: {
    prototype: RTCEncodedVideoFrame;
    new(): RTCEncodedVideoFrame;
};

/**
 * The **`RTCRtpScriptTransformer`** interface of the WebRTC API provides a worker-side Stream API interface that a WebRTC Encoded Transform can use to modify encoded media frames in the incoming and outgoing WebRTC pipelines.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer)
 */
interface RTCRtpScriptTransformer extends EventTarget {
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/options)
     */
    readonly options: any;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/readable)
     */
    readonly readable: ReadableStream;
    /**
     * Type: WritableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/writable)
     */
    readonly writable: WritableStream;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
     */
    generateKeyFrame(rid?: string): Promise<number>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest)
     */
    sendKeyFrameRequest(): Promise<void>;
}

declare var RTCRtpScriptTransformer: {
    prototype: RTCRtpScriptTransformer;
    new(): RTCRtpScriptTransformer;
};

/**
 * The **`RTCTransformEvent`** of the WebRTC API represent an event that is fired in a dedicated worker when an encoded frame has been queued for processing by a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent)
 */
interface RTCTransformEvent extends Event {
    /**
     * Type: RTCRtpScriptTransformer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent/transformer)
     */
    readonly transformer: RTCRtpScriptTransformer;
}

declare var RTCTransformEvent: {
    prototype: RTCTransformEvent;
    new(): RTCTransformEvent;
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
 * The `Report` interface of the Reporting API represents a single report.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report)
 */
interface Report {
    /**
     * Type: ReportBody
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/body)
     */
    readonly body: ReportBody | null;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/type)
     */
    readonly type: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/url)
     */
    readonly url: string;
    /** Type: object */
    toJSON(): any;
}

declare var Report: {
    prototype: Report;
    new(): Report;
};

/**
 * The **`ReportBody`** interface of the Reporting API represents the body of a report.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody)
 */
interface ReportBody {
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody/toJSON)
     */
    toJSON(): any;
}

declare var ReportBody: {
    prototype: ReportBody;
    new(): ReportBody;
};

/**
 * The `ReportingObserver` interface of the Reporting API allows you to collect and access reports.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver)
 */
interface ReportingObserver {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/disconnect)
     */
    disconnect(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/observe)
     */
    observe(): void;
    /**
     * Type: ReportList
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/takeRecords)
     */
    takeRecords(): ReportList;
}

declare var ReportingObserver: {
    prototype: ReportingObserver;
    new(callback: ReportingObserverCallback, options?: ReportingObserverOptions): ReportingObserver;
};

/**
 * The **`Request`** interface of the Fetch API represents a resource request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request)
 */
interface Request extends Body {
    /**
     * Type: RequestCache
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/cache)
     */
    readonly cache: RequestCache;
    /**
     * Type: RequestCredentials
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/credentials)
     */
    readonly credentials: RequestCredentials;
    /**
     * Type: RequestDestination
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/destination)
     */
    readonly destination: RequestDestination;
    /**
     * Type: Headers
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)
     */
    readonly headers: Headers;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)
     */
    readonly integrity: string;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
     */
    readonly keepalive: boolean;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)
     */
    readonly method: string;
    /**
     * Type: RequestMode
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/mode)
     */
    readonly mode: RequestMode;
    /**
     * Type: RequestRedirect
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)
     */
    readonly redirect: RequestRedirect;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrer)
     */
    readonly referrer: string;
    /**
     * Type: ReferrerPolicy
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)
     */
    readonly referrerPolicy: ReferrerPolicy;
    /**
     * Type: AbortSignal
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)
     */
    readonly signal: AbortSignal;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)
     */
    readonly url: string;
    /**
     * Type: Request
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone)
     */
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo | URL, init?: RequestInit): Request;
};

/**
 * The **`Response`** interface of the Fetch API represents the response to a request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response)
 */
interface Response extends Body {
    /**
     * Type: Headers
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers)
     */
    readonly headers: Headers;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok)
     */
    readonly ok: boolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)
     */
    readonly redirected: boolean;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status)
     */
    readonly status: number;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText)
     */
    readonly statusText: string;
    /**
     * Type: ResponseType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type)
     */
    readonly type: ResponseType;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)
     */
    readonly url: string;
    /**
     * Type: Response
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone)
     */
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    /**
     * Type: Response
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static)
     */
    error(): Response;
    /**
     * Type: Response
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static)
     */
    json(data: any, init?: ResponseInit): Response;
    /**
     * Type: Response
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static)
     */
    redirect(url: string | URL, status?: number): Response;
};

/**
 * The **`SecurityPolicyViolationEvent`** interface inherits from Event, and represents the event object of a `securitypolicyviolation` event sent on an Element/securitypolicyviolation_event, Document/securitypolicyviolation_event, or WorkerGlobalScope/securitypolicyviolation_event when its Content Security Policy (CSP) is violated.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)
 */
interface SecurityPolicyViolationEvent extends Event {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/blockedURI)
     */
    readonly blockedURI: string;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
     */
    readonly columnNumber: number;
    /**
     * Type: SecurityPolicyViolationEventDisposition
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/disposition)
     */
    readonly disposition: SecurityPolicyViolationEventDisposition;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/documentURI)
     */
    readonly documentURI: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
     */
    readonly effectiveDirective: string;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/lineNumber)
     */
    readonly lineNumber: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)
     */
    readonly originalPolicy: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/referrer)
     */
    readonly referrer: string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample)
     */
    readonly sample: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
     */
    readonly sourceFile: string;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/statusCode)
     */
    readonly statusCode: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective)
     */
    readonly violatedDirective: string;
}

declare var SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

/**
 * The **`ServiceWorker`** interface of the Service Worker API provides a reference to a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker)
 */
interface ServiceWorker extends EventTarget, AbstractWorker {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/statechange_event)
     */
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/scriptURL)
     */
    readonly scriptURL: string;
    /**
     * Type: ServiceWorkerState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/state)
     */
    readonly state: ServiceWorkerState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`ServiceWorkerContainer`** interface of the Service Worker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer)
 */
interface ServiceWorkerContainer extends EventTarget {
    /**
     * Type: ServiceWorker
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controller)
     */
    readonly controller: ServiceWorker | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
     */
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/message_event)
     */
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/messageerror_event)
     */
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/ready)
     */
    readonly ready: Promise<ServiceWorkerRegistration>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistration)
     */
    getRegistration(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistrations)
     */
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/register)
     */
    register(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/startMessages)
     */
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "messageerror": MessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": Event;
}

/**
 * The **`ServiceWorkerGlobalScope`** interface of the Service Worker API represents the global execution context of a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
 */
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * Type: Clients
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/clients)
     */
    readonly clients: Clients;
    /**
     * Type: CookieStore
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)
     */
    readonly cookieStore: CookieStore;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
     */
    onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
     */
    onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/install_event)
     */
    oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/message_event)
     */
    onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
     */
    onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
     */
    onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)
     */
    onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/push_event)
     */
    onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
     */
    onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
    /**
     * Type: ServiceWorkerRegistration
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/registration)
     */
    readonly registration: ServiceWorkerRegistration;
    /**
     * Type: ServiceWorker
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
     */
    readonly serviceWorker: ServiceWorker;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
     */
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new(): ServiceWorkerGlobalScope;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

/**
 * The **`ServiceWorkerRegistration`** interface of the Service Worker API represents the service worker registration.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration)
 */
interface ServiceWorkerRegistration extends EventTarget {
    /**
     * Type: ServiceWorker
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/active)
     */
    readonly active: ServiceWorker | null;
    /**
     * Type: ServiceWorker
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/installing)
     */
    readonly installing: ServiceWorker | null;
    /**
     * Type: NavigationPreloadManager
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/navigationPreload)
     */
    readonly navigationPreload: NavigationPreloadManager;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updatefound_event)
     */
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    /**
     * Type: PushManager
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/pushManager)
     */
    readonly pushManager: PushManager;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/scope)
     */
    readonly scope: string;
    /**
     * Type: ServiceWorkerUpdateViaCache
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
     */
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    /**
     * Type: ServiceWorker
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/waiting)
     */
    readonly waiting: ServiceWorker | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/getNotifications)
     */
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification)
     */
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/unregister)
     */
    unregister(): Promise<boolean>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/update)
     */
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent;
}

/**
 * The **`SharedWorkerGlobalScope`** object (the SharedWorker global scope) is accessible through the window.self keyword.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope)
 */
interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/name)
     */
    readonly name: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event)
     */
    onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
     */
    close(): void;
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SharedWorkerGlobalScope: {
    prototype: SharedWorkerGlobalScope;
    new(): SharedWorkerGlobalScope;
};

/**
 * The **`StorageManager`** interface of the Storage API provides an interface for managing persistence permissions and estimating available storage.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager)
 */
interface StorageManager {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate)
     */
    estimate(): Promise<StorageEstimate>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/getDirectory)
     */
    getDirectory(): Promise<FileSystemDirectoryHandle>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/persisted)
     */
    persisted(): Promise<boolean>;
}

declare var StorageManager: {
    prototype: StorageManager;
    new(): StorageManager;
};

/**
 * The **`StylePropertyMapReadOnly`** interface of the CSS Typed Object Model API provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly)
 */
interface StylePropertyMapReadOnly {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/size)
     */
    readonly size: number;
    /**
     * Type: [object Object],[object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/get)
     */
    get(property: string): undefined | CSSStyleValue;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/getAll)
     */
    getAll(property: string): CSSStyleValue[];
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/has)
     */
    has(property: string): boolean;
    forEach(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

declare var StylePropertyMapReadOnly: {
    prototype: StylePropertyMapReadOnly;
    new(): StylePropertyMapReadOnly;
};

/**
 * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto)
 */
interface SubtleCrypto {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/decrypt)
     */
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveBits)
     */
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length?: number | null): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
     */
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest)
     */
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/encrypt)
     */
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/exportKey)
     */
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
     */
    generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey)
     */
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/sign)
     */
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/unwrapKey)
     */
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/verify)
     */
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/wrapKey)
     */
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

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
 * The **`TextMetrics`** interface represents the dimensions of a piece of text in the canvas; a `TextMetrics` instance can be retrieved using the CanvasRenderingContext2D.measureText() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics)
 */
interface TextMetrics {
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxAscent)
     */
    readonly actualBoundingBoxAscent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxDescent)
     */
    readonly actualBoundingBoxDescent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxLeft)
     */
    readonly actualBoundingBoxLeft: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxRight)
     */
    readonly actualBoundingBoxRight: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/alphabeticBaseline)
     */
    readonly alphabeticBaseline: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightAscent)
     */
    readonly emHeightAscent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightDescent)
     */
    readonly emHeightDescent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxAscent)
     */
    readonly fontBoundingBoxAscent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxDescent)
     */
    readonly fontBoundingBoxDescent: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/hangingBaseline)
     */
    readonly hangingBaseline: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/ideographicBaseline)
     */
    readonly ideographicBaseline: number;
    /**
     * Type: double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/width)
     */
    readonly width: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
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
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/createObjectURL_static)
     */
    createObjectURL(obj: Blob): string;
    /**
     * Type: URL
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/parse_static)
     */
    parse(url: string | URL, base?: string | URL): URL | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/revokeObjectURL_static)
     */
    revokeObjectURL(url: string): void;
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
 * The **`VideoColorSpace`** interface of the WebCodecs API represents the color space of a video.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace)
 */
interface VideoColorSpace {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/fullRange)
     */
    readonly fullRange: boolean | null;
    /**
     * Type: VideoMatrixCoefficients
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/matrix)
     */
    readonly matrix: VideoMatrixCoefficients | null;
    /**
     * Type: VideoColorPrimaries
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/primaries)
     */
    readonly primaries: VideoColorPrimaries | null;
    /**
     * Type: VideoTransferCharacteristics
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/transfer)
     */
    readonly transfer: VideoTransferCharacteristics | null;
    /**
     * Type: VideoColorSpaceInit
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/toJSON)
     */
    toJSON(): VideoColorSpaceInit;
}

declare var VideoColorSpace: {
    prototype: VideoColorSpace;
    new(init?: VideoColorSpaceInit): VideoColorSpace;
};

interface VideoDecoderEventMap {
    "dequeue": Event;
}

/**
 * The **`VideoDecoder`** interface of the WebCodecs API decodes chunks of video.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder)
 */
interface VideoDecoder extends EventTarget {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decodeQueueSize)
     */
    readonly decodeQueueSize: number;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/dequeue_event)
     */
    ondequeue: ((this: VideoDecoder, ev: Event) => any) | null;
    /**
     * Type: CodecState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/state)
     */
    readonly state: CodecState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/configure)
     */
    configure(config: VideoDecoderConfig): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decode)
     */
    decode(chunk: EncodedVideoChunk): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/flush)
     */
    flush(): Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/isConfigSupported_static)
     */
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoderEventMap {
    "dequeue": Event;
}

/**
 * The **`VideoEncoder`** interface of the WebCodecs API encodes VideoFrame objects into EncodedVideoChunks.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder)
 */
interface VideoEncoder extends EventTarget {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encodeQueueSize)
     */
    readonly encodeQueueSize: number;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/dequeue_event)
     */
    ondequeue: ((this: VideoEncoder, ev: Event) => any) | null;
    /**
     * Type: CodecState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/state)
     */
    readonly state: CodecState;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/close)
     */
    close(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/configure)
     */
    configure(config: VideoEncoderConfig): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encode)
     */
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/flush)
     */
    flush(): Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/isConfigSupported_static)
     */
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

/**
 * The **`VideoFrame`** interface of the Web Codecs API represents a frame of a video.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame)
 */
interface VideoFrame {
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedHeight)
     */
    readonly codedHeight: number;
    /**
     * Type: DOMRectReadOnly
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedRect)
     */
    readonly codedRect: DOMRectReadOnly | null;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedWidth)
     */
    readonly codedWidth: number;
    /**
     * Type: VideoColorSpace
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/colorSpace)
     */
    readonly colorSpace: VideoColorSpace;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayHeight)
     */
    readonly displayHeight: number;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayWidth)
     */
    readonly displayWidth: number;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/duration)
     */
    readonly duration: number | null;
    /**
     * Type: VideoPixelFormat
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/format)
     */
    readonly format: VideoPixelFormat | null;
    /**
     * Type: long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/timestamp)
     */
    readonly timestamp: number;
    /**
     * Type: DOMRectReadOnly
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/visibleRect)
     */
    readonly visibleRect: DOMRectReadOnly | null;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/allocationSize)
     */
    allocationSize(options?: VideoFrameCopyToOptions): number;
    /**
     * Type: VideoFrame
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/clone)
     */
    clone(): VideoFrame;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/close)
     */
    close(): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(image: CanvasImageSource, init?: VideoFrameInit): VideoFrame;
    new(data: AllowSharedBufferSource, init: VideoFrameBufferInit): VideoFrame;
};

/**
 * The **`WEBGL_color_buffer_float`** extension is part of the WebGL API and adds the ability to render to 32-bit floating-point color buffers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_color_buffer_float)
 */
interface WEBGL_color_buffer_float {
    /** Type: GLenum */
    readonly RGBA32F_EXT: 0x8814;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    /** Type: GLenum */
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/**
 * The **`WEBGL_compressed_texture_astc`** extension is part of the WebGL API and exposes Adaptive Scalable Texture Compression (ASTC) compressed texture formats to WebGL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc)
 */
interface WEBGL_compressed_texture_astc {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles)
     */
    getSupportedProfiles(): string[];
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD;
}

/**
 * The **`WEBGL_compressed_texture_etc`** extension is part of the WebGL API and exposes 10 ETC/EAC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc)
 */
interface WEBGL_compressed_texture_etc {
    /** Type: GLenum */
    readonly COMPRESSED_R11_EAC: 0x9270;
    /** Type: GLenum */
    readonly COMPRESSED_SIGNED_R11_EAC: 0x9271;
    /** Type: GLenum */
    readonly COMPRESSED_RG11_EAC: 0x9272;
    /** Type: GLenum */
    readonly COMPRESSED_SIGNED_RG11_EAC: 0x9273;
    /** Type: GLenum */
    readonly COMPRESSED_RGB8_ETC2: 0x9274;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ETC2: 0x9275;
    /** Type: GLenum */
    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA8_ETC2_EAC: 0x9278;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279;
}

/**
 * The **`WEBGL_compressed_texture_etc1`** extension is part of the WebGL API and exposes the ETC1 compressed texture format.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc1)
 */
interface WEBGL_compressed_texture_etc1 {
    /** Type: GLenum */
    readonly COMPRESSED_RGB_ETC1_WEBGL: 0x8D64;
}

/**
 * The **`WEBGL_compressed_texture_pvrtc`** extension is part of the WebGL API and exposes four PVRTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
interface WEBGL_compressed_texture_pvrtc {
    /** Type: GLenum */
    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00;
    /** Type: GLenum */
    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03;
}

/**
 * The **`WEBGL_compressed_texture_s3tc`** extension is part of the WebGL API and exposes four S3TC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
interface WEBGL_compressed_texture_s3tc {
    /** Type: GLenum */
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2;
    /** Type: GLenum */
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3;
}

/**
 * The **`WEBGL_compressed_texture_s3tc_srgb`** extension is part of the WebGL API and exposes four S3TC compressed texture formats for the sRGB colorspace.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
 */
interface WEBGL_compressed_texture_s3tc_srgb {
    /** Type: GLenum */
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E;
    /** Type: GLenum */
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F;
}

/**
 * The **`WEBGL_debug_renderer_info`** extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info)
 */
interface WEBGL_debug_renderer_info {
    /** Type: GLenum */
    readonly UNMASKED_VENDOR_WEBGL: 0x9245;
    /** Type: GLenum */
    readonly UNMASKED_RENDERER_WEBGL: 0x9246;
}

/**
 * The **`WEBGL_debug_shaders`** extension is part of the WebGL API and exposes a method to debug shaders from privileged contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders)
 */
interface WEBGL_debug_shaders {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource)
     */
    getTranslatedShaderSource(shader: WebGLShader): string;
}

/**
 * The **`WEBGL_depth_texture`** extension is part of the WebGL API and defines 2D depth and depth-stencil textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture)
 */
interface WEBGL_depth_texture {
    /** Type: GLenum */
    readonly UNSIGNED_INT_24_8_WEBGL: 0x84FA;
}

/**
 * The **`WEBGL_draw_buffers`** extension is part of the WebGL API and enables a fragment shader to write to several textures, which is useful for deferred shading, for example.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers)
 */
interface WEBGL_draw_buffers {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL)
     */
    drawBuffersWEBGL(buffers: GLenum[]): void;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT0_WEBGL: 0x8CE0;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT1_WEBGL: 0x8CE1;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT2_WEBGL: 0x8CE2;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT3_WEBGL: 0x8CE3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT4_WEBGL: 0x8CE4;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT5_WEBGL: 0x8CE5;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT6_WEBGL: 0x8CE6;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT7_WEBGL: 0x8CE7;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT8_WEBGL: 0x8CE8;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT9_WEBGL: 0x8CE9;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT10_WEBGL: 0x8CEA;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT11_WEBGL: 0x8CEB;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT12_WEBGL: 0x8CEC;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT13_WEBGL: 0x8CED;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT14_WEBGL: 0x8CEE;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT15_WEBGL: 0x8CEF;
    /** Type: GLenum */
    readonly DRAW_BUFFER0_WEBGL: 0x8825;
    /** Type: GLenum */
    readonly DRAW_BUFFER1_WEBGL: 0x8826;
    /** Type: GLenum */
    readonly DRAW_BUFFER2_WEBGL: 0x8827;
    /** Type: GLenum */
    readonly DRAW_BUFFER3_WEBGL: 0x8828;
    /** Type: GLenum */
    readonly DRAW_BUFFER4_WEBGL: 0x8829;
    /** Type: GLenum */
    readonly DRAW_BUFFER5_WEBGL: 0x882A;
    /** Type: GLenum */
    readonly DRAW_BUFFER6_WEBGL: 0x882B;
    /** Type: GLenum */
    readonly DRAW_BUFFER7_WEBGL: 0x882C;
    /** Type: GLenum */
    readonly DRAW_BUFFER8_WEBGL: 0x882D;
    /** Type: GLenum */
    readonly DRAW_BUFFER9_WEBGL: 0x882E;
    /** Type: GLenum */
    readonly DRAW_BUFFER10_WEBGL: 0x882F;
    /** Type: GLenum */
    readonly DRAW_BUFFER11_WEBGL: 0x8830;
    /** Type: GLenum */
    readonly DRAW_BUFFER12_WEBGL: 0x8831;
    /** Type: GLenum */
    readonly DRAW_BUFFER13_WEBGL: 0x8832;
    /** Type: GLenum */
    readonly DRAW_BUFFER14_WEBGL: 0x8833;
    /** Type: GLenum */
    readonly DRAW_BUFFER15_WEBGL: 0x8834;
    /** Type: GLenum */
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: 0x8CDF;
    /** Type: GLenum */
    readonly MAX_DRAW_BUFFERS_WEBGL: 0x8824;
}

/**
 * The **WEBGL_lose_context** extension is part of the WebGL API and exposes functions to simulate losing and restoring a WebGLRenderingContext.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context)
 */
interface WEBGL_lose_context {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/loseContext)
     */
    loseContext(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/restoreContext)
     */
    restoreContext(): void;
}

/**
 * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw)
 */
interface WEBGL_multi_draw {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
     */
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | GLint[], firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
     */
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | GLint[], firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, drawcount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
     */
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | GLsizei[], offsetsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
     */
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | GLsizei[], offsetsOffset: number, drawcount: GLsizei): void;
}

/**
 * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)
 */
interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}

declare var WebGL2RenderingContext: {
    prototype: WebGL2RenderingContext;
    new(): WebGL2RenderingContext;
    /** Type: GLenum */
    readonly READ_BUFFER: 0x0C02;
    /** Type: GLenum */
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    /** Type: GLenum */
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    /** Type: GLenum */
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    /** Type: GLenum */
    readonly PACK_ROW_LENGTH: 0x0D02;
    /** Type: GLenum */
    readonly PACK_SKIP_ROWS: 0x0D03;
    /** Type: GLenum */
    readonly PACK_SKIP_PIXELS: 0x0D04;
    /** Type: GLenum */
    readonly COLOR: 0x1800;
    /** Type: GLenum */
    readonly DEPTH: 0x1801;
    /** Type: GLenum */
    readonly STENCIL: 0x1802;
    /** Type: GLenum */
    readonly RED: 0x1903;
    /** Type: GLenum */
    readonly RGB8: 0x8051;
    /** Type: GLenum */
    readonly RGB10_A2: 0x8059;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_3D: 0x806A;
    /** Type: GLenum */
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    /** Type: GLenum */
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    /** Type: GLenum */
    readonly TEXTURE_3D: 0x806F;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_R: 0x8072;
    /** Type: GLenum */
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    /** Type: GLenum */
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    /** Type: GLenum */
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    /** Type: GLenum */
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    /** Type: GLenum */
    readonly TEXTURE_MIN_LOD: 0x813A;
    /** Type: GLenum */
    readonly TEXTURE_MAX_LOD: 0x813B;
    /** Type: GLenum */
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    /** Type: GLenum */
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    /** Type: GLenum */
    readonly MIN: 0x8007;
    /** Type: GLenum */
    readonly MAX: 0x8008;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT24: 0x81A6;
    /** Type: GLenum */
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    /** Type: GLenum */
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    /** Type: GLenum */
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    /** Type: GLenum */
    readonly CURRENT_QUERY: 0x8865;
    /** Type: GLenum */
    readonly QUERY_RESULT: 0x8866;
    /** Type: GLenum */
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    /** Type: GLenum */
    readonly STREAM_READ: 0x88E1;
    /** Type: GLenum */
    readonly STREAM_COPY: 0x88E2;
    /** Type: GLenum */
    readonly STATIC_READ: 0x88E5;
    /** Type: GLenum */
    readonly STATIC_COPY: 0x88E6;
    /** Type: GLenum */
    readonly DYNAMIC_READ: 0x88E9;
    /** Type: GLenum */
    readonly DYNAMIC_COPY: 0x88EA;
    /** Type: GLenum */
    readonly MAX_DRAW_BUFFERS: 0x8824;
    /** Type: GLenum */
    readonly DRAW_BUFFER0: 0x8825;
    /** Type: GLenum */
    readonly DRAW_BUFFER1: 0x8826;
    /** Type: GLenum */
    readonly DRAW_BUFFER2: 0x8827;
    /** Type: GLenum */
    readonly DRAW_BUFFER3: 0x8828;
    /** Type: GLenum */
    readonly DRAW_BUFFER4: 0x8829;
    /** Type: GLenum */
    readonly DRAW_BUFFER5: 0x882A;
    /** Type: GLenum */
    readonly DRAW_BUFFER6: 0x882B;
    /** Type: GLenum */
    readonly DRAW_BUFFER7: 0x882C;
    /** Type: GLenum */
    readonly DRAW_BUFFER8: 0x882D;
    /** Type: GLenum */
    readonly DRAW_BUFFER9: 0x882E;
    /** Type: GLenum */
    readonly DRAW_BUFFER10: 0x882F;
    /** Type: GLenum */
    readonly DRAW_BUFFER11: 0x8830;
    /** Type: GLenum */
    readonly DRAW_BUFFER12: 0x8831;
    /** Type: GLenum */
    readonly DRAW_BUFFER13: 0x8832;
    /** Type: GLenum */
    readonly DRAW_BUFFER14: 0x8833;
    /** Type: GLenum */
    readonly DRAW_BUFFER15: 0x8834;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    /** Type: GLenum */
    readonly SAMPLER_3D: 0x8B5F;
    /** Type: GLenum */
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    /** Type: GLenum */
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    /** Type: GLenum */
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    /** Type: GLenum */
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    /** Type: GLenum */
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    /** Type: GLenum */
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    /** Type: GLenum */
    readonly FLOAT_MAT2x3: 0x8B65;
    /** Type: GLenum */
    readonly FLOAT_MAT2x4: 0x8B66;
    /** Type: GLenum */
    readonly FLOAT_MAT3x2: 0x8B67;
    /** Type: GLenum */
    readonly FLOAT_MAT3x4: 0x8B68;
    /** Type: GLenum */
    readonly FLOAT_MAT4x2: 0x8B69;
    /** Type: GLenum */
    readonly FLOAT_MAT4x3: 0x8B6A;
    /** Type: GLenum */
    readonly SRGB: 0x8C40;
    /** Type: GLenum */
    readonly SRGB8: 0x8C41;
    /** Type: GLenum */
    readonly SRGB8_ALPHA8: 0x8C43;
    /** Type: GLenum */
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    /** Type: GLenum */
    readonly RGBA32F: 0x8814;
    /** Type: GLenum */
    readonly RGB32F: 0x8815;
    /** Type: GLenum */
    readonly RGBA16F: 0x881A;
    /** Type: GLenum */
    readonly RGB16F: 0x881B;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    /** Type: GLenum */
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    /** Type: GLenum */
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    /** Type: GLenum */
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    /** Type: GLenum */
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    /** Type: GLenum */
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    /** Type: GLenum */
    readonly R11F_G11F_B10F: 0x8C3A;
    /** Type: GLenum */
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    /** Type: GLenum */
    readonly RGB9_E5: 0x8C3D;
    /** Type: GLenum */
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    /** Type: GLenum */
    readonly RASTERIZER_DISCARD: 0x8C89;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    /** Type: GLenum */
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    /** Type: GLenum */
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    /** Type: GLenum */
    readonly RGBA32UI: 0x8D70;
    /** Type: GLenum */
    readonly RGB32UI: 0x8D71;
    /** Type: GLenum */
    readonly RGBA16UI: 0x8D76;
    /** Type: GLenum */
    readonly RGB16UI: 0x8D77;
    /** Type: GLenum */
    readonly RGBA8UI: 0x8D7C;
    /** Type: GLenum */
    readonly RGB8UI: 0x8D7D;
    /** Type: GLenum */
    readonly RGBA32I: 0x8D82;
    /** Type: GLenum */
    readonly RGB32I: 0x8D83;
    /** Type: GLenum */
    readonly RGBA16I: 0x8D88;
    /** Type: GLenum */
    readonly RGB16I: 0x8D89;
    /** Type: GLenum */
    readonly RGBA8I: 0x8D8E;
    /** Type: GLenum */
    readonly RGB8I: 0x8D8F;
    /** Type: GLenum */
    readonly RED_INTEGER: 0x8D94;
    /** Type: GLenum */
    readonly RGB_INTEGER: 0x8D98;
    /** Type: GLenum */
    readonly RGBA_INTEGER: 0x8D99;
    /** Type: GLenum */
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    /** Type: GLenum */
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    /** Type: GLenum */
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    /** Type: GLenum */
    readonly INT_SAMPLER_2D: 0x8DCA;
    /** Type: GLenum */
    readonly INT_SAMPLER_3D: 0x8DCB;
    /** Type: GLenum */
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    /** Type: GLenum */
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    /** Type: GLenum */
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    /** Type: GLenum */
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    /** Type: GLenum */
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    /** Type: GLenum */
    readonly UNSIGNED_INT_24_8: 0x84FA;
    /** Type: GLenum */
    readonly DEPTH24_STENCIL8: 0x88F0;
    /** Type: GLenum */
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    /** Type: GLenum */
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    /** Type: GLenum */
    readonly READ_FRAMEBUFFER: 0x8CA8;
    /** Type: GLenum */
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    /** Type: GLenum */
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    /** Type: GLenum */
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    /** Type: GLenum */
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT13: 0x8CED;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    /** Type: GLenum */
    readonly MAX_SAMPLES: 0x8D57;
    /** Type: GLenum */
    readonly HALF_FLOAT: 0x140B;
    /** Type: GLenum */
    readonly RG: 0x8227;
    /** Type: GLenum */
    readonly RG_INTEGER: 0x8228;
    /** Type: GLenum */
    readonly R8: 0x8229;
    /** Type: GLenum */
    readonly RG8: 0x822B;
    /** Type: GLenum */
    readonly R16F: 0x822D;
    /** Type: GLenum */
    readonly R32F: 0x822E;
    /** Type: GLenum */
    readonly RG16F: 0x822F;
    /** Type: GLenum */
    readonly RG32F: 0x8230;
    /** Type: GLenum */
    readonly R8I: 0x8231;
    /** Type: GLenum */
    readonly R8UI: 0x8232;
    /** Type: GLenum */
    readonly R16I: 0x8233;
    /** Type: GLenum */
    readonly R16UI: 0x8234;
    /** Type: GLenum */
    readonly R32I: 0x8235;
    /** Type: GLenum */
    readonly R32UI: 0x8236;
    /** Type: GLenum */
    readonly RG8I: 0x8237;
    /** Type: GLenum */
    readonly RG8UI: 0x8238;
    /** Type: GLenum */
    readonly RG16I: 0x8239;
    /** Type: GLenum */
    readonly RG16UI: 0x823A;
    /** Type: GLenum */
    readonly RG32I: 0x823B;
    /** Type: GLenum */
    readonly RG32UI: 0x823C;
    /** Type: GLenum */
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    /** Type: GLenum */
    readonly R8_SNORM: 0x8F94;
    /** Type: GLenum */
    readonly RG8_SNORM: 0x8F95;
    /** Type: GLenum */
    readonly RGB8_SNORM: 0x8F96;
    /** Type: GLenum */
    readonly RGBA8_SNORM: 0x8F97;
    /** Type: GLenum */
    readonly SIGNED_NORMALIZED: 0x8F9C;
    /** Type: GLenum */
    readonly COPY_READ_BUFFER: 0x8F36;
    /** Type: GLenum */
    readonly COPY_WRITE_BUFFER: 0x8F37;
    /** Type: GLenum */
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    /** Type: GLenum */
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER: 0x8A11;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_START: 0x8A29;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    /** Type: GLenum */
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    /** Type: GLenum */
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    /** Type: GLenum */
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    /** Type: GLenum */
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    /** Type: GLenum */
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    /** Type: GLenum */
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    /** Type: GLenum */
    readonly UNIFORM_TYPE: 0x8A37;
    /** Type: GLenum */
    readonly UNIFORM_SIZE: 0x8A38;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    /** Type: GLenum */
    readonly UNIFORM_OFFSET: 0x8A3B;
    /** Type: GLenum */
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    /** Type: GLenum */
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    /** Type: GLenum */
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    /** Type: GLenum */
    readonly INVALID_INDEX: 0xFFFFFFFF;
    /** Type: GLenum */
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    /** Type: GLenum */
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    /** Type: GLenum */
    readonly OBJECT_TYPE: 0x9112;
    /** Type: GLenum */
    readonly SYNC_CONDITION: 0x9113;
    /** Type: GLenum */
    readonly SYNC_STATUS: 0x9114;
    /** Type: GLenum */
    readonly SYNC_FLAGS: 0x9115;
    /** Type: GLenum */
    readonly SYNC_FENCE: 0x9116;
    /** Type: GLenum */
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    /** Type: GLenum */
    readonly UNSIGNALED: 0x9118;
    /** Type: GLenum */
    readonly SIGNALED: 0x9119;
    /** Type: GLenum */
    readonly ALREADY_SIGNALED: 0x911A;
    /** Type: GLenum */
    readonly TIMEOUT_EXPIRED: 0x911B;
    /** Type: GLenum */
    readonly CONDITION_SATISFIED: 0x911C;
    /** Type: GLenum */
    readonly WAIT_FAILED: 0x911D;
    /** Type: GLenum */
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    /** Type: GLenum */
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    /** Type: GLenum */
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    /** Type: GLenum */
    readonly SAMPLER_BINDING: 0x8919;
    /** Type: GLenum */
    readonly RGB10_A2UI: 0x906F;
    /** Type: GLenum */
    readonly INT_2_10_10_10_REV: 0x8D9F;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    /** Type: GLenum */
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    /** Type: GLenum */
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    /** Type: GLenum */
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    /** Type: GLint64 */
    readonly TIMEOUT_IGNORED: -1;
    /** Type: GLenum */
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
    /** Type: GLenum */
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    /** Type: GLenum */
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    /** Type: GLenum */
    readonly COLOR_BUFFER_BIT: 0x00004000;
    /** Type: GLenum */
    readonly POINTS: 0x0000;
    /** Type: GLenum */
    readonly LINES: 0x0001;
    /** Type: GLenum */
    readonly LINE_LOOP: 0x0002;
    /** Type: GLenum */
    readonly LINE_STRIP: 0x0003;
    /** Type: GLenum */
    readonly TRIANGLES: 0x0004;
    /** Type: GLenum */
    readonly TRIANGLE_STRIP: 0x0005;
    /** Type: GLenum */
    readonly TRIANGLE_FAN: 0x0006;
    /** Type: GLenum */
    readonly ZERO: 0;
    /** Type: GLenum */
    readonly ONE: 1;
    /** Type: GLenum */
    readonly SRC_COLOR: 0x0300;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    /** Type: GLenum */
    readonly SRC_ALPHA: 0x0302;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    /** Type: GLenum */
    readonly DST_ALPHA: 0x0304;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    /** Type: GLenum */
    readonly DST_COLOR: 0x0306;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    /** Type: GLenum */
    readonly SRC_ALPHA_SATURATE: 0x0308;
    /** Type: GLenum */
    readonly FUNC_ADD: 0x8006;
    /** Type: GLenum */
    readonly BLEND_EQUATION: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_RGB: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    /** Type: GLenum */
    readonly FUNC_SUBTRACT: 0x800A;
    /** Type: GLenum */
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    /** Type: GLenum */
    readonly BLEND_DST_RGB: 0x80C8;
    /** Type: GLenum */
    readonly BLEND_SRC_RGB: 0x80C9;
    /** Type: GLenum */
    readonly BLEND_DST_ALPHA: 0x80CA;
    /** Type: GLenum */
    readonly BLEND_SRC_ALPHA: 0x80CB;
    /** Type: GLenum */
    readonly CONSTANT_COLOR: 0x8001;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    /** Type: GLenum */
    readonly CONSTANT_ALPHA: 0x8003;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    /** Type: GLenum */
    readonly BLEND_COLOR: 0x8005;
    /** Type: GLenum */
    readonly ARRAY_BUFFER: 0x8892;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    /** Type: GLenum */
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    /** Type: GLenum */
    readonly STREAM_DRAW: 0x88E0;
    /** Type: GLenum */
    readonly STATIC_DRAW: 0x88E4;
    /** Type: GLenum */
    readonly DYNAMIC_DRAW: 0x88E8;
    /** Type: GLenum */
    readonly BUFFER_SIZE: 0x8764;
    /** Type: GLenum */
    readonly BUFFER_USAGE: 0x8765;
    /** Type: GLenum */
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    /** Type: GLenum */
    readonly FRONT: 0x0404;
    /** Type: GLenum */
    readonly BACK: 0x0405;
    /** Type: GLenum */
    readonly FRONT_AND_BACK: 0x0408;
    /** Type: GLenum */
    readonly CULL_FACE: 0x0B44;
    /** Type: GLenum */
    readonly BLEND: 0x0BE2;
    /** Type: GLenum */
    readonly DITHER: 0x0BD0;
    /** Type: GLenum */
    readonly STENCIL_TEST: 0x0B90;
    /** Type: GLenum */
    readonly DEPTH_TEST: 0x0B71;
    /** Type: GLenum */
    readonly SCISSOR_TEST: 0x0C11;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FILL: 0x8037;
    /** Type: GLenum */
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE: 0x80A0;
    /** Type: GLenum */
    readonly NO_ERROR: 0;
    /** Type: GLenum */
    readonly INVALID_ENUM: 0x0500;
    /** Type: GLenum */
    readonly INVALID_VALUE: 0x0501;
    /** Type: GLenum */
    readonly INVALID_OPERATION: 0x0502;
    /** Type: GLenum */
    readonly OUT_OF_MEMORY: 0x0505;
    /** Type: GLenum */
    readonly CW: 0x0900;
    /** Type: GLenum */
    readonly CCW: 0x0901;
    /** Type: GLenum */
    readonly LINE_WIDTH: 0x0B21;
    /** Type: GLenum */
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    /** Type: GLenum */
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    /** Type: GLenum */
    readonly CULL_FACE_MODE: 0x0B45;
    /** Type: GLenum */
    readonly FRONT_FACE: 0x0B46;
    /** Type: GLenum */
    readonly DEPTH_RANGE: 0x0B70;
    /** Type: GLenum */
    readonly DEPTH_WRITEMASK: 0x0B72;
    /** Type: GLenum */
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    /** Type: GLenum */
    readonly DEPTH_FUNC: 0x0B74;
    /** Type: GLenum */
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    /** Type: GLenum */
    readonly STENCIL_FUNC: 0x0B92;
    /** Type: GLenum */
    readonly STENCIL_FAIL: 0x0B94;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    /** Type: GLenum */
    readonly STENCIL_REF: 0x0B97;
    /** Type: GLenum */
    readonly STENCIL_VALUE_MASK: 0x0B93;
    /** Type: GLenum */
    readonly STENCIL_WRITEMASK: 0x0B98;
    /** Type: GLenum */
    readonly STENCIL_BACK_FUNC: 0x8800;
    /** Type: GLenum */
    readonly STENCIL_BACK_FAIL: 0x8801;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    /** Type: GLenum */
    readonly STENCIL_BACK_REF: 0x8CA3;
    /** Type: GLenum */
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    /** Type: GLenum */
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    /** Type: undefined */
    readonly VIEWPORT: 0x0BA2;
    /** Type: GLenum */
    readonly SCISSOR_BOX: 0x0C10;
    /** Type: GLenum */
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    /** Type: GLenum */
    readonly COLOR_WRITEMASK: 0x0C23;
    /** Type: GLenum */
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    /** Type: GLenum */
    readonly PACK_ALIGNMENT: 0x0D05;
    /** Type: GLenum */
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    /** Type: GLenum */
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    /** Type: GLenum */
    readonly SUBPIXEL_BITS: 0x0D50;
    /** Type: GLenum */
    readonly RED_BITS: 0x0D52;
    /** Type: GLenum */
    readonly GREEN_BITS: 0x0D53;
    /** Type: GLenum */
    readonly BLUE_BITS: 0x0D54;
    /** Type: GLenum */
    readonly ALPHA_BITS: 0x0D55;
    /** Type: GLenum */
    readonly DEPTH_BITS: 0x0D56;
    /** Type: GLenum */
    readonly STENCIL_BITS: 0x0D57;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_2D: 0x8069;
    /** Type: GLenum */
    readonly SAMPLE_BUFFERS: 0x80A8;
    /** Type: GLenum */
    readonly SAMPLES: 0x80A9;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    /** Type: GLenum */
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    /** Type: GLenum */
    readonly DONT_CARE: 0x1100;
    /** Type: GLenum */
    readonly FASTEST: 0x1101;
    /** Type: GLenum */
    readonly NICEST: 0x1102;
    /** Type: GLenum */
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    /** Type: GLenum */
    readonly BYTE: 0x1400;
    /** Type: GLenum */
    readonly UNSIGNED_BYTE: 0x1401;
    /** Type: GLenum */
    readonly SHORT: 0x1402;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT: 0x1403;
    /** Type: GLenum */
    readonly INT: 0x1404;
    /** Type: GLenum */
    readonly UNSIGNED_INT: 0x1405;
    /** Type: GLenum */
    readonly FLOAT: 0x1406;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT: 0x1902;
    /** Type: GLenum */
    readonly ALPHA: 0x1906;
    /** Type: GLenum */
    readonly RGB: 0x1907;
    /** Type: GLenum */
    readonly RGBA: 0x1908;
    /** Type: GLenum */
    readonly LUMINANCE: 0x1909;
    /** Type: GLenum */
    readonly LUMINANCE_ALPHA: 0x190A;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    /** Type: GLenum */
    readonly FRAGMENT_SHADER: 0x8B30;
    /** Type: GLenum */
    readonly VERTEX_SHADER: 0x8B31;
    /** Type: GLenum */
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    /** Type: GLenum */
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    /** Type: GLenum */
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    /** Type: GLenum */
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    /** Type: GLenum */
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    /** Type: GLenum */
    readonly SHADER_TYPE: 0x8B4F;
    /** Type: GLenum */
    readonly DELETE_STATUS: 0x8B80;
    /** Type: GLenum */
    readonly LINK_STATUS: 0x8B82;
    /** Type: GLenum */
    readonly VALIDATE_STATUS: 0x8B83;
    /** Type: GLenum */
    readonly ATTACHED_SHADERS: 0x8B85;
    /** Type: GLenum */
    readonly ACTIVE_UNIFORMS: 0x8B86;
    /** Type: GLenum */
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    /** Type: GLenum */
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    /** Type: GLenum */
    readonly CURRENT_PROGRAM: 0x8B8D;
    /** Type: GLenum */
    readonly NEVER: 0x0200;
    /** Type: GLenum */
    readonly LESS: 0x0201;
    /** Type: GLenum */
    readonly EQUAL: 0x0202;
    /** Type: GLenum */
    readonly LEQUAL: 0x0203;
    /** Type: GLenum */
    readonly GREATER: 0x0204;
    /** Type: GLenum */
    readonly NOTEQUAL: 0x0205;
    /** Type: GLenum */
    readonly GEQUAL: 0x0206;
    /** Type: GLenum */
    readonly ALWAYS: 0x0207;
    /** Type: GLenum */
    readonly KEEP: 0x1E00;
    /** Type: GLenum */
    readonly REPLACE: 0x1E01;
    /** Type: GLenum */
    readonly INCR: 0x1E02;
    /** Type: GLenum */
    readonly DECR: 0x1E03;
    /** Type: GLenum */
    readonly INVERT: 0x150A;
    /** Type: GLenum */
    readonly INCR_WRAP: 0x8507;
    /** Type: GLenum */
    readonly DECR_WRAP: 0x8508;
    /** Type: GLenum */
    readonly VENDOR: 0x1F00;
    /** Type: GLenum */
    readonly RENDERER: 0x1F01;
    /** Type: GLenum */
    readonly VERSION: 0x1F02;
    /** Type: GLenum */
    readonly NEAREST: 0x2600;
    /** Type: GLenum */
    readonly LINEAR: 0x2601;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    /** Type: GLenum */
    readonly TEXTURE_MAG_FILTER: 0x2800;
    /** Type: GLenum */
    readonly TEXTURE_MIN_FILTER: 0x2801;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_S: 0x2802;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_T: 0x2803;
    /** Type: GLenum */
    readonly TEXTURE_2D: 0x0DE1;
    /** Type: GLenum */
    readonly TEXTURE: 0x1702;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP: 0x8513;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    /** Type: GLenum */
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    /** Type: GLenum */
    readonly TEXTURE0: 0x84C0;
    /** Type: GLenum */
    readonly TEXTURE1: 0x84C1;
    /** Type: GLenum */
    readonly TEXTURE2: 0x84C2;
    /** Type: GLenum */
    readonly TEXTURE3: 0x84C3;
    /** Type: GLenum */
    readonly TEXTURE4: 0x84C4;
    /** Type: GLenum */
    readonly TEXTURE5: 0x84C5;
    /** Type: GLenum */
    readonly TEXTURE6: 0x84C6;
    /** Type: GLenum */
    readonly TEXTURE7: 0x84C7;
    /** Type: GLenum */
    readonly TEXTURE8: 0x84C8;
    /** Type: GLenum */
    readonly TEXTURE9: 0x84C9;
    /** Type: GLenum */
    readonly TEXTURE10: 0x84CA;
    /** Type: GLenum */
    readonly TEXTURE11: 0x84CB;
    /** Type: GLenum */
    readonly TEXTURE12: 0x84CC;
    /** Type: GLenum */
    readonly TEXTURE13: 0x84CD;
    /** Type: GLenum */
    readonly TEXTURE14: 0x84CE;
    /** Type: GLenum */
    readonly TEXTURE15: 0x84CF;
    /** Type: GLenum */
    readonly TEXTURE16: 0x84D0;
    /** Type: GLenum */
    readonly TEXTURE17: 0x84D1;
    /** Type: GLenum */
    readonly TEXTURE18: 0x84D2;
    /** Type: GLenum */
    readonly TEXTURE19: 0x84D3;
    /** Type: GLenum */
    readonly TEXTURE20: 0x84D4;
    /** Type: GLenum */
    readonly TEXTURE21: 0x84D5;
    /** Type: GLenum */
    readonly TEXTURE22: 0x84D6;
    /** Type: GLenum */
    readonly TEXTURE23: 0x84D7;
    /** Type: GLenum */
    readonly TEXTURE24: 0x84D8;
    /** Type: GLenum */
    readonly TEXTURE25: 0x84D9;
    /** Type: GLenum */
    readonly TEXTURE26: 0x84DA;
    /** Type: GLenum */
    readonly TEXTURE27: 0x84DB;
    /** Type: GLenum */
    readonly TEXTURE28: 0x84DC;
    /** Type: GLenum */
    readonly TEXTURE29: 0x84DD;
    /** Type: GLenum */
    readonly TEXTURE30: 0x84DE;
    /** Type: GLenum */
    readonly TEXTURE31: 0x84DF;
    /** Type: GLenum */
    readonly ACTIVE_TEXTURE: 0x84E0;
    /** Type: GLenum */
    readonly REPEAT: 0x2901;
    /** Type: GLenum */
    readonly CLAMP_TO_EDGE: 0x812F;
    /** Type: GLenum */
    readonly MIRRORED_REPEAT: 0x8370;
    /** Type: GLenum */
    readonly FLOAT_VEC2: 0x8B50;
    /** Type: GLenum */
    readonly FLOAT_VEC3: 0x8B51;
    /** Type: GLenum */
    readonly FLOAT_VEC4: 0x8B52;
    /** Type: GLenum */
    readonly INT_VEC2: 0x8B53;
    /** Type: GLenum */
    readonly INT_VEC3: 0x8B54;
    /** Type: GLenum */
    readonly INT_VEC4: 0x8B55;
    /** Type: GLenum */
    readonly BOOL: 0x8B56;
    /** Type: GLenum */
    readonly BOOL_VEC2: 0x8B57;
    /** Type: GLenum */
    readonly BOOL_VEC3: 0x8B58;
    /** Type: GLenum */
    readonly BOOL_VEC4: 0x8B59;
    /** Type: GLenum */
    readonly FLOAT_MAT2: 0x8B5A;
    /** Type: GLenum */
    readonly FLOAT_MAT3: 0x8B5B;
    /** Type: GLenum */
    readonly FLOAT_MAT4: 0x8B5C;
    /** Type: GLenum */
    readonly SAMPLER_2D: 0x8B5E;
    /** Type: GLenum */
    readonly SAMPLER_CUBE: 0x8B60;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    /** Type: GLenum */
    readonly COMPILE_STATUS: 0x8B81;
    /** Type: GLenum */
    readonly LOW_FLOAT: 0x8DF0;
    /** Type: GLenum */
    readonly MEDIUM_FLOAT: 0x8DF1;
    /** Type: GLenum */
    readonly HIGH_FLOAT: 0x8DF2;
    /** Type: GLenum */
    readonly LOW_INT: 0x8DF3;
    /** Type: GLenum */
    readonly MEDIUM_INT: 0x8DF4;
    /** Type: GLenum */
    readonly HIGH_INT: 0x8DF5;
    /** Type: GLenum */
    readonly FRAMEBUFFER: 0x8D40;
    /** Type: GLenum */
    readonly RENDERBUFFER: 0x8D41;
    /** Type: GLenum */
    readonly RGBA4: 0x8056;
    /** Type: GLenum */
    readonly RGB5_A1: 0x8057;
    /** Type: GLenum */
    readonly RGBA8: 0x8058;
    /** Type: GLenum */
    readonly RGB565: 0x8D62;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT16: 0x81A5;
    /** Type: GLenum */
    readonly STENCIL_INDEX8: 0x8D48;
    /** Type: GLenum */
    readonly DEPTH_STENCIL: 0x84F9;
    /** Type: GLenum */
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    /** Type: GLenum */
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    /** Type: GLenum */
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    /** Type: GLenum */
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    /** Type: GLenum */
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    /** Type: GLenum */
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    /** Type: GLenum */
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    /** Type: GLenum */
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    /** Type: GLenum */
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    /** Type: GLenum */
    readonly DEPTH_ATTACHMENT: 0x8D00;
    /** Type: GLenum */
    readonly STENCIL_ATTACHMENT: 0x8D20;
    /** Type: GLenum */
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    /** Type: GLenum */
    readonly NONE: 0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    /** Type: GLenum */
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    /** Type: GLenum */
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    /** Type: GLenum */
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    /** Type: GLenum */
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    /** Type: GLenum */
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    /** Type: GLenum */
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    /** Type: GLenum */
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    /** Type: GLenum */
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    /** Type: GLenum */
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    /** Type: GLenum */
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGL2RenderingContextBase {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginQuery)
     */
    beginQuery(target: GLenum, query: WebGLQuery): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback)
     */
    beginTransformFeedback(primitiveMode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferBase)
     */
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferRange)
     */
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindSampler)
     */
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback)
     */
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
     */
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/blitFramebuffer)
     */
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: number): void;
    /**
     * Type: GLenum
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clientWaitSync)
     */
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
     */
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
     */
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyBufferSubData)
     */
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
     */
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * Type: WebGLQuery
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createQuery)
     */
    createQuery(): WebGLQuery;
    /**
     * Type: WebGLSampler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createSampler)
     */
    createSampler(): WebGLSampler;
    /**
     * Type: WebGLTransformFeedback
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createTransformFeedback)
     */
    createTransformFeedback(): WebGLTransformFeedback;
    /**
     * Type: WebGLVertexArrayObject
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createVertexArray)
     */
    createVertexArray(): WebGLVertexArrayObject;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteQuery)
     */
    deleteQuery(query: WebGLQuery | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSampler)
     */
    deleteSampler(sampler: WebGLSampler | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSync)
     */
    deleteSync(sync: WebGLSync | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback)
     */
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
     */
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
     */
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawBuffers)
     */
    drawBuffers(buffers: GLenum[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
     */
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawRangeElements)
     */
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endQuery)
     */
    endQuery(target: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endTransformFeedback)
     */
    endTransformFeedback(): void;
    /**
     * Type: WebGLSync
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/fenceSync)
     */
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer)
     */
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName)
     */
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter)
     */
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
     */
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getBufferSubData)
     */
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView<ArrayBufferLike>, dstOffset?: number, length?: GLuint): void;
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getFragDataLocation)
     */
    getFragDataLocation(program: WebGLProgram, name: string): GLint;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
     */
    getIndexedParameter(target: GLenum, index: GLuint): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter)
     */
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
    /**
     * Type: WebGLQuery
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQuery)
     */
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQueryParameter)
     */
    getQueryParameter(query: WebGLQuery, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSamplerParameter)
     */
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSyncParameter)
     */
    getSyncParameter(sync: WebGLSync, pname: GLenum): any;
    /**
     * Type: WebGLActiveInfo
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)
     */
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /**
     * Type: GLuint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
     */
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
     */
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
     */
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
     */
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isQuery)
     */
    isQuery(query: WebGLQuery | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSampler)
     */
    isSampler(sampler: WebGLSampler | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSync)
     */
    isSync(sync: WebGLSync | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isTransformFeedback)
     */
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isVertexArray)
     */
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback)
     */
    pauseTransformFeedback(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/readBuffer)
     */
    readBuffer(src: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)
     */
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback)
     */
    resumeTransformFeedback(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter)
     */
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter)
     */
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texImage3D)
     */
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage2D)
     */
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage3D)
     */
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texSubImage3D)
     */
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike> | null, srcOffset?: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
     */
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding)
     */
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
     */
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4iv(index: GLuint, values: Int32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
     */
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/waitSync)
     */
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
    /** Type: GLenum */
    readonly READ_BUFFER: 0x0C02;
    /** Type: GLenum */
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    /** Type: GLenum */
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    /** Type: GLenum */
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    /** Type: GLenum */
    readonly PACK_ROW_LENGTH: 0x0D02;
    /** Type: GLenum */
    readonly PACK_SKIP_ROWS: 0x0D03;
    /** Type: GLenum */
    readonly PACK_SKIP_PIXELS: 0x0D04;
    /** Type: GLenum */
    readonly COLOR: 0x1800;
    /** Type: GLenum */
    readonly DEPTH: 0x1801;
    /** Type: GLenum */
    readonly STENCIL: 0x1802;
    /** Type: GLenum */
    readonly RED: 0x1903;
    /** Type: GLenum */
    readonly RGB8: 0x8051;
    /** Type: GLenum */
    readonly RGB10_A2: 0x8059;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_3D: 0x806A;
    /** Type: GLenum */
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    /** Type: GLenum */
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    /** Type: GLenum */
    readonly TEXTURE_3D: 0x806F;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_R: 0x8072;
    /** Type: GLenum */
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    /** Type: GLenum */
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    /** Type: GLenum */
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    /** Type: GLenum */
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    /** Type: GLenum */
    readonly TEXTURE_MIN_LOD: 0x813A;
    /** Type: GLenum */
    readonly TEXTURE_MAX_LOD: 0x813B;
    /** Type: GLenum */
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    /** Type: GLenum */
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    /** Type: GLenum */
    readonly MIN: 0x8007;
    /** Type: GLenum */
    readonly MAX: 0x8008;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT24: 0x81A6;
    /** Type: GLenum */
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    /** Type: GLenum */
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    /** Type: GLenum */
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    /** Type: GLenum */
    readonly CURRENT_QUERY: 0x8865;
    /** Type: GLenum */
    readonly QUERY_RESULT: 0x8866;
    /** Type: GLenum */
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    /** Type: GLenum */
    readonly STREAM_READ: 0x88E1;
    /** Type: GLenum */
    readonly STREAM_COPY: 0x88E2;
    /** Type: GLenum */
    readonly STATIC_READ: 0x88E5;
    /** Type: GLenum */
    readonly STATIC_COPY: 0x88E6;
    /** Type: GLenum */
    readonly DYNAMIC_READ: 0x88E9;
    /** Type: GLenum */
    readonly DYNAMIC_COPY: 0x88EA;
    /** Type: GLenum */
    readonly MAX_DRAW_BUFFERS: 0x8824;
    /** Type: GLenum */
    readonly DRAW_BUFFER0: 0x8825;
    /** Type: GLenum */
    readonly DRAW_BUFFER1: 0x8826;
    /** Type: GLenum */
    readonly DRAW_BUFFER2: 0x8827;
    /** Type: GLenum */
    readonly DRAW_BUFFER3: 0x8828;
    /** Type: GLenum */
    readonly DRAW_BUFFER4: 0x8829;
    /** Type: GLenum */
    readonly DRAW_BUFFER5: 0x882A;
    /** Type: GLenum */
    readonly DRAW_BUFFER6: 0x882B;
    /** Type: GLenum */
    readonly DRAW_BUFFER7: 0x882C;
    /** Type: GLenum */
    readonly DRAW_BUFFER8: 0x882D;
    /** Type: GLenum */
    readonly DRAW_BUFFER9: 0x882E;
    /** Type: GLenum */
    readonly DRAW_BUFFER10: 0x882F;
    /** Type: GLenum */
    readonly DRAW_BUFFER11: 0x8830;
    /** Type: GLenum */
    readonly DRAW_BUFFER12: 0x8831;
    /** Type: GLenum */
    readonly DRAW_BUFFER13: 0x8832;
    /** Type: GLenum */
    readonly DRAW_BUFFER14: 0x8833;
    /** Type: GLenum */
    readonly DRAW_BUFFER15: 0x8834;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    /** Type: GLenum */
    readonly SAMPLER_3D: 0x8B5F;
    /** Type: GLenum */
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    /** Type: GLenum */
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    /** Type: GLenum */
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    /** Type: GLenum */
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    /** Type: GLenum */
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    /** Type: GLenum */
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    /** Type: GLenum */
    readonly FLOAT_MAT2x3: 0x8B65;
    /** Type: GLenum */
    readonly FLOAT_MAT2x4: 0x8B66;
    /** Type: GLenum */
    readonly FLOAT_MAT3x2: 0x8B67;
    /** Type: GLenum */
    readonly FLOAT_MAT3x4: 0x8B68;
    /** Type: GLenum */
    readonly FLOAT_MAT4x2: 0x8B69;
    /** Type: GLenum */
    readonly FLOAT_MAT4x3: 0x8B6A;
    /** Type: GLenum */
    readonly SRGB: 0x8C40;
    /** Type: GLenum */
    readonly SRGB8: 0x8C41;
    /** Type: GLenum */
    readonly SRGB8_ALPHA8: 0x8C43;
    /** Type: GLenum */
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    /** Type: GLenum */
    readonly RGBA32F: 0x8814;
    /** Type: GLenum */
    readonly RGB32F: 0x8815;
    /** Type: GLenum */
    readonly RGBA16F: 0x881A;
    /** Type: GLenum */
    readonly RGB16F: 0x881B;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    /** Type: GLenum */
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    /** Type: GLenum */
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    /** Type: GLenum */
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    /** Type: GLenum */
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    /** Type: GLenum */
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    /** Type: GLenum */
    readonly R11F_G11F_B10F: 0x8C3A;
    /** Type: GLenum */
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    /** Type: GLenum */
    readonly RGB9_E5: 0x8C3D;
    /** Type: GLenum */
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    /** Type: GLenum */
    readonly RASTERIZER_DISCARD: 0x8C89;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    /** Type: GLenum */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    /** Type: GLenum */
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    /** Type: GLenum */
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    /** Type: GLenum */
    readonly RGBA32UI: 0x8D70;
    /** Type: GLenum */
    readonly RGB32UI: 0x8D71;
    /** Type: GLenum */
    readonly RGBA16UI: 0x8D76;
    /** Type: GLenum */
    readonly RGB16UI: 0x8D77;
    /** Type: GLenum */
    readonly RGBA8UI: 0x8D7C;
    /** Type: GLenum */
    readonly RGB8UI: 0x8D7D;
    /** Type: GLenum */
    readonly RGBA32I: 0x8D82;
    /** Type: GLenum */
    readonly RGB32I: 0x8D83;
    /** Type: GLenum */
    readonly RGBA16I: 0x8D88;
    /** Type: GLenum */
    readonly RGB16I: 0x8D89;
    /** Type: GLenum */
    readonly RGBA8I: 0x8D8E;
    /** Type: GLenum */
    readonly RGB8I: 0x8D8F;
    /** Type: GLenum */
    readonly RED_INTEGER: 0x8D94;
    /** Type: GLenum */
    readonly RGB_INTEGER: 0x8D98;
    /** Type: GLenum */
    readonly RGBA_INTEGER: 0x8D99;
    /** Type: GLenum */
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    /** Type: GLenum */
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    /** Type: GLenum */
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    /** Type: GLenum */
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    /** Type: GLenum */
    readonly INT_SAMPLER_2D: 0x8DCA;
    /** Type: GLenum */
    readonly INT_SAMPLER_3D: 0x8DCB;
    /** Type: GLenum */
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    /** Type: GLenum */
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    /** Type: GLenum */
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    /** Type: GLenum */
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    /** Type: GLenum */
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    /** Type: GLenum */
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    /** Type: GLenum */
    readonly UNSIGNED_INT_24_8: 0x84FA;
    /** Type: GLenum */
    readonly DEPTH24_STENCIL8: 0x88F0;
    /** Type: GLenum */
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    /** Type: GLenum */
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    /** Type: GLenum */
    readonly READ_FRAMEBUFFER: 0x8CA8;
    /** Type: GLenum */
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    /** Type: GLenum */
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    /** Type: GLenum */
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    /** Type: GLenum */
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT13: 0x8CED;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    /** Type: GLenum */
    readonly MAX_SAMPLES: 0x8D57;
    /** Type: GLenum */
    readonly HALF_FLOAT: 0x140B;
    /** Type: GLenum */
    readonly RG: 0x8227;
    /** Type: GLenum */
    readonly RG_INTEGER: 0x8228;
    /** Type: GLenum */
    readonly R8: 0x8229;
    /** Type: GLenum */
    readonly RG8: 0x822B;
    /** Type: GLenum */
    readonly R16F: 0x822D;
    /** Type: GLenum */
    readonly R32F: 0x822E;
    /** Type: GLenum */
    readonly RG16F: 0x822F;
    /** Type: GLenum */
    readonly RG32F: 0x8230;
    /** Type: GLenum */
    readonly R8I: 0x8231;
    /** Type: GLenum */
    readonly R8UI: 0x8232;
    /** Type: GLenum */
    readonly R16I: 0x8233;
    /** Type: GLenum */
    readonly R16UI: 0x8234;
    /** Type: GLenum */
    readonly R32I: 0x8235;
    /** Type: GLenum */
    readonly R32UI: 0x8236;
    /** Type: GLenum */
    readonly RG8I: 0x8237;
    /** Type: GLenum */
    readonly RG8UI: 0x8238;
    /** Type: GLenum */
    readonly RG16I: 0x8239;
    /** Type: GLenum */
    readonly RG16UI: 0x823A;
    /** Type: GLenum */
    readonly RG32I: 0x823B;
    /** Type: GLenum */
    readonly RG32UI: 0x823C;
    /** Type: GLenum */
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    /** Type: GLenum */
    readonly R8_SNORM: 0x8F94;
    /** Type: GLenum */
    readonly RG8_SNORM: 0x8F95;
    /** Type: GLenum */
    readonly RGB8_SNORM: 0x8F96;
    /** Type: GLenum */
    readonly RGBA8_SNORM: 0x8F97;
    /** Type: GLenum */
    readonly SIGNED_NORMALIZED: 0x8F9C;
    /** Type: GLenum */
    readonly COPY_READ_BUFFER: 0x8F36;
    /** Type: GLenum */
    readonly COPY_WRITE_BUFFER: 0x8F37;
    /** Type: GLenum */
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    /** Type: GLenum */
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER: 0x8A11;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_START: 0x8A29;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    /** Type: GLenum */
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    /** Type: GLenum */
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    /** Type: GLenum */
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    /** Type: GLenum */
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    /** Type: GLenum */
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    /** Type: GLenum */
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    /** Type: GLenum */
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    /** Type: GLenum */
    readonly UNIFORM_TYPE: 0x8A37;
    /** Type: GLenum */
    readonly UNIFORM_SIZE: 0x8A38;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    /** Type: GLenum */
    readonly UNIFORM_OFFSET: 0x8A3B;
    /** Type: GLenum */
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    /** Type: GLenum */
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    /** Type: GLenum */
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    /** Type: GLenum */
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    /** Type: GLenum */
    readonly INVALID_INDEX: 0xFFFFFFFF;
    /** Type: GLenum */
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    /** Type: GLenum */
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    /** Type: GLenum */
    readonly OBJECT_TYPE: 0x9112;
    /** Type: GLenum */
    readonly SYNC_CONDITION: 0x9113;
    /** Type: GLenum */
    readonly SYNC_STATUS: 0x9114;
    /** Type: GLenum */
    readonly SYNC_FLAGS: 0x9115;
    /** Type: GLenum */
    readonly SYNC_FENCE: 0x9116;
    /** Type: GLenum */
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    /** Type: GLenum */
    readonly UNSIGNALED: 0x9118;
    /** Type: GLenum */
    readonly SIGNALED: 0x9119;
    /** Type: GLenum */
    readonly ALREADY_SIGNALED: 0x911A;
    /** Type: GLenum */
    readonly TIMEOUT_EXPIRED: 0x911B;
    /** Type: GLenum */
    readonly CONDITION_SATISFIED: 0x911C;
    /** Type: GLenum */
    readonly WAIT_FAILED: 0x911D;
    /** Type: GLenum */
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    /** Type: GLenum */
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    /** Type: GLenum */
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    /** Type: GLenum */
    readonly SAMPLER_BINDING: 0x8919;
    /** Type: GLenum */
    readonly RGB10_A2UI: 0x906F;
    /** Type: GLenum */
    readonly INT_2_10_10_10_REV: 0x8D9F;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    /** Type: GLenum */
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    /** Type: GLenum */
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    /** Type: GLenum */
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    /** Type: GLenum */
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    /** Type: GLint64 */
    readonly TIMEOUT_IGNORED: -1;
    /** Type: GLenum */
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
}

interface WebGL2RenderingContextOverloads {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferData)
     */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, srcData: AllowSharedBufferSource | null, usage: GLenum): void;
    bufferData(target: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, usage: GLenum, srcOffset: number, length?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferSubData)
     */
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: AllowSharedBufferSource): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number, length?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
     */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
     */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels)
     */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike> | null): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike>, dstOffset: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D)
     */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D)
     */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
}

/**
 * The **WebGLActiveInfo** interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo)
 */
interface WebGLActiveInfo {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/name)
     */
    readonly name: string;
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/size)
     */
    readonly size: GLint;
    /**
     * Type: GLenum
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/type)
     */
    readonly type: GLenum;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

/**
 * The **WebGLBuffer** interface is part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLBuffer)
 */
interface WebGLBuffer {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

/**
 * The **WebGLContextEvent** interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent)
 */
interface WebGLContextEvent extends Event {
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent/statusMessage)
     */
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

/**
 * The **WebGLFramebuffer** interface is part of the WebGL API and represents a collection of buffers that serve as a rendering destination.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLFramebuffer)
 */
interface WebGLFramebuffer {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

/**
 * The **`WebGLProgram`** is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLProgram)
 */
interface WebGLProgram {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};

/**
 * The **`WebGLQuery`** interface is part of the WebGL 2 API and provides ways to asynchronously query for information.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLQuery)
 */
interface WebGLQuery {
}

declare var WebGLQuery: {
    prototype: WebGLQuery;
    new(): WebGLQuery;
};

/**
 * The **WebGLRenderbuffer** interface is part of the WebGL API and represents a buffer that can contain an image, or that can be a source or target of a rendering operation.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderbuffer)
 */
interface WebGLRenderbuffer {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

/**
 * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)
 */
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    /** Type: GLenum */
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    /** Type: GLenum */
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    /** Type: GLenum */
    readonly COLOR_BUFFER_BIT: 0x00004000;
    /** Type: GLenum */
    readonly POINTS: 0x0000;
    /** Type: GLenum */
    readonly LINES: 0x0001;
    /** Type: GLenum */
    readonly LINE_LOOP: 0x0002;
    /** Type: GLenum */
    readonly LINE_STRIP: 0x0003;
    /** Type: GLenum */
    readonly TRIANGLES: 0x0004;
    /** Type: GLenum */
    readonly TRIANGLE_STRIP: 0x0005;
    /** Type: GLenum */
    readonly TRIANGLE_FAN: 0x0006;
    /** Type: GLenum */
    readonly ZERO: 0;
    /** Type: GLenum */
    readonly ONE: 1;
    /** Type: GLenum */
    readonly SRC_COLOR: 0x0300;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    /** Type: GLenum */
    readonly SRC_ALPHA: 0x0302;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    /** Type: GLenum */
    readonly DST_ALPHA: 0x0304;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    /** Type: GLenum */
    readonly DST_COLOR: 0x0306;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    /** Type: GLenum */
    readonly SRC_ALPHA_SATURATE: 0x0308;
    /** Type: GLenum */
    readonly FUNC_ADD: 0x8006;
    /** Type: GLenum */
    readonly BLEND_EQUATION: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_RGB: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    /** Type: GLenum */
    readonly FUNC_SUBTRACT: 0x800A;
    /** Type: GLenum */
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    /** Type: GLenum */
    readonly BLEND_DST_RGB: 0x80C8;
    /** Type: GLenum */
    readonly BLEND_SRC_RGB: 0x80C9;
    /** Type: GLenum */
    readonly BLEND_DST_ALPHA: 0x80CA;
    /** Type: GLenum */
    readonly BLEND_SRC_ALPHA: 0x80CB;
    /** Type: GLenum */
    readonly CONSTANT_COLOR: 0x8001;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    /** Type: GLenum */
    readonly CONSTANT_ALPHA: 0x8003;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    /** Type: GLenum */
    readonly BLEND_COLOR: 0x8005;
    /** Type: GLenum */
    readonly ARRAY_BUFFER: 0x8892;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    /** Type: GLenum */
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    /** Type: GLenum */
    readonly STREAM_DRAW: 0x88E0;
    /** Type: GLenum */
    readonly STATIC_DRAW: 0x88E4;
    /** Type: GLenum */
    readonly DYNAMIC_DRAW: 0x88E8;
    /** Type: GLenum */
    readonly BUFFER_SIZE: 0x8764;
    /** Type: GLenum */
    readonly BUFFER_USAGE: 0x8765;
    /** Type: GLenum */
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    /** Type: GLenum */
    readonly FRONT: 0x0404;
    /** Type: GLenum */
    readonly BACK: 0x0405;
    /** Type: GLenum */
    readonly FRONT_AND_BACK: 0x0408;
    /** Type: GLenum */
    readonly CULL_FACE: 0x0B44;
    /** Type: GLenum */
    readonly BLEND: 0x0BE2;
    /** Type: GLenum */
    readonly DITHER: 0x0BD0;
    /** Type: GLenum */
    readonly STENCIL_TEST: 0x0B90;
    /** Type: GLenum */
    readonly DEPTH_TEST: 0x0B71;
    /** Type: GLenum */
    readonly SCISSOR_TEST: 0x0C11;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FILL: 0x8037;
    /** Type: GLenum */
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE: 0x80A0;
    /** Type: GLenum */
    readonly NO_ERROR: 0;
    /** Type: GLenum */
    readonly INVALID_ENUM: 0x0500;
    /** Type: GLenum */
    readonly INVALID_VALUE: 0x0501;
    /** Type: GLenum */
    readonly INVALID_OPERATION: 0x0502;
    /** Type: GLenum */
    readonly OUT_OF_MEMORY: 0x0505;
    /** Type: GLenum */
    readonly CW: 0x0900;
    /** Type: GLenum */
    readonly CCW: 0x0901;
    /** Type: GLenum */
    readonly LINE_WIDTH: 0x0B21;
    /** Type: GLenum */
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    /** Type: GLenum */
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    /** Type: GLenum */
    readonly CULL_FACE_MODE: 0x0B45;
    /** Type: GLenum */
    readonly FRONT_FACE: 0x0B46;
    /** Type: GLenum */
    readonly DEPTH_RANGE: 0x0B70;
    /** Type: GLenum */
    readonly DEPTH_WRITEMASK: 0x0B72;
    /** Type: GLenum */
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    /** Type: GLenum */
    readonly DEPTH_FUNC: 0x0B74;
    /** Type: GLenum */
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    /** Type: GLenum */
    readonly STENCIL_FUNC: 0x0B92;
    /** Type: GLenum */
    readonly STENCIL_FAIL: 0x0B94;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    /** Type: GLenum */
    readonly STENCIL_REF: 0x0B97;
    /** Type: GLenum */
    readonly STENCIL_VALUE_MASK: 0x0B93;
    /** Type: GLenum */
    readonly STENCIL_WRITEMASK: 0x0B98;
    /** Type: GLenum */
    readonly STENCIL_BACK_FUNC: 0x8800;
    /** Type: GLenum */
    readonly STENCIL_BACK_FAIL: 0x8801;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    /** Type: GLenum */
    readonly STENCIL_BACK_REF: 0x8CA3;
    /** Type: GLenum */
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    /** Type: GLenum */
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    /** Type: undefined */
    readonly VIEWPORT: 0x0BA2;
    /** Type: GLenum */
    readonly SCISSOR_BOX: 0x0C10;
    /** Type: GLenum */
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    /** Type: GLenum */
    readonly COLOR_WRITEMASK: 0x0C23;
    /** Type: GLenum */
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    /** Type: GLenum */
    readonly PACK_ALIGNMENT: 0x0D05;
    /** Type: GLenum */
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    /** Type: GLenum */
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    /** Type: GLenum */
    readonly SUBPIXEL_BITS: 0x0D50;
    /** Type: GLenum */
    readonly RED_BITS: 0x0D52;
    /** Type: GLenum */
    readonly GREEN_BITS: 0x0D53;
    /** Type: GLenum */
    readonly BLUE_BITS: 0x0D54;
    /** Type: GLenum */
    readonly ALPHA_BITS: 0x0D55;
    /** Type: GLenum */
    readonly DEPTH_BITS: 0x0D56;
    /** Type: GLenum */
    readonly STENCIL_BITS: 0x0D57;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_2D: 0x8069;
    /** Type: GLenum */
    readonly SAMPLE_BUFFERS: 0x80A8;
    /** Type: GLenum */
    readonly SAMPLES: 0x80A9;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    /** Type: GLenum */
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    /** Type: GLenum */
    readonly DONT_CARE: 0x1100;
    /** Type: GLenum */
    readonly FASTEST: 0x1101;
    /** Type: GLenum */
    readonly NICEST: 0x1102;
    /** Type: GLenum */
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    /** Type: GLenum */
    readonly BYTE: 0x1400;
    /** Type: GLenum */
    readonly UNSIGNED_BYTE: 0x1401;
    /** Type: GLenum */
    readonly SHORT: 0x1402;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT: 0x1403;
    /** Type: GLenum */
    readonly INT: 0x1404;
    /** Type: GLenum */
    readonly UNSIGNED_INT: 0x1405;
    /** Type: GLenum */
    readonly FLOAT: 0x1406;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT: 0x1902;
    /** Type: GLenum */
    readonly ALPHA: 0x1906;
    /** Type: GLenum */
    readonly RGB: 0x1907;
    /** Type: GLenum */
    readonly RGBA: 0x1908;
    /** Type: GLenum */
    readonly LUMINANCE: 0x1909;
    /** Type: GLenum */
    readonly LUMINANCE_ALPHA: 0x190A;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    /** Type: GLenum */
    readonly FRAGMENT_SHADER: 0x8B30;
    /** Type: GLenum */
    readonly VERTEX_SHADER: 0x8B31;
    /** Type: GLenum */
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    /** Type: GLenum */
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    /** Type: GLenum */
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    /** Type: GLenum */
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    /** Type: GLenum */
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    /** Type: GLenum */
    readonly SHADER_TYPE: 0x8B4F;
    /** Type: GLenum */
    readonly DELETE_STATUS: 0x8B80;
    /** Type: GLenum */
    readonly LINK_STATUS: 0x8B82;
    /** Type: GLenum */
    readonly VALIDATE_STATUS: 0x8B83;
    /** Type: GLenum */
    readonly ATTACHED_SHADERS: 0x8B85;
    /** Type: GLenum */
    readonly ACTIVE_UNIFORMS: 0x8B86;
    /** Type: GLenum */
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    /** Type: GLenum */
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    /** Type: GLenum */
    readonly CURRENT_PROGRAM: 0x8B8D;
    /** Type: GLenum */
    readonly NEVER: 0x0200;
    /** Type: GLenum */
    readonly LESS: 0x0201;
    /** Type: GLenum */
    readonly EQUAL: 0x0202;
    /** Type: GLenum */
    readonly LEQUAL: 0x0203;
    /** Type: GLenum */
    readonly GREATER: 0x0204;
    /** Type: GLenum */
    readonly NOTEQUAL: 0x0205;
    /** Type: GLenum */
    readonly GEQUAL: 0x0206;
    /** Type: GLenum */
    readonly ALWAYS: 0x0207;
    /** Type: GLenum */
    readonly KEEP: 0x1E00;
    /** Type: GLenum */
    readonly REPLACE: 0x1E01;
    /** Type: GLenum */
    readonly INCR: 0x1E02;
    /** Type: GLenum */
    readonly DECR: 0x1E03;
    /** Type: GLenum */
    readonly INVERT: 0x150A;
    /** Type: GLenum */
    readonly INCR_WRAP: 0x8507;
    /** Type: GLenum */
    readonly DECR_WRAP: 0x8508;
    /** Type: GLenum */
    readonly VENDOR: 0x1F00;
    /** Type: GLenum */
    readonly RENDERER: 0x1F01;
    /** Type: GLenum */
    readonly VERSION: 0x1F02;
    /** Type: GLenum */
    readonly NEAREST: 0x2600;
    /** Type: GLenum */
    readonly LINEAR: 0x2601;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    /** Type: GLenum */
    readonly TEXTURE_MAG_FILTER: 0x2800;
    /** Type: GLenum */
    readonly TEXTURE_MIN_FILTER: 0x2801;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_S: 0x2802;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_T: 0x2803;
    /** Type: GLenum */
    readonly TEXTURE_2D: 0x0DE1;
    /** Type: GLenum */
    readonly TEXTURE: 0x1702;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP: 0x8513;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    /** Type: GLenum */
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    /** Type: GLenum */
    readonly TEXTURE0: 0x84C0;
    /** Type: GLenum */
    readonly TEXTURE1: 0x84C1;
    /** Type: GLenum */
    readonly TEXTURE2: 0x84C2;
    /** Type: GLenum */
    readonly TEXTURE3: 0x84C3;
    /** Type: GLenum */
    readonly TEXTURE4: 0x84C4;
    /** Type: GLenum */
    readonly TEXTURE5: 0x84C5;
    /** Type: GLenum */
    readonly TEXTURE6: 0x84C6;
    /** Type: GLenum */
    readonly TEXTURE7: 0x84C7;
    /** Type: GLenum */
    readonly TEXTURE8: 0x84C8;
    /** Type: GLenum */
    readonly TEXTURE9: 0x84C9;
    /** Type: GLenum */
    readonly TEXTURE10: 0x84CA;
    /** Type: GLenum */
    readonly TEXTURE11: 0x84CB;
    /** Type: GLenum */
    readonly TEXTURE12: 0x84CC;
    /** Type: GLenum */
    readonly TEXTURE13: 0x84CD;
    /** Type: GLenum */
    readonly TEXTURE14: 0x84CE;
    /** Type: GLenum */
    readonly TEXTURE15: 0x84CF;
    /** Type: GLenum */
    readonly TEXTURE16: 0x84D0;
    /** Type: GLenum */
    readonly TEXTURE17: 0x84D1;
    /** Type: GLenum */
    readonly TEXTURE18: 0x84D2;
    /** Type: GLenum */
    readonly TEXTURE19: 0x84D3;
    /** Type: GLenum */
    readonly TEXTURE20: 0x84D4;
    /** Type: GLenum */
    readonly TEXTURE21: 0x84D5;
    /** Type: GLenum */
    readonly TEXTURE22: 0x84D6;
    /** Type: GLenum */
    readonly TEXTURE23: 0x84D7;
    /** Type: GLenum */
    readonly TEXTURE24: 0x84D8;
    /** Type: GLenum */
    readonly TEXTURE25: 0x84D9;
    /** Type: GLenum */
    readonly TEXTURE26: 0x84DA;
    /** Type: GLenum */
    readonly TEXTURE27: 0x84DB;
    /** Type: GLenum */
    readonly TEXTURE28: 0x84DC;
    /** Type: GLenum */
    readonly TEXTURE29: 0x84DD;
    /** Type: GLenum */
    readonly TEXTURE30: 0x84DE;
    /** Type: GLenum */
    readonly TEXTURE31: 0x84DF;
    /** Type: GLenum */
    readonly ACTIVE_TEXTURE: 0x84E0;
    /** Type: GLenum */
    readonly REPEAT: 0x2901;
    /** Type: GLenum */
    readonly CLAMP_TO_EDGE: 0x812F;
    /** Type: GLenum */
    readonly MIRRORED_REPEAT: 0x8370;
    /** Type: GLenum */
    readonly FLOAT_VEC2: 0x8B50;
    /** Type: GLenum */
    readonly FLOAT_VEC3: 0x8B51;
    /** Type: GLenum */
    readonly FLOAT_VEC4: 0x8B52;
    /** Type: GLenum */
    readonly INT_VEC2: 0x8B53;
    /** Type: GLenum */
    readonly INT_VEC3: 0x8B54;
    /** Type: GLenum */
    readonly INT_VEC4: 0x8B55;
    /** Type: GLenum */
    readonly BOOL: 0x8B56;
    /** Type: GLenum */
    readonly BOOL_VEC2: 0x8B57;
    /** Type: GLenum */
    readonly BOOL_VEC3: 0x8B58;
    /** Type: GLenum */
    readonly BOOL_VEC4: 0x8B59;
    /** Type: GLenum */
    readonly FLOAT_MAT2: 0x8B5A;
    /** Type: GLenum */
    readonly FLOAT_MAT3: 0x8B5B;
    /** Type: GLenum */
    readonly FLOAT_MAT4: 0x8B5C;
    /** Type: GLenum */
    readonly SAMPLER_2D: 0x8B5E;
    /** Type: GLenum */
    readonly SAMPLER_CUBE: 0x8B60;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    /** Type: GLenum */
    readonly COMPILE_STATUS: 0x8B81;
    /** Type: GLenum */
    readonly LOW_FLOAT: 0x8DF0;
    /** Type: GLenum */
    readonly MEDIUM_FLOAT: 0x8DF1;
    /** Type: GLenum */
    readonly HIGH_FLOAT: 0x8DF2;
    /** Type: GLenum */
    readonly LOW_INT: 0x8DF3;
    /** Type: GLenum */
    readonly MEDIUM_INT: 0x8DF4;
    /** Type: GLenum */
    readonly HIGH_INT: 0x8DF5;
    /** Type: GLenum */
    readonly FRAMEBUFFER: 0x8D40;
    /** Type: GLenum */
    readonly RENDERBUFFER: 0x8D41;
    /** Type: GLenum */
    readonly RGBA4: 0x8056;
    /** Type: GLenum */
    readonly RGB5_A1: 0x8057;
    /** Type: GLenum */
    readonly RGBA8: 0x8058;
    /** Type: GLenum */
    readonly RGB565: 0x8D62;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT16: 0x81A5;
    /** Type: GLenum */
    readonly STENCIL_INDEX8: 0x8D48;
    /** Type: GLenum */
    readonly DEPTH_STENCIL: 0x84F9;
    /** Type: GLenum */
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    /** Type: GLenum */
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    /** Type: GLenum */
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    /** Type: GLenum */
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    /** Type: GLenum */
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    /** Type: GLenum */
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    /** Type: GLenum */
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    /** Type: GLenum */
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    /** Type: GLenum */
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    /** Type: GLenum */
    readonly DEPTH_ATTACHMENT: 0x8D00;
    /** Type: GLenum */
    readonly STENCIL_ATTACHMENT: 0x8D20;
    /** Type: GLenum */
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    /** Type: GLenum */
    readonly NONE: 0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    /** Type: GLenum */
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    /** Type: GLenum */
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    /** Type: GLenum */
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    /** Type: GLenum */
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    /** Type: GLenum */
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    /** Type: GLenum */
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    /** Type: GLenum */
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    /** Type: GLenum */
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    /** Type: GLenum */
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    /** Type: GLenum */
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGLRenderingContextBase {
    /**
     * Type: PredefinedColorSpace
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawingBufferColorSpace)
     */
    drawingBufferColorSpace: PredefinedColorSpace;
    /**
     * Type: GLsizei
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
     */
    readonly drawingBufferHeight: GLsizei;
    /**
     * Type: GLsizei
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
     */
    readonly drawingBufferWidth: GLsizei;
    /**
     * Type: PredefinedColorSpace
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/unpackColorSpace)
     */
    unpackColorSpace: PredefinedColorSpace;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/activeTexture)
     */
    activeTexture(texture: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/attachShader)
     */
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
     */
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindBuffer)
     */
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
     */
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
     */
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindTexture)
     */
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendColor)
     */
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquation)
     */
    blendEquation(mode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
     */
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFunc)
     */
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
     */
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /**
     * Type: GLenum
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus)
     */
    checkFramebufferStatus(target: GLenum): GLenum;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear)
     */
    clear(mask: GLbitfield): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearColor)
     */
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearDepth)
     */
    clearDepth(depth: GLclampf): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearStencil)
     */
    clearStencil(s: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/colorMask)
     */
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compileShader)
     */
    compileShader(shader: WebGLShader): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
     */
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
     */
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * Type: WebGLBuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createBuffer)
     */
    createBuffer(): WebGLBuffer;
    /**
     * Type: WebGLFramebuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createFramebuffer)
     */
    createFramebuffer(): WebGLFramebuffer;
    /**
     * Type: WebGLProgram
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createProgram)
     */
    createProgram(): WebGLProgram;
    /**
     * Type: WebGLRenderbuffer
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
     */
    createRenderbuffer(): WebGLRenderbuffer;
    /**
     * Type: WebGLShader
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createShader)
     */
    createShader(type: GLenum): WebGLShader | null;
    /**
     * Type: WebGLTexture
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createTexture)
     */
    createTexture(): WebGLTexture;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/cullFace)
     */
    cullFace(mode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteBuffer)
     */
    deleteBuffer(buffer: WebGLBuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
     */
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteProgram)
     */
    deleteProgram(program: WebGLProgram | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
     */
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteShader)
     */
    deleteShader(shader: WebGLShader | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteTexture)
     */
    deleteTexture(texture: WebGLTexture | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthFunc)
     */
    depthFunc(func: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthMask)
     */
    depthMask(flag: GLboolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthRange)
     */
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/detachShader)
     */
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disable)
     */
    disable(cap: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
     */
    disableVertexAttribArray(index: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawArrays)
     */
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawElements)
     */
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enable)
     */
    enable(cap: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
     */
    enableVertexAttribArray(index: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/finish)
     */
    finish(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/flush)
     */
    flush(): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
     */
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
     */
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/frontFace)
     */
    frontFace(mode: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/generateMipmap)
     */
    generateMipmap(target: GLenum): void;
    /**
     * Type: WebGLActiveInfo
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
     */
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /**
     * Type: WebGLActiveInfo
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveUniform)
     */
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
     */
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttribLocation)
     */
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getBufferParameter)
     */
    getBufferParameter(target: GLenum, pname: GLenum): any;
    /**
     * Type: WebGLContextAttributes
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getContextAttributes)
     */
    getContextAttributes(): WebGLContextAttributes | null;
    /**
     * Type: GLenum
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getError)
     */
    getError(): GLenum;
    /**
     * Type: object
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getExtension)
     */
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    getExtension(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    getExtension(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_texture_compression_bptc"): EXT_texture_compression_bptc | null;
    getExtension(extensionName: "EXT_texture_compression_rgtc"): EXT_texture_compression_rgtc | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "OES_fbo_render_mipmap"): OES_fbo_render_mipmap | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    getExtension(extensionName: "WEBGL_compressed_texture_pvrtc"): WEBGL_compressed_texture_pvrtc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_multi_draw"): WEBGL_multi_draw | null;
    getExtension(name: string): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
     */
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getParameter)
     */
    getParameter(pname: GLenum): any;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
     */
    getProgramInfoLog(program: WebGLProgram): string | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramParameter)
     */
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
     */
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
     */
    getShaderInfoLog(shader: WebGLShader): string | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderParameter)
     */
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    /**
     * Type: WebGLShaderPrecisionFormat
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
     */
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderSource)
     */
    getShaderSource(shader: WebGLShader): string | null;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
     */
    getSupportedExtensions(): string[] | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getTexParameter)
     */
    getTexParameter(target: GLenum, pname: GLenum): any;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniform)
     */
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    /**
     * Type: WebGLUniformLocation
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniformLocation)
     */
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
     */
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    /**
     * Type: GLintptr
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
     */
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/hint)
     */
    hint(target: GLenum, mode: GLenum): void;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isBuffer)
     */
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isContextLost)
     */
    isContextLost(): boolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isEnabled)
     */
    isEnabled(cap: GLenum): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isFramebuffer)
     */
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isProgram)
     */
    isProgram(program: WebGLProgram | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
     */
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isShader)
     */
    isShader(shader: WebGLShader | null): GLboolean;
    /**
     * Type: GLboolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isTexture)
     */
    isTexture(texture: WebGLTexture | null): GLboolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/lineWidth)
     */
    lineWidth(width: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/linkProgram)
     */
    linkProgram(program: WebGLProgram): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/pixelStorei)
     */
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/polygonOffset)
     */
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
     */
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/sampleCoverage)
     */
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/scissor)
     */
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/shaderSource)
     */
    shaderSource(shader: WebGLShader, source: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFunc)
     */
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
     */
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMask)
     */
    stencilMask(mask: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
     */
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOp)
     */
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
     */
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter)
     */
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter)
     */
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/useProgram)
     */
    useProgram(program: WebGLProgram | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/validateProgram)
     */
    validateProgram(program: WebGLProgram): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
     */
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/viewport)
     */
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** Type: GLenum */
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    /** Type: GLenum */
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    /** Type: GLenum */
    readonly COLOR_BUFFER_BIT: 0x00004000;
    /** Type: GLenum */
    readonly POINTS: 0x0000;
    /** Type: GLenum */
    readonly LINES: 0x0001;
    /** Type: GLenum */
    readonly LINE_LOOP: 0x0002;
    /** Type: GLenum */
    readonly LINE_STRIP: 0x0003;
    /** Type: GLenum */
    readonly TRIANGLES: 0x0004;
    /** Type: GLenum */
    readonly TRIANGLE_STRIP: 0x0005;
    /** Type: GLenum */
    readonly TRIANGLE_FAN: 0x0006;
    /** Type: GLenum */
    readonly ZERO: 0;
    /** Type: GLenum */
    readonly ONE: 1;
    /** Type: GLenum */
    readonly SRC_COLOR: 0x0300;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    /** Type: GLenum */
    readonly SRC_ALPHA: 0x0302;
    /** Type: GLenum */
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    /** Type: GLenum */
    readonly DST_ALPHA: 0x0304;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    /** Type: GLenum */
    readonly DST_COLOR: 0x0306;
    /** Type: GLenum */
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    /** Type: GLenum */
    readonly SRC_ALPHA_SATURATE: 0x0308;
    /** Type: GLenum */
    readonly FUNC_ADD: 0x8006;
    /** Type: GLenum */
    readonly BLEND_EQUATION: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_RGB: 0x8009;
    /** Type: GLenum */
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    /** Type: GLenum */
    readonly FUNC_SUBTRACT: 0x800A;
    /** Type: GLenum */
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    /** Type: GLenum */
    readonly BLEND_DST_RGB: 0x80C8;
    /** Type: GLenum */
    readonly BLEND_SRC_RGB: 0x80C9;
    /** Type: GLenum */
    readonly BLEND_DST_ALPHA: 0x80CA;
    /** Type: GLenum */
    readonly BLEND_SRC_ALPHA: 0x80CB;
    /** Type: GLenum */
    readonly CONSTANT_COLOR: 0x8001;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    /** Type: GLenum */
    readonly CONSTANT_ALPHA: 0x8003;
    /** Type: GLenum */
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    /** Type: GLenum */
    readonly BLEND_COLOR: 0x8005;
    /** Type: GLenum */
    readonly ARRAY_BUFFER: 0x8892;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    /** Type: GLenum */
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    /** Type: GLenum */
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    /** Type: GLenum */
    readonly STREAM_DRAW: 0x88E0;
    /** Type: GLenum */
    readonly STATIC_DRAW: 0x88E4;
    /** Type: GLenum */
    readonly DYNAMIC_DRAW: 0x88E8;
    /** Type: GLenum */
    readonly BUFFER_SIZE: 0x8764;
    /** Type: GLenum */
    readonly BUFFER_USAGE: 0x8765;
    /** Type: GLenum */
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    /** Type: GLenum */
    readonly FRONT: 0x0404;
    /** Type: GLenum */
    readonly BACK: 0x0405;
    /** Type: GLenum */
    readonly FRONT_AND_BACK: 0x0408;
    /** Type: GLenum */
    readonly CULL_FACE: 0x0B44;
    /** Type: GLenum */
    readonly BLEND: 0x0BE2;
    /** Type: GLenum */
    readonly DITHER: 0x0BD0;
    /** Type: GLenum */
    readonly STENCIL_TEST: 0x0B90;
    /** Type: GLenum */
    readonly DEPTH_TEST: 0x0B71;
    /** Type: GLenum */
    readonly SCISSOR_TEST: 0x0C11;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FILL: 0x8037;
    /** Type: GLenum */
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE: 0x80A0;
    /** Type: GLenum */
    readonly NO_ERROR: 0;
    /** Type: GLenum */
    readonly INVALID_ENUM: 0x0500;
    /** Type: GLenum */
    readonly INVALID_VALUE: 0x0501;
    /** Type: GLenum */
    readonly INVALID_OPERATION: 0x0502;
    /** Type: GLenum */
    readonly OUT_OF_MEMORY: 0x0505;
    /** Type: GLenum */
    readonly CW: 0x0900;
    /** Type: GLenum */
    readonly CCW: 0x0901;
    /** Type: GLenum */
    readonly LINE_WIDTH: 0x0B21;
    /** Type: GLenum */
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    /** Type: GLenum */
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    /** Type: GLenum */
    readonly CULL_FACE_MODE: 0x0B45;
    /** Type: GLenum */
    readonly FRONT_FACE: 0x0B46;
    /** Type: GLenum */
    readonly DEPTH_RANGE: 0x0B70;
    /** Type: GLenum */
    readonly DEPTH_WRITEMASK: 0x0B72;
    /** Type: GLenum */
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    /** Type: GLenum */
    readonly DEPTH_FUNC: 0x0B74;
    /** Type: GLenum */
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    /** Type: GLenum */
    readonly STENCIL_FUNC: 0x0B92;
    /** Type: GLenum */
    readonly STENCIL_FAIL: 0x0B94;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    /** Type: GLenum */
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    /** Type: GLenum */
    readonly STENCIL_REF: 0x0B97;
    /** Type: GLenum */
    readonly STENCIL_VALUE_MASK: 0x0B93;
    /** Type: GLenum */
    readonly STENCIL_WRITEMASK: 0x0B98;
    /** Type: GLenum */
    readonly STENCIL_BACK_FUNC: 0x8800;
    /** Type: GLenum */
    readonly STENCIL_BACK_FAIL: 0x8801;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    /** Type: GLenum */
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    /** Type: GLenum */
    readonly STENCIL_BACK_REF: 0x8CA3;
    /** Type: GLenum */
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    /** Type: GLenum */
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    /** Type: undefined */
    readonly VIEWPORT: 0x0BA2;
    /** Type: GLenum */
    readonly SCISSOR_BOX: 0x0C10;
    /** Type: GLenum */
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    /** Type: GLenum */
    readonly COLOR_WRITEMASK: 0x0C23;
    /** Type: GLenum */
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    /** Type: GLenum */
    readonly PACK_ALIGNMENT: 0x0D05;
    /** Type: GLenum */
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    /** Type: GLenum */
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    /** Type: GLenum */
    readonly SUBPIXEL_BITS: 0x0D50;
    /** Type: GLenum */
    readonly RED_BITS: 0x0D52;
    /** Type: GLenum */
    readonly GREEN_BITS: 0x0D53;
    /** Type: GLenum */
    readonly BLUE_BITS: 0x0D54;
    /** Type: GLenum */
    readonly ALPHA_BITS: 0x0D55;
    /** Type: GLenum */
    readonly DEPTH_BITS: 0x0D56;
    /** Type: GLenum */
    readonly STENCIL_BITS: 0x0D57;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    /** Type: GLenum */
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_2D: 0x8069;
    /** Type: GLenum */
    readonly SAMPLE_BUFFERS: 0x80A8;
    /** Type: GLenum */
    readonly SAMPLES: 0x80A9;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    /** Type: GLenum */
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    /** Type: GLenum */
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    /** Type: GLenum */
    readonly DONT_CARE: 0x1100;
    /** Type: GLenum */
    readonly FASTEST: 0x1101;
    /** Type: GLenum */
    readonly NICEST: 0x1102;
    /** Type: GLenum */
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    /** Type: GLenum */
    readonly BYTE: 0x1400;
    /** Type: GLenum */
    readonly UNSIGNED_BYTE: 0x1401;
    /** Type: GLenum */
    readonly SHORT: 0x1402;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT: 0x1403;
    /** Type: GLenum */
    readonly INT: 0x1404;
    /** Type: GLenum */
    readonly UNSIGNED_INT: 0x1405;
    /** Type: GLenum */
    readonly FLOAT: 0x1406;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT: 0x1902;
    /** Type: GLenum */
    readonly ALPHA: 0x1906;
    /** Type: GLenum */
    readonly RGB: 0x1907;
    /** Type: GLenum */
    readonly RGBA: 0x1908;
    /** Type: GLenum */
    readonly LUMINANCE: 0x1909;
    /** Type: GLenum */
    readonly LUMINANCE_ALPHA: 0x190A;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    /** Type: GLenum */
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    /** Type: GLenum */
    readonly FRAGMENT_SHADER: 0x8B30;
    /** Type: GLenum */
    readonly VERTEX_SHADER: 0x8B31;
    /** Type: GLenum */
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    /** Type: GLenum */
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    /** Type: GLenum */
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    /** Type: GLenum */
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    /** Type: GLenum */
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    /** Type: GLenum */
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    /** Type: GLenum */
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    /** Type: GLenum */
    readonly SHADER_TYPE: 0x8B4F;
    /** Type: GLenum */
    readonly DELETE_STATUS: 0x8B80;
    /** Type: GLenum */
    readonly LINK_STATUS: 0x8B82;
    /** Type: GLenum */
    readonly VALIDATE_STATUS: 0x8B83;
    /** Type: GLenum */
    readonly ATTACHED_SHADERS: 0x8B85;
    /** Type: GLenum */
    readonly ACTIVE_UNIFORMS: 0x8B86;
    /** Type: GLenum */
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    /** Type: GLenum */
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    /** Type: GLenum */
    readonly CURRENT_PROGRAM: 0x8B8D;
    /** Type: GLenum */
    readonly NEVER: 0x0200;
    /** Type: GLenum */
    readonly LESS: 0x0201;
    /** Type: GLenum */
    readonly EQUAL: 0x0202;
    /** Type: GLenum */
    readonly LEQUAL: 0x0203;
    /** Type: GLenum */
    readonly GREATER: 0x0204;
    /** Type: GLenum */
    readonly NOTEQUAL: 0x0205;
    /** Type: GLenum */
    readonly GEQUAL: 0x0206;
    /** Type: GLenum */
    readonly ALWAYS: 0x0207;
    /** Type: GLenum */
    readonly KEEP: 0x1E00;
    /** Type: GLenum */
    readonly REPLACE: 0x1E01;
    /** Type: GLenum */
    readonly INCR: 0x1E02;
    /** Type: GLenum */
    readonly DECR: 0x1E03;
    /** Type: GLenum */
    readonly INVERT: 0x150A;
    /** Type: GLenum */
    readonly INCR_WRAP: 0x8507;
    /** Type: GLenum */
    readonly DECR_WRAP: 0x8508;
    /** Type: GLenum */
    readonly VENDOR: 0x1F00;
    /** Type: GLenum */
    readonly RENDERER: 0x1F01;
    /** Type: GLenum */
    readonly VERSION: 0x1F02;
    /** Type: GLenum */
    readonly NEAREST: 0x2600;
    /** Type: GLenum */
    readonly LINEAR: 0x2601;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    /** Type: GLenum */
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    /** Type: GLenum */
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    /** Type: GLenum */
    readonly TEXTURE_MAG_FILTER: 0x2800;
    /** Type: GLenum */
    readonly TEXTURE_MIN_FILTER: 0x2801;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_S: 0x2802;
    /** Type: GLenum */
    readonly TEXTURE_WRAP_T: 0x2803;
    /** Type: GLenum */
    readonly TEXTURE_2D: 0x0DE1;
    /** Type: GLenum */
    readonly TEXTURE: 0x1702;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP: 0x8513;
    /** Type: GLenum */
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    /** Type: GLenum */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    /** Type: GLenum */
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    /** Type: GLenum */
    readonly TEXTURE0: 0x84C0;
    /** Type: GLenum */
    readonly TEXTURE1: 0x84C1;
    /** Type: GLenum */
    readonly TEXTURE2: 0x84C2;
    /** Type: GLenum */
    readonly TEXTURE3: 0x84C3;
    /** Type: GLenum */
    readonly TEXTURE4: 0x84C4;
    /** Type: GLenum */
    readonly TEXTURE5: 0x84C5;
    /** Type: GLenum */
    readonly TEXTURE6: 0x84C6;
    /** Type: GLenum */
    readonly TEXTURE7: 0x84C7;
    /** Type: GLenum */
    readonly TEXTURE8: 0x84C8;
    /** Type: GLenum */
    readonly TEXTURE9: 0x84C9;
    /** Type: GLenum */
    readonly TEXTURE10: 0x84CA;
    /** Type: GLenum */
    readonly TEXTURE11: 0x84CB;
    /** Type: GLenum */
    readonly TEXTURE12: 0x84CC;
    /** Type: GLenum */
    readonly TEXTURE13: 0x84CD;
    /** Type: GLenum */
    readonly TEXTURE14: 0x84CE;
    /** Type: GLenum */
    readonly TEXTURE15: 0x84CF;
    /** Type: GLenum */
    readonly TEXTURE16: 0x84D0;
    /** Type: GLenum */
    readonly TEXTURE17: 0x84D1;
    /** Type: GLenum */
    readonly TEXTURE18: 0x84D2;
    /** Type: GLenum */
    readonly TEXTURE19: 0x84D3;
    /** Type: GLenum */
    readonly TEXTURE20: 0x84D4;
    /** Type: GLenum */
    readonly TEXTURE21: 0x84D5;
    /** Type: GLenum */
    readonly TEXTURE22: 0x84D6;
    /** Type: GLenum */
    readonly TEXTURE23: 0x84D7;
    /** Type: GLenum */
    readonly TEXTURE24: 0x84D8;
    /** Type: GLenum */
    readonly TEXTURE25: 0x84D9;
    /** Type: GLenum */
    readonly TEXTURE26: 0x84DA;
    /** Type: GLenum */
    readonly TEXTURE27: 0x84DB;
    /** Type: GLenum */
    readonly TEXTURE28: 0x84DC;
    /** Type: GLenum */
    readonly TEXTURE29: 0x84DD;
    /** Type: GLenum */
    readonly TEXTURE30: 0x84DE;
    /** Type: GLenum */
    readonly TEXTURE31: 0x84DF;
    /** Type: GLenum */
    readonly ACTIVE_TEXTURE: 0x84E0;
    /** Type: GLenum */
    readonly REPEAT: 0x2901;
    /** Type: GLenum */
    readonly CLAMP_TO_EDGE: 0x812F;
    /** Type: GLenum */
    readonly MIRRORED_REPEAT: 0x8370;
    /** Type: GLenum */
    readonly FLOAT_VEC2: 0x8B50;
    /** Type: GLenum */
    readonly FLOAT_VEC3: 0x8B51;
    /** Type: GLenum */
    readonly FLOAT_VEC4: 0x8B52;
    /** Type: GLenum */
    readonly INT_VEC2: 0x8B53;
    /** Type: GLenum */
    readonly INT_VEC3: 0x8B54;
    /** Type: GLenum */
    readonly INT_VEC4: 0x8B55;
    /** Type: GLenum */
    readonly BOOL: 0x8B56;
    /** Type: GLenum */
    readonly BOOL_VEC2: 0x8B57;
    /** Type: GLenum */
    readonly BOOL_VEC3: 0x8B58;
    /** Type: GLenum */
    readonly BOOL_VEC4: 0x8B59;
    /** Type: GLenum */
    readonly FLOAT_MAT2: 0x8B5A;
    /** Type: GLenum */
    readonly FLOAT_MAT3: 0x8B5B;
    /** Type: GLenum */
    readonly FLOAT_MAT4: 0x8B5C;
    /** Type: GLenum */
    readonly SAMPLER_2D: 0x8B5E;
    /** Type: GLenum */
    readonly SAMPLER_CUBE: 0x8B60;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    /** Type: GLenum */
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    /** Type: GLenum */
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    /** Type: GLenum */
    readonly COMPILE_STATUS: 0x8B81;
    /** Type: GLenum */
    readonly LOW_FLOAT: 0x8DF0;
    /** Type: GLenum */
    readonly MEDIUM_FLOAT: 0x8DF1;
    /** Type: GLenum */
    readonly HIGH_FLOAT: 0x8DF2;
    /** Type: GLenum */
    readonly LOW_INT: 0x8DF3;
    /** Type: GLenum */
    readonly MEDIUM_INT: 0x8DF4;
    /** Type: GLenum */
    readonly HIGH_INT: 0x8DF5;
    /** Type: GLenum */
    readonly FRAMEBUFFER: 0x8D40;
    /** Type: GLenum */
    readonly RENDERBUFFER: 0x8D41;
    /** Type: GLenum */
    readonly RGBA4: 0x8056;
    /** Type: GLenum */
    readonly RGB5_A1: 0x8057;
    /** Type: GLenum */
    readonly RGBA8: 0x8058;
    /** Type: GLenum */
    readonly RGB565: 0x8D62;
    /** Type: GLenum */
    readonly DEPTH_COMPONENT16: 0x81A5;
    /** Type: GLenum */
    readonly STENCIL_INDEX8: 0x8D48;
    /** Type: GLenum */
    readonly DEPTH_STENCIL: 0x84F9;
    /** Type: GLenum */
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    /** Type: GLenum */
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    /** Type: GLenum */
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    /** Type: GLenum */
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    /** Type: GLenum */
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    /** Type: GLenum */
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    /** Type: GLenum */
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    /** Type: GLenum */
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    /** Type: GLenum */
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    /** Type: GLenum */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    /** Type: GLenum */
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    /** Type: GLenum */
    readonly DEPTH_ATTACHMENT: 0x8D00;
    /** Type: GLenum */
    readonly STENCIL_ATTACHMENT: 0x8D20;
    /** Type: GLenum */
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    /** Type: GLenum */
    readonly NONE: 0;
    /** Type: GLenum */
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    /** Type: GLenum */
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    /** Type: GLenum */
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    /** Type: GLenum */
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    /** Type: GLenum */
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    /** Type: GLenum */
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    /** Type: GLenum */
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    /** Type: GLenum */
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    /** Type: GLenum */
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    /** Type: GLenum */
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    /** Type: GLenum */
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    /** Type: GLenum */
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
}

interface WebGLRenderingContextOverloads {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferData)
     */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: AllowSharedBufferSource | null, usage: GLenum): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferSubData)
     */
    bufferSubData(target: GLenum, offset: GLintptr, data: AllowSharedBufferSource): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
     */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView<ArrayBufferLike>): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
     */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView<ArrayBufferLike>): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels)
     */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D)
     */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D)
     */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}

/**
 * The **`WebGLSampler`** interface is part of the WebGL 2 API and stores sampling parameters for WebGLTexture access inside of a shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSampler)
 */
interface WebGLSampler {
}

declare var WebGLSampler: {
    prototype: WebGLSampler;
    new(): WebGLSampler;
};

/**
 * The **WebGLShader** is part of the WebGL API and can either be a vertex or a fragment shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShader)
 */
interface WebGLShader {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
};

/**
 * The **WebGLShaderPrecisionFormat** interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat)
 */
interface WebGLShaderPrecisionFormat {
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/precision)
     */
    readonly precision: GLint;
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax)
     */
    readonly rangeMax: GLint;
    /**
     * Type: GLint
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin)
     */
    readonly rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

/**
 * The **`WebGLSync`** interface is part of the WebGL 2 API and is used to synchronize activities between the GPU and the application.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSync)
 */
interface WebGLSync {
}

declare var WebGLSync: {
    prototype: WebGLSync;
    new(): WebGLSync;
};

/**
 * The **WebGLTexture** interface is part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTexture)
 */
interface WebGLTexture {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};

/**
 * The **`WebGLTransformFeedback`** interface is part of the WebGL 2 API and enables transform feedback, which is the process of capturing primitives generated by vertex processing.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTransformFeedback)
 */
interface WebGLTransformFeedback {
}

declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new(): WebGLTransformFeedback;
};

/**
 * The **WebGLUniformLocation** interface is part of the WebGL API and represents the location of a uniform variable in a shader program.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLUniformLocation)
 */
interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

/**
 * The **`WebGLVertexArrayObject`** interface is part of the WebGL 2 API, represents vertex array objects (VAOs) pointing to vertex array data, and provides names for different sets of vertex data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject)
 */
interface WebGLVertexArrayObject {
}

declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new(): WebGLVertexArrayObject;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject) */
interface WebGLVertexArrayObjectOES {
}

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The `WebSocket` object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket)
 */
interface WebSocket extends EventTarget {
    /**
     * Type: BinaryType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/binaryType)
     */
    binaryType: BinaryType;
    /**
     * Type: unsigned long long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/bufferedAmount)
     */
    readonly bufferedAmount: number;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/extensions)
     */
    readonly extensions: string;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close_event)
     */
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/error_event)
     */
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/message_event)
     */
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/open_event)
     */
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/protocol)
     */
    readonly protocol: string;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/readyState)
     */
    readonly readyState: number;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/url)
     */
    readonly url: string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
     */
    close(code?: number, reason?: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    /** Type: unsigned short */
    readonly CONNECTING: 0;
    /** Type: unsigned short */
    readonly OPEN: 1;
    /** Type: unsigned short */
    readonly CLOSING: 2;
    /** Type: unsigned short */
    readonly CLOSED: 3;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string | URL, protocols?: string | string[]): WebSocket;
    /** Type: unsigned short */
    readonly CONNECTING: 0;
    /** Type: unsigned short */
    readonly OPEN: 1;
    /** Type: unsigned short */
    readonly CLOSING: 2;
    /** Type: unsigned short */
    readonly CLOSED: 3;
};

/**
 * The **`WebTransport`** interface of the WebTransport API provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport)
 */
interface WebTransport {
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/closed)
     */
    readonly closed: Promise<WebTransportCloseInfo>;
    /**
     * Type: WebTransportDatagramDuplexStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/datagrams)
     */
    readonly datagrams: WebTransportDatagramDuplexStream;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingBidirectionalStreams)
     */
    readonly incomingBidirectionalStreams: ReadableStream;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingUnidirectionalStreams)
     */
    readonly incomingUnidirectionalStreams: ReadableStream;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/ready)
     */
    readonly ready: Promise<void>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/close)
     */
    close(closeInfo?: WebTransportCloseInfo): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createBidirectionalStream)
     */
    createBidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WebTransportBidirectionalStream>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createUnidirectionalStream)
     */
    createUnidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WritableStream>;
}

declare var WebTransport: {
    prototype: WebTransport;
    new(url: string | URL, options?: WebTransportOptions): WebTransport;
};

/**
 * The **`WebTransportBidirectionalStream`** interface of the WebTransport API represents a bidirectional stream created by a server or a client that can be used for reliable transport.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream)
 */
interface WebTransportBidirectionalStream {
    /**
     * Type: WebTransportReceiveStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/readable)
     */
    readonly readable: ReadableStream;
    /**
     * Type: WebTransportSendStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/writable)
     */
    readonly writable: WritableStream;
}

declare var WebTransportBidirectionalStream: {
    prototype: WebTransportBidirectionalStream;
    new(): WebTransportBidirectionalStream;
};

/**
 * The **`WebTransportDatagramDuplexStream`** interface of the WebTransport API represents a duplex stream that can be used for unreliable transport of datagrams between client and server.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream)
 */
interface WebTransportDatagramDuplexStream {
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark)
     */
    incomingHighWaterMark: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
     */
    incomingMaxAge: number | null;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize)
     */
    readonly maxDatagramSize: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark)
     */
    outgoingHighWaterMark: number;
    /**
     * Type: unrestricted double
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
     */
    outgoingMaxAge: number | null;
    /**
     * Type: ReadableStream
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/readable)
     */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/writable) */
    readonly writable: WritableStream;
}

declare var WebTransportDatagramDuplexStream: {
    prototype: WebTransportDatagramDuplexStream;
    new(): WebTransportDatagramDuplexStream;
};

/**
 * The **`WebTransportError`** interface of the WebTransport API represents an error related to the API, which can arise from server errors, network connection problems, or client-initiated abort operations (for example, arising from a WritableStream.abort() call).
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError)
 */
interface WebTransportError extends DOMException {
    /**
     * Type: WebTransportErrorSource
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/source)
     */
    readonly source: WebTransportErrorSource;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/streamErrorCode)
     */
    readonly streamErrorCode: number | null;
}

declare var WebTransportError: {
    prototype: WebTransportError;
    new(message?: string, options?: WebTransportErrorOptions): WebTransportError;
};

/**
 * The `WindowClient` interface of the ServiceWorker API represents the scope of a service worker client that is a document in a browsing context, controlled by an active worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient)
 */
interface WindowClient extends Client {
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focused)
     */
    readonly focused: boolean;
    /**
     * Type: DocumentVisibilityState
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/visibilityState)
     */
    readonly visibilityState: DocumentVisibilityState;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focus)
     */
    focus(): Promise<WindowClient>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/navigate)
     */
    navigate(url: string | URL): Promise<WindowClient | null>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new(): WindowClient;
};

interface WindowOrWorkerGlobalScope {
    /**
     * Type: CacheStorage
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
     */
    readonly caches: CacheStorage;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)
     */
    readonly crossOriginIsolated: boolean;
    /**
     * Type: Crypto
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)
     */
    readonly crypto: Crypto;
    /**
     * Type: IDBFactory
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)
     */
    readonly indexedDB: IDBFactory;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)
     */
    readonly isSecureContext: boolean;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)
     */
    readonly origin: string;
    /**
     * Type: Performance
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)
     */
    readonly performance: Performance;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)
     */
    atob(data: string): string;
    /**
     * Type: DOMString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)
     */
    btoa(data: string): string;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)
     */
    clearInterval(id: number | undefined): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)
     */
    clearTimeout(id: number | undefined): void;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)
     */
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)
     */
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)
     */
    queueMicrotask(callback: VoidFunction): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)
     */
    reportError(e: any): void;
    /**
     * Type: long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)
     */
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /**
     * Type: long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)
     */
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)
     */
    structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
}

interface WorkerEventMap extends AbstractWorkerEventMap, MessageEventTargetEventMap {
}

/**
 * The **`Worker`** interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker)
 */
interface Worker extends EventTarget, AbstractWorker, MessageEventTarget<Worker> {
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)
     */
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string | URL, options?: WorkerOptions): Worker;
};

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
    "languagechange": Event;
    "offline": Event;
    "online": Event;
    "rejectionhandled": PromiseRejectionEvent;
    "unhandledrejection": PromiseRejectionEvent;
}

/**
 * The **`WorkerGlobalScope`** interface of the Web Workers API is an interface representing the scope of any worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope)
 */
interface WorkerGlobalScope extends EventTarget, FontFaceSource, WindowOrWorkerGlobalScope {
    /**
     * Type: WorkerLocation
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
     */
    readonly location: WorkerLocation;
    /**
     * Type: WorkerNavigator
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
     */
    readonly navigator: WorkerNavigator;
    /**
     * Type: OnErrorEventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event)
     */
    onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event)
     */
    onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event)
     */
    onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event)
     */
    ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
     */
    onrejectionhandled: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
     */
    onunhandledrejection: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /**
     * Type: WorkerGlobalScope
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
     */
    readonly self: WorkerGlobalScope & typeof globalThis;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
     */
    importScripts(...urls: (string | URL)[]): void;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    new(): WorkerGlobalScope;
};

/**
 * The **`WorkerLocation`** interface defines the absolute location of the script executed by the Worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation)
 */
interface WorkerLocation {
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hash)
     */
    readonly hash: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/host)
     */
    readonly host: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hostname)
     */
    readonly hostname: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/href)
     */
    readonly href: string;
    toString(): string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/origin)
     */
    readonly origin: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/pathname)
     */
    readonly pathname: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/port)
     */
    readonly port: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/protocol)
     */
    readonly protocol: string;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/search)
     */
    readonly search: string;
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new(): WorkerLocation;
};

/**
 * The **`WorkerNavigator`** interface represents a subset of the Navigator interface allowed to be accessed from a Worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator)
 */
interface WorkerNavigator extends NavigatorBadge, NavigatorConcurrentHardware, NavigatorID, NavigatorLanguage, NavigatorLocks, NavigatorOnLine, NavigatorStorage {
    /**
     * Type: MediaCapabilities
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/mediaCapabilities)
     */
    readonly mediaCapabilities: MediaCapabilities;
    /**
     * Type: Permissions
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/permissions)
     */
    readonly permissions: Permissions;
    /**
     * Type: ServiceWorkerContainer
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/serviceWorker)
     */
    readonly serviceWorker: ServiceWorkerContainer;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new(): WorkerNavigator;
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

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

/**
 * `XMLHttpRequest` (XHR) objects are used to interact with servers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
 */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    /**
     * Type: EventHandler
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readystatechange_event)
     */
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readyState)
     */
    readonly readyState: number;
    /**
     * Type: any
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/response)
     */
    readonly response: any;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseText)
     */
    readonly responseText: string;
    /**
     * Type: XMLHttpRequestResponseType
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseType)
     */
    responseType: XMLHttpRequestResponseType;
    /**
     * Type: USVString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseURL)
     */
    readonly responseURL: string;
    /**
     * Type: unsigned short
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/status)
     */
    readonly status: number;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/statusText)
     */
    readonly statusText: string;
    /**
     * Type: unsigned long
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/timeout)
     */
    timeout: number;
    /**
     * Type: XMLHttpRequestUpload
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/upload)
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * Type: boolean
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/withCredentials)
     */
    withCredentials: boolean;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/abort)
     */
    abort(): void;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
     */
    getAllResponseHeaders(): string;
    /**
     * Type: ByteString
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getResponseHeader)
     */
    getResponseHeader(name: string): string | null;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
     */
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/overrideMimeType)
     */
    overrideMimeType(mime: string): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/send)
     */
    send(body?: XMLHttpRequestBodyInit | null): void;
    /**
     * Type: undefined
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/setRequestHeader)
     */
    setRequestHeader(name: string, value: string): void;
    /** Type: unsigned short */
    readonly UNSENT: 0;
    /** Type: unsigned short */
    readonly OPENED: 1;
    /** Type: unsigned short */
    readonly HEADERS_RECEIVED: 2;
    /** Type: unsigned short */
    readonly LOADING: 3;
    /** Type: unsigned short */
    readonly DONE: 4;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    /** Type: unsigned short */
    readonly UNSENT: 0;
    /** Type: unsigned short */
    readonly OPENED: 1;
    /** Type: unsigned short */
    readonly HEADERS_RECEIVED: 2;
    /** Type: unsigned short */
    readonly LOADING: 3;
    /** Type: unsigned short */
    readonly DONE: 4;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

/**
 * `XMLHttpRequestEventTarget` is the interface that describes the event handlers shared on XMLHttpRequest and XMLHttpRequestUpload.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget)
 */
interface XMLHttpRequestEventTarget extends EventTarget {
    /** Type: EventHandler */
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    /** Type: EventHandler */
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

/**
 * The **`XMLHttpRequestUpload`** interface represents the upload process for a specific XMLHttpRequest.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestUpload)
 */
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
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
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
     */
    function compileStreaming(source: Response | PromiseLike<Response>): Promise<Module>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
     */
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    /**
     * Type: [object Object]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
     */
    function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
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

interface AudioDataOutputCallback {
    (output: AudioData): void;
}

interface EncodedAudioChunkOutputCallback {
    (output: EncodedAudioChunk, metadata?: EncodedAudioChunkMetadata): void;
}

interface EncodedVideoChunkOutputCallback {
    (chunk: EncodedVideoChunk, metadata?: EncodedVideoChunkMetadata): void;
}

interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}

interface LockGrantedCallback<T> {
    (lock: Lock | null): T;
}

interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}

interface ReportingObserverCallback {
    (reports: Report[], observer: ReportingObserver): void;
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

interface VideoFrameOutputCallback {
    (output: VideoFrame): void;
}

interface VoidFunction {
    (): void;
}

interface WebCodecsErrorCallback {
    (error: DOMException): void;
}

/**
 * Type: DOMString
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
 */
declare var name: string;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
 */
declare var onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
 */
declare function close(): void;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
 */
declare function postMessage(message: any, transfer: Transferable[]): void;
declare function postMessage(message: any, options?: StructuredSerializeOptions): void;
/**
 * Type: boolean
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/**
 * Type: WorkerLocation
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
 */
declare var location: WorkerLocation;
/**
 * Type: WorkerNavigator
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
 */
declare var navigator: WorkerNavigator;
/**
 * Type: OnErrorEventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event)
 */
declare var onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event)
 */
declare var onlanguagechange: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event)
 */
declare var onoffline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event)
 */
declare var ononline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
 */
declare var onrejectionhandled: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
 */
declare var onunhandledrejection: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/**
 * Type: WorkerGlobalScope
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
 */
declare var self: WorkerGlobalScope & typeof globalThis;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
 */
declare function importScripts(...urls: (string | URL)[]): void;
/**
 * Type: boolean
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/**
 * Type: FontFaceSet
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts)
 */
declare var fonts: FontFaceSet;
/**
 * Type: CacheStorage
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
 */
declare var caches: CacheStorage;
/**
 * Type: boolean
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)
 */
declare var crossOriginIsolated: boolean;
/**
 * Type: Crypto
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)
 */
declare var crypto: Crypto;
/**
 * Type: IDBFactory
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)
 */
declare var indexedDB: IDBFactory;
/**
 * Type: boolean
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)
 */
declare var isSecureContext: boolean;
/**
 * Type: USVString
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)
 */
declare var origin: string;
/**
 * Type: Performance
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)
 */
declare var performance: Performance;
/**
 * Type: ByteString
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)
 */
declare function atob(data: string): string;
/**
 * Type: DOMString
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)
 */
declare function btoa(data: string): string;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)
 */
declare function clearInterval(id: number | undefined): void;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)
 */
declare function clearTimeout(id: number | undefined): void;
/**
 * Type: [object Object]
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)
 */
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
/**
 * Type: [object Object]
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)
 */
declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)
 */
declare function queueMicrotask(callback: VoidFunction): void;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)
 */
declare function reportError(e: any): void;
/**
 * Type: long
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)
 */
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/**
 * Type: long
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)
 */
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/**
 * Type: any
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)
 */
declare function structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
/**
 * Type: undefined
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
 */
declare function cancelAnimationFrame(handle: number): void;
/**
 * Type: unsigned long
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
 */
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
 */
declare var onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
/**
 * Type: EventHandler
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
 */
declare var onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = Algorithm | string;
type AllowSharedBufferSource = ArrayBufferLike | ArrayBufferView<ArrayBufferLike>;
type BigInteger = Uint8Array<ArrayBuffer>;
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
type CSSKeywordish = string | CSSKeywordValue;
type CSSNumberish = number | CSSNumericValue;
type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;
type CSSUnparsedSegment = string | CSSVariableReferenceValue;
type CanvasImageSource = ImageBitmap | OffscreenCanvas | VideoFrame;
type CookieList = CookieListItem[];
type DOMHighResTimeStamp = number;
type EpochTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;
type Float32List = Float32Array<ArrayBufferLike> | GLfloat[];
type FormDataEntryValue = File | string;
type GLbitfield = number;
type GLboolean = boolean;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLint64 = number;
type GLintptr = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLuint = number;
type GLuint64 = number;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type IDBValidKey = number | string | Date | BufferSource | IDBValidKey[];
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type ImageBufferSource = AllowSharedBufferSource | ReadableStream;
type ImageDataArray = Uint8ClampedArray<ArrayBuffer>;
type Int32List = Int32Array<ArrayBufferLike> | GLint[];
type MessageEventSource = MessagePort | ServiceWorker;
type NamedCurve = string;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type ReportList = Report[];
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | OffscreenCanvas | VideoFrame;
type TimerHandler = string | Function;
type Transferable = OffscreenCanvas | ImageBitmap | MessagePort | MediaSourceHandle | ReadableStream | WritableStream | TransformStream | AudioData | VideoFrame | RTCDataChannel | ArrayBuffer;
type Uint32List = Uint32Array<ArrayBufferLike> | GLuint[];
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type AlphaOption = "discard" | "keep";
type AudioSampleFormat = "f32" | "f32-planar" | "s16" | "s16-planar" | "s32" | "s32-planar" | "u8" | "u8-planar";
type AvcBitstreamFormat = "annexb" | "avc";
type BinaryType = "arraybuffer" | "blob";
type BitrateMode = "constant" | "variable";
type CSSMathOperator = "clamp" | "invert" | "max" | "min" | "negate" | "product" | "sum";
type CSSNumericBaseType = "angle" | "flex" | "frequency" | "length" | "percent" | "resolution" | "time";
type CanvasDirection = "inherit" | "ltr" | "rtl";
type CanvasFillRule = "evenodd" | "nonzero";
type CanvasFontKerning = "auto" | "none" | "normal";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type CanvasFontVariantCaps = "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type ClientTypes = "all" | "sharedworker" | "window" | "worker";
type CodecState = "closed" | "configured" | "unconfigured";
type ColorGamut = "p3" | "rec2020" | "srgb";
type ColorSpaceConversion = "default" | "none";
type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
type CookieSameSite = "lax" | "none" | "strict";
type DocumentVisibilityState = "hidden" | "visible";
type EncodedAudioChunkType = "delta" | "key";
type EncodedVideoChunkType = "delta" | "key";
type EndingType = "native" | "transparent";
type FileSystemHandleKind = "directory" | "file";
type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";
type FontFaceLoadStatus = "error" | "loaded" | "loading" | "unloaded";
type FontFaceSetLoadStatus = "loaded" | "loading";
type FrameType = "auxiliary" | "nested" | "none" | "top-level";
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
type HardwareAcceleration = "no-preference" | "prefer-hardware" | "prefer-software";
type HdrMetadataType = "smpteSt2086" | "smpteSt2094-10" | "smpteSt2094-40";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "done" | "pending";
type IDBTransactionDurability = "default" | "relaxed" | "strict";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "flipY" | "from-image" | "none";
type ImageSmoothingQuality = "high" | "low" | "medium";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";
type LatencyMode = "quality" | "realtime";
type LockMode = "exclusive" | "shared";
type MediaDecodingType = "file" | "media-source" | "webrtc";
type MediaEncodingType = "record" | "webrtc";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2" | "webgpu";
type OpusBitstreamFormat = "ogg" | "opus";
type PermissionName = "camera" | "geolocation" | "microphone" | "midi" | "notifications" | "persistent-storage" | "push" | "screen-wake-lock" | "storage-access";
type PermissionState = "denied" | "granted" | "prompt";
type PredefinedColorSpace = "display-p3" | "srgb";
type PremultiplyAlpha = "default" | "none" | "premultiply";
type PushEncryptionKeyName = "auth" | "p256dh";
type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";
type RTCEncodedVideoFrameType = "delta" | "empty" | "key";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestPriority = "auto" | "high" | "low";
type RequestRedirect = "error" | "follow" | "manual";
type ResizeQuality = "high" | "low" | "medium" | "pixelated";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type SecurityPolicyViolationEventDisposition = "enforce" | "report";
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";
type TransferFunction = "hlg" | "pq" | "srgb";
type VideoColorPrimaries = "bt470bg" | "bt709" | "smpte170m";
type VideoEncoderBitrateMode = "constant" | "quantizer" | "variable";
type VideoMatrixCoefficients = "bt470bg" | "bt709" | "rgb" | "smpte170m";
type VideoPixelFormat = "BGRA" | "BGRX" | "I420" | "I420A" | "I422" | "I444" | "NV12" | "RGBA" | "RGBX";
type VideoTransferCharacteristics = "bt709" | "iec61966-2-1" | "smpte170m";
type WebGLPowerPreference = "default" | "high-performance" | "low-power";
type WebTransportCongestionControl = "default" | "low-latency" | "throughput";
type WebTransportErrorSource = "session" | "stream";
type WorkerType = "classic" | "module";
type WriteCommandType = "seek" | "truncate" | "write";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
