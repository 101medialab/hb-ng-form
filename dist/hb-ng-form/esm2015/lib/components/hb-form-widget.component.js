var HbFormWidgetComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
let HbFormWidgetComponent = HbFormWidgetComponent_1 = class HbFormWidgetComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    log(...args) {
        console.log(...args);
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
    isOptionSelectingComponent() {
        return ['radio', 'checkbox', 'select'].indexOf(this.data.renderType) > -1;
    }
    ngOnInit() {
        if (this.isOptionSelectingComponent()) {
            let data = this.data;
            let result = null;
            let resolved = null;
            let options = [];
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
        template: "<div *ngIf=\"\n         data.control != undefined &&\n         (\n             data.groupType == undefined ||\n             parent.arrayType == 'enum'\n         ) &&\n         key != 'setValue' &&\n         (\n             data.hide == undefined ||\n             !data.hide\n         )\n    \"\n    [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n    class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-container *ngIf=\"!data.useComponent; else customBlock\">\n        <label *ngIf=\"data.label\"\n               [attr.for]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\"\n               [attr.class]=\"data?.html?.class?.label\">{{ data.label }}</label>\n\n        <ng-container *ngIf=\"parent?.arrayType !== 'enum'\">\n            <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                <div *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\"\n                     class=\"hb-form-widget-input-field\">\n                    <input [attr.id]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value)\"\n                           [placeholder]=\"data.placeholder !== undefined ? data.placeholder : ''\"\n                           [formControl]=\"data.control\" />\n                </div>\n\n                <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n<!--                        Autocomplete is not well supported in hb-form-widget-->\n\n<!--                        <div *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\" -->\n<!--                             class=\"hb-form-widget-input-field autocomplete\">-->\n<!--                            <input [attr.id]=\"key ? key : data.slug + '-input'\"-->\n<!--                                   [type]=\"data.renderType ? data.renderType : 'text'\"-->\n<!--                                   (change)=\"data.control.patchValue($event.target.value)\"-->\n<!--                                   [placeholder]=\"data.label !== undefined ? data.label : data.option.name\"-->\n<!--                                   [formControl]=\"data.control\" />-->\n\n<!--                            <autocomplete #auto=\"matAutocomplete\">-->\n<!--                                <option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">-->\n<!--                                    <span>{{ option.label }}</span>-->\n<!--                                </option>-->\n<!--                            </autocomplete>-->\n\n<!--                            <span class=\"hints\" *ngIf=\"data?.hints\">-->\n<!--                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}-->\n<!--                            </span>-->\n<!--                        </div>-->\n                </ng-template>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.renderType == 'textarea'\">\n                <textarea [rows]=\"data?.html?.textarea?.row || 5\" [formControl]=\"data.control\"\n                          [attr.id]=\"'hb-form-widget_' + (key ? key : data.slug) +'-input'\">\n                </textarea>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"isOptionSelectingComponent()\">\n\n            <ng-container *ngIf=\"data.renderType != 'select'; else selectBlock\">\n                <ng-container *ngFor=\"let option of resolvedOptions | async\">\n                    <label *ngIf=\"parent?.arrayType == 'enum' || data.renderType != 'checkbox'\"\n                           for=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\">{{ option.name }}</label>\n\n                    <ng-container *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\">\n                        <input type=\"radio\"\n                               id=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\"\n                               class=\"example-radio-button\"\n                               [value]=\"option.value\"\n                               [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                               (select)=\"parent?.arrayType == 'enum' ? updateParentValue($event, option) : data.control.patchValue($event.target.value)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </ng-container>\n\n                    <ng-template #checkBoxBlock>\n                        <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckBoxBlock\">\n                            <input type=\"checkbox\"\n                                   [value]=\"option.value\"\n                                   [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                                   (change)=\"parent?.arrayType == 'enum' ? updateParentValue($event, option) : data.control.patchValue($event.target.value)\"\n                                   [formControl]=\"data.control\"/>\n                        </ng-container>\n\n                        <ng-template #booleanCheckBoxBlock>\n                            <input type=\"checkbox\"\n                                   [checked]=\"data.control.value ? true : null\"\n                                   (change)=\"data.control.patchValue($event.target.checked)\"/>\n                        </ng-template>\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n\n            <ng-template #selectBlock>\n                <select *ngIf=\"data.renderType == 'select'\"\n                        [formControl]=\"data.control\"\n                        [attr.placeholder]=\"data.label != undefined ? data.label : ''\"\n                >\n                    <option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </ng-template>\n        </ng-container>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n        </span>\n    </ng-container>\n\n    <ng-template #customBlock></ng-template>\n</div>\n",
        inputs: ['data', 'key', 'parent']
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], HbFormWidgetComponent);
export { HbFormWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFZbEMsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXFCO0lBUzlCLFlBQ1ksUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFFOUMsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQ3pCLENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVoRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLE9BQU8s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LEVBQUUsQ0FBQzs7MERBQWE7QUFQdkUscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsdXVOQUF3QztRQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztLQUNwQyxDQUFDO3FDQVd3Qix3QkFBd0I7R0FWckMscUJBQXFCLENBeUlqQztTQXpJWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNdWx0aXBsZUNob2ljZXNPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL011bHRpcGxlQ2hvaWNlc09wdGlvbnNcIjtcbmltcG9ydCB7IElCYXNlRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL0Zvcm1Db25maWdcIjtcbmltcG9ydCB7IElBcnJheU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvQXJyYXlPcHRpb25zXCI7XG5pbXBvcnQgeyBJT2JqZWN0T3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9PYmplY3RPcHRpb25zXCI7XG5pbXBvcnQgeyBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9DaG9pY2VPcHRpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGItZm9ybS13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oYi1mb3JtLXdpZGdldC50cGwuaHRtbCcsXG4gICAgaW5wdXRzOiBbJ2RhdGEnLCAna2V5JywgJ3BhcmVudCddXG59KVxuZXhwb3J0IGNsYXNzIEhiRm9ybVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHJlc29sdmVkT3B0aW9ucztcbiAgICBwdWJsaWMga2V5O1xuICAgIHB1YmxpYyBkYXRhOiBhbnkgJiBJQmFzZUZvcm1Db25maWcgJiBJTXVsdGlwbGVDaG9pY2VzT3B0aW9uc0Zvcm1Db25maWcgJiBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyAmIElPYmplY3RPcHRpb25zRm9ybUNvbmZpZyAmIElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZztcbiAgICBwdWJsaWMgcGFyZW50O1xuICAgIHN0YXRpYyBzbHVnTWFwID0gW107XG5cbiAgICBAVmlld0NoaWxkKFwiY3VzdG9tQmxvY2tcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgY3VzdG9tQmxvY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oaWRlICYmIHRoaXMuZGF0YS51c2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51c2VDb21wb25lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLmN1c3RvbUJsb2NrLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgICAgICAgIHJlZi5pbnN0YW5jZS50ZW1wbGF0ZU9iamVjdCA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJlZi5pbnN0YW5jZS5wYXJlbnRUZW1wbGF0ZU9iamVjdCA9IHRoaXMucGFyZW50O1xuXG4gICAgICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNPcHRpb25TZWxlY3RpbmdDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3NlbGVjdCddLmluZGV4T2YodGhpcy5kYXRhLnJlbmRlclR5cGUpID4gLTE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0aW5nQ29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXNvbHZlZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbnMubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLm9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gZGF0YS5vcHRpb25zXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGRhdGEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgICAgICAgZGF0YS5yZW5kZXJUeXBlID09PSAnY2hlY2tib3gnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb3B0aW9ucyBzZXQgZm9yICcgKyBkYXRhLmtleSArICcgaW4gJyArIHRoaXMucGFyZW50LmtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucyhkYXRhLmRpQ29udGFpbmVyLCB0aGlzLmRhdGEsIHRoaXMucGFyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIShyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgIGlmICghKHJlc29sdmVkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZSgobykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvLm5leHQocmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRPcHRpb25zID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nVG9Cb29sZWFuKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSdcbiAgICB9XG5cbiAgICB1cGRhdGVQYXJlbnRWYWx1ZSgkZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0ID8gJGV2ZW50LnRhcmdldCA6ICRldmVudC5zb3VyY2U7XG4gICAgICAgIGxldCBpc0NoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbnRyb2xzID0gdGhpcy5wYXJlbnQuY29udHJvbC5jb250cm9scztcblxuICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuYWRkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udHJvbHNbcGFyZW50Q29udHJvbHMubGVuZ3RoIC0gMV0uc2V0VmFsdWUob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBwYXJlbnRDb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENvbnRyb2xzW2ldLnZhbHVlID09IG9wdGlvbi52YWx1ZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB0aGlzLmRhdGEuY29udHJvbC5wYXRjaFZhbHVlKHRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR5cGVvZihpbnB1dCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGlucHV0O1xuICAgIH1cblxuICAgIHNsdWdpZnlTdHJpbmcoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICBpZiAoaW5wdXQgaW4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXApIHtcbiAgICAgICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF0gPSBpbnB1dFxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNfLV0rL2csICctJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXi0rfC0rJC9nLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzbHVnaWZ5IGlucHV0LCBpbnB1dCBpcyB1bmRlZmluZWQuJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==