import { __extends } from "tslib";
import { HbFormWidgetComponent } from "./hb-form-widget.component";
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/radio";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/select";
function HbFormMatWidgetComponent_div_0_ng_template_1_Template(rf, ctx) { }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHtml", ctx_r10.data.matExtra.matPrefix, i0.ɵɵsanitizeHtml);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 13);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.typeof(ctx_r11.data.hints) == "function" ? ctx_r11.data.hints(ctx_r11.data.diContainer, ctx_r11.data, ctx_r11.parent) : ctx_r11.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHtml", ctx_r12.data.matExtra.matSuffix, i0.ɵɵsanitizeHtml);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 7);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template, 1, 1, "div", 8);
    i0.ɵɵelementStart(2, "input", 9);
    i0.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(4); return ctx_r13.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template, 3, 1, "mat-hint", 10);
    i0.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template, 1, 1, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matPrefix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r7.data.renderType ? ctx_r7.data.renderType : "text")("placeholder", ctx_r7.data.label !== undefined ? ctx_r7.data.label : null)("formControl", ctx_r7.data.control);
    i0.ɵɵattribute("id", (ctx_r7.key ? ctx_r7.key : ctx_r7.data.slug) + "-input");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.hints);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matSuffix);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r19.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r19.label);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 13);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.typeof(ctx_r18.data.hints) == "function" ? ctx_r18.data.hints(ctx_r18.data.diContainer, ctx_r18.data, ctx_r18.parent) : ctx_r18.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "input", 15);
    i0.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r21); var ctx_r20 = i0.ɵɵnextContext(5); return ctx_r20.data.control.patchValue($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-autocomplete", null, 16);
    i0.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template, 3, 2, "mat-option", 17);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template, 3, 1, "mat-hint", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r16 = i0.ɵɵreference(3);
    var ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r15.data.label !== undefined ? ctx_r15.data.label : ctx_r15.data.option.name);
    i0.ɵɵproperty("type", ctx_r15.data.renderType ? ctx_r15.data.renderType : "text")("formControl", ctx_r15.data.control)("matAutocomplete", _r16);
    i0.ɵɵattribute("id", ctx_r15.key ? ctx_r15.key : ctx_r15.data.slug + "-input");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 7, ctx_r15.data.selectOptionsObservables));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.data == null ? null : ctx_r15.data.hints);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template, 7, 9, "mat-form-field", 3);
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r9.data.autocomplete.renderType != "custom");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template, 5, 7, "mat-form-field", 4);
    i0.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", 5, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r8 = i0.ɵɵreference(3);
    var ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.data.selectOptionsObservables == undefined)("ngIfElse", _r8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.data.autocomplete != undefined);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 13);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.typeof(ctx_r22.data.hints) == "function" ? ctx_r22.data.hints(ctx_r22.data.diContainer, ctx_r22.data, ctx_r22.parent) : ctx_r22.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "textarea", 19);
    i0.ɵɵtext(2, "            ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template, 3, 1, "mat-hint", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r6.data.control)("placeholder", ctx_r6.data.label ? ctx_r6.data.label : ctx_r6.data.option.name);
    i0.ɵɵattribute("id", ctx_r6.key ? ctx_r6.key : ctx_r6.data.slug + "-input");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.data == null ? null : ctx_r6.data.hints);
} }
var _c0 = function () { return ["select", "radio", "checkbox", "textarea"]; };
function HbFormMatWidgetComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template, 4, 3, "ng-container", 3);
    i0.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template, 4, 4, "mat-form-field", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(2, _c0).indexOf(ctx_r3.data.renderType) === 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.data.renderType === "textarea");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 26);
    i0.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template_mat_radio_button_change_0_listener($event) { i0.ɵɵrestoreView(_r32); var option_r30 = ctx.$implicit; var ctx_r31 = i0.ɵɵnextContext(5); return ctx_r31.updateParentValue($event, option_r30); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r30 = ctx.$implicit;
    var ctx_r29 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("value", option_r30.value)("checked", ctx_r29.data.control.value === option_r30.value || option_r30.id === ctx_r29.data.control.value ? true : null);
    i0.ɵɵattribute("name", ctx_r29.data.renderType == "radio" ? (ctx_r29.key ? ctx_r29.key : ctx_r29.data.slug) + "-input" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r30.name, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-group", 24);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template, 2, 4, "mat-radio-button", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("formControl", ctx_r26.data.control);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r26.data.options);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    var _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 29);
    i0.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r39); var option_r37 = ctx.$implicit; var ctx_r38 = i0.ɵɵnextContext(6); return ctx_r38.updateParentValue($event, option_r37); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r37 = ctx.$implicit;
    var ctx_r36 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("value", option_r37.value)("checked", ctx_r36.data.control.value === option_r37.value || option_r37.id === ctx_r36.data.control.value ? true : null)("formControl", ctx_r36.data.control);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r37.name, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template, 2, 4, "mat-checkbox", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r33 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r33.data.options);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-checkbox", 30);
    i0.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r41); var ctx_r40 = i0.ɵɵnextContext(5); return ctx_r40.data.control.patchValue($event.source.checked); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r35 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r35.data.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r35.data.control.value ? true : null);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r34 = i0.ɵɵreference(2);
    var ctx_r28 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (ctx_r28.parent == null ? null : ctx_r28.parent.arrayType) == "enum")("ngIfElse", _r34);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template, 2, 2, "mat-radio-group", 22);
    i0.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template, 3, 2, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r27 = i0.ɵɵreference(3);
    var ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.data.renderType == "radio")("ngIfElse", _r27);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r45 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r45.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r45.name ? option_r45.name : option_r45.value, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-select", 32);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 17);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("formControl", ctx_r42.data.control)("placeholder", ctx_r42.data.label != undefined ? ctx_r42.data.label : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 3, ctx_r42.resolvedOptions));
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 13);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r43 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r43.typeof(ctx_r43.data.hints) == "function" ? ctx_r43.data.hints(ctx_r43.data.diContainer, ctx_r43.data, ctx_r43.parent) : ctx_r43.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template, 3, 5, "mat-select", 31);
    i0.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template, 3, 1, "mat-hint", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.data.renderType == "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.data == null ? null : ctx_r25.data.hints);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template, 4, 2, "div", 20);
    i0.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template, 3, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r24 = i0.ɵɵreference(3);
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.data.renderType != "select")("ngIfElse", _r24);
} }
var _c1 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
var _c2 = function () { return ["radio", "checkbox", "select"]; };
function HbFormMatWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_4_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c1, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.useComponent && (ctx_r0.parent == null ? null : ctx_r0.parent.arrayType) !== "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.useComponent && i0.ɵɵpureFunction0(10, _c2).indexOf(ctx_r0.data.renderType) > 0 - 1);
} }
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
    HbFormMatWidgetComponent.ɵfac = function HbFormMatWidgetComponent_Factory(t) { return ɵHbFormMatWidgetComponent_BaseFactory(t || HbFormMatWidgetComponent); };
    HbFormMatWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormMatWidgetComponent, selectors: [["hb-mat-form-widget"]], inputs: { data: "data", key: "key", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["customBlock", ""], [4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], ["class", "form-field-prefix", "matPrefix", "", 3, "innerHtml", 4, "ngIf"], ["matInput", "", 3, "type", "placeholder", "formControl", "change"], ["align", "start", 4, "ngIf"], ["class", "form-field-suffix", "matSuffix", "", 3, "innerHtml", 4, "ngIf"], ["matPrefix", "", 1, "form-field-prefix", 3, "innerHtml"], ["align", "start"], ["matSuffix", "", 1, "form-field-suffix", 3, "innerHtml"], ["matInput", "", 3, "type", "placeholder", "formControl", "matAutocomplete", "change"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "rows", "5", 3, "formControl", "placeholder"], [4, "ngIf", "ngIfElse"], ["selectBlock", ""], [3, "formControl", 4, "ngIf", "ngIfElse"], ["checkBoxBlock", ""], [3, "formControl"], ["class", "example-radio-button", 3, "value", "checked", "change", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value", "checked", "change"], ["booleanCheckboxBlock", ""], [3, "value", "checked", "formControl", "change", 4, "ngFor", "ngForOf"], [3, "value", "checked", "formControl", "change"], [3, "checked", "change"], [3, "formControl", "placeholder", 4, "ngIf"], [3, "formControl", "placeholder"]], template: function HbFormMatWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_Template, 5, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
        } }, directives: [i1.NgIf, i1.NgClass, i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i2.MatPrefix, i2.MatHint, i2.MatSuffix, i5.MatAutocompleteTrigger, i5.MatAutocomplete, i1.NgForOf, i6.MatOption, i7.MatRadioGroup, i7.MatRadioButton, i8.MatCheckbox, i9.MatSelect], pipes: [i1.AsyncPipe], encapsulation: 2 });
    return HbFormMatWidgetComponent;
}(HbFormWidgetComponent));
export { HbFormMatWidgetComponent };
var ɵHbFormMatWidgetComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormMatWidgetComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormMatWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-widget',
                templateUrl: './hb-form-mat-widget.tpl.html',
                inputs: ['data', 'key', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1tYXQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oYi1mb3JtLW1hdC13aWRnZXQuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvaGItZm9ybS1tYXQtd2lkZ2V0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDeUJsQywwQkFJTzs7O0lBREYsOEVBQXFDOzs7SUFVMUMsb0NBQ0k7SUFBQSw4QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFXOzs7SUFGSCxlQUNKO0lBREksbUxBQ0o7OztJQUdKLDBCQUdpRDs7O0lBQTVDLDhFQUFxQzs7OztJQXZCOUMseUNBQ0k7SUFBQSw4SEFJQztJQUVELGdDQU9BO0lBSk8sNE5BQVUsb0RBQTRDLElBQUM7SUFIOUQsaUJBT0E7SUFBQSx5SUFDSTtJQUtKLCtIQUcyQztJQUMvQyxpQkFBaUI7OztJQXJCUixlQUFpQztJQUFqQyx3SEFBaUM7SUFNL0IsZUFBbUQ7SUFBbkQsK0VBQW1ELDJFQUFBLG9DQUFBO0lBRG5ELDZFQUE4QztJQU03QixlQUFtQjtJQUFuQixxRUFBbUI7SUFRdEMsZUFBaUM7SUFBakMsd0hBQWlDOzs7SUFnQjlCLHNDQUNJO0lBQUEsNEJBQU07SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ25DLGlCQUFhOzs7SUFGNEQsd0NBQXNCO0lBQ3JGLGVBQWtCO0lBQWxCLHNDQUFrQjs7O0lBSWhDLG9DQUNJO0lBQUEsOEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7SUFDYixpQkFBVzs7O0lBRkgsZUFDSjtJQURJLG1MQUNKOzs7O0lBbkJSLHNDQUNoQjtJQUNvQixpQ0FRQTtJQUxPLDBP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QW9FYSxlQUEyRjtJQUEzRix1SEFBMkY7O0FEeEY3RztJQUs4Qyw0Q0FBcUI7SUFMbkU7O0tBa0JDO0lBWkcsMkNBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNwRTtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUM3QixDQUFBO1NBQ0o7SUFDTCxDQUFDO3FJQVpRLHdCQUF3QjtpRUFBeEIsd0JBQXdCO1lDUnJDLDBFQWtCSTs7WUFsQkMsc01BV0M7O21DRFhOO0NBcUJDLEFBbEJELENBSzhDLHFCQUFxQixHQWFsRTtTQWJZLHdCQUF3QjtxRUFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSBcIi4vaGItZm9ybS13aWRnZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGItbWF0LWZvcm0td2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGItZm9ybS1tYXQtd2lkZ2V0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnZGF0YScsICdrZXknLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtTWF0V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcnJheVR5cGUgPT0gJ2VudW0nICYmXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5jb250cm9sLnZhbHVlLmluZGV4T2YodGhpcy5kYXRhLm9wdGlvbnNbMF0udmFsdWUpID4gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuY29udHJvbC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiAqbmdJZj1cIlxuICAgICAgICAgZGF0YS5jb250cm9sICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgKFxuICAgICAgICAgICAgIGRhdGEuZ3JvdXBUeXBlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgIHBhcmVudC5hcnJheVR5cGUgPT0gJ2VudW0nXG4gICAgICAgICApICYmXG4gICAgICAgICBrZXkgIT0gJ3NldFZhbHVlJyAmJlxuICAgICAgICAgKFxuICAgICAgICAgICAgIGRhdGEuaGlkZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAhZGF0YS5oaWRlXG4gICAgICAgICApXG4gICAgIFwiXG4gICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICdlcnJvcic6ICFkYXRhLmNvbnRyb2wudmFsaWQsXG4gICAgICAgICAnaGItZm9ybS13aXRoLWhpbnRzJyA6IGRhdGEuaGludHNcbiAgICAgfVwiXG4gICAgIGNsYXNzPVwiZXhwYW5kLXRvLWNoaWxkIGhiLWZvcm0td2lkZ2V0IGhiLWZvcm0td2lkZ2V0X3t7IGtleSB9fSB7eyBkYXRhPy5odG1sPy5jbGFzc0F0dHIgfX1cIlxuPlxuICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tQmxvY2s+PC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJcbiAgICAgICAgIWRhdGEudXNlQ29tcG9uZW50ICYmXG4gICAgICAgIHBhcmVudD8uYXJyYXlUeXBlICE9PSAnZW51bSdcbiAgICBcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIlsnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ10uaW5kZXhPZihkYXRhLnJlbmRlclR5cGUpID09PSAtMVwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiZGF0YS5zZWxlY3RPcHRpb25zT2JzZXJ2YWJsZXMgPT0gdW5kZWZpbmVkOyBlbHNlIGF1dG9jb21wbGV0ZUJsb2NrXCIgY2xhc3M9XCJoYi1mb3JtLXdpZGdldC1pbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkLXByZWZpeFwiXG4gICAgICAgICAgICAgICAgICAgICBtYXRQcmVmaXhcbiAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YT8ubWF0RXh0cmE/Lm1hdFByZWZpeFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5uZXJIdG1sXT1cImRhdGEubWF0RXh0cmEubWF0UHJlZml4XCJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiKGtleSA/IGtleSA6IGRhdGEuc2x1ZykgKyAnLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImRhdGEucmVuZGVyVHlwZSA/IGRhdGEucmVuZGVyVHlwZSA6ICd0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZGF0YS5jb250cm9sLnBhdGNoVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZGF0YS5sYWJlbCAhPT0gdW5kZWZpbmVkID8gZGF0YS5sYWJlbCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCIgLz5cblxuICAgICAgICAgICAgICAgIDxtYXQtaGludCBhbGlnbj1cInN0YXJ0XCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIsIGRhdGEsIHBhcmVudCkgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvbWF0LWhpbnQ+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZC1zdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgICAgbWF0U3VmZml4XG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGE/Lm1hdEV4dHJhPy5tYXRTdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgICAgW2lubmVySHRtbF09XCJkYXRhLm1hdEV4dHJhLm1hdFN1ZmZpeFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhdXRvY29tcGxldGVCbG9jayBbbmdJZl09XCJkYXRhLmF1dG9jb21wbGV0ZSAhPSB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJkYXRhLmF1dG9jb21wbGV0ZS5yZW5kZXJUeXBlICE9ICdjdXN0b20nO1wiPlxuPCEtLSAgICAgICAgICAgICAgICAgIGVsc2UgYXV0b2NvbXBsZXRlQ3VzdG9taXplQmxvY2stLT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJrZXkgPyBrZXkgOiBkYXRhLnNsdWcgKyAnLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJkYXRhLnJlbmRlclR5cGUgPyBkYXRhLnJlbmRlclR5cGUgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBkYXRhLmxhYmVsICE9PSB1bmRlZmluZWQgPyBkYXRhLmxhYmVsIDogZGF0YS5vcHRpb24ubmFtZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YS5zZWxlY3RPcHRpb25zT2JzZXJ2YWJsZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8bWF0LWhpbnQgYWxpZ249XCJzdGFydFwiICpuZ0lmPVwiZGF0YT8uaGludHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIsIGRhdGEsIHBhcmVudCkgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaGludD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlID09PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcm93cz1cIjVcIiBbZm9ybUNvbnRyb2xdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZGF0YS5sYWJlbCA/IGRhdGEubGFiZWwgOiBkYXRhLm9wdGlvbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJrZXkgPyBrZXkgOiBkYXRhLnNsdWcgKyAnLWlucHV0J1wiPlxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIsIGRhdGEsIHBhcmVudCkgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L21hdC1oaW50PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkYXRhLnVzZUNvbXBvbmVudCAmJiBbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3NlbGVjdCddLmluZGV4T2YoZGF0YS5yZW5kZXJUeXBlKSA+IC0xXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgIT0gJ3NlbGVjdCc7IGVsc2Ugc2VsZWN0QmxvY2tcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgKm5nSWY9XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3JhZGlvJzsgZWxzZSBjaGVja0JveEJsb2NrXCIgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGEub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPT09IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24uaWQgPT09IGRhdGEuY29udHJvbC52YWx1ZSA/IHRydWUgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIubmFtZV09XCJkYXRhLnJlbmRlclR5cGUgPT0gJ3JhZGlvJyA/IChrZXkgPyBrZXkgOiBkYXRhLnNsdWcpICsgJy1pbnB1dCcgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ1cGRhdGVQYXJlbnRWYWx1ZSgkZXZlbnQsIG9wdGlvbilcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cblxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjaGVja0JveEJsb2NrPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXJlbnQ/LmFycmF5VHlwZSA9PSAnZW51bSc7IGVsc2UgYm9vbGVhbkNoZWNrYm94QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPT09IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24uaWQgPT09IGRhdGEuY29udHJvbC52YWx1ZSA/IHRydWUgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidXBkYXRlUGFyZW50VmFsdWUoJGV2ZW50LCBvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYm9vbGVhbkNoZWNrYm94QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBkYXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJkYXRhLmNvbnRyb2wudmFsdWUgPyB0cnVlIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJkYXRhLmNvbnRyb2wucGF0Y2hWYWx1ZSgkZXZlbnQuc291cmNlLmNoZWNrZWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3NlbGVjdEJsb2NrPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5yZW5kZXJUeXBlID09ICdzZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRhdGEuY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJkYXRhLmxhYmVsICE9IHVuZGVmaW5lZCA/IGRhdGEubGFiZWwgOiBudWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmVzb2x2ZWRPcHRpb25zIHwgYXN5bmNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubmFtZSA/IG9wdGlvbi5uYW1lIDogb3B0aW9uLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICA8bWF0LWhpbnQgYWxpZ249XCJzdGFydFwiICpuZ0lmPVwiZGF0YT8uaGludHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHR5cGVvZihkYXRhLmhpbnRzKSA9PSAnZnVuY3Rpb24nID8gZGF0YS5oaW50cyhkYXRhLmRpQ29udGFpbmVyLCBkYXRhLCBwYXJlbnQpIDogZGF0YS5oaW50cyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L21hdC1oaW50PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19