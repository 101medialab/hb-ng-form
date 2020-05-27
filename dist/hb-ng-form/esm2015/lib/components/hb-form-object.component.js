import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';
import * as i0 from "@angular/core";
function HbFormObjectComponent_div_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 8);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-array", 9);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-object", 8);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 6);
    i0.ɵɵtemplate(2, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template, 1, 4, "hb-form-array", 7);
    i0.ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
} }
function HbFormObjectComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const each_r4 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormObjectComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c0 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormObjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, HbFormObjectComponent_div_0_h2_1_Template, 2, 1, "h2", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵpipe(4, "mapToIterable");
    i0.ɵɵtemplate(5, HbFormObjectComponent_div_0_span_5_Template, 2, 1, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
    i0.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", i0.ɵɵpureFunction2(11, _c0, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 9, ctx_r0.data.children));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
export class HbFormObjectComponent extends HbFormWidgetComponent {
}
HbFormObjectComponent.ɵfac = function HbFormObjectComponent_Factory(t) { return ɵHbFormObjectComponent_BaseFactory(t || HbFormObjectComponent); };
HbFormObjectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormObjectComponent, selectors: [["hb-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "hints"]], template: function HbFormObjectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HbFormObjectComponent_div_0_Template, 6, 14, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormObjectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormObjectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-object',
                templateUrl: './hb-form-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1vYmplY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0tb2JqZWN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0tb2JqZWN0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztJQ2EvRCwwQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSzs7O0lBREQsZUFDSjtJQURJLGtEQUNKOzs7SUFLWSxvQ0FLa0I7Ozs7SUFIZCxrQ0FBaUIsb0JBQUEsdUJBQUE7OztJQUlyQixtQ0FNaUI7Ozs7SUFKYixrQ0FBaUIsb0JBQUEsOEJBQUEsdUJBQUE7OztJQUtyQixvQ0FLa0I7Ozs7SUFIZCxrQ0FBaUIsb0JBQUEsdUJBQUE7OztJQWhCekIsNkJBQ0k7SUFBQSx1SEFLQztJQUNELHFIQU1DO0lBQ0QsdUhBS0M7SUFDTCwwQkFBZTs7O0lBbEJQLGVBQWlFO0lBQWpFLHNGQUFpRTtJQU1qRSxlQUFzQztJQUF0QyxzRkFBc0M7SUFPdEMsZUFBaUU7SUFBakUsb0hBQWlFOzs7SUFoQjdFLDJCQUNJO0lBQUEsb0dBQ0k7SUFvQlIsaUJBQU07OztJQXRCa0QsK0RBQXVDO0lBQzdFLGVBQTRDO0lBQTVDLGlFQUE0Qzs7O0lBdUI5RCxnQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7O0lBREgsZUFDSjtJQURJLGdKQUNKOzs7O0lBN0NSLDhCQWNJO0lBQUEsMEVBQ0k7SUFHSiw4QkFDSTtJQUFBLDRFQUNJOztJQXVCSiw4RUFDSTtJQUVSLGlCQUFNO0lBQ1YsaUJBQU07OztJQW5DRCxxS0FBcUU7SUFMckUsK0NBQTBCLHVGQUFBO0lBT3ZCLGVBQThFO0lBQTlFLHlIQUE4RTtJQUt6RSxlQUFrRDtJQUFsRCxvRUFBa0Q7SUF3Qm5DLGVBQW1CO0lBQW5CLHFFQUFtQjs7QURuQy9DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxxQkFBcUI7O3dIQUFuRCxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1JsQyx1RUFjSTs7UUFkQywrSEFNQTs7b0VERVEscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRywyQkFBMkI7Z0JBQ3pDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYkZvcm1XaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2hiLWZvcm0td2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGItZm9ybS1vYmplY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAgJy4vaGItZm9ybS1vYmplY3QudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydpZCcsICdrZXknLCAnZGF0YScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1PYmplY3RDb21wb25lbnQgZXh0ZW5kcyBIYkZvcm1XaWRnZXRDb21wb25lbnQge1xufVxuIiwiPGRpdiAqbmdJZj1cIlxuICAgICAgICBkYXRhLmNvbnRyb2wgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGtleSAhPSAnc2V0VmFsdWUnICYmIChcbiAgICAgICAgICAgIGRhdGEuaGlkZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICFkYXRhLmhpZGVcbiAgICAgICAgKVxuICAgIFwiXG4gICAgIFtmb3JtR3JvdXBdPVwiZGF0YS5jb250cm9sXCJcbiAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgJ2Vycm9yJzogIWRhdGEuY29udHJvbC52YWxpZCxcbiAgICAgICAgICdoYi1mb3JtLXdpdGgtaGludHMnIDogZGF0YS5oaW50c1xuICAgICB9XCJcbiAgICAgY2xhc3M9XCJmb3JtLW9iamVjdCB7eyBkYXRhPy5odG1sPy5jbGFzc0F0dHIgfX0gaGItZm9ybS1vYmpfe3sga2V5IH19XCJcbj5cbiAgICA8aDIgKm5nSWY9XCJ0eXBlb2YoZGF0YS5sYWJlbCkgPT0gJ3N0cmluZycgJiYgZGF0YS5sYWJlbCAhPSAnJyAmJiAhZGF0YS5oaWRlSGVhZGVyXCI+XG4gICAgICAgIHt7IGRhdGEubGFiZWwgfX1cbiAgICA8L2gyPlxuXG4gICAgPGRpdiBjbGFzcz1cImhiLWZvcm0tb2JqZWN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZWFjaCBvZiBkYXRhLmNoaWxkcmVuIHwgbWFwVG9JdGVyYWJsZVwiIGNsYXNzPVwiaGItZm9ybS1vYmotYXR0cl97eyBlYWNoLmtleSB9fVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlYWNoLmhpZGUgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiPlxuICAgICAgICAgICAgICAgIDxoYi1mb3JtLXdpZGdldFxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVhY2gudmFsLmdyb3VwVHlwZSA9PSB1bmRlZmluZWQgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImVhY2gudmFsXCJcbiAgICAgICAgICAgICAgICAgICAgW2tleV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiXG4gICAgICAgICAgICAgICAgPjwvaGItZm9ybS13aWRnZXQ+XG4gICAgICAgICAgICAgICAgPGhiLWZvcm0tYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlYWNoLnZhbD8uZ3JvdXBUeXBlID09ICdhcnJheSdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUFycmF5TmFtZV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiXG4gICAgICAgICAgICAgICAgPjwvaGItZm9ybS1hcnJheT5cbiAgICAgICAgICAgICAgICA8aGItZm9ybS1vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlYWNoLnZhbD8uZ3JvdXBUeXBlID09ICdvYmplY3QnICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIlxuICAgICAgICAgICAgICAgID48L2hiLWZvcm0tb2JqZWN0PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGludHNcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+XG4gICAgICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lcikgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19