var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BaseClass } from 'hb-ng-sdk';
var HbFormWidget = /** @class */ (function (_super) {
    __extends(HbFormWidget, _super);
    function HbFormWidget(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    HbFormWidget.prototype.ngAfterViewInit = function () {
        if (this.data.useComponent) {
            var factory = this.resolver.resolveComponentFactory(this.data.useComponent);
            var ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.changeDetectorRef.detectChanges();
        }
    };
    HbFormWidget.prototype.ngOnInit = function () {
        var data = this.data;
        var result = null;
        var resolved = null;
        var options = data.options;
        if (typeof options === 'function') {
            resolved = options(data.diContainer);
        }
        else if (!(result instanceof Observable)) {
            resolved = options;
        }
        if (!(result instanceof Observable)) {
            result = Observable.create(function (o) {
                o.next(resolved);
            });
        }
        this.resolvedOptions = result;
    };
    HbFormWidget.prototype.toBoolean = function (val) {
        return val === 'true';
    };
    HbFormWidget.prototype.updateParentValue = function ($event, option) {
        var target = $event.target ? $event.target : $event.source;
        var isChecked = target.checked;
        switch (this.data.renderType) {
            case 'checkbox':
                var parentControls = this.parent.control.controls;
                if (isChecked) {
                    this.parent.add();
                    parentControls[parentControls.length - 1].setValue(option.value);
                }
                else {
                    var i = 0;
                    for (; i < parentControls.length; i++) {
                        if (parentControls[i].value == option.value)
                            break;
                    }
                    this.parent.remove(i);
                }
                break;
            case 'radio':
                if (isChecked)
                    this.data.control.patchValue(target.value);
                break;
        }
    };
    HbFormWidget.decorators = [
        { type: Component, args: [{
                    selector: 'hb-form-widget',
                    template: "\n        <div *ngIf=\"\n                data.control != undefined && \n                data.groupType == undefined && \n                key != 'setValue' && (\n                    data.hide == undefined ||  \n                    !data.hide\n                )\n            \"\n            [ngClass]=\"{ 'error': !data.control.valid }\" class=\"expand-to-child hb-form-widget\">\n            <ng-template #customBlock></ng-template>\n\n            <div *ngIf=\"!data.useComponent && data.expandOptions == undefined\">\n                <label for=\"{{ key ? key : data.label.slugify() }}-input\">{{ data.renderType !== 'checkbox' || data.label !== undefined ? data.label : data.option.name }}</label>\n        \n                <div class=\"input-control-container\">\n                    <input id=\"{{ key ? key : data.label.slugify() }}-input\"\n                           *ngIf=\"!data.renderType || ['select', 'textarea'].indexOf(data.renderType) === -1\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           [attr.checked]=\"\n                               parent?.arrayType === 'enum' && parent.control.value.indexOf(data.option.value) > -1 ? true : null\n                           \"\n                           (change)=\"\n                               parent?.arrayType === 'enum' ?\n                                   updateParentValue($event, data.option) :\n                                   data.control.patchValue(\n                                       data.renderType === 'checkbox' ? $event.target.checked : $event.target.value\n                                   );\n                           \"\n                           placeholder=\"{{ data.label }}\" [formControl]=\"data.control\"/>\n        \n                    <textarea *ngIf=\"data.renderType === 'textarea'\" [formControl]=\"data.control\"\n                              id=\"{{ key ? key : data.label.slugify() }}-input\" rows=\"5\"></textarea>\n        \n                    <span class=\"hints\" *ngIf=\"data?.hints\">\n                        {{ data.hints }}\n                    </span>\n                </div>\n            </div>\n        \n            <div *ngIf=\"!data.useComponent && data.renderType && data.expandOptions != undefined\" class=\"options-group\">\n                <div *ngIf=\"data.renderType != 'select'\">\n                    <div *ngFor=\"let option of data.options\">\n                        <label for=\"{{ key ? key : data.label.slugify() }}-input\">{{ option.name }}</label>\n                        <input [type]=\"data.renderType\" [value]=\"option.value\"\n                               [attr.checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.label.slugify()) + '-input' : null\"\n                               (change)=\"updateParentValue($event, option)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </div>\n                </div>\n        \n                <select *ngIf=\"data.renderType == 'select'\" id=\"\"\n                        [attr.multiple]=\"data.expandOptions ? true : null\"\n                        [formControl]=\"data.control\">\n                    <option *ngFor=\"let option of data.options\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </div>\n        </div>\n    ",
                    inputs: ['data', 'key', 'parent']
                },] },
    ];
    /** @nocollapse */
    HbFormWidget.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    HbFormWidget.propDecorators = {
        'customBlock': [{ type: ViewChild, args: ["customBlock", { read: ViewContainerRef },] },],
    };
    return HbFormWidget;
}(BaseClass));
export { HbFormWidget };
//# sourceMappingURL=HbFormWidget.js.map