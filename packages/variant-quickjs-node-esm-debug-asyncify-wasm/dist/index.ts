import { QuickJSAsyncVariant } from "@jitl/quickjs-ffi-types"

/**
 * This export is a variant of the quickjs WASM library:
 * ### [@jitl/quickjs-node-esm-debug-asyncify-wasm](https://www.npmjs.com/package/@jitl/quickjs-node-esm-debug-asyncify-wasm)
 *
 * Node.js ESModule
 *
 * | Variable            |    Setting                     |    Description    |
 * | --                  | --                             | --                |
 * | releaseMode         | debug | Enables assertions and memory sanitizers. Try to run your tests against debug variants, in addition to your preferred production variant, to catch more bugs. |
 * | syncMode            | asyncify | Build run through the ASYNCIFY WebAssembly transform. Larger and slower. Allows synchronous calls from the WASM runtime to async functions on the host. The extra magic makes this variant slower than sync variants. Note that both variants support regular async functions. Only adopt ASYNCIFY if you need to! |
 * | moduleSystem        | esm | This variant exports an ESModule, which is standardized for browsers and more modern browser-like environments. It cannot be imported from CommonJS without shenanigans. |
 * | emscriptenInclusion | wasm | Has a separate .wasm file. May offer better caching in your browser, and reduces the size of your JS bundle. If you have issues, try a 'singlefile' variant. |
 *
 */
const variant = {
  type: "async",
  importFFI: () => import("./ffi.js").then((mod) => mod.QuickJSAsyncFFI),
  importModuleLoader: () => import("./emscripten-module.js").then((mod) => mod.default),
} as const satisfies QuickJSAsyncVariant

export default variant