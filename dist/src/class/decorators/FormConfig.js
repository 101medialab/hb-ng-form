export var FormConfigSymbol = Symbol('FormConfig');
export function FormConfig(options) {
    var slug = null;
    if (options.label) {
        slug = options.label.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    return Reflect.metadata(FormConfigSymbol, Object.assign({
        hiderHeader: false,
        slug: slug,
    }, options));
}
//# sourceMappingURL=FormConfig.js.map