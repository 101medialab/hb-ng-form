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
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-widget", 8);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-array", 9);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hb-mat-form-object", 8);
} if (rf & 2) {
    const each_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 6);
    i0.ɵɵtemplate(2, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template, 1, 4, "hb-mat-form-array", 7);
    i0.ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 6);
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
function HbFormMatObjectComponent_mat_card_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const each_r4 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormMatObjectComponent_mat_card_0_strong_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c0 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
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
export class HbFormMatObjectComponent extends HbFormObjectComponent {
}
HbFormMatObjectComponent.ɵfac = function HbFormMatObjectComponent_Factory(t) { return ɵHbFormMatObjectComponent_BaseFactory(t || HbFormMatObjectComponent); };
HbFormMatObjectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HbFormMatObjectComponent, selectors: [["hb-mat-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "mat-hint"]], template: function HbFormMatObjectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HbFormMatObjectComponent_mat_card_0_Template, 6, 14, "mat-card", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormMatObjectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HbFormMatObjectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormMatObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-object',
                templateUrl: './hb-form-mat-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGItZm9ybS1tYXQtb2JqZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oYi1mb3JtLW1hdC1vYmplY3QuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvaGItZm9ybS1tYXQtb2JqZWN0LnRwbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztJQ1cvRCx1Q0FDSTtJQUFBLHNDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFpQjtJQUNyQixpQkFBa0I7OztJQUZWLGVBQ0o7SUFESSxrREFDSjs7O0lBS1Esd0NBS3FCOzs7O0lBSGIsa0NBQWlCLG9CQUFBLHVCQUFBOzs7SUFJekIsdUNBTW9COzs7O0lBSlosa0NBQWlCLG9CQUFBLDhCQUFBLHVCQUFBOzs7SUFLekIsd0NBS3FCOzs7O0lBSGIsa0NBQWlCLG9CQUFBLHVCQUFBOzs7SUFoQjdCLDZCQUNJO0lBQUEsdUlBS0E7SUFDQSxxSUFNQTtJQUNBLHVJQUtBO0lBQ0osMEJBQWU7OztJQWxCSCxlQUFpRTtJQUFqRSxzRkFBaUU7SUFNakUsZUFBc0M7SUFBdEMsc0ZBQXNDO0lBT3RDLGVBQWlFO0lBQWpFLG9IQUFpRTs7O0lBaEJqRiwyQkFDSTtJQUFBLDRHQUNJO0lBb0JSLGlCQUFNOzs7SUF0QmtELCtEQUF1QztJQUM3RSxlQUE0QztJQUE1QyxpRUFBNEM7OztJQXNCOUQsa0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7OztJQURMLGVBQ0o7SUFESSxnSkFDSjs7OztJQTNDUixtQ0FZSTtJQUFBLDRHQUNJO0lBSUosMkNBQ0k7SUFBQSxvRkFDSTs7SUFzQkosMEZBQ0k7SUFFUixpQkFBbUI7SUFDdkIsaUJBQVc7OztJQWxDRCxxS0FBcUU7SUFMckUsK0NBQTBCLHVGQUFBO0lBTWYsZUFBOEU7SUFBOUUseUhBQThFO0lBTXRGLGVBQWtEO0lBQWxELG9FQUFrRDtJQXVCOUIsZUFBbUI7SUFBbkIscUVBQW1COztBRGpDcEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHFCQUFxQjs7aUlBQXRELHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDUnJDLG9GQVlJOztRQVpNLCtIQUtKOzt1RURHTyx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFHLCtCQUErQjtnQkFDN0MsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhiRm9ybU9iamVjdENvbXBvbmVudCB9IGZyb20gXCIuL2hiLWZvcm0tb2JqZWN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hiLW1hdC1mb3JtLW9iamVjdCcsXG4gICAgdGVtcGxhdGVVcmw6ICAnLi9oYi1mb3JtLW1hdC1vYmplY3QudHBsLmh0bWwnLFxuICAgIGlucHV0czogWydpZCcsICdrZXknLCAnZGF0YScsICdwYXJlbnQnXVxufSlcbmV4cG9ydCBjbGFzcyBIYkZvcm1NYXRPYmplY3RDb21wb25lbnQgZXh0ZW5kcyBIYkZvcm1PYmplY3RDb21wb25lbnQge1xufVxuIiwiPG1hdC1jYXJkICpuZ0lmPVwiXG4gICAgZGF0YS5jb250cm9sICE9IHVuZGVmaW5lZCAmJlxuICAgIGtleSAhPSAnc2V0VmFsdWUnICYmIChcbiAgICAgICAgZGF0YS5oaWRlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAhZGF0YS5oaWRlXG4gICAgKVwiXG4gICAgICAgICAgW2Zvcm1Hcm91cF09XCJkYXRhLmNvbnRyb2xcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ2Vycm9yJzogIWRhdGEuY29udHJvbC52YWxpZCxcbiAgICAgICAgJ2hiLWZvcm0td2l0aC1oaW50cycgOiBkYXRhLmhpbnRzXG4gICAgfVwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLW9iamVjdCB7eyBkYXRhPy5odG1sPy5jbGFzc0F0dHIgfX0gaGItZm9ybS1vYmpfe3sga2V5IH19XCI+XG4gICAgPG1hdC1jYXJkLWhlYWRlciAqbmdJZj1cInR5cGVvZihkYXRhLmxhYmVsKSA9PSAnc3RyaW5nJyAmJiBkYXRhLmxhYmVsICE9ICcnICYmICFkYXRhLmhpZGVIZWFkZXJcIj5cbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPlxuICAgICAgICAgICAge3sgZGF0YS5sYWJlbCB9fVxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiaGItZm9ybS1vYmplY3QtY29udGVudFwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlYWNoIG9mIGRhdGEuY2hpbGRyZW4gfCBtYXBUb0l0ZXJhYmxlXCIgY2xhc3M9XCJoYi1mb3JtLW9iai1hdHRyX3t7IGVhY2gua2V5IH19XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVhY2guaGlkZSAmJiBlYWNoLmtleSAhPSAnc2V0VmFsdWUnXCI+XG4gICAgICAgICAgICAgICAgPGhiLW1hdC1mb3JtLXdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlYWNoLnZhbC5ncm91cFR5cGUgPT0gdW5kZWZpbmVkICYmIGVhY2gua2V5ICE9ICdzZXRWYWx1ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZWFjaC52YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJlYWNoLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8L2hiLW1hdC1mb3JtLXdpZGdldD5cbiAgICAgICAgICAgICAgICA8aGItbWF0LWZvcm0tYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWFjaC52YWw/Lmdyb3VwVHlwZSA9PSAnYXJyYXknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImVhY2gudmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1BcnJheU5hbWVdPVwiZWFjaC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPC9oYi1tYXQtZm9ybS1hcnJheT5cbiAgICAgICAgICAgICAgICA8aGItbWF0LWZvcm0tb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVhY2gudmFsPy5ncm91cFR5cGUgPT0gJ29iamVjdCcgJiYgZWFjaC5rZXkgIT0gJ3NldFZhbHVlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJlYWNoLnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImVhY2gua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDwvaGItbWF0LWZvcm0tb2JqZWN0PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwibWF0LWhpbnRcIiAqbmdJZj1cImRhdGE/LmhpbnRzXCI+XG4gICAgICAgICAgICB7eyB0eXBlb2YoZGF0YS5oaW50cykgPT0gJ2Z1bmN0aW9uJyA/IGRhdGEuaGludHMoZGF0YS5kaUNvbnRhaW5lcikgOiBkYXRhLmhpbnRzIH19XG4gICAgICAgIDwvc3Ryb25nPlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=