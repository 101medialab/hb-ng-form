import { __read, __spread } from "tslib";
import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
var _c0 = ["customBlock"];
function HbFormWidgetComponent_div_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("for", "hb-form-widget_" + (ctx_r4.key ? ctx_r4.key : ctx_r4.data.slug) + "-input")("class", ctx_r4.data == null ? null : ctx_r4.data.html == null ? null : ctx_r4.data.html.class == null ? null : ctx_r4.data.html.class.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "input", 10);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(5); return ctx_r13.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(5);
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
    var _r11 = i0.ɵɵreference(3);
    var ctx_r8 = i0.ɵɵnextContext(4);
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
    var ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("rows", (ctx_r9.data == null ? null : ctx_r9.data.html == null ? null : ctx_r9.data.html.textarea == null ? null : ctx_r9.data.html.textarea.row) || 5)("formControl", ctx_r9.data.control);
    i0.ɵɵattribute("id", "hb-form-widget_" + (ctx_r9.key ? ctx_r9.key : ctx_r9.data.slug) + "-input");
} }
var _c1 = function () { return ["select", "radio", "checkbox", "textarea"]; };
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 4);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template, 3, 3, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(3);
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
    var option_r19 = i0.ɵɵnextContext().$implicit;
    var ctx_r20 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate2("for", "hb-form-widget_", ctx_r20.key ? ctx_r20.key : ctx_r20.data.slug, "-input__", ctx_r20.slugifyString(option_r19.name), "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r19.name);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 17);
    i0.ɵɵlistener("select", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template_input_select_1_listener($event) { i0.ɵɵrestoreView(_r26); var option_r19 = i0.ɵɵnextContext().$implicit; var ctx_r25 = i0.ɵɵnextContext(5); return (ctx_r25.parent == null ? null : ctx_r25.parent.arrayType) == "enum" ? ctx_r25.updateParentValue($event, option_r19) : ctx_r25.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r19 = i0.ɵɵnextContext().$implicit;
    var ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("id", "hb-form-widget_", ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug, "-input__", ctx_r21.slugifyString(option_r19.name), "");
    i0.ɵɵproperty("value", option_r19.value)("checked", ctx_r21.data.control.value === option_r19.value || option_r19.id === ctx_r21.data.control.value ? true : null)("formControl", ctx_r21.data.control);
    i0.ɵɵattribute("name", ctx_r21.data.renderType == "radio" ? (ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug) + "-input" : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r33); var option_r19 = i0.ɵɵnextContext(2).$implicit; var ctx_r32 = i0.ɵɵnextContext(5); return (ctx_r32.parent == null ? null : ctx_r32.parent.arrayType) == "enum" ? ctx_r32.updateParentValue($event, option_r19) : ctx_r32.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r19 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r29 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", option_r19.value)("checked", ctx_r29.data.control.value === option_r19.value || option_r19.id === ctx_r29.data.control.value ? true : null)("formControl", ctx_r29.data.control);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 20);
    i0.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r37); var ctx_r36 = i0.ɵɵnextContext(7); return ctx_r36.data.control.patchValue($event.target.checked); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("checked", ctx_r31.data.control.value ? true : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r30 = i0.ɵɵreference(2);
    var ctx_r23 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngIf", (ctx_r23.parent == null ? null : ctx_r23.parent.arrayType) == "enum")("ngIfElse", _r30);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template, 2, 3, "label", 14);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 2);
    i0.ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template, 3, 2, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r22 = i0.ɵɵreference(4);
    var ctx_r18 = i0.ɵɵnextContext(5);
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
    var ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r15.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r40 = ctx.$implicit;
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
    var ctx_r38 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("formControl", ctx_r38.data.control);
    i0.ɵɵattribute("placeholder", ctx_r38.data.label != undefined ? ctx_r38.data.label : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 3, ctx_r38.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template, 3, 5, "select", 21);
} if (rf & 2) {
    var ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r17.data.renderType == "select");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r16 = i0.ɵɵreference(3);
    var ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.renderType != "select")("ngIfElse", _r16);
} }
function HbFormWidgetComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(3);
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
    var ctx_r1 = i0.ɵɵnextContext(2);
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
var _c2 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_Template, 5, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_template_2_Template, 0, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r2 = i0.ɵɵreference(3);
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c2, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.useComponent)("ngIfElse", _r2);
} }
var HbFormWidgetComponent = /** @class */ (function () {
    function HbFormWidgetComponent(resolver) {
        this.resolver = resolver;
    }
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
    };
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
    return HbFormWidgetComponent;
}());
export { HbFormWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0td2lkZ2V0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUdULFNBQVMsRUFDVCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDWTFCLDZCQUUrQztJQUFBLFlBQWdCO0lBQUEsaUJBQVE7OztJQURoRSxrR0FBa0UsOElBQUE7SUFDMUIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7O0lBSXZELDhCQUVJO0lBQUEsaUNBS0o7SUFIVyw2TkFBVSxvREFBNEMsSUFBQztJQUY5RCxpQkFLSjtJQUFBLGlCQUFNOzs7SUFKSyxlQUFtRDtJQUFuRCxpRkFBbUQsdUZBQUEscUNBQUE7SUFEbkQsb0dBQWlFOzs7O0lBSGhGLDZCQUNJO0lBQUEseUhBRUk7SUFPSix1S0FDaEI7SUFxQlksMEJBQWU7Ozs7SUEvQk4sZUFBMEU7SUFBMUUsd0VBQTBFLGtCQUFBO0lBUy9DLGVBQXVDO0lBQXZDLDREQUF1Qzs7O0lBd0IzRSw2QkFDSTtJQUFBLG9DQUVBO0lBQUEsZ0NBQUE7SUFBQSxpQkFBVztJQUNmLDBCQUFlOzs7SUFIRCxlQUF1QztJQUF2QyxxS0FBdUMsb0NBQUE7SUFDdkMsaUdBQWlFOzs7O0lBckNuRiw2QkFDSTtJQUFBLDRIQUNJO0lBaUNKLDRIQUNJO0lBSVIsMEJBQWU7OztJQXZDRyxlQUFtRjtJQUFuRiwyRkFBbUY7SUFrQ25GLGVBQXFDO0lBQXJDLDJEQUFxQzs7O0lBVzNDLGlDQUNnRztJQUFBLFlBQWlCO0lBQUEsaUJBQVE7Ozs7SUFBbEgsMEpBQXdGO0lBQUMsZUFBaUI7SUFB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O1lDMUJ0RCx1RUFrQkk7O1lBbEJDLHNNQVdBOztnQ0RYTDtDQTRKQyxBQTlJRCxJQThJQztTQXpJWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDcEM7O2tCQVFJLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNdWx0aXBsZUNob2ljZXNPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL011bHRpcGxlQ2hvaWNlc09wdGlvbnNcIjtcbmltcG9ydCB7IElCYXNlRm9ybUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzcy9kZWNvcmF0b3JzL0Zvcm1Db25maWdcIjtcbmltcG9ydCB7IElBcnJheU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzL2RlY29yYXRvcnMvQXJyYXlPcHRpb25zXCI7XG5pbXBvcnQgeyBJT2JqZWN0T3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9PYmplY3RPcHRpb25zXCI7XG5pbXBvcnQgeyBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi4vY2xhc3MvZGVjb3JhdG9ycy9DaG9pY2VPcHRpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGItZm9ybS13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oYi1mb3JtLXdpZGdldC50cGwuaHRtbCcsXG4gICAgaW5wdXRzOiBbJ2RhdGEnLCAna2V5JywgJ3BhcmVudCddXG59KVxuZXhwb3J0IGNsYXNzIEhiRm9ybVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHJlc29sdmVkT3B0aW9ucztcbiAgICBwdWJsaWMga2V5O1xuICAgIHB1YmxpYyBkYXRhOiBhbnkgJiBJQmFzZUZvcm1Db25maWcgJiBJTXVsdGlwbGVDaG9pY2VzT3B0aW9uc0Zvcm1Db25maWcgJiBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyAmIElPYmplY3RPcHRpb25zRm9ybUNvbmZpZyAmIElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZztcbiAgICBwdWJsaWMgcGFyZW50O1xuICAgIHN0YXRpYyBzbHVnTWFwID0gW107XG5cbiAgICBAVmlld0NoaWxkKFwiY3VzdG9tQmxvY2tcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgY3VzdG9tQmxvY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oaWRlICYmIHRoaXMuZGF0YS51c2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51c2VDb21wb25lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLmN1c3RvbUJsb2NrLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgICAgICAgIHJlZi5pbnN0YW5jZS50ZW1wbGF0ZU9iamVjdCA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJlZi5pbnN0YW5jZS5wYXJlbnRUZW1wbGF0ZU9iamVjdCA9IHRoaXMucGFyZW50O1xuXG4gICAgICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNPcHRpb25TZWxlY3RpbmdDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3NlbGVjdCddLmluZGV4T2YodGhpcy5kYXRhLnJlbmRlclR5cGUpID4gLTE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0aW5nQ29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXNvbHZlZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbnMubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLm9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gZGF0YS5vcHRpb25zXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGRhdGEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgICAgICAgZGF0YS5yZW5kZXJUeXBlID09PSAnY2hlY2tib3gnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb3B0aW9ucyBzZXQgZm9yICcgKyBkYXRhLmtleSArICcgaW4gJyArIHRoaXMucGFyZW50LmtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucyhkYXRhLmRpQ29udGFpbmVyLCB0aGlzLmRhdGEsIHRoaXMucGFyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIShyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gb3B0aW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgIGlmICghKHJlc29sdmVkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZSgobykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvLm5leHQocmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRPcHRpb25zID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nVG9Cb29sZWFuKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSdcbiAgICB9XG5cbiAgICB1cGRhdGVQYXJlbnRWYWx1ZSgkZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0ID8gJGV2ZW50LnRhcmdldCA6ICRldmVudC5zb3VyY2U7XG4gICAgICAgIGxldCBpc0NoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbnRyb2xzID0gdGhpcy5wYXJlbnQuY29udHJvbC5jb250cm9scztcblxuICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuYWRkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udHJvbHNbcGFyZW50Q29udHJvbHMubGVuZ3RoIC0gMV0uc2V0VmFsdWUob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBwYXJlbnRDb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENvbnRyb2xzW2ldLnZhbHVlID09IG9wdGlvbi52YWx1ZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB0aGlzLmRhdGEuY29udHJvbC5wYXRjaFZhbHVlKHRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR5cGVvZihpbnB1dCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGlucHV0O1xuICAgIH1cblxuICAgIHNsdWdpZnlTdHJpbmcoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICBpZiAoaW5wdXQgaW4gSGJGb3JtV2lkZ2V0Q29tcG9uZW50LnNsdWdNYXApIHtcbiAgICAgICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBIYkZvcm1XaWRnZXRDb21wb25lbnQuc2x1Z01hcFtpbnB1dF0gPSBpbnB1dFxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNfLV0rL2csICctJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXi0rfC0rJC9nLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzbHVnaWZ5IGlucHV0LCBpbnB1dCBpcyB1bmRlZmluZWQuJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJcbiAgICAgICAgIGRhdGEuY29udHJvbCAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgIChcbiAgICAgICAgICAgICBkYXRhLmdyb3VwVHlwZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICBwYXJlbnQuYXJyYXlUeXBlID09ICdlbnVtJ1xuICAgICAgICAgKSAmJlxuICAgICAgICAga2V5ICE9ICdzZXRWYWx1ZScgJiZcbiAgICAgICAgIChcbiAgICAgICAgICAgICBkYXRhLmhpZGUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgIWRhdGEuaGlkZVxuICAgICAgICAgKVxuICAgIFwiXG4gICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnZXJyb3InOiAhZGF0YS5jb250cm9sLnZhbGlkLFxuICAgICAgICAnaGItZm9ybS13aXRoLWhpbnRzJyA6IGRhdGEuaGludHNcbiAgICB9XCJcbiAgICBjbGFzcz1cImV4cGFuZC10by1jaGlsZCBoYi1mb3JtLXdpZGdldCBoYi1mb3JtLXdpZGdldF97eyBrZXkgfX0ge3sgZGF0YT8uaHRtbD8uY2xhc3NBdHRyIH19XCJcbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEudXNlQ29tcG9uZW50OyBlbHNlIGN1c3RvbUJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCAqbmdJZj1cImRhdGEubGFiZWxcIlxuICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cIidoYi1mb3JtLXdpZGdldF8nICsgKGtleSA/IGtleSA6IGRhdGEuc2x1ZykgKyctaW5wdXQnXCJcbiAgICAgICAgICAgICAgIFthdHRyLmNsYXNzXT1cImRhdGE/Lmh0bWw/LmNsYXNzPy5sYWJlbFwiPnt7IGRhdGEubGFiZWwgfX08L2xhYmVsPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXJlbnQ/LmFycmF5VHlwZSAhPT0gJ2VudW0nXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiWydzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXS5pbmRleE9mKGRhdGEucmVuZGVyVHlwZSkgPT09IC0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuc2VsZWN0T3B0aW9uc09ic2VydmFibGVzID09IHVuZGVmaW5lZDsgZWxzZSBhdXRvY29tcGxldGVCbG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhiLWZvcm0td2lkZ2V0LWlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbYXR0ci5pZF09XCInaGItZm9ybS13aWRnZXRfJyArIChrZXkgPyBrZXkgOiBkYXRhLnNsdWcpICsnLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJkYXRhLnJlbmRlclR5cGUgPyBkYXRhLnJlbmRlclR5cGUgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZGF0YS5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkID8gZGF0YS5wbGFjZWhvbGRlciA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhdXRvY29tcGxldGVCbG9jayBbbmdJZl09XCJkYXRhLmF1dG9jb21wbGV0ZSAhPSB1bmRlZmluZWRcIj5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICBBdXRvY29tcGxldGUgaXMgbm90IHdlbGwgc3VwcG9ydGVkIGluIGhiLWZvcm0td2lkZ2V0LS0+XG5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5hdXRvY29tcGxldGUucmVuZGVyVHlwZSAhPSAnY3VzdG9tJzsgZWxzZSBhdXRvY29tcGxldGVDdXN0b21pemVCbG9ja1wiIC0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYi1mb3JtLXdpZGdldC1pbnB1dC1maWVsZCBhdXRvY29tcGxldGVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFthdHRyLmlkXT1cImtleSA/IGtleSA6IGRhdGEuc2x1ZyArICctaW5wdXQnXCItLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImRhdGEucmVuZGVyVHlwZSA/IGRhdGEucmVuZGVyVHlwZSA6ICd0ZXh0J1wiLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImRhdGEuY29udHJvbC5wYXRjaFZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCItLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJkYXRhLmxhYmVsICE9PSB1bmRlZmluZWQgPyBkYXRhLmxhYmVsIDogZGF0YS5vcHRpb24ubmFtZVwiLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCIgLz4tLT5cblxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YS5zZWxlY3RPcHRpb25zT2JzZXJ2YWJsZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hdXRvY29tcGxldGU+LS0+XG5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50c1wiICpuZ0lmPVwiZGF0YT8uaGludHNcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHR5cGVvZihkYXRhLmhpbnRzKSA9PSAnZnVuY3Rpb24nID8gZGF0YS5oaW50cyhkYXRhLmRpQ29udGFpbmVyLCBkYXRhLCBwYXJlbnQpIDogZGF0YS5oaW50cyB9fS0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlID09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW3Jvd3NdPVwiZGF0YT8uaHRtbD8udGV4dGFyZWE/LnJvdyB8fCA1XCIgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmlkXT1cIidoYi1mb3JtLXdpZGdldF8nICsgKGtleSA/IGtleSA6IGRhdGEuc2x1ZykgKyctaW5wdXQnXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPcHRpb25TZWxlY3RpbmdDb21wb25lbnQoKVwiPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlICE9ICdzZWxlY3QnOyBlbHNlIHNlbGVjdEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJlc29sdmVkT3B0aW9ucyB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cInBhcmVudD8uYXJyYXlUeXBlID09ICdlbnVtJyB8fCBkYXRhLnJlbmRlclR5cGUgIT0gJ2NoZWNrYm94J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJoYi1mb3JtLXdpZGdldF97eyBrZXkgPyBrZXkgOiBkYXRhLnNsdWcgfX0taW5wdXRfX3t7IHNsdWdpZnlTdHJpbmcob3B0aW9uLm5hbWUpIH19XCI+e3sgb3B0aW9uLm5hbWUgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3JhZGlvJzsgZWxzZSBjaGVja0JveEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhiLWZvcm0td2lkZ2V0X3t7IGtleSA/IGtleSA6IGRhdGEuc2x1ZyB9fS1pbnB1dF9fe3sgc2x1Z2lmeVN0cmluZyhvcHRpb24ubmFtZSkgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImRhdGEuY29udHJvbC52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi5pZCA9PT0gZGF0YS5jb250cm9sLnZhbHVlID8gdHJ1ZSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLm5hbWVdPVwiZGF0YS5yZW5kZXJUeXBlID09ICdyYWRpbycgPyAoa2V5ID8ga2V5IDogZGF0YS5zbHVnKSArICctaW5wdXQnIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJwYXJlbnQ/LmFycmF5VHlwZSA9PSAnZW51bScgPyB1cGRhdGVQYXJlbnRWYWx1ZSgkZXZlbnQsIG9wdGlvbikgOiBkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NoZWNrQm94QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFyZW50Py5hcnJheVR5cGUgPT0gJ2VudW0nOyBlbHNlIGJvb2xlYW5DaGVja0JveEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPT09IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24uaWQgPT09IGRhdGEuY29udHJvbC52YWx1ZSA/IHRydWUgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJwYXJlbnQ/LmFycmF5VHlwZSA9PSAnZW51bScgPyB1cGRhdGVQYXJlbnRWYWx1ZSgkZXZlbnQsIG9wdGlvbikgOiBkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNib29sZWFuQ2hlY2tCb3hCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiZGF0YS5jb250cm9sLnZhbHVlID8gdHJ1ZSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImRhdGEuY29udHJvbC5wYXRjaFZhbHVlKCRldmVudC50YXJnZXQuY2hlY2tlZClcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0QmxvY2s+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCAqbmdJZj1cImRhdGEucmVuZGVyVHlwZSA9PSAnc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cImRhdGEubGFiZWwgIT0gdW5kZWZpbmVkID8gZGF0YS5sYWJlbCA6ICcnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByZXNvbHZlZE9wdGlvbnMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5uYW1lID8gb3B0aW9uLm5hbWUgOiBvcHRpb24udmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRzXCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIsIGRhdGEsIHBhcmVudCkgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tQmxvY2s+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuIl19