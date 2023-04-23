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