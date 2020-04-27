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
import { HbFormWidgetComponent } from "./hb-form-widget.component";
import { Component } from "@angular/core";
var HbFormMatWidgetComponent = /** @class */ (function (_super) {
    __extends(HbFormMatWidgetComponent, _super);
    function HbFormMatWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormMatWidgetComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.parent.arrayType == 'enum' &&
            this.parent.control.value.indexOf(this.data.options[0].value) > -1) {
            this.data.control.setValue(this.data.options[0].value);
        }
    };
    HbFormMatWidgetComponent = __decorate([
        Component({
            selector: 'hb-mat-form-widget',
            templateUrl: './hb-form-mat-widget.tpl.html',
            inputs: ['data', 'key', 'parent']
        })
    ], HbFormMatWidgetComponent);
    return HbFormMatWidgetComponent;
}(HbFormWidgetComponent));
export { HbFormMatWidgetComponent };
//# sourceMappingURL=hb-form-mat-widget.component.js.map