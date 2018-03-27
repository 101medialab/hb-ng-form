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
import { HbFormObject } from "./HbFormObject";
var HbMatFormObject = (function (_super) {
    __extends(HbMatFormObject, _super);
    function HbMatFormObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbMatFormObject.decorators = [
        { type: Component, args: [{
                    selector: 'hb-mat-form-object',
                    template: "\n        <mat-card *ngIf=\"data.control != undefined && key != 'setValue'\" \n                  [formGroup]=\"data.control\"\n                  [ngClass]=\"{ \n                      'error': !data.control.valid,\n                      'hb-form-with-hints' : data.hints\n                  }\"\n                  class=\"form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}\">\n            <mat-card-header *ngIf=\"typeof(data.label) == 'string' && data.label != '' && !data.hideHeader\">\n                <mat-card-title>\n                    {{ data.label }}\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"hb-form-object-content\">\n                <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n                    <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                        <hb-mat-form-widget\n                            *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-mat-form-widget>\n                        <hb-mat-form-array\n                            *ngIf=\"each.val?.groupType == 'array'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [formArrayName]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-mat-form-array>\n                        <hb-mat-form-object\n                            *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-mat-form-object>\n                    </ng-container>\n                </div>\n                <strong class=\"mat-hint\" *ngIf=\"data?.hints\">\n                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                </strong>\n            </mat-card-content>\n        </mat-card>\n    ",
                    inputs: ['id', 'key', 'data', 'parent']
                },] },
    ];
    /** @nocollapse */
    HbMatFormObject.ctorParameters = function () { return []; };
    return HbMatFormObject;
}(HbFormObject));
export { HbMatFormObject };
//# sourceMappingURL=HbMatFormObject.js.map