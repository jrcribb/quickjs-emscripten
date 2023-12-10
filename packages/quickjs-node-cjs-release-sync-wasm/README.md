# @jitl/quickjs-node-cjs-release-sync-wasm

Node.js CommonJS module

This generated package is part of [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten).
It contains a variant of the quickjs WASM library built with the following configuration:

## Library: quickjs

The original [bellard/quickjs](https://github.com/bellard/quickjs) library.

## Release mode: release

Optimized for performance; use when building/deploying your application.

## Module system: commonjs

This variant exports a CommonJS module, which is faster to load and run in Node.js.

## Extra async magic? No

The default, normal build. Note that both variants support regular async functions.

## Single-file, or separate .wasm file? wasm

Has a separate .wasm file. May offer better caching in your browser, and reduces the size of your JS bundle. If you have issues, try a 'singlefile' variant.

## More details

Full variant JSON description:

```json
{
  "library": "quickjs",
  "releaseMode": "release",
  "syncMode": "sync",
  "emscriptenInclusion": "wasm",
  "description": "Node.js CommonJS module",
  "emscriptenEnvironment": [
    "node"
  ],
  "moduleSystem": "commonjs"
}
```

Variant-specific Emscripten build flags:

```json
[
  "-0z",
  "-flto"
]
```