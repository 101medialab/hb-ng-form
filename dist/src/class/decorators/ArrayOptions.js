export var ArrayOptionsSymbol = Symbol('IArrayOptionsFormConfig');
export function ArrayOptions(options) {
    return Reflect.metadata(ArrayOptionsSymbol, Object.assign({}, options));
}
//# sourceMappingURL=ArrayOptions.js.map