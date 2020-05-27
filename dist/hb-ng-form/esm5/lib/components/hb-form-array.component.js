import { __extends } from "tslib";
import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';
import * as i0 from "@angular/core";
function HbFormArrayComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.data.label);
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var configName_r10 = ctx.$implicit;
    var i_r11 = ctx.index;
    i0.ɵɵproperty("value", i_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", configName_r10, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(4); return ctx_r12.data.add(); });
    i0.ɵɵtext(1, "Add");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { standalone: true }; };
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "select", 7);
    i0.ɵɵlistener("ngModelChange", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.data.useConfig = $event; });
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template, 2, 0, "button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.data.useConfig)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.data.childrenConfigName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.data.arrayType != "enum");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); var i_r18 = ctx.index; var ctx_r19 = i0.ɵɵnextContext(4); ctx_r19.data.useConfig = i_r18; return ctx_r19.data.add(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var configName_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    i0.ɵɵclassMapInterpolate1("btn btn-default hb-form-add-btn hb-form-add-btn-expanded-", i_r18, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u253C ", configName_r17, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template, 2, 4, "button", 12);
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r7.data.childrenConfigName);
} }
function HbFormArrayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template, 4, 5, "ng-container", 5);
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r6 = i0.ɵɵreference(3);
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.data.expandOptions)("ngIfElse", _r6);
} }
function HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    var ctx_r26 = i0.ɵɵnextContext();
    var cell_r21 = ctx_r26.$implicit;
    var i_r22 = ctx_r26.index;
    var ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", cell_r21)("key", i_r22)("parent", ctx_r23.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    var each_r28 = i0.ɵɵnextContext(2).$implicit;
    var i_r22 = i0.ɵɵnextContext(2).index;
    var ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r28.val)("key", i_r22)("parent", ctx_r30.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-array", 16);
} if (rf & 2) {
    var each_r28 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r31 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r31.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-object", 16);
} if (rf & 2) {
    var each_r28 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r32 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r32.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
    i0.ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template, 1, 3, "hb-form-array", 14);
    i0.ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var each_r28 = i0.ɵɵnextContext().$implicit;
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
    var each_r28 = ctx.$implicit;
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
    var cell_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, cell_r21.children));
} }
function HbFormArrayComponent_div_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function HbFormArrayComponent_div_0_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); var i_r22 = i0.ɵɵnextContext().index; var ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.data.remove(i_r22); });
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
    var cell_r21 = ctx.$implicit;
    var i_r22 = ctx.index;
    var ctx_r3 = i0.ɵɵnextContext(2);
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
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.typeof(ctx_r4.data.hints) == "function" ? ctx_r4.data.hints(ctx_r4.data.diContainer) : ctx_r4.data.hints, " ");
} }
var _c1 = function (a0) { return { "hb-form-with-hints": a0 }; };
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
    var ctx_r0 = i0.ɵɵnextContext();
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
var HbFormArrayComponent = /** @class */ (function (_super) {
    __extends(HbFormArrayComponent, _super);
    function HbFormArrayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormArrayComponent.ɵfac = function HbFormArrayComponent_Factory(t) { return ɵHbFormArrayComponent_BaseFactory(t || HbFormArrayComponent); };
    HbFormArrayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormArrayComponent, selectors: [["hb-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn btn-default hb-form-add-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["class", "btn btn-default hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["type", "button", 1, "btn", "btn-default", "hb-form-remove-btn", 3, "click"], [1, "hints"]], template: function HbFormArrayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HbFormArrayComponent_div_0_Template, 7, 16, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
        } }, encapsulation: 2 });
    return HbFormArrayComponent;
}(HbFormWidgetComponent));
export { HbFormArrayComponent };
var ɵHbFormArrayComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormArrayComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-array',
                templateUrl: './hb-form-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYi1uZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGItZm9ybS1hcnJheS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9oYi1mb3JtLWFycmF5LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7SUNjM0QsMEJBQTZCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSzs7O0lBQXJCLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBTWpDLGtDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFTOzs7O0lBRmlFLDZCQUFXO0lBQ2pGLGVBQ0o7SUFESSwrQ0FDSjs7OztJQUdKLGtDQUFvSDtJQUFyQix5TUFBUyxrQkFBVSxJQUFDO0lBQUMsbUJBQUc7SUFBQSxpQkFBUzs7Ozs7SUFScEksNkJBQ0k7SUFBQSxpQ0FFSTtJQURJLHlQQUE0QjtJQUNoQywrR0FDSTtJQUVSLGlCQUFTO0lBRVQsK0dBQW9IO0lBQ3hILDBCQUFlOzs7SUFQSCxlQUE0QjtJQUE1QiwrQ0FBNEIsOENBQUE7SUFDeEIsZUFBaUU7SUFBakUsd0RBQWlFO0lBS2YsZUFBZ0M7SUFBaEMsc0RBQWdDOzs7O0lBSTlGLGtDQUlJO0lBREksK1BBQTZCLGtCQUFVLElBQUU7SUFDN0MsWUFDSjtJQUFBLGlCQUFTOzs7O0lBSkQsaUdBQXdFO0lBRzVFLGVBQ0o7SUFESSxzREFDSjs7O0lBTEEsK0dBSUk7OztJQUZJLHdEQUFpRTs7O0lBZmpGLDZCQUNJO0lBQUEsNEdBQ0k7SUFVSiwySUFDSTtJQU9SLDBCQUFlOzs7O0lBbkJHLGVBQTBEO0lBQTFELGlEQUEwRCxpQkFBQTs7O0lBeUI1RSxxQ0FHaUQ7Ozs7OztJQUZqQywrQkFBYSxjQUFBLHdCQUFBOzs7SUFRakIscUNBR2lEOzs7OztJQUZqQyxtQ0FBaUIsY0FBQSx3QkFBQTs7O0lBR2pDLG9DQUcrQzs7OztJQUZoQyxtQ0FBaUIscUJBQUEsd0JBQUE7OztJQUdoQyxxQ0FHaUQ7Ozs7SUFGakMsbUNBQWlCLHFCQUFBLHdCQUFBOzs7SUFWckMsNkJBQ0k7SUFBQSw0SUFHZ0M7SUFDaEMsMElBRytCO0lBQy9CLDRJQUdnQztJQUNwQywwQkFBZTs7O0lBWkssZUFBdUM7SUFBdkMsMERBQXVDO0lBSXhDLGVBQXNDO0lBQXRDLHdGQUFzQztJQUlyQyxlQUF1QztJQUF2Qyx5RkFBdUM7OztJQVgvRCwyQkFFSTtJQUFBLHdIQUNJO0lBYVIsaUJBQU07OztJQWZELDJGQUFrRTtJQUNyRCxlQUE0QztJQUE1QyxtRUFBNEM7OztJQUhsRSw2QkFDSTtJQUFBLGdHQUVJOztJQWVSLDBCQUFlOzs7SUFqQk4sZUFBbUQ7SUFBbkQsaUVBQW1EOzs7O0lBbUI1RCxrQ0FJSTtJQURJLHVOQUFTLDBCQUFjLElBQUM7SUFDNUIsd0JBQ0o7SUFBQSxpQkFBUzs7O0lBakNiLDJCQUdJO0lBQUEsd0dBR2dDO0lBRWhDLG1HQUNJO0lBbUJKLHdGQUlJO0lBRVIsaUJBQU07Ozs7O0lBakNELHdSQUEySDtJQUQzSCwwRUFBZ0Q7SUFHakMsZUFBZ0M7SUFBaEMsc0RBQWdDO0lBS2xDLGVBQWdDO0lBQWhDLHNEQUFnQztJQXNCdEMsZUFBZ0M7SUFBaEMsc0RBQWdDOzs7SUFNNUMsK0JBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSxnSkFDSjs7OztJQTlFSiw4QkFjSTtJQUFBLDhCQUNJO0lBQUEseUVBQTZCO0lBRTdCLDZGQUNJO0lBb0JSLGlCQUFTO0lBRVQsMkVBR0k7O0lBaUNKLDJFQUNJO0lBRVIsaUJBQU07OztJQTlFRCxxTUFBOEY7SUFROUYsK0NBQTBCLDJEQUFBO0lBVDFCLG9DQUFtQjtJQWVaLGVBQXdCO0lBQXhCLDhDQUF3QjtJQUVkLGVBQTBDO0lBQTFDLGdFQUEwQztJQXlCdkQsZUFBc0c7SUFBdEcsZ0lBQXNHO0lBa0N4RixlQUFtQjtJQUFuQixxRUFBbUI7O0FEekUxQztJQUswQyx3Q0FBcUI7SUFML0Q7O0tBTUM7eUhBRFksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNSakMsc0VBY0k7O1lBWkMsK0hBTUM7OytCRFJOO0NBU0MsQUFORCxDQUswQyxxQkFBcUIsR0FDOUQ7U0FEWSxvQkFBb0I7aUVBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9oYi1mb3JtLXdpZGdldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLWZvcm0tYXJyYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oYi1mb3JtLWFycmF5LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsna2V5JywgJ2RhdGEnLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtQXJyYXlDb21wb25lbnQgZXh0ZW5kcyBIYkZvcm1XaWRnZXRDb21wb25lbnQge1xufVxuIiwiPGRpdiBbYXR0ci5pZF09XCJkYXRhLmlkXCJcbiAgICAgY2xhc3M9XCJoYi1mb3JtLWFycmF5IHt7IGRhdGEuYXJyYXlUeXBlIH19IGhiLWZvcm0tYXJyYXlfe3sga2V5IH19IHt7IGRhdGE/Lmh0bWw/LmNsYXNzQXR0ciB9fVwiXG4gICAgICpuZ0lmPVwiXG4gICAgICAgICBkYXRhLmNvbnRyb2wgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICBrZXkgIT0gJ3NldFZhbHVlJyAmJiAoXG4gICAgICAgICAgICAgZGF0YS5oaWRlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICFkYXRhLmhpZGVcbiAgICAgICAgIClcbiAgICAgXCJcbiAgICAgW2Zvcm1Hcm91cF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAnaGItZm9ybS13aXRoLWhpbnRzJyA6IGRhdGEuaGludHNcbiAgICAgfVwiXG4+XG4gICAgPGhlYWRlcj5cbiAgICAgICAgPGgyICpuZ0lmPVwiIWRhdGEuaGlkZUhlYWRlclwiPnt7IGRhdGEubGFiZWwgfX08L2gyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmNoaWxkcmVuQ29uZmlnTmFtZS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEuZXhwYW5kT3B0aW9uczsgZWxzZSBleHBhbmRlZEFycmF5UHVzaE9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiaGItZm9ybS1hcnJheS1jb25maWctc3dpdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YS51c2VDb25maWdcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvbmZpZ05hbWUgb2YgZGF0YS5jaGlsZHJlbkNvbmZpZ05hbWU7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwiaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgY29uZmlnTmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgaGItZm9ybS1hZGQtYnRuXCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiZGF0YS5hcnJheVR5cGUgIT0gJ2VudW0nXCIgKGNsaWNrKT1cImRhdGEuYWRkKClcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2V4cGFuZGVkQXJyYXlQdXNoT3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgaGItZm9ybS1hZGQtYnRuIGhiLWZvcm0tYWRkLWJ0bi1leHBhbmRlZC17eyBpIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb25maWdOYW1lIG9mIGRhdGEuY2hpbGRyZW5Db25maWdOYW1lOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRhLnVzZUNvbmZpZyA9IGk7IGRhdGEuYWRkKCk7XCI+XG4gICAgICAgICAgICAgICAgICAgICYjeDI1M0M7IHt7IGNvbmZpZ05hbWUgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPGRpdiBbYXR0ci5pZF09XCJkYXRhLmlkID8gKGRhdGEuaWQgKyAnXycgKyBpKSA6IG51bGxcIlxuICAgICAgICAgY2xhc3M9XCJoYi1mb3JtLWFycmF5LWNlbGwgaGItZm9ybS1hcnJheS1jZWxsX3t7IGNlbGw/LmZsZXhpYmxlT2JqZWN0VHlwZU5hbWU/LnRvTG93ZXJDYXNlKCkgfX0ge3sgY2VsbD8uaHRtbD8uY2xhc3NBdHRyIH19XCJcbiAgICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIChkYXRhLmFycmF5VHlwZSAhPSAnZW51bScgPyBkYXRhLmNoaWxkcmVuIDogcmVzb2x2ZWRPcHRpb25zIHwgYXN5bmMpOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8aGItZm9ybS13aWRnZXQgKm5nSWY9XCJkYXRhLmFycmF5VHlwZSA9PSAnZW51bSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJkYXRhXCI+PC9oYi1mb3JtLXdpZGdldD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5hcnJheVR5cGUgIT0gJ2VudW0nXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlYWNoIG9mIGNlbGwuY2hpbGRyZW4gfCBtYXBUb0l0ZXJhYmxlO1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdCBoYi1mb3JtLWFycmF5LWNlbGwtYXR0cl97eyBlYWNoLmtleSB9fVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZWFjaC5oaWRlICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhiLWZvcm0td2lkZ2V0ICpuZ0lmPVwiZWFjaC52YWwuZ3JvdXBUeXBlID09IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJkYXRhXCI+PC9oYi1mb3JtLXdpZGdldD5cbiAgICAgICAgICAgICAgICAgICAgPGhiLWZvcm0tYXJyYXkgKm5nSWY9XCJlYWNoLnZhbD8uZ3JvdXBUeXBlID09ICdhcnJheSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj48L2hiLWZvcm0tYXJyYXk+XG4gICAgICAgICAgICAgICAgICAgIDxoYi1mb3JtLW9iamVjdCAqbmdJZj1cImVhY2gudmFsPy5ncm91cFR5cGUgPT0gJ29iamVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZWFjaC52YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj48L2hiLWZvcm0tb2JqZWN0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgaGItZm9ybS1yZW1vdmUtYnRuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuYXJyYXlUeXBlICE9ICdlbnVtJ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGEucmVtb3ZlKGkpXCI+XG4gICAgICAgICAgICAmI3gyNzE1O1xuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJoaW50c1wiICpuZ0lmPVwiZGF0YT8uaGludHNcIj5cbiAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIpIDogZGF0YS5oaW50cyB9fVxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=