var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
var HbFormWidgetComponent = /** @class */ (function () {
    function HbFormWidgetComponent(resolver) {
        this.resolver = resolver;
    }
    HbFormWidgetComponent_1 = HbFormWidgetComponent;
    HbFormWidgetComponent.prototype.ngAfterViewInit = function () {
        if (!this.data.hide && this.data.useComponent) {
            var factory = this.resolver.resolveComponentFactory(this.data.useComponent);
            var ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.instance.parentTemplateObject = this.parent;
            ref.changeDetectorRef.detectChanges();
        }
    };
    HbFormWidgetComponent.prototype.ngOnInit = function () {
        var data = this.data;
        var result = null;
        var resolved = null;
        var options = data.options;
        if (typeof options === 'function') {
            resolved = options(data.diContainer, this.data, this.parent);
        }
        else if (!(result instanceof Observable)) {
            resolved = options;
        }
        result = resolved;
        if (!(resolved instanceof Observable)) {
            result = new Observable(function (o) {
                o.next(resolved);
                o.complete();
            });
        }
        this.resolvedOptions = result;
    };
    HbFormWidgetComponent.prototype.stringToBoolean = function (val) {
        return val === 'true';
    };
    HbFormWidgetComponent.prototype.updateParentValue = function ($event, option) {
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
    HbFormWidgetComponent.prototype.typeof = function (input) {
        return typeof input;
    };
    HbFormWidgetComponent.prototype.slugifyString = function (input) {
        if (input in HbFormWidgetComponent_1.slugMap) {
            return HbFormWidgetComponent_1.slugMap[input];
        }
        return HbFormWidgetComponent_1.slugMap[input] = input
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    var HbFormWidgetComponent_1;
    HbFormWidgetComponent.slugMap = [];
    __decorate([
        ViewChild("customBlock", { read: ViewContainerRef }),
        __metadata("design:type", Object)
    ], HbFormWidgetComponent.prototype, "customBlock", void 0);
    HbFormWidgetComponent = HbFormWidgetComponent_1 = __decorate([
        Component({
            selector: 'hb-form-widget',
            templateUrl: './hb-form-widget.tpl.html',
            inputs: ['data', 'key', 'parent']
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], HbFormWidgetComponent);
    return HbFormWidgetComponent;
}());
export { HbFormWidgetComponent };
//# sourceMappingURL=hb-form-widget.component.js.map