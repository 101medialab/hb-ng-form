import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDWTFCLDZCQUUrQztJQUFBLFlBQWdCO0lBQUEsaUJBQVE7OztJQURoRSxrR0FBa0UsOElBQUE7SUFDMUIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7O0lBSXZELDhCQUVJO0lBQUEsaUNBS0o7SUFIVywrTkFBVSxvREFBNEMsSUFBQztJQUY5RCxpQkFLSjtJQUFBLGlCQUFNOzs7SUFKSyxlQUFtRDtJQUFuRCxpRkFBbUQsdUZBQUEscUNBQUE7SUFEbkQsb0dBQWlFOzs7O0lBSGhGLDZCQUNJO0lBQUEseUhBRUk7SUFPSix1S0FDaEI7SUFxQlksMEJBQWU7Ozs7SUEvQk4sZUFBMEU7SUFBMUUsd0VBQTBFLGtCQUFBO0lBUy9DLGVBQXVDO0lBQXZDLDREQUF1Qzs7O0lBd0IzRSw2QkFDSTtJQUFBLG9DQUVBO0lBQUEsZ0NBQUE7SUFBQSxpQkFBVztJQUNmLDBCQUFlOzs7SUFIRCxlQUF1QztJQUF2QyxxS0FBdUMsb0NBQUE7SUFDdkMsaUdBQWlFOzs7O0lBckNuRiw2QkFDSTtJQUFBLDRIQUNJO0lBaUNKLDRIQUNJO0lBSVIsMEJBQWU7OztJQXZDRyxlQUFtRjtJQUFuRiwyRkFBbUY7SUFrQ25GLGVBQXFDO0lBQXJDLDJEQUFxQzs7O0lBVzNDLGlDQUNnRztJQUFBLFlBQWlCO0lBQUEsaUJBQVE7Ozs7SUFBbEgsMEpBQXdGO0lB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LFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUNwQzs7a0JBUUksU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSU11bHRpcGxlQ2hvaWNlc09wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvTXVsdGlwbGVDaG9pY2VzT3B0aW9uc1wiO1xuaW1wb3J0IHsgSUJhc2VGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvRm9ybUNvbmZpZ1wiO1xuaW1wb3J0IHsgSUFycmF5T3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9BcnJheU9wdGlvbnNcIjtcbmltcG9ydCB7IElPYmplY3RPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL09iamVjdE9wdGlvbnNcIjtcbmltcG9ydCB7IElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL0Nob2ljZU9wdGlvbnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoYi1mb3JtLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnZGF0YScsICdrZXknLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcmVzb2x2ZWRPcHRpb25zO1xuICAgIHB1YmxpYyBrZXk7XG4gICAgcHVibGljIGRhdGE6IGFueSAmIElCYXNlRm9ybUNvbmZpZyAmIElNdWx0aXBsZUNob2ljZXNPcHRpb25zRm9ybUNvbmZpZyAmIElBcnJheU9wdGlvbnNGb3JtQ29uZmlnICYgSU9iamVjdE9wdGlvbnNGb3JtQ29uZmlnICYgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnO1xuICAgIHB1YmxpYyBwYXJlbnQ7XG4gICAgc3RhdGljIHNsdWdNYXAgPSBbXTtcblxuICAgIEBWaWV3Q2hpbGQoXCJjdXN0b21CbG9ja1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBjdXN0b21CbG9jaztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhpZGUgJiYgdGhpcy5kYXRhLnVzZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnVzZUNvbXBvbmVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuY3VzdG9tQmxvY2suY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgICAgICAgcmVmLmluc3RhbmNlLnRlbXBsYXRlT2JqZWN0ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgcmVmLmluc3RhbmNlLnBhcmVudFRlbXBsYXRlT2JqZWN0ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICAgICAgICAgIHJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc09wdGlvblNlbGVjdGluZ0NvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc2VsZWN0J10uaW5kZXhPZih0aGlzLmRhdGEucmVuZGVyVHlwZSkgPiAtMTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RpbmdDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IG9wdGlvbnM6IGFueSA9IFtdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRhdGEub3B0aW9ucyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEub3B0aW9ucy5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkYXRhLm9wdGlvbnNcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgZGF0YS50eXBlID09PSAnYm9vbGVhbicgJiZcbiAgICAgICAgICAgICAgICBkYXRhLnJlbmRlclR5cGUgPT09ICdjaGVja2JveCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvcHRpb25zIHNldCBmb3IgJyArIGRhdGEua2V5ICsgJyBpbiAnICsgdGhpcy5wYXJlbnQua2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBvcHRpb25zKGRhdGEuZGlDb250YWluZXIsIHRoaXMuZGF0YSwgdGhpcy5wYXJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBvcHRpb25zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXNvbHZlZDtcblxuICAgICAgICAgICAgaWYgKCEocmVzb2x2ZWQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlKChvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG8ubmV4dChyZXNvbHZlZCk7XG4gICAgICAgICAgICAgICAgICAgIG8uY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlZE9wdGlvbnMgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJpbmdUb0Jvb2xlYW4odmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJ1xuICAgIH1cblxuICAgIHVwZGF0ZVBhcmVudFZhbHVlKCRldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgPyAkZXZlbnQudGFyZ2V0IDogJGV2ZW50LnNvdXJjZTtcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Q29udHJvbHMgPSB0aGlzLnBhcmVudC5jb250cm9sLmNvbnRyb2xzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hZGQoKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250cm9sc1twYXJlbnRDb250cm9scy5sZW5ndGggLSAxXS5zZXRWYWx1ZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IHBhcmVudENvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29udHJvbHNbaV0udmFsdWUgPT0gb3B0aW9uLnZhbHVlKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZShpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHRoaXMuZGF0YS5jb250cm9sLnBhdGNoVmFsdWUodGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHlwZW9mKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQ7XG4gICAgfVxuXG4gICAgc2x1Z2lmeVN0cmluZyhpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcCkge1xuICAgICAgICAgICAgcmV0dXJuIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwW2lucHV0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIEhiRm9ybVdpZGdldENvbXBvbmVudC5zbHVnTWFwW2lucHV0XSA9IGlucHV0XG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHdcXHMtXS9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcc18tXSsvZywgJy0nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNsdWdpZnkgaW5wdXQsIGlucHV0IGlzIHVuZGVmaW5lZC4nKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiAqbmdJZj1cIlxuICAgICAgICAgZGF0YS5jb250cm9sICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgKFxuICAgICAgICAgICAgIGRhdGEuZ3JvdXBUeXBlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgIHBhcmVudC5hcnJheVR5cGUgPT0gJ2VudW0nXG4gICAgICAgICApICYmXG4gICAgICAgICBrZXkgIT0gJ3NldFZhbHVlJyAmJlxuICAgICAgICAgKFxuICAgICAgICAgICAgIGRhdGEuaGlkZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAhZGF0YS5oaWRlXG4gICAgICAgICApXG4gICAgXCJcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdlcnJvcic6ICFkYXRhLmNvbnRyb2wudmFsaWQsXG4gICAgICAgICdoYi1mb3JtLXdpdGgtaGludHMnIDogZGF0YS5oaW50c1xuICAgIH1cIlxuICAgIGNsYXNzPVwiZXhwYW5kLXRvLWNoaWxkIGhiLWZvcm0td2lkZ2V0IGhiLWZvcm0td2lkZ2V0X3t7IGtleSB9fSB7eyBkYXRhPy5odG1sPy5jbGFzc0F0dHIgfX1cIlxuPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGF0YS51c2VDb21wb25lbnQ7IGVsc2UgY3VzdG9tQmxvY2tcIj5cbiAgICAgICAgPGxhYmVsICpuZ0lmPVwiZGF0YS5sYWJlbFwiXG4gICAgICAgICAgICAgICBbYXR0ci5mb3JdPVwiJ2hiLWZvcm0td2lkZ2V0XycgKyAoa2V5ID8ga2V5IDogZGF0YS5zbHVnKSArJy1pbnB1dCdcIlxuICAgICAgICAgICAgICAgW2F0dHIuY2xhc3NdPVwiZGF0YT8uaHRtbD8uY2xhc3M/LmxhYmVsXCI+e3sgZGF0YS5sYWJlbCB9fTwvbGFiZWw+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhcmVudD8uYXJyYXlUeXBlICE9PSAnZW51bSdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJbJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddLmluZGV4T2YoZGF0YS5yZW5kZXJUeXBlKSA9PT0gLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5zZWxlY3RPcHRpb25zT2JzZXJ2YWJsZXMgPT0gdW5kZWZpbmVkOyBlbHNlIGF1dG9jb21wbGV0ZUJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGItZm9ybS13aWRnZXQtaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFthdHRyLmlkXT1cIidoYi1mb3JtLXdpZGdldF8nICsgKGtleSA/IGtleSA6IGRhdGEuc2x1ZykgKyctaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImRhdGEucmVuZGVyVHlwZSA/IGRhdGEucmVuZGVyVHlwZSA6ICd0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImRhdGEuY29udHJvbC5wYXRjaFZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJkYXRhLnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgPyBkYXRhLnBsYWNlaG9sZGVyIDogJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2F1dG9jb21wbGV0ZUJsb2NrIFtuZ0lmXT1cImRhdGEuYXV0b2NvbXBsZXRlICE9IHVuZGVmaW5lZFwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIEF1dG9jb21wbGV0ZSBpcyBub3Qgd2VsbCBzdXBwb3J0ZWQgaW4gaGItZm9ybS13aWRnZXQtLT5cblxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmF1dG9jb21wbGV0ZS5yZW5kZXJUeXBlICE9ICdjdXN0b20nOyBlbHNlIGF1dG9jb21wbGV0ZUN1c3RvbWl6ZUJsb2NrXCIgLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhiLWZvcm0td2lkZ2V0LWlucHV0LWZpZWxkIGF1dG9jb21wbGV0ZVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2F0dHIuaWRdPVwia2V5ID8ga2V5IDogZGF0YS5zbHVnICsgJy1pbnB1dCdcIi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiZGF0YS5yZW5kZXJUeXBlID8gZGF0YS5yZW5kZXJUeXBlIDogJ3RleHQnXCItLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImRhdGEubGFiZWwgIT09IHVuZGVmaW5lZCA/IGRhdGEubGFiZWwgOiBkYXRhLm9wdGlvbi5uYW1lXCItLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIiAvPi0tPlxuXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhLnNlbGVjdE9wdGlvbnNPYnNlcnZhYmxlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2F1dG9jb21wbGV0ZT4tLT5cblxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRzXCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIsIGRhdGEsIHBhcmVudCkgOiBkYXRhLmhpbnRzIH19LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbcm93c109XCJkYXRhPy5odG1sPy50ZXh0YXJlYT8ucm93IHx8IDVcIiBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiJ2hiLWZvcm0td2lkZ2V0XycgKyAoa2V5ID8ga2V5IDogZGF0YS5zbHVnKSArJy1pbnB1dCdcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc09wdGlvblNlbGVjdGluZ0NvbXBvbmVudCgpXCI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgIT0gJ3NlbGVjdCc7IGVsc2Ugc2VsZWN0QmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmVzb2x2ZWRPcHRpb25zIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwicGFyZW50Py5hcnJheVR5cGUgPT0gJ2VudW0nIHx8IGRhdGEucmVuZGVyVHlwZSAhPSAnY2hlY2tib3gnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImhiLWZvcm0td2lkZ2V0X3t7IGtleSA/IGtleSA6IGRhdGEuc2x1ZyB9fS1pbnB1dF9fe3sgc2x1Z2lmeVN0cmluZyhvcHRpb24ubmFtZSkgfX1cIj57eyBvcHRpb24ubmFtZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEucmVuZGVyVHlwZSA9PSAncmFkaW8nOyBlbHNlIGNoZWNrQm94QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGItZm9ybS13aWRnZXRfe3sga2V5ID8ga2V5IDogZGF0YS5zbHVnIH19LWlucHV0X197eyBzbHVnaWZ5U3RyaW5nKG9wdGlvbi5uYW1lKSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiZGF0YS5jb250cm9sLnZhbHVlID09PSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLmlkID09PSBkYXRhLmNvbnRyb2wudmFsdWUgPyB0cnVlIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubmFtZV09XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3JhZGlvJyA/IChrZXkgPyBrZXkgOiBkYXRhLnNsdWcpICsgJy1pbnB1dCcgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0KT1cInBhcmVudD8uYXJyYXlUeXBlID09ICdlbnVtJyA/IHVwZGF0ZVBhcmVudFZhbHVlKCRldmVudCwgb3B0aW9uKSA6IGRhdGEuY29udHJvbC5wYXRjaFZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2hlY2tCb3hCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXJlbnQ/LmFycmF5VHlwZSA9PSAnZW51bSc7IGVsc2UgYm9vbGVhbkNoZWNrQm94QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImRhdGEuY29udHJvbC52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi5pZCA9PT0gZGF0YS5jb250cm9sLnZhbHVlID8gdHJ1ZSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInBhcmVudD8uYXJyYXlUeXBlID09ICdlbnVtJyA/IHVwZGF0ZVBhcmVudFZhbHVlKCRldmVudCwgb3B0aW9uKSA6IGRhdGEuY29udHJvbC5wYXRjaFZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Jvb2xlYW5DaGVja0JveEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPyB0cnVlIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC5jaGVja2VkKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzZWxlY3RCbG9jaz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0ICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlID09ICdzZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwiZGF0YS5sYWJlbCAhPSB1bmRlZmluZWQgPyBkYXRhLmxhYmVsIDogJydcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJlc29sdmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLm5hbWUgPyBvcHRpb24ubmFtZSA6IG9wdGlvbi52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGludHNcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+XG4gICAgICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lciwgZGF0YSwgcGFyZW50KSA6IGRhdGEuaGludHMgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNjdXN0b21CbG9jaz48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=