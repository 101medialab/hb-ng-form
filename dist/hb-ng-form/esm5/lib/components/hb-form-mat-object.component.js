import { __extends } from "tslib";
import { Component } from "@angular/core";
import { HbFormObjectComponent } from "./hb-form-object.component";
import * as i0 from "@angular/core";
function HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card-header");
    i0.ɵɵelementStart(1, "mat-card-title");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 8);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-array", 9);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-object", 8);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 6);
    i0.ɵɵtemplate(2, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template, 1, 4, "hb-mat-form-array", 7);
    i0.ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
} }
function HbFormMatObjectComponent_mat_card_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var each_r4 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormMatObjectComponent_mat_card_0_strong_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
var _c0 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormMatObjectComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 1);
    i0.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template, 3, 1, "mat-card-header", 2);
    i0.ɵɵelementStart(2, "mat-card-content", 3);
    i0.ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵpipe(4, "mapToIterable");
    i0.ɵɵtemplate(5, HbFormMatObjectComponent_mat_card_0_strong_5_Template, 2, 1, "strong", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
    i0.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", i0.ɵɵpureFunction2(11, _c0, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 9, ctx_r0.data.children));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
var HbFormMatObjectComponent = /** @class */ (function (_super) {
    __extends(HbFormMatObjectComponent, _super);
    function HbFormMatObjectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormMatObjectComponent.ɵfac = function HbFormMatObjectComponent_Factory(t) { return ɵHbFormMatObjectComponent_BaseFactory(t || HbFormMatObjectComponent); };
    HbFormMatObjectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormMatObjectComponent, selectors: [["hb-mat-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "mat-hint"]], template: function HbFormMatObjectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HbFormMatObjectComponent_mat_card_0_Template, 6, 14, "mat-card", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
        } }, encapsulation: 2 });
    return HbFormMatObjectComponent;
}(HbFormObjectComponent));
export { HbFormMatObjectComponent };
var ɵHbFormMatObjectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormMatObjectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormMatObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-object',
                templateUrl: './hb-form-mat-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1tYXQtb2JqZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oYi1mb3JtLW1hdC1vYmplY3QuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvaGItZm9ybS1tYXQtb2JqZWN0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7SUNXL0QsdUNBQ0k7SUFBQSxzQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBaUI7SUFDckIsaUJBQWtCOzs7SUFGVixlQUNKO0lBREksa0RBQ0o7OztJQUtRLHdDQUtxQjs7OztJQUhiLGtDQUFpQixvQkFBQSx1QkFBQTs7O0lBSXpCLHVDQU1vQjs7OztJQUpaLGtDQUFpQixvQkFBQSw4QkFBQSx1QkFBQTs7O0lBS3pCLHdDQUtxQjs7OztJQUhiLGtDQUFpQixvQkFBQSx1QkFBQTs7O0lBaEI3Qiw2QkFDSTtJQUFBLHVJQUtBO0lBQ0EscUlBTUE7SUFDQSx1SUFLQTtJQUNKLDBCQUFlOzs7SUFsQkgsZUFBaUU7SUFBakUsc0ZBQWlFO0lBTWpFLGVBQXNDO0lBQXRDLHNGQUFzQztJQU90QyxlQUFpRTtJQUFqRSxvSEFBaUU7OztJQWhCakYsMkJBQ0k7SUFBQSw0R0FDSTtJQW9CUixpQkFBTTs7O0lBdEJrRCwrREFBdUM7SUFDN0UsZUFBNEM7SUFBNUMsaUVBQTRDOzs7SUFzQjlELGtDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFTOzs7SUFETCxlQUNKO0lBREksZ0pBQ0o7Ozs7SUEzQ1IsbUNBWUk7SUFBQSw0R0FDSTtJQUlKLDJDQUNJO0lBQUEsb0ZBQ0k7O0lBc0JKLDBGQUNJO0lBRVIsaUJBQW1CO0lBQ3ZCLGlCQUFXOzs7SUFsQ0QscUtBQXFFO0lBTHJFLCtDQUEwQix1RkFBQTtJQU1mLGVBQThFO0lBQTlFLHlIQUE4RTtJQU10RixlQUFrRDtJQUFsRCxvRUFBa0Q7SUF1QjlCLGVBQW1CO0lBQW5CLHFFQUFtQjs7QUR0Q3BEO0lBSzhDLDRDQUFxQjtJQUxuRTs7S0FNQztxSUFEWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1JyQyxvRkFZSTs7WUFaTSwrSEFLSjs7bUNETE47Q0FTQyxBQU5ELENBSzhDLHFCQUFxQixHQUNsRTtTQURZLHdCQUF3QjtxRUFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRywrQkFBK0I7Z0JBQzdDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYkZvcm1PYmplY3RDb21wb25lbnQgfSBmcm9tIFwiLi9oYi1mb3JtLW9iamVjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoYi1tYXQtZm9ybS1vYmplY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAgJy4vaGItZm9ybS1tYXQtb2JqZWN0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnaWQnLCAna2V5JywgJ2RhdGEnLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtTWF0T2JqZWN0Q29tcG9uZW50IGV4dGVuZHMgSGJGb3JtT2JqZWN0Q29tcG9uZW50IHtcbn1cbiIsIjxtYXQtY2FyZCAqbmdJZj1cIlxuICAgIGRhdGEuY29udHJvbCAhPSB1bmRlZmluZWQgJiZcbiAgICBrZXkgIT0gJ3NldFZhbHVlJyAmJiAoXG4gICAgICAgIGRhdGEuaGlkZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgIWRhdGEuaGlkZVxuICAgIClcIlxuICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdlcnJvcic6ICFkYXRhLmNvbnRyb2wudmFsaWQsXG4gICAgICAgICdoYi1mb3JtLXdpdGgtaGludHMnIDogZGF0YS5oaW50c1xuICAgIH1cIlxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1vYmplY3Qge3sgZGF0YT8uaHRtbD8uY2xhc3NBdHRyIH19IGhiLWZvcm0tb2JqX3t7IGtleSB9fVwiPlxuICAgIDxtYXQtY2FyZC1oZWFkZXIgKm5nSWY9XCJ0eXBlb2YoZGF0YS5sYWJlbCkgPT0gJ3N0cmluZycgJiYgZGF0YS5sYWJlbCAhPSAnJyAmJiAhZGF0YS5oaWRlSGVhZGVyXCI+XG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIHt7IGRhdGEubGFiZWwgfX1cbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImhiLWZvcm0tb2JqZWN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZWFjaCBvZiBkYXRhLmNoaWxkcmVuIHwgbWFwVG9JdGVyYWJsZVwiIGNsYXNzPVwiaGItZm9ybS1vYmotYXR0cl97eyBlYWNoLmtleSB9fVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlYWNoLmhpZGUgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiPlxuICAgICAgICAgICAgICAgIDxoYi1tYXQtZm9ybS13aWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWFjaC52YWwuZ3JvdXBUeXBlID09IHVuZGVmaW5lZCAmJiBlYWNoLmtleSAhPSAnc2V0VmFsdWUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImVhY2gudmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPC9oYi1tYXQtZm9ybS13aWRnZXQ+XG4gICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLWFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVhY2gudmFsPy5ncm91cFR5cGUgPT0gJ2FycmF5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQXJyYXlOYW1lXT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDwvaGItbWF0LWZvcm0tYXJyYXk+XG4gICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLW9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlYWNoLnZhbD8uZ3JvdXBUeXBlID09ICdvYmplY3QnICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZWFjaC52YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8L2hiLW1hdC1mb3JtLW9iamVjdD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cIm1hdC1oaW50XCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIpIDogZGF0YS5oaW50cyB9fVxuICAgICAgICA8L3N0cm9uZz5cbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19