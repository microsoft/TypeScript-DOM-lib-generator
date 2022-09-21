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
