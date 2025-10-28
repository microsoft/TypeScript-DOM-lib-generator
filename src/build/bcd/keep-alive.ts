export const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  ContactAddress: [
    "country",
    "addressLine",
    "region",
    "city",
    "dependentLocality",
    "postalCode",
    "sortingCode",
    "organization",
    "recipient",
    "phone",
    "toJSON",
  ],
  CSSStyleProperties: [
    // https://github.com/mdn/browser-compat-data/commit/ebabd27460a306d6de80107b7e3c62be99ecd13c#r135144607
    "webkitMaskComposite",
  ],
  GlobalEventHandlers: [
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
  ],
  IDBDatabase: [
    // BCD unexpectedly is removing valid event data
    // https://github.com/mdn/browser-compat-data/issues/15345
    "onerror",
  ],
  ShadowRoot: [
    // BCD unexpectedly is removing valid event data
    // https://github.com/mdn/browser-compat-data/issues/15345
    "onslotchange",
  ],
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
