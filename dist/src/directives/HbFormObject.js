var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
import { HbFormWidget } from './HbFormWidget';
var HbFormObject = /** @class */ (function (_super) {
    __extends(HbFormObject, _super);
    function HbFormObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormObject = __decorate([
        Component({
            selector: 'hb-form-object',
            template: "\n        <div *ngIf=\"data.control != undefined && key != 'setValue'\" \n             [formGroup]=\"data.control\" \n             class=\"form-object {{ key }}\"\n        >\n            <h2>{{ data.label }}</h2>\n        \n            <div class=\"form-object-content\">\n                <div *ngFor=\"let each of data.children | mapToIterable\" class=\"{{ each.key }}\">\n                    {{ each.key }}\n                    \n                    <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                        <hb-form-widget class=\"expand-to-child\"\n                            *ngIf=\"each.val.groupType == undefined\"\n                            [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\"\n                        ></hb-form-widget>\n                        <hb-form-array  class=\"expand-to-child\"\n                            *ngIf=\"each.val?.groupType == 'array'\"\n                            [data]=\"each.val\" [key]=\"each.key\" [formArrayName]=\"each.key\" [parent]=\"data\"\n                        ></hb-form-array>\n                        <hb-form-object class=\"expand-to-child\"\n                            *ngIf=\"each.val?.groupType == 'object'\"\n                            [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\"\n                        ></hb-form-object>\n                    </ng-container>\n                </div>\n        \n                <span class=\"hints\" *ngIf=\"data?.hints\">\n                    {{ data.hints }}\n                </span>\n            </div>\n        </div>\n    ",
            inputs: ['id', 'key', 'data', 'parent']
        })
    ], HbFormObject);
    return HbFormObject;
}(HbFormWidget));
export { HbFormObject };
//# sourceMappingURL=HbFormObject.js.map