### `@types/webworker` - Types for the global scope of Web Workers

> The Worker interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator. Creating a worker is done by calling the `Worker("path/to/worker/script")` constructor.

From [MDN Web Docs: Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Worker)

This package contains type definitions which will set up the global environment for your TypeScript project to match the runtime environment of a Web Worker. The APIs inside `@types/webworker` are [generated from](https://github.com/microsoft/TypeScript-DOM-lib-generator/) the specifications for JavaScript.

## Installation 

To use `@types/webworker` you need to do two things:

1. Install the dependency: `npm install @types/webworker --save-dev`, `yarn add @types/webworker --dev` or `pnpm add @types/webworker --dev`.
1. Update your [`tsconfig.json`](https://www.typescriptlang.org/tsconfig) to avoid clashing with the DOM APIs. There are two cases to consider depending on if you have `lib` defined in your `tsconfig.json` or not.

    1. **Without "lib"** - You will need to add `"lib": []`. The value you want to add inside your lib should correlate to your [`"target"`](https://www.typescriptlang.org/tsconfig#target). For example if you had `"target": "es2017"`, then you would add `"lib": ["es2017"]`
    1. **With "lib"**  - You should remove `"dom"`.

That's all. 


## SemVer

This project does not respect semantic versioning as almost every change could potentially break a project, though we try to minimize removing types.

`@types/webworker` follow the specifications, so when they mark a function/object/API/type as deprecated or removed - that is respected.

## Deploy Metadata

You can read what changed in version {{version}} at {{release_href}}.