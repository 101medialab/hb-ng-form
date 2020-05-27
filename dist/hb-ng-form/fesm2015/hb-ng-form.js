import 'reflect-metadata';
import { __decorate, __metadata } from 'tslib';
import { ComponentFactoryResolver, ViewChild, ViewContainerRef, Component, Pipe, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

var HbFormWidgetComponent_1;
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

let HbFormArrayComponent = class HbFormArrayComponent extends HbFormWidgetComponent {
};
HbFormArrayComponent = __decorate([
    Component({
        selector: 'hb-form-array',
        template: "<div [attr.id]=\"data.id\"\n     class=\"hb-form-array {{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}\"\n     *ngIf=\"\n         data.control != undefined &&\n         key != 'setValue' && (\n             data.hide == undefined ||\n             !data.hide\n         )\n     \"\n     [formGroup]=\"data.control\"\n     [ngClass]=\"{\n         'hb-form-with-hints' : data.hints\n     }\"\n>\n    <header>\n        <h2 *ngIf=\"!data.hideHeader\">{{ data.label }}</h2>\n\n        <ng-container *ngIf=\"data.childrenConfigName.length > 0\">\n            <ng-container *ngIf=\"!data.expandOptions; else expandedArrayPushOptions\">\n                <select class=\"hb-form-array-config-switch\"\n                        [(ngModel)]=\"data.useConfig\" [ngModelOptions]=\"{standalone: true}\">\n                    <option *ngFor=\"let configName of data.childrenConfigName; let i = index\" [value]=\"i\">\n                        {{ configName }}\n                    </option>\n                </select>\n\n                <button class=\"btn btn-default hb-form-add-btn\" type=\"button\" *ngIf=\"data.arrayType != 'enum'\" (click)=\"data.add()\">Add</button>\n            </ng-container>\n\n            <ng-template #expandedArrayPushOptions>\n                <button type=\"button\"\n                        class=\"btn btn-default hb-form-add-btn hb-form-add-btn-expanded-{{ i }}\"\n                        *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                        (click)=\"data.useConfig = i; data.add();\">\n                    &#x253C; {{ configName }}\n                </button>\n            </ng-template>\n        </ng-container>\n    </header>\n\n    <div [attr.id]=\"data.id ? (data.id + '_' + i) : null\"\n         class=\"hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}\"\n         *ngFor=\"let cell of (data.arrayType != 'enum' ? data.children : resolvedOptions | async); let i=index\">\n        <hb-form-widget *ngIf=\"data.arrayType == 'enum'\"\n                        [data]=\"cell\"\n                        [key]=\"i\"\n                        [parent]=\"data\"></hb-form-widget>\n\n        <ng-container *ngIf=\"data.arrayType != 'enum'\">\n            <div *ngFor=\"let each of cell.children | mapToIterable;\"\n                 class=\"panel panel-default hb-form-array-cell-attr_{{ each.key }}\">\n                <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                    <hb-form-widget *ngIf=\"each.val.groupType == undefined\"\n                                    [data]=\"each.val\"\n                                    [key]=\"i\"\n                                    [parent]=\"data\"></hb-form-widget>\n                    <hb-form-array *ngIf=\"each.val?.groupType == 'array'\"\n                                   [data]=\"each.val\"\n                                   [key]=\"each.key\"\n                                   [parent]=\"data\"></hb-form-array>\n                    <hb-form-object *ngIf=\"each.val?.groupType == 'object'\"\n                                    [data]=\"each.val\"\n                                    [key]=\"each.key\"\n                                    [parent]=\"data\"></hb-form-object>\n                </ng-container>\n            </div>\n        </ng-container>\n\n        <button class=\"btn btn-default hb-form-remove-btn\"\n                type=\"button\"\n                *ngIf=\"data.arrayType != 'enum'\"\n                (click)=\"data.remove(i)\">\n            &#x2715;\n        </button>\n    </div>\n\n    <div class=\"hints\" *ngIf=\"data?.hints\">\n        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n    </div>\n</div>\n",
        inputs: ['key', 'data', 'parent']
    })
], HbFormArrayComponent);

let HbFormMatArrayComponent = class HbFormMatArrayComponent extends HbFormArrayComponent {
};
HbFormMatArrayComponent = __decorate([
    Component({
        selector: 'hb-mat-form-array',
        template: "<mat-card class=\"hb-form-array hb-array-type_{{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}\"\n          [attr.id]=\"data.id\"\n          *ngIf=\"\n              data.control != undefined &&\n              key != 'setValue' && (\n                  data.hide == undefined ||\n                  !data.hide\n              )\n          \"\n          [formGroup]=\"data.control\"\n          [ngClass]=\"{\n              'hb-form-with-hints' : data.hints\n          }\">\n    <mat-card-header>\n        <mat-card-title *ngIf=\"!data.hideHeader\">\n            <h2 *ngIf=\"data.label != ''\">{{ data.label }}</h2>\n\n            <ng-container *ngIf=\"data.childrenConfigName.length > 0\">\n                <ng-container *ngIf=\"!data.expandOptions; else expandedArrayPushOptions\">\n                    <mat-form-field>\n                        <mat-select class=\"hb-form-array-config-switch\"\n                                    [(ngModel)]=\"data.useConfig\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                            <mat-option *ngFor=\"let configName of data.childrenConfigName; let i = index\" [value]=\"i\">\n                                {{ configName }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <button mat-raised-button\n                            type=\"button\"\n                            class=\"btn btn-default hb-form-add-btn\"\n                            *ngIf=\"data.arrayType != 'enum'\"\n                            (click)=\"data.add()\"\n                    >\n                        Add\n                    </button>\n                </ng-container>\n\n                <ng-template #expandedArrayPushOptions>\n                    <button mat-raised-button\n                            type=\"button\"\n                            *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                            (click)=\"data.useConfig = i; data.add();\">\n                        &#x253C; {{ configName }}\n                    </button>\n                </ng-template>\n            </ng-container>\n        </mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n        <div [attr.id]=\"data.id + '-' + i\"\n             class=\"hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}\"\n             *ngFor=\"\n                 let cell of data.arrayType != 'enum' ?\n                     data.children : resolvedOptions | async\n                 ; let i=index\n             \">\n            <hb-mat-form-widget *ngIf=\"data.arrayType == 'enum'\" [data]=\"cell\" [key]=\"i\" [parent]=\"data\"></hb-mat-form-widget>\n\n            <ng-container *ngIf=\"data.arrayType != 'enum'\">\n                <div *ngFor=\"let each of cell.children | mapToIterable;\"\n                     class=\"hb-form-array-cell-attr_{{ each.key }}\">\n                    <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                        <hb-mat-form-widget *ngIf=\"each.val.groupType == undefined\" [data]=\"each.val\" [key]=\"i\" [parent]=\"data\">\n                        </hb-mat-form-widget>\n                        <hb-mat-form-array *ngIf=\"each.val?.groupType == 'array'\" [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\">\n                        </hb-mat-form-array>\n                        <hb-mat-form-object *ngIf=\"each.val?.groupType == 'object'\" [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\">\n                        </hb-mat-form-object>\n                    </ng-container>\n                </div>\n            </ng-container>\n\n            <button mat-mini-fab color=\"primary\" class=\"hb-form-remove-btn\" type=\"button\"\n                    *ngIf=\"data.arrayType != 'enum'\"\n                    (click)=\"data.remove(i)\">\n                &#x2715;\n            </button>\n        </div>\n\n        <strong class=\"mat-hint\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </strong>\n    </mat-card-content>\n</mat-card>\n",
        inputs: ['key', 'data', 'parent']
    })
], HbFormMatArrayComponent);

let HbFormObjectComponent = class HbFormObjectComponent extends HbFormWidgetComponent {
};
HbFormObjectComponent = __decorate([
    Component({
        selector: 'hb-form-object',
        template: "<div *ngIf=\"\n        data.control != undefined &&\n        key != 'setValue' && (\n            data.hide == undefined ||\n            !data.hide\n        )\n    \"\n     [formGroup]=\"data.control\"\n     [ngClass]=\"{\n         'error': !data.control.valid,\n         'hb-form-with-hints' : data.hints\n     }\"\n     class=\"form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}\"\n>\n    <h2 *ngIf=\"typeof(data.label) == 'string' && data.label != '' && !data.hideHeader\">\n        {{ data.label }}\n    </h2>\n\n    <div class=\"hb-form-object-content\">\n        <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n            <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                <hb-form-widget\n                    *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-widget>\n                <hb-form-array\n                    *ngIf=\"each.val?.groupType == 'array'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [formArrayName]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-array>\n                <hb-form-object\n                    *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-object>\n            </ng-container>\n        </div>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </span>\n    </div>\n</div>\n",
        inputs: ['id', 'key', 'data', 'parent']
    })
], HbFormObjectComponent);

let HbFormMatObjectComponent = class HbFormMatObjectComponent extends HbFormObjectComponent {
};
HbFormMatObjectComponent = __decorate([
    Component({
        selector: 'hb-mat-form-object',
        template: "<mat-card *ngIf=\"\n    data.control != undefined &&\n    key != 'setValue' && (\n        data.hide == undefined ||\n        !data.hide\n    )\"\n          [formGroup]=\"data.control\"\n          [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n          class=\"form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}\">\n    <mat-card-header *ngIf=\"typeof(data.label) == 'string' && data.label != '' && !data.hideHeader\">\n        <mat-card-title>\n            {{ data.label }}\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"hb-form-object-content\">\n        <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n            <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                <hb-mat-form-widget\n                        *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-widget>\n                <hb-mat-form-array\n                        *ngIf=\"each.val?.groupType == 'array'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [formArrayName]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-array>\n                <hb-mat-form-object\n                        *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-object>\n            </ng-container>\n        </div>\n        <strong class=\"mat-hint\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </strong>\n    </mat-card-content>\n</mat-card>\n",
        inputs: ['id', 'key', 'data', 'parent']
    })
], HbFormMatObjectComponent);

let HbFormMatWidgetComponent = class HbFormMatWidgetComponent extends HbFormWidgetComponent {
    ngOnInit() {
        super.ngOnInit();
        if (this.parent.arrayType == 'enum' &&
            this.parent.control.value.indexOf(this.data.options[0].value) > -1) {
            this.data.control.setValue(this.data.options[0].value);
        }
    }
};
HbFormMatWidgetComponent = __decorate([
    Component({
        selector: 'hb-mat-form-widget',
        template: "<div *ngIf=\"\n         data.control != undefined &&\n         (\n             data.groupType == undefined ||\n             parent.arrayType == 'enum'\n         ) &&\n         key != 'setValue' &&\n         (\n             data.hide == undefined ||\n             !data.hide\n         )\n     \"\n     [ngClass]=\"{\n         'error': !data.control.valid,\n         'hb-form-with-hints' : data.hints\n     }\"\n     class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-template #customBlock></ng-template>\n\n    <ng-container *ngIf=\"\n        !data.useComponent &&\n        parent?.arrayType !== 'enum'\n    \">\n        <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n            <mat-form-field *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\" class=\"hb-form-widget-input-field\">\n                <div class=\"form-field-prefix\"\n                     matPrefix\n                     *ngIf=\"data?.matExtra?.matPrefix\"\n                     [innerHtml]=\"data.matExtra.matPrefix\"\n                ></div>\n\n                <input matInput\n                       [attr.id]=\"(key ? key : data.slug) + '-input'\"\n                       [type]=\"data.renderType ? data.renderType : 'text'\"\n                       (change)=\"data.control.patchValue($event.target.value)\"\n                       [placeholder]=\"data.label !== undefined ? data.label : null\"\n                       [formControl]=\"data.control\" />\n\n                <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                    <strong>\n                        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                    </strong>\n                </mat-hint>\n\n                <div class=\"form-field-suffix\"\n                     matSuffix\n                     *ngIf=\"data?.matExtra?.matSuffix\"\n                     [innerHtml]=\"data.matExtra.matSuffix\"></div>\n            </mat-form-field>\n\n            <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n                <mat-form-field *ngIf=\"data.autocomplete.renderType != 'custom';\">\n<!--                  else autocompleteCustomizeBlock-->\n                    <input matInput\n                           [attr.id]=\"key ? key : data.slug + '-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value);\"\n                           placeholder=\"{{ data.label !== undefined ? data.label : data.option.name }}\"\n                           [formControl]=\"data.control\"\n                           [matAutocomplete]=\"auto\" />\n\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">\n                            <span>{{ option.label }}</span>\n                        </mat-option>\n                    </mat-autocomplete>\n\n                    <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                        <strong>\n                            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                        </strong>\n                    </mat-hint>\n                </mat-form-field>\n            </ng-template>\n        </ng-container>\n\n        <mat-form-field *ngIf=\"data.renderType === 'textarea'\">\n            <textarea matInput rows=\"5\" [formControl]=\"data.control\"\n                      [placeholder]=\"data.label ? data.label : data.option.name\"\n                      [attr.id]=\"key ? key : data.slug + '-input'\">\n            </textarea>\n\n            <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                <strong>\n                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                </strong>\n            </mat-hint>\n        </mat-form-field>\n    </ng-container>\n\n    <ng-container *ngIf=\"!data.useComponent && ['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n        <div *ngIf=\"data.renderType != 'select'; else selectBlock\">\n            <mat-radio-group *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\" [formControl]=\"data.control\">\n                <mat-radio-button\n                    class=\"example-radio-button\"\n                    *ngFor=\"let option of data.options\"\n                    [value]=\"option.value\"\n                    [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                    [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                    (change)=\"updateParentValue($event, option)\"\n                >\n                    {{ option.name }}\n                </mat-radio-button>\n            </mat-radio-group>\n\n            <ng-template #checkBoxBlock>\n                <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckboxBlock\">\n                    <mat-checkbox\n                        *ngFor=\"let option of data.options\"\n                        [value]=\"option.value\"\n                        [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                        (change)=\"updateParentValue($event, option)\"\n                        [formControl]=\"data.control\"\n                    >\n                        {{ option.name }}\n                    </mat-checkbox>\n                </ng-container>\n\n                <ng-template #booleanCheckboxBlock>\n                    <label>{{ data.label }}</label>\n                    <mat-checkbox [checked]=\"data.control.value ? true : null\"\n                                  (change)=\"data.control.patchValue($event.source.checked)\">\n                    </mat-checkbox>\n                </ng-template>\n            </ng-template>\n        </div>\n\n        <ng-template #selectBlock>\n            <mat-form-field>\n                <mat-select\n                    *ngIf=\"data.renderType == 'select'\"\n                    [formControl]=\"data.control\"\n                    [placeholder]=\"data.label != undefined ? data.label : null\"\n                >\n                    <mat-option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </mat-option>\n                </mat-select>\n\n                <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                    <strong>\n                        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                    </strong>\n                </mat-hint>\n            </mat-form-field>\n        </ng-template>\n    </ng-container>\n</div>\n",
        inputs: ['data', 'key', 'parent']
    })
], HbFormMatWidgetComponent);

class TypeMeta {
    constructor(_type) {
        this._type = _type;
    }
    get type() {
        return this._type;
    }
}
class PrimitiveTypeMeta extends TypeMeta {
    constructor(_value) {
        super(([
            'string',
            'number',
            'boolean'
        ].indexOf(typeof _value) > -1 ? typeof _value : 'any'));
        this._value = _value;
    }
    get value() {
        return this._value;
    }
}
class NonPrimitiveTypeMeta extends TypeMeta {
    constructor(type, _mapping = null, // All attributes should be type of ExtractorResultType
    _value = null) {
        super(type);
        this._mapping = _mapping;
        this._value = _value;
    }
    get mapping() {
        return this._mapping;
    }
    get value() {
        return this._value;
    }
}
const OnOATResolvedSymbol = 'OnOATResolved';
function OnOATResolved(cb) {
    return Reflect.metadata(OnOATResolvedSymbol, cb);
}
class ObjectAttributeTypeExtractor {
    static generateMapping(input, options = {}) {
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        let mapping = {};
        let result = null;
        // input is an array, analyze the first cell only
        if (input instanceof Array) {
            mapping = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(input[0], options));
        }
        else {
            // Analyze attributes inside input object
            for (let key in input) {
                if (typeof input[key] !== 'function') {
                    let resolvedMeta = {};
                    // Array or Object
                    if (typeof input[key] === 'object') {
                        resolvedMeta = Extractor.generateObjectTypeMapping(input, key, options);
                        // Any primitive type
                    }
                    else if (typeof input[key] !== 'function') {
                        resolvedMeta = new PrimitiveTypeMeta(input[key]);
                    }
                    if (Reflect.hasMetadata(OnOATResolvedSymbol, input, key)) {
                        Reflect.getMetadata(OnOATResolvedSymbol, input, key)(input, key, resolvedMeta);
                    }
                    else if (typeof options.onResolved === 'function') {
                        options.onResolved(input, key, resolvedMeta);
                    }
                    // Finished, set resolved attribute metadata to result
                    mapping[Extractor.resolveAttributeKey(options, key, input)] = resolvedMeta;
                }
            }
        }
        if (typeof input === 'object') {
            if (!(input instanceof Date) && !(input instanceof Array)) {
                result = new NonPrimitiveTypeMeta('object', mapping);
            }
            else {
                result = mapping;
            }
        }
        else {
            result = { mapping };
        }
        if (Reflect.hasMetadata(OnOATResolvedSymbol, input.constructor)) {
            Reflect.getMetadata(OnOATResolvedSymbol, input.constructor)(input.constructor, null, result);
        }
        else if (typeof options.onResolved === 'function') {
            options.onResolved(input, null, result);
        }
        return result;
    }
    static generateObjectTypeMapping(object, key, options) {
        let resolvedMeta = null;
        // Mark type as any if value is null
        if (object[key] === null) {
            resolvedMeta = new PrimitiveTypeMeta(null);
            // For Array
        }
        else if (object[key] instanceof Array) {
            let target = object[key];
            // For Primitive Array
            if (typeof target[0] !== 'object') {
                resolvedMeta = new NonPrimitiveTypeMeta('array', new PrimitiveTypeMeta(target[0]));
                // For Object Array
            }
            else {
                resolvedMeta = Extractor.generateMapping(target, options);
            }
            // For Date
        }
        else if (object[key] instanceof Date) {
            resolvedMeta = new NonPrimitiveTypeMeta('date', null, object[key]);
            // For Object
        }
        else {
            resolvedMeta = Extractor.generateMapping(object[key], options);
        }
        return resolvedMeta;
    }
    static resolveAttributeKey(options, key, object) {
        let setterKey = key;
        // if set function exists, rename _attr to attr
        if (options.stripUnderscore && key.charAt(0) === '_') {
            let trimmedKey = key.substr(1, key.length);
            if (trimmedKey in object) {
                setterKey = trimmedKey;
            }
        }
        // Some serializer serialize data with snake_case
        // but JS Entity Classes name attributes with camelCase
        if (options.keyNamingStrategy === 'snake_case') {
            setterKey = Extractor.convertStringToSnakeCase(setterKey);
        }
        return setterKey;
    }
    // For naming convention changing. Not really related to this extractor
    static fixNamingConvention(data, options) {
        let result = null;
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.fixNamingConvention(obj, options));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (let key in data) {
                if (!options.stripUnderscore || key.charAt(0) !== '_') {
                    let finalKey = key;
                    if (options.keyNamingStrategy === 'snake_case') {
                        finalKey = Extractor.convertStringToSnakeCase(key);
                    }
                    if (typeof data[key] === 'object') {
                        result[finalKey] = Extractor.fixNamingConvention(data[key], options);
                    }
                    else {
                        result[finalKey] = data[key];
                    }
                }
            }
        }
        return result;
    }
    // For JSON editor only. Should be extracted.
    static convertDataToString(data, callbacks = {}) {
        let result = null;
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.convertDataToString(obj));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (let key in data) {
                if (typeof data[key] === 'object') {
                    if (data[key] instanceof Date) {
                        result[key] =
                            'date' in callbacks &&
                                callbacks.date instanceof Function ?
                                callbacks.date(data[key]) : data[key].yyyymmdd('-');
                    }
                    else {
                        result[key] = Extractor.convertDataToString(data[key]);
                    }
                }
                else if (typeof data[key] !== 'function') {
                    result[key] = data[key];
                }
            }
        }
        return result;
    }
    static convertStringToSnakeCase(value) {
        const result = value.replace(/([A-Z]+)/g, "_$1").toLowerCase();
        return result;
    }
}
let Extractor = ObjectAttributeTypeExtractor;

const FormConfigSymbol = Symbol('FormConfig');
function FormConfig(options) {
    let slug = null;
    if (options.label) {
        slug = options.label.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    return Reflect.metadata(FormConfigSymbol, Object.assign({
        hiderHeader: false,
        slug,
    }, options));
}

const ArrayOptionsSymbol = Symbol('IArrayOptionsFormConfig');
function ArrayOptions(options) {
    return Reflect.metadata(ArrayOptionsSymbol, Object.assign({}, options));
}

const ObjectOptionsSymbol = Symbol('IObjectOptionsFormConfig');
function ObjectOptions(options) {
    return Reflect.metadata(ObjectOptionsSymbol, Object.assign({}, options));
}

const AutocompleteSymbol = Symbol('IAutocompleteOptions');
function AutocompleteOptions(options) {
    return Reflect.metadata(AutocompleteSymbol, {
        autocomplete: Object.assign({}, options)
    });
}

const ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');
function ChoiceOptions(options) {
    return Reflect.metadata(ChoiceOptionsSymbol, Object.assign({
        maxChoices: 1
    }, {
        renderType: 'select'
    }, options));
}

class OptionWrapper {
    constructor(option) {
        this.label = '';
        this.control = new FormControl();
        this.renderType = 'checkbox';
        this.options = [];
        this.options.push(option);
    }
}
const MultipleChoicesOptionsSymbol = Symbol('IMultipleChoicesOptionsFormConfig');
function MultipleChoicesOptions(options) {
    return Reflect.metadata(MultipleChoicesOptionsSymbol, Object.assign({
        arrayType: 'enum'
    }, {
        maxChoices: null,
    }, options));
}

const FlexibleObjectArraySymbol = Symbol('IFlexibleObjectArrayFormConfig');
function FlexibleObjectArray(options) {
    return Reflect.metadata(FlexibleObjectArraySymbol, Object.assign({
        expandOptions: false,
    }, options, {
        arrayType: 'object',
    }));
}

const MatExtraOptionsSymbol = Symbol('IMatExtraOptionsFormConfig');
function MatExtraOptions(options) {
    return Reflect.metadata(MatExtraOptionsSymbol, Object.assign({}, options));
}

function onOATResolved(target, key, resolved) {
    if (!resolved.formFactory) {
        resolved.formFactory = {};
        [
            FormConfigSymbol,
            ArrayOptionsSymbol,
            ObjectOptionsSymbol,
            ChoiceOptionsSymbol,
            MultipleChoicesOptionsSymbol,
            FlexibleObjectArraySymbol,
            AutocompleteSymbol,
            MatExtraOptionsSymbol
        ].forEach((eachSymbol) => {
            let getMetadataArgs = [eachSymbol, target];
            if (key) {
                getMetadataArgs.push(key);
            }
            if (Reflect.hasMetadata.apply(Reflect, getMetadataArgs)) {
                resolved.formFactory = Object.assign({}, resolved.formFactory, Reflect.getMetadata.apply(Reflect, getMetadataArgs));
            }
        });
    }
}
function SetupConfig() {
    return OnOATResolved(onOATResolved);
}

class Ng2FormFactory {
    static generateFormGroupByObject(formBuilder, object, resolveTypeAny = null, options = {}) {
        return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, ObjectAttributeTypeExtractor.generateMapping(object, options), resolveTypeAny);
    }
    static generateLabel(key) {
        const fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');
        return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    }
    static generateFormGroupByOATMapping(formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
    resolveTypeAny = null, resolveTypeUndefined = null) {
        let result = {
            ngFormControl: {},
            templateConfig: {},
        };
        const isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
        let attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;
        for (let key in attrMapping) {
            // TODO: Skip attributes should be configurable
            if (['id'].indexOf(key) > -1)
                continue;
            let resolved = null;
            let currentTemplateConfig = null;
            let current = attrMapping[key];
            // Object or Array
            if (['object', 'array'].indexOf(current._type) > -1) {
                if (current._type === 'array') {
                    resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                }
                else {
                    // Handle Object
                    let child = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)();
                    resolved = {
                        groupType: 'object',
                        control: child.ngFormControl instanceof FormGroup ?
                            child.ngFormControl : new FormGroup(child.ngFormControl, Ng2FormFactory.resolveFormValidators(child).validators),
                        children: child.templateConfig
                    };
                }
            }
            // Primitive type and date
            else if (current._type !== 'any') {
                if (current !== 'undefined' && typeof current._type != 'undefined') {
                    let { validators, valueNotEmpty } = Ng2FormFactory.resolveFormValidators(current);
                    currentTemplateConfig = {
                        type: current._type,
                        control: new FormControl(valueNotEmpty ? current._value : '', validators)
                    };
                }
                else {
                    resolved = resolveTypeUndefined ? resolveTypeUndefined(current, key) : null; // Resolve as null first
                }
            }
            // Last case: Null value => any
            else {
                resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
            }
            // If resolved is still null, set it to default
            if (!currentTemplateConfig && !resolved) {
                let { validators } = Ng2FormFactory.resolveFormValidators(current);
                resolved = {
                    type: 'string',
                    renderType: 'text',
                    control: new FormControl('', validators)
                };
            }
            // FIXME: this checking might be redundant
            if (resolved) {
                currentTemplateConfig = resolved;
            }
            currentTemplateConfig.label = Ng2FormFactory.generateLabel(key);
            currentTemplateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(currentTemplateConfig);
            Ng2FormFactory.resolveTemplateConfigByType(current, currentTemplateConfig);
            result.ngFormControl[key] = currentTemplateConfig.control;
            result.templateConfig[key] = currentTemplateConfig;
        }
        result.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(result.templateConfig);
        if (isNonPrimitiveType) {
            result.templateConfig = {
                groupType: attributeMappingObject.type,
                children: result.templateConfig
            };
            Ng2FormFactory.setTemplatePreset(attributeMappingObject, result.templateConfig);
        }
        return result;
    }
    static resolveFormValidators(current) {
        let validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = [undefined, null].indexOf(current._value) === -1;
        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
        if (valueNotEmpty && validators.length === 0)
            validators.push(Validators.required);
        return { validators, valueNotEmpty };
    }
    static prepareAndCreateChildTemplateConfig(currentInput, key, formBuilder, isRaw = false) {
        const lambda = function () {
            let current = null;
            if (isRaw) {
                // Mock an array type with targeted Prototype
                current = new NonPrimitiveTypeMeta('array', ObjectAttributeTypeExtractor.generateMapping(new currentInput()));
            }
            else {
                current = currentInput;
            }
            let schemaTemp = null;
            if ('type' in current._mapping &&
                [
                    'any',
                    'string',
                    'boolean',
                    'number',
                    'date',
                    ''
                ].indexOf(current._mapping.type) > -1) {
                // For primitive type array
                let control = new FormControl('value' in current._mapping ? current._mapping.value : '', [Validators.required]), templateConfig = {};
                templateConfig[key] = {
                    label: Ng2FormFactory.generateLabel(key),
                    type: current._mapping.type,
                    control,
                };
                schemaTemp = {
                    ngFormControl: control,
                    templateConfig
                };
                Ng2FormFactory.resolveTemplateConfigByType(current._mapping, templateConfig[key]);
            }
            else {
                // For reference type array or object
                schemaTemp = Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, current._mapping);
            }
            schemaTemp.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(schemaTemp.templateConfig);
            if ('formFactory' in current && typeof current.formFactory.onCreate === 'function') {
                current.formFactory.onCreate(schemaTemp.templateConfig, Ng2FormFactory.diContainer);
            }
            return {
                ngFormControl: schemaTemp.ngFormControl instanceof FormControl || current.type === 'object' ?
                    schemaTemp.ngFormControl :
                    // For reference type array
                    new FormGroup(schemaTemp.ngFormControl, Ng2FormFactory.resolveFormValidators(schemaTemp).validators),
                templateConfig: schemaTemp.templateConfig
            };
        };
        return lambda;
    }
    static handleArray(current, key, formBuilder) {
        let ngFormArrayControl = new FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
        let initChildren = [];
        let arrayType = null;
        let result = {
            groupType: 'array',
            arrayType: current.formFactory && current.formFactory.arrayType ?
                arrayType :
                'type' in current._mapping ?
                    'primitive' : 'object',
            control: ngFormArrayControl,
            children: [],
            childrenConfigName: [],
            useConfig: 0,
            add: null,
            remove: null
        };
        if (current.formFactory && current.formFactory.objectDefinitions) {
            let i = 0;
            current.formFactory.objectDefinitions.forEach(function (each) {
                initChildren[i] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                result.childrenConfigName[i] = each.label;
                i += 1;
            });
        }
        else {
            initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder);
        }
        let add = function () {
            let childConfig = initChildren[result.useConfig]();
            const control = ngFormArrayControl;
            control.push(childConfig.ngFormControl);
            result.children.push(childConfig.templateConfig);
            childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];
            if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                current.formFactory.onPush(childConfig.templateConfig, Ng2FormFactory.diContainer);
            }
        }, remove = function (i) {
            const control = ngFormArrayControl;
            control.removeAt(i);
            result.children.splice(i, 1);
        };
        result.add = add;
        result.remove = remove;
        // Ng2FormFactory.setTemplatePreset(current, result);
        return result;
    }
    static factorySetValueFunctionToTemplate(templateObject) {
        const lambda = function (rawValue) {
            for (var key in rawValue) {
                let targetTemplate = templateObject.groupType ? templateObject.children : templateObject;
                if (key in targetTemplate) {
                    if (targetTemplate[key].type) {
                        if (typeof rawValue[key] != 'object') {
                            if ('beforeSetValue' in targetTemplate[key]) {
                                targetTemplate[key].beforeSetValue(targetTemplate[key], rawValue);
                            }
                            targetTemplate[key].control.setValue(
                            // Do not cast to string or boolean value will be broken
                            rawValue[key]);
                            if ('afterSetValue' in targetTemplate[key]) {
                                targetTemplate[key].afterSetValue(targetTemplate[key], rawValue);
                            }
                        }
                        else if (typeof rawValue[key] != 'undefined' || rawValue[key] != null) { // skip if rawValue[key] is null or undefined
                            // debugger;
                            // Something goes wrong
                        }
                    }
                    else {
                        // For Object
                        if (targetTemplate[key].groupType === 'object') {
                            // Let FormGroup to handle value setting
                            targetTemplate[key].setValue(rawValue[key]);
                        }
                        else {
                            // Even this field is array, rawValue[key] can be null
                            if (!rawValue[key])
                                continue;
                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }
                            let i = 0;
                            rawValue[key].forEach(function (each) {
                                if ('resolveFlexibleObjectArrayConfig' in targetTemplate[key]) {
                                    targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
                                }
                                targetTemplate[key].add();
                                let fixForPrimitiveArray = {};
                                fixForPrimitiveArray[key] = each;
                                targetTemplate[key].children[i].setValue(targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each);
                                i++;
                            });
                        }
                    }
                }
            }
        };
        return lambda;
    }
    static resolveTemplateConfigByType(attrMapping, templateObj) {
        if (attrMapping.type === 'boolean') {
            templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
        }
        else if (attrMapping.options) {
            if (attrMapping.options.length > 2 && attrMapping.maxChoices) {
                templateObj.renderType = attrMapping.expandOptions ? (attrMapping.maxChoices == 1 ?
                    'radio' : 'checkbox') : 'select';
            }
            else {
                templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
            }
        }
        else {
            templateObj.renderType = attrMapping.type;
            if (templateObj.type === 'string')
                templateObj.renderType = 'text';
        }
        Ng2FormFactory.setTemplatePreset(attrMapping, templateObj);
    }
    // Copy setting from OAT to templateConfig object
    static setTemplatePreset(attrMapping, templateObj) {
        [
            'label',
            'type',
            'useComponent',
            'beforeSetValue',
            'afterSetValue',
            'resolveFlexibleObjectArrayConfig',
            'maxChoices',
            'expandOptions',
            'options',
            'hints',
            'hide',
            'html',
            'renderType',
            'arrayType',
            'autocomplete',
            'matExtra',
        ].forEach(function (each) {
            if (attrMapping.formFactory && each in attrMapping.formFactory) {
                templateObj[each] = attrMapping.formFactory[each];
            }
        });
        templateObj.diContainer = Ng2FormFactory.diContainer;
    }
}
Ng2FormFactory.diContainer = new Map();

let MapToIterable = class MapToIterable {
    transform(object) {
        let result = [];
        for (let key of Object.keys(object)) {
            if (object.hasOwnProperty(key)) {
                result.push({ key, val: object[key] });
            }
        }
        return result;
    }
};
MapToIterable = __decorate([
    Pipe({
        name: 'mapToIterable'
    })
], MapToIterable);

const directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];
let HbFormModule = class HbFormModule {
};
HbFormModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            // Material Design
            BrowserAnimationsModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatExpansionModule,
            MatInputModule,
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule
        ],
        declarations: directivesAndPipes,
        exports: [
            BrowserAnimationsModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatExpansionModule,
            MatInputModule,
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule,
            ...directivesAndPipes,
        ]
    })
], HbFormModule);

/*
 * Public API Surface of hb-ng-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayOptions, ArrayOptionsSymbol, AutocompleteOptions, AutocompleteSymbol, ChoiceOptions, ChoiceOptionsSymbol, FlexibleObjectArray, FlexibleObjectArraySymbol, FormConfig, FormConfigSymbol, HbFormArrayComponent, HbFormMatArrayComponent, HbFormMatObjectComponent, HbFormMatWidgetComponent, HbFormModule, HbFormObjectComponent, HbFormWidgetComponent, MapToIterable, MatExtraOptions, MatExtraOptionsSymbol, MultipleChoicesOptions, MultipleChoicesOptionsSymbol, Ng2FormFactory, NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor, ObjectOptions, ObjectOptionsSymbol, OnOATResolved, OptionWrapper, PrimitiveTypeMeta, SetupConfig, TypeMeta, onOATResolved };
//# sourceMappingURL=hb-ng-form.js.map
