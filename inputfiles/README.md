# Hey! Read This!

Some files in this directory are generated. Please do not edit them.
This specifically includes:

* `idl/*`

Feel free to send a pull request with changes to any other files.
Note It is recommended to add your patch use KDL format, continue reading to find out more.

## Documentation for `patches/` KDL Folder

The `patches/` directory only contains `.kdl` files that specify modifications ("patches") to the default Web IDL or related specifications, using the [KDL format](https://kdl.dev/).
These modifications are integrated into the build system (see [`src/build/patches.ts`](../src/build/patches.ts) for implementation details).

### Purpose

- Fix errors or omissions in upstream IDL data.
- Add or override or remove interfaces, mixins, and enums.
- Apply project-specific features or changes.

### Editing Policy

It is **recommended** to document and comment your patch files and their intent.
This helps keep the integration clear and maintainable.

### Patch File Naming Policy

When naming a KDL file, use the exact name of the main interface or dictionary as it appears in the official Web IDL specification. For reference and consistency, we recommend verifying names using [https://respec.org/xref/](https://respec.org/xref/).


### Structure & Parsing

- All `.kdl` files in this folder are read and parsed at build time.
- Their structure typically mirrors major Web IDL concepts:
  - `enum`
  - `interface`
  - `interface-mixin`
  - `dictionary`
  - Members like `event`, `property`, and `method`.

#### Example Patch File (`patches/tuoach-events.kdl`)
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

### How It Works

The builder (see `src/build/patches.ts`):

- Locates all KDL files in the `patches/` directory.
- Parses and type-checks them.
- Merges their contents and applies structural transformations over the main IDL dataset.

See the source or comments in `patches.ts` for precise KDL syntax and advanced features.

### Notes

- You can split patches into multiple `.kdl` files if desired.
- All the data in the json and jsonc files will be eventually transformed to KDL, so if possible submit patches to KDL.
- When in doubt, consult `/src/build/patches.ts` for details on supported KDL structure and merging logic.
- If there is a feature that is missing from the KDL parser, feel free to implement it yourself or ping @bashamega to help implement that feature in [this issue](https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/2053), or just add it to the jsonc files.
