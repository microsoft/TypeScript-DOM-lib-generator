# Hey! Read This!

Some files in this directory are generated. Please do not edit them.
This specifically includes:

* `idl/*`
* `mdn.json`

Feel free to send a pull request with changes to any other files.
Note It is recommended to add your patch use KDL format, continue reading to find out more.

## Patches

The `patches/` directory contains `.kdl` files that specify modifications ("patches") on top of the Web IDL from web specifications, using the [KDL format](https://kdl.dev/).
These patches are applied by [`patches.ts`](../src/build/patches.ts).

### When to add a patch

- Add extra types to the generated types, e.g. type parameters.
- Make types more strict, e.g. replacing a string type into a string literal type.
- Remove features that are not widely supported by web browsers, in case it's not automatically removed.

### When not to add a patch

- When the type is incorrect, and that's from an upstream spec. It's recommended to file a bug in the corresponding spec, and when the fix happens, it will be applied here automatically.

### How to write a patch

- Try to add a new patch file when the newly desired patch is big, e.g. as long as a whole page. If it's just a few lines then it can usually go into one of the existing files.
- Files are named per their originating web specification. https://respec.org/xref/ helps you search the specifications. If there's no existing patch with that name, you should add one even if the patch will be very small. 
- Please add code comment about the intent for the patch, e.g. a feature is removed as it's only implemented in one browser.
- You can largely follow the Web IDL structure but in KDL syntax:
  - Most top level types e.g. `enum`, `interface`, or `dictionary` have the same names, but multi-word names like `interface mixin` are hyphened as `interface-mixin`.
  - Attributes and operations are called `property` and `method` respectively to follow TypeScript convention.
- If in doubt, feel free to file an issue or request help in [Discord dom-lib-generator channel](https://discord.gg/kRYw84uG).

#### Example (`patches/touch-events.kdl`)

```kdl
interface-mixin GlobalEventHandlers {
  // Touch event handlers are intentionally hidden in non-mobile web browsers.
  // See w3c.github.io/touch-events#dfn-expose-legacy-touch-event-apis.
  property ontouchcancel optional=#true
  property ontouchend optional=#true
  property ontouchmove optional=#true
  property ontouchstart optional=#true
}
```
