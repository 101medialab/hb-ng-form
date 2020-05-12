var HbFormWidgetComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
let HbFormWidgetComponent = HbFormWidgetComponent_1 = class HbFormWidgetComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngAfterViewInit() {
        if (!this.data.hide && this.data.useComponent) {
            const factory = this.resolver.resolveComponentFactory(this.data.useComponent);
            const ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.instance.parentTemplateObject = this.parent;
            ref.changeDetectorRef.detectChanges();
        }
    }
    ngOnInit() {
        let data = this.data;
        let result = null;
        let resolved = null;
        const options = data.options;
        if (typeof options === 'function') {
            resolved = options(data.diContainer, this.data, this.parent);
        }
        else if (!(result instanceof Observable)) {
            resolved = options;
        }
        result = resolved;
        if (!(resolved instanceof Observable)) {
            result = new Observable((o) => {
                o.next(resolved);
                o.complete();
            });
        }
        this.resolvedOptions = result;
    }
    stringToBoolean(val) {
        return val === 'true';
    }
    updateParentValue($event, option) {
        const target = $event.target ? $event.target : $event.source;
        let isChecked = target.checked;
        switch (this.data.renderType) {
            case 'checkbox':
                let parentControls = this.parent.control.controls;
                if (isChecked) {
                    this.parent.add();
                    parentControls[parentControls.length - 1].setValue(option.value);
                }
                else {
                    let i = 0;
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
    }
    typeof(input) {
        return typeof input;
    }
    slugifyString(input) {
        if (input in HbFormWidgetComponent_1.slugMap) {
            return HbFormWidgetComponent_1.slugMap[input];
        }
        return HbFormWidgetComponent_1.slugMap[input] = input
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
};
HbFormWidgetComponent.slugMap = [];
HbFormWidgetComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    ViewChild("customBlock", { read: ViewContainerRef, static: true }),
    __metadata("design:type", Object)
], HbFormWidgetComponent.prototype, "customBlock", void 0);
HbFormWidgetComponent = HbFormWidgetComponent_1 = __decorate([
    Component({
        selector: 'hb-form-widget',
        template: "<div *ngIf=\"\n        data.control != undefined &&\n        (\n            data.groupType == undefined ||\n            parent.arrayType == 'enum'\n        ) &&\n        key != 'setValue' &&\n        (\n            data.hide == undefined ||\n            !data.hide\n        )\n    \"\n    [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n    class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-container *ngIf=\"!data.useComponent; else customBlock\">\n        <label *ngIf=\"data.label\" for=\"hb-form-widget_{{ key ? key : data.slug }}-input\">{{ data.label }}</label>\n\n        <ng-container *ngIf=\"parent?.arrayType === 'enum'\">\n            <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                <ng-container *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\"\n                     class=\"hb-form-widget-input-field\">\n                    <input [attr.id]=\"(key ? key : data.slug) + '-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value)\"\n                           [placeholder]=\"data.label !== undefined ? data.label : null\"\n                           [formControl]=\"data.control\" />\n                </ng-container>\n\n                <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n<!--                        Autocomplete is not well supported in hb-form-widget-->\n\n<!--                        <div *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\" -->\n<!--                             class=\"hb-form-widget-input-field autocomplete\">-->\n<!--                            <input [attr.id]=\"key ? key : data.slug + '-input'\"-->\n<!--                                   [type]=\"data.renderType ? data.renderType : 'text'\"-->\n<!--                                   (change)=\"data.control.patchValue($event.target.value)\"-->\n<!--                                   [placeholder]=\"data.label !== undefined ? data.label : data.option.name\"-->\n<!--                                   [formControl]=\"data.control\" />-->\n\n<!--                            <autocomplete #auto=\"matAutocomplete\">-->\n<!--                                <option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">-->\n<!--                                    <span>{{ option.label }}</span>-->\n<!--                                </option>-->\n<!--                            </autocomplete>-->\n\n<!--                            <span class=\"hints\" *ngIf=\"data?.hints\">-->\n<!--                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}-->\n<!--                            </span>-->\n<!--                        </div>-->\n                </ng-template>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.renderType == 'textarea'\">\n                <textarea rows=\"5\" [formControl]=\"data.control\"\n                          [attr.id]=\"key ? key : data.slug + '-input'\">\n                </textarea>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n            <ng-container *ngIf=\"data.renderType != 'select'; else selectBlock\">\n                <ng-container *ngFor=\"let option of resolvedOptions | async\">\n                    <label for=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\">{{ option.name }}</label>\n\n                    <ng-container *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\">\n                        <input type=\"radio\"\n                               id=\"hb-form-widget_{{ key ? key : data.slug }}-input__option.name\"\n                               class=\"example-radio-button\"\n                               [value]=\"option.value\"\n                               [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                               (change)=\"updateParentValue($event, option)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </ng-container>\n\n                    <ng-template #checkBoxBlock>\n                        <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckBoxBlock\">\n                            <input type=\"checkbox\"\n                                   [value]=\"option.value\"\n                                   [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                                   (change)=\"updateParentValue($event, option)\"\n                                   [formControl]=\"data.control\"/>\n                        </ng-container>\n\n                        <ng-template #booleanCheckBoxBlock>\n                            <input type=\"checkbox\"\n                                   [checked]=\"data.control.value ? true : null\"\n                                   (change)=\"data.control.patchValue($event.source.checked)\"/>\n                        </ng-template>\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n\n            <ng-template #selectBlock>\n                <select *ngIf=\"data.renderType == 'select'\"\n                        [formControl]=\"data.control\"\n                        [attr.placeholder]=\"data.label != undefined ? data.label : null\"\n                >\n                    <option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </ng-template>\n        </ng-container>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n        </span>\n    </ng-container>\n\n    <ng-template #customBlock></ng-template>\n</div>\n",
        inputs: ['data', 'key', 'parent']
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], HbFormWidgetComponent);
export { HbFormWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPbEMsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXFCO0lBUzlCLFlBQ1ksUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFFOUMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQ3pCLENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVoRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLElB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QUFFLENBQUM7O1lBS0Usd0JBQXdCOztBQUhzQjtJQUFuRSxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MERBQWE7QUFQdkUscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsdTFNQUF3QztRQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztLQUNwQyxDQUFDO3FDQVd3Qix3QkFBd0I7R0FWckMscUJBQXFCLENBc0dqQztTQXRHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoYi1mb3JtLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnZGF0YScsICdrZXknLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcmVzb2x2ZWRPcHRpb25zO1xuICAgIHB1YmxpYyBrZXk7XG4gICAgcHVibGljIGRhdGE7XG4gICAgcHVibGljIHBhcmVudDtcbiAgICBzdGF0aWMgc2x1Z01hcCA9IFtdO1xuXG4gICAgQFZpZXdDaGlsZChcImN1c3RvbUJsb2NrXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGlkZSAmJiB0aGlzLmRhdGEudXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlQ29tcG9uZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5jdXN0b21CbG9jay5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UudGVtcGxhdGVPYmplY3QgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UucGFyZW50VGVtcGxhdGVPYmplY3QgPSB0aGlzLnBhcmVudDtcblxuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gbnVsbDtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRhdGEub3B0aW9ucztcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucyhkYXRhLmRpQ29udGFpbmVyLCB0aGlzLmRhdGEsIHRoaXMucGFyZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICghKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXNvbHZlZDtcblxuICAgICAgICBpZiAoIShyZXNvbHZlZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZSgobykgPT4ge1xuICAgICAgICAgICAgICAgIG8ubmV4dChyZXNvbHZlZCk7XG4gICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVkT3B0aW9ucyA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdHJpbmdUb0Jvb2xlYW4odmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJ1xuICAgIH1cblxuICAgIHVwZGF0ZVBhcmVudFZhbHVlKCRldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgPyAkZXZlbnQudGFyZ2V0IDogJGV2ZW50LnNvdXJjZTtcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Q29udHJvbHMgPSB0aGlzLnBhcmVudC5jb250cm9sLmNvbnRyb2xzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hZGQoKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250cm9sc1twYXJlbnRDb250cm9scy5sZW5ndGggLSAxXS5zZXRWYWx1ZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IHBhcmVudENvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29udHJvbHNbaV0udmFsdWUgPT0gb3B0aW9uLnZhbHVlKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZShpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHRoaXMuZGF0YS5jb250cm9sLnBhdGNoVmFsdWUodGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHlwZW9mKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQ7XG4gICAgfVxuXG4gICAgc2x1Z2lmeVN0cmluZyhpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcCkge1xuICAgICAgICAgICAgcmV0dXJuIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwW2lucHV0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF0gPSBpbnB1dFxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xccy1dL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNfLV0rL2csICctJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csICcnKTtcbiAgICB9XG59XG4iXX0=