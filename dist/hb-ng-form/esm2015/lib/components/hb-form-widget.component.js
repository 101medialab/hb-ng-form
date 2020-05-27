import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["customBlock"];
function HbFormWidgetComponent_div_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("for", "hb-form-widget_" + (ctx_r4.key ? ctx_r4.key : ctx_r4.data.slug) + "-input")("class", ctx_r4.data == null ? null : ctx_r4.data.html == null ? null : ctx_r4.data.html.class == null ? null : ctx_r4.data.html.class.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "input", 10);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(5); return ctx_r13.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r10.data.renderType ? ctx_r10.data.renderType : "text")("placeholder", ctx_r10.data.placeholder !== undefined ? ctx_r10.data.placeholder : "")("formControl", ctx_r10.data.control);
    i0.ɵɵattribute("id", "hb-form-widget_" + (ctx_r10.key ? ctx_r10.key : ctx_r10.data.slug) + "-input");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template, 2, 4, "div", 6);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 7, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(3);
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.data.selectOptionsObservables == undefined)("ngIfElse", _r11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.data.autocomplete != undefined);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 11);
    i0.ɵɵtext(2, "                ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("rows", (ctx_r9.data == null ? null : ctx_r9.data.html == null ? null : ctx_r9.data.html.textarea == null ? null : ctx_r9.data.html.textarea.row) || 5)("formControl", ctx_r9.data.control);
    i0.ɵɵattribute("id", "hb-form-widget_" + (ctx_r9.key ? ctx_r9.key : ctx_r9.data.slug) + "-input");
} }
const _c1 = function () { return ["select", "radio", "checkbox", "textarea"]; };
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 4);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template, 3, 3, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(2, _c1).indexOf(ctx_r5.data.renderType) === 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.data.renderType == "textarea");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate2("for", "hb-form-widget_", ctx_r20.key ? ctx_r20.key : ctx_r20.data.slug, "-input__", ctx_r20.slugifyString(option_r19.name), "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r19.name);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 17);
    i0.ɵɵlistener("select", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template_input_select_1_listener($event) { i0.ɵɵrestoreView(_r26); const option_r19 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(5); return (ctx_r25.parent == null ? null : ctx_r25.parent.arrayType) == "enum" ? ctx_r25.updateParentValue($event, option_r19) : ctx_r25.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("id", "hb-form-widget_", ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug, "-input__", ctx_r21.slugifyString(option_r19.name), "");
    i0.ɵɵproperty("value", option_r19.value)("checked", ctx_r21.data.control.value === option_r19.value || option_r19.id === ctx_r21.data.control.value ? true : null)("formControl", ctx_r21.data.control);
    i0.ɵɵattribute("name", ctx_r21.data.renderType == "radio" ? (ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug) + "-input" : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r33); const option_r19 = i0.ɵɵnextContext(2).$implicit; const ctx_r32 = i0.ɵɵnextContext(5); return (ctx_r32.parent == null ? null : ctx_r32.parent.arrayType) == "enum" ? ctx_r32.updateParentValue($event, option_r19) : ctx_r32.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", option_r19.value)("checked", ctx_r29.data.control.value === option_r19.value || option_r19.id === ctx_r29.data.control.value ? true : null)("formControl", ctx_r29.data.control);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 20);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(7); return ctx_r36.data.control.patchValue($event.target.checked); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("checked", ctx_r31.data.control.value ? true : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r30 = i0.ɵɵreference(2);
    const ctx_r23 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngIf", (ctx_r23.parent == null ? null : ctx_r23.parent.arrayType) == "enum")("ngIfElse", _r30);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template, 2, 3, "label", 14);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 2);
    i0.ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template, 3, 2, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(4);
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r18.parent == null ? null : ctx_r18.parent.arrayType) == "enum" || ctx_r18.data.renderType != "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.data.renderType == "radio")("ngIfElse", _r22);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 13);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r15.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r40.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r40.name ? option_r40.name : option_r40.value, " ");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 22);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template, 2, 2, "option", 23);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("formControl", ctx_r38.data.control);
    i0.ɵɵattribute("placeholder", ctx_r38.data.label != undefined ? ctx_r38.data.label : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 3, ctx_r38.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template, 3, 5, "select", 21);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r17.data.renderType == "select");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(3);
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.renderType != "select")("ngIfElse", _r16);
} }
function HbFormWidgetComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.typeof(ctx_r7.data.hints) == "function" ? ctx_r7.data.hints(ctx_r7.data.diContainer, ctx_r7.data, ctx_r7.parent) : ctx_r7.data.hints, " ");
} }
function HbFormWidgetComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_label_1_Template, 2, 3, "label", 4);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 4);
    i0.ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template, 4, 2, "ng-container", 4);
    i0.ɵɵtemplate(4, HbFormWidgetComponent_div_0_ng_container_1_span_4_Template, 2, 1, "span", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r1.parent == null ? null : ctx_r1.parent.arrayType) !== "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isOptionSelectingComponent());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data == null ? null : ctx_r1.data.hints);
} }
function HbFormWidgetComponent_div_0_ng_template_2_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_Template, 5, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_template_2_Template, 0, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c2, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.useComponent)("ngIfElse", _r2);
} }
export class HbFormWidgetComponent {
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
        if (input in HbFormWidgetComponent.slugMap) {
            return HbFormWidgetComponent.slugMap[input];
        }
        if (input) {
            return HbFormWidgetComponent.slugMap[input] = input
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
        else {
            throw new Error('Cannot slugify input, input is undefined.');
        }
    }
}
HbFormWidgetComponent.slugMap = [];
HbFormWidgetComponent.ɵfac = function HbFormWidgetComponent_Factory(t) { return new (t || HbFormWidgetComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
HbFormWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormWidgetComponent, selectors: [["hb-form-widget"]], viewQuery: function HbFormWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customBlock = _t.first);
    } }, inputs: { data: "data", key: "key", parent: "parent" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["customBlock", ""], [4, "ngIf"], ["class", "hints", 4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], [3, "type", "placeholder", "formControl", "change"], [3, "rows", "formControl"], ["selectBlock", ""], [4, "ngFor", "ngForOf"], [3, "for", 4, "ngIf"], ["checkBoxBlock", ""], [3, "for"], ["type", "radio", 1, "example-radio-button", 3, "id", "value", "checked", "formControl", "select"], ["booleanCheckBoxBlock", ""], ["type", "checkbox", 3, "value", "checked", "formControl", "change"], ["type", "checkbox", 3, "checked", "change"], [3, "formControl", 4, "ngIf"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hints"]], template: function HbFormWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HbFormWidgetComponent_div_0_Template, 4, 10, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, directives: [i1.NgIf, i1.NgClass, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective, i1.NgForOf, i2.RadioControlValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], pipes: [i1.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-widget',
                templateUrl: './hb-form-widget.tpl.html',
                inputs: ['data', 'key', 'parent']
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { customBlock: [{
            type: ViewChild,
            args: ["customBlock", { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBR1QsU0FBUyxFQUNULGdCQUFnQixFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7SUNZMUIsNkJBRStDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBUTs7O0lBRGhFLGtHQUFrRSw4SUFBQTtJQUMxQixlQUFnQjtJQUFoQix1Q0FBZ0I7Ozs7SUFJdkQsOEJBRUk7SUFBQSxpQ0FLSjtJQUhXLCtOQUFVLG9EQUE0QyxJQUFDO0lBRjlELGlCQUtKO0lBQUEsaUJBQU07OztJQUpLLGVBQW1EO0lBQW5ELGlGQUFtRCx1RkFBQSxxQ0FBQTtJQURuRCxvR0FBaUU7Ozs7SUFIaEYsNkJBQ0k7SUFBQSx5SEFFSTtJQU9KLHVLQUNoQjtJQXFCWSwwQkFBZTs7OztJQS9CTixlQUEwRTtJQUExRSx3RUFBMEUsa0JBQUE7SUFTL0MsZUFBdUM7SUFBdkMsNERBQXVDOzs7SUF3QjNFLDZCQUNJO0lBQUEsb0NBRUE7SUFBQSxnQ0FBQTtJQUFBLGlCQUFXO0lBQ2YsMEJBQWU7OztJQUhELGVBQXVDO0lBQXZDLHFLQUF1QyxvQ0FBQTtJQUN2QyxpR0FBaUU7Ozs7SUFyQ25GLDZCQUNJO0lBQUEsNEhBQ0k7SUFpQ0osNEhBQ0k7SUFJUiwwQkFBZTs7O0lBdkNHLGVBQW1GO0lBQW5GLDJGQUFtRjtJQWtDbkYsZUFBcUM7SUFBckMsMkRBQXFDOzs7SUFXM0MsaUNBQ2dHO0lBQUEsWUFBaUI7SUFBQSxpQkFBUTs7OztJQUFsSCwwSkFBd0Y7SUFBQyxlQUFpQjtJQUFq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QUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3BDOztrQkFRSSxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTXVsdGlwbGVDaG9pY2VzT3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9NdWx0aXBsZUNob2ljZXNPcHRpb25zXCI7XG5pbXBvcnQgeyBJQmFzZUZvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9Gb3JtQ29uZmlnXCI7XG5pbXBvcnQgeyBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL0FycmF5T3B0aW9uc1wiO1xuaW1wb3J0IHsgSU9iamVjdE9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvT2JqZWN0T3B0aW9uc1wiO1xuaW1wb3J0IHsgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvQ2hvaWNlT3B0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLWZvcm0td2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGItZm9ybS13aWRnZXQudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydkYXRhJywgJ2tleScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyByZXNvbHZlZE9wdGlvbnM7XG4gICAgcHVibGljIGtleTtcbiAgICBwdWJsaWMgZGF0YTogYW55ICYgSUJhc2VGb3JtQ29uZmlnICYgSU11bHRpcGxlQ2hvaWNlc09wdGlvbnNGb3JtQ29uZmlnICYgSUFycmF5T3B0aW9uc0Zvcm1Db25maWcgJiBJT2JqZWN0T3B0aW9uc0Zvcm1Db25maWcgJiBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWc7XG4gICAgcHVibGljIHBhcmVudDtcbiAgICBzdGF0aWMgc2x1Z01hcCA9IFtdO1xuXG4gICAgQFZpZXdDaGlsZChcImN1c3RvbUJsb2NrXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkge1xuICAgIH1cblxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGlkZSAmJiB0aGlzLmRhdGEudXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlQ29tcG9uZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5jdXN0b21CbG9jay5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UudGVtcGxhdGVPYmplY3QgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UucGFyZW50VGVtcGxhdGVPYmplY3QgPSB0aGlzLnBhcmVudDtcblxuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzT3B0aW9uU2VsZWN0aW5nQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gWydyYWRpbycsICdjaGVja2JveCcsICdzZWxlY3QnXS5pbmRleE9mKHRoaXMuZGF0YS5yZW5kZXJUeXBlKSA+IC0xO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGluZ0NvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgb3B0aW9uczogYW55ID0gW107XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZGF0YS5vcHRpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5vcHRpb25zLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5vcHRpb25zID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRhdGEub3B0aW9uc1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBkYXRhLnR5cGUgPT09ICdib29sZWFuJyAmJlxuICAgICAgICAgICAgICAgIGRhdGEucmVuZGVyVHlwZSA9PT0gJ2NoZWNrYm94J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9wdGlvbnMgc2V0IGZvciAnICsgZGF0YS5rZXkgKyAnIGluICcgKyB0aGlzLnBhcmVudC5rZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnMoZGF0YS5kaUNvbnRhaW5lciwgdGhpcy5kYXRhLCB0aGlzLnBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IG9wdGlvbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc29sdmVkO1xuXG4gICAgICAgICAgICBpZiAoIShyZXNvbHZlZCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE9ic2VydmFibGUoKG8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgby5uZXh0KHJlc29sdmVkKTtcbiAgICAgICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkT3B0aW9ucyA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZ1RvQm9vbGVhbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gJ3RydWUnXG4gICAgfVxuXG4gICAgdXBkYXRlUGFyZW50VmFsdWUoJGV2ZW50LCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCA/ICRldmVudC50YXJnZXQgOiAkZXZlbnQuc291cmNlO1xuICAgICAgICBsZXQgaXNDaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEucmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRDb250cm9scyA9IHRoaXMucGFyZW50LmNvbnRyb2wuY29udHJvbHM7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmFkZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRyb2xzW3BhcmVudENvbnRyb2xzLmxlbmd0aCAtIDFdLnNldFZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgcGFyZW50Q29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb250cm9sc1tpXS52YWx1ZSA9PSBvcHRpb24udmFsdWUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkgdGhpcy5kYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSh0YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0eXBlb2YoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpbnB1dDtcbiAgICB9XG5cbiAgICBzbHVnaWZ5U3RyaW5nKGlucHV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlucHV0IGluIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXBbaW5wdXRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXBbaW5wdXRdID0gaW5wdXRcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xccy1dL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxzXy1dKy9nLCAnLScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2x1Z2lmeSBpbnB1dCwgaW5wdXQgaXMgdW5kZWZpbmVkLicpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiXG4gICAgICAgICBkYXRhLmNvbnRyb2wgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAoXG4gICAgICAgICAgICAgZGF0YS5ncm91cFR5cGUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgcGFyZW50LmFycmF5VHlwZSA9PSAnZW51bSdcbiAgICAgICAgICkgJiZcbiAgICAgICAgIGtleSAhPSAnc2V0VmFsdWUnICYmXG4gICAgICAgICAoXG4gICAgICAgICAgICAgZGF0YS5oaWRlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICFkYXRhLmhpZGVcbiAgICAgICAgIClcbiAgICBcIlxuICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ2Vycm9yJzogIWRhdGEuY29udHJvbC52YWxpZCxcbiAgICAgICAgJ2hiLWZvcm0td2l0aC1oaW50cycgOiBkYXRhLmhpbnRzXG4gICAgfVwiXG4gICAgY2xhc3M9XCJleHBhbmQtdG8tY2hpbGQgaGItZm9ybS13aWRnZXQgaGItZm9ybS13aWRnZXRfe3sga2V5IH19IHt7IGRhdGE/Lmh0bWw/LmNsYXNzQXR0ciB9fVwiXG4+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkYXRhLnVzZUNvbXBvbmVudDsgZWxzZSBjdXN0b21CbG9ja1wiPlxuICAgICAgICA8bGFiZWwgKm5nSWY9XCJkYXRhLmxhYmVsXCJcbiAgICAgICAgICAgICAgIFthdHRyLmZvcl09XCInaGItZm9ybS13aWRnZXRfJyArIChrZXkgPyBrZXkgOiBkYXRhLnNsdWcpICsnLWlucHV0J1wiXG4gICAgICAgICAgICAgICBbYXR0ci5jbGFzc109XCJkYXRhPy5odG1sPy5jbGFzcz8ubGFiZWxcIj57eyBkYXRhLmxhYmVsIH19PC9sYWJlbD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFyZW50Py5hcnJheVR5cGUgIT09ICdlbnVtJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIlsnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ10uaW5kZXhPZihkYXRhLnJlbmRlclR5cGUpID09PSAtMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLnNlbGVjdE9wdGlvbnNPYnNlcnZhYmxlcyA9PSB1bmRlZmluZWQ7IGVsc2UgYXV0b2NvbXBsZXRlQmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYi1mb3JtLXdpZGdldC1pbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2F0dHIuaWRdPVwiJ2hiLWZvcm0td2lkZ2V0XycgKyAoa2V5ID8ga2V5IDogZGF0YS5zbHVnKSArJy1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiZGF0YS5yZW5kZXJUeXBlID8gZGF0YS5yZW5kZXJUeXBlIDogJ3RleHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImRhdGEucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/IGRhdGEucGxhY2Vob2xkZXIgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYXV0b2NvbXBsZXRlQmxvY2sgW25nSWZdPVwiZGF0YS5hdXRvY29tcGxldGUgIT0gdW5kZWZpbmVkXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgQXV0b2NvbXBsZXRlIGlzIG5vdCB3ZWxsIHN1cHBvcnRlZCBpbiBoYi1mb3JtLXdpZGdldC0tPlxuXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuYXV0b2NvbXBsZXRlLnJlbmRlclR5cGUgIT0gJ2N1c3RvbSc7IGVsc2UgYXV0b2NvbXBsZXRlQ3VzdG9taXplQmxvY2tcIiAtLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGItZm9ybS13aWRnZXQtaW5wdXQtZmllbGQgYXV0b2NvbXBsZXRlXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbYXR0ci5pZF09XCJrZXkgPyBrZXkgOiBkYXRhLnNsdWcgKyAnLWlucHV0J1wiLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJkYXRhLnJlbmRlclR5cGUgPyBkYXRhLnJlbmRlclR5cGUgOiAndGV4dCdcIi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZGF0YS5sYWJlbCAhPT0gdW5kZWZpbmVkID8gZGF0YS5sYWJlbCA6IGRhdGEub3B0aW9uLm5hbWVcIi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiIC8+LS0+XG5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGEuc2VsZWN0T3B0aW9uc09ic2VydmFibGVzIHwgYXN5bmNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPi0tPlxuXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGludHNcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lciwgZGF0YSwgcGFyZW50KSA6IGRhdGEuaGludHMgfX0tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEucmVuZGVyVHlwZSA9PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFtyb3dzXT1cImRhdGE/Lmh0bWw/LnRleHRhcmVhPy5yb3cgfHwgNVwiIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCInaGItZm9ybS13aWRnZXRfJyArIChrZXkgPyBrZXkgOiBkYXRhLnNsdWcpICsnLWlucHV0J1wiPlxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzT3B0aW9uU2VsZWN0aW5nQ29tcG9uZW50KClcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEucmVuZGVyVHlwZSAhPSAnc2VsZWN0JzsgZWxzZSBzZWxlY3RCbG9ja1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByZXNvbHZlZE9wdGlvbnMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJwYXJlbnQ/LmFycmF5VHlwZSA9PSAnZW51bScgfHwgZGF0YS5yZW5kZXJUeXBlICE9ICdjaGVja2JveCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiaGItZm9ybS13aWRnZXRfe3sga2V5ID8ga2V5IDogZGF0YS5zbHVnIH19LWlucHV0X197eyBzbHVnaWZ5U3RyaW5nKG9wdGlvbi5uYW1lKSB9fVwiPnt7IG9wdGlvbi5uYW1lIH19PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlID09ICdyYWRpbyc7IGVsc2UgY2hlY2tCb3hCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoYi1mb3JtLXdpZGdldF97eyBrZXkgPyBrZXkgOiBkYXRhLnNsdWcgfX0taW5wdXRfX3t7IHNsdWdpZnlTdHJpbmcob3B0aW9uLm5hbWUpIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPT09IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24uaWQgPT09IGRhdGEuY29udHJvbC52YWx1ZSA/IHRydWUgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5uYW1lXT1cImRhdGEucmVuZGVyVHlwZSA9PSAncmFkaW8nID8gKGtleSA/IGtleSA6IGRhdGEuc2x1ZykgKyAnLWlucHV0JyA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3QpPVwicGFyZW50Py5hcnJheVR5cGUgPT0gJ2VudW0nID8gdXBkYXRlUGFyZW50VmFsdWUoJGV2ZW50LCBvcHRpb24pIDogZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjaGVja0JveEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhcmVudD8uYXJyYXlUeXBlID09ICdlbnVtJzsgZWxzZSBib29sZWFuQ2hlY2tCb3hCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiZGF0YS5jb250cm9sLnZhbHVlID09PSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLmlkID09PSBkYXRhLmNvbnRyb2wudmFsdWUgPyB0cnVlIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwicGFyZW50Py5hcnJheVR5cGUgPT0gJ2VudW0nID8gdXBkYXRlUGFyZW50VmFsdWUoJGV2ZW50LCBvcHRpb24pIDogZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYm9vbGVhbkNoZWNrQm94QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImRhdGEuY29udHJvbC52YWx1ZSA/IHRydWUgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdEJsb2NrPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJkYXRhLmxhYmVsICE9IHVuZGVmaW5lZCA/IGRhdGEubGFiZWwgOiAnJ1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmVzb2x2ZWRPcHRpb25zIHwgYXN5bmNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubmFtZSA/IG9wdGlvbi5uYW1lIDogb3B0aW9uLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50c1wiICpuZ0lmPVwiZGF0YT8uaGludHNcIj5cbiAgICAgICAgICAgIHt7IHR5cGVvZihkYXRhLmhpbnRzKSA9PSAnZnVuY3Rpb24nID8gZGF0YS5oaW50cyhkYXRhLmRpQ29udGFpbmVyLCBkYXRhLCBwYXJlbnQpIDogZGF0YS5oaW50cyB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2N1c3RvbUJsb2NrPjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbiJdfQ==