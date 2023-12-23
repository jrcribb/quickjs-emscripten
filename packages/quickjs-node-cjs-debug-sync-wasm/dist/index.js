"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variant = {
    type: 'sync',
    importFFI: () => import('./ffi.js').then(mod => mod.QuickJSFFI),
    importModuleLoader: () => import('./emscripten-module.js'),
};
exports.default = variant;
//# sourceMappingURL=index.js.map