export const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  CSSStyleDeclaration: [
    "alignmentBaseline",
    "baselineShift",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "dominantBaseline",
    "fill",
    "fillOpacity",
    "fillRule",
    "floodColor",
    "floodOpacity",
    "fontSizeAdjust",
    "lightingColor",
    "marker",
    "markerEnd",
    "markerMid",
    "markerStart",
    "shapeRendering",
    "stopColor",
    "stopOpacity",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "textAnchor",
  ],
  Document: [
    // Accidental removal in BCD?
    // https://github.com/mdn/browser-compat-data/issues/17821
    "onpointerlockchange",
    "onpointerlockerror",
  ],
  Gamepad: ["hapticActuators"],
  GlobalEventHandlers: [
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
  ],
  IDBDatabase: [
    // BCD unexpectedly is removing valid event data
    // https://github.com/mdn/browser-compat-data/issues/15345
    "onabort",
    "onerror",
  ],
  KeyframeEffect: ["iterationComposite"],
  ShadowRoot: [
    // BCD unexpectedly is removing valid event data
    // https://github.com/mdn/browser-compat-data/issues/15345
    "onslotchange",
  ],
  WebGLRenderingContextBase: ["lineWidth"],
  WebGL2RenderingContextOverloads: [
    // These are implemented in WebGLRenderingContext and WebGL2RenderingContext separately
    // but BCD only have them in WebGLRenderingContext
    "bufferData",
    "compressedTexImage2D",
    "compressedTexSubImage2D",
    "readPixels",
    "texImage2D",
    "texSubImage2D",
    "uniform1fv",
    "uniform1iv",
    "uniform2fv",
    "uniform2iv",
    "uniform3fv",
    "uniform3iv",
    "uniform4fv",
    "uniform4iv",
  ],
  WorkerGlobalScope: ["onrejectionhandled", "onunhandledrejection"],
  XMLHttpRequestEventTarget: [
    // BCD unexpectedly is removing valid event data
    // https://github.com/mdn/browser-compat-data/issues/15345
    "onabort",
    "onerror",
    "onload",
    "onloadend",
    "onloadstart",
    "onprogress",
    "ontimeout",
  ],
};
