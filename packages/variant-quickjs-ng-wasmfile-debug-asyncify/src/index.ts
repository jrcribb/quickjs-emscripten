import type { QuickJSAsyncVariant } from "@jitl/quickjs-ffi-types"

/**
 * ### @jitl/quickjs-ng-wasmfile-debug-asyncify
 *
 * [Docs](https://github.com/justjake/quickjs-emscripten/blob/main/doc/@jitl/quickjs-ng-wasmfile-debug-asyncify/README.md) |
 * Variant with separate .WASM file. Supports browser ESM, NodeJS ESM, and NodeJS CommonJS.
 *
 * | Variable            |    Setting                     |    Description    |
 * | --                  | --                             | --                |
 * | library             | quickjs-ng             | [quickjs-ng](https://github.com/quickjs-ng/quickjs) is a fork of quickjs that tends to add features more quickly. Version [git+229b07b9](https://github.com/quickjs-ng/quickjs/commit/229b07b9b2c811eaf84db209a1d6f9e2a8a7b0d9) vendored to quickjs-emscripten on 2024-02-11. |
 * | releaseMode         | debug         | Enables assertions and memory sanitizers. Try to run your tests against debug variants, in addition to your preferred production variant, to catch more bugs. |
 * | syncMode            | asyncify            | Build run through the ASYNCIFY WebAssembly transform. This imposes substantial size (2x the size of sync) and speed penalties (40% the speed of sync). In return, allows synchronous calls from the QuickJS WASM runtime to async functions on the host. The extra magic makes this variant slower than sync variants. Note that both variants support regular async functions. Only adopt ASYNCIFY if you need to! The [QuickJSAsyncRuntime](https://github.com/justjake/quickjs-emscripten/blob/main/doc/quickjs-emscripten/classes/QuickJSAsyncRuntime.md) and [QuickJSAsyncContext](https://github.com/justjake/quickjs-emscripten/blob/main/doc/quickjs-emscripten/classes/QuickJSAsyncContext.md) classes expose the ASYNCIFY-specific APIs. |
 * | emscriptenInclusion | wasm | Has a separate .wasm file. May offer better caching in your browser, and reduces the size of your JS bundle. If you have issues, try a 'singlefile' variant. |
 * | exports             | require import browser workerd                  | Has these package.json export conditions |
 *
 */
const variant: QuickJSAsyncVariant = {
  type: "async",
  importFFI: () => import("./ffi.js").then((mod) => mod.QuickJSAsyncFFI),
  importModuleLoader: () =>
    import("@jitl/quickjs-ng-wasmfile-debug-asyncify/emscripten-module").then((mod) => mod.default),
} as const

export default variant