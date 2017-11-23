import { FormControl } from "@angular/forms";
var OptionWrapper = (function () {
    function OptionWrapper(option) {
        this.label = '';
        this.control = new FormControl();
        this.renderType = 'checkbox';
        this.options = [];
        this.options.push(option);
    }
    return OptionWrapper;
}());
export { OptionWrapper };
export var MultipleChoicesOptionsSymbol = Symbol('IMultipleChoicesOptionsFormConfig');
export function MultipleChoicesOptions(options) {
    return Reflect.metadata(MultipleChoicesOptionsSymbol, Object.assign({
        arrayType: 'enum'
    }, {
        maxChoices: null,
    }, options));
}
//# sourceMappingURL=MultipleChoicesOptions.js.map