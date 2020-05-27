import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';
import * as i0 from "@angular/core";
function HbFormArrayComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.data.label);
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const configName_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵproperty("value", i_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", configName_r10, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(4); return ctx_r12.data.add(); });
    i0.ɵɵtext(1, "Add");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { standalone: true }; };
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "select", 7);
    i0.ɵɵlistener("ngModelChange", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.data.useConfig = $event; });
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template, 2, 0, "button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.data.useConfig)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.data.childrenConfigName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.data.arrayType != "enum");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const i_r18 = ctx.index; const ctx_r19 = i0.ɵɵnextContext(4); ctx_r19.data.useConfig = i_r18; return ctx_r19.data.add(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const configName_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    i0.ɵɵclassMapInterpolate1("btn btn-default hb-form-add-btn hb-form-add-btn-expanded-", i_r18, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u253C ", configName_r17, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template, 2, 4, "button", 12);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r7.data.childrenConfigName);
} }
function HbFormArrayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template, 4, 5, "ng-container", 5);
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.data.expandOptions)("ngIfElse", _r6);
} }
function HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    const cell_r21 = ctx_r26.$implicit;
    const i_r22 = ctx_r26.index;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", cell_r21)("key", i_r22)("parent", ctx_r23.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    const each_r28 = i0.ɵɵnextContext(2).$implicit;
    const i_r22 = i0.ɵɵnextContext(2).index;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r28.val)("key", i_r22)("parent", ctx_r30.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-array", 16);
} if (rf & 2) {
    const each_r28 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r31 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r31.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-object", 16);
} if (rf & 2) {
    const each_r28 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r32 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r32.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template, 1, 3, "hb-form-array", 14);
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", each_r28.val.groupType == undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "object");
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const each_r28 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("panel panel-default hb-form-array-cell-attr_", each_r28.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r28.hide && each_r28.key != "setValue");
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
    i0.ɵɵpipe(2, "mapToIterable");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, cell_r21.children));
} }
function HbFormArrayComponent_div_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const i_r22 = i0.ɵɵnextContext().index; const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.data.remove(i_r22); });
    i0.ɵɵtext(1, " \u2715 ");
    i0.ɵɵelementEnd();
} }
function HbFormArrayComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_button_3_Template, 2, 0, "button", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r21 == null ? null : cell_r21.flexibleObjectTypeName == null ? null : cell_r21.flexibleObjectTypeName.toLowerCase(), " ", cell_r21 == null ? null : cell_r21.html == null ? null : cell_r21.html.classAttr, "");
    i0.ɵɵattribute("id", ctx_r3.data.id ? ctx_r3.data.id + "_" + i_r22 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.data.arrayType == "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
} }
function HbFormArrayComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.typeof(ctx_r4.data.hints) == "function" ? ctx_r4.data.hints(ctx_r4.data.diContainer) : ctx_r4.data.hints, " ");
} }
const _c1 = function (a0) { return { "hb-form-with-hints": a0 }; };
function HbFormArrayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "header");
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_h2_2_Template, 2, 1, "h2", 2);
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, HbFormArrayComponent_div_0_div_4_Template, 4, 8, "div", 3);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, HbFormArrayComponent_div_0_div_6_Template, 2, 1, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("hb-form-array ", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    i0.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", i0.ɵɵpureFunction1(14, _c1, ctx_r0.data.hints));
    i0.ɵɵattribute("id", ctx_r0.data.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.data.childrenConfigName.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : i0.ɵɵpipeBind1(5, 12, ctx_r0.resolvedOptions));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
export class HbFormArrayComponent extends HbFormWidgetComponent {
}
HbFormArrayComponent.ɵfac = function HbFormArrayComponent_Factory(t) { return ɵHbFormArrayComponent_BaseFactory(t || HbFormArrayComponent); };
HbFormArrayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormArrayComponent, selectors: [["hb-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn btn-default hb-form-add-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["class", "btn btn-default hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["type", "button", 1, "btn", "btn-default", "hb-form-remove-btn", 3, "click"], [1, "hints"]], template: function HbFormArrayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HbFormArrayComponent_div_0_Template, 7, 16, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormArrayComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormArrayComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-array',
                templateUrl: './hb-form-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYi1uZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGItZm9ybS1hcnJheS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9oYi1mb3JtLWFycmF5LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztJQ2MzRCwwQkFBNkI7SUFBQSxZQUFnQjtJQUFBLGlCQUFLOzs7SUFBckIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFNakMsa0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7Ozs7SUFGaUUsNkJBQVc7SUFDakYsZUFDSjtJQURJLCtDQUNKOzs7O0lBR0osa0NBQW9IO0lBQXJCLDJNQUFTLGtCQUFVLElBQUM7SUFBQyxtQkFBRztJQUFBLGlCQUFTOzs7OztJQVJwSSw2QkFDSTtJQUFBLGlDQUVJO0lBREksMlBBQTRCO0lBQ2hDLCtHQUNJO0lBRVIsaUJBQVM7SUFFVCwrR0FBb0g7SUFDeEgsMEJBQWU7OztJQVBILGVBQTRCO0lBQTVCLCtDQUE0Qiw4Q0FBQTtJQUN4QixlQUFpRTtJQUFqRSx3REFBaUU7SUFLZixlQUFnQztJQUFoQyxzREFBZ0M7Ozs7SUFJOUYsa0NBSUk7SUFESSxtUUFBNkIsa0JBQVUsSUFBRTtJQUM3QyxZQUNKO0lBQUEsaUJBQVM7Ozs7SUFKRCxpR0FBd0U7SUFHNUUsZUFDSjtJQURJLHNEQUNKOzs7SUFMQSwrR0FJSTs7O0lBRkksd0RBQWlFOzs7SUFmakYsNkJBQ0k7SUFBQSw0R0FDSTtJQVVKLDJJQUNJO0lBT1IsMEJBQWU7Ozs7SUFuQkcsZUFBMEQ7SUFBMUQsaURBQTBELGlCQUFBOzs7SUF5QjVFLHFDQUdpRDs7Ozs7O0lBRmpDLCtCQUFhLGNBQUEsd0JBQUE7OztJQVFqQixxQ0FHaUQ7Ozs7O0lBRmpDLG1DQUFpQixjQUFBLHdCQUFBOzs7SUFHakMsb0NBRytDOzs7O0lBRmhDLG1DQUFpQixxQkFBQSx3QkFBQTs7O0lBR2hDLHFDQUdpRDs7OztJQUZqQyxtQ0FBaUIscUJBQUEsd0JBQUE7OztJQVZyQyw2QkFDSTtJQUFBLDRJQUdnQztJQUNoQywwSUFHK0I7SUFDL0IsNElBR2dDO0lBQ3BDLDBCQUFlOzs7SUFaSyxlQUF1QztJQUF2QywwREFBdUM7SUFJeEMsZUFBc0M7SUFBdEMsd0ZBQXNDO0lBSXJDLGVBQXVDO0lBQXZDLHlGQUF1Qzs7O0lBWC9ELDJCQUVJO0lBQUEsd0hBQ0k7SUFhUixpQkFBTTs7O0lBZkQsMkZBQWtFO0lBQ3JELGVBQTRDO0lBQTVDLG1FQUE0Qzs7O0lBSGxFLDZCQUNJO0lBQUEsZ0dBRUk7O0lBZVIsMEJBQWU7OztJQWpCTixlQUFtRDtJQUFuRCxpRUFBbUQ7Ozs7SUFtQjVELGtDQUlJO0lBREksMk5BQVMsMEJBQWMsSUFBQztJQUM1Qix3QkFDSjtJQUFBLGlCQUFTOzs7SUFqQ2IsMkJBR0k7SUFBQSx3R0FHZ0M7SUFFaEMsbUdBQ0k7SUFtQkosd0ZBSUk7SUFFUixpQkFBTTs7Ozs7SUFqQ0Qsd1JBQTJIO0lBRDNILDBFQUFnRDtJQUdqQyxlQUFnQztJQUFoQyxzREFBZ0M7SUFLbEMsZUFBZ0M7SUFBaEMsc0RBQWdDO0lBc0J0QyxlQUFnQztJQUFoQyxzREFBZ0M7OztJQU01QywrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTs7O0lBREYsZUFDSjtJQURJLGdKQUNKOzs7O0lBOUVKLDhCQWNJO0lBQUEsOEJBQ0k7SUFBQSx5RUFBNkI7SUFFN0IsNkZBQ0k7SUFvQlIsaUJBQVM7SUFFVCwyRUFHSTs7SUFpQ0osMkVBQ0k7SUFFUixpQkFBTTs7O0lBOUVELHFNQUE4RjtJQVE5RiwrQ0FBMEIsMkRBQUE7SUFUMUIsb0NBQW1CO0lBZVosZUFBd0I7SUFBeEIsOENBQXdCO0lBRWQsZUFBMEM7SUFBMUMsZ0VBQTBDO0lBeUJ2RCxlQUFzRztJQUF0RyxnSUFBc0c7SUFrQ3hGLGVBQW1CO0lBQW5CLHFFQUFtQjs7QURwRTFDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7O3FIQUFsRCxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1JqQyxzRUFjSTs7UUFaQywrSEFNQzs7bUVEQU8sb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYkZvcm1XaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGItZm9ybS1hcnJheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hiLWZvcm0tYXJyYXkudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydrZXknLCAnZGF0YScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1BcnJheUNvbXBvbmVudCBleHRlbmRzIEhiRm9ybVdpZGdldENvbXBvbmVudCB7XG59XG4iLCI8ZGl2IFthdHRyLmlkXT1cImRhdGEuaWRcIlxuICAgICBjbGFzcz1cImhiLWZvcm0tYXJyYXkge3sgZGF0YS5hcnJheVR5cGUgfX0gaGItZm9ybS1hcnJheV97eyBrZXkgfX0ge3sgZGF0YT8uaHRtbD8uY2xhc3NBdHRyIH19XCJcbiAgICAgKm5nSWY9XCJcbiAgICAgICAgIGRhdGEuY29udHJvbCAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgIGtleSAhPSAnc2V0VmFsdWUnICYmIChcbiAgICAgICAgICAgICBkYXRhLmhpZGUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgIWRhdGEuaGlkZVxuICAgICAgICAgKVxuICAgICBcIlxuICAgICBbZm9ybUdyb3VwXT1cImRhdGEuY29udHJvbFwiXG4gICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICdoYi1mb3JtLXdpdGgtaGludHMnIDogZGF0YS5oaW50c1xuICAgICB9XCJcbj5cbiAgICA8aGVhZGVyPlxuICAgICAgICA8aDIgKm5nSWY9XCIhZGF0YS5oaWRlSGVhZGVyXCI+e3sgZGF0YS5sYWJlbCB9fTwvaDI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuY2hpbGRyZW5Db25maWdOYW1lLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGF0YS5leHBhbmRPcHRpb25zOyBlbHNlIGV4cGFuZGVkQXJyYXlQdXNoT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJoYi1mb3JtLWFycmF5LWNvbmZpZy1zd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhLnVzZUNvbmZpZ1wiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY29uZmlnTmFtZSBvZiBkYXRhLmNoaWxkcmVuQ29uZmlnTmFtZTsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBjb25maWdOYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBoYi1mb3JtLWFkZC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSAhPSAnZW51bSdcIiAoY2xpY2spPVwiZGF0YS5hZGQoKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZXhwYW5kZWRBcnJheVB1c2hPcHRpb25zPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBoYi1mb3JtLWFkZC1idG4gaGItZm9ybS1hZGQtYnRuLWV4cGFuZGVkLXt7IGkgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbmZpZ05hbWUgb2YgZGF0YS5jaGlsZHJlbkNvbmZpZ05hbWU7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGEudXNlQ29uZmlnID0gaTsgZGF0YS5hZGQoKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4MjUzQzsge3sgY29uZmlnTmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8ZGl2IFthdHRyLmlkXT1cImRhdGEuaWQgPyAoZGF0YS5pZCArICdfJyArIGkpIDogbnVsbFwiXG4gICAgICAgICBjbGFzcz1cImhiLWZvcm0tYXJyYXktY2VsbCBoYi1mb3JtLWFycmF5LWNlbGxfe3sgY2VsbD8uZmxleGlibGVPYmplY3RUeXBlTmFtZT8udG9Mb3dlckNhc2UoKSB9fSB7eyBjZWxsPy5odG1sPy5jbGFzc0F0dHIgfX1cIlxuICAgICAgICAgKm5nRm9yPVwibGV0IGNlbGwgb2YgKGRhdGEuYXJyYXlUeXBlICE9ICdlbnVtJyA/IGRhdGEuY2hpbGRyZW4gOiByZXNvbHZlZE9wdGlvbnMgfCBhc3luYyk7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxoYi1mb3JtLXdpZGdldCAqbmdJZj1cImRhdGEuYXJyYXlUeXBlID09ICdlbnVtJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj48L2hiLWZvcm0td2lkZ2V0PlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSAhPSAnZW51bSdcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVhY2ggb2YgY2VsbC5jaGlsZHJlbiB8IG1hcFRvSXRlcmFibGU7XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGhiLWZvcm0tYXJyYXktY2VsbC1hdHRyX3t7IGVhY2gua2V5IH19XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlYWNoLmhpZGUgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aGItZm9ybS13aWRnZXQgKm5nSWY9XCJlYWNoLnZhbC5ncm91cFR5cGUgPT0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImVhY2gudmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj48L2hiLWZvcm0td2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICA8aGItZm9ybS1hcnJheSAqbmdJZj1cImVhY2gudmFsPy5ncm91cFR5cGUgPT0gJ2FycmF5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImVhY2gudmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiPjwvaGItZm9ybS1hcnJheT5cbiAgICAgICAgICAgICAgICAgICAgPGhiLWZvcm0tb2JqZWN0ICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnb2JqZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiPjwvaGItZm9ybS1vYmplY3Q+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBoYi1mb3JtLXJlbW92ZS1idG5cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5hcnJheVR5cGUgIT0gJ2VudW0nXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0YS5yZW1vdmUoaSlcIj5cbiAgICAgICAgICAgICYjeDI3MTU7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImhpbnRzXCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lcikgOiBkYXRhLmhpbnRzIH19XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==