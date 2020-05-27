import { __extends } from "tslib";
import { Component } from "@angular/core";
import { HbFormArrayComponent } from "./hb-form-array.component";
import * as i0 from "@angular/core";
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var configName_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    i0.ɵɵproperty("value", i_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", configName_r11, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(5); return ctx_r13.data.add(); });
    i0.ɵɵtext(1, " Add ");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { standalone: true }; };
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 7);
    i0.ɵɵlistener("ngModelChange", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.data.useConfig = $event; });
    i0.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template, 2, 2, "mat-option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template, 2, 0, "button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r6.data.useConfig)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.data.childrenConfigName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.arrayType != "enum");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); var i_r19 = ctx.index; var ctx_r20 = i0.ɵɵnextContext(5); ctx_r20.data.useConfig = i_r19; return ctx_r20.data.add(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var configName_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u253C ", configName_r18, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template, 2, 1, "button", 12);
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r8.data.childrenConfigName);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template, 5, 5, "ng-container", 5);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r7 = i0.ɵɵreference(3);
    var ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.data.expandOptions)("ngIfElse", _r7);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card-title");
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template, 2, 1, "h2", 2);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data.label != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.data.childrenConfigName.length > 0);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    var ctx_r27 = i0.ɵɵnextContext();
    var cell_r22 = ctx_r27.$implicit;
    var i_r23 = ctx_r27.index;
    var ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", cell_r22)("key", i_r23)("parent", ctx_r24.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    var each_r29 = i0.ɵɵnextContext(2).$implicit;
    var i_r23 = i0.ɵɵnextContext(2).index;
    var ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r29.val)("key", i_r23)("parent", ctx_r31.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-array", 16);
} if (rf & 2) {
    var each_r29 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r32 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r32.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-object", 16);
} if (rf & 2) {
    var each_r29 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r33 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r33.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template, 1, 3, "hb-mat-form-array", 14);
    i0.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var each_r29 = i0.ɵɵnextContext().$implicit;
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
    var each_r29 = ctx.$implicit;
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
    var cell_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, cell_r22.children));
} }
function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); var i_r23 = i0.ɵɵnextContext().index; var ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.data.remove(i_r23); });
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
    var cell_r22 = ctx.$implicit;
    var i_r23 = ctx.index;
    var ctx_r2 = i0.ɵɵnextContext(2);
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
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
var _c1 = function (a0) { return { "hb-form-with-hints": a0 }; };
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
    var ctx_r0 = i0.ɵɵnextContext();
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
var HbFormMatArrayComponent = /** @class */ (function (_super) {
    __extends(HbFormMatArrayComponent, _super);
    function HbFormMatArrayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormMatArrayComponent.ɵfac = function HbFormMatArrayComponent_Factory(t) { return ɵHbFormMatArrayComponent_BaseFactory(t || HbFormMatArrayComponent); };
    HbFormMatArrayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormMatArrayComponent, selectors: [["hb-mat-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-default hb-form-add-btn", 3, "click", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "hb-form-remove-btn", 3, "click"], [1, "mat-hint"]], template: function HbFormMatArrayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_Template, 7, 15, "mat-card", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
        } }, encapsulation: 2 });
    return HbFormMatArrayComponent;
}(HbFormArrayComponent));
export { HbFormMatArrayComponent };
var ɵHbFormMatArrayComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormMatArrayComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormMatArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-array',
                templateUrl: './hb-form-mat-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1tYXQtYXJyYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0tbWF0LWFycmF5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0tbWF0LWFycmF5LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7SUNjckQsMEJBQTZCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSzs7O0lBQXJCLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBUTdCLHNDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFhOzs7O0lBRmlFLDZCQUFXO0lBQ3JGLGVBQ0o7SUFESSwrQ0FDSjs7OztJQUlSLGtDQU1JO0lBRkksa09BQVMsa0JBQVUsSUFBQztJQUV4QixxQkFDSjtJQUFBLGlCQUFTOzs7OztJQWxCYiw2QkFDSTtJQUFBLHNDQUNJO0lBQUEscUNBR0k7SUFGUSxzUkFBNEI7SUFFcEMsZ0pBQ0k7SUFFUixpQkFBYTtJQUNqQixpQkFBaUI7SUFFakIsd0lBTUk7SUFFUiwwQkFBZTs7O0lBaEJLLGVBQTRCO0lBQTVCLCtDQUE0Qiw4Q0FBQTtJQUV4QixlQUFpRTtJQUFqRSx3REFBaUU7SUFTN0UsZUFBZ0M7SUFBaEMsc0RBQWdDOzs7O0lBUXhDLGtDQUlJO0lBREksd1JBQTZCLGtCQUFVLElBQUU7SUFDN0MsWUFDSjtJQUFBLGlCQUFTOzs7SUFETCxlQUNKO0lBREksc0RBQ0o7OztJQUxBLHdJQUlJOzs7SUFGSSx3REFBaUU7OztJQXpCakYsNkJBQ0k7SUFBQSxxSUFDSTtJQW9CSixvS0FDSTtJQU9SLDBCQUFlOzs7O0lBN0JHLGVBQTBEO0lBQTFELGlEQUEwRCxpQkFBQTs7O0lBSmhGLHNDQUNJO0lBQUEsa0dBQTZCO0lBRTdCLHNIQUNJO0lBOEJSLGlCQUFpQjs7O0lBakNULGVBQXdCO0lBQXhCLDhDQUF3QjtJQUVkLGVBQTBDO0lBQTFDLGdFQUEwQzs7O0lBMEN4RCx5Q0FBa0g7Ozs7OztJQUE3RCwrQkFBYSxjQUFBLHdCQUFBOzs7SUFNdEQseUNBQ3FCOzs7OztJQUR1QyxtQ0FBaUIsY0FBQSx3QkFBQTs7O0lBRTdFLHdDQUNvQjs7OztJQURzQyxtQ0FBaUIscUJBQUEsd0JBQUE7OztJQUUzRSx5Q0FDcUI7Ozs7SUFEdUMsbUNBQWlCLHFCQUFBLHdCQUFBOzs7SUFMakYsNkJBQ0k7SUFBQSw0SkFDQTtJQUNBLDBKQUNBO0lBQ0EsNEpBQ0E7SUFDSiwwQkFBZTs7O0lBTlMsZUFBdUM7SUFBdkMsMERBQXVDO0lBRXhDLGVBQXNDO0lBQXRDLHdGQUFzQztJQUVyQyxlQUF1QztJQUF2Qyx5RkFBdUM7OztJQVBuRSwyQkFFSTtJQUFBLGdJQUNJO0lBT1IsaUJBQU07OztJQVRELHVFQUE4QztJQUNqQyxlQUE0QztJQUE1QyxtRUFBNEM7OztJQUhsRSw2QkFDSTtJQUFBLHdHQUVJOztJQVNSLDBCQUFlOzs7SUFYTixlQUFtRDtJQUFuRCxpRUFBbUQ7Ozs7SUFhNUQsa0NBR0k7SUFESSwrTkFBUywwQkFBYyxJQUFDO0lBQzVCLHdCQUNKO0lBQUEsaUJBQVM7OztJQTNCYiwyQkFPSTtJQUFBLHdIQUE2RjtJQUU3RiwyR0FDSTtJQWFKLGdHQUdJO0lBRVIsaUJBQU07Ozs7O0lBM0JELHdSQUEySDtJQUQzSCxrREFBNkI7SUFPVixlQUFnQztJQUFoQyxzREFBZ0M7SUFFdEMsZUFBZ0M7SUFBaEMsc0RBQWdDO0lBZXRDLGVBQWdDO0lBQWhDLHNEQUFnQzs7O0lBTTVDLGtDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFTOzs7SUFETCxlQUNKO0lBREksZ0pBQ0o7Ozs7SUFwRlIsbUNBYUk7SUFBQSx1Q0FDSTtJQUFBLHlHQUNJO0lBa0NSLGlCQUFrQjtJQUVsQix3Q0FDSTtJQUFBLG1GQU9JOztJQXVCSix5RkFDSTtJQUVSLGlCQUFtQjtJQUN2QixpQkFBVzs7O0lBdEZELG1OQUE0RztJQVM1RywrQ0FBMEIsMkRBQUE7SUFSMUIsb0NBQW1CO0lBYUwsZUFBd0I7SUFBeEIsOENBQXdCO0lBd0NuQyxlQUlDO0lBSkQsZ0lBSUM7SUF3Qm1CLGVBQW1CO0lBQW5CLHFFQUFtQjs7QUQvRXBEO0lBSzZDLDJDQUFvQjtJQUxqRTs7S0FNQztrSUFEWSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ1JwQyxtRkFhSTs7WUFYTSwrSEFNQzs7a0NEUlg7Q0FTQyxBQU5ELENBSzZDLG9CQUFvQixHQUNoRTtTQURZLHVCQUF1QjtvRUFBdkIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhiRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vaGItZm9ybS1hcnJheS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoYi1tYXQtZm9ybS1hcnJheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hiLWZvcm0tbWF0LWFycmF5LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsna2V5JywgJ2RhdGEnLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtTWF0QXJyYXlDb21wb25lbnQgZXh0ZW5kcyBIYkZvcm1BcnJheUNvbXBvbmVudCB7XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJoYi1mb3JtLWFycmF5IGhiLWFycmF5LXR5cGVfe3sgZGF0YS5hcnJheVR5cGUgfX0gaGItZm9ybS1hcnJheV97eyBrZXkgfX0ge3sgZGF0YT8uaHRtbD8uY2xhc3NBdHRyIH19XCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJkYXRhLmlkXCJcbiAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICBkYXRhLmNvbnRyb2wgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgIGtleSAhPSAnc2V0VmFsdWUnICYmIChcbiAgICAgICAgICAgICAgICAgIGRhdGEuaGlkZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICFkYXRhLmhpZGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgW2Zvcm1Hcm91cF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2hiLWZvcm0td2l0aC1oaW50cycgOiBkYXRhLmhpbnRzXG4gICAgICAgICAgfVwiPlxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSAqbmdJZj1cIiFkYXRhLmhpZGVIZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiAqbmdJZj1cImRhdGEubGFiZWwgIT0gJydcIj57eyBkYXRhLmxhYmVsIH19PC9oMj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuY2hpbGRyZW5Db25maWdOYW1lLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEuZXhwYW5kT3B0aW9uczsgZWxzZSBleHBhbmRlZEFycmF5UHVzaE9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJoYi1mb3JtLWFycmF5LWNvbmZpZy1zd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhLnVzZUNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGNvbmZpZ05hbWUgb2YgZGF0YS5jaGlsZHJlbkNvbmZpZ05hbWU7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwiaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb25maWdOYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBoYi1mb3JtLWFkZC1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5hcnJheVR5cGUgIT0gJ2VudW0nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0YS5hZGQoKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZXhwYW5kZWRBcnJheVB1c2hPcHRpb25zPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbmZpZ05hbWUgb2YgZGF0YS5jaGlsZHJlbkNvbmZpZ05hbWU7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRhLnVzZUNvbmZpZyA9IGk7IGRhdGEuYWRkKCk7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gyNTNDOyB7eyBjb25maWdOYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cblxuICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8ZGl2IFthdHRyLmlkXT1cImRhdGEuaWQgKyAnLScgKyBpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImhiLWZvcm0tYXJyYXktY2VsbCBoYi1mb3JtLWFycmF5LWNlbGxfe3sgY2VsbD8uZmxleGlibGVPYmplY3RUeXBlTmFtZT8udG9Mb3dlckNhc2UoKSB9fSB7eyBjZWxsPy5odG1sPy5jbGFzc0F0dHIgfX1cIlxuICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICBsZXQgY2VsbCBvZiBkYXRhLmFycmF5VHlwZSAhPSAnZW51bScgP1xuICAgICAgICAgICAgICAgICAgICAgZGF0YS5jaGlsZHJlbiA6IHJlc29sdmVkT3B0aW9ucyB8IGFzeW5jXG4gICAgICAgICAgICAgICAgIDsgbGV0IGk9aW5kZXhcbiAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgIDxoYi1tYXQtZm9ybS13aWRnZXQgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSA9PSAnZW51bSdcIiBbZGF0YV09XCJjZWxsXCIgW2tleV09XCJpXCIgW3BhcmVudF09XCJkYXRhXCI+PC9oYi1tYXQtZm9ybS13aWRnZXQ+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSAhPSAnZW51bSdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlYWNoIG9mIGNlbGwuY2hpbGRyZW4gfCBtYXBUb0l0ZXJhYmxlO1wiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhiLWZvcm0tYXJyYXktY2VsbC1hdHRyX3t7IGVhY2gua2V5IH19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZWFjaC5oaWRlICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYi1tYXQtZm9ybS13aWRnZXQgKm5nSWY9XCJlYWNoLnZhbC5ncm91cFR5cGUgPT0gdW5kZWZpbmVkXCIgW2RhdGFdPVwiZWFjaC52YWxcIiBba2V5XT1cImlcIiBbcGFyZW50XT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGItbWF0LWZvcm0td2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLWFycmF5ICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnYXJyYXknXCIgW2RhdGFdPVwiZWFjaC52YWxcIiBba2V5XT1cImVhY2gua2V5XCIgW3BhcmVudF09XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hiLW1hdC1mb3JtLWFycmF5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLW9iamVjdCAqbmdJZj1cImVhY2gudmFsPy5ncm91cFR5cGUgPT0gJ29iamVjdCdcIiBbZGF0YV09XCJlYWNoLnZhbFwiIFtrZXldPVwiZWFjaC5rZXlcIiBbcGFyZW50XT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGItbWF0LWZvcm0tb2JqZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImhiLWZvcm0tcmVtb3ZlLWJ0blwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuYXJyYXlUeXBlICE9ICdlbnVtJ1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRhLnJlbW92ZShpKVwiPlxuICAgICAgICAgICAgICAgICYjeDI3MTU7XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cIm1hdC1oaW50XCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIpIDogZGF0YS5oaW50cyB9fVxuICAgICAgICA8L3N0cm9uZz5cbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19