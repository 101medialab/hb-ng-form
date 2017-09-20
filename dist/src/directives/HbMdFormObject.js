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
var HbMdFormObject = /** @class */ (function (_super) {
    __extends(HbMdFormObject, _super);
    function HbMdFormObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbMdFormObject.decorators = [
        { type: Component, args: [{
                    selector: 'hb-md-form-object',
                    template: "\n        <md-card *ngIf=\"data.control != undefined && key != 'setValue'\" [formGroup]=\"data.control\" [ngClass]=\"'hb-form-obj_' + key\" class=\"form-object\">\n            <md-card-header *ngIf=\"data.label != ''\">\n                <md-card-title *ngIf=\"!data.hideHeader\">\n                    {{ data.label }}\n                </md-card-title>\n            </md-card-header>\n            <md-card-content class=\"hb-form-object-content\">\n                <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n                    <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                        <hb-md-form-widget\n                            *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-md-form-widget>\n                        <hb-md-form-array\n                            *ngIf=\"each.val?.groupType == 'array'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [formArrayName]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-md-form-array>\n                        <hb-md-form-object\n                            *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                            [data]=\"each.val\"\n                            [key]=\"each.key\"\n                            [parent]=\"data\">\n                        </hb-md-form-object>\n                    </ng-container>\n                </div>\n                <span class=\"hints\" *ngIf=\"data?.hints\">\n                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n                </span>\n            </md-card-content>\n        </md-card>\n    ",
                    inputs: ['id', 'key', 'data', 'parent']
                },] },
    ];
    /** @nocollapse */
    HbMdFormObject.ctorParameters = function () { return []; };
    return HbMdFormObject;
}(HbFormObject));
export { HbMdFormObject };
//# sourceMappingURL=HbMdFormObject.js.map