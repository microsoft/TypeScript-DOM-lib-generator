function assertType<T>(_x: T) {}

const mockKey = {} as CryptoKey;

assertType<Promise<JsonWebKey>>(crypto.subtle.exportKey("jwk", mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey("pkcs8", mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey("raw", mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey("spki", mockKey));

assertType<Promise<ArrayBuffer | JsonWebKey>>(
  crypto.subtle
    .exportKey("" as KeyFormat, mockKey)
    .then((ambiguousExportedKeyData) =>
      ambiguousExportedKeyData instanceof ArrayBuffer
        ? (ambiguousExportedKeyData satisfies ArrayBuffer)
        : (ambiguousExportedKeyData satisfies JsonWebKey)
    )
);

const usageInline = crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"]
);

const usageConst = crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"] as const
);

const keyUsage: ReadonlyArray<"encrypt" | "decrypt"> = ["encrypt", "decrypt"];
const usageAsReadonly = crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  keyUsage
);
