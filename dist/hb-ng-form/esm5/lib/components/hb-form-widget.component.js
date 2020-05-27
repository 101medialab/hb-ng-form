import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
var HbFormWidgetComponent = /** @class */ (function () {
    function HbFormWidgetComponent(resolver) {
        this.resolver = resolver;
    }
    HbFormWidgetComponent_1 = HbFormWidgetComponent;
    HbFormWidgetComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spread(args));
    };
    HbFormWidgetComponent.prototype.ngAfterViewInit = function () {
        if (!this.data.hide && this.data.useComponent) {
            var factory = this.resolver.resolveComponentFactory(this.data.useComponent);
            var ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.instance.parentTemplateObject = this.parent;
            ref.changeDetectorRef.detectChanges();
        }
    };
    HbFormWidgetComponent.prototype.isOptionSelectingComponent = function () {
        return ['radio', 'checkbox', 'select'].indexOf(this.data.renderType) > -1;
    };
    HbFormWidgetComponent.prototype.ngOnInit = function () {
        if (this.isOptionSelectingComponent()) {
            var data = this.data;
            var result = null;
            var resolved_1 = null;
            var options = [];
            if (data.options && (data.options.length ||
                typeof data.options === 'function')) {
                options = data.options;
            }
            else if (data.type === 'boolean' &&
                data.renderType === 'checkbox') {
                options = [{
                        name: data.label,
                        value: true,
                    }];
            }
            if (options.length === 0) {
                throw new Error('No options set for ' + data.key + ' in ' + this.parent.key);
            }
            if (typeof options === 'function') {
                resolved_1 = options(data.diContainer, this.data, this.parent);
            }
            else if (!(result instanceof Observable)) {
                resolved_1 = options;
            }
            result = resolved_1;
            if (!(resolved_1 instanceof Observable)) {
                result = new Observable(function (o) {
                    o.next(resolved_1);
                    o.complete();
                });
            }
            this.resolvedOptions = result;
        }
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
        if (input) {
            return HbFormWidgetComponent_1.slugMap[input] = input
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
        else {
            throw new Error('Cannot slugify input, input is undefined.');
        }
    };
    var HbFormWidgetComponent_1;
    HbFormWidgetComponent.slugMap = [];
    HbFormWidgetComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ViewChild("customBlock", { read: ViewContainerRef, static: true }),
        __metadata("design:type", Object)
    ], HbFormWidgetComponent.prototype, "customBlock", void 0);
    HbFormWidgetComponent = HbFormWidgetComponent_1 = __decorate([
        Component({
            selector: 'hb-form-widget',
            template: "<div *ngIf=\"\n         data.control != undefined &&\n         (\n             data.groupType == undefined ||\n             parent.arrayType == 'enum'\n         ) &&\n         key != 'setValue' &&\n         (\n             data.hide == undefined ||\n             !data.hide\n         )\n    \"\n    [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n    class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-container *ngIf=\"!data.useComponent; else customBlock\">\n        <label *ngIf=\"data.label\"\n               [attr.for]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\"\n               [attr.class]=\"data?.html?.class?.label\">{{ data.label }}</label>\n\n        <ng-container *ngIf=\"parent?.arrayType !== 'enum'\">\n            <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                <div *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\"\n                     class=\"hb-form-widget-input-field\">\n                    <input [attr.id]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value)\"\n                           [placeholder]=\"data.placeholder !== undefined ? data.placeholder : ''\"\n                           [formControl]=\"data.control\" />\n                </div>\n\n                <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n<!--                        Autocomplete is not well supported in hb-form-widget-->\n\n<!--                        <div *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\" -->\n<!--                             class=\"hb-form-widget-input-field autocomplete\">-->\n<!--                            <input [attr.id]=\"key ? key : data.slug + '-input'\"-->\n<!--                                   [type]=\"data.renderType ? data.renderType : 'text'\"-->\n<!--                                   (change)=\"data.control.patchValue($event.target.value)\"-->\n<!--                                   [placeholder]=\"data.label !== undefined ? data.label : data.option.name\"-->\n<!--                                   [formControl]=\"data.control\" />-->\n\n<!--                            <autocomplete #auto=\"matAutocomplete\">-->\n<!--                                <option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">-->\n<!--                                    <span>{{ option.label }}</span>-->\n<!--                                </option>-->\n<!--                            </autocomplete>-->\n\n<!--                            <span class=\"hints\" *ngIf=\"data?.hints\">-->\n<!--                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}-->\n<!--                            </span>-->\n<!--                        </div>-->\n                </ng-template>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.renderType == 'textarea'\">\n                <textarea [rows]=\"data?.html?.textarea?.row || 5\" [formControl]=\"data.control\"\n                          [attr.id]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\">\n                </textarea>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"isOptionSelectingComponent()\">\n\n            <ng-container *ngIf=\"data.renderType != 'select'; else selectBlock\">\n                <ng-container *ngFor=\"let option of resolvedOptions | async\">\n                    <label *ngIf=\"parent?.arrayType == 'enum' || data.renderType != 'checkbox'\"\n                           for=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\">{{ option.name }}</label>\n\n                    <ng-container *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\">\n                        <input type=\"radio\"\n                               id=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\"\n                               class=\"example-radio-button\"\n                               [value]=\"option.value\"\n                               [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                               (select)=\"parent?.arrayType == 'enum' ? updateParentValue($event, option) : data.control.patchValue($event.target.value)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </ng-container>\n\n                    <ng-template #checkBoxBlock>\n                        <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckBoxBlock\">\n                            <input type=\"checkbox\"\n                                   [value]=\"option.value\"\n                                   [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                                   (change)=\"parent?.arrayType == 'enum' ? updateParentValue($event, option) : data.control.patchValue($event.target.value)\"\n                                   [formControl]=\"data.control\"/>\n                        </ng-container>\n\n                        <ng-template #booleanCheckBoxBlock>\n                            <input type=\"checkbox\"\n                                   [checked]=\"data.control.value ? true : null\"\n                                   (change)=\"data.control.patchValue($event.target.checked)\"/>\n                        </ng-template>\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n\n            <ng-template #selectBlock>\n                <select *ngIf=\"data.renderType == 'select'\"\n                        [formControl]=\"data.control\"\n                        [attr.placeholder]=\"data.label != undefined ? data.label : ''\"\n                >\n                    <option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </ng-template>\n        </ng-container>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n        </span>\n    </ng-container>\n\n    <ng-template #customBlock></ng-template>\n</div>\n",
            inputs: ['data', 'key', 'parent']
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], HbFormWidgetComponent);
    return HbFormWidgetComponent;
}());
export { HbFormWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxNQUFNLEVBQ04sd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVlsQztJQVNJLCtCQUNZLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBRTlDLENBQUM7OEJBWlEscUJBQXFCO0lBYzlCLG1DQUFHLEdBQUg7UUFBSSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNQLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxXQUFRLElBQUksR0FBRTtJQUN6QixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FDekIsQ0FBQztZQUNGLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRWhELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCwwREFBMEIsR0FBMUI7UUFDSSxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxVQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXBCLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztZQUN0QixJQUNJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQ3JDLEVBQ0g7Z0JBQ0UsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7YUFDekI7aUJBQU0sSUFDSCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUNoQztnQkFDRSxPQUFPLEdBQUcsQ0FBQzt3QkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2hCLEtBQUssRUFBRSxJQUFJO3FCQUNkLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hGO1lBRUQsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQy9CLFVBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRTtpQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksVUFBVSxDQUFDLEVBQUU7Z0JBQ3hDLFVBQVEsR0FBRyxPQUFPLENBQUM7YUFDdEI7WUFFRCxNQUFNLEdBQUcsVUFBUSxDQUFDO1lBRWxCLElBQUksQ0FBQyxDQUFDLFVBQVEsWUFBWSxVQUFVLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUMsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixHQUFHO1FBQ2YsT0FBTyxHQUFHLEtBQUssTUFBTSxDQUFBO0lBQ3pCLENBQUM7SUFFRCxpREFBaUIsR0FBakIsVUFBa0IsTUFBTSxFQUFFLE1BQU07UUFDNUIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3RCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRS9CLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsS0FBSyxVQUFVO2dCQUNYLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFFbEQsSUFBSSxTQUFTLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFFbEIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUVWLE9BQU8sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ25DLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSzs0QkFBRSxNQUFNO3FCQUN0RDtvQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7Z0JBRUQsTUFBTTtZQUVWLEtBQUssT0FBTztnQkFDUixJQUFJLFNBQVM7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFMUQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1IsT0FBTyxPQUFPLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxLQUFLLElBQUksdUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLE9BQU8sdUJBQXFCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLHVCQUFxQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLO2lCQUM5QyxXQUFXLEVBQUU7aUJBQ2IsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7aUJBQ3hCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO2lCQUN4QixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7U0FDL0Q7SUFDTCxDQUFDOztJQW5JTSw2QkFBTyxHQUFHLEVBQUUsQ0FBQzs7Z0JBS0Usd0JBQXdCOztJQUhzQjtRQUFuRSxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OERBQWE7SUFQdkUscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsdXVOQUF3QztZQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztTQUNwQyxDQUFDO3lDQVd3Qix3QkFBd0I7T0FWckMscUJBQXFCLENBeUlqQztJQUFELDRCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0F6SVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTXVsdGlwbGVDaG9pY2VzT3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9NdWx0aXBsZUNob2ljZXNPcHRpb25zXCI7XG5pbXBvcnQgeyBJQmFzZUZvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9Gb3JtQ29uZmlnXCI7XG5pbXBvcnQgeyBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL0FycmF5T3B0aW9uc1wiO1xuaW1wb3J0IHsgSU9iamVjdE9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvT2JqZWN0T3B0aW9uc1wiO1xuaW1wb3J0IHsgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvQ2hvaWNlT3B0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLWZvcm0td2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGItZm9ybS13aWRnZXQudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydkYXRhJywgJ2tleScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyByZXNvbHZlZE9wdGlvbnM7XG4gICAgcHVibGljIGtleTtcbiAgICBwdWJsaWMgZGF0YTogYW55ICYgSUJhc2VGb3JtQ29uZmlnICYgSU11bHRpcGxlQ2hvaWNlc09wdGlvbnNGb3JtQ29uZmlnICYgSUFycmF5T3B0aW9uc0Zvcm1Db25maWcgJiBJT2JqZWN0T3B0aW9uc0Zvcm1Db25maWcgJiBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWc7XG4gICAgcHVibGljIHBhcmVudDtcbiAgICBzdGF0aWMgc2x1Z01hcCA9IFtdO1xuXG4gICAgQFZpZXdDaGlsZChcImN1c3RvbUJsb2NrXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkge1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGlkZSAmJiB0aGlzLmRhdGEudXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlQ29tcG9uZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5jdXN0b21CbG9jay5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UudGVtcGxhdGVPYmplY3QgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UucGFyZW50VGVtcGxhdGVPYmplY3QgPSB0aGlzLnBhcmVudDtcblxuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzT3B0aW9uU2VsZWN0aW5nQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gWydyYWRpbycsICdjaGVja2JveCcsICdzZWxlY3QnXS5pbmRleE9mKHRoaXMuZGF0YS5yZW5kZXJUeXBlKSA+IC0xO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGluZ0NvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgb3B0aW9uczogYW55ID0gW107XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZGF0YS5vcHRpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5vcHRpb25zLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5vcHRpb25zID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRhdGEub3B0aW9uc1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBkYXRhLnR5cGUgPT09ICdib29sZWFuJyAmJlxuICAgICAgICAgICAgICAgIGRhdGEucmVuZGVyVHlwZSA9PT0gJ2NoZWNrYm94J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9wdGlvbnMgc2V0IGZvciAnICsgZGF0YS5rZXkgKyAnIGluICcgKyB0aGlzLnBhcmVudC5rZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnMoZGF0YS5kaUNvbnRhaW5lciwgdGhpcy5kYXRhLCB0aGlzLnBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc29sdmVkO1xuXG4gICAgICAgICAgICBpZiAoIShyZXNvbHZlZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE9ic2VydmFibGUoKG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgby5uZXh0KHJlc29sdmVkKTtcbiAgICAgICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkT3B0aW9ucyA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZ1RvQm9vbGVhbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gJ3RydWUnXG4gICAgfVxuXG4gICAgdXBkYXRlUGFyZW50VmFsdWUoJGV2ZW50LCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCA/ICRldmVudC50YXJnZXQgOiAkZXZlbnQuc291cmNlO1xuICAgICAgICBsZXQgaXNDaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEucmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRDb250cm9scyA9IHRoaXMucGFyZW50LmNvbnRyb2wuY29udHJvbHM7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmFkZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRyb2xzW3BhcmVudENvbnRyb2xzLmxlbmd0aCAtIDFdLnNldFZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgcGFyZW50Q29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb250cm9sc1tpXS52YWx1ZSA9PSBvcHRpb24udmFsdWUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkgdGhpcy5kYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSh0YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0eXBlb2YoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpbnB1dDtcbiAgICB9XG5cbiAgICBzbHVnaWZ5U3RyaW5nKGlucHV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlucHV0IGluIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXBbaW5wdXRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXBbaW5wdXRdID0gaW5wdXRcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xccy1dL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxzXy1dKy9nLCAnLScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2x1Z2lmeSBpbnB1dCwgaW5wdXQgaXMgdW5kZWZpbmVkLicpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=