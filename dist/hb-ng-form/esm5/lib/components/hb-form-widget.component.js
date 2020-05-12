import { __decorate, __metadata } from "tslib";
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
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
            template: "<div *ngIf=\"\n        data.control != undefined &&\n        (\n            data.groupType == undefined ||\n            parent.arrayType == 'enum'\n        ) &&\n        key != 'setValue' &&\n        (\n            data.hide == undefined ||\n            !data.hide\n        )\n    \"\n    [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n    class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-container *ngIf=\"!data.useComponent; else customBlock\">\n        <label *ngIf=\"data.label\" for=\"hb-form-widget_{{ key ? key : data.slug }}-input\">{{ data.label }}</label>\n\n        <ng-container *ngIf=\"parent?.arrayType !== 'enum'\">\n            <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                <ng-container *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\"\n                     class=\"hb-form-widget-input-field\">\n                    <input [attr.id]=\"(key ? key : data.slug) + '-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value)\"\n                           [placeholder]=\"data.label !== undefined ? data.label : null\"\n                           [formControl]=\"data.control\" />\n                </ng-container>\n\n                <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n<!--                        Autocomplete is not well supported in hb-form-widget-->\n\n<!--                        <div *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\" -->\n<!--                             class=\"hb-form-widget-input-field autocomplete\">-->\n<!--                            <input [attr.id]=\"key ? key : data.slug + '-input'\"-->\n<!--                                   [type]=\"data.renderType ? data.renderType : 'text'\"-->\n<!--                                   (change)=\"data.control.patchValue($event.target.value)\"-->\n<!--                                   [placeholder]=\"data.label !== undefined ? data.label : data.option.name\"-->\n<!--                                   [formControl]=\"data.control\" />-->\n\n<!--                            <autocomplete #auto=\"matAutocomplete\">-->\n<!--                                <option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">-->\n<!--                                    <span>{{ option.label }}</span>-->\n<!--                                </option>-->\n<!--                            </autocomplete>-->\n\n<!--                            <span class=\"hints\" *ngIf=\"data?.hints\">-->\n<!--                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}-->\n<!--                            </span>-->\n<!--                        </div>-->\n                </ng-template>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.renderType == 'textarea'\">\n                <textarea rows=\"5\" [formControl]=\"data.control\"\n                          [attr.id]=\"key ? key : data.slug + '-input'\">\n                </textarea>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n            <ng-container *ngIf=\"data.renderType != 'select'; else selectBlock\">\n                <ng-container *ngFor=\"let option of resolvedOptions | async\">\n                    <label for=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\">{{ option.name }}</label>\n\n                    <ng-container *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\">\n                        <input type=\"radio\"\n                               id=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\"\n                               class=\"example-radio-button\"\n                               [value]=\"option.value\"\n                               [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                               (change)=\"updateParentValue($event, option)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </ng-container>\n\n                    <ng-template #checkBoxBlock>\n                        <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckBoxBlock\">\n                            <input type=\"checkbox\"\n                                   [value]=\"option.value\"\n                                   [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                                   (change)=\"updateParentValue($event, option)\"\n                                   [formControl]=\"data.control\"/>\n                        </ng-container>\n\n                        <ng-template #booleanCheckBoxBlock>\n                            <input type=\"checkbox\"\n                                   [checked]=\"data.control.value ? true : null\"\n                                   (change)=\"data.control.patchValue($event.target.checked)\"/>\n                        </ng-template>\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n\n            <ng-template #selectBlock>\n                <select *ngIf=\"data.renderType == 'select'\"\n                        [formControl]=\"data.control\"\n                        [attr.placeholder]=\"data.label != undefined ? data.label : null\"\n                >\n                    <option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </ng-template>\n        </ng-container>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n        </span>\n    </ng-container>\n\n    <ng-template #customBlock></ng-template>\n</div>\n",
            inputs: ['data', 'key', 'parent']
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], HbFormWidgetComponent);
    return HbFormWidgetComponent;
}());
export { HbFormWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxNQUFNLEVBQ04sd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sQztJQVNJLCtCQUNZLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBRTlDLENBQUM7OEJBWlEscUJBQXFCO0lBYzlCLCtDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQ3pCLENBQUM7WUFDRixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVoRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FB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RUFBRSxDQUFDOztnQkFLRSx3QkFBd0I7O0lBSHNCO1FBQW5FLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs4REFBYTtJQVB2RSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiw0Mk1BQXdDO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO1NBQ3BDLENBQUM7eUNBV3dCLHdCQUF3QjtPQVZyQyxxQkFBcUIsQ0FzR2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXRHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoYi1mb3JtLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnZGF0YScsICdrZXknLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcmVzb2x2ZWRPcHRpb25zO1xuICAgIHB1YmxpYyBrZXk7XG4gICAgcHVibGljIGRhdGE7XG4gICAgcHVibGljIHBhcmVudDtcbiAgICBzdGF0aWMgc2x1Z01hcCA9IFtdO1xuXG4gICAgQFZpZXdDaGlsZChcImN1c3RvbUJsb2NrXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGlkZSAmJiB0aGlzLmRhdGEudXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlQ29tcG9uZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5jdXN0b21CbG9jay5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UudGVtcGxhdGVPYmplY3QgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UucGFyZW50VGVtcGxhdGVPYmplY3QgPSB0aGlzLnBhcmVudDtcblxuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gbnVsbDtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRhdGEub3B0aW9ucztcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucyhkYXRhLmRpQ29udGFpbmVyLCB0aGlzLmRhdGEsIHRoaXMucGFyZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICghKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXNvbHZlZDtcblxuICAgICAgICBpZiAoIShyZXNvbHZlZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZSgobykgPT4ge1xuICAgICAgICAgICAgICAgIG8ubmV4dChyZXNvbHZlZCk7XG4gICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVkT3B0aW9ucyA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdHJpbmdUb0Jvb2xlYW4odmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJ1xuICAgIH1cblxuICAgIHVwZGF0ZVBhcmVudFZhbHVlKCRldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgPyAkZXZlbnQudGFyZ2V0IDogJGV2ZW50LnNvdXJjZTtcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Q29udHJvbHMgPSB0aGlzLnBhcmVudC5jb250cm9sLmNvbnRyb2xzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hZGQoKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250cm9sc1twYXJlbnRDb250cm9scy5sZW5ndGggLSAxXS5zZXRWYWx1ZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IHBhcmVudENvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29udHJvbHNbaV0udmFsdWUgPT0gb3B0aW9uLnZhbHVlKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZShpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHRoaXMuZGF0YS5jb250cm9sLnBhdGNoVmFsdWUodGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHlwZW9mKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQ7XG4gICAgfVxuXG4gICAgc2x1Z2lmeVN0cmluZyhpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcCkge1xuICAgICAgICAgICAgcmV0dXJuIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwW2lucHV0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF0gPSBpbnB1dFxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xccy1dL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNfLV0rL2csICctJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csICcnKTtcbiAgICB9XG59XG4iXX0=