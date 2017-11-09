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
import { Component } from "@angular/core";
import { HbFormArray } from "./HbFormArray";
var HbMatFormArray = /** @class */ (function (_super) {
    __extends(HbMatFormArray, _super);
    function HbMatFormArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbMatFormArray.decorators = [
        { type: Component, args: [{
                    selector: 'hb-mat-form-array',
                    template: "\n        <mat-card class=\"hb-form-array hb-array-type_{{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}\"\n                  [attr.id]=\"data.id\"\n                  *ngIf=\"data.control != undefined && key != 'setValue'\"\n                  [formGroup]=\"data.control\"\n                  [ngClass]=\"{\n                      'hb-form-with-hints' : data.hints\n                  }\">\n            <mat-card-header>\n                <mat-card-title *ngIf=\"!data.hideHeader\">\n                    <h2 *ngIf=\"data.label != ''\">{{ data.label }}</h2>\n\n                    <ng-container *ngIf=\"data.childrenConfigName.length > 0\">\n                        <ng-container *ngIf=\"!data.expandOptions; else expandedArrayPushOptions\">\n                            <mat-form-field>\n                                <mat-select class=\"hb-form-array-config-switch\"\n                                            [(ngModel)]=\"data.useConfig\"\n                                            [ngModelOptions]=\"{standalone: true}\">\n                                    <mat-option *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                                                [value]=\"i\">\n                                        {{ configName }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <button mat-raised-button\n                                    type=\"button\"\n                                    class=\"btn btn-default hb-form-add-btn\"\n                                    *ngIf=\"data.arrayType != 'enum'\"\n                                    (click)=\"data.add()\">\n                                Add\n                            </button>\n                        </ng-container>\n\n                        <ng-template #expandedArrayPushOptions>\n                            <button mat-raised-button\n                                    type=\"button\"\n                                    *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                                    (click)=\"data.useConfig = i; data.add();\">\n                                &#x253C; {{ configName }}\n                            </button>\n                        </ng-template>\n                    </ng-container>\n                </mat-card-title>\n            </mat-card-header>\n\n            <mat-card-content>\n                <div [attr.id]=\"data.id + '-' + i\"\n                     class=\"hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}\"\n                     *ngFor=\"let cell of \n                        data.arrayType != 'enum' ? \n                            data.children : resolvedOptions | async\n                    ; let i=index\">\n                    <hb-mat-form-widget *ngIf=\"data.arrayType == 'enum'\"\n                                        [data]=\"cell\"\n                                        [key]=\"i\"\n                                        [parent]=\"data\"></hb-mat-form-widget>\n\n                    <ng-container *ngIf=\"data.arrayType != 'enum'\">\n                        <div *ngFor=\"let each of cell.children | mapToIterable;\"\n                             class=\"hb-form-array-cell-attr_{{ each.key }}\">\n                            <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                                <hb-mat-form-widget *ngIf=\"each.val.groupType == undefined\"\n                                                    [data]=\"each.val\"\n                                                    [key]=\"i\"\n                                                    [parent]=\"data\"></hb-mat-form-widget>\n                                <hb-mat-form-array *ngIf=\"each.val?.groupType == 'array'\"\n                                                   [data]=\"each.val\"\n                                                   [key]=\"each.key\"\n                                                   [parent]=\"data\"></hb-mat-form-array>\n                                <hb-mat-form-object *ngIf=\"each.val?.groupType == 'object'\"\n                                                    [data]=\"each.val\"\n                                                    [key]=\"each.key\"\n                                                    [parent]=\"data\"></hb-mat-form-object>\n                            </ng-container>\n                        </div>\n                    </ng-container>\n\n                    <button mat-mini-fab\n                            color=\"primary\"\n                            class=\"hb-form-remove-btn\"\n                            type=\"button\"\n                            *ngIf=\"data.arrayType != 'enum'\"\n                            (click)=\"data.remove(i)\">\n                        &#x2715;\n                    </button>\n                </div>\n\n                <div class=\"hints\"\n                     *ngIf=\"data?.hints\">\n                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                </div>\n            </mat-card-content>\n        </mat-card>\n    ",
                    inputs: ['key', 'data', 'parent']
                },] },
    ];
    /** @nocollapse */
    HbMatFormArray.ctorParameters = function () { return []; };
    return HbMatFormArray;
}(HbFormArray));
export { HbMatFormArray };
//# sourceMappingURL=HbMatFormArray.js.map