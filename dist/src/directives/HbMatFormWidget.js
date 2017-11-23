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
import { HbFormWidget } from "./HbFormWidget";
import { Component } from "@angular/core";
var HbMatFormWidget = /** @class */ (function (_super) {
    __extends(HbMatFormWidget, _super);
    function HbMatFormWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbMatFormWidget.decorators = [
        { type: Component, args: [{
                    selector: 'hb-mat-form-widget',
                    template: "\n        <div *ngIf=\"\n                data.control != undefined && \n                (\n                    data.groupType == undefined || \n                    parent.arrayType == 'enum'\n                ) && \n                key != 'setValue' && \n                (\n                    data.hide == undefined ||  \n                    !data.hide\n                )\n            \"\n             [ngClass]=\"{ \n                'error': !data.control.valid,\n                'hb-form-with-hints' : data.hints\n            }\"\n             class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\">\n            <ng-template #customBlock></ng-template>\n\n            <ng-container *ngIf=\"(\n                !data.useComponent && \n                data.expandOptions == undefined\n            ) || (\n                parent?.arrayType === 'enum'\n            )\">\n                <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                    <mat-form-field *ngIf=\"\n                        (\n                            parent?.arrayType === 'enum' || \n                            data.selectOptionsObservables == undefined\n                        ); else autocompleteBlock\n                    \" class=\"hb-form-widget-input-field\">\n                        <div class=\"form-field-prefix\"\n                             matPrefix\n                             *ngIf=\"data?.matExtra?.matPrefix\"\n                             [innerHtml]=\"data.matExtra.matPrefix\"></div>\n\n                        <input matInput\n                               [attr.id]=\"(key ? key : data.label.slugify()) + '-input'\"\n                               [type]=\"data.renderType ? data.renderType : 'text'\"\n                               [attr.checked]=\"\n                                   parent?.arrayType === 'enum' && \n                                   parent.control.value.indexOf(data.option.value) > -1 ?\n                                       true : null\n                               \"\n                               (change)=\"\n                                   parent?.arrayType === 'enum' ?\n                                       updateParentValue($event, data.option) :\n                                       data.control.patchValue(\n                                           data.renderType === 'checkbox' ? $event.target.checked : $event.target.value\n                                       );\n                               \"\n                               placeholder=\"\n                                   {{ data.renderType !== 'checkbox' || data.label !== undefined ? data.label : data.option.name }}\n                               \"\n                               [formControl]=\"data.control\" />\n\n                        <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                            <strong>\n                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                            </strong>\n                        </mat-hint>\n                        \n                        <div class=\"form-field-suffix\"\n                             matSuffix\n                             *ngIf=\"data?.matExtra?.matSuffix\"\n                             [innerHtml]=\"data.matExtra.matSuffix\"></div>\n                    </mat-form-field>\n\n                    <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n                        <mat-form-field *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\">\n                            <input matInput\n                                   [attr.id]=\"key ? key : data.label.slugify() + '-input'\"\n                                   [type]=\"data.renderType ? data.renderType : 'text'\"\n                                   (change)=\"\n                                       data.control.patchValue(\n                                           $event.target.value\n                                       );\n                                   \"\n                                   placeholder=\"\n                                       {{ data.label !== undefined ? data.label : data.option.name }}\n                                   \"\n                                   [formControl]=\"data.control\"\n                                   [matAutocomplete]=\"auto\" />\n\n                            <mat-autocomplete #auto=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">\n                                    <span>{{ option.label }}</span>\n                                </mat-option>\n                            </mat-autocomplete>\n\n                            <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                                <strong>\n                                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                                </strong>\n                            </mat-hint>\n                        </mat-form-field>\n                    </ng-template>\n                </ng-container>\n\n                <mat-form-field *ngIf=\"data.renderType === 'textarea'\">\n                    <textarea matInput rows=\"5\" [formControl]=\"data.control\" placeholder=\"\n                                  {{ data.label ? data.label : data.option.name }}\n                              \" [attr.id]=\"key ? key : data.label.slugify() + '-input'\">\n                    </textarea>\n\n                    <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                        <strong>\n                            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                        </strong>\n                    </mat-hint>\n                </mat-form-field>    \n            </ng-container>\n\n            <ng-container *ngIf=\"!data.useComponent && ['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n                <div *ngIf=\"['radio', 'checkbox'].indexOf(data.renderType) > -1; else select\">\n                    <mat-radio-group\n                        *ngIf=\"data.renderType == 'radio'; else checkbox\"\n                        [formControl]=\"data.control\">\n                        <mat-radio-button\n                            class=\"example-radio-button\"\n                            *ngFor=\"let option of data.options\"\n                            [value]=\"option.value\"\n                            [attr.checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                            [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.label.slugify()) + '-input' : null\"\n                            (change)=\"updateParentValue($event, option)\"\n                        >\n                            {{ option.name }}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <ng-template #checkbox>\n                        <mat-checkbox\n                            *ngFor=\"let option of data.options\"\n                            [value]=\"option.value\"\n                            [attr.checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                            (change)=\"updateParentValue($event, option)\"\n                            [formControl]=\"data.control\"\n                        >\n                            {{ option.name }}\n                        </mat-checkbox>\n                    </ng-template>\n                </div>\n                \n                <ng-template #select>\n                    <mat-form-field>\n                        <mat-select\n                            *ngIf=\"data.renderType == 'select'\"\n                            [formControl]=\"data.control\"\n                            [placeholder]=\"data.label != '' ? data.label : null\"\n                        >\n                            <mat-option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                                {{ option.name ? option.name : option.value }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-template>\n            </ng-container>\n        </div>\n    ",
                    inputs: ['data', 'key', 'parent']
                },] },
    ];
    /** @nocollapse */
    HbMatFormWidget.ctorParameters = function () { return []; };
    return HbMatFormWidget;
}(HbFormWidget));
export { HbMatFormWidget };
//# sourceMappingURL=HbMatFormWidget.js.map