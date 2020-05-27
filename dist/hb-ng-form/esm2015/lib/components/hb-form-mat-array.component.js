import { Component } from "@angular/core";
import { HbFormArrayComponent } from "./hb-form-array.component";
import * as i0 from "@angular/core";
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const configName_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵproperty("value", i_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", configName_r11, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(5); return ctx_r13.data.add(); });
    i0.ɵɵtext(1, " Add ");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { standalone: true }; };
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 7);
    i0.ɵɵlistener("ngModelChange", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.data.useConfig = $event; });
    i0.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template, 2, 2, "mat-option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template, 2, 0, "button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r6.data.useConfig)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.data.childrenConfigName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.arrayType != "enum");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const i_r19 = ctx.index; const ctx_r20 = i0.ɵɵnextContext(5); ctx_r20.data.useConfig = i_r19; return ctx_r20.data.add(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const configName_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u253C ", configName_r18, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template, 2, 1, "button", 12);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r8.data.childrenConfigName);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template, 5, 5, "ng-container", 5);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.data.expandOptions)("ngIfElse", _r7);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card-title");
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template, 2, 1, "h2", 2);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data.childrenConfigName.length > 0);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext();
    const cell_r22 = ctx_r27.$implicit;
    const i_r23 = ctx_r27.index;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", cell_r22)("key", i_r23)("parent", ctx_r24.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    const each_r29 = i0.ɵɵnextContext(2).$implicit;
    const i_r23 = i0.ɵɵnextContext(2).index;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r29.val)("key", i_r23)("parent", ctx_r31.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-array", 16);
} if (rf & 2) {
    const each_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r32 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r32.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-object", 16);
} if (rf & 2) {
    const each_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r33 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r33.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template, 1, 3, "hb-mat-form-array", 14);
    i0.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", each_r29.val.groupType == undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "object");
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const each_r29 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("hb-form-array-cell-attr_", each_r29.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r29.hide && each_r29.key != "setValue");
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
    i0.ɵɵpipe(2, "mapToIterable");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, cell_r22.children));
} }
function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const i_r23 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.data.remove(i_r23); });
    i0.ɵɵtext(1, " \u2715 ");
    i0.ɵɵelementEnd();
} }
function HbFormMatArrayComponent_mat_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template, 2, 0, "button", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r22 == null ? null : cell_r22.flexibleObjectTypeName == null ? null : cell_r22.flexibleObjectTypeName.toLowerCase(), " ", cell_r22 == null ? null : cell_r22.html == null ? null : cell_r22.html.classAttr, "");
    i0.ɵɵattribute("id", ctx_r2.data.id + "-" + i_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.data.arrayType == "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
} }
function HbFormMatArrayComponent_mat_card_0_strong_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c1 = function (a0) { return { "hb-form-with-hints": a0 }; };
function HbFormMatArrayComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 1);
    i0.ɵɵelementStart(1, "mat-card-header");
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template, 3, 2, "mat-card-title", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-card-content");
    i0.ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_div_4_Template, 4, 8, "div", 3);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, HbFormMatArrayComponent_mat_card_0_strong_6_Template, 2, 1, "strong", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("hb-form-array hb-array-type_", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    i0.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx_r0.data.hints));
    i0.ɵɵattribute("id", ctx_r0.data.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : i0.ɵɵpipeBind1(5, 11, ctx_r0.resolvedOptions));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
export class HbFormMatArrayComponent extends HbFormArrayComponent {
}
HbFormMatArrayComponent.ɵfac = function HbFormMatArrayComponent_Factory(t) { return ɵHbFormMatArrayComponent_BaseFactory(t || HbFormMatArrayComponent); };
HbFormMatArrayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormMatArrayComponent, selectors: [["hb-mat-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-default hb-form-add-btn", 3, "click", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "hb-form-remove-btn", 3, "click"], [1, "mat-hint"]], template: function HbFormMatArrayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_Template, 7, 15, "mat-card", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormMatArrayComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormMatArrayComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormMatArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-array',
                templateUrl: './hb-form-mat-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1tYXQtYXJyYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0tbWF0LWFycmF5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0tbWF0LWFycmF5LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQ2NyRCwwQkFBNkI7SUFBQSxZQUFnQjtJQUFBLGlCQUFLOzs7SUFBckIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFRN0Isc0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQWE7Ozs7SUFGaUUsNkJBQVc7SUFDckYsZUFDSjtJQURJLCtDQUNKOzs7O0lBSVIsa0NBTUk7SUFGSSxvT0FBUyxrQkFBVSxJQUFDO0lBRXhCLHFCQUNKO0lBQUEsaUJBQVM7Ozs7O0lBbEJiLDZCQUNJO0lBQUEsc0NBQ0k7SUFBQSxxQ0FHSTtJQUZRLHdSQUE0QjtJQUVwQyxnSkFDSTtJQUVSLGlCQUFhO0lBQ2pCLGlCQUFpQjtJQUVqQix3SUFNSTtJQUVSLDBCQUFlOzs7SUFoQkssZUFBNEI7SUFBNUIsK0NBQTRCLDhDQUFBO0lBRXhCLGVBQWlFO0lBQWpFLHdEQUFpRTtJQVM3RSxlQUFnQztJQUFoQyxzREFBZ0M7Ozs7SUFReEMsa0NBSUk7SUFESSw0UkFBNkIsa0JBQVUsSUFBRTtJQUM3QyxZQUNKO0lBQUEsaUJBQVM7OztJQURMLGVBQ0o7SUFESSxzREFDSjs7O0lBTEEsd0lBSUk7OztJQUZJLHdEQUFpRTs7O0lBekJqRiw2QkFDSTtJQUFBLHFJQUNJO0lBb0JKLG9LQUNJO0lBT1IsMEJBQWU7Ozs7SUE3QkcsZUFBMEQ7SUFBMUQsaURBQTBELGlCQUFBOzs7SUFKaEYsc0NBQ0k7SUFBQSxrR0FBNkI7SUFFN0Isc0hBQ0k7SUE4QlIsaUJBQWlCOzs7SUFqQ1QsZUFBd0I7SUFBeEIsOENBQXdCO0lBRWQsZUFBMEM7SUFBMUMsZ0VBQTBDOzs7SUEwQ3hELHlDQUFrSDs7Ozs7O0lBQTdELCtCQUFhLGNBQUEsd0JBQUE7OztJQU10RCx5Q0FDcUI7Ozs7O0lBRHVDLG1DQUFpQixjQUFBLHdCQUFBOzs7SUFFN0Usd0NBQ29COzs7O0lBRHNDLG1DQUFpQixxQkFBQSx3QkFBQTs7O0lBRTNFLHlDQUNxQjs7OztJQUR1QyxtQ0FBaUIscUJBQUEsd0JBQUE7OztJQUxqRiw2QkFDSTtJQUFBLDRKQUNBO0lBQ0EsMEpBQ0E7SUFDQSw0SkFDQTtJQUNKLDBCQUFlOzs7SUFOUyxlQUF1QztJQUF2QywwREFBdUM7SUFFeEMsZUFBc0M7SUFBdEMsd0ZBQXNDO0lBRXJDLGVBQXVDO0lBQXZDLHlGQUF1Qzs7O0lBUG5FLDJCQUVJO0lBQUEsZ0lBQ0k7SUFPUixpQkFBTTs7O0lBVEQsdUVBQThDO0lBQ2pDLGVBQTRDO0lBQTVDLG1FQUE0Qzs7O0lBSGxFLDZCQUNJO0lBQUEsd0dBRUk7O0lBU1IsMEJBQWU7OztJQVhOLGVBQW1EO0lBQW5ELGlFQUFtRDs7OztJQWE1RCxrQ0FHSTtJQURJLG1PQUFTLDBCQUFjLElBQUM7SUFDNUIsd0JBQ0o7SUFBQSxpQkFBUzs7O0lBM0JiLDJCQU9JO0lBQUEsd0hBQTZGO0lBRTdGLDJHQUNJO0lBYUosZ0dBR0k7SUFFUixpQkFBTTs7Ozs7SUEzQkQsd1JBQTJIO0lBRDNILGtEQUE2QjtJQU9WLGVBQWdDO0lBQWhDLHNEQUFnQztJQUV0QyxlQUFnQztJQUFoQyxzREFBZ0M7SUFldEMsZUFBZ0M7SUFBaEMsc0RBQWdDOzs7SUFNNUMsa0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7OztJQURMLGVBQ0o7SUFESSxnSkFDSjs7OztJQXBGUixtQ0FhSTtJQUFBLHVDQUNJO0lBQUEseUdBQ0k7SUFrQ1IsaUJBQWtCO0lBRWxCLHdDQUNJO0lBQUEsbUZBT0k7O0lBdUJKLHlGQUNJO0lBRVIsaUJBQW1CO0lBQ3ZCLGlCQUFXOzs7SUF0RkQsbU5BQTRHO0lBUzVHLCtDQUEwQiwyREFBQTtJQVIxQixvQ0FBbUI7SUFhTCxlQUF3QjtJQUF4Qiw4Q0FBd0I7SUF3Q25DLGVBSUM7SUFKRCxnSUFJQztJQXdCbUIsZUFBbUI7SUFBbkIscUVBQW1COztBRDFFcEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG9CQUFvQjs7OEhBQXBELHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUnBDLG1GQWFJOztRQVhNLCtIQU1DOztzRURBRSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGJGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tIFwiLi9oYi1mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLW1hdC1mb3JtLWFycmF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGItZm9ybS1tYXQtYXJyYXkudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydrZXknLCAnZGF0YScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1NYXRBcnJheUNvbXBvbmVudCBleHRlbmRzIEhiRm9ybUFycmF5Q29tcG9uZW50IHtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImhiLWZvcm0tYXJyYXkgaGItYXJyYXktdHlwZV97eyBkYXRhLmFycmF5VHlwZSB9fSBoYi1mb3JtLWFycmF5X3t7IGtleSB9fSB7eyBkYXRhPy5odG1sPy5jbGFzc0F0dHIgfX1cIlxuICAgICAgICAgIFthdHRyLmlkXT1cImRhdGEuaWRcIlxuICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgIGRhdGEuY29udHJvbCAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAga2V5ICE9ICdzZXRWYWx1ZScgJiYgKFxuICAgICAgICAgICAgICAgICAgZGF0YS5oaWRlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgIWRhdGEuaGlkZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbZm9ybUdyb3VwXT1cImRhdGEuY29udHJvbFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAnaGItZm9ybS13aXRoLWhpbnRzJyA6IGRhdGEuaGludHNcbiAgICAgICAgICB9XCI+XG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlICpuZ0lmPVwiIWRhdGEuaGlkZUhlYWRlclwiPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwiZGF0YS5sYWJlbCAhPSAnJ1wiPnt7IGRhdGEubGFiZWwgfX08L2gyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5jaGlsZHJlbkNvbmZpZ05hbWUubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGF0YS5leHBhbmRPcHRpb25zOyBlbHNlIGV4cGFuZGVkQXJyYXlQdXNoT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cImhiLWZvcm0tYXJyYXktY29uZmlnLXN3aXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGEudXNlQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY29uZmlnTmFtZSBvZiBkYXRhLmNoaWxkcmVuQ29uZmlnTmFtZTsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbmZpZ05hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGhiLWZvcm0tYWRkLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSAhPSAnZW51bSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRhLmFkZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNleHBhbmRlZEFycmF5UHVzaE9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY29uZmlnTmFtZSBvZiBkYXRhLmNoaWxkcmVuQ29uZmlnTmFtZTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGEudXNlQ29uZmlnID0gaTsgZGF0YS5hZGQoKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDI1M0M7IHt7IGNvbmZpZ05hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxuXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgW2F0dHIuaWRdPVwiZGF0YS5pZCArICctJyArIGlcIlxuICAgICAgICAgICAgIGNsYXNzPVwiaGItZm9ybS1hcnJheS1jZWxsIGhiLWZvcm0tYXJyYXktY2VsbF97eyBjZWxsPy5mbGV4aWJsZU9iamVjdFR5cGVOYW1lPy50b0xvd2VyQ2FzZSgpIH19IHt7IGNlbGw/Lmh0bWw/LmNsYXNzQXR0ciB9fVwiXG4gICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgIGxldCBjZWxsIG9mIGRhdGEuYXJyYXlUeXBlICE9ICdlbnVtJyA/XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLmNoaWxkcmVuIDogcmVzb2x2ZWRPcHRpb25zIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgOyBsZXQgaT1pbmRleFxuICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgPGhiLW1hdC1mb3JtLXdpZGdldCAqbmdJZj1cImRhdGEuYXJyYXlUeXBlID09ICdlbnVtJ1wiIFtkYXRhXT1cImNlbGxcIiBba2V5XT1cImlcIiBbcGFyZW50XT1cImRhdGFcIj48L2hiLW1hdC1mb3JtLXdpZGdldD5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuYXJyYXlUeXBlICE9ICdlbnVtJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVhY2ggb2YgY2VsbC5jaGlsZHJlbiB8IG1hcFRvSXRlcmFibGU7XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGItZm9ybS1hcnJheS1jZWxsLWF0dHJfe3sgZWFjaC5rZXkgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlYWNoLmhpZGUgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLXdpZGdldCAqbmdJZj1cImVhY2gudmFsLmdyb3VwVHlwZSA9PSB1bmRlZmluZWRcIiBbZGF0YV09XCJlYWNoLnZhbFwiIFtrZXldPVwiaVwiIFtwYXJlbnRdPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oYi1tYXQtZm9ybS13aWRnZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGItbWF0LWZvcm0tYXJyYXkgKm5nSWY9XCJlYWNoLnZhbD8uZ3JvdXBUeXBlID09ICdhcnJheSdcIiBbZGF0YV09XCJlYWNoLnZhbFwiIFtrZXldPVwiZWFjaC5rZXlcIiBbcGFyZW50XT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGItbWF0LWZvcm0tYXJyYXk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGItbWF0LWZvcm0tb2JqZWN0ICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnb2JqZWN0J1wiIFtkYXRhXT1cImVhY2gudmFsXCIgW2tleV09XCJlYWNoLmtleVwiIFtwYXJlbnRdPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oYi1tYXQtZm9ybS1vYmplY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwiaGItZm9ybS1yZW1vdmUtYnRuXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5hcnJheVR5cGUgIT0gJ2VudW0nXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGEucmVtb3ZlKGkpXCI+XG4gICAgICAgICAgICAgICAgJiN4MjcxNTtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwibWF0LWhpbnRcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+XG4gICAgICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lcikgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgIDwvc3Ryb25nPlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=