export var ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');
export function ChoiceOptions(options) {
    return Reflect.metadata(ChoiceOptionsSymbol, Object.assign({
        maxChoices: 1
    }, {
        renderType: 'select'
    }, options));
}
//# sourceMappingURL=ChoiceOptions.js.map