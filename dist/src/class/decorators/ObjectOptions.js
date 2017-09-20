export var ObjectOptionsSymbol = Symbol('IObjectOptionsFormConfig');
export function ObjectOptions(options) {
    return Reflect.metadata(ObjectOptionsSymbol, Object.assign({}, options));
}
//# sourceMappingURL=ObjectOptions.js.map