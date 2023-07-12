function assertType<T>(_x: T) {}

const mockKey = {} as CryptoKey;
assertType<Promise<JsonWebKey>>(crypto.subtle.exportKey('jwk', mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey('pkcs8', mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey('raw', mockKey));
assertType<Promise<ArrayBuffer>>(crypto.subtle.exportKey('spki', mockKey));

const usageInline = crypto.subtle.generateKey({
  name: "AES-GCM",
  length: 256,
},  true, ['encrypt', 'decrypt'])

const usageConst = crypto.subtle.generateKey( {
  name: "AES-GCM",
  length: 256,
},  true, ['encrypt', 'decrypt'] as const)

const keyUsage: ReadonlyArray<KeyUsage> = ['encrypt', 'decrypt']
const usageAsReadonly = crypto.subtle.generateKey( {
  name: "AES-GCM",
  length: 256,
},  true, keyUsage)