
/////////////////////////////
/// DOM APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}

interface AesCbcParams extends Algorithm {
    iv: BufferSource;
}

interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
}

interface AesDerivedKeyParams extends Algorithm {
    length: number;
}

interface AesGcmParams extends Algorithm {
    additionalData?: BufferSource;
    iv: BufferSource;
    tagLength?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}

interface AesKeyGenParams extends Algorithm {
    length: number;
}

interface Algorithm {
    name: string;
}

interface AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}

interface AnimationEventInit extends EventInit {
    animationName?: CSSOMString;
    elapsedTime?: number;
    pseudoElement?: CSSOMString;
}

interface AssignedNodesOptions {
    flatten?: boolean;
}

interface AudioBufferOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}

interface AudioBufferSourceOptions {
    buffer?: AudioBuffer | null;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}

interface AudioContextInfo {
    currentTime?: number;
    sampleRate?: number;
}

interface AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}

interface AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}

interface AudioParamDescriptor {
    defaultValue?: number;
    maxValue?: number;
    minValue?: number;
    name?: string;
}

interface AudioProcessingEventInit extends EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}

interface AudioTimestamp {
    contextTime?: number;
    performanceTime?: number;
}

interface AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
}

interface BiquadFilterOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    gain?: number;
    Q?: number;
    type?: BiquadFilterType;
}

interface BlobPropertyBag {
    type?: string;
}

interface BoxQuadOptions {
    box?: CSSBoxType;
    relativeTo?: GeometryNode;
}

interface CacheBatchOperation {
    options?: CacheQueryOptions;
    request?: Request;
    response?: Response;
    type?: string;
}

interface CacheQueryOptions {
    cacheName?: string;
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

interface CanvasRenderingContext2DSettings {
    alpha?: boolean;
}

interface Capabilities {
}

interface ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}

interface ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}

interface ClipboardEventInit extends EventInit {
    clipboardData?: DataTransfer | null;
}

interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

interface CompositionEventInit extends UIEventInit {
    data?: string;
}

interface ConstantSourceOptions {
    offset?: number;
}

interface ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}

interface ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}

interface ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}

interface ConstrainLongRange extends LongRange {
    exact?: number;
    ideal?: number;
}

interface Constraints extends ConstraintSet {
    advanced?: ConstraintSet[];
}

interface ConstraintSet {
}

interface ConvertCoordinateOptions {
    fromBox?: CSSBoxType;
    toBox?: CSSBoxType;
}

interface ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer | null;
    disableNormalization?: boolean;
}

interface CryptoKeyPair {
    privateKey?: CryptoKey;
    publicKey?: CryptoKey;
}

interface CustomEventInit extends EventInit {
    detail?: any;
}

interface DelayOptions extends AudioNodeOptions {
    delayTime?: number;
    maxDelayTime?: number;
}

interface DeviceAccelerationInit {
    x?: number | null;
    y?: number | null;
    z?: number | null;
}

interface DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceAccelerationInit | null;
    accelerationIncludingGravity?: DeviceAccelerationInit | null;
    interval?: number | null;
    rotationRate?: DeviceRotationRateInit | null;
}

interface DeviceOrientationEventInit extends EventInit {
    absolute?: boolean;
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

interface DeviceRotationRateInit {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

interface DOMMatrixInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    is2D?: boolean;
    m11?: number;
    m12?: number;
    m13?: number;
    m14?: number;
    m21?: number;
    m22?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m41?: number;
    m42?: number;
    m43?: number;
    m44?: number;
}

interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

interface DoubleRange {
    max?: number;
    min?: number;
}

interface DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer | null;
}

interface DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}

interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve: NamedCurve;
}

interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface ElementCreationOptions {
    is?: string;
}

interface ElementDefinitionOptions {
    extends?: string;
}

interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

interface EventInit {
    scoped?: boolean;
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface EventModifierInit extends UIEventInit {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
    shiftKey?: boolean;
}

interface EventSourceInit {
    withCredentials?: boolean;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget | null;
}

interface GainOptions extends AudioNodeOptions {
    gain?: number;
}

interface GamepadEventInit extends EventInit {
    gamepad: Gamepad;
}

interface GetNotificationOptions {
    tag?: string;
}

interface GetRootNodeOptions {
    composed?: boolean;
}

interface HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}

interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: BufferSource;
    salt: BufferSource;
}

interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash: KeyAlgorithm;
    length: number;
}

interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}

interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}

interface IIRFilterOptions extends AudioNodeOptions {
    feedback: number[];
    feedforward: number[];
}

interface ImageBitmapOptions {
    colorSpaceConversion?: ColorSpaceConversion;
    imageOrientation?: ImageOrientation;
    premultiplyAlpha?: PremultiplyAlpha;
    resizeHeight?: number;
    resizeQuality?: ResizeQuality;
    resizeWidth?: number;
}

interface ImageBitmapRenderingContextSettings {
    alpha?: boolean;
}

interface ImageEncodeOptions {
    quality?: number;
    type?: string;
}

interface InputEventInit extends UIEventInit {
    data?: string | null;
    isComposing?: boolean;
}

interface IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRatio: number;
    intersectionRect: DOMRectInit;
    isIntersecting: boolean;
    rootBounds: DOMRectInit;
    target: Element;
    time: number;
}

interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

interface KeyAlgorithm {
    name: string;
}

interface KeyboardEventInit extends EventModifierInit {
    code?: string;
    isComposing?: boolean;
    key?: string;
    location?: number;
    repeat?: boolean;
}

interface LongRange {
    max?: number;
    min?: number;
}

interface MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
}

interface MediaEncryptedEventInit extends EventInit {
    initData?: ArrayBuffer | null;
    initDataType?: string;
}

interface MediaKeyMessageEventInit extends EventInit {
    message: ArrayBuffer;
    messageType: MediaKeyMessageType;
}

interface MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: string[];
    label?: string;
    persistentState?: MediaKeysRequirement;
    sessionTypes?: string[];
    videoCapabilities?: MediaKeySystemMediaCapability[];
}

interface MediaKeySystemMediaCapability {
    contentType?: string;
    robustness?: string;
}

interface MediaQueryListEventInit extends EventInit {
    matches?: boolean;
    media?: string;
}

interface MediaStreamAudioSourceOptions {
    mediaStream: MediaStream;
}

interface MediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    peerIdentity?: string;
    video?: boolean | MediaTrackConstraints;
}

interface MediaStreamTrackAudioSourceOptions {
    mediaStreamTrack: any;
}

interface MediaStreamTrackEventInit extends EventInit {
    track: MediaStreamTrack;
}

interface MediaTrackCapabilities {
    aspectRatio?: DoubleRange;
    channelCount?: LongRange;
    deviceId?: string;
    echoCancellation?: boolean[];
    facingMode?: string[];
    frameRate?: DoubleRange;
    groupId?: string;
    height?: LongRange;
    latency?: DoubleRange;
    sampleRate?: LongRange;
    sampleSize?: LongRange;
    volume?: DoubleRange;
    width?: LongRange;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}

interface MediaTrackConstraintSet {
    aspectRatio?: ConstrainDouble;
    channelCount?: ConstrainLong;
    deviceId?: ConstrainDOMString;
    echoCancellation?: ConstrainBoolean;
    facingMode?: ConstrainDOMString;
    frameRate?: ConstrainDouble;
    groupId?: ConstrainDOMString;
    height?: ConstrainLong;
    latency?: ConstrainDouble;
    sampleRate?: ConstrainLong;
    sampleSize?: ConstrainLong;
    volume?: ConstrainDouble;
    width?: ConstrainLong;
}

interface MediaTrackSettings {
    aspectRatio?: number;
    channelCount?: number;
    deviceId?: string;
    echoCancellation?: boolean;
    facingMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    latency?: number;
    sampleRate?: number;
    sampleSize?: number;
    volume?: number;
    width?: number;
}

interface MediaTrackSupportedConstraints {
    aspectRatio?: boolean;
    channelCount?: boolean;
    deviceId?: boolean;
    echoCancellation?: boolean;
    facingMode?: boolean;
    frameRate?: boolean;
    groupId?: boolean;
    height?: boolean;
    latency?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    volume?: boolean;
    width?: boolean;
}

interface MessageEventInit extends EventInit {
    channel?: string;
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

interface MouseEventInit extends EventModifierInit {
    button?: number;
    buttons?: number;
    clientX?: number;
    clientY?: number;
    relatedTarget?: EventTarget | null;
    screenX?: number;
    screenY?: number;
}

interface MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}

interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}

interface NotificationAction {
    action: string;
    icon?: string;
    title: string;
}

interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    sound?: string;
    tag?: string;
    timestamp?: number;
    vibrate?: any;
}

interface OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer: AudioBuffer;
}

interface OscillatorOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;
}

interface OverconstrainedErrorEventInit extends EventInit {
    error?: any;
}

interface PageTransitionEventInit extends EventInit {
    persisted?: boolean;
}

interface PannerOptions extends AudioNodeOptions {
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
    distanceModel?: DistanceModelType;
    maxDistance?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    panningModel?: PanningModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    refDistance?: number;
    rolloffFactor?: number;
}

interface PaymentCurrencyAmount {
    currency: string;
    currencySystem?: string;
    value: string;
}

interface PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
    shippingOptions?: PaymentShippingOption[];
}

interface PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total: PaymentItem;
}

interface PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: any;
    supportedMethods: string[];
    total?: PaymentItem;
}

interface PaymentDetailsUpdate extends PaymentDetailsBase {
    error?: string;
    total?: PaymentItem;
}

interface PaymentItem {
    amount: PaymentCurrencyAmount;
    label: string;
    pending?: boolean;
}

interface PaymentMethodData {
    data?: any;
    supportedMethods: string[];
}

interface PaymentOptions {
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: PaymentShippingType;
}

interface PaymentRequestUpdateEventInit extends EventInit {
}

interface PaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}

interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: BufferSource;
}

interface PerformanceObserverInit {
    entryTypes: string[];
}

interface PeriodicWaveConstraints {
    disableNormalization?: boolean;
}

interface PeriodicWaveOptions extends PeriodicWaveConstraints {
    imag?: number[];
    real?: number[];
}

interface PointerEventInit extends MouseEventInit {
    height?: number;
    isPrimary?: boolean;
    pointerId?: number;
    pointerType?: string;
    pressure?: number;
    tiltX?: number;
    tiltY?: number;
    width?: number;
}

interface PopStateEventInit extends EventInit {
    state?: any;
}

interface PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}

interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    useCache?: boolean;
}

interface RelatedEventInit extends EventInit {
    relatedTarget?: EventTarget | null;
}

interface RequestInit {
    body?: BodyInit | null;
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

interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: KeyAlgorithm;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}

interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}

interface RsaPssParams extends Algorithm {
    saltLength: number;
}

interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}

interface RTCCertificateExpiration {
    expires?: number;
}

interface RTCCertificateStats extends RTCStats {
    base64Certificate?: string;
    fingerprint?: string;
    fingerprintAlgorithm?: string;
    issuerCertificateId?: string;
}

interface RTCCodecStats extends RTCStats {
    channels?: number;
    clockRate?: number;
    codec?: string;
    implementation?: string;
    parameters?: string;
    payloadType?: number;
}

interface RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    peerIdentity?: string;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}

interface RTCDataChannelEventInit extends EventInit {
    channel: RTCDataChannel;
}

interface RTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    negotiated?: boolean;
    ordered?: boolean;
    priority?: RTCPriorityType;
    protocol?: string;
}

interface RTCDataChannelStats extends RTCStats {
    bytesReceived?: number;
    bytesSent?: number;
    datachannelid?: number;
    label?: string;
    messagesReceived?: number;
    messagesSent?: number;
    protocol?: string;
    state?: RTCDataChannelState;
}

interface RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}

interface RTCDTMFToneChangeEventInit extends EventInit {
    tone: string;
}

interface RTCErrorEventInit extends EventInit {
    error?: any;
}

interface RTCIceCandidateInit {
    candidate?: string;
    sdpMid?: string | null;
    sdpMLineIndex?: number | null;
    ufrag?: string;
}

interface RTCIceCandidatePair {
    local?: RTCIceCandidate;
    remote?: RTCIceCandidate;
}

interface RTCIceCandidatePairStats extends RTCStats {
    availableIncomingBitrate?: number;
    availableOutgoingBitrate?: number;
    bytesReceived?: number;
    bytesSent?: number;
    consentRequestsReceived?: number;
    consentRequestsSent?: number;
    consentResponsesReceived?: number;
    consentResponsesSent?: number;
    currentRoundTripTime?: number;
    localCandidateId?: string;
    nominated?: boolean;
    priority?: number;
    readable?: boolean;
    remoteCandidateId?: string;
    requestsReceived?: number;
    requestsSent?: number;
    responsesReceived?: number;
    responsesSent?: number;
    retransmissionsReceived?: number;
    retransmissionsSent?: number;
    state?: RTCStatsIceCandidatePairState;
    totalRoundTripTime?: number;
    transportId?: string;
    writable?: boolean;
}

interface RTCIceCandidateStats extends RTCStats {
    candidateType?: RTCIceCandidateType;
    deleted?: boolean;
    ip?: string;
    isRemote?: boolean;
    port?: number;
    priority?: number;
    protocol?: string;
    transportId?: string;
    url?: string;
}

interface RTCIceParameters {
    password?: string;
    usernameFragment?: string;
}

interface RTCIceServer {
    credential?: string | RTCOAuthCredential;
    credentialType?: RTCIceCredentialType;
    urls: string | string[];
    username?: string;
}

interface RTCIdentityAssertionResult {
    assertion: string;
    idp: RTCIdentityProviderDetails;
}

interface RTCIdentityProvider {
    generateAssertion: GenerateAssertionCallback;
    validateAssertion: ValidateAssertionCallback;
}

interface RTCIdentityProviderDetails {
    domain: string;
    protocol?: string;
}

interface RTCIdentityProviderOptions {
    peerIdentity?: string;
    protocol?: string;
    usernameHint?: string;
}

interface RTCIdentityValidationResult {
    contents: string;
    identity: string;
}

interface RTCInboundRTPStreamStats extends RTCRTPStreamStats {
    burstDiscardCount?: number;
    burstDiscardRate?: number;
    burstLossCount?: number;
    burstLossRate?: number;
    burstPacketsDiscarded?: number;
    burstPacketsLost?: number;
    bytesReceived?: number;
    fractionLost?: number;
    framesDecoded?: number;
    gapDiscardRate?: number;
    gapLossRate?: number;
    jitter?: number;
    packetsDiscarded?: number;
    packetsLost?: number;
    packetsReceived?: number;
    packetsRepaired?: number;
}

interface RTCMediaStreamStats extends RTCStats {
    streamIdentifier?: string;
    trackIds?: string[];
}

interface RTCMediaStreamTrackStats extends RTCStats {
    audioLevel?: number;
    detached?: boolean;
    echoReturnLoss?: number;
    echoReturnLossEnhancement?: number;
    ended?: boolean;
    frameHeight?: number;
    framesCorrupted?: number;
    framesDecoded?: number;
    framesDropped?: number;
    framesPerSecond?: number;
    framesReceived?: number;
    framesSent?: number;
    frameWidth?: number;
    fullFramesLost?: number;
    partialFramesLost?: number;
    remoteSource?: boolean;
    ssrcIds?: string[];
    trackIdentifier?: string;
}

interface RTCOAuthCredential {
    accessToken: string;
    macKey: string;
}

interface RTCOfferAnswerOptions {
    voiceActivityDetection?: boolean;
}

interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}

interface RTCOutboundRTPStreamStats extends RTCRTPStreamStats {
    bytesSent?: number;
    framesEncoded?: number;
    packetsSent?: number;
    roundTripTime?: number;
    targetBitrate?: number;
}

interface RTCPeerConnectionIceErrorEventInit extends EventInit {
    errorCode: number;
    hostCandidate?: string;
    statusText?: string;
    url?: string;
}

interface RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate | null;
    url?: string | null;
}

interface RTCPeerConnectionStats extends RTCStats {
    dataChannelsClosed?: number;
    dataChannelsOpened?: number;
}

interface RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}

interface RTCRtpCapabilities {
    codecs?: RTCRtpCodecCapability[];
    headerExtensions?: RTCRtpHeaderExtensionCapability[];
}

interface RTCRtpCodecCapability {
    channels?: number;
    clockRate?: number;
    mimeType?: string;
    sdpFmtpLine?: string;
}

interface RTCRtpCodecParameters {
    channels?: number;
    clockRate?: number;
    mimeType?: string;
    payloadType?: number;
    sdpFmtpLine?: string;
}

interface RTCRtpEncodingParameters {
    active?: boolean;
    dtx?: RTCDtxStatus;
    fec?: RTCRtpFecParameters;
    maxBitrate?: number;
    maxFramerate?: number;
    priority?: RTCPriorityType;
    ptime?: number;
    rid?: string;
    rtx?: RTCRtpRtxParameters;
    scaleResolutionDownBy?: number;
    ssrc?: number;
}

interface RTCRtpFecParameters {
    ssrc?: number;
}

interface RTCRtpHeaderExtensionCapability {
    uri?: string;
}

interface RTCRtpHeaderExtensionParameters {
    encrypted?: boolean;
    id?: number;
    uri?: string;
}

interface RTCRtpParameters {
    codecs?: RTCRtpCodecParameters[];
    degradationPreference?: RTCDegradationPreference;
    encodings?: RTCRtpEncodingParameters[];
    headerExtensions?: RTCRtpHeaderExtensionParameters[];
    rtcp?: RTCRtcpParameters;
    transactionId?: string;
}

interface RTCRtpRtxParameters {
    ssrc?: number;
}

interface RTCRTPStreamStats extends RTCStats {
    associateStatsId?: string;
    codecId?: string;
    firCount?: number;
    isRemote?: boolean;
    mediaTrackId?: string;
    mediaType?: string;
    nackCount?: number;
    pliCount?: number;
    qpSum?: number;
    sliCount?: number;
    ssrc?: string;
    transportId?: string;
}

interface RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    sendEncodings?: RTCRtpEncodingParameters[];
    streams?: MediaStream[];
}

interface RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}

interface RTCStats {
    id?: string;
    timestamp?: number;
    type?: RTCStatsType;
}

interface RTCStats {
    id?: string;
    timestamp?: number;
    type?: RTCStatsType;
}

interface RTCTrackEventInit extends EventInit {
    receiver: RTCRtpReceiver;
    streams?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: RTCRtpTransceiver;
}

interface RTCTransportStats extends RTCStats {
    activeConnection?: boolean;
    bytesReceived?: number;
    bytesSent?: number;
    localCertificateId?: string;
    remoteCertificateId?: string;
    rtcpTransportStatsId?: string;
    selectedCandidatePairId?: string;
}

interface ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

interface ScrollOptions {
    behavior?: ScrollBehavior;
}

interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}

interface Settings {
}

interface ShadowRootInit {
    mode: ShadowRootMode;
}

interface StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}

interface StorageEventInit extends EventInit {
    key?: string | null;
    newValue?: string | null;
    oldValue?: string | null;
    storageArea?: Storage | null;
    url?: string;
}

interface SVGBoundingBoxOptions {
    clipped?: boolean;
    fill?: boolean;
    markers?: boolean;
    stroke?: boolean;
}

interface TouchEventInit extends EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];
}

interface TouchInit {
    altitudeAngle?: number;
    azimuthAngle?: number;
    clientX?: number;
    clientY?: number;
    force?: number;
    identifier: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    screenX?: number;
    screenY?: number;
    target: EventTarget;
    touchType?: TouchType;
}

interface TrackEventInit extends EventInit {
    track?: VideoTrack | AudioTrack | TextTrack | null;
}

interface TransitionEventInit extends EventInit {
    elapsedTime?: number;
    propertyName?: CSSOMString;
    pseudoElement?: CSSOMString;
}

interface UIEventInit extends EventInit {
    detail?: number;
    view?: Window | null;
}

interface WaveShaperOptions extends AudioNodeOptions {
    curve?: number[];
    oversample?: OverSampleType;
}

interface WebGLContextAttributes {
    alpha?: GLboolean;
    antialias?: GLboolean;
    depth?: GLboolean;
    failIfMajorPerformanceCaveat?: GLboolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: GLboolean;
    preserveDrawingBuffer?: GLboolean;
    stencil?: GLboolean;
}

interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

interface WheelEventInit extends MouseEventInit {
    deltaMode?: number;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}

interface WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}

interface WorkletOptions {
    credentials?: RequestCredentials;
}

type EventListener = (event: Event) => void | { handleEvent(event: Event): void; };

type NodeFilter = (node: Node) => number | { acceptNode(node: Node): number; };

declare var NodeFilter: {
    readonly FILTER_ACCEPT: number;
    readonly FILTER_REJECT: number;
    readonly FILTER_SKIP: number;
    readonly SHOW_ALL: number;
    readonly SHOW_ELEMENT: number;
    readonly SHOW_ATTRIBUTE: number;
    readonly SHOW_TEXT: number;
    readonly SHOW_CDATA_SECTION: number;
    readonly SHOW_ENTITY_REFERENCE: number;
    readonly SHOW_ENTITY: number;
    readonly SHOW_PROCESSING_INSTRUCTION: number;
    readonly SHOW_COMMENT: number;
    readonly SHOW_DOCUMENT: number;
    readonly SHOW_DOCUMENT_TYPE: number;
    readonly SHOW_DOCUMENT_FRAGMENT: number;
    readonly SHOW_NOTATION: number;
}

interface AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}

declare var AnalyserNode: {
    prototype: AnalyserNode;
    new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
};

interface AnimationEvent extends Event {
    readonly animationName: CSSOMString;
    readonly elapsedTime: number;
    readonly pseudoElement: CSSOMString;
}

declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(type: CSSOMString, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};

interface ApplicationCacheEventMap {
    "cached": Event;
    "checking": Event;
    "downloading": Event;
    "error": Event;
    "noupdate": Event;
    "obsolete": Event;
    "progress": ProgressEvent;
    "updateready": Event;
}

interface ApplicationCache extends EventTarget {
    oncached: (this: ApplicationCache, ev: Event) => any;
    onchecking: (this: ApplicationCache, ev: Event) => any;
    ondownloading: (this: ApplicationCache, ev: Event) => any;
    onerror: (this: ApplicationCache, ev: Event) => any;
    onnoupdate: (this: ApplicationCache, ev: Event) => any;
    onobsolete: (this: ApplicationCache, ev: Event) => any;
    onprogress: (this: ApplicationCache, ev: ProgressEvent) => any;
    onupdateready: (this: ApplicationCache, ev: Event) => any;
    readonly status: number;
    abort(): void;
    swapCache(): void;
    update(): void;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly IDLE: number;
    readonly OBSOLETE: number;
    readonly UNCACHED: number;
    readonly UPDATEREADY: number;
    addEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ApplicationCache: {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly IDLE: number;
    readonly OBSOLETE: number;
    readonly UNCACHED: number;
    readonly UPDATEREADY: number;
};

interface Attr extends Node {
    readonly localName: string;
    readonly name: string;
    readonly namespaceURI: string | null;
    readonly ownerElement: Element | null;
    readonly prefix: string | null;
    readonly specified: boolean;
    value: string;
}

declare var Attr: {
    prototype: Attr;
    new(): Attr;
};

interface AudioBuffer {
    readonly duration: number;
    readonly length: number;
    readonly numberOfChannels: number;
    readonly sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
    getChannelData(channel: number): Float32Array;
}

declare var AudioBuffer: {
    prototype: AudioBuffer;
    new(options: AudioBufferOptions): AudioBuffer;
};

interface AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    readonly detune: AudioParam;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
};

interface AudioContext extends BaseAudioContext {
    readonly baseLatency: number;
    readonly outputLatency: number;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createMediaStreamTrackSource(mediaStreamTrack: any): MediaStreamTrackAudioSourceNode;
    getOutputTimestamp(): AudioTimestamp;
    suspend(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var AudioContext: {
    prototype: AudioContext;
    new(contextOptions?: AudioContextOptions): AudioContext;
    new(): AudioContext;
};

interface AudioDestinationNode extends AudioNode {
    readonly maxChannelCount: number;
}

declare var AudioDestinationNode: {
    prototype: AudioDestinationNode;
    new(): AudioDestinationNode;
};

interface AudioListener {
    readonly forwardX: AudioParam;
    readonly forwardY: AudioParam;
    readonly forwardZ: AudioParam;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly upX: AudioParam;
    readonly upY: AudioParam;
    readonly upZ: AudioParam;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    setPosition(x: number, y: number, z: number): void;
}

declare var AudioListener: {
    prototype: AudioListener;
    new(): AudioListener;
};

interface AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    connect(destination: AudioNode, output?: number, input?: number): AudioNode;
    connect(destination: AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destination: AudioNode): void;
    disconnect(destination: AudioNode, output: number): void;
    disconnect(destination: AudioNode, output: number, input: number): void;
    disconnect(destination: AudioParam): void;
    disconnect(destination: AudioParam, output: number): void;
}

declare var AudioNode: {
    prototype: AudioNode;
    new(): AudioNode;
};

interface AudioParam {
    readonly defaultValue: number;
    readonly maxValue: number;
    readonly minValue: number;
    value: number;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueAtTime(value: number, startTime: number): AudioParam;
    setValueCurveAtTime(values: Float32Array, startTime: number, duration: number): AudioParam;
}

declare var AudioParam: {
    prototype: AudioParam;
    new(): AudioParam;
};

interface AudioParamMap {
}

declare var AudioParamMap: {
    prototype: AudioParamMap;
    new(): AudioParamMap;
};

interface AudioProcessingEvent extends Event {
    readonly inputBuffer: AudioBuffer;
    readonly outputBuffer: AudioBuffer;
    readonly playbackTime: number;
}

declare var AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
};

interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}

interface AudioScheduledSourceNode extends AudioNode {
    onended: (this: AudioScheduledSourceNode, ev: Event) => any;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var AudioScheduledSourceNode: {
    prototype: AudioScheduledSourceNode;
    new(): AudioScheduledSourceNode;
};

interface AudioTrack {
    enabled: boolean;
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly language: string;
    readonly sourceBuffer: SourceBuffer | null;
}

declare var AudioTrack: {
    prototype: AudioTrack;
    new(): AudioTrack;
};

interface AudioTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

interface AudioTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: (this: AudioTrackList, ev: TrackEvent) => any;
    onchange: (this: AudioTrackList, ev: Event) => any;
    onremovetrack: (this: AudioTrackList, ev: TrackEvent) => any;
    getTrackById(id: string): AudioTrack | null;
    addEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: AudioTrack;
}

declare var AudioTrackList: {
    prototype: AudioTrackList;
    new(): AudioTrackList;
};

interface AudioWorkletNodeEventMap {
    "data": Event;
}

interface AudioWorkletNode extends AudioNode {
    ondata: (this: AudioWorkletNode, ev: Event) => any;
    readonly parameters: AudioParamMap;
    sendData(data: any): void;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var AudioWorkletNode: {
    prototype: AudioWorkletNode;
    new(context: BaseAudioContext, options?: any): AudioWorkletNode;
};

interface AudioWorkletProcessorEventMap {
    "data": Event;
}

interface AudioWorkletProcessor extends EventTarget {
    readonly contextInfo: AudioContextInfo;
    ondata: (this: AudioWorkletProcessor, ev: Event) => any;
    sendData(data: any): void;
    addEventListener<K extends keyof AudioWorkletProcessorEventMap>(type: K, listener: (this: AudioWorkletProcessor, ev: AudioWorkletProcessorEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var AudioWorkletProcessor: {
    prototype: AudioWorkletProcessor;
    new(): AudioWorkletProcessor;
};

interface BarProp {
    readonly visible: boolean;
}

declare var BarProp: {
    prototype: BarProp;
    new(): BarProp;
};

interface BaseAudioContextEventMap {
    "statechange": Event;
}

interface BaseAudioContext extends EventTarget {
    readonly currentTime: number;
    readonly destination: AudioDestinationNode;
    readonly listener: AudioListener;
    onstatechange: (this: BaseAudioContext, ev: Event) => any;
    readonly sampleRate: number;
    readonly state: AudioContextState;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback, errorCallback?: DecodeErrorCallback): Promise<AudioBuffer>;
    resume(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var BaseAudioContext: {
    prototype: BaseAudioContext;
    new(): BaseAudioContext;
};

interface BeforeUnloadEvent extends Event {
    returnValue: any;
}

declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
};

interface BiquadFilterNode extends AudioNode {
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    readonly gain: AudioParam;
    readonly Q: AudioParam;
    type: BiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var BiquadFilterNode: {
    prototype: BiquadFilterNode;
    new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
};

interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
};

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: (this: BroadcastChannel, ev: MessageEvent) => any;
    onmessageerror: (this: BroadcastChannel, ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

interface Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<Request[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<Response[]>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};

interface CanvasPattern {
    setTransform(transform?: DOMMatrixInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};

interface CanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasUserInterface, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: HTMLCanvasElement;
    mozImageSmoothingEnabled: boolean;
    webkitImageSmoothingEnabled: boolean;
    oImageSmoothingEnabled: boolean;
}

declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
};

interface CaretPosition {
    readonly offset: number;
    readonly offsetNode: Node;
    getClientRect(): DOMRect | null;
}

declare var CaretPosition: {
    prototype: CaretPosition;
    new(): CaretPosition;
};

interface CDATASection extends Text {
}

declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
};

interface ChannelMergerNode extends AudioNode {
}

declare var ChannelMergerNode: {
    prototype: ChannelMergerNode;
    new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
};

interface ChannelSplitterNode extends AudioNode {
}

declare var ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    new(context: BaseAudioContext, options?: ChannelSplitterNode): ChannelSplitterNode;
};

interface CharacterData extends Node, NonDocumentTypeChildNode, ChildNode {
    data: string;
    readonly length: number;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}

declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
};

interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer | null;
}

declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};

interface CloseEvent extends Event {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

interface Comment extends CharacterData {
}

declare var Comment: {
    prototype: Comment;
    new(data?: string): Comment;
};

interface CompositionEvent extends UIEvent {
    readonly data: string;
}

declare var CompositionEvent: {
    prototype: CompositionEvent;
    new(type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
};

interface ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ConstantSourceNode: {
    prototype: ConstantSourceNode;
    new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
};

interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}

declare var ConvolverNode: {
    prototype: ConvolverNode;
    new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
};

interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues(array: ArrayBufferView): ArrayBufferView;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

interface CryptoKey {
    readonly algorithm: any;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: any;
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

interface CSS {
}

declare var CSS: {
    prototype: CSS;
    new(): CSS;
    escape(ident: CSSOMString): CSSOMString;
    supports(property: CSSOMString, value: CSSOMString): boolean;
    supports(conditionText: CSSOMString): boolean;
};

interface CSSConditionRule extends CSSGroupingRule {
    conditionText: CSSOMString;
}

declare var CSSConditionRule: {
    prototype: CSSConditionRule;
    new(): CSSConditionRule;
};

interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: CSSOMString, index: number): number;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
};

interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: CSSOMString, index?: number): number;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
};

interface CSSImportRule extends CSSRule {
    readonly href: string;
    readonly media: MediaList;
    readonly styleSheet: CSSStyleSheet;
}

declare var CSSImportRule: {
    prototype: CSSImportRule;
    new(): CSSImportRule;
};

interface CSSKeyframeRule extends CSSRule {
    keyText: CSSOMString;
    readonly style: CSSStyleDeclaration;
}

declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
};

interface CSSKeyframesRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    name: CSSOMString;
    appendRule(rule: CSSOMString): void;
    deleteRule(select: CSSOMString): void;
    findRule(select: CSSOMString): CSSKeyframeRule | null;
}

declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
};

interface CSSMarginRule extends CSSRule {
    readonly name: CSSOMString;
    readonly style: CSSStyleDeclaration;
}

declare var CSSMarginRule: {
    prototype: CSSMarginRule;
    new(): CSSMarginRule;
};

interface CSSMediaRule extends CSSConditionRule {
    readonly media: MediaList;
}

declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
};

interface CSSNamespaceRule extends CSSRule {
    readonly namespaceURI: CSSOMString;
    readonly prefix: CSSOMString;
}

declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
};

interface CSSPageRule extends CSSGroupingRule {
    selectorText: CSSOMString;
    readonly style: CSSStyleDeclaration;
}

declare var CSSPageRule: {
    prototype: CSSPageRule;
    new(): CSSPageRule;
};

interface CSSRule {
    cssText: CSSOMString;
    readonly parentRule: CSSRule | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly type: number;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly MARGIN_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
}

declare var CSSRule: {
    prototype: CSSRule;
    new(): CSSRule;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly MARGIN_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
};

interface CSSRuleList {
    readonly length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}

declare var CSSRuleList: {
    prototype: CSSRuleList;
    new(): CSSRuleList;
};

interface CSSStyleDeclaration {
    alignContent: CSSOMString;
    alignItems: CSSOMString;
    alignmentBaseline: CSSOMString;
    alignSelf: CSSOMString;
    animation: CSSOMString;
    animationDelay: CSSOMString;
    animationDirection: CSSOMString;
    animationDuration: CSSOMString;
    animationFillMode: CSSOMString;
    animationIterationCount: CSSOMString;
    animationName: CSSOMString;
    animationPlayState: CSSOMString;
    animationTimingFunction: CSSOMString;
    backfaceVisibility: CSSOMString;
    background: CSSOMString;
    backgroundAttachment: CSSOMString;
    backgroundClip: CSSOMString;
    backgroundColor: CSSOMString;
    backgroundImage: CSSOMString;
    backgroundOrigin: CSSOMString;
    backgroundPosition: CSSOMString;
    backgroundPositionX: CSSOMString;
    backgroundPositionY: CSSOMString;
    backgroundRepeat: CSSOMString;
    backgroundSize: CSSOMString;
    baselineShift: CSSOMString;
    border: CSSOMString;
    borderBottom: CSSOMString;
    borderBottomColor: CSSOMString;
    borderBottomLeftRadius: CSSOMString;
    borderBottomRightRadius: CSSOMString;
    borderBottomStyle: CSSOMString;
    borderBottomWidth: CSSOMString;
    borderCollapse: CSSOMString;
    borderColor: CSSOMString;
    borderImage: CSSOMString;
    borderImageOutset: CSSOMString;
    borderImageRepeat: CSSOMString;
    borderImageSlice: CSSOMString;
    borderImageSource: CSSOMString;
    borderImageWidth: CSSOMString;
    borderLeft: CSSOMString;
    borderLeftColor: CSSOMString;
    borderLeftStyle: CSSOMString;
    borderLeftWidth: CSSOMString;
    borderRadius: CSSOMString;
    borderRight: CSSOMString;
    borderRightColor: CSSOMString;
    borderRightStyle: CSSOMString;
    borderRightWidth: CSSOMString;
    borderSpacing: CSSOMString;
    borderStyle: CSSOMString;
    borderTop: CSSOMString;
    borderTopColor: CSSOMString;
    borderTopLeftRadius: CSSOMString;
    borderTopRightRadius: CSSOMString;
    borderTopStyle: CSSOMString;
    borderTopWidth: CSSOMString;
    borderWidth: CSSOMString;
    bottom: CSSOMString;
    boxShadow: CSSOMString;
    boxSizing: CSSOMString;
    breakAfter: CSSOMString;
    breakBefore: CSSOMString;
    breakInside: CSSOMString;
    captionSide: CSSOMString;
    clear: CSSOMString;
    clip: CSSOMString;
    clipPath: CSSOMString;
    clipRule: CSSOMString;
    color: CSSOMString;
    colorInterpolationFilters: CSSOMString;
    columnCount: CSSOMString;
    columnFill: CSSOMString;
    columnGap: CSSOMString;
    columnRule: CSSOMString;
    columnRuleColor: CSSOMString;
    columnRuleStyle: CSSOMString;
    columnRuleWidth: CSSOMString;
    columns: CSSOMString;
    columnSpan: CSSOMString;
    columnWidth: CSSOMString;
    content: CSSOMString;
    counterIncrement: CSSOMString;
    counterReset: CSSOMString;
    cssFloat: CSSOMString;
    cssText: CSSOMString;
    cursor: CSSOMString;
    direction: CSSOMString;
    display: CSSOMString;
    dominantBaseline: CSSOMString;
    emptyCells: CSSOMString;
    enableBackground: CSSOMString;
    fill: CSSOMString;
    fillOpacity: CSSOMString;
    fillRule: CSSOMString;
    filter: CSSOMString;
    flex: CSSOMString;
    flexBasis: CSSOMString;
    flexDirection: CSSOMString;
    flexFlow: CSSOMString;
    flexGrow: CSSOMString;
    flexShrink: CSSOMString;
    flexWrap: CSSOMString;
    floodColor: CSSOMString;
    floodOpacity: CSSOMString;
    font: CSSOMString;
    fontFamily: CSSOMString;
    fontFeatureSettings: CSSOMString;
    fontSize: CSSOMString;
    fontSizeAdjust: CSSOMString;
    fontStretch: CSSOMString;
    fontStyle: CSSOMString;
    fontVariant: CSSOMString;
    fontWeight: CSSOMString;
    glyphOrientationHorizontal: CSSOMString;
    glyphOrientationVertical: CSSOMString;
    height: CSSOMString;
    imeMode: CSSOMString;
    justifyContent: CSSOMString;
    kerning: CSSOMString;
    layoutGrid: CSSOMString;
    layoutGridChar: CSSOMString;
    layoutGridLine: CSSOMString;
    layoutGridMode: CSSOMString;
    layoutGridType: CSSOMString;
    left: CSSOMString;
    readonly length: number;
    letterSpacing: CSSOMString;
    lightingColor: CSSOMString;
    lineBreak: CSSOMString;
    lineHeight: CSSOMString;
    listStyle: CSSOMString;
    listStyleImage: CSSOMString;
    listStylePosition: CSSOMString;
    listStyleType: CSSOMString;
    margin: CSSOMString;
    marginBottom: CSSOMString;
    marginLeft: CSSOMString;
    marginRight: CSSOMString;
    marginTop: CSSOMString;
    marker: CSSOMString;
    markerEnd: CSSOMString;
    markerMid: CSSOMString;
    markerStart: CSSOMString;
    mask: CSSOMString;
    maxHeight: CSSOMString;
    maxWidth: CSSOMString;
    minHeight: CSSOMString;
    minWidth: CSSOMString;
    msContentZoomChaining: CSSOMString;
    msContentZooming: CSSOMString;
    msContentZoomLimit: CSSOMString;
    msContentZoomLimitMax: CSSOMString;
    msContentZoomLimitMin: CSSOMString;
    msContentZoomSnap: CSSOMString;
    msContentZoomSnapPoints: CSSOMString;
    msContentZoomSnapType: CSSOMString;
    msFlowFrom: CSSOMString;
    msFlowInto: CSSOMString;
    msFontFeatureSettings: CSSOMString;
    msGridColumn: CSSOMString;
    msGridColumnAlign: CSSOMString;
    msGridColumns: CSSOMString;
    msGridColumnSpan: CSSOMString;
    msGridRow: CSSOMString;
    msGridRowAlign: CSSOMString;
    msGridRows: CSSOMString;
    msGridRowSpan: CSSOMString;
    msHighContrastAdjust: CSSOMString;
    msHyphenateLimitChars: CSSOMString;
    msHyphenateLimitLines: CSSOMString;
    msHyphenateLimitZone: CSSOMString;
    msHyphens: CSSOMString;
    msImeAlign: CSSOMString;
    msOverflowStyle: CSSOMString;
    msScrollChaining: CSSOMString;
    msScrollLimit: CSSOMString;
    msScrollLimitXMax: CSSOMString;
    msScrollLimitXMin: CSSOMString;
    msScrollLimitYMax: CSSOMString;
    msScrollLimitYMin: CSSOMString;
    msScrollRails: CSSOMString;
    msScrollSnapPointsX: CSSOMString;
    msScrollSnapPointsY: CSSOMString;
    msScrollSnapType: CSSOMString;
    msScrollSnapX: CSSOMString;
    msScrollSnapY: CSSOMString;
    msScrollTranslation: CSSOMString;
    msTextCombineHorizontal: CSSOMString;
    msTextSizeAdjust: CSSOMString;
    msTouchAction: CSSOMString;
    msTouchSelect: CSSOMString;
    msUserSelect: CSSOMString;
    msWrapFlow: CSSOMString;
    msWrapMargin: CSSOMString;
    msWrapThrough: CSSOMString;
    opacity: CSSOMString;
    order: CSSOMString;
    orphans: CSSOMString;
    outline: CSSOMString;
    outlineColor: CSSOMString;
    outlineOffset: CSSOMString;
    outlineStyle: CSSOMString;
    outlineWidth: CSSOMString;
    overflow: CSSOMString;
    overflowX: CSSOMString;
    overflowY: CSSOMString;
    padding: CSSOMString;
    paddingBottom: CSSOMString;
    paddingLeft: CSSOMString;
    paddingRight: CSSOMString;
    paddingTop: CSSOMString;
    pageBreakAfter: CSSOMString;
    pageBreakBefore: CSSOMString;
    pageBreakInside: CSSOMString;
    readonly parentRule: CSSRule | null;
    perspective: CSSOMString;
    perspectiveOrigin: CSSOMString;
    pointerEvents: CSSOMString;
    position: CSSOMString;
    quotes: CSSOMString;
    resize: CSSOMString;
    right: CSSOMString;
    rotate: CSSOMString;
    rubyAlign: CSSOMString;
    rubyOverhang: CSSOMString;
    rubyPosition: CSSOMString;
    scale: CSSOMString;
    scrollPadding: CSSOMString;
    scrollPaddingBlock: CSSOMString;
    scrollPaddingBlockEnd: CSSOMString;
    scrollPaddingBlockStart: CSSOMString;
    scrollPaddingBottom: CSSOMString;
    scrollPaddingInline: CSSOMString;
    scrollPaddingInlineEnd: CSSOMString;
    scrollPaddingInlineStart: CSSOMString;
    scrollPaddingLeft: CSSOMString;
    scrollPaddingRight: CSSOMString;
    scrollPaddingTop: CSSOMString;
    scrollSnapAlign: CSSOMString;
    scrollSnapMargin: CSSOMString;
    scrollSnapMarginBlock: CSSOMString;
    scrollSnapMarginBlockEnd: CSSOMString;
    scrollSnapMarginBlockStart: CSSOMString;
    scrollSnapMarginBottom: CSSOMString;
    scrollSnapMarginInline: CSSOMString;
    scrollSnapMarginInlineEnd: CSSOMString;
    scrollSnapMarginInlineStart: CSSOMString;
    scrollSnapMarginLeft: CSSOMString;
    scrollSnapMarginRight: CSSOMString;
    scrollSnapMarginTop: CSSOMString;
    scrollSnapStop: CSSOMString;
    scrollSnapType: CSSOMString;
    stopColor: CSSOMString;
    stopOpacity: CSSOMString;
    stroke: CSSOMString;
    strokeDasharray: CSSOMString;
    strokeDashoffset: CSSOMString;
    strokeLinecap: CSSOMString;
    strokeLinejoin: CSSOMString;
    strokeMiterlimit: CSSOMString;
    strokeOpacity: CSSOMString;
    strokeWidth: CSSOMString;
    tableLayout: CSSOMString;
    textAlign: CSSOMString;
    textAlignLast: CSSOMString;
    textAnchor: CSSOMString;
    textDecoration: CSSOMString;
    textIndent: CSSOMString;
    textJustify: CSSOMString;
    textKashida: CSSOMString;
    textKashidaSpace: CSSOMString;
    textOverflow: CSSOMString;
    textShadow: CSSOMString;
    textTransform: CSSOMString;
    textUnderlinePosition: CSSOMString;
    top: CSSOMString;
    touchAction: CSSOMString;
    transform: CSSOMString;
    transformOrigin: CSSOMString;
    transformStyle: CSSOMString;
    transition: CSSOMString;
    transitionDelay: CSSOMString;
    transitionDuration: CSSOMString;
    transitionProperty: CSSOMString;
    transitionTimingFunction: CSSOMString;
    translate: CSSOMString;
    unicodeBidi: CSSOMString;
    userSelect: CSSOMString;
    verticalAlign: CSSOMString;
    visibility: CSSOMString;
    webkitAlignContent: CSSOMString;
    webkitAlignItems: CSSOMString;
    webkitAlignSelf: CSSOMString;
    webkitAnimation: CSSOMString;
    webkitAnimationDelay: CSSOMString;
    webkitAnimationDirection: CSSOMString;
    webkitAnimationDuration: CSSOMString;
    webkitAnimationFillMode: CSSOMString;
    webkitAnimationIterationCount: CSSOMString;
    webkitAnimationName: CSSOMString;
    webkitAnimationPlayState: CSSOMString;
    webkitAnimationTimingFunction: CSSOMString;
    webkitAppearance: CSSOMString;
    webkitBackfaceVisibility: CSSOMString;
    webkitBackgroundClip: CSSOMString;
    webkitBackgroundOrigin: CSSOMString;
    webkitBackgroundSize: CSSOMString;
    webkitBorderBottomLeftRadius: CSSOMString;
    webkitBorderBottomRightRadius: CSSOMString;
    webkitBorderImage: CSSOMString;
    webkitBorderRadius: CSSOMString;
    webkitBorderTopLeftRadius: CSSOMString;
    webkitBorderTopRightRadius: CSSOMString;
    webkitBoxAlign: CSSOMString;
    webkitBoxDirection: CSSOMString;
    webkitBoxFlex: CSSOMString;
    webkitBoxOrdinalGroup: CSSOMString;
    webkitBoxOrient: CSSOMString;
    webkitBoxPack: CSSOMString;
    webkitBoxSizing: CSSOMString;
    webkitColumnBreakAfter: CSSOMString;
    webkitColumnBreakBefore: CSSOMString;
    webkitColumnBreakInside: CSSOMString;
    webkitColumnCount: CSSOMString;
    webkitColumnGap: CSSOMString;
    webkitColumnRule: CSSOMString;
    webkitColumnRuleColor: CSSOMString;
    webkitColumnRuleStyle: CSSOMString;
    webkitColumnRuleWidth: CSSOMString;
    webkitColumns: CSSOMString;
    webkitColumnSpan: CSSOMString;
    webkitColumnWidth: CSSOMString;
    webkitFilter: CSSOMString;
    webkitFlex: CSSOMString;
    webkitFlexBasis: CSSOMString;
    webkitFlexDirection: CSSOMString;
    webkitFlexFlow: CSSOMString;
    webkitFlexGrow: CSSOMString;
    webkitFlexShrink: CSSOMString;
    webkitFlexWrap: CSSOMString;
    webkitJustifyContent: CSSOMString;
    webkitOrder: CSSOMString;
    webkitPerspective: CSSOMString;
    webkitPerspectiveOrigin: CSSOMString;
    webkitTapHighlightColor: CSSOMString;
    webkitTextFillColor: CSSOMString;
    webkitTextSizeAdjust: CSSOMString;
    webkitTextStroke: CSSOMString;
    webkitTextStrokeColor: CSSOMString;
    webkitTextStrokeWidth: CSSOMString;
    webkitTransform: CSSOMString;
    webkitTransformOrigin: CSSOMString;
    webkitTransformStyle: CSSOMString;
    webkitTransition: CSSOMString;
    webkitTransitionDelay: CSSOMString;
    webkitTransitionDuration: CSSOMString;
    webkitTransitionProperty: CSSOMString;
    webkitTransitionTimingFunction: CSSOMString;
    webkitUserModify: CSSOMString;
    webkitUserSelect: CSSOMString;
    webkitWritingMode: CSSOMString;
    whiteSpace: CSSOMString;
    widows: CSSOMString;
    width: CSSOMString;
    wordBreak: CSSOMString;
    wordSpacing: CSSOMString;
    wordWrap: CSSOMString;
    writingMode: CSSOMString;
    zIndex: CSSOMString;
    zoom: CSSOMString;
    getPropertyPriority(property: CSSOMString): CSSOMString;
    getPropertyValue(property: CSSOMString): CSSOMString;
    item(index: number): CSSOMString;
    removeProperty(property: CSSOMString): CSSOMString;
    setProperty(property: CSSOMString, value: CSSOMString, priority?: CSSOMString): void;
    setPropertyPriority(property: CSSOMString, priority: CSSOMString): void;
    setPropertyValue(property: CSSOMString, value: CSSOMString): void;
    [index: number]: CSSOMString;
}

declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
};

interface CSSStyleRule extends CSSRule {
    selectorText: CSSOMString;
    readonly style: CSSStyleDeclaration;
}

declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
};

interface CSSStyleSheet extends StyleSheet {
    readonly cssRules: CSSRuleList;
    readonly ownerRule: CSSRule | null;
    deleteRule(index: number): void;
    insertRule(rule: CSSOMString, index?: number): number;
}

declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
};

interface CSSSupportsRule extends CSSConditionRule {
}

declare var CSSSupportsRule: {
    prototype: CSSSupportsRule;
    new(): CSSSupportsRule;
};

interface CustomElementRegistry {
    define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
    get(name: string): any;
    whenDefined(name: string): Promise<void>;
}

declare var CustomElementRegistry: {
    prototype: CustomElementRegistry;
    new(): CustomElementRegistry;
};

interface CustomEvent extends Event {
    readonly detail: any;
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: any): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new(type: string, eventInitDict?: CustomEventInit): CustomEvent;
};

interface DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    readonly files: FileList;
    readonly items: DataTransferItemList;
    readonly types: string[];
    clearData(format?: string): void;
    getData(format: string): string;
    setData(format: string, data: string): void;
    setDragImage(image: Element, x: number, y: number): void;
}

declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
};

interface DataTransferItem {
    readonly kind: string;
    readonly type: string;
    getAsFile(): File | null;
    getAsString(callback: FunctionStringCallback | null): void;
}

declare var DataTransferItem: {
    prototype: DataTransferItem;
    new(): DataTransferItem;
};

interface DataTransferItemList {
    readonly length: number;
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    clear(): void;
    remove(index: number): void;
    [index: number]: DataTransferItem;
}

declare var DataTransferItemList: {
    prototype: DataTransferItemList;
    new(): DataTransferItemList;
};

interface DelayNode extends AudioNode {
    readonly delayTime: AudioParam;
}

declare var DelayNode: {
    prototype: DelayNode;
    new(context: BaseAudioContext, options?: DelayOptions): DelayNode;
};

interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceAcceleration | null;
    readonly accelerationIncludingGravity: DeviceAcceleration | null;
    readonly interval: number | null;
    readonly rotationRate: DeviceRotationRate | null;
}

declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new(type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
};

interface DeviceOrientationEvent extends Event {
    readonly absolute: boolean;
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new(type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
};

interface DocumentEventMap extends GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "readystatechange": Event;
}

interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, GeometryUtils, GlobalEventHandlers, DocumentAndElementEventHandlers, ParentNode {
    /**
     * Gets the object that has the focus when the parent document has focus.
     */
    readonly activeElement: Element | null;
    /**
     * Sets or gets the color of all active links in the document.
     */
    alinkColor: string;
    /**
     * Returns a reference to the collection of elements contained by the object.
     */
    readonly all: HTMLAllCollection;
    /**
     * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
     */
    anchors: HTMLCollectionOf<HTMLAnchorElement>;
    /**
     * Retrieves a collection of all applet objects in the document.
     */
    applets: HTMLCollectionOf<HTMLAppletElement>;
    /**
     * Deprecated. Sets or retrieves a value that indicates the background color behind the object.
     */
    bgColor: string;
    /**
     * Specifies the beginning and end of the document body.
     */
    body: HTMLElement | null;
    readonly characterSet: string;
    /**
     * Gets or sets the character set used to encode the object.
     */
    readonly charset: string;
    /**
     * Gets a value that indicates whether standards-compliant mode is switched on for the object.
     */
    readonly compatMode: string;
    readonly contentType: string;
    cookie: string;
    readonly currentScript: HTMLScriptElement | SVGScriptElement | null;
    readonly defaultView: Window | null;
    /**
     * Sets or gets a value that indicates whether the document can be edited.
     */
    designMode: string;
    /**
     * Sets or retrieves a value that indicates the reading order of the object.
     */
    dir: string;
    /**
     * Gets an object representing the document type declaration associated with the current document.
     */
    readonly doctype: DocumentType | null;
    /**
     * Gets a reference to the root node of the document.
     */
    documentElement: HTMLElement;
    readonly documentURI: string;
    /**
     * Sets or gets the security domain of the document.
     */
    domain: string;
    /**
     * Retrieves a collection of all embed objects in the document.
     */
    embeds: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Sets or gets the foreground (text) color of the document.
     */
    fgColor: string;
    /**
     * Retrieves a collection, in source order, of all form objects in the document.
     */
    forms: HTMLCollectionOf<HTMLFormElement>;
    readonly fullscreen: boolean;
    readonly fullscreenEnabled: boolean;
    readonly head: HTMLHeadElement | null;
    readonly hidden: boolean;
    /**
     * Retrieves a collection, in source order, of img objects in the document.
     */
    images: HTMLCollectionOf<HTMLImageElement>;
    /**
     * Gets the implementation object of the current document.
     */
    readonly implementation: DOMImplementation;
    /**
     * Returns the character encoding used to create the webpage that is loaded into the document object.
     */
    readonly inputEncoding: string;
    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */
    readonly lastModified: string;
    /**
     * Sets or gets the color of the document links.
     */
    linkColor: string;
    /**
     * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
     */
    links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    /**
     * Contains information about the current URL.
     */
    readonly location: Location | null;
    onfullscreenchange: (this: Document, ev: Event) => any;
    onfullscreenerror: (this: Document, ev: Event) => any;
    /**
     * Fires when the state of the object has changed.
     * @param ev The event
     */
    onreadystatechange: (this: Document, ev: Event) => any;
    readonly origin: string;
    plugins: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Retrieves a value that indicates the current state of the object.
     */
    readonly readyState: DocumentReadyState;
    /**
     * Gets the URL of the location that referred the user to the current page.
     */
    readonly referrer: string;
    /**
     * Gets the root svg element in the document hierarchy.
     */
    readonly rootElement: SVGSVGElement | null;
    /**
     * Retrieves a collection of all script objects in the document.
     */
    scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly scrollingElement: Element | null;
    /**
     * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
     */
    readonly styleSheets: StyleSheetList;
    /**
     * Contains the title of the document.
     */
    title: string;
    /**
     * Sets or gets the URL for the current document.
     */
    readonly URL: string;
    readonly visibilityState: VisibilityState;
    /**
     * Sets or gets the color of the links that the user has visited.
     */
    vlinkColor: string;
    adoptNode<T extends Node>(source: T): T;
    captureEvents(): void;
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    clear(): void;
    /**
     * Closes an output stream and forces the sent data to display.
     */
    close(): void;
    /**
     * Creates an attribute object with a specified name.
     * @param name String that sets the attribute object's name.
     */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    createCDATASection(data: string): CDATASection;
    /**
     * Creates a comment object with the specified data.
     * @param data Sets the comment object's data.
     */
    createComment(data: string): Comment;
    /**
     * Creates a new document.
     */
    createDocumentFragment(): DocumentFragment;
    /**
     * Creates an instance of the element for the specified tag.
     * @param tagName The name of an element.
     */
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "a"): SVGAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "circle"): SVGCircleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "clipPath"): SVGClipPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "componentTransferFunction"): SVGComponentTransferFunctionElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "defs"): SVGDefsElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "desc"): SVGDescElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "ellipse"): SVGEllipseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feBlend"): SVGFEBlendElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feColorMatrix"): SVGFEColorMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComponentTransfer"): SVGFEComponentTransferElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComposite"): SVGFECompositeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feConvolveMatrix"): SVGFEConvolveMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDiffuseLighting"): SVGFEDiffuseLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDisplacementMap"): SVGFEDisplacementMapElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDistantLight"): SVGFEDistantLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFlood"): SVGFEFloodElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncA"): SVGFEFuncAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncB"): SVGFEFuncBElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncG"): SVGFEFuncGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncR"): SVGFEFuncRElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feGaussianBlur"): SVGFEGaussianBlurElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feImage"): SVGFEImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMerge"): SVGFEMergeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMergeNode"): SVGFEMergeNodeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMorphology"): SVGFEMorphologyElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feOffset"): SVGFEOffsetElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "fePointLight"): SVGFEPointLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpecularLighting"): SVGFESpecularLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpotLight"): SVGFESpotLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTile"): SVGFETileElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTurbulence"): SVGFETurbulenceElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "filter"): SVGFilterElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "foreignObject"): SVGForeignObjectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "g"): SVGGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "image"): SVGImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "gradient"): SVGGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "line"): SVGLineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "linearGradient"): SVGLinearGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "marker"): SVGMarkerElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "mask"): SVGMaskElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "path"): SVGPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "metadata"): SVGMetadataElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "pattern"): SVGPatternElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polygon"): SVGPolygonElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polyline"): SVGPolylineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "radialGradient"): SVGRadialGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "rect"): SVGRectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "svg"): SVGSVGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "script"): SVGScriptElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "stop"): SVGStopElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "style"): SVGStyleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "switch"): SVGSwitchElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "symbol"): SVGSymbolElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "tspan"): SVGTSpanElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textContent"): SVGTextContentElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "text"): SVGTextElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPath"): SVGTextPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPositioning"): SVGTextPositioningElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "title"): SVGTitleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "use"): SVGUseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "view"): SVGViewElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS(namespace: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverconstrainedErrorEvent"): OverconstrainedErrorEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "RelatedEvent"): RelatedEvent;
    createEvent(eventInterface: "SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list
     * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter): NodeIterator;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */
    createRange(): Range;
    /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
    createTextNode(data: string): Text;
    createTouch(view: Window, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch;
    createTouchList(...touches: Touch[]): TouchList;
    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter): TreeWalker;
    /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    /**
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     */
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    exitFullscreen(): Promise<void>;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
     */
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */
    getElementsByTagName<K extends keyof ElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
     */
    getSelection(): Selection | null;
    /**
     * Gets a value indicating whether the object currently has focus.
     */
    hasFocus(): boolean;
    importNode<T extends Node>(importedNode: T, deep: boolean): T;
    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param commandId Specifies a command identifier.
     */
    queryCommandEnabled(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandIndeterm(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandState(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param commandId Specifies a command identifier.
     */
    queryCommandSupported(commandId: string): boolean;
    /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandValue(commandId: string): string;
    releaseEvents(): void;
    /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param content Specifies the text and HTML tags to write.
     */
    write(...text: string[]): void;
    /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param content The text and HTML tags to write.
     */
    writeln(...text: string[]): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [name: string]: any;
}

declare var Document: {
    prototype: Document;
    new(): Document;
};

interface DocumentFragment extends Node, NonElementParentNode, ParentNode, ParentNode {
}

declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
};

interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly publicId: string;
    readonly systemId: string;
}

declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
};

interface DOMImplementation {
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    hasFeature(feature: string | null, version: string | null): boolean;
}

declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
};

interface DOMMatrix extends DOMMatrixReadOnly {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

interface DOMMatrixReadOnly {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

interface DOMParser {
    parseFromString(str: string, type: any): Document;
}

declare var DOMParser: {
    prototype: DOMParser;
    new(): DOMParser;
};

interface DOMPoint extends DOMPointReadOnly {
    w: number;
    x: number;
    y: number;
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};

interface DOMPointReadOnly {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

interface DOMQuad {
    readonly p1: DOMPoint;
    readonly p2: DOMPoint;
    readonly p3: DOMPoint;
    readonly p4: DOMPoint;
    getBounds(): DOMRect;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

interface DOMRect extends DOMRectReadOnly {
    height: number;
    width: number;
    x: number;
    y: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};

interface DOMRectReadOnly {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

interface DOMStringList {
    readonly length: number;
    contains(string: string): boolean;
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

interface DOMStringMap {
    [name: string]: string | undefined;
}

declare var DOMStringMap: {
    prototype: DOMStringMap;
    new(): DOMStringMap;
};

interface DOMTokenList {
    readonly length: number;
    value: string;
    add(...tokens: string[]): void;
    contains(token: string): boolean;
    item(index: number): string | null;
    remove(...tokens: string[]): void;
    replace(token: string, newToken: string): void;
    supports(token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    [index: number]: string;
}

declare var DOMTokenList: {
    prototype: DOMTokenList;
    new(): DOMTokenList;
};

interface DragEvent extends MouseEvent {
    readonly dataTransfer: DataTransfer | null;
}

declare var DragEvent: {
    prototype: DragEvent;
    new(type: string, eventInitDict?: DragEventInit): DragEvent;
};

interface DynamicsCompressorNode extends AudioNode {
    readonly attack: AudioParam;
    readonly knee: AudioParam;
    readonly ratio: AudioParam;
    readonly reduction: number;
    readonly release: AudioParam;
    readonly threshold: AudioParam;
}

declare var DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
};

interface ElementEventMap {
    "gotpointercapture": PointerEvent;
    "lostpointercapture": PointerEvent;
}

interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, GeometryUtils, ParentNode {
    readonly attributes: NamedNodeMap;
    readonly classList: DOMTokenList;
    className: string;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    id: string;
    innerHTML: string;
    readonly localName: string;
    readonly namespaceURI: string | null;
    ongotpointercapture: (this: Element, ev: PointerEvent) => any;
    onlostpointercapture: (this: Element, ev: PointerEvent) => any;
    outerHTML: string;
    readonly prefix: string | null;
    readonly scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly shadowRoot: ShadowRoot | null;
    slot: string;
    readonly tagName: string;
    readonly assignedSlot: HTMLSlotElement | null;
    attachShadow(init: ShadowRootInit): ShadowRoot;
    closest(selectors: string): Element | null;
    getAttribute(name: string): string | null;
    getAttributeNames(): string[];
    getAttributeNode(qualifiedName: string): Attr | null;
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
    getAttributeNS(namespace: string | null, localName: string): string | null;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRect[];
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof ElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    hasAttribute(qualifiedName: string): boolean;
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    hasAttributes(): boolean;
    insertAdjacentElement(where: string, element: Element): Element | null;
    insertAdjacentHTML(position: string, text: string): void;
    insertAdjacentText(where: string, data: string): void;
    matches(selectors: string): boolean;
    releasePointerCapture(pointerId: number): void;
    removeAttribute(qualifiedName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    removeAttributeNS(namespace: string | null, localName: string): void;
    requestFullscreen(): Promise<void>;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(): void;
    scrollIntoView(arg: any): void;
    scrollTo(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    setAttribute(name: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setPointerCapture(pointerId: number): void;
    webkitMatchesSelector(selectors: string): boolean;
    getElementsByClassName(classNames: string): NodeListOf<Element>;
    matches(selector: string): boolean;
    closest(selector: string): Element | null;
    insertAdjacentElement(position: string, insertedElement: Element): Element | null;
    insertAdjacentHTML(where: string, html: string): void;
    insertAdjacentText(where: string, text: string): void;
    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var Element: {
    prototype: Element;
    new(): Element;
};

interface ErrorEvent extends Event {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, errorEventInitDict?: ErrorEventInit): ErrorEvent;
};

interface Event {
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    cancelBubble: boolean;
    readonly composed: boolean;
    readonly currentTarget: EventTarget | null;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    readonly target: EventTarget | null;
    readonly timeStamp: number;
    readonly type: string;
    readonly scoped: boolean;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    deepPath(): EventTarget[];
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface EventSource extends EventTarget {
    onerror: (this: EventSource, ev: Event) => any;
    onmessage: (this: EventSource, ev: MessageEvent) => any;
    onopen: (this: EventSource, ev: Event) => any;
    readonly readyState: number;
    readonly url: string;
    readonly withCredentials: boolean;
    close(): void;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

interface EventTarget {
    addEventListener(type: string, callback: EventListener | null, options?: AddEventListenerOptions | boolean): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListener | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}

declare var File: {
    prototype: File;
    new (parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag): File;
};

interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
}

interface FileReader extends EventTarget {
    readonly error: DOMException | null;
    onabort: (this: FileReader, ev: ProgressEvent) => any;
    onerror: (this: FileReader, ev: ProgressEvent) => any;
    onload: (this: FileReader, ev: ProgressEvent) => any;
    onloadend: (this: FileReader, ev: ProgressEvent) => any;
    onloadstart: (this: FileReader, ev: ProgressEvent) => any;
    onprogress: (this: FileReader, ev: ProgressEvent) => any;
    readonly readyState: number;
    readonly result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, label?: string): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
};

interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget | null;
}

declare var FocusEvent: {
    prototype: FocusEvent;
    new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
};

interface FormData {
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
}

declare var FormData: {
    prototype: FormData;
    new (form?: HTMLFormElement): FormData;
};

interface GainNode extends AudioNode {
    readonly gain: AudioParam;
}

declare var GainNode: {
    prototype: GainNode;
    new(context: BaseAudioContext, options?: GainOptions): GainNode;
};

interface Gamepad {
    readonly axes: ReadonlyArray<number>;
    readonly buttons: ReadonlyArray<GamepadButton>;
    readonly connected: boolean;
    readonly id: string;
    readonly index: number;
    readonly mapping: GamepadMappingType;
    readonly timestamp: number;
}

declare var Gamepad: {
    prototype: Gamepad;
    new(): Gamepad;
};

interface GamepadButton {
    readonly pressed: boolean;
    readonly touched: boolean;
    readonly value: number;
}

declare var GamepadButton: {
    prototype: GamepadButton;
    new(): GamepadButton;
};

interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}

declare var GamepadEvent: {
    prototype: GamepadEvent;
    new(type: string, eventInitDict: GamepadEventInit): GamepadEvent;
};

interface HashChangeEvent extends Event {
    readonly newURL: string;
    readonly oldURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, title: string, url?: string | null): void;
    replaceState(data: any, title: string, url?: string | null): void;
}

declare var History: {
    prototype: History;
    new(): History;
};

interface HTMLAllCollection {
    readonly length: number;
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    namedItem(name: string): HTMLCollection | Element | null;
    [index: number]: Element;
}

declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
};

interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    charset: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    coords: string;
    download: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    name: string;
    ping: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rev: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
};

interface HTMLAppletElement extends HTMLElement {
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    archive: string;
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    codeBase: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    hspace: number;
    /**
     * Sets or retrieves the shape of the object.
     */
    name: string;
    object: string;
    vspace: number;
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAppletElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAppletElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
};

interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    coords: string;
    download: string;
    /**
     * Sets or gets whether clicks in this region cause action.
     */
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the shape of the object.
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAreaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAreaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
};

interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
};

interface HTMLBaseElement extends HTMLElement {
    /**
     * Gets or sets the baseline URL on which relative links are based.
     */
    href: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBaseElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBaseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
};

interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    aLink: string;
    background: string;
    bgColor: string;
    link: string;
    text: string;
    vLink: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
};

interface HTMLBRElement extends HTMLElement {
    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     */
    clear: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBRElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
};

interface HTMLButtonElement extends HTMLElement {
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    readonly labels: NodeList;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets the classification and default behavior of the button.
     */
    type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Sets or retrieves the default or selected value of the control.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLButtonElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLButtonElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
};

interface HTMLCanvasElement extends HTMLElement {
    /**
     * Gets or sets the height of a canvas element on a document.
     */
    height: number;
    /**
     * Gets or sets the width of a canvas element on a document.
     */
    width: number;
    /**
     * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
     * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
     */
    getContext(contextId: "2d", contextAttributes?: Canvas2DContextAttributes): CanvasRenderingContext2D | null;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    /**
     * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
     * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
     */
    toDataURL(type?: string, quality?: any): string;
    transferControlToOffscreen(): OffscreenCanvas;
    toBlob(callback: (result: Blob | null) => void, type?: string, ...arguments: any[]): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
};

interface HTMLCollectionBase {
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    readonly length: number;
    /**
     * Retrieves an object from various collections.
     */
    item(index: number): Element;
    [index: number]: Element;
}

interface HTMLCollection extends HTMLCollectionBase {
    /**
     * Retrieves a select object or an object from an options collection.
     */
    namedItem(name: string): Element | null;
}

declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
};

interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDataElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDataElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDataElement: {
    prototype: HTMLDataElement;
    new(): HTMLDataElement;
};

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDataListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDataListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
};

interface HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDetailsElement: {
    prototype: HTMLDetailsElement;
    new(): HTMLDetailsElement;
};

interface HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    close(returnValue?: string): void;
    show(): void;
    showModal(): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDialogElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDialogElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDialogElement: {
    prototype: HTMLDialogElement;
    new(): HTMLDialogElement;
};

interface HTMLDirectoryElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
};

interface HTMLDivElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDivElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDivElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
};

interface HTMLDListElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
};

interface HTMLElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, ElementContentEditable, ElementCSSInlineStyle {
    accessKey: string;
    readonly accessKeyLabel: string;
    contextMenu: HTMLMenuElement | null;
    readonly dataset: DOMStringMap;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    innerText: string;
    lang: string;
    readonly offsetHeight: number;
    readonly offsetLeft: number;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    spellcheck: boolean;
    tabIndex: number;
    title: string;
    translate: boolean;
    blur(): void;
    click(): void;
    focus(): void;
    forceSpellCheck(): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
};

interface HTMLEmbedElement extends HTMLElement {
    align: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    type: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
};

interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    readonly elements: HTMLCollection;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
};

interface HTMLFontElement extends HTMLElement {
    color: string;
    /**
     * Sets or retrieves the current typeface family.
     */
    face: string;
    size: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFontElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFontElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
};

interface HTMLFormControlsCollection extends HTMLCollectionBase {
    namedItem(name: string): RadioNodeList | Element | null;
}

declare var HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    new(): HTMLFormControlsCollection;
};

interface HTMLFormElement extends HTMLElement {
    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     */
    acceptCharset: string;
    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     */
    action: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Retrieves a collection, in source order, of all controls in a given form.
     */
    readonly elements: HTMLFormControlsCollection;
    /**
     * Sets or retrieves the MIME encoding for the form.
     */
    encoding: string;
    /**
     * Sets or retrieves the encoding type for the form.
     */
    enctype: string;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    readonly length: number;
    /**
     * Sets or retrieves how to send the form data to the server.
     */
    method: string;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Designates a form that is not validated when submitted.
     */
    noValidate: boolean;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Fires when the user resets a form.
     */
    reset(): void;
    /**
     * Fires when a FORM is about to be submitted.
     */
    submit(): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFormElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFormElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: Element;
}

declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
};

interface HTMLFrameElement extends HTMLElement {
    /**
     * Retrieves the document object of the page or frame.
     */
    readonly contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    readonly contentWindow: Window | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    frameBorder: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    name: string;
    /**
     * Sets or retrieves whether the user can resize the frame.
     */
    noResize: boolean;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFrameElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFrameElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
};

interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /**
     * Sets or retrieves the frame widths of the object.
     */
    cols: string;
    /**
     * Sets or retrieves the frame heights of the object.
     */
    rows: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
};

interface HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHeadElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHeadElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
};

interface HTMLHeadingElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
};

interface HTMLHRElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    color: string;
    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     */
    noShade: boolean;
    size: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHRElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
};

interface HTMLHtmlElement extends HTMLElement {
    /**
     * Sets or retrieves the DTD version that governs the current document.
     */
    version: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
};

interface HTMLIFrameElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    allowUserMedia: boolean;
    /**
     * Retrieves the document object of the page or frame.
     */
    readonly contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    readonly contentWindow: Window | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    frameBorder: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    name: string;
    referrerPolicy: string;
    readonly sandbox: DOMTokenList;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    srcdoc: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
};

interface HTMLImageElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies the properties of a border drawn around an object.
     */
    border: string;
    /**
     * Retrieves whether the object is fully loaded.
     */
    readonly complete: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    hspace: number;
    /**
     * Sets or retrieves whether the image is a server-side image map.
     */
    isMap: boolean;
    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     */
    longDesc: string;
    lowsrc: string;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * The original height of the image resource before sizing.
     */
    readonly naturalHeight: number;
    /**
     * The original width of the image resource before sizing.
     */
    readonly naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Sets or retrieves the vertical margin for the object.
     */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    readonly x: number;
    readonly y: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLImageElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
};

interface HTMLInputElement extends HTMLElement {
    /**
     * Sets or retrieves a comma-separated list of content types.
     */
    accept: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    checked: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    defaultChecked: boolean;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Returns a FileList object on a file type input object.
     */
    readonly files: FileList | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    indeterminate: boolean;
    inputMode: string;
    readonly labels: NodeList | null;
    /**
     * Specifies the ID of a pre-defined datalist of options for an input element.
     */
    readonly list: HTMLElement | null;
    /**
     * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
     */
    max: string;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    /**
     * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
     */
    min: string;
    minLength: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     */
    pattern: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    selectionDirection: string | null;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number | null;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number | null;
    size: number;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    /**
     * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
     */
    step: string;
    /**
     * Returns the content type of the object.
     */
    type: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Returns the value of the data at the cursor's current position.
     */
    value: string;
    valueAsDate: any;
    /**
     * Returns the input field value as a number.
     */
    valueAsNumber: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Makes the selection equal to the current object.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     */
    setSelectionRange(start: number, end: number, direction?: string): void;
    /**
     * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
     * @param n Value to decrement the value by.
     */
    stepDown(n?: number): void;
    /**
     * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
     * @param n Value to increment the value by.
     */
    stepUp(n?: number): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLInputElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLInputElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
};

interface HTMLLabelElement extends HTMLElement {
    readonly control: HTMLElement | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the object to which the given label object is assigned.
     */
    htmlFor: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLabelElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLabelElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
};

interface HTMLLegendElement extends HTMLElement {
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    align: string;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLegendElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLegendElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
};

interface HTMLLIElement extends HTMLElement {
    type: string;
    /**
     * Sets or retrieves the value of a list item.
     */
    value: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLIElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLIElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
};

interface HTMLLinkElement extends HTMLElement, LinkStyle {
    as: string;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    charset: string;
    crossOrigin: string | null;
    /**
     * Sets or retrieves a destination URL or an anchor point.
     */
    href: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    integrity: string;
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    nonce: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rev: string;
    scope: string;
    readonly sizes: DOMTokenList;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    useCache: boolean;
    workerType: WorkerType;
    import?: Document;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLinkElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLinkElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
};

interface HTMLMapElement extends HTMLElement {
    /**
     * Retrieves a collection of the area objects defined for the given map object.
     */
    readonly areas: HTMLCollection;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMapElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMapElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
};

interface HTMLMarqueeElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "bounce": Event;
    "finish": Event;
    "start": Event;
}

interface HTMLMarqueeElement extends HTMLElement {
    behavior: string;
    bgColor: string;
    direction: string;
    height: string;
    hspace: number;
    loop: number;
    onbounce: (this: HTMLMarqueeElement, ev: Event) => any;
    onfinish: (this: HTMLMarqueeElement, ev: Event) => any;
    onstart: (this: HTMLMarqueeElement, ev: Event) => any;
    scrollAmount: number;
    scrollDelay: number;
    trueSpeed: boolean;
    vspace: number;
    width: string;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
};

interface HTMLMediaElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "encrypted": MediaEncryptedEvent;
    "waitingforkey": Event;
}

interface HTMLMediaElement extends HTMLElement {
    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     */
    readonly audioTracks: AudioTrackList;
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     */
    autoplay: boolean;
    /**
     * Gets a collection of buffered time ranges.
     */
    readonly buffered: TimeRanges;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     */
    controls: boolean;
    crossOrigin: string | null;
    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     */
    readonly currentSrc: string;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    currentTime: number;
    defaultMuted: boolean;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     */
    defaultPlaybackRate: number;
    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
     */
    readonly duration: number;
    /**
     * Gets information about whether the playback has ended or not.
     */
    readonly ended: boolean;
    /**
     * Returns an object representing the current error state of the audio or video element.
     */
    readonly error: MediaError | null;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     */
    loop: boolean;
    readonly mediaKeys: MediaKeys | null;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     */
    muted: boolean;
    /**
     * Gets the current network activity for the element.
     */
    readonly networkState: number;
    onencrypted: (this: HTMLMediaElement, ev: MediaEncryptedEvent) => any;
    onwaitingforkey: (this: HTMLMediaElement, ev: Event) => any;
    /**
     * Gets a flag that specifies whether playback is paused.
     */
    readonly paused: boolean;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     */
    playbackRate: number;
    /**
     * Gets TimeRanges for the current media resource that has been played.
     */
    readonly played: TimeRanges;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    preload: string;
    readyState: number;
    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     */
    readonly seekable: TimeRanges;
    /**
     * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
     */
    readonly seeking: boolean;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcObject: MediaProvider | null;
    readonly textTracks: TextTrackList;
    readonly videoTracks: VideoTrackList;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     */
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     */
    canPlayType(type: string): CanPlayTypeResult;
    fastSeek(time: number): void;
    getStartDate(): any;
    /**
     * Resets the audio or video object and loads a new media resource.
     */
    load(): void;
    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     */
    pause(): void;
    /**
     * Loads and starts playback of a media resource.
     */
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
};

interface HTMLMenuElement extends HTMLElement {
    compact: boolean;
    label: string;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMenuElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMenuElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
};

interface HTMLMenuItemElement extends HTMLElement {
    checked: boolean;
    default: boolean;
    disabled: boolean;
    icon: string;
    label: string;
    radiogroup: string;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMenuItemElement: {
    prototype: HTMLMenuItemElement;
    new(): HTMLMenuItemElement;
};

interface HTMLMetaElement extends HTMLElement {
    /**
     * Gets or sets meta-information to associate with httpEquiv or name.
     */
    content: string;
    /**
     * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
     */
    httpEquiv: string;
    /**
     * Sets or retrieves the value specified in the content attribute of the meta object.
     */
    name: string;
    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     */
    scheme: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMetaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMetaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
};

interface HTMLMeterElement extends HTMLElement {
    high: number;
    readonly labels: NodeList;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMeterElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMeterElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLMeterElement: {
    prototype: HTMLMeterElement;
    new(): HTMLMeterElement;
};

interface HTMLModElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    /**
     * Sets or retrieves the date and time of a modification to the object.
     */
    dateTime: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLModElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLModElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLModElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLModElement: {
    prototype: HTMLModElement;
    new(): HTMLModElement;
};

interface HTMLObjectElement extends HTMLElement {
    align: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    archive: string;
    border: string;
    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    codeBase: string;
    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */
    codeType: string;
    /**
     * Retrieves the document object of the page or frame.
     */
    readonly contentDocument: Document | null;
    readonly contentWindow: Window | null;
    /**
     * Sets or retrieves the URL that references the data of the object.
     */
    data: string;
    declare: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    hspace: number;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */
    standby: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    typeMustMatch: boolean;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    getSVGDocument(): Document | null;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLObjectElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLObjectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
};

interface HTMLOListElement extends HTMLElement {
    compact: boolean;
    reversed: boolean;
    /**
     * The starting number.
     */
    start: number;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
};

interface HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
};

interface HTMLOptionElement extends HTMLElement {
    /**
     * Sets or retrieves the status of an option.
     */
    defaultSelected: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */
    readonly index: number;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */
    selected: boolean;
    /**
     * Sets or retrieves the text string specified by the option tag.
     */
    text: string;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOptionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOptionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
};

interface HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    length: number;
    selectedIndex: number;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number): void;
    remove(index: number): void;
}

declare var HTMLOptionsCollection: {
    prototype: HTMLOptionsCollection;
    new(): HTMLOptionsCollection;
};

interface HTMLOutputElement extends HTMLElement {
    defaultValue: string;
    readonly form: HTMLFormElement | null;
    readonly htmlFor: DOMTokenList;
    readonly labels: NodeList;
    name: string;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOutputElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOutputElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLOutputElement: {
    prototype: HTMLOutputElement;
    new(): HTMLOutputElement;
};

interface HTMLParagraphElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
};

interface HTMLParamElement extends HTMLElement {
    /**
     * Sets or retrieves the name of an input parameter for an element.
     */
    name: string;
    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     */
    type: string;
    /**
     * Sets or retrieves the value of an input parameter for an element.
     */
    value: string;
    /**
     * Sets or retrieves the data type of the value attribute.
     */
    valueType: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLParamElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLParamElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
};

interface HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLPictureElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLPictureElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLPictureElement: {
    prototype: HTMLPictureElement;
    new(): HTMLPictureElement;
};

interface HTMLPreElement extends HTMLElement {
    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     */
    width: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLPreElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLPreElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
};

interface HTMLProgressElement extends HTMLElement {
    readonly labels: NodeList;
    /**
     * Defines the maximum, or "done" value for a progress element.
     */
    max: number;
    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */
    readonly position: number;
    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */
    value: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLProgressElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLProgressElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
};

interface HTMLQuoteElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
};

interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    charset: string;
    crossOrigin: string | null;
    /**
     * Sets or retrieves the status of the script.
     */
    defer: boolean;
    /**
     * Sets or retrieves the event for which the script is written.
     */
    event: string;
    /**
     * Sets or retrieves the object that is bound to the event script.
     */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    nonce: string;
    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */
    src: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLScriptElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLScriptElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
};

interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    readonly labels: NodeList;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    length: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    readonly options: HTMLOptionsCollection;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the index of the selected option in a select object.
     */
    selectedIndex: number;
    selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    /**
     * Sets or retrieves the number of rows in the list box.
     */
    size: number;
    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number): void;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(index: number): Element | null;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */
    namedItem(name: string): HTMLOptionElement | null;
    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(): void;
    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(index: number): void;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSelectElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSelectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: Element;
}

declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
};

interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSlotElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSlotElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLSlotElement: {
    prototype: HTMLSlotElement;
    new(): HTMLSlotElement;
};

interface HTMLSourceElement extends HTMLElement {
    /**
     * Gets or sets the intended media type of the media source.
     */
    media: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSourceElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSourceElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
};

interface HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSpanElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSpanElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
};

interface HTMLStyleElement extends HTMLElement, LinkStyle {
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    nonce: string;
    /**
     * Retrieves the CSS language in which the style sheet is written.
     */
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLStyleElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLStyleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
};

interface HTMLTableCaptionElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the caption or legend.
     */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
};

interface HTMLTableCellElement extends HTMLElement {
    /**
     * Sets or retrieves abbreviated text for the object.
     */
    abbr: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */
    axis: string;
    bgColor: string;
    /**
     * Retrieves the position of the object in the cells collection of a row.
     */
    readonly cellIndex: number;
    ch: string;
    chOff: string;
    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */
    colSpan: number;
    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */
    headers: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    noWrap: boolean;
    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */
    rowSpan: number;
    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */
    scope: string;
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
};

interface HTMLTableColElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */
    align: string;
    ch: string;
    chOff: string;
    /**
     * Sets or retrieves the number of columns in the group.
     */
    span: number;
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableColElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableColElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
};

interface HTMLTableElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    align: string;
    bgColor: string;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    border: string;
    /**
     * Retrieves the caption object of a table.
     */
    caption: HTMLTableCaptionElement | null;
    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */
    cellPadding: string;
    /**
     * Sets or retrieves the amount of space between cells in a table.
     */
    cellSpacing: string;
    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */
    frame: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */
    rules: string;
    /**
     * Sets or retrieves a description and/or structure of the object.
     */
    summary: string;
    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */
    tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    /**
     * Retrieves the tFoot object of the table.
     */
    tFoot: HTMLTableSectionElement | null;
    /**
     * Retrieves the tHead object of the table.
     */
    tHead: HTMLTableSectionElement | null;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    /**
     * Creates an empty caption element in the table.
     */
    createCaption(): HTMLTableCaptionElement;
    /**
     * Creates an empty tBody element in the table.
     */
    createTBody(): HTMLTableSectionElement;
    /**
     * Creates an empty tFoot element in the table.
     */
    createTFoot(): HTMLTableSectionElement;
    /**
     * Returns the tHead element object if successful, or null otherwise.
     */
    createTHead(): HTMLTableSectionElement;
    /**
     * Deletes the caption element and its contents from the table.
     */
    deleteCaption(): void;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Deletes the tFoot element and its contents from the table.
     */
    deleteTFoot(): void;
    /**
     * Deletes the tHead element and its contents from the table.
     */
    deleteTHead(): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
};

interface HTMLTableRowElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: string;
    bgColor: string;
    /**
     * Retrieves a collection of all cells in the table row.
     */
    cells: HTMLCollectionOf<HTMLTableCellElement>;
    ch: string;
    chOff: string;
    /**
     * Retrieves the position of the object in the rows collection for the table.
     */
    readonly rowIndex: number;
    /**
     * Retrieves the position of the object in the collection.
     */
    readonly sectionRowIndex: number;
    vAlign: string;
    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */
    deleteCell(index: number): void;
    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */
    insertCell(index?: number): HTMLTableCellElement;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
};

interface HTMLTableSectionElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    align: string;
    ch: string;
    chOff: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: HTMLCollectionOf<HTMLTableRowElement>;
    vAlign: string;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
};

interface HTMLTemplateElement extends HTMLElement {
    readonly content: DocumentFragment;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTemplateElement: {
    prototype: HTMLTemplateElement;
    new(): HTMLTemplateElement;
};

interface HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the width of the object.
     */
    cols: number;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    inputMode: string;
    readonly labels: NodeList;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    minLength: number;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: number;
    selectionDirection: string;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number;
    readonly textLength: number;
    /**
     * Retrieves the type of control.
     */
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */
    wrap: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Highlights the input area of a form element.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     */
    setSelectionRange(start: number, end: number, direction?: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
};

interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTimeElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTimeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTimeElement: {
    prototype: HTMLTimeElement;
    new(): HTMLTimeElement;
};

interface HTMLTitleElement extends HTMLElement {
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTitleElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTitleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
};

interface HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    readonly readyState: number;
    src: string;
    srclang: string;
    readonly track: TextTrack;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTrackElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTrackElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
};

interface HTMLUListElement extends HTMLElement {
    compact: boolean;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLUListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLUListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
};

interface HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
};

interface HTMLVideoElement extends HTMLMediaElement {
    /**
     * Gets or sets the height of the video element.
     */
    height: number;
    playsInline: boolean;
    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */
    poster: string;
    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoHeight: number;
    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoWidth: number;
    /**
     * Gets or sets the width of the video element.
     */
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
};

interface IDBCursor {
    readonly direction: IDBCursorDirection;
    key: IDBKeyRange | IDBValidKey;
    readonly primaryKey: any;
    source: IDBObjectStore | IDBIndex;
    advance(count: number): void;
    continue(key?: IDBKeyRange | IDBValidKey): void;
    continuePrimaryKey(key: any, primaryKey: any): void;
    delete(): IDBRequest;
    update(value: any): IDBRequest;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

interface IDBCursorWithValue extends IDBCursor {
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

interface IDBDatabase extends EventTarget {
    readonly name: string;
    readonly objectStoreNames: DOMStringList;
    onabort: (this: IDBDatabase, ev: Event) => any;
    onclose: (this: IDBDatabase, ev: Event) => any;
    onerror: (this: IDBDatabase, ev: Event) => any;
    onversionchange: (this: IDBDatabase, ev: IDBVersionChangeEvent) => any;
    version: number;
    close(): void;
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener(type: "versionchange", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

interface IDBFactory {
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

interface IDBIndex {
    keyPath: string | string[];
    readonly multiEntry: boolean;
    name: string;
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    get(key: IDBKeyRange | IDBValidKey): IDBRequest;
    getAll(query?: any, count?: number): IDBRequest;
    getAllKeys(query?: any, count?: number): IDBRequest;
    getKey(key: IDBKeyRange | IDBValidKey): IDBRequest;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

interface IDBKeyRange {
    readonly lower: any;
    readonly lowerOpen: boolean;
    readonly upper: any;
    readonly upperOpen: boolean;
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

interface IDBObjectStore {
    readonly autoIncrement: boolean;
    readonly indexNames: DOMStringList;
    keyPath: string | string[];
    name: string;
    readonly transaction: IDBTransaction;
    add(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
    clear(): IDBRequest;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    createIndex(name: string, keyPath: string | string[], optionalParameters?: IDBIndexParameters): IDBIndex;
    delete(key: IDBKeyRange | IDBValidKey): IDBRequest;
    deleteIndex(name: string): void;
    get(query: any): IDBRequest;
    getAll(query?: any, count?: number): IDBRequest;
    getAllKeys(query?: any, count?: number): IDBRequest;
    getKey(query: any): IDBRequest;
    index(name: string): IDBIndex;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
    put(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}

interface IDBOpenDBRequest extends IDBRequest {
    onblocked: (this: IDBOpenDBRequest, ev: Event) => any;
    onupgradeneeded: (this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

interface IDBRequest extends EventTarget {
    readonly error: DOMException;
    onerror: (this: IDBRequest, ev: Event) => any;
    onsuccess: (this: IDBRequest, ev: Event) => any;
    readonly readyState: IDBRequestReadyState;
    readonly result: any;
    source: IDBObjectStore | IDBIndex | IDBCursor;
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
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

interface IDBTransaction extends EventTarget {
    readonly db: IDBDatabase;
    readonly error: DOMException;
    readonly mode: IDBTransactionMode;
    readonly objectStoreNames: DOMStringList;
    onabort: (this: IDBTransaction, ev: Event) => any;
    oncomplete: (this: IDBTransaction, ev: Event) => any;
    onerror: (this: IDBTransaction, ev: Event) => any;
    abort(): void;
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

interface IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var IIRFilterNode: {
    prototype: IIRFilterNode;
    new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
};

interface ImageBitmap {
    readonly height: number;
    readonly width: number;
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

interface ImageBitmapRenderingContext {
    readonly canvas: HTMLCanvasElement;
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

interface ImageData {
    data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}

declare var ImageData: {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
};

interface InputDeviceInfo extends MediaDeviceInfo {
    getCapabilities(): MediaTrackCapabilities;
}

declare var InputDeviceInfo: {
    prototype: InputDeviceInfo;
    new(): InputDeviceInfo;
};

interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly isComposing: boolean;
}

declare var InputEvent: {
    prototype: InputEvent;
    new(type: string, eventInitDict?: InputEventInit): InputEvent;
};

interface IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}

declare var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};

interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly;
    readonly target: Element;
    readonly time: number;
}

declare var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
};

interface KeyboardEvent extends UIEvent {
    readonly altKey: boolean;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly isComposing: boolean;
    readonly key: string;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    getModifierState(keyArg: string): boolean;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
}

declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
};

interface Location {
    readonly ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string): void;
    reload(): void;
    replace(url: string): void;
}

declare var Location: {
    prototype: Location;
    new(): Location;
};

interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly groupId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
}

declare var MediaDeviceInfo: {
    prototype: MediaDeviceInfo;
    new(): MediaDeviceInfo;
};

interface MediaDevicesEventMap {
    "devicechange": Event;
}

interface MediaDevices extends EventTarget {
    ondevicechange: (this: MediaDevices, ev: Event) => any;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaDevices: {
    prototype: MediaDevices;
    new(): MediaDevices;
};

interface MediaElementAudioSourceNode extends AudioNode {
}

declare var MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    new(context: BaseAudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
};

interface MediaEncryptedEvent extends Event {
    readonly initData: ArrayBuffer | null;
    readonly initDataType: string;
}

declare var MediaEncryptedEvent: {
    prototype: MediaEncryptedEvent;
    new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
};

interface MediaError {
    readonly code: number;
    readonly message: string;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}

declare var MediaError: {
    prototype: MediaError;
    new(): MediaError;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
};

interface MediaKeyMessageEvent extends Event {
    readonly message: ArrayBuffer;
    readonly messageType: MediaKeyMessageType;
}

declare var MediaKeyMessageEvent: {
    prototype: MediaKeyMessageEvent;
    new(type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent;
};

interface MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}

declare var MediaKeys: {
    prototype: MediaKeys;
    new(): MediaKeys;
};

interface MediaKeySessionEventMap {
    "keystatuseschange": Event;
    "message": MediaKeyMessageEvent;
}

interface MediaKeySession extends EventTarget {
    readonly closed: Promise<void>;
    readonly expiration: number;
    readonly keyStatuses: MediaKeyStatusMap;
    onkeystatuseschange: (this: MediaKeySession, ev: Event) => any;
    onmessage: (this: MediaKeySession, ev: MediaKeyMessageEvent) => any;
    readonly sessionId: string;
    close(): Promise<void>;
    generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    remove(): Promise<void>;
    update(response: BufferSource): Promise<void>;
    addEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaKeySession: {
    prototype: MediaKeySession;
    new(): MediaKeySession;
};

interface MediaKeyStatusMap {
    readonly size: number;
    get(keyId: BufferSource): any;
    has(keyId: BufferSource): boolean;
}

declare var MediaKeyStatusMap: {
    prototype: MediaKeyStatusMap;
    new(): MediaKeyStatusMap;
};

interface MediaKeySystemAccess {
    readonly keySystem: string;
    createMediaKeys(): Promise<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;
}

declare var MediaKeySystemAccess: {
    prototype: MediaKeySystemAccess;
    new(): MediaKeySystemAccess;
};

interface MediaList {
    readonly length: number;
    mediaText: CSSOMString;
    appendMedium(medium: CSSOMString): void;
    deleteMedium(medium: CSSOMString): void;
    item(index: number): CSSOMString | null;
    [index: number]: CSSOMString;
}

declare var MediaList: {
    prototype: MediaList;
    new(): MediaList;
};

interface MediaQueryListEventMap {
    "change": Event;
}

interface MediaQueryList extends EventTarget {
    readonly matches: boolean;
    readonly media: string;
    onchange: (this: MediaQueryList, ev: Event) => any;
    addListener(listener: EventListener | null): void;
    removeListener(listener: EventListener | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaQueryList: {
    prototype: MediaQueryList;
    new(): MediaQueryList;
};

interface MediaQueryListEvent extends Event {
    readonly matches: boolean;
    readonly media: string;
}

declare var MediaQueryListEvent: {
    prototype: MediaQueryListEvent;
    new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
};

interface MediaSourceEventMap {
    "sourceclose": Event;
    "sourceended": Event;
    "sourceopen": Event;
}

interface MediaSource extends EventTarget {
    readonly activeSourceBuffers: SourceBufferList;
    duration: number;
    onsourceclose: (this: MediaSource, ev: Event) => any;
    onsourceended: (this: MediaSource, ev: Event) => any;
    onsourceopen: (this: MediaSource, ev: Event) => any;
    readonly readyState: ReadyState;
    readonly sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    clearLiveSeekableRange(): void;
    endOfStream(error?: EndOfStreamError): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
    setLiveSeekableRange(start: number, end: number): void;
    addEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaSource: {
    prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
};

interface MediaStreamEventMap {
    "addtrack": MediaStreamTrackEvent;
    "removetrack": MediaStreamTrackEvent;
}

interface MediaStream extends EventTarget {
    readonly active: boolean;
    readonly id: string;
    onaddtrack: (this: MediaStream, ev: MediaStreamTrackEvent) => any;
    onremovetrack: (this: MediaStream, ev: MediaStreamTrackEvent) => any;
    addTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): void;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaStream: {
    prototype: MediaStream;
    new(): MediaStream;
    new(stream: MediaStream): MediaStream;
    new(tracks: MediaStreamTrack[]): MediaStream;
};

interface MediaStreamAudioDestinationNode extends AudioNode {
    readonly stream: MediaStream;
}

declare var MediaStreamAudioDestinationNode: {
    prototype: MediaStreamAudioDestinationNode;
    new(context: BaseAudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
};

interface MediaStreamAudioSourceNode extends AudioNode {
}

declare var MediaStreamAudioSourceNode: {
    prototype: MediaStreamAudioSourceNode;
    new(context: BaseAudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
};

interface MediaStreamTrackEventMap {
    "ended": Event;
    "isolationchange": Event;
    "mute": Event;
    "overconstrained": OverconstrainedErrorEvent;
    "unmute": Event;
}

interface MediaStreamTrack extends EventTarget {
    enabled: boolean;
    readonly id: string;
    readonly isolated: boolean;
    readonly kind: string;
    readonly label: string;
    readonly muted: boolean;
    onended: (this: MediaStreamTrack, ev: Event) => any;
    onisolationchange: (this: MediaStreamTrack, ev: Event) => any;
    onmute: (this: MediaStreamTrack, ev: Event) => any;
    onoverconstrained: (this: MediaStreamTrack, ev: OverconstrainedErrorEvent) => any;
    onunmute: (this: MediaStreamTrack, ev: Event) => any;
    readonly readyState: MediaStreamTrackState;
    applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MediaStreamTrack: {
    prototype: MediaStreamTrack;
    new(): MediaStreamTrack;
};

interface MediaStreamTrackAudioSourceNode extends AudioNode {
}

declare var MediaStreamTrackAudioSourceNode: {
    prototype: MediaStreamTrackAudioSourceNode;
    new(context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode;
};

interface MediaStreamTrackEvent extends Event {
    readonly track: MediaStreamTrack;
}

declare var MediaStreamTrackEvent: {
    prototype: MediaStreamTrackEvent;
    new(type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent;
};

interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

interface MessageEvent extends Event {
    readonly data: any;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: ReadonlyArray<MessagePort>;
    readonly source: MessageEventSource | null;
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
};

interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface MessagePort extends EventTarget {
    onmessage: (this: MessagePort, ev: MessageEvent) => any;
    onmessageerror: (this: MessagePort, ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any, transfer?: any[]): void;
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

interface MimeType {
    readonly description: string;
    readonly enabledPlugin: Plugin;
    readonly suffixes: string;
    readonly type: string;
}

declare var MimeType: {
    prototype: MimeType;
    new(): MimeType;
};

interface MimeTypeArray {
    readonly length: number;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}

declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new(): MimeTypeArray;
};

interface MouseEvent extends UIEvent {
    readonly altKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly relatedTarget: EventTarget | null;
    readonly screenX: number;
    readonly screenY: number;
    readonly shiftKey: boolean;
    readonly x: number;
    readonly y: number;
    getModifierState(keyArg: string): boolean;
}

declare var MouseEvent: {
    prototype: MouseEvent;
    new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
};

interface MutationObserver {
    disconnect(): void;
    observe(target: Node, options?: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
};

interface MutationRecord {
    readonly addedNodes: NodeList;
    readonly attributeName: string | null;
    readonly attributeNamespace: string | null;
    readonly nextSibling: Node | null;
    readonly oldValue: string | null;
    readonly previousSibling: Node | null;
    readonly removedNodes: NodeList;
    readonly target: Node;
    readonly type: string;
}

declare var MutationRecord: {
    prototype: MutationRecord;
    new(): MutationRecord;
};

interface NamedNodeMap {
    readonly length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}

declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
};

interface NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

interface Navigator extends NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorContentUtils, NavigatorCookies, NavigatorPlugins, NavigatorConcurrentHardware, NavigatorUserMedia {
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly serviceWorker: ServiceWorkerContainer;
    readonly hardwareConcurrency: number;
    readonly languages: string[];
    getGamepads(): (Gamepad | null)[];
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    sendBeacon(url: string, data?: BodyInit): boolean;
    vibrate(pattern: number | number[]): boolean;
}

declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
};

interface Node extends EventTarget {
    readonly baseURI: string;
    readonly childNodes: NodeList;
    readonly firstChild: Node | null;
    readonly isConnected: boolean;
    readonly lastChild: Node | null;
    readonly nextSibling: Node | null;
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string | null;
    readonly ownerDocument: Document | null;
    readonly parentElement: HTMLElement | null;
    readonly parentNode: Node | null;
    readonly previousSibling: Node | null;
    textContent: string | null;
    appendChild<T extends Node>(newChild: T): T;
    cloneNode(deep?: boolean): Node;
    compareDocumentPosition(other: Node): number;
    contains(other: Node | null): boolean;
    getRootNode(options?: GetRootNodeOptions): Node;
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    normalize(): void;
    removeChild<T extends Node>(oldChild: T): T;
    replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
}

declare var Node: {
    prototype: Node;
    new(): Node;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
};

interface NodeIterator {
    readonly filter: NodeFilter | null;
    readonly pointerBeforeReferenceNode: boolean;
    readonly referenceNode: Node;
    readonly root: Node;
    readonly whatToShow: number;
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}

declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
};

interface NodeList {
    readonly length: number;
    item(index: number): Node | null;
    [index: number]: Node;
}

declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
};

interface NotificationEventMap {
    "click": Event;
    "error": Event;
}

interface Notification extends EventTarget {
    readonly actions: ReadonlyArray<NotificationAction>;
    readonly badge: string;
    readonly body: string;
    readonly data: any;
    readonly dir: NotificationDirection;
    readonly icon: string;
    readonly image: string;
    readonly lang: string;
    readonly maxActions: number;
    onclick: (this: Notification, ev: Event) => any;
    onerror: (this: Notification, ev: Event) => any;
    readonly permission: NotificationPermission;
    readonly renotify: boolean;
    readonly requireInteraction: boolean;
    readonly silent: boolean;
    readonly sound: string;
    readonly tag: string;
    readonly timestamp: number;
    readonly title: string;
    readonly vibrate: ReadonlyArray<number>;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};

interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};

interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;
}

interface OfflineAudioContext extends BaseAudioContext {
    readonly length: number;
    oncomplete: (this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var OfflineAudioContext: {
    prototype: OfflineAudioContext;
    new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
};

interface OffscreenCanvas extends EventTarget {
    height: number;
    width: number;
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    getContext(contextType: OffscreenRenderingContextType, ...arguments: any[]): OffscreenRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasPath {
    readonly canvas: OffscreenCanvas;
    commit(): void;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

interface OscillatorNode extends AudioScheduledSourceNode {
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var OscillatorNode: {
    prototype: OscillatorNode;
    new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
};

interface OverconstrainedErrorEvent extends Event {
    readonly error: any;
}

declare var OverconstrainedErrorEvent: {
    prototype: OverconstrainedErrorEvent;
    new(type: string, eventInitDict: OverconstrainedErrorEventInit): OverconstrainedErrorEvent;
};

interface PageTransitionEvent extends Event {
    readonly persisted: boolean;
}

declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
};

interface PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: DistanceModelType;
    maxDistance: number;
    readonly orientationX: AudioParam;
    readonly orientationY: AudioParam;
    readonly orientationZ: AudioParam;
    panningModel: PanningModelType;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    refDistance: number;
    rolloffFactor: number;
    setOrientation(x: number, y: number, z: number): void;
    setPosition(x: number, y: number, z: number): void;
}

declare var PannerNode: {
    prototype: PannerNode;
    new(context: BaseAudioContext, options?: PannerOptions): PannerNode;
};

interface Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrixInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(): Path2D;
    new(path: Path2D): Path2D;
    new(paths: Path2D[], fillRule?: CanvasFillRule): Path2D;
    new(d: string): Path2D;
};

interface PaymentAddress {
    readonly addressLine: ReadonlyArray<string>;
    readonly city: string;
    readonly country: string;
    readonly dependentLocality: string;
    readonly languageCode: string;
    readonly organization: string;
    readonly phone: string;
    readonly postalCode: string;
    readonly recipient: string;
    readonly region: string;
    readonly sortingCode: string;
}

declare var PaymentAddress: {
    prototype: PaymentAddress;
    new(): PaymentAddress;
};

interface PaymentRequestEventMap {
    "shippingaddresschange": Event;
    "shippingoptionchange": Event;
}

interface PaymentRequest extends EventTarget {
    readonly id: string;
    onshippingaddresschange: (this: PaymentRequest, ev: Event) => any;
    onshippingoptionchange: (this: PaymentRequest, ev: Event) => any;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    readonly shippingType: PaymentShippingType | null;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    show(): Promise<PaymentResponse>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var PaymentRequest: {
    prototype: PaymentRequest;
    new(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;
};

interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}

declare var PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};

interface PaymentResponse {
    readonly details: any;
    readonly methodName: string;
    readonly payerEmail: string | null;
    readonly payerName: string | null;
    readonly payerPhone: string | null;
    readonly requestId: string;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    complete(result?: PaymentComplete): Promise<void>;
}

declare var PaymentResponse: {
    prototype: PaymentResponse;
    new(): PaymentResponse;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

interface Performance extends EventTarget {
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: (this: Performance, ev: Event) => any;
    readonly timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string): void;
    measure(measureName: string, startMark?: string, endMark?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

interface PerformanceEntry {
    readonly duration: number;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: number;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

interface PerformanceMark extends PerformanceEntry {
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(): PerformanceMark;
};

interface PerformanceMeasure extends PerformanceEntry {
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

interface PerformanceNavigation {
    readonly redirectCount: number;
    readonly type: number;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
}

declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
};

interface PerformanceNavigationTiming extends PerformanceResourceTiming {
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly redirectCount: number;
    readonly type: NavigationType;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
}

declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
};

interface PerformanceObserver {
    disconnect(): void;
    observe(options: PerformanceObserverInit): void;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
};

interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

interface PerformanceResourceTiming extends PerformanceEntry {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly fetchStart: number;
    readonly initiatorType: string;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

interface PerformanceTiming {
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
    readonly navigationStart: number;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
}

declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
};

interface PeriodicWave {
}

declare var PeriodicWave: {
    prototype: PeriodicWave;
    new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
};

interface Plugin {
    readonly description: string;
    readonly filename: string;
    readonly length: number;
    readonly name: string;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}

declare var Plugin: {
    prototype: Plugin;
    new(): Plugin;
};

interface PluginArray {
    readonly length: number;
    item(index: number): Plugin | null;
    namedItem(name: string): Plugin | null;
    refresh(reload?: boolean): void;
    [index: number]: Plugin;
}

declare var PluginArray: {
    prototype: PluginArray;
    new(): PluginArray;
};

interface PointerEvent extends MouseEvent {
    readonly height: number;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: string;
    readonly pressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly width: number;
}

declare var PointerEvent: {
    prototype: PointerEvent;
    new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
};

interface PopStateEvent extends Event {
    readonly state: any;
}

declare var PopStateEvent: {
    prototype: PopStateEvent;
    new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};

interface ProcessingInstruction extends CharacterData, LinkStyle {
    readonly target: string;
}

declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};

interface ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

interface PushManager {
    readonly supportedContentEncodings: ReadonlyArray<string>;
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
};

interface PushSubscription {
    readonly endpoint: string;
    readonly expirationTime: number | null;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

interface PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null;
    readonly userVisibleOnly: boolean;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface RadioNodeList extends NodeList {
    value: string;
}

declare var RadioNodeList: {
    prototype: RadioNodeList;
    new(): RadioNodeList;
};

interface Range {
    readonly collapsed: boolean;
    readonly commonAncestorContainer: Node;
    readonly endContainer: Node;
    readonly endOffset: number;
    readonly startContainer: Node;
    readonly startOffset: number;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRect[];
    insertNode(node: Node): void;
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
}

declare var Range: {
    prototype: Range;
    new(): Range;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
};

interface ReadableStream {
    readonly locked: boolean;
    cancel(): Promise<void>;
    getReader(): ReadableStreamDefaultReader;
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(): ReadableStream;
};

interface ReadableStreamDefaultReader {
    readonly closed: boolean;
    cancel(): Promise<void>;
    read(): Promise<any>;
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new(stream: ReadableStream): ReadableStreamDefaultReader;
};

interface RelatedEvent extends Event {
    readonly relatedTarget: EventTarget | null;
}

declare var RelatedEvent: {
    prototype: RelatedEvent;
    new(type: string, eventInitDict?: RelatedEventInit): RelatedEvent;
};

interface Request extends Body {
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
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};

interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly trailer: Promise<Headers>;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};

interface RTCCertificate {
    readonly expires: number;
    getAlgorithm(): AlgorithmIdentifier;
    getFingerprints(): RTCDtlsFingerprint[];
}

declare var RTCCertificate: {
    prototype: RTCCertificate;
    new(): RTCCertificate;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "error": ErrorEvent;
    "message": MessageEvent;
    "open": Event;
}

interface RTCDataChannel extends EventTarget {
    binaryType: string;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    readonly id: number | null;
    readonly label: string;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly negotiated: boolean;
    onbufferedamountlow: (this: RTCDataChannel, ev: Event) => any;
    onclose: (this: RTCDataChannel, ev: Event) => any;
    onerror: (this: RTCDataChannel, ev: ErrorEvent) => any;
    onmessage: (this: RTCDataChannel, ev: MessageEvent) => any;
    onopen: (this: RTCDataChannel, ev: Event) => any;
    readonly ordered: boolean;
    readonly priority: RTCPriorityType;
    readonly protocol: string;
    readonly readyState: RTCDataChannelState;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}

declare var RTCDataChannelEvent: {
    prototype: RTCDataChannelEvent;
    new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};

interface RTCDtlsTransportEventMap {
    "statechange": Event;
}

interface RTCDtlsTransport {
    onstatechange: (this: RTCDtlsTransport, ev: Event) => any;
    readonly state: RTCDtlsTransportState;
    readonly transport: RTCIceTransport;
    getRemoteCertificates(): ArrayBuffer[];
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var RTCDtlsTransport: {
    prototype: RTCDtlsTransport;
    new(): RTCDtlsTransport;
};

interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}

interface RTCDTMFSender extends EventTarget {
    ontonechange: (this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var RTCDTMFSender: {
    prototype: RTCDTMFSender;
    new(): RTCDTMFSender;
};

interface RTCDTMFToneChangeEvent extends Event {
    readonly tone: string;
}

declare var RTCDTMFToneChangeEvent: {
    prototype: RTCDTMFToneChangeEvent;
    new(type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
};

interface RTCErrorEvent extends Event {
    readonly error: any;
}

declare var RTCErrorEvent: {
    prototype: RTCErrorEvent;
    new(type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
};

interface RTCIceCandidate {
    readonly candidate: string;
    readonly foundation: string | null;
    readonly ip: string | null;
    readonly port: number | null;
    readonly priority: number | null;
    readonly protocol: RTCIceProtocol | null;
    readonly relatedAddress: string | null;
    readonly relatedPort: number | null;
    readonly sdpMid: string | null;
    readonly sdpMLineIndex: number | null;
    readonly tcpType: RTCIceTcpCandidateType | null;
    readonly type: RTCIceCandidateType | null;
    readonly ufrag: string | null;
}

declare var RTCIceCandidate: {
    prototype: RTCIceCandidate;
    new(candidateInitDict: RTCIceCandidateInit): RTCIceCandidate;
};

interface RTCIceTransportEventMap {
    "gatheringstatechange": Event;
    "selectedcandidatepairchange": Event;
    "statechange": Event;
}

interface RTCIceTransport {
    readonly component: RTCIceComponent;
    readonly gatheringState: RTCIceGathererState;
    ongatheringstatechange: (this: RTCIceTransport, ev: Event) => any;
    onselectedcandidatepairchange: (this: RTCIceTransport, ev: Event) => any;
    onstatechange: (this: RTCIceTransport, ev: Event) => any;
    readonly role: RTCIceRole;
    readonly state: RTCIceTransportState;
    getLocalCandidates(): RTCIceCandidate[];
    getLocalParameters(): RTCIceParameters | null;
    getRemoteCandidates(): RTCIceCandidate[];
    getRemoteParameters(): RTCIceParameters | null;
    getSelectedCandidatePair(): RTCIceCandidatePair | null;
    addEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var RTCIceTransport: {
    prototype: RTCIceTransport;
    new(): RTCIceTransport;
};

interface RTCIdentityAssertion {
    idp: string;
    name: string;
}

declare var RTCIdentityAssertion: {
    prototype: RTCIdentityAssertion;
    new(idp: string, name: string): RTCIdentityAssertion;
};

interface RTCPeerConnectionEventMap {
    "connectionstatechange": Event;
    "datachannel": RTCDataChannelEvent;
    "fingerprintfailure": Event;
    "icecandidate": RTCPeerConnectionIceEvent;
    "icecandidateerror": RTCPeerConnectionIceErrorEvent;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "signalingstatechange": Event;
    "track": RTCTrackEvent;
}

interface RTCPeerConnection extends EventTarget {
    readonly canTrickleIceCandidates: boolean | null;
    readonly connectionState: RTCPeerConnectionState;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly iceGatheringState: RTCIceGatheringState;
    readonly idpErrorInfo: string | null;
    readonly idpLoginUrl: string | null;
    readonly localDescription: RTCSessionDescription | null;
    onconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
    ondatachannel: (this: RTCPeerConnection, ev: RTCDataChannelEvent) => any;
    onfingerprintfailure: (this: RTCPeerConnection, ev: Event) => any;
    onicecandidate: (this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any;
    onicecandidateerror: (this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any;
    oniceconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
    onicegatheringstatechange: (this: RTCPeerConnection, ev: Event) => any;
    onnegotiationneeded: (this: RTCPeerConnection, ev: Event) => any;
    onsignalingstatechange: (this: RTCPeerConnection, ev: Event) => any;
    ontrack: (this: RTCPeerConnection, ev: RTCTrackEvent) => any;
    readonly peerIdentity: Promise<RTCIdentityAssertion>;
    readonly pendingLocalDescription: RTCSessionDescription | null;
    readonly pendingRemoteDescription: RTCSessionDescription | null;
    readonly remoteDescription: RTCSessionDescription | null;
    readonly sctp: RTCSctpTransport | null;
    readonly signalingState: RTCSignalingState;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): Promise<void>;
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    close(): void;
    createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback, options?: RTCOfferOptions): Promise<void>;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    getConfiguration(): RTCConfiguration;
    getIdentityAssertion(): Promise<string>;
    getReceivers(): RTCRtpReceiver[];
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack): Promise<RTCStatsReport>;
    getTransceivers(): RTCRtpTransceiver[];
    removeTrack(sender: RTCRtpSender): void;
    setConfiguration(configuration: RTCConfiguration): void;
    setIdentityProvider(provider: string, options?: RTCIdentityProviderOptions): void;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setLocalDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var RTCPeerConnection: {
    prototype: RTCPeerConnection;
    new(configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
    getDefaultIceServers(): RTCIceServer[];
};

interface RTCPeerConnectionIceErrorEvent extends Event {
    readonly errorCode: number;
    readonly errorText: string;
    readonly hostCandidate: string;
    readonly url: string;
}

declare var RTCPeerConnectionIceErrorEvent: {
    prototype: RTCPeerConnectionIceErrorEvent;
    new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
};

interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
    readonly url: string | null;
}

declare var RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};

interface RTCRtpContributingSource {
    readonly audioLevel: number | null;
    readonly source: number;
    readonly timestamp: number;
}

declare var RTCRtpContributingSource: {
    prototype: RTCRtpContributingSource;
    new(): RTCRtpContributingSource;
};

interface RTCRtpReceiver {
    readonly rtcpTransport: RTCDtlsTransport | null;
    readonly track: MediaStreamTrack;
    readonly transport: RTCDtlsTransport | null;
    getContributingSources(): RTCRtpContributingSource[];
    getParameters(): RTCRtpParameters;
    getStats(): Promise<RTCStatsReport>;
    getSynchronizationSources(): RTCRtpSynchronizationSource[];
}

declare var RTCRtpReceiver: {
    prototype: RTCRtpReceiver;
    new(): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities;
};

interface RTCRtpSender {
    readonly dtmf: RTCDTMFSender | null;
    readonly rtcpTransport: RTCDtlsTransport | null;
    readonly track: MediaStreamTrack | null;
    readonly transport: RTCDtlsTransport | null;
    getParameters(): RTCRtpParameters;
    getStats(): Promise<RTCStatsReport>;
    replaceTrack(withTrack: MediaStreamTrack): Promise<void>;
    setParameters(parameters?: RTCRtpParameters): Promise<void>;
}

declare var RTCRtpSender: {
    prototype: RTCRtpSender;
    new(): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities;
};

interface RTCRtpSynchronizationSource {
    readonly audioLevel: number;
    readonly source: number;
    readonly timestamp: number;
    readonly voiceActivityFlag: boolean | null;
}

declare var RTCRtpSynchronizationSource: {
    prototype: RTCRtpSynchronizationSource;
    new(): RTCRtpSynchronizationSource;
};

interface RTCRtpTransceiver {
    readonly currentDirection: RTCRtpTransceiverDirection | null;
    readonly direction: RTCRtpTransceiverDirection;
    readonly mid: string | null;
    readonly receiver: RTCRtpReceiver;
    readonly sender: RTCRtpSender;
    readonly stopped: boolean;
    setCodecPreferences(codecs: RTCRtpCodecCapability[]): void;
    setDirection(direction: RTCRtpTransceiverDirection): void;
    stop(): void;
}

declare var RTCRtpTransceiver: {
    prototype: RTCRtpTransceiver;
    new(): RTCRtpTransceiver;
};

interface RTCSctpTransport {
    readonly maxMessageSize: number;
    readonly transport: RTCDtlsTransport;
}

declare var RTCSctpTransport: {
    prototype: RTCSctpTransport;
    new(): RTCSctpTransport;
};

interface RTCSessionDescription {
    readonly sdp: string;
    readonly type: RTCSdpType;
}

declare var RTCSessionDescription: {
    prototype: RTCSessionDescription;
    new(descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
};

interface RTCStatsReport {
}

declare var RTCStatsReport: {
    prototype: RTCStatsReport;
    new(): RTCStatsReport;
};

interface RTCTrackEvent extends Event {
    readonly receiver: RTCRtpReceiver;
    readonly streams: ReadonlyArray<MediaStream>;
    readonly track: MediaStreamTrack;
    readonly transceiver: RTCRtpTransceiver;
}

declare var RTCTrackEvent: {
    prototype: RTCTrackEvent;
    new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
};

interface Screen {
    readonly availHeight: number;
    readonly availWidth: number;
    readonly colorDepth: number;
    readonly height: number;
    readonly pixelDepth: number;
    readonly width: number;
}

declare var Screen: {
    prototype: Screen;
    new(): Screen;
};

interface ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;
}

interface ScriptProcessorNode extends AudioNode {
    readonly bufferSize: number;
    onaudioprocess: (this: ScriptProcessorNode, ev: AudioProcessingEvent) => any;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    new(): ScriptProcessorNode;
};

interface Selection {
    readonly anchorNode: Node | null;
    readonly anchorOffset: number;
    readonly focusNode: Node | null;
    readonly focusOffset: number;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;
    readonly type: string;
    addRange(range: Range): void;
    collapse(node: Node | null, offset?: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, allowPartialContainment?: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(node: Node, offset?: number): void;
    getRangeAt(index: number): Range;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(node: Node): void;
    setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void;
    setPosition(node: Node | null, offset?: number): void;
}

declare var Selection: {
    prototype: Selection;
    new(): Selection;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

interface ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: (this: ServiceWorker, ev: Event) => any;
    readonly scriptURL: string;
    readonly state: ServiceWorkerState;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
}

interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null;
    oncontrollerchange: (this: ServiceWorkerContainer, ev: Event) => any;
    onmessage: (this: ServiceWorkerContainer, ev: MessageEvent) => any;
    readonly ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string): Promise<any>;
    getRegistrations(): Promise<ServiceWorkerRegistration[]>;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

interface ServiceWorkerRegistration extends EventTarget {
    readonly active: ServiceWorker | null;
    readonly installing: ServiceWorker | null;
    readonly navigationPreload: NavigationPreloadManager;
    onupdatefound: (this: ServiceWorkerRegistration, ev: Event) => any;
    readonly pushManager: PushManager;
    readonly scope: string;
    readonly sync: SyncManager;
    readonly useCache: boolean;
    readonly waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface ShadowAnimation {
    readonly sourceAnimation: any;
}

declare var ShadowAnimation: {
    prototype: ShadowAnimation;
    new(source: any, newTarget: any): ShadowAnimation;
};

interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot {
    readonly host: Element;
    readonly mode: ShadowRootMode;
}

declare var ShadowRoot: {
    prototype: ShadowRoot;
    new(): ShadowRoot;
};

interface SharedWorker extends EventTarget, AbstractWorker {
    readonly port: MessagePort;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SharedWorker: {
    prototype: SharedWorker;
    new(scriptURL: string, options?: string | WorkerOptions): SharedWorker;
};

interface SourceBufferEventMap {
    "abort": Event;
    "error": Event;
    "update": Event;
    "updateend": Event;
    "updatestart": Event;
}

interface SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    readonly audioTracks: AudioTrackList;
    readonly buffered: TimeRanges;
    mode: AppendMode;
    onabort: (this: SourceBuffer, ev: Event) => any;
    onerror: (this: SourceBuffer, ev: Event) => any;
    onupdate: (this: SourceBuffer, ev: Event) => any;
    onupdateend: (this: SourceBuffer, ev: Event) => any;
    onupdatestart: (this: SourceBuffer, ev: Event) => any;
    readonly textTracks: TextTrackList;
    timestampOffset: number;
    readonly updating: boolean;
    readonly videoTracks: VideoTrackList;
    abort(): void;
    appendBuffer(data: BufferSource): void;
    remove(start: number, end: number): void;
    addEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SourceBuffer: {
    prototype: SourceBuffer;
    new(): SourceBuffer;
};

interface SourceBufferListEventMap {
    "addsourcebuffer": Event;
    "removesourcebuffer": Event;
}

interface SourceBufferList extends EventTarget {
    readonly length: number;
    onaddsourcebuffer: (this: SourceBufferList, ev: Event) => any;
    onremovesourcebuffer: (this: SourceBufferList, ev: Event) => any;
    addEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: SourceBuffer;
}

declare var SourceBufferList: {
    prototype: SourceBufferList;
    new(): SourceBufferList;
};

interface SpeechGrammar {
    src: string;
    weight: number;
}

declare var SpeechGrammar: {
    prototype: SpeechGrammar;
    new(): SpeechGrammar;
};

interface SpeechGrammarList {
    readonly length: number;
    addFromString(string: string, weight?: number): void;
    addFromURI(src: string, weight?: number): void;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
}

declare var SpeechGrammarList: {
    prototype: SpeechGrammarList;
    new(): SpeechGrammarList;
};

interface SpeechRecognitionEventMap {
    "audioend": Event;
    "audiostart": Event;
    "end": Event;
    "error": SpeechRecognitionError;
    "nomatch": SpeechRecognitionEvent;
    "result": SpeechRecognitionEvent;
    "soundend": Event;
    "soundstart": Event;
    "speechend": Event;
    "speechstart": Event;
    "start": Event;
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    grammars: SpeechGrammarList;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudioend: (this: SpeechRecognition, ev: Event) => any;
    onaudiostart: (this: SpeechRecognition, ev: Event) => any;
    onend: (this: SpeechRecognition, ev: Event) => any;
    onerror: (this: SpeechRecognition, ev: SpeechRecognitionError) => any;
    onnomatch: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onresult: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onsoundend: (this: SpeechRecognition, ev: Event) => any;
    onsoundstart: (this: SpeechRecognition, ev: Event) => any;
    onspeechend: (this: SpeechRecognition, ev: Event) => any;
    onspeechstart: (this: SpeechRecognition, ev: Event) => any;
    onstart: (this: SpeechRecognition, ev: Event) => any;
    serviceURI: string;
    abort(): void;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

interface SpeechRecognitionAlternative {
    readonly confidence: number;
    readonly transcript: string;
}

declare var SpeechRecognitionAlternative: {
    prototype: SpeechRecognitionAlternative;
    new(): SpeechRecognitionAlternative;
};

interface SpeechRecognitionError extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
}

declare var SpeechRecognitionError: {
    prototype: SpeechRecognitionError;
    new(): SpeechRecognitionError;
};

interface SpeechRecognitionEvent extends Event {
    readonly emma: Document;
    readonly interpretation: any;
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}

declare var SpeechRecognitionEvent: {
    prototype: SpeechRecognitionEvent;
    new(): SpeechRecognitionEvent;
};

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

declare var SpeechRecognitionResult: {
    prototype: SpeechRecognitionResult;
    new(): SpeechRecognitionResult;
};

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

declare var SpeechRecognitionResultList: {
    prototype: SpeechRecognitionResultList;
    new(): SpeechRecognitionResultList;
};

interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}

interface SpeechSynthesis extends EventTarget {
    onvoiceschanged: (this: SpeechSynthesis, ev: Event) => any;
    readonly paused: boolean;
    readonly pending: boolean;
    readonly speaking: boolean;
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SpeechSynthesis: {
    prototype: SpeechSynthesis;
    new(): SpeechSynthesis;
};

interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    readonly error: SpeechSynthesisErrorCode;
}

declare var SpeechSynthesisErrorEvent: {
    prototype: SpeechSynthesisErrorEvent;
    new(): SpeechSynthesisErrorEvent;
};

interface SpeechSynthesisEvent extends Event {
    readonly charIndex: number;
    readonly elapsedTime: number;
    readonly name: string;
    readonly utterance: SpeechSynthesisUtterance;
}

declare var SpeechSynthesisEvent: {
    prototype: SpeechSynthesisEvent;
    new(): SpeechSynthesisEvent;
};

interface SpeechSynthesisUtteranceEventMap {
    "boundary": Event;
    "end": Event;
    "error": Event;
    "mark": Event;
    "pause": Event;
    "resume": Event;
    "start": Event;
}

interface SpeechSynthesisUtterance extends EventTarget {
    lang: string;
    onboundary: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onend: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onerror: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onmark: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onpause: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onresume: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onstart: (this: SpeechSynthesisUtterance, ev: Event) => any;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    new(): SpeechSynthesisUtterance;
    new(text: string): SpeechSynthesisUtterance;
};

interface SpeechSynthesisVoice {
    readonly default: boolean;
    readonly lang: string;
    readonly localService: boolean;
    readonly name: string;
    readonly voiceURI: string;
}

declare var SpeechSynthesisVoice: {
    prototype: SpeechSynthesisVoice;
    new(): SpeechSynthesisVoice;
};

interface StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
}

declare var StereoPannerNode: {
    prototype: StereoPannerNode;
    new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
};

interface Storage {
    readonly length: number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}

declare var Storage: {
    prototype: Storage;
    new(): Storage;
};

interface StorageEvent extends Event {
    readonly url: string;
    key?: string;
    oldValue?: string;
    newValue?: string;
    storageArea?: Storage;
}

declare var StorageEvent: {
    prototype: StorageEvent;
    new (type: string, eventInitDict?: StorageEventInit): StorageEvent;
};

interface StyleSheet {
    disabled: boolean;
    readonly href: string | null;
    readonly media: MediaList;
    readonly ownerNode: Element | ProcessingInstruction | null;
    readonly parentStyleSheet: StyleSheet | null;
    readonly title: string | null;
    readonly type: CSSOMString;
}

declare var StyleSheet: {
    prototype: StyleSheet;
    new(): StyleSheet;
};

interface StyleSheetList {
    readonly length: number;
    item(index: number): StyleSheet | null;
    [index: number]: StyleSheet;
}

declare var StyleSheetList: {
    prototype: StyleSheetList;
    new(): StyleSheetList;
};

interface SubtleCrypto {
    decrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    deriveBits(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    deriveKey(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<any>;
    encrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<any>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    importKey(format: KeyFormat, keyData: BufferSource | JsonWebKey, algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    sign(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier, unwrappedKeyAlgorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    verify(algorithm: AlgorithmIdentifier, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<any>;
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier): Promise<any>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

interface SVGAElement extends SVGGraphicsElement, SVGURIReference, HTMLHyperlinkElementUtilsBase {
    readonly download: SVGAnimatedString;
    readonly hreflang: SVGAnimatedString;
    readonly rel: SVGAnimatedString;
    readonly relList: SVGAnimatedString;
    readonly target: SVGAnimatedString;
    readonly type: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGAElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGAElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGAElement: {
    prototype: SVGAElement;
    new(): SVGAElement;
};

interface SVGAngle {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
}

declare var SVGAngle: {
    prototype: SVGAngle;
    new(): SVGAngle;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
};

interface SVGAnimatedAngle {
    readonly animVal: SVGAngle;
    readonly baseVal: SVGAngle;
}

declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
};

interface SVGAnimatedBoolean {
    readonly animVal: boolean;
    baseVal: boolean;
}

declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
};

interface SVGAnimatedEnumeration {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
};

interface SVGAnimatedInteger {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
};

interface SVGAnimatedLength {
    readonly animVal: SVGLength;
    readonly baseVal: SVGLength;
}

declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
};

interface SVGAnimatedLengthList {
    readonly animVal: SVGLengthList;
    readonly baseVal: SVGLengthList;
}

declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
};

interface SVGAnimatedNumber {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
};

interface SVGAnimatedNumberList {
    readonly animVal: SVGNumberList;
    readonly baseVal: SVGNumberList;
}

declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
};

interface SVGAnimatedPreserveAspectRatio {
    readonly animVal: SVGPreserveAspectRatio;
    readonly baseVal: SVGPreserveAspectRatio;
}

declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
};

interface SVGAnimatedRect {
    readonly animVal: DOMRectReadOnly;
    readonly baseVal: DOMRect;
}

declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
};

interface SVGAnimatedString {
    readonly animVal: string;
    baseVal: string;
}

declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
};

interface SVGAnimatedTransformList {
    readonly animVal: SVGTransformList;
    readonly baseVal: SVGTransformList;
}

declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
};

interface SVGCircleElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGCircleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
};

interface SVGClipPathElement extends SVGElement, SVGUnitTypes {
    readonly clipPathUnits: SVGAnimatedEnumeration;
    readonly transform: SVGAnimatedTransformList;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGClipPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
};

interface SVGComponentTransferFunctionElement extends SVGElement {
    readonly amplitude: SVGAnimatedNumber;
    readonly exponent: SVGAnimatedNumber;
    readonly intercept: SVGAnimatedNumber;
    readonly offset: SVGAnimatedNumber;
    readonly slope: SVGAnimatedNumber;
    readonly tableValues: SVGAnimatedNumberList;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
};

interface SVGCursorElement extends SVGElement, SVGURIReference {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGCursorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGCursorElement: {
    prototype: SVGCursorElement;
    new(): SVGCursorElement;
};

interface SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGDefsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
};

interface SVGDescElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGDescElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGDescElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGDescElement: {
    prototype: SVGDescElement;
    new(): SVGDescElement;
};

interface SVGElement extends Element, GlobalEventHandlers, SVGElementInstance, ElementCSSInlineStyle {
    className: any;
    readonly dataset: DOMStringMap;
    readonly ownerSVGElement: SVGSVGElement | null;
    tabIndex: number;
    readonly viewportElement: SVGElement | null;
    blur(): void;
    focus(): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGElement: {
    prototype: SVGElement;
    new(): SVGElement;
};

interface SVGEllipseElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGEllipseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
};

interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly mode: SVGAnimatedEnumeration;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
};

interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly type: SVGAnimatedEnumeration;
    readonly values: SVGAnimatedNumberList;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
};

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
};

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly k1: SVGAnimatedNumber;
    readonly k2: SVGAnimatedNumber;
    readonly k3: SVGAnimatedNumber;
    readonly k4: SVGAnimatedNumber;
    readonly operator: SVGAnimatedEnumeration;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
};

interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly bias: SVGAnimatedNumber;
    readonly divisor: SVGAnimatedNumber;
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly in1: SVGAnimatedString;
    readonly kernelMatrix: SVGAnimatedNumberList;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly orderX: SVGAnimatedInteger;
    readonly orderY: SVGAnimatedInteger;
    readonly targetX: SVGAnimatedInteger;
    readonly targetY: SVGAnimatedInteger;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
};

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly diffuseConstant: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
};

interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly scale: SVGAnimatedNumber;
    readonly xChannelSelector: SVGAnimatedEnumeration;
    readonly yChannelSelector: SVGAnimatedEnumeration;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
};

interface SVGFEDistantLightElement extends SVGElement {
    readonly azimuth: SVGAnimatedNumber;
    readonly elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
};

interface SVGFEDropShadowElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEDropShadowElement: {
    prototype: SVGFEDropShadowElement;
    new(): SVGFEDropShadowElement;
};

interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
};

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
};

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
};

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
};

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
};

interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
};

interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    readonly crossOrigin: SVGAnimatedString;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
};

interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
};

interface SVGFEMergeNodeElement extends SVGElement {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
};

interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly radiusX: SVGAnimatedNumber;
    readonly radiusY: SVGAnimatedNumber;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
};

interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
};

interface SVGFEPointLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
};

interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly specularConstant: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
};

interface SVGFESpotLightElement extends SVGElement {
    readonly limitingConeAngle: SVGAnimatedNumber;
    readonly pointsAtX: SVGAnimatedNumber;
    readonly pointsAtY: SVGAnimatedNumber;
    readonly pointsAtZ: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
};

interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFETileElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
};

interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly baseFrequencyX: SVGAnimatedNumber;
    readonly baseFrequencyY: SVGAnimatedNumber;
    readonly numOctaves: SVGAnimatedInteger;
    readonly seed: SVGAnimatedNumber;
    readonly stitchTiles: SVGAnimatedEnumeration;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
};

interface SVGFilterElement extends SVGElement, SVGURIReference, SVGUnitTypes {
    readonly filterUnits: SVGAnimatedEnumeration;
    readonly height: SVGAnimatedLength;
    readonly primitiveUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFilterElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
};

interface SVGForeignObjectElement extends SVGGraphicsElement {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    new(): SVGForeignObjectElement;
};

interface SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGGElement: {
    prototype: SVGGElement;
    new(): SVGGElement;
};

interface SVGGeometryElement extends SVGGraphicsElement {
    readonly pathLength: SVGAnimatedNumber;
    getPointAtLength(distance: number): DOMPoint;
    getTotalLength(): number;
    isPointInFill(point: DOMPoint): boolean;
    isPointInStroke(point: DOMPoint): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGeometryElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGGeometryElement: {
    prototype: SVGGeometryElement;
    new(): SVGGeometryElement;
};

interface SVGGradientElement extends SVGElement, SVGURIReference {
    readonly gradientTransform: SVGAnimatedTransformList;
    readonly gradientUnits: SVGAnimatedEnumeration;
    readonly spreadMethod: SVGAnimatedEnumeration;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
};

interface SVGGraphicsElement extends SVGElement, SVGTests {
    readonly transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGGraphicsElement: {
    prototype: SVGGraphicsElement;
    new(): SVGGraphicsElement;
};

interface SVGHatchElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGHatchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGHatchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGHatchElement: {
    prototype: SVGHatchElement;
    new(): SVGHatchElement;
};

interface SVGHatchpathElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGHatchpathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGHatchpathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGHatchpathElement: {
    prototype: SVGHatchpathElement;
    new(): SVGHatchpathElement;
};

interface SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    crossOrigin: string | null;
    readonly height: SVGAnimatedLength;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGImageElement: {
    prototype: SVGImageElement;
    new(): SVGImageElement;
};

interface SVGLength {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
}

declare var SVGLength: {
    prototype: SVGLength;
    new(): SVGLength;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
};

interface SVGLengthList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    [index: number]: SVGLength;
}

declare var SVGLengthList: {
    prototype: SVGLengthList;
    new(): SVGLengthList;
};

interface SVGLinearGradientElement extends SVGGradientElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
};

interface SVGLineElement extends SVGGeometryElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGLineElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGLineElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGLineElement: {
    prototype: SVGLineElement;
    new(): SVGLineElement;
};

interface SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    readonly markerHeight: SVGAnimatedLength;
    readonly markerUnits: SVGAnimatedEnumeration;
    readonly markerWidth: SVGAnimatedLength;
    orient: string;
    readonly orientAngle: SVGAnimatedAngle;
    readonly orientType: SVGAnimatedEnumeration;
    readonly refX: SVGAnimatedLength;
    readonly refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMarkerElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
};

interface SVGMaskElement extends SVGElement, SVGUnitTypes {
    readonly height: SVGAnimatedLength;
    readonly maskContentUnits: SVGAnimatedEnumeration;
    readonly maskUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMaskElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
};

interface SVGMeshElement extends SVGGeometryElement, SVGURIReference {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMeshElement: {
    prototype: SVGMeshElement;
    new(): SVGMeshElement;
};

interface SVGMeshGradientElement extends SVGGradientElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMeshGradientElement: {
    prototype: SVGMeshGradientElement;
    new(): SVGMeshGradientElement;
};

interface SVGMeshpatchElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshpatchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshpatchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMeshpatchElement: {
    prototype: SVGMeshpatchElement;
    new(): SVGMeshpatchElement;
};

interface SVGMeshrowElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshrowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshrowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMeshrowElement: {
    prototype: SVGMeshrowElement;
    new(): SVGMeshrowElement;
};

interface SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMetadataElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
};

interface SVGNumber {
    value: number;
}

declare var SVGNumber: {
    prototype: SVGNumber;
    new(): SVGNumber;
};

interface SVGNumberList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    [index: number]: SVGNumber;
}

declare var SVGNumberList: {
    prototype: SVGNumberList;
    new(): SVGNumberList;
};

interface SVGPathElement extends SVGGeometryElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGPathElement: {
    prototype: SVGPathElement;
    new(): SVGPathElement;
};

interface SVGPatternElement extends SVGElement, SVGFitToViewBox, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly patternContentUnits: SVGAnimatedEnumeration;
    readonly patternTransform: SVGAnimatedTransformList;
    readonly patternUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPatternElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
};

interface SVGPointList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: DOMPoint): DOMPoint;
    clear(): void;
    getItem(index: number): DOMPoint;
    initialize(newItem: DOMPoint): DOMPoint;
    insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
    removeItem(index: number): DOMPoint;
    replaceItem(newItem: DOMPoint, index: number): DOMPoint;
    [index: number]: DOMPoint;
}

declare var SVGPointList: {
    prototype: SVGPointList;
    new(): SVGPointList;
};

interface SVGPolygonElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPolygonElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
};

interface SVGPolylineElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPolylineElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
};

interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
};

interface SVGRadialGradientElement extends SVGGradientElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly fr: SVGAnimatedLength;
    readonly fx: SVGAnimatedLength;
    readonly fy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
};

interface SVGRectElement extends SVGGeometryElement {
    readonly height: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGRectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGRectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGRectElement: {
    prototype: SVGRectElement;
    new(): SVGRectElement;
};

interface SVGScriptElement extends SVGElement, SVGURIReference {
    crossOrigin: string | null;
    type: string;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGScriptElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
};

interface SVGSolidcolorElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSolidcolorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSolidcolorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGSolidcolorElement: {
    prototype: SVGSolidcolorElement;
    new(): SVGSolidcolorElement;
};

interface SVGStopElement extends SVGElement {
    readonly offset: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGStopElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGStopElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGStopElement: {
    prototype: SVGStopElement;
    new(): SVGStopElement;
};

interface SVGStringList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
    [index: number]: string;
}

declare var SVGStringList: {
    prototype: SVGStringList;
    new(): SVGStringList;
};

interface SVGStyleElement extends SVGElement, LinkStyle {
    media: string;
    title: string;
    type: string;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGStyleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
};

interface SVGSVGElement extends SVGGraphicsElement, SVGFitToViewBox, SVGZoomAndPan, WindowEventHandlers {
    currentScale: number;
    readonly currentTranslate: DOMPointReadOnly;
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
    checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): DOMMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): DOMPoint;
    createSVGRect(): DOMRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
    deselectAll(): void;
    forceRedraw(): void;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    suspendRedraw(maxWaitMilliseconds: number): number;
    unsuspendRedraw(suspendHandleID: number): void;
    unsuspendRedrawAll(): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSVGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: SVGSVGElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
};

interface SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSwitchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
};

interface SVGSymbolElement extends SVGGraphicsElement, SVGFitToViewBox {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSymbolElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
};

interface SVGTextContentElement extends SVGGraphicsElement {
    readonly lengthAdjust: SVGAnimatedEnumeration;
    readonly textLength: SVGAnimatedLength;
    getCharNumAtPosition(point: DOMPoint): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): DOMPoint;
    getExtentOfChar(charnum: number): DOMRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): DOMPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextContentElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
};

interface SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTextElement: {
    prototype: SVGTextElement;
    new(): SVGTextElement;
};

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    readonly method: SVGAnimatedEnumeration;
    readonly spacing: SVGAnimatedEnumeration;
    readonly startOffset: SVGAnimatedLength;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
};

interface SVGTextPositioningElement extends SVGTextContentElement {
    readonly dx: SVGAnimatedLengthList;
    readonly dy: SVGAnimatedLengthList;
    readonly rotate: SVGAnimatedNumberList;
    readonly x: SVGAnimatedLengthList;
    readonly y: SVGAnimatedLengthList;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
};

interface SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTitleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
};

interface SVGTransform {
    readonly angle: number;
    readonly matrix: DOMMatrix;
    readonly type: number;
    setMatrix(matrix: DOMMatrixReadOnly): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
}

declare var SVGTransform: {
    prototype: SVGTransform;
    new(): SVGTransform;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
};

interface SVGTransformList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform | null;
    createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    [index: number]: SVGTransform;
}

declare var SVGTransformList: {
    prototype: SVGTransformList;
    new(): SVGTransformList;
};

interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTSpanElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
};

interface SVGUnitTypes {
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new(): SVGUnitTypes;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
};

interface SVGUnknownElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGUnknownElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGUnknownElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGUnknownElement: {
    prototype: SVGUnknownElement;
    new(): SVGUnknownElement;
};

interface SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    readonly animatedInstanceRoot: SVGElement | null;
    readonly height: SVGAnimatedLength;
    readonly instanceRoot: SVGElement | null;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGUseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGUseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGUseElement: {
    prototype: SVGUseElement;
    new(): SVGUseElement;
};

interface SVGUseElementShadowRoot extends ShadowRoot {
}

declare var SVGUseElementShadowRoot: {
    prototype: SVGUseElementShadowRoot;
    new(): SVGUseElementShadowRoot;
};

interface SVGViewElement extends SVGElement, SVGFitToViewBox, SVGZoomAndPan {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGViewElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGViewElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var SVGViewElement: {
    prototype: SVGViewElement;
    new(): SVGViewElement;
};

interface SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new(): SyncManager;
};

interface Text extends CharacterData, Slotable, GeometryUtils {
    readonly wholeText: string;
    readonly assignedSlot: HTMLSlotElement | null;
    splitText(offset: number): Text;
}

declare var Text: {
    prototype: Text;
    new(data?: string): Text;
};

interface TextMetrics {
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly alphabeticBaseline: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly hangingBaseline: number;
    readonly ideographicBaseline: number;
    readonly width: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
};

interface TextTrackEventMap {
    "cuechange": Event;
}

interface TextTrack extends EventTarget {
    readonly activeCues: TextTrackCueList | null;
    readonly cues: TextTrackCueList | null;
    readonly id: string;
    readonly inBandMetadataTrackDispatchType: string;
    readonly kind: TextTrackKind;
    readonly label: string;
    readonly language: string;
    mode: TextTrackMode;
    oncuechange: (this: TextTrack, ev: Event) => any;
    readonly sourceBuffer: SourceBuffer | null;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var TextTrack: {
    prototype: TextTrack;
    new(): TextTrack;
};

interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}

interface TextTrackCue extends EventTarget {
    endTime: number;
    id: string;
    onenter: (this: TextTrackCue, ev: Event) => any;
    onexit: (this: TextTrackCue, ev: Event) => any;
    pauseOnExit: boolean;
    startTime: number;
    readonly track: TextTrack | null;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var TextTrackCue: {
    prototype: TextTrackCue;
    new(): TextTrackCue;
};

interface TextTrackCueList {
    readonly length: number;
    getCueById(id: string): TextTrackCue | null;
    [index: number]: TextTrackCue;
}

declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
};

interface TextTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

interface TextTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: (this: TextTrackList, ev: TrackEvent) => any;
    onchange: (this: TextTrackList, ev: Event) => any;
    onremovetrack: (this: TextTrackList, ev: TrackEvent) => any;
    getTrackById(id: string): TextTrack | null;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: TextTrack;
}

declare var TextTrackList: {
    prototype: TextTrackList;
    new(): TextTrackList;
};

interface TimeRanges {
    readonly length: number;
    end(index: number): number;
    start(index: number): number;
}

declare var TimeRanges: {
    prototype: TimeRanges;
    new(): TimeRanges;
};

interface Touch {
    readonly altitudeAngle: number;
    readonly azimuthAngle: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly force: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
    readonly touchType: TouchType;
}

declare var Touch: {
    prototype: Touch;
    new(touchInitDict: TouchInit): Touch;
};

interface TouchEvent extends UIEvent {
    readonly altKey: boolean;
    readonly changedTouches: TouchList;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly targetTouches: TouchList;
    readonly touches: TouchList;
}

declare var TouchEvent: {
    prototype: TouchEvent;
    new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};

interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}

declare var TouchList: {
    prototype: TouchList;
    new(): TouchList;
};

interface TrackEvent extends Event {
    readonly track: VideoTrack | AudioTrack | TextTrack | null;
}

declare var TrackEvent: {
    prototype: TrackEvent;
    new(type: string, eventInitDict?: TrackEventInit): TrackEvent;
};

interface TransitionEvent extends Event {
    readonly elapsedTime: number;
    readonly propertyName: CSSOMString;
    readonly pseudoElement: CSSOMString;
}

declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(type: CSSOMString, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};

interface TreeWalker {
    currentNode: Node;
    readonly filter: NodeFilter | null;
    readonly root: Node;
    readonly whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}

declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
};

interface UIEvent extends Event {
    readonly detail: number;
    readonly view: Window | null;
}

declare var UIEvent: {
    prototype: UIEvent;
    new(type: string, eventInitDict?: UIEventInit): UIEvent;
};

interface URL {
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
    readonly searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string, base?: string): URL;
    createObjectURL(blob: Blob): string;
    createObjectURL(mediaSource: MediaSource): string;
    revokeObjectURL(url: string): void;
};

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
    sort(): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | { [key: string]: string } | string): URLSearchParams;
};

interface ValidityState {
    readonly badInput: boolean;
    readonly customError: boolean;
    readonly patternMismatch: boolean;
    readonly rangeOverflow: boolean;
    readonly rangeUnderflow: boolean;
    readonly stepMismatch: boolean;
    readonly tooLong: boolean;
    readonly tooShort: boolean;
    readonly typeMismatch: boolean;
    readonly valid: boolean;
    readonly valueMissing: boolean;
}

declare var ValidityState: {
    prototype: ValidityState;
    new(): ValidityState;
};

interface VideoPlaybackQuality {
    readonly corruptedVideoFrames: number;
    readonly creationTime: number;
    readonly droppedVideoFrames: number;
    readonly totalVideoFrames: number;
}

declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
};

interface VideoTrack {
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly language: string;
    selected: boolean;
    readonly sourceBuffer: SourceBuffer | null;
}

declare var VideoTrack: {
    prototype: VideoTrack;
    new(): VideoTrack;
};

interface VideoTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

interface VideoTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: (this: VideoTrackList, ev: TrackEvent) => any;
    onchange: (this: VideoTrackList, ev: Event) => any;
    onremovetrack: (this: VideoTrackList, ev: TrackEvent) => any;
    readonly selectedIndex: number;
    getTrackById(id: string): VideoTrack | null;
    addEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    [index: number]: VideoTrack;
}

declare var VideoTrackList: {
    prototype: VideoTrackList;
    new(): VideoTrackList;
};

interface WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}

declare var WaveShaperNode: {
    prototype: WaveShaperNode;
    new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
};

interface WebGLActiveInfo {
    readonly name: string;
    readonly size: GLint;
    readonly type: GLenum;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

interface WebGLBuffer extends WebGLObject {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

interface WebGLFramebuffer extends WebGLObject {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

interface WebGLObject {
}

declare var WebGLObject: {
    prototype: WebGLObject;
    new(): WebGLObject;
};

interface WebGLProgram extends WebGLObject {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};

interface WebGLRenderbuffer extends WebGLObject {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

interface WebGLRenderingContext extends WebGLRenderingContextBase {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
};

interface WebGLShader extends WebGLObject {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
};

interface WebGLShaderPrecisionFormat {
    readonly precision: GLint;
    readonly rangeMax: GLint;
    readonly rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

interface WebGLTexture extends WebGLObject {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};

interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface WebSocket extends EventTarget {
    binaryType: BinaryType;
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
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string | string[]): WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

interface WheelEvent extends MouseEvent {
    readonly deltaMode: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
}

declare var WheelEvent: {
    prototype: WheelEvent;
    new(type: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
};

interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
}

interface Window extends EventTarget, GlobalEventHandlers, WindowEventHandlers, WindowOrWorkerGlobalScope, WindowSessionStorage, WindowLocalStorage, GlobalPerformance, GlobalCrypto, SpeechSynthesisGetter {
    readonly applicationCache: ApplicationCache;
    readonly audioWorklet: Worklet;
    readonly closed: boolean;
    readonly customElements: CustomElementRegistry;
    readonly devicePixelRatio: number;
    readonly document: Document;
    readonly external: External;
    readonly frameElement: Element | null;
    readonly frames: Window;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly length: number;
    readonly location: Location;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    name: string;
    readonly navigator: Navigator;
    ondevicemotion: (this: Window, ev: DeviceMotionEvent) => any;
    ondeviceorientation: (this: Window, ev: DeviceOrientationEvent) => any;
    opener: any;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: Window | null;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollbars: BarProp;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly self: Window;
    status: string;
    readonly statusbar: BarProp;
    readonly toolbar: BarProp;
    readonly top: Window | null;
    readonly window: Window;
    URLSearchParams: typeof URLSearchParams;
    Blob: typeof Blob;
    alert(message?: any): void;
    alert(message?: any): void;
    blur(): void;
    cancelAnimationFrame(handle: number): void;
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: CSSOMString): CSSStyleDeclaration;
    getSelection(): Selection | null;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    postMessage(message: any, targetOrigin: string, transfer?: any[]): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    releaseEvents(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    resizeBy(x: number, y: number): void;
    resizeTo(x: number, y: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    stop(): void;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var Window: {
    prototype: Window;
    new(): Window;
};

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface Worker extends EventTarget, AbstractWorker {
    onmessage: (this: Worker, ev: MessageEvent) => any;
    onmessageerror: (this: Worker, ev: MessageEvent) => any;
    postMessage(message: any, transfer?: any[]): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string, options?: WorkerOptions): Worker;
};

interface Worklet {
    addModule(moduleURL: string, options?: WorkletOptions): Promise<void>;
}

declare var Worklet: {
    prototype: Worklet;
    new(): Worklet;
};

interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    timeout: number;
    readonly upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    msCaching?: string;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string, password?: string): void;
    overrideMimeType(mime: string): void;
    send(data?: Document): void;
    send(data?: string): void;
    send(data?: any): void;
    setRequestHeader(name: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "loadend": Event;
    "loadstart": Event;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: (this: XMLHttpRequest, ev: Event) => any;
    onerror: (this: XMLHttpRequest, ev: ErrorEvent) => any;
    onload: (this: XMLHttpRequest, ev: Event) => any;
    onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onloadstart: (this: XMLHttpRequest, ev: Event) => any;
    onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

interface XMLSerializer {
    serializeToString(root: Node): string;
}

declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
};

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    onerror: (this: AbstractWorker, ev: ErrorEvent) => any;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

interface Body {
    readonly body: ReadableStream | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
    formData(): Promise<FormData>;
}

interface CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: string;
}

interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    resetClip(): void;
    stroke(): void;
    stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
    filter: string;
}

interface CanvasImageData {
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}

interface CanvasPathDrawingStyles {
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}

interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasShadowStyles {
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
}

interface CanvasState {
    restore(): void;
    save(): void;
}

interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

interface CanvasTextDrawingStyles {
    direction: CanvasDirection;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
}

interface CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrixInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}

interface CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
    scrollPathIntoView(): void;
    scrollPathIntoView(path: Path2D): void;
}

interface ChildNode {
    after(...nodes: (Node | string)[]): void;
    before(...nodes: (Node | string)[]): void;
    remove(): void;
    replaceWith(...nodes: (Node | string)[]): void;
}

interface ConstrainablePatternEventMap {
    "overconstrained": OverconstrainedErrorEvent;
}

interface ConstrainablePattern {
    onoverconstrained: (this: ConstrainablePattern, ev: OverconstrainedErrorEvent) => any;
    applyConstraints(constraints?: Constraints): Promise<void>;
    getCapabilities(): Capabilities;
    getConstraints(): Constraints;
    getSettings(): Settings;
    addEventListener<K extends keyof ConstrainablePatternEventMap>(type: K, listener: (this: ConstrainablePattern, ev: ConstrainablePatternEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

interface CSSPseudoElement extends GeometryUtils {
}

interface DeviceAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface DeviceRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

interface DocumentAndElementEventHandlersEventMap {
    "copy": Event;
    "cut": Event;
    "paste": Event;
}

interface DocumentAndElementEventHandlers {
    oncopy: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    oncut: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    onpaste: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface DocumentOrShadowRoot {
    readonly fullscreenElement: Element | null;
}

interface ElementContentEditable {
    contentEditable: string;
    readonly isContentEditable: boolean;
}

interface ElementCSSInlineStyle {
    readonly style: CSSStyleDeclaration;
}

interface EXT_frag_depth {
}

interface EXT_texture_filter_anisotropic {
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

interface External {
    AddSearchProvider(): void;
    IsSearchProviderInstalled(): void;
}

interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}

interface GeometryUtils {
    convertPointFromNode(point: DOMPointInit, from: GeometryNode, options?: ConvertCoordinateOptions): DOMPoint;
    convertQuadFromNode(quad: DOMQuadInit, from: GeometryNode, options?: ConvertCoordinateOptions): DOMQuad;
    convertRectFromNode(rect: DOMRectReadOnly, from: GeometryNode, options?: ConvertCoordinateOptions): DOMQuad;
    getBoxQuads(options?: BoxQuadOptions): DOMQuad[];
}

interface GetSVGDocument {
    getSVGDocument(): Document;
}

interface GlobalCrypto {
    readonly crypto: Crypto;
}

interface GlobalEventHandlersEventMap {
    "abort": Event;
    "animationcancel": AnimationEvent;
    "animationend": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationstart": AnimationEvent;
    "auxclick": MouseEvent;
    "blur": Event;
    "cancel": Event;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "contextmenu": MouseEvent;
    "cuechange": Event;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragexit": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": Event;
    "focus": Event;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadend": Event;
    "loadstart": Event;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "progress": Event;
    "ratechange": Event;
    "reset": Event;
    "resize": Event;
    "scroll": Event;
    "seeked": Event;
    "seeking": Event;
    "select": Event;
    "selectionchange": Event;
    "selectstart": Event;
    "show": RelatedEvent;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "transitioncancel": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "volumechange": Event;
    "waiting": Event;
    "wheel": WheelEvent;
}

interface GlobalEventHandlers {
    onabort: (this: GlobalEventHandlers, ev: Event) => any;
    onanimationcancel: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationend: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationiteration: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationstart: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onauxclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onblur: (this: GlobalEventHandlers, ev: Event) => any;
    oncancel: (this: GlobalEventHandlers, ev: Event) => any;
    oncanplay: (this: GlobalEventHandlers, ev: Event) => any;
    oncanplaythrough: (this: GlobalEventHandlers, ev: Event) => any;
    onchange: (this: GlobalEventHandlers, ev: Event) => any;
    onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onclose: (this: GlobalEventHandlers, ev: Event) => any;
    oncontextmenu: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    oncuechange: (this: GlobalEventHandlers, ev: Event) => any;
    ondblclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    ondrag: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragend: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragenter: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragexit: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragleave: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragover: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragstart: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondrop: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondurationchange: (this: GlobalEventHandlers, ev: Event) => any;
    onemptied: (this: GlobalEventHandlers, ev: Event) => any;
    onended: (this: GlobalEventHandlers, ev: Event) => any;
    onerror: OnErrorEventHandler;
    onfocus: (this: GlobalEventHandlers, ev: Event) => any;
    oninput: (this: GlobalEventHandlers, ev: Event) => any;
    oninvalid: (this: GlobalEventHandlers, ev: Event) => any;
    onkeydown: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onkeypress: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onkeyup: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onload: (this: GlobalEventHandlers, ev: Event) => any;
    onloadeddata: (this: GlobalEventHandlers, ev: Event) => any;
    onloadedmetadata: (this: GlobalEventHandlers, ev: Event) => any;
    onloadend: (this: GlobalEventHandlers, ev: Event) => any;
    onloadstart: (this: GlobalEventHandlers, ev: Event) => any;
    onmousedown: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseenter: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseleave: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmousemove: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseout: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseover: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseup: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onpause: (this: GlobalEventHandlers, ev: Event) => any;
    onplay: (this: GlobalEventHandlers, ev: Event) => any;
    onplaying: (this: GlobalEventHandlers, ev: Event) => any;
    onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    onprogress: (this: GlobalEventHandlers, ev: Event) => any;
    onratechange: (this: GlobalEventHandlers, ev: Event) => any;
    onreset: (this: GlobalEventHandlers, ev: Event) => any;
    onresize: (this: GlobalEventHandlers, ev: Event) => any;
    onscroll: (this: GlobalEventHandlers, ev: Event) => any;
    onseeked: (this: GlobalEventHandlers, ev: Event) => any;
    onseeking: (this: GlobalEventHandlers, ev: Event) => any;
    onselect: (this: GlobalEventHandlers, ev: Event) => any;
    onselectionchange: (this: GlobalEventHandlers, ev: Event) => any;
    onselectstart: (this: GlobalEventHandlers, ev: Event) => any;
    onshow: (this: GlobalEventHandlers, ev: RelatedEvent) => any;
    onstalled: (this: GlobalEventHandlers, ev: Event) => any;
    onsubmit: (this: GlobalEventHandlers, ev: Event) => any;
    onsuspend: (this: GlobalEventHandlers, ev: Event) => any;
    ontimeupdate: (this: GlobalEventHandlers, ev: Event) => any;
    ontoggle: (this: GlobalEventHandlers, ev: Event) => any;
    ontouchcancel: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchend: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchmove: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchstart: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontransitioncancel: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitionend: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitionrun: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitionstart: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    onvolumechange: (this: GlobalEventHandlers, ev: Event) => any;
    onwaiting: (this: GlobalEventHandlers, ev: Event) => any;
    onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface GlobalPerformance {
    readonly performance: Performance;
}

interface HTMLHyperlinkElementUtilsBase {
    hash: string;
    host: string;
    hostname: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
}

interface HTMLHyperlinkElementUtils extends HTMLHyperlinkElementUtilsBase {
    href: string;
}

interface LinkStyle {
    readonly sheet: StyleSheet | null;
}

interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

interface NavigatorContentUtils {
    isContentHandlerRegistered(mimeType: string, url: string): string;
    isProtocolHandlerRegistered(scheme: string, url: string): string;
    registerContentHandler(mimeType: string, url: string, title: string): void;
    registerProtocolHandler(scheme: string, url: string, title: string): void;
    unregisterContentHandler(mimeType: string, url: string): void;
    unregisterProtocolHandler(scheme: string, url: string): void;
}

interface NavigatorCookies {
    readonly cookieEnabled: boolean;
}

interface NavigatorID {
    readonly appCodeName: string;
    readonly appName: string;
    readonly appVersion: string;
    readonly oscpu: string;
    readonly platform: string;
    readonly product: string;
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    readonly vendorSub: string;
    taintEnabled(): boolean;
}

interface NavigatorLanguage {
    readonly language: string;
    readonly languages: ReadonlyArray<string>;
}

interface NavigatorOnLine {
    readonly onLine: boolean;
}

interface NavigatorPlugins {
    readonly mimeTypes: MimeTypeArray;
    readonly plugins: PluginArray;
    javaEnabled(): boolean;
}

interface NavigatorUserMedia {
    readonly mediaDevices: MediaDevices;
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void;
}

interface NonDocumentTypeChildNode {
    readonly nextElementSibling: Element | null;
    readonly previousElementSibling: Element | null;
}

interface NonElementParentNode {
    getElementById(elementId: string): Element | null;
}

interface OES_element_index_uint {
}

interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

interface OES_texture_float {
}

interface OES_texture_float_linear {
}

interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: GLenum;
}

interface OES_texture_half_float_linear {
}

interface ParentNode {
    readonly childElementCount: number;
    readonly children: HTMLCollection;
    readonly firstElementChild: Element | null;
    readonly lastElementChild: Element | null;
    append(...nodes: (Node | string)[]): void;
    prepend(...nodes: (Node | string)[]): void;
    querySelectorAll<K extends keyof ElementTagNameMap>(selectors: K): NodeListOf<ElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}

interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

interface PositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

interface RTCDtmfSender {
}

interface RTCIceGatherer {
}

interface RTCSrtpSdesTransport {
}

interface Slotable {
    readonly assignedSlot: HTMLSlotElement | null;
}

interface SpeechSynthesisGetter {
    readonly speechSynthesis: SpeechSynthesis;
}

interface SVGAnimatedPoints {
    readonly animatedPoints: SVGPointList;
    readonly points: SVGPointList;
}

interface SVGElementInstance {
    readonly correspondingElement: SVGElement | null;
    readonly correspondingUseElement: SVGUseElement | null;
}

interface SVGFilterPrimitiveStandardAttributes {
    readonly height: SVGAnimatedLength;
    readonly result: SVGAnimatedString;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
}

interface SVGFitToViewBox {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly viewBox: SVGAnimatedRect;
}

interface SVGTests {
    readonly requiredExtensions: SVGStringList;
    readonly systemLanguage: SVGStringList;
}

interface SVGURIReference {
    readonly href: SVGAnimatedString;
}

interface SVGZoomAndPan {
    zoomAndPan: number;
    readonly SVG_ZOOMANDPAN_DISABLE: number;
    readonly SVG_ZOOMANDPAN_MAGNIFY: number;
    readonly SVG_ZOOMANDPAN_UNKNOWN: number;
}

interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
}

interface WEBGL_debug_renderer_info {
    readonly UNMASKED_RENDERER_WEBGL: GLenum;
    readonly UNMASKED_VENDOR_WEBGL: GLenum;
}

interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: GLenum;
}

interface WebGLRenderingContextBase {
    readonly canvas: HTMLCanvasElement;
    readonly drawingBufferHeight: GLsizei;
    readonly drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(name: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NO_ERROR: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGB565: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly TRIANGLES: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
}

interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "hashchange": HashChangeEvent;
    "languagechange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": PromiseRejectionEvent;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}

interface WindowEventHandlers {
    onafterprint: (this: WindowEventHandlers, ev: Event) => any;
    onbeforeprint: (this: WindowEventHandlers, ev: Event) => any;
    onbeforeunload: OnBeforeUnloadEventHandler;
    onhashchange: (this: WindowEventHandlers, ev: HashChangeEvent) => any;
    onlanguagechange: (this: WindowEventHandlers, ev: Event) => any;
    onmessage: (this: WindowEventHandlers, ev: MessageEvent) => any;
    onmessageerror: (this: WindowEventHandlers, ev: MessageEvent) => any;
    onoffline: (this: WindowEventHandlers, ev: Event) => any;
    ononline: (this: WindowEventHandlers, ev: Event) => any;
    onpagehide: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
    onpageshow: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
    onpopstate: (this: WindowEventHandlers, ev: PopStateEvent) => any;
    onrejectionhandled: (this: WindowEventHandlers, ev: PromiseRejectionEvent) => any;
    onstorage: (this: WindowEventHandlers, ev: StorageEvent) => any;
    onunhandledrejection: (this: WindowEventHandlers, ev: PromiseRejectionEvent) => any;
    onunload: (this: WindowEventHandlers, ev: Event) => any;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface WindowLocalStorage {
    readonly localStorage: Storage;
}

interface WindowOrWorkerGlobalScope {
    readonly caches: CacheStorage;
    readonly indexedDB: IDBFactory;
    readonly origin: string;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    setInterval(handler: (...args: any[]) => void, timeout: number): number;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
}

interface WindowSessionStorage {
    readonly sessionStorage: Storage;
}

declare namespace console {
    function assert(condition?: boolean, ...data: any[]): void;
    function clear(): void;
    function count(label?: string): void;
    function debug(...data: any[]): void;
    function dir(item: any, options?: any): void;
    function dirxml(...data: any[]): void;
    function error(...data: any[]): void;
    function group(...data: any[]): void;
    function groupCollapsed(...data: any[]): void;
    function groupEnd(): void;
    function info(...data: any[]): void;
    function log(...data: any[]): void;
    function table(tabularData: any, properties?: string[]): void;
    function time(label?: string): void;
    function timeEnd(label?: string): void;
    function trace(...data: any[]): void;
    function warn(...data: any[]): void;
}

interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: (ev: MessageEvent) => any;
    onmessageerror: (ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
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

interface Canvas2DContextAttributes {
    alpha?: boolean;
    willReadFrequently?: boolean;
    storage?: boolean;
    [attribute: string]: boolean | string | undefined;
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

interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}

interface HTMLCollectionOf<T extends Element> extends HTMLCollection {
    item(index: number): T;
    namedItem(name: string): T;
    [index: number]: T;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface EventListenerObject {
    handleEvent(evt: Event): void;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface ClipboardEventInit extends EventInit {
    data?: string;
    dataType?: string;
}

interface IDBArrayKey extends Array<IDBValidKey> {
}

interface DocumentOrShadowRoot {
    readonly activeElement: Element | null;
    readonly stylesheets: StyleSheetList;
    getSelection(): Selection | null;
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
}

interface ShadowRoot extends DocumentOrShadowRoot, DocumentFragment {
    readonly host: Element;
    innerHTML: string;
}

interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedNodes(options?: AssignedNodesOptions): Node[];
}

interface AssignedNodesOptions {
    flatten?: boolean;
}

interface DOMException extends Error {
    readonly name: string;
    readonly code: number;
    readonly INDEX_SIZE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly SECURITY_ERR: number;
    readonly NETWORK_ERR: number;
    readonly ABORT_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly DATA_CLONE_ERR: number;
}

declare var DOMException: {
    prototype: DOMException;
    new (message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly SECURITY_ERR: number;
    readonly NETWORK_ERR: number;
    readonly ABORT_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly DATA_CLONE_ERR: number;
};

interface BlobCallback {
    (blob: Blob | null): void;
}
interface DecodeErrorCallback {
    (error: DOMException): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
interface EventHandlerNonNull {
    (event: Event): any;
}
interface FrameRequestCallback {
    (time: number): void;
}
interface Function {
    (...arguments: any[]): any;
}
interface FunctionStringCallback {
    (data: string): void;
}
interface GenerateAssertionCallback {
    (contents: string, origin: string, options: RTCIdentityProviderOptions): Promise<RTCIdentityAssertionResult>;
}
interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}
interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface NavigatorUserMediaErrorCallback {
    (error: MediaStreamError): void;
}
interface NavigatorUserMediaSuccessCallback {
    (stream: MediaStream): void;
}
interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string;
}
interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: any): any;
}
interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}
interface PositionCallback {
    (position: Position): void;
}
interface PositionErrorCallback {
    (positionError: PositionError): void;
}
interface RTCPeerConnectionErrorCallback {
    (error: DOMException): void;
}
interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}
interface ValidateAssertionCallback {
    (assertion: string, origin: string): Promise<RTCIdentityValidationResult>;
}
interface VoidFunction {
    (): void;
}
interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "audio": HTMLAudioElement;
    "base": HTMLBaseElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "del": HTMLModElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "font": HTMLFontElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "isindex": HTMLUnknownElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "listing": HTMLPreElement;
    "map": HTMLMapElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nextid": HTMLUnknownElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "script": HTMLScriptElement;
    "select": HTMLSelectElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "style": HTMLStyleElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "ul": HTMLUListElement;
    "video": HTMLVideoElement;
    "xmp": HTMLPreElement;
}

interface ElementTagNameMap extends HTMLElementTagNameMap {
    "abbr": HTMLElement;
    "acronym": HTMLElement;
    "address": HTMLElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "b": HTMLElement;
    "bdo": HTMLElement;
    "big": HTMLElement;
    "center": HTMLElement;
    "circle": SVGCircleElement;
    "cite": HTMLElement;
    "clippath": SVGClipPathElement;
    "code": HTMLElement;
    "dd": HTMLElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "dfn": HTMLElement;
    "dt": HTMLElement;
    "ellipse": SVGEllipseElement;
    "em": HTMLElement;
    "feblend": SVGFEBlendElement;
    "fecolormatrix": SVGFEColorMatrixElement;
    "fecomponenttransfer": SVGFEComponentTransferElement;
    "fecomposite": SVGFECompositeElement;
    "feconvolvematrix": SVGFEConvolveMatrixElement;
    "fediffuselighting": SVGFEDiffuseLightingElement;
    "fedisplacementmap": SVGFEDisplacementMapElement;
    "fedistantlight": SVGFEDistantLightElement;
    "feflood": SVGFEFloodElement;
    "fefunca": SVGFEFuncAElement;
    "fefuncb": SVGFEFuncBElement;
    "fefuncg": SVGFEFuncGElement;
    "fefuncr": SVGFEFuncRElement;
    "fegaussianblur": SVGFEGaussianBlurElement;
    "feimage": SVGFEImageElement;
    "femerge": SVGFEMergeElement;
    "femergenode": SVGFEMergeNodeElement;
    "femorphology": SVGFEMorphologyElement;
    "feoffset": SVGFEOffsetElement;
    "fepointlight": SVGFEPointLightElement;
    "fespecularlighting": SVGFESpecularLightingElement;
    "fespotlight": SVGFESpotLightElement;
    "fetile": SVGFETileElement;
    "feturbulence": SVGFETurbulenceElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "filter": SVGFilterElement;
    "footer": HTMLElement;
    "foreignobject": SVGForeignObjectElement;
    "g": SVGGElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "i": HTMLElement;
    "image": SVGImageElement;
    "kbd": HTMLElement;
    "keygen": HTMLElement;
    "line": SVGLineElement;
    "lineargradient": SVGLinearGradientElement;
    "mark": HTMLElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "nav": HTMLElement;
    "nobr": HTMLElement;
    "noframes": HTMLElement;
    "noscript": HTMLElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "plaintext": HTMLElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialgradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "section": HTMLElement;
    "small": HTMLElement;
    "stop": SVGStopElement;
    "strike": HTMLElement;
    "strong": HTMLElement;
    "sub": HTMLElement;
    "sup": HTMLElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textpath": SVGTextPathElement;
    "tspan": SVGTSpanElement;
    "tt": HTMLElement;
    "u": HTMLElement;
    "use": SVGUseElement;
    "var": HTMLElement;
    "view": SVGViewElement;
    "wbr": HTMLElement;
}

declare var Audio: { new(src?: string): HTMLAudioElement; };
declare var Image: { new(width?: number, height?: number): HTMLImageElement; };
declare var Option: { new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement; };
declare var applicationCache: ApplicationCache;
declare var audioWorklet: Worklet;
declare var closed: boolean;
declare var customElements: CustomElementRegistry;
declare var devicePixelRatio: number;
declare var document: Document;
declare var external: External;
declare var frameElement: Element | null;
declare var frames: Window;
declare var history: History;
declare var innerHeight: number;
declare var innerWidth: number;
declare var length: number;
declare var location: Location;
declare var locationbar: BarProp;
declare var menubar: BarProp;
declare const name: never;
declare var navigator: Navigator;
declare var ondevicemotion: (this: Window, ev: DeviceMotionEvent) => any;
declare var ondeviceorientation: (this: Window, ev: DeviceOrientationEvent) => any;
declare var opener: any;
declare var outerHeight: number;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var parent: Window | null;
declare var personalbar: BarProp;
declare var screen: Screen;
declare var screenX: number;
declare var screenY: number;
declare var scrollbars: BarProp;
declare var scrollX: number;
declare var scrollY: number;
declare var self: Window;
declare var status: string;
declare var statusbar: BarProp;
declare var toolbar: BarProp;
declare var top: Window | null;
declare var window: Window;
declare function alert(message?: any): void;
declare function alert(message?: any): void;
declare function blur(): void;
declare function cancelAnimationFrame(handle: number): void;
declare function captureEvents(): void;
declare function close(): void;
declare function confirm(message?: string): boolean;
declare function focus(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: CSSOMString): CSSStyleDeclaration;
declare function getSelection(): Selection | null;
declare function matchMedia(query: string): MediaQueryList;
declare function moveBy(x: number, y: number): void;
declare function moveTo(x: number, y: number): void;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window;
declare function postMessage(message: any, targetOrigin: string, transfer?: any[]): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string | null;
declare function releaseEvents(): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function resizeBy(x: number, y: number): void;
declare function resizeTo(x: number, y: number): void;
declare function scroll(options?: ScrollToOptions): void;
declare function scroll(x: number, y: number): void;
declare function scrollBy(options?: ScrollToOptions): void;
declare function scrollBy(x: number, y: number): void;
declare function scrollTo(options?: ScrollToOptions): void;
declare function scrollTo(x: number, y: number): void;
declare function stop(): void;
declare function createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function toString(): string;
declare function dispatchEvent(event: Event): boolean;
declare function removeEventListener(type: string, callback: EventListener | null, options?: EventListenerOptions | boolean): void;
declare var onabort: (this: Window, ev: Event) => any;
declare var onanimationcancel: (this: Window, ev: AnimationEvent) => any;
declare var onanimationend: (this: Window, ev: AnimationEvent) => any;
declare var onanimationiteration: (this: Window, ev: AnimationEvent) => any;
declare var onanimationstart: (this: Window, ev: AnimationEvent) => any;
declare var onauxclick: (this: Window, ev: MouseEvent) => any;
declare var onblur: (this: Window, ev: Event) => any;
declare var oncancel: (this: Window, ev: Event) => any;
declare var oncanplay: (this: Window, ev: Event) => any;
declare var oncanplaythrough: (this: Window, ev: Event) => any;
declare var onchange: (this: Window, ev: Event) => any;
declare var onclick: (this: Window, ev: MouseEvent) => any;
declare var onclose: (this: Window, ev: Event) => any;
declare var oncontextmenu: (this: Window, ev: MouseEvent) => any;
declare var oncuechange: (this: Window, ev: Event) => any;
declare var ondblclick: (this: Window, ev: MouseEvent) => any;
declare var ondrag: (this: Window, ev: DragEvent) => any;
declare var ondragend: (this: Window, ev: DragEvent) => any;
declare var ondragenter: (this: Window, ev: DragEvent) => any;
declare var ondragexit: (this: Window, ev: DragEvent) => any;
declare var ondragleave: (this: Window, ev: DragEvent) => any;
declare var ondragover: (this: Window, ev: DragEvent) => any;
declare var ondragstart: (this: Window, ev: DragEvent) => any;
declare var ondrop: (this: Window, ev: DragEvent) => any;
declare var ondurationchange: (this: Window, ev: Event) => any;
declare var onemptied: (this: Window, ev: Event) => any;
declare var onended: (this: Window, ev: Event) => any;
declare var onerror: OnErrorEventHandler;
declare var onfocus: (this: Window, ev: Event) => any;
declare var oninput: (this: Window, ev: Event) => any;
declare var oninvalid: (this: Window, ev: Event) => any;
declare var onkeydown: (this: Window, ev: KeyboardEvent) => any;
declare var onkeypress: (this: Window, ev: KeyboardEvent) => any;
declare var onkeyup: (this: Window, ev: KeyboardEvent) => any;
declare var onload: (this: Window, ev: Event) => any;
declare var onloadeddata: (this: Window, ev: Event) => any;
declare var onloadedmetadata: (this: Window, ev: Event) => any;
declare var onloadend: (this: Window, ev: Event) => any;
declare var onloadstart: (this: Window, ev: Event) => any;
declare var onmousedown: (this: Window, ev: MouseEvent) => any;
declare var onmouseenter: (this: Window, ev: MouseEvent) => any;
declare var onmouseleave: (this: Window, ev: MouseEvent) => any;
declare var onmousemove: (this: Window, ev: MouseEvent) => any;
declare var onmouseout: (this: Window, ev: MouseEvent) => any;
declare var onmouseover: (this: Window, ev: MouseEvent) => any;
declare var onmouseup: (this: Window, ev: MouseEvent) => any;
declare var onpause: (this: Window, ev: Event) => any;
declare var onplay: (this: Window, ev: Event) => any;
declare var onplaying: (this: Window, ev: Event) => any;
declare var onpointercancel: (this: Window, ev: PointerEvent) => any;
declare var onpointerdown: (this: Window, ev: PointerEvent) => any;
declare var onpointerenter: (this: Window, ev: PointerEvent) => any;
declare var onpointerleave: (this: Window, ev: PointerEvent) => any;
declare var onpointermove: (this: Window, ev: PointerEvent) => any;
declare var onpointerout: (this: Window, ev: PointerEvent) => any;
declare var onpointerover: (this: Window, ev: PointerEvent) => any;
declare var onpointerup: (this: Window, ev: PointerEvent) => any;
declare var onprogress: (this: Window, ev: Event) => any;
declare var onratechange: (this: Window, ev: Event) => any;
declare var onreset: (this: Window, ev: Event) => any;
declare var onresize: (this: Window, ev: Event) => any;
declare var onscroll: (this: Window, ev: Event) => any;
declare var onseeked: (this: Window, ev: Event) => any;
declare var onseeking: (this: Window, ev: Event) => any;
declare var onselect: (this: Window, ev: Event) => any;
declare var onselectionchange: (this: Window, ev: Event) => any;
declare var onselectstart: (this: Window, ev: Event) => any;
declare var onshow: (this: Window, ev: RelatedEvent) => any;
declare var onstalled: (this: Window, ev: Event) => any;
declare var onsubmit: (this: Window, ev: Event) => any;
declare var onsuspend: (this: Window, ev: Event) => any;
declare var ontimeupdate: (this: Window, ev: Event) => any;
declare var ontoggle: (this: Window, ev: Event) => any;
declare var ontouchcancel: (this: Window, ev: TouchEvent) => any;
declare var ontouchend: (this: Window, ev: TouchEvent) => any;
declare var ontouchmove: (this: Window, ev: TouchEvent) => any;
declare var ontouchstart: (this: Window, ev: TouchEvent) => any;
declare var ontransitioncancel: (this: Window, ev: TransitionEvent) => any;
declare var ontransitionend: (this: Window, ev: TransitionEvent) => any;
declare var ontransitionrun: (this: Window, ev: TransitionEvent) => any;
declare var ontransitionstart: (this: Window, ev: TransitionEvent) => any;
declare var onvolumechange: (this: Window, ev: Event) => any;
declare var onwaiting: (this: Window, ev: Event) => any;
declare var onwheel: (this: Window, ev: WheelEvent) => any;
declare var onafterprint: (this: Window, ev: Event) => any;
declare var onbeforeprint: (this: Window, ev: Event) => any;
declare var onbeforeunload: OnBeforeUnloadEventHandler;
declare var onhashchange: (this: Window, ev: HashChangeEvent) => any;
declare var onlanguagechange: (this: Window, ev: Event) => any;
declare var onmessage: (this: Window, ev: MessageEvent) => any;
declare var onmessageerror: (this: Window, ev: MessageEvent) => any;
declare var onoffline: (this: Window, ev: Event) => any;
declare var ononline: (this: Window, ev: Event) => any;
declare var onpagehide: (this: Window, ev: PageTransitionEvent) => any;
declare var onpageshow: (this: Window, ev: PageTransitionEvent) => any;
declare var onpopstate: (this: Window, ev: PopStateEvent) => any;
declare var onrejectionhandled: (this: Window, ev: PromiseRejectionEvent) => any;
declare var onstorage: (this: Window, ev: StorageEvent) => any;
declare var onunhandledrejection: (this: Window, ev: PromiseRejectionEvent) => any;
declare var onunload: (this: Window, ev: Event) => any;
declare var caches: CacheStorage;
declare var indexedDB: IDBFactory;
declare var origin: string;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare var sessionStorage: Storage;
declare var localStorage: Storage;
declare var performance: Performance;
declare var crypto: Crypto;
declare var speechSynthesis: SpeechSynthesis;
declare function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
type AlgorithmIdentifier = any;
type BigInteger = Uint8Array;
type BlobPart = BufferSource | Blob | string;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream | string;
type BufferSource = ArrayBufferView | ArrayBuffer;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
type ConstrainBoolean = boolean | ConstrainBooleanParameters;
type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
type ConstrainDouble = number | ConstrainDoubleRange;
type ConstrainLong = number | ConstrainLongRange;
type CSSOMString = string;
type DOMHighResTimeStamp = number;
type DOMTimeStamp = number;
type EventHandler = EventHandlerNonNull;
type Float32List = Float32Array | GLfloat[];
type FormDataEntryValue = File | string;
type GeometryNode = Text | Element | CSSPseudoElement | Document;
type GLbitfield = number;
type GLboolean = boolean;
type GLbyte = number;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLintptr = number;
type GLshort = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLubyte = number;
type GLuint = number;
type GLushort = number;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = string[][] | { [key: string]: string };
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type Int32List = Int32Array | GLint[];
type MediaProvider = MediaStream | MediaSource | Blob;
type MediaStreamError = any;
type MessageEventSource = Window | MessagePort | ServiceWorker;
type NamedCurve = string;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | WebGLRenderingContext;
type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull;
type OnErrorEventHandler = OnErrorEventHandlerNonNull;
type PerformanceEntryList = PerformanceEntry[];
type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
type TimerHandler = string | Function;
type IDBValidKey = number | string | Date | IDBArrayKey;
type MouseWheelEvent = WheelEvent;
type AppendMode = "segments" | "sequence";
type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
type AudioContextState = "suspended" | "running" | "closed";
type BinaryType = "blob" | "arraybuffer";
type BiquadFilterType = "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass";
type CanPlayTypeResult = "" | "maybe" | "probably";
type CanvasDirection = "ltr" | "rtl" | "inherit";
type CanvasFillRule = "nonzero" | "evenodd";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "round" | "bevel" | "miter";
type CanvasTextAlign = "start" | "end" | "left" | "right" | "center";
type CanvasTextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
type ChannelCountMode = "max" | "clamped-max" | "explicit";
type ChannelInterpretation = "speakers" | "discrete";
type ColorSpaceConversion = "none" | "default";
type CSSBoxType = "margin" | "border" | "padding" | "content";
type DistanceModelType = "linear" | "inverse" | "exponential";
type DocumentReadyState = "loading" | "interactive" | "complete";
type EndOfStreamError = "network" | "decode";
type GamepadMappingType = "" | "standard";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "pending" | "done";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "none" | "flipY";
type ImageSmoothingQuality = "low" | "medium" | "high";
type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
type KeyType = "public" | "private" | "secret";
type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
type MediaKeyMessageType = "license-request" | "license-renewal" | "license-release" | "individualization-request";
type MediaKeySessionType = "temporary" | "persistent-license";
type MediaKeysRequirement = "required" | "optional" | "not-allowed";
type MediaKeyStatus = "usable" | "expired" | "released" | "output-restricted" | "output-downscaled" | "status-pending" | "internal-error";
type MediaStreamTrackState = "live" | "ended";
type NavigationType = "navigate" | "reload" | "back_forward" | "prerender";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextType = "2d" | "webgl";
type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";
type OverSampleType = "none" | "2x" | "4x";
type PanningModelType = "equalpower" | "HRTF";
type PaymentComplete = "fail" | "success" | "unknown";
type PaymentShippingType = "shipping" | "delivery" | "pickup";
type PremultiplyAlpha = "none" | "premultiply" | "default";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type ReadyState = "closed" | "open" | "ended";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestDestination = "" | "audio" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type ResizeQuality = "pixelated" | "low" | "medium" | "high";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";
type RTCDataChannelState = "connecting" | "open" | "closing" | "closed";
type RTCDegradationPreference = "maintain-framerate" | "maintain-resolution" | "balanced";
type RTCDtlsTransportState = "new" | "connecting" | "connected" | "closed" | "failed";
type RTCDtxStatus = "disabled" | "enabled";
type RTCErrorDetailType = "data-channel-failure" | "idp-bad-script-failure" | "idp-execution-failure" | "idp-load-failure" | "idp-need-login" | "idp-timeout" | "idp-tls-failure" | "idp-token-expired" | "idp-token-invalid" | "sctp-failure" | "sdp-syntax-error";
type RTCIceCandidateType = "host" | "srflx" | "prflx" | "relay";
type RTCIceComponent = "rtp" | "rtcp";
type RTCIceConnectionState = "new" | "checking" | "connected" | "completed" | "failed" | "disconnected" | "closed";
type RTCIceCredentialType = "password" | "oauth";
type RTCIceGathererState = "new" | "gathering" | "complete";
type RTCIceGatheringState = "new" | "gathering" | "complete";
type RTCIceProtocol = "udp" | "tcp";
type RTCIceRole = "controlling" | "controlled";
type RTCIceTcpCandidateType = "active" | "passive" | "so";
type RTCIceTransportPolicy = "relay" | "all";
type RTCIceTransportState = "new" | "checking" | "connected" | "completed" | "failed" | "disconnected" | "closed";
type RTCPeerConnectionState = "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed";
type RTCPriorityType = "very-low" | "low" | "medium" | "high";
type RTCRtcpMuxPolicy = "negotiate" | "require";
type RTCRtpTransceiverDirection = "sendrecv" | "sendonly" | "recvonly" | "inactive";
type RTCSdpType = "offer" | "pranswer" | "answer" | "rollback";
type RTCSignalingState = "stable" | "have-local-offer" | "have-remote-offer" | "have-local-pranswer" | "have-remote-pranswer" | "closed";
type RTCStatsIceCandidatePairState = "frozen" | "waiting" | "inprogress" | "failed" | "succeeded" | "cancelled";
type RTCStatsType = "codec" | "inbound-rtp" | "outbound-rtp" | "peer-connection" | "data-channel" | "track" | "transport" | "candidate-pair" | "local-candidate" | "remote-candidate" | "certificate";
type ScrollBehavior = "auto" | "instant" | "smooth";
type ScrollLogicalPosition = "start" | "center" | "end" | "nearest";
type ScrollRestoration = "auto" | "manual";
type SelectionMode = "select" | "start" | "end" | "preserve";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type ShadowRootMode = "open" | "closed";
type SpeechRecognitionErrorCode = "no-speech" | "aborted" | "audio-capture" | "network" | "not-allowed" | "service-not-allowed" | "bad-grammar" | "language-not-supported";
type SpeechSynthesisErrorCode = "canceled" | "interrupted" | "audio-busy" | "audio-hardware" | "network" | "synthesis-unavailable" | "synthesis-failed" | "language-unavailable" | "voice-unavailable" | "text-too-long" | "invalid-argument";
type TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
type TextTrackMode = "disabled" | "hidden" | "showing";
type TouchType = "direct" | "stylus";
type VideoFacingModeEnum = "user" | "environment" | "left" | "right";
type VisibilityState = "hidden" | "visible" | "prerender" | "unloaded";
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
type WorkerType = "classic" | "module";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";