import { __extends } from "tslib";
import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';
import * as i0 from "@angular/core";
function HbFormObjectComponent_div_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-widget", 8);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-array", 9);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-form-object", 8);
} if (rf & 2) {
    var each_r4 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 6);
    i0.ɵɵtemplate(2, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template, 1, 4, "hb-form-array", 7);
    i0.ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 6);
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
function HbFormObjectComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var each_r4 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormObjectComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
var _c0 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
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
var HbFormObjectComponent = /** @class */ (function (_super) {
    __extends(HbFormObjectComponent, _super);
    function HbFormObjectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbFormObjectComponent.ɵfac = function HbFormObjectComponent_Factory(t) { return ɵHbFormObjectComponent_BaseFactory(t || HbFormObjectComponent); };
    HbFormObjectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormObjectComponent, selectors: [["hb-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "hints"]], template: function HbFormObjectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HbFormObjectComponent_div_0_Template, 6, 14, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
        } }, encapsulation: 2 });
    return HbFormObjectComponent;
}(HbFormWidgetComponent));
export { HbFormObjectComponent };
var ɵHbFormObjectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormObjectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-object',
                templateUrl: './hb-form-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1vYmplY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hiLWZvcm0tb2JqZWN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2hiLWZvcm0tb2JqZWN0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7SUNhL0QsMEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQUs7OztJQURELGVBQ0o7SUFESSxrREFDSjs7O0lBS1ksb0NBS2tCOzs7O0lBSGQsa0NBQWlCLG9CQUFBLHVCQUFBOzs7SUFJckIsbUNBTWlCOzs7O0lBSmIsa0NBQWlCLG9CQUFBLDhCQUFBLHVCQUFBOzs7SUFLckIsb0NBS2tCOzs7O0lBSGQsa0NBQWlCLG9CQUFBLHVCQUFBOzs7SUFoQnpCLDZCQUNJO0lBQUEsdUhBS0M7SUFDRCxxSEFNQztJQUNELHVIQUtDO0lBQ0wsMEJBQWU7OztJQWxCUCxlQUFpRTtJQUFqRSxzRkFBaUU7SUFNakUsZUFBc0M7SUFBdEMsc0ZBQXNDO0lBT3RDLGVBQWlFO0lBQWpFLG9IQUFpRTs7O0lBaEI3RSwyQkFDSTtJQUFBLG9HQUNJO0lBb0JSLGlCQUFNOzs7SUF0QmtELCtEQUF1QztJQUM3RSxlQUE0QztJQUE1QyxpRUFBNEM7OztJQXVCOUQsZ0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU87OztJQURILGVBQ0o7SUFESSxnSkFDSjs7OztJQTdDUiw4QkFjSTtJQUFBLDBFQUNJO0lBR0osOEJBQ0k7SUFBQSw0RUFDSTs7SUF1QkosOEVBQ0k7SUFFUixpQkFBTTtJQUNWLGlCQUFNOzs7SUFuQ0QscUtBQXFFO0lBTHJFLCtDQUEwQix1RkFBQTtJQU92QixlQUE4RTtJQUE5RSx5SEFBOEU7SUFLekUsZUFBa0Q7SUFBbEQsb0VBQWtEO0lBd0JuQyxlQUFtQjtJQUFuQixxRUFBbUI7O0FEeEMvQztJQUsyQyx5Q0FBcUI7SUFMaEU7O0tBTUM7NEhBRFkscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNSbEMsdUVBY0k7O1lBZEMsK0hBTUE7O2dDRE5MO0NBU0MsQUFORCxDQUsyQyxxQkFBcUIsR0FDL0Q7U0FEWSxxQkFBcUI7a0VBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUcsMkJBQTJCO2dCQUN6QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9oYi1mb3JtLXdpZGdldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLWZvcm0tb2JqZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogICcuL2hiLWZvcm0tb2JqZWN0LnRwbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnaWQnLCAna2V5JywgJ2RhdGEnLCAncGFyZW50J11cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtT2JqZWN0Q29tcG9uZW50IGV4dGVuZHMgSGJGb3JtV2lkZ2V0Q29tcG9uZW50IHtcbn1cbiIsIjxkaXYgKm5nSWY9XCJcbiAgICAgICAgZGF0YS5jb250cm9sICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBrZXkgIT0gJ3NldFZhbHVlJyAmJiAoXG4gICAgICAgICAgICBkYXRhLmhpZGUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAhZGF0YS5oaWRlXG4gICAgICAgIClcbiAgICBcIlxuICAgICBbZm9ybUdyb3VwXT1cImRhdGEuY29udHJvbFwiXG4gICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICdlcnJvcic6ICFkYXRhLmNvbnRyb2wudmFsaWQsXG4gICAgICAgICAnaGItZm9ybS13aXRoLWhpbnRzJyA6IGRhdGEuaGludHNcbiAgICAgfVwiXG4gICAgIGNsYXNzPVwiZm9ybS1vYmplY3Qge3sgZGF0YT8uaHRtbD8uY2xhc3NBdHRyIH19IGhiLWZvcm0tb2JqX3t7IGtleSB9fVwiXG4+XG4gICAgPGgyICpuZ0lmPVwidHlwZW9mKGRhdGEubGFiZWwpID09ICdzdHJpbmcnICYmIGRhdGEubGFiZWwgIT0gJycgJiYgIWRhdGEuaGlkZUhlYWRlclwiPlxuICAgICAgICB7eyBkYXRhLmxhYmVsIH19XG4gICAgPC9oMj5cblxuICAgIDxkaXYgY2xhc3M9XCJoYi1mb3JtLW9iamVjdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVhY2ggb2YgZGF0YS5jaGlsZHJlbiB8IG1hcFRvSXRlcmFibGVcIiBjbGFzcz1cImhiLWZvcm0tb2JqLWF0dHJfe3sgZWFjaC5rZXkgfX1cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZWFjaC5oaWRlICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIj5cbiAgICAgICAgICAgICAgICA8aGItZm9ybS13aWRnZXRcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlYWNoLnZhbC5ncm91cFR5cGUgPT0gdW5kZWZpbmVkICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIlxuICAgICAgICAgICAgICAgID48L2hiLWZvcm0td2lkZ2V0PlxuICAgICAgICAgICAgICAgIDxoYi1mb3JtLWFycmF5XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnYXJyYXknXCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZWFjaC52YWxcIlxuICAgICAgICAgICAgICAgICAgICBba2V5XT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1BcnJheU5hbWVdPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIlxuICAgICAgICAgICAgICAgID48L2hiLWZvcm0tYXJyYXk+XG4gICAgICAgICAgICAgICAgPGhiLWZvcm0tb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnb2JqZWN0JyAmJiBlYWNoLmtleSAhPSAnc2V0VmFsdWUnXCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZWFjaC52YWxcIlxuICAgICAgICAgICAgICAgICAgICBba2V5XT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJkYXRhXCJcbiAgICAgICAgICAgICAgICA+PC9oYi1mb3JtLW9iamVjdD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRzXCIgKm5nSWY9XCJkYXRhPy5oaW50c1wiPlxuICAgICAgICAgICAge3sgdHlwZW9mKGRhdGEuaGludHMpID09ICdmdW5jdGlvbicgPyBkYXRhLmhpbnRzKGRhdGEuZGlDb250YWluZXIpIDogZGF0YS5oaW50cyB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==