export var FormConfigSymbol = Symbol('FormConfig');
export function FormConfig(options) {
    return Reflect.metadata(FormConfigSymbol, Object.assign({
        hiderHeader: false
    }, options));
}
//# sourceMappingURL=FormConfig.js.map