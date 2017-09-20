export var AutocompleteSymbol = Symbol('IAutocompleteOptions');
export function AutocompleteOptions(options) {
    return Reflect.metadata(AutocompleteSymbol, {
        autocomplete: Object.assign({}, options)
    });
}
//# sourceMappingURL=AutocompleteOptions.js.map