import 'reflect-metadata';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵattribute, ɵɵadvance, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵproperty, ɵɵelementContainerStart, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, ɵɵpureFunction0, ɵɵpropertyInterpolate2, ɵɵpipe, ɵɵpipeBind1, ɵɵtextInterpolate1, ɵɵclassMapInterpolate2, ɵɵpureFunction2, ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵdefineComponent, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵsetClassMetadata, Component, ViewChild, ɵɵclassMapInterpolate1, ɵɵelement, ɵɵclassMapInterpolate3, ɵɵpureFunction1, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, ɵɵsanitizeHtml, ɵɵpropertyInterpolate, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { Observable } from 'rxjs';
import { NgIf, NgClass, NgForOf, AsyncPipe, NgComponentOutlet, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { DefaultValueAccessor, NgControlStatus, FormControlDirective, RadioControlValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, FormControl, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule, ɵangular_packages_forms_forms_y, NumberValueAccessor, RangeValueAccessor, SelectMultipleControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormGroupDirective, FormControlName, FormGroupName, FormArrayName } from '@angular/forms';
import { MatFormField, MatPrefix, MatHint, MatSuffix, MatError, MatLabel, MatPlaceholder } from '@angular/material/form-field';
import { MatInput, MatInputModule, MatTextareaAutosize } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin } from '@angular/material/autocomplete';
import { MatOption, MatNativeDateModule, MatOptgroup } from '@angular/material/core';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatCheckbox, MatCheckboxModule, MatCheckboxRequiredValidator } from '@angular/material/checkbox';
import { MatSelect, MatSelectModule, MatSelectTrigger } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButton, MatAnchor } from '@angular/material/button';
import { MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatCardModule, MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar } from '@angular/material/card';
import { MatDatepickerModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader } from '@angular/material/datepicker';
import { MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent } from '@angular/material/expansion';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { Dir } from '@angular/cdk/bidi';
import { CdkAutofill, CdkTextareaAutosize } from '@angular/cdk/text-field';

const _c0 = ["customBlock"];
function HbFormWidgetComponent_div_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵattribute("for", "hb-form-widget_" + (ctx_r4.key ? ctx_r4.key : ctx_r4.data.slug) + "-input")("class", ctx_r4.data == null ? null : ctx_r4.data.html == null ? null : ctx_r4.data.html.class == null ? null : ctx_r4.data.html.class.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "input", 10);
    ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template_input_change_1_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(5); return ctx_r13.data.control.patchValue($event.target.value); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r10.data.renderType ? ctx_r10.data.renderType : "text")("placeholder", ctx_r10.data.placeholder !== undefined ? ctx_r10.data.placeholder : "")("formControl", ctx_r10.data.control);
    ɵɵattribute("id", "hb-form-widget_" + (ctx_r10.key ? ctx_r10.key : ctx_r10.data.slug) + "-input");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template, 2, 4, "div", 6);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 7, 8, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = ɵɵreference(3);
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.data.selectOptionsObservables == undefined)("ngIfElse", _r11);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.data.autocomplete != undefined);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "textarea", 11);
    ɵɵtext(2, "                ");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("rows", (ctx_r9.data == null ? null : ctx_r9.data.html == null ? null : ctx_r9.data.html.textarea == null ? null : ctx_r9.data.html.textarea.row) || 5)("formControl", ctx_r9.data.control);
    ɵɵattribute("id", "hb-form-widget_" + (ctx_r9.key ? ctx_r9.key : ctx_r9.data.slug) + "-input");
} }
const _c1 = function () { return ["select", "radio", "checkbox", "textarea"]; };
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 4);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template, 3, 3, "ng-container", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpureFunction0(2, _c1).indexOf(ctx_r5.data.renderType) === 0 - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.data.renderType == "textarea");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r19 = ɵɵnextContext().$implicit;
    const ctx_r20 = ɵɵnextContext(5);
    ɵɵpropertyInterpolate2("for", "hb-form-widget_", ctx_r20.key ? ctx_r20.key : ctx_r20.data.slug, "-input__", ctx_r20.slugifyString(option_r19.name), "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r19.name);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 17);
    ɵɵlistener("select", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template_input_select_1_listener($event) { ɵɵrestoreView(_r26); const option_r19 = ɵɵnextContext().$implicit; const ctx_r25 = ɵɵnextContext(5); return (ctx_r25.parent == null ? null : ctx_r25.parent.arrayType) == "enum" ? ctx_r25.updateParentValue($event, option_r19) : ctx_r25.data.control.patchValue($event.target.value); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r19 = ɵɵnextContext().$implicit;
    const ctx_r21 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate2("id", "hb-form-widget_", ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug, "-input__", ctx_r21.slugifyString(option_r19.name), "");
    ɵɵproperty("value", option_r19.value)("checked", ctx_r21.data.control.value === option_r19.value || option_r19.id === ctx_r21.data.control.value ? true : null)("formControl", ctx_r21.data.control);
    ɵɵattribute("name", ctx_r21.data.renderType == "radio" ? (ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug) + "-input" : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 19);
    ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template_input_change_1_listener($event) { ɵɵrestoreView(_r33); const option_r19 = ɵɵnextContext(2).$implicit; const ctx_r32 = ɵɵnextContext(5); return (ctx_r32.parent == null ? null : ctx_r32.parent.arrayType) == "enum" ? ctx_r32.updateParentValue($event, option_r19) : ctx_r32.data.control.patchValue($event.target.value); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r19 = ɵɵnextContext(2).$implicit;
    const ctx_r29 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("value", option_r19.value)("checked", ctx_r29.data.control.value === option_r19.value || option_r19.id === ctx_r29.data.control.value ? true : null)("formControl", ctx_r29.data.control);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 20);
    ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template_input_change_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(7); return ctx_r36.data.control.patchValue($event.target.checked); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(7);
    ɵɵproperty("checked", ctx_r31.data.control.value ? true : null);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template, 2, 3, "ng-container", 2);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 18, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r30 = ɵɵreference(2);
    const ctx_r23 = ɵɵnextContext(6);
    ɵɵproperty("ngIf", (ctx_r23.parent == null ? null : ctx_r23.parent.arrayType) == "enum")("ngIfElse", _r30);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template, 2, 3, "label", 14);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 2);
    ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template, 3, 2, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r22 = ɵɵreference(4);
    const ctx_r18 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r18.parent == null ? null : ctx_r18.parent.arrayType) == "enum" || ctx_r18.data.renderType != "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.data.renderType == "radio")("ngIfElse", _r22);
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 13);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r15.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    ɵɵproperty("value", option_r40.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r40.name ? option_r40.name : option_r40.value, " ");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "select", 22);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template, 2, 2, "option", 23);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵɵnextContext(5);
    ɵɵproperty("formControl", ctx_r38.data.control);
    ɵɵattribute("placeholder", ctx_r38.data.label != undefined ? ctx_r38.data.label : "");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 3, ctx_r38.resolvedOptions));
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template, 3, 5, "select", 21);
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", ctx_r17.data.renderType == "select");
} }
function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 2);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r16 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.data.renderType != "select")("ngIfElse", _r16);
} }
function HbFormWidgetComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.typeof(ctx_r7.data.hints) == "function" ? ctx_r7.data.hints(ctx_r7.data.diContainer, ctx_r7.data, ctx_r7.parent) : ctx_r7.data.hints, " ");
} }
function HbFormWidgetComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_label_1_Template, 2, 3, "label", 4);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 4);
    ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template, 4, 2, "ng-container", 4);
    ɵɵtemplate(4, HbFormWidgetComponent_div_0_ng_container_1_span_4_Template, 2, 1, "span", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.data.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r1.parent == null ? null : ctx_r1.parent.arrayType) !== "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isOptionSelectingComponent());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.data == null ? null : ctx_r1.data.hints);
} }
function HbFormWidgetComponent_div_0_ng_template_2_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_Template, 5, 4, "ng-container", 2);
    ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_template_2_Template, 0, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c2, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.data.useComponent)("ngIfElse", _r2);
} }
class HbFormWidgetComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    log(...args) {
        console.log(...args);
    }
    ngAfterViewInit() {
        if (!this.data.hide && this.data.useComponent) {
            const factory = this.resolver.resolveComponentFactory(this.data.useComponent);
            const ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.instance.parentTemplateObject = this.parent;
            ref.changeDetectorRef.detectChanges();
        }
    }
    isOptionSelectingComponent() {
        return ['radio', 'checkbox', 'select'].indexOf(this.data.renderType) > -1;
    }
    ngOnInit() {
        if (this.isOptionSelectingComponent()) {
            let data = this.data;
            let result = null;
            let resolved = null;
            let options = [];
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
                resolved = options(data.diContainer, this.data, this.parent);
            }
            else if (!(result instanceof Observable)) {
                resolved = options;
            }
            result = resolved;
            if (!(resolved instanceof Observable)) {
                result = new Observable((o) => {
                    o.next(resolved);
                    o.complete();
                });
            }
            this.resolvedOptions = result;
        }
    }
    stringToBoolean(val) {
        return val === 'true';
    }
    updateParentValue($event, option) {
        const target = $event.target ? $event.target : $event.source;
        let isChecked = target.checked;
        switch (this.data.renderType) {
            case 'checkbox':
                let parentControls = this.parent.control.controls;
                if (isChecked) {
                    this.parent.add();
                    parentControls[parentControls.length - 1].setValue(option.value);
                }
                else {
                    let i = 0;
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
    }
    typeof(input) {
        return typeof input;
    }
    slugifyString(input) {
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
    }
}
HbFormWidgetComponent.slugMap = [];
HbFormWidgetComponent.ɵfac = function HbFormWidgetComponent_Factory(t) { return new (t || HbFormWidgetComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
HbFormWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormWidgetComponent, selectors: [["hb-form-widget"]], viewQuery: function HbFormWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customBlock = _t.first);
    } }, inputs: { data: "data", key: "key", parent: "parent" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["customBlock", ""], [4, "ngIf"], ["class", "hints", 4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], [3, "type", "placeholder", "formControl", "change"], [3, "rows", "formControl"], ["selectBlock", ""], [4, "ngFor", "ngForOf"], [3, "for", 4, "ngIf"], ["checkBoxBlock", ""], [3, "for"], ["type", "radio", 1, "example-radio-button", 3, "id", "value", "checked", "formControl", "select"], ["booleanCheckBoxBlock", ""], ["type", "checkbox", 3, "value", "checked", "formControl", "change"], ["type", "checkbox", 3, "checked", "change"], [3, "formControl", 4, "ngIf"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hints"]], template: function HbFormWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormWidgetComponent_div_0_Template, 4, 10, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, directives: [NgIf, NgClass, DefaultValueAccessor, NgControlStatus, FormControlDirective, NgForOf, RadioControlValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x], pipes: [AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-widget',
                templateUrl: './hb-form-widget.tpl.html',
                inputs: ['data', 'key', 'parent']
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { customBlock: [{
            type: ViewChild,
            args: ["customBlock", { read: ViewContainerRef, static: true }]
        }] }); })();

function HbFormArrayComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.data.label);
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const configName_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    ɵɵproperty("value", i_r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", configName_r10, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(4); return ctx_r12.data.add(); });
    ɵɵtext(1, "Add");
    ɵɵelementEnd();
} }
const _c0$1 = function () { return { standalone: true }; };
function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "select", 7);
    ɵɵlistener("ngModelChange", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14.data.useConfig = $event; });
    ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template, 2, 2, "option", 8);
    ɵɵelementEnd();
    ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template, 2, 0, "button", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r5.data.useConfig)("ngModelOptions", ɵɵpureFunction0(4, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.data.childrenConfigName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.data.arrayType != "enum");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r20); const i_r18 = ctx.index; const ctx_r19 = ɵɵnextContext(4); ctx_r19.data.useConfig = i_r18; return ctx_r19.data.add(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const configName_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    ɵɵclassMapInterpolate1("btn btn-default hb-form-add-btn hb-form-add-btn-expanded-", i_r18, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" \u253C ", configName_r17, " ");
} }
function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template, 2, 4, "button", 12);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("ngForOf", ctx_r7.data.childrenConfigName);
} }
function HbFormArrayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template, 4, 5, "ng-container", 5);
    ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r6 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.data.expandOptions)("ngIfElse", _r6);
} }
function HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext();
    const cell_r21 = ctx_r26.$implicit;
    const i_r22 = ctx_r26.index;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵproperty("data", cell_r21)("key", i_r22)("parent", ctx_r23.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-widget", 16);
} if (rf & 2) {
    const each_r28 = ɵɵnextContext(2).$implicit;
    const i_r22 = ɵɵnextContext(2).index;
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r28.val)("key", i_r22)("parent", ctx_r30.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-array", 16);
} if (rf & 2) {
    const each_r28 = ɵɵnextContext(2).$implicit;
    const ctx_r31 = ɵɵnextContext(4);
    ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r31.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-object", 16);
} if (rf & 2) {
    const each_r28 = ɵɵnextContext(2).$implicit;
    const ctx_r32 = ɵɵnextContext(4);
    ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r32.data);
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
    ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template, 1, 3, "hb-form-array", 14);
    ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r28 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", each_r28.val.groupType == undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "object");
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const each_r28 = ctx.$implicit;
    ɵɵclassMapInterpolate1("panel panel-default hb-form-array-cell-attr_", each_r28.key, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !each_r28.hide && each_r28.key != "setValue");
} }
function HbFormArrayComponent_div_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
    ɵɵpipe(2, "mapToIterable");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r21 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, cell_r21.children));
} }
function HbFormArrayComponent_div_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function HbFormArrayComponent_div_0_div_4_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r41); const i_r22 = ɵɵnextContext().index; const ctx_r39 = ɵɵnextContext(2); return ctx_r39.data.remove(i_r22); });
    ɵɵtext(1, " \u2715 ");
    ɵɵelementEnd();
} }
function HbFormArrayComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
    ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
    ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_button_3_Template, 2, 0, "button", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r21 == null ? null : cell_r21.flexibleObjectTypeName == null ? null : cell_r21.flexibleObjectTypeName.toLowerCase(), " ", cell_r21 == null ? null : cell_r21.html == null ? null : cell_r21.html.classAttr, "");
    ɵɵattribute("id", ctx_r3.data.id ? ctx_r3.data.id + "_" + i_r22 : null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.data.arrayType == "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
} }
function HbFormArrayComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.typeof(ctx_r4.data.hints) == "function" ? ctx_r4.data.hints(ctx_r4.data.diContainer) : ctx_r4.data.hints, " ");
} }
const _c1$1 = function (a0) { return { "hb-form-with-hints": a0 }; };
function HbFormArrayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "header");
    ɵɵtemplate(2, HbFormArrayComponent_div_0_h2_2_Template, 2, 1, "h2", 2);
    ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_Template, 4, 2, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵtemplate(4, HbFormArrayComponent_div_0_div_4_Template, 4, 8, "div", 3);
    ɵɵpipe(5, "async");
    ɵɵtemplate(6, HbFormArrayComponent_div_0_div_6_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate3("hb-form-array ", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", ɵɵpureFunction1(14, _c1$1, ctx_r0.data.hints));
    ɵɵattribute("id", ctx_r0.data.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.data.childrenConfigName.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : ɵɵpipeBind1(5, 12, ctx_r0.resolvedOptions));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
class HbFormArrayComponent extends HbFormWidgetComponent {
}
HbFormArrayComponent.ɵfac = function HbFormArrayComponent_Factory(t) { return ɵHbFormArrayComponent_BaseFactory(t || HbFormArrayComponent); };
HbFormArrayComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormArrayComponent, selectors: [["hb-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn btn-default hb-form-add-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["class", "btn btn-default hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["type", "button", 1, "btn", "btn-default", "hb-form-remove-btn", 3, "click"], [1, "hints"]], template: function HbFormArrayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormArrayComponent_div_0_Template, 7, 16, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormArrayComponent_BaseFactory = ɵɵgetInheritedFactory(HbFormArrayComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-array',
                templateUrl: './hb-form-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();

function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.data.label);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const configName_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    ɵɵproperty("value", i_r12);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", configName_r11, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(5); return ctx_r13.data.add(); });
    ɵɵtext(1, " Add ");
    ɵɵelementEnd();
} }
const _c0$2 = function () { return { standalone: true }; };
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-select", 7);
    ɵɵlistener("ngModelChange", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template_mat_select_ngModelChange_2_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(4); return ctx_r15.data.useConfig = $event; });
    ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template, 2, 2, "mat-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template, 2, 0, "button", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r6.data.useConfig)("ngModelOptions", ɵɵpureFunction0(4, _c0$2));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.data.childrenConfigName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.data.arrayType != "enum");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r21); const i_r19 = ctx.index; const ctx_r20 = ɵɵnextContext(5); ctx_r20.data.useConfig = i_r19; return ctx_r20.data.add(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const configName_r18 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" \u253C ", configName_r18, " ");
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template, 2, 1, "button", 12);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵproperty("ngForOf", ctx_r8.data.childrenConfigName);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template, 5, 5, "ng-container", 5);
    ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r7 = ɵɵreference(3);
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.data.expandOptions)("ngIfElse", _r7);
} }
function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card-title");
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template, 2, 1, "h2", 2);
    ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template, 4, 2, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.data.label != "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.data.childrenConfigName.length > 0);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext();
    const cell_r22 = ctx_r27.$implicit;
    const i_r23 = ctx_r27.index;
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵproperty("data", cell_r22)("key", i_r23)("parent", ctx_r24.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-widget", 16);
} if (rf & 2) {
    const each_r29 = ɵɵnextContext(2).$implicit;
    const i_r23 = ɵɵnextContext(2).index;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r29.val)("key", i_r23)("parent", ctx_r31.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-array", 16);
} if (rf & 2) {
    const each_r29 = ɵɵnextContext(2).$implicit;
    const ctx_r32 = ɵɵnextContext(4);
    ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r32.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-object", 16);
} if (rf & 2) {
    const each_r29 = ɵɵnextContext(2).$implicit;
    const ctx_r33 = ɵɵnextContext(4);
    ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r33.data);
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
    ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template, 1, 3, "hb-mat-form-array", 14);
    ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r29 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", each_r29.val.groupType == undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "object");
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const each_r29 = ctx.$implicit;
    ɵɵclassMapInterpolate1("hb-form-array-cell-attr_", each_r29.key, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !each_r29.hide && each_r29.key != "setValue");
} }
function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
    ɵɵpipe(2, "mapToIterable");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r22 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, cell_r22.children));
} }
function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r42); const i_r23 = ɵɵnextContext().index; const ctx_r40 = ɵɵnextContext(2); return ctx_r40.data.remove(i_r23); });
    ɵɵtext(1, " \u2715 ");
    ɵɵelementEnd();
} }
function HbFormMatArrayComponent_mat_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
    ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
    ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template, 2, 0, "button", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r22 == null ? null : cell_r22.flexibleObjectTypeName == null ? null : cell_r22.flexibleObjectTypeName.toLowerCase(), " ", cell_r22 == null ? null : cell_r22.html == null ? null : cell_r22.html.classAttr, "");
    ɵɵattribute("id", ctx_r2.data.id + "-" + i_r23);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.data.arrayType == "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
} }
function HbFormMatArrayComponent_mat_card_0_strong_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "strong", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c1$2 = function (a0) { return { "hb-form-with-hints": a0 }; };
function HbFormMatArrayComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card", 1);
    ɵɵelementStart(1, "mat-card-header");
    ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template, 3, 2, "mat-card-title", 2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-card-content");
    ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_div_4_Template, 4, 8, "div", 3);
    ɵɵpipe(5, "async");
    ɵɵtemplate(6, HbFormMatArrayComponent_mat_card_0_strong_6_Template, 2, 1, "strong", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate3("hb-form-array hb-array-type_", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", ɵɵpureFunction1(13, _c1$2, ctx_r0.data.hints));
    ɵɵattribute("id", ctx_r0.data.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : ɵɵpipeBind1(5, 11, ctx_r0.resolvedOptions));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
class HbFormMatArrayComponent extends HbFormArrayComponent {
}
HbFormMatArrayComponent.ɵfac = function HbFormMatArrayComponent_Factory(t) { return ɵHbFormMatArrayComponent_BaseFactory(t || HbFormMatArrayComponent); };
HbFormMatArrayComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormMatArrayComponent, selectors: [["hb-mat-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-default hb-form-add-btn", 3, "click", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "hb-form-remove-btn", 3, "click"], [1, "mat-hint"]], template: function HbFormMatArrayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_Template, 7, 15, "mat-card", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormMatArrayComponent_BaseFactory = ɵɵgetInheritedFactory(HbFormMatArrayComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormMatArrayComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-array',
                templateUrl: './hb-form-mat-array.tpl.html',
                inputs: ['key', 'data', 'parent']
            }]
    }], null, null); })();

function HbFormObjectComponent_div_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-widget", 8);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-array", 9);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-form-object", 8);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormObjectComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 6);
    ɵɵtemplate(2, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template, 1, 4, "hb-form-array", 7);
    ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
} }
function HbFormObjectComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const each_r4 = ctx.$implicit;
    ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormObjectComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c0$3 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormObjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, HbFormObjectComponent_div_0_h2_1_Template, 2, 1, "h2", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_Template, 2, 4, "div", 4);
    ɵɵpipe(4, "mapToIterable");
    ɵɵtemplate(5, HbFormObjectComponent_div_0_span_5_Template, 2, 1, "span", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
    ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", ɵɵpureFunction2(11, _c0$3, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 9, ctx_r0.data.children));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
class HbFormObjectComponent extends HbFormWidgetComponent {
}
HbFormObjectComponent.ɵfac = function HbFormObjectComponent_Factory(t) { return ɵHbFormObjectComponent_BaseFactory(t || HbFormObjectComponent); };
HbFormObjectComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormObjectComponent, selectors: [["hb-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "hints"]], template: function HbFormObjectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormObjectComponent_div_0_Template, 6, 14, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormObjectComponent_BaseFactory = ɵɵgetInheritedFactory(HbFormObjectComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-form-object',
                templateUrl: './hb-form-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();

function HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card-header");
    ɵɵelementStart(1, "mat-card-title");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-widget", 8);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-array", 9);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "hb-mat-form-object", 8);
} if (rf & 2) {
    const each_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
} }
function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 6);
    ɵɵtemplate(2, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template, 1, 4, "hb-mat-form-array", 7);
    ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const each_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
} }
function HbFormMatObjectComponent_mat_card_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const each_r4 = ctx.$implicit;
    ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
} }
function HbFormMatObjectComponent_mat_card_0_strong_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "strong", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
} }
const _c0$4 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
function HbFormMatObjectComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card", 1);
    ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template, 3, 1, "mat-card-header", 2);
    ɵɵelementStart(2, "mat-card-content", 3);
    ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_Template, 2, 4, "div", 4);
    ɵɵpipe(4, "mapToIterable");
    ɵɵtemplate(5, HbFormMatObjectComponent_mat_card_0_strong_5_Template, 2, 1, "strong", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
    ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", ɵɵpureFunction2(11, _c0$4, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 9, ctx_r0.data.children));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
} }
class HbFormMatObjectComponent extends HbFormObjectComponent {
}
HbFormMatObjectComponent.ɵfac = function HbFormMatObjectComponent_Factory(t) { return ɵHbFormMatObjectComponent_BaseFactory(t || HbFormMatObjectComponent); };
HbFormMatObjectComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormMatObjectComponent, selectors: [["hb-mat-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "mat-hint"]], template: function HbFormMatObjectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormMatObjectComponent_mat_card_0_Template, 6, 14, "mat-card", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, encapsulation: 2 });
const ɵHbFormMatObjectComponent_BaseFactory = ɵɵgetInheritedFactory(HbFormMatObjectComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormMatObjectComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-object',
                templateUrl: './hb-form-mat-object.tpl.html',
                inputs: ['id', 'key', 'data', 'parent']
            }]
    }], null, null); })();

function HbFormMatWidgetComponent_div_0_ng_template_1_Template(rf, ctx) { }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(5);
    ɵɵproperty("innerHtml", ctx_r10.data.matExtra.matPrefix, ɵɵsanitizeHtml);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 13);
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r11.typeof(ctx_r11.data.hints) == "function" ? ctx_r11.data.hints(ctx_r11.data.diContainer, ctx_r11.data, ctx_r11.parent) : ctx_r11.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(5);
    ɵɵproperty("innerHtml", ctx_r12.data.matExtra.matSuffix, ɵɵsanitizeHtml);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 7);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template, 1, 1, "div", 8);
    ɵɵelementStart(2, "input", 9);
    ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template_input_change_2_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(4); return ctx_r13.data.control.patchValue($event.target.value); });
    ɵɵelementEnd();
    ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template, 3, 1, "mat-hint", 10);
    ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template, 1, 1, "div", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matPrefix);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r7.data.renderType ? ctx_r7.data.renderType : "text")("placeholder", ctx_r7.data.label !== undefined ? ctx_r7.data.label : null)("formControl", ctx_r7.data.control);
    ɵɵattribute("id", (ctx_r7.key ? ctx_r7.key : ctx_r7.data.slug) + "-input");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.hints);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matSuffix);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 18);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    ɵɵproperty("value", option_r19.value);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r19.label);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 13);
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(6);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r18.typeof(ctx_r18.data.hints) == "function" ? ctx_r18.data.hints(ctx_r18.data.diContainer, ctx_r18.data, ctx_r18.parent) : ctx_r18.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "input", 15);
    ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template_input_change_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(5); return ctx_r20.data.control.patchValue($event.target.value); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "mat-autocomplete", null, 16);
    ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template, 3, 2, "mat-option", 17);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵtemplate(6, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template, 3, 1, "mat-hint", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r16 = ɵɵreference(3);
    const ctx_r15 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("placeholder", ctx_r15.data.label !== undefined ? ctx_r15.data.label : ctx_r15.data.option.name);
    ɵɵproperty("type", ctx_r15.data.renderType ? ctx_r15.data.renderType : "text")("formControl", ctx_r15.data.control)("matAutocomplete", _r16);
    ɵɵattribute("id", ctx_r15.key ? ctx_r15.key : ctx_r15.data.slug + "-input");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 7, ctx_r15.data.selectOptionsObservables));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r15.data == null ? null : ctx_r15.data.hints);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template, 7, 9, "mat-form-field", 3);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", ctx_r9.data.autocomplete.renderType != "custom");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template, 5, 7, "mat-form-field", 4);
    ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", 5, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵɵreference(3);
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.data.selectOptionsObservables == undefined)("ngIfElse", _r8);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.data.autocomplete != undefined);
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 13);
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r22.typeof(ctx_r22.data.hints) == "function" ? ctx_r22.data.hints(ctx_r22.data.diContainer, ctx_r22.data, ctx_r22.parent) : ctx_r22.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "textarea", 19);
    ɵɵtext(2, "            ");
    ɵɵelementEnd();
    ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template, 3, 1, "mat-hint", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("formControl", ctx_r6.data.control)("placeholder", ctx_r6.data.label ? ctx_r6.data.label : ctx_r6.data.option.name);
    ɵɵattribute("id", ctx_r6.key ? ctx_r6.key : ctx_r6.data.slug + "-input");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r6.data == null ? null : ctx_r6.data.hints);
} }
const _c0$5 = function () { return ["select", "radio", "checkbox", "textarea"]; };
function HbFormMatWidgetComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template, 4, 3, "ng-container", 3);
    ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template, 4, 4, "mat-form-field", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpureFunction0(2, _c0$5).indexOf(ctx_r3.data.renderType) === 0 - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.data.renderType === "textarea");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-radio-button", 26);
    ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template_mat_radio_button_change_0_listener($event) { ɵɵrestoreView(_r32); const option_r30 = ctx.$implicit; const ctx_r31 = ɵɵnextContext(5); return ctx_r31.updateParentValue($event, option_r30); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r30 = ctx.$implicit;
    const ctx_r29 = ɵɵnextContext(5);
    ɵɵproperty("value", option_r30.value)("checked", ctx_r29.data.control.value === option_r30.value || option_r30.id === ctx_r29.data.control.value ? true : null);
    ɵɵattribute("name", ctx_r29.data.renderType == "radio" ? (ctx_r29.key ? ctx_r29.key : ctx_r29.data.slug) + "-input" : null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r30.name, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-group", 24);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template, 2, 4, "mat-radio-button", 25);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(4);
    ɵɵproperty("formControl", ctx_r26.data.control);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r26.data.options);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 29);
    ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r39); const option_r37 = ctx.$implicit; const ctx_r38 = ɵɵnextContext(6); return ctx_r38.updateParentValue($event, option_r37); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    const ctx_r36 = ɵɵnextContext(6);
    ɵɵproperty("value", option_r37.value)("checked", ctx_r36.data.control.value === option_r37.value || option_r37.id === ctx_r36.data.control.value ? true : null)("formControl", ctx_r36.data.control);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r37.name, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template, 2, 4, "mat-checkbox", 28);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r33.data.options);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "mat-checkbox", 30);
    ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template_mat_checkbox_change_2_listener($event) { ɵɵrestoreView(_r41); const ctx_r40 = ɵɵnextContext(5); return ctx_r40.data.control.patchValue($event.source.checked); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r35.data.label);
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r35.data.control.value ? true : null);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 20);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 27, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r34 = ɵɵreference(2);
    const ctx_r28 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", (ctx_r28.parent == null ? null : ctx_r28.parent.arrayType) == "enum")("ngIfElse", _r34);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template, 2, 2, "mat-radio-group", 22);
    ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template, 3, 2, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r27 = ɵɵreference(3);
    const ctx_r23 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r23.data.renderType == "radio")("ngIfElse", _r27);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r45 = ctx.$implicit;
    ɵɵproperty("value", option_r45.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r45.name ? option_r45.name : option_r45.value, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-select", 32);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(4);
    ɵɵproperty("formControl", ctx_r42.data.control)("placeholder", ctx_r42.data.label != undefined ? ctx_r42.data.label : null);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 3, ctx_r42.resolvedOptions));
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 13);
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r43 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r43.typeof(ctx_r43.data.hints) == "function" ? ctx_r43.data.hints(ctx_r43.data.diContainer, ctx_r43.data, ctx_r43.parent) : ctx_r43.data.hints, " ");
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template, 3, 5, "mat-select", 31);
    ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template, 3, 1, "mat-hint", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.data.renderType == "select");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.data == null ? null : ctx_r25.data.hints);
} }
function HbFormMatWidgetComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template, 4, 2, "div", 20);
    ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template, 3, 2, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r24 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.data.renderType != "select")("ngIfElse", _r24);
} }
const _c1$3 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
const _c2$1 = function () { return ["radio", "checkbox", "select"]; };
function HbFormMatWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_Template, 3, 3, "ng-container", 3);
    ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_4_Template, 4, 2, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c1$3, !ctx_r0.data.control.valid, ctx_r0.data.hints));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r0.data.useComponent && (ctx_r0.parent == null ? null : ctx_r0.parent.arrayType) !== "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.data.useComponent && ɵɵpureFunction0(10, _c2$1).indexOf(ctx_r0.data.renderType) > 0 - 1);
} }
class HbFormMatWidgetComponent extends HbFormWidgetComponent {
    ngOnInit() {
        super.ngOnInit();
        if (this.parent.arrayType == 'enum' &&
            this.parent.control.value.indexOf(this.data.options[0].value) > -1) {
            this.data.control.setValue(this.data.options[0].value);
        }
    }
}
HbFormMatWidgetComponent.ɵfac = function HbFormMatWidgetComponent_Factory(t) { return ɵHbFormMatWidgetComponent_BaseFactory(t || HbFormMatWidgetComponent); };
HbFormMatWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: HbFormMatWidgetComponent, selectors: [["hb-mat-form-widget"]], inputs: { data: "data", key: "key", parent: "parent" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["customBlock", ""], [4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], ["class", "form-field-prefix", "matPrefix", "", 3, "innerHtml", 4, "ngIf"], ["matInput", "", 3, "type", "placeholder", "formControl", "change"], ["align", "start", 4, "ngIf"], ["class", "form-field-suffix", "matSuffix", "", 3, "innerHtml", 4, "ngIf"], ["matPrefix", "", 1, "form-field-prefix", 3, "innerHtml"], ["align", "start"], ["matSuffix", "", 1, "form-field-suffix", 3, "innerHtml"], ["matInput", "", 3, "type", "placeholder", "formControl", "matAutocomplete", "change"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "rows", "5", 3, "formControl", "placeholder"], [4, "ngIf", "ngIfElse"], ["selectBlock", ""], [3, "formControl", 4, "ngIf", "ngIfElse"], ["checkBoxBlock", ""], [3, "formControl"], ["class", "example-radio-button", 3, "value", "checked", "change", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value", "checked", "change"], ["booleanCheckboxBlock", ""], [3, "value", "checked", "formControl", "change", 4, "ngFor", "ngForOf"], [3, "value", "checked", "formControl", "change"], [3, "checked", "change"], [3, "formControl", "placeholder", 4, "ngIf"], [3, "formControl", "placeholder"]], template: function HbFormMatWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_Template, 5, 11, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
    } }, directives: [NgIf, NgClass, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatPrefix, MatHint, MatSuffix, MatAutocompleteTrigger, MatAutocomplete, NgForOf, MatOption, MatRadioGroup, MatRadioButton, MatCheckbox, MatSelect], pipes: [AsyncPipe], encapsulation: 2 });
const ɵHbFormMatWidgetComponent_BaseFactory = ɵɵgetInheritedFactory(HbFormMatWidgetComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormMatWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'hb-mat-form-widget',
                templateUrl: './hb-form-mat-widget.tpl.html',
                inputs: ['data', 'key', 'parent']
            }]
    }], null, null); })();

class TypeMeta {
    constructor(_type) {
        this._type = _type;
    }
    get type() {
        return this._type;
    }
}
class PrimitiveTypeMeta extends TypeMeta {
    constructor(_value) {
        super(([
            'string',
            'number',
            'boolean'
        ].indexOf(typeof _value) > -1 ? typeof _value : 'any'));
        this._value = _value;
    }
    get value() {
        return this._value;
    }
}
class NonPrimitiveTypeMeta extends TypeMeta {
    constructor(type, _mapping = null, // All attributes should be type of ExtractorResultType
    _value = null) {
        super(type);
        this._mapping = _mapping;
        this._value = _value;
    }
    get mapping() {
        return this._mapping;
    }
    get value() {
        return this._value;
    }
}
const OnOATResolvedSymbol = 'OnOATResolved';
function OnOATResolved(cb) {
    return Reflect.metadata(OnOATResolvedSymbol, cb);
}
class ObjectAttributeTypeExtractor {
    static generateMapping(input, options = {}) {
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        let mapping = {};
        let result = null;
        // input is an array, analyze the first cell only
        if (input instanceof Array) {
            mapping = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(input[0], options));
        }
        else {
            // Analyze attributes inside input object
            for (let key in input) {
                if (typeof input[key] !== 'function') {
                    let resolvedMeta = {};
                    // Array or Object
                    if (typeof input[key] === 'object') {
                        resolvedMeta = Extractor.generateObjectTypeMapping(input, key, options);
                        // Any primitive type
                    }
                    else if (typeof input[key] !== 'function') {
                        resolvedMeta = new PrimitiveTypeMeta(input[key]);
                    }
                    if (Reflect.hasMetadata(OnOATResolvedSymbol, input, key)) {
                        Reflect.getMetadata(OnOATResolvedSymbol, input, key)(input, key, resolvedMeta);
                    }
                    else if (typeof options.onResolved === 'function') {
                        options.onResolved(input, key, resolvedMeta);
                    }
                    // Finished, set resolved attribute metadata to result
                    mapping[Extractor.resolveAttributeKey(options, key, input)] = resolvedMeta;
                }
            }
        }
        if (typeof input === 'object') {
            if (!(input instanceof Date) && !(input instanceof Array)) {
                result = new NonPrimitiveTypeMeta('object', mapping);
            }
            else {
                result = mapping;
            }
        }
        else {
            result = { mapping };
        }
        if (Reflect.hasMetadata(OnOATResolvedSymbol, input.constructor)) {
            Reflect.getMetadata(OnOATResolvedSymbol, input.constructor)(input.constructor, null, result);
        }
        else if (typeof options.onResolved === 'function') {
            options.onResolved(input, null, result);
        }
        return result;
    }
    static generateObjectTypeMapping(object, key, options) {
        let resolvedMeta = null;
        // Mark type as any if value is null
        if (object[key] === null) {
            resolvedMeta = new PrimitiveTypeMeta(null);
            // For Array
        }
        else if (object[key] instanceof Array) {
            let target = object[key];
            // For Primitive Array
            if (typeof target[0] !== 'object') {
                resolvedMeta = new NonPrimitiveTypeMeta('array', new PrimitiveTypeMeta(target[0]));
                // For Object Array
            }
            else {
                resolvedMeta = Extractor.generateMapping(target, options);
            }
            // For Date
        }
        else if (object[key] instanceof Date) {
            resolvedMeta = new NonPrimitiveTypeMeta('date', null, object[key]);
            // For Object
        }
        else {
            resolvedMeta = Extractor.generateMapping(object[key], options);
        }
        return resolvedMeta;
    }
    static resolveAttributeKey(options, key, object) {
        let setterKey = key;
        // if set function exists, rename _attr to attr
        if (options.stripUnderscore && key.charAt(0) === '_') {
            let trimmedKey = key.substr(1, key.length);
            if (trimmedKey in object) {
                setterKey = trimmedKey;
            }
        }
        // Some serializer serialize data with snake_case
        // but JS Entity Classes name attributes with camelCase
        if (options.keyNamingStrategy === 'snake_case') {
            setterKey = Extractor.convertStringToSnakeCase(setterKey);
        }
        return setterKey;
    }
    // For naming convention changing. Not really related to this extractor
    static fixNamingConvention(data, options) {
        let result = null;
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.fixNamingConvention(obj, options));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (let key in data) {
                if (!options.stripUnderscore || key.charAt(0) !== '_') {
                    let finalKey = key;
                    if (options.keyNamingStrategy === 'snake_case') {
                        finalKey = Extractor.convertStringToSnakeCase(key);
                    }
                    if (typeof data[key] === 'object') {
                        result[finalKey] = Extractor.fixNamingConvention(data[key], options);
                    }
                    else {
                        result[finalKey] = data[key];
                    }
                }
            }
        }
        return result;
    }
    // For JSON editor only. Should be extracted.
    static convertDataToString(data, callbacks = {}) {
        let result = null;
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.convertDataToString(obj));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (let key in data) {
                if (typeof data[key] === 'object') {
                    if (data[key] instanceof Date) {
                        result[key] =
                            'date' in callbacks &&
                                callbacks.date instanceof Function ?
                                callbacks.date(data[key]) : data[key].yyyymmdd('-');
                    }
                    else {
                        result[key] = Extractor.convertDataToString(data[key]);
                    }
                }
                else if (typeof data[key] !== 'function') {
                    result[key] = data[key];
                }
            }
        }
        return result;
    }
    static convertStringToSnakeCase(value) {
        const result = value.replace(/([A-Z]+)/g, "_$1").toLowerCase();
        return result;
    }
}
let Extractor = ObjectAttributeTypeExtractor;

const FormConfigSymbol = Symbol('FormConfig');
function FormConfig(options) {
    let slug = null;
    if (options.label) {
        slug = options.label.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    return Reflect.metadata(FormConfigSymbol, Object.assign({
        hiderHeader: false,
        slug,
    }, options));
}

const ArrayOptionsSymbol = Symbol('IArrayOptionsFormConfig');
function ArrayOptions(options) {
    return Reflect.metadata(ArrayOptionsSymbol, Object.assign({}, options));
}

const ObjectOptionsSymbol = Symbol('IObjectOptionsFormConfig');
function ObjectOptions(options) {
    return Reflect.metadata(ObjectOptionsSymbol, Object.assign({}, options));
}

const AutocompleteSymbol = Symbol('IAutocompleteOptions');
function AutocompleteOptions(options) {
    return Reflect.metadata(AutocompleteSymbol, {
        autocomplete: Object.assign({}, options)
    });
}

const ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');
function ChoiceOptions(options) {
    return Reflect.metadata(ChoiceOptionsSymbol, Object.assign({
        maxChoices: 1
    }, {
        renderType: 'select'
    }, options));
}

class OptionWrapper {
    constructor(option) {
        this.label = '';
        this.control = new FormControl();
        this.renderType = 'checkbox';
        this.options = [];
        this.options.push(option);
    }
}
const MultipleChoicesOptionsSymbol = Symbol('IMultipleChoicesOptionsFormConfig');
function MultipleChoicesOptions(options) {
    return Reflect.metadata(MultipleChoicesOptionsSymbol, Object.assign({
        arrayType: 'enum'
    }, {
        maxChoices: null,
    }, options));
}

const FlexibleObjectArraySymbol = Symbol('IFlexibleObjectArrayFormConfig');
function FlexibleObjectArray(options) {
    return Reflect.metadata(FlexibleObjectArraySymbol, Object.assign({
        expandOptions: false,
    }, options, {
        arrayType: 'object',
    }));
}

const MatExtraOptionsSymbol = Symbol('IMatExtraOptionsFormConfig');
function MatExtraOptions(options) {
    return Reflect.metadata(MatExtraOptionsSymbol, Object.assign({}, options));
}

function onOATResolved(target, key, resolved) {
    if (!resolved.formFactory) {
        resolved.formFactory = {};
        [
            FormConfigSymbol,
            ArrayOptionsSymbol,
            ObjectOptionsSymbol,
            ChoiceOptionsSymbol,
            MultipleChoicesOptionsSymbol,
            FlexibleObjectArraySymbol,
            AutocompleteSymbol,
            MatExtraOptionsSymbol
        ].forEach((eachSymbol) => {
            let getMetadataArgs = [eachSymbol, target];
            if (key) {
                getMetadataArgs.push(key);
            }
            if (Reflect.hasMetadata.apply(Reflect, getMetadataArgs)) {
                resolved.formFactory = Object.assign({}, resolved.formFactory, Reflect.getMetadata.apply(Reflect, getMetadataArgs));
            }
        });
    }
}
function SetupConfig() {
    return OnOATResolved(onOATResolved);
}

class Ng2FormFactory {
    static generateFormGroupByObject(formBuilder, object, resolveTypeAny = null, options = {}) {
        return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, ObjectAttributeTypeExtractor.generateMapping(object, options), resolveTypeAny);
    }
    static generateLabel(key) {
        const fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');
        return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    }
    static generateFormGroupByOATMapping(formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
    resolveTypeAny = null, resolveTypeUndefined = null) {
        let result = {
            ngFormControl: {},
            templateConfig: {},
        };
        const isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
        let attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;
        for (let key in attrMapping) {
            // TODO: Skip attributes should be configurable
            if (['id'].indexOf(key) > -1)
                continue;
            let resolved = null;
            let currentTemplateConfig = null;
            let current = attrMapping[key];
            // Object or Array
            if (['object', 'array'].indexOf(current._type) > -1) {
                if (current._type === 'array') {
                    resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                }
                else {
                    // Handle Object
                    let child = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)();
                    resolved = {
                        groupType: 'object',
                        control: child.ngFormControl instanceof FormGroup ?
                            child.ngFormControl : new FormGroup(child.ngFormControl, Ng2FormFactory.resolveFormValidators(child).validators),
                        children: child.templateConfig
                    };
                }
            }
            // Primitive type and date
            else if (current._type !== 'any') {
                if (current !== 'undefined' && typeof current._type != 'undefined') {
                    let { validators, valueNotEmpty } = Ng2FormFactory.resolveFormValidators(current);
                    currentTemplateConfig = {
                        type: current._type,
                        control: new FormControl(valueNotEmpty ? current._value : '', validators)
                    };
                }
                else {
                    resolved = resolveTypeUndefined ? resolveTypeUndefined(current, key) : null; // Resolve as null first
                }
            }
            // Last case: Null value => any
            else {
                resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
            }
            // If resolved is still null, set it to default
            if (!currentTemplateConfig && !resolved) {
                let { validators } = Ng2FormFactory.resolveFormValidators(current);
                resolved = {
                    type: 'string',
                    renderType: 'text',
                    control: new FormControl('', validators)
                };
            }
            // FIXME: this checking might be redundant
            if (resolved) {
                currentTemplateConfig = resolved;
            }
            currentTemplateConfig.label = Ng2FormFactory.generateLabel(key);
            currentTemplateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(currentTemplateConfig);
            Ng2FormFactory.resolveTemplateConfigByType(current, currentTemplateConfig);
            result.ngFormControl[key] = currentTemplateConfig.control;
            result.templateConfig[key] = currentTemplateConfig;
        }
        result.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(result.templateConfig);
        if (isNonPrimitiveType) {
            result.templateConfig = {
                groupType: attributeMappingObject.type,
                children: result.templateConfig
            };
            Ng2FormFactory.setTemplatePreset(attributeMappingObject, result.templateConfig);
        }
        return result;
    }
    static resolveFormValidators(current) {
        let validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = [undefined, null].indexOf(current._value) === -1;
        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
        if (valueNotEmpty && validators.length === 0)
            validators.push(Validators.required);
        return { validators, valueNotEmpty };
    }
    static prepareAndCreateChildTemplateConfig(currentInput, key, formBuilder, isRaw = false) {
        const lambda = function () {
            let current = null;
            if (isRaw) {
                // Mock an array type with targeted Prototype
                current = new NonPrimitiveTypeMeta('array', ObjectAttributeTypeExtractor.generateMapping(new currentInput()));
            }
            else {
                current = currentInput;
            }
            let schemaTemp = null;
            if ('type' in current._mapping &&
                [
                    'any',
                    'string',
                    'boolean',
                    'number',
                    'date',
                    ''
                ].indexOf(current._mapping.type) > -1) {
                // For primitive type array
                let control = new FormControl('value' in current._mapping ? current._mapping.value : '', [Validators.required]), templateConfig = {};
                templateConfig[key] = {
                    label: Ng2FormFactory.generateLabel(key),
                    type: current._mapping.type,
                    control,
                };
                schemaTemp = {
                    ngFormControl: control,
                    templateConfig
                };
                Ng2FormFactory.resolveTemplateConfigByType(current._mapping, templateConfig[key]);
            }
            else {
                // For reference type array or object
                schemaTemp = Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, current._mapping);
            }
            schemaTemp.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(schemaTemp.templateConfig);
            if ('formFactory' in current && typeof current.formFactory.onCreate === 'function') {
                current.formFactory.onCreate(schemaTemp.templateConfig, Ng2FormFactory.diContainer);
            }
            return {
                ngFormControl: schemaTemp.ngFormControl instanceof FormControl || current.type === 'object' ?
                    schemaTemp.ngFormControl :
                    // For reference type array
                    new FormGroup(schemaTemp.ngFormControl, Ng2FormFactory.resolveFormValidators(schemaTemp).validators),
                templateConfig: schemaTemp.templateConfig
            };
        };
        return lambda;
    }
    static handleArray(current, key, formBuilder) {
        let ngFormArrayControl = new FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
        let initChildren = [];
        let arrayType = null;
        let result = {
            groupType: 'array',
            arrayType: current.formFactory && current.formFactory.arrayType ?
                arrayType :
                'type' in current._mapping ?
                    'primitive' : 'object',
            control: ngFormArrayControl,
            children: [],
            childrenConfigName: [],
            useConfig: 0,
            add: null,
            remove: null
        };
        if (current.formFactory && current.formFactory.objectDefinitions) {
            let i = 0;
            current.formFactory.objectDefinitions.forEach(function (each) {
                initChildren[i] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                result.childrenConfigName[i] = each.label;
                i += 1;
            });
        }
        else {
            initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder);
        }
        let add = function () {
            let childConfig = initChildren[result.useConfig]();
            const control = ngFormArrayControl;
            control.push(childConfig.ngFormControl);
            result.children.push(childConfig.templateConfig);
            childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];
            if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                current.formFactory.onPush(childConfig.templateConfig, Ng2FormFactory.diContainer);
            }
        }, remove = function (i) {
            const control = ngFormArrayControl;
            control.removeAt(i);
            result.children.splice(i, 1);
        };
        result.add = add;
        result.remove = remove;
        // Ng2FormFactory.setTemplatePreset(current, result);
        return result;
    }
    static factorySetValueFunctionToTemplate(templateObject) {
        const lambda = function (rawValue) {
            for (var key in rawValue) {
                let targetTemplate = templateObject.groupType ? templateObject.children : templateObject;
                if (key in targetTemplate) {
                    if (targetTemplate[key].type) {
                        if (typeof rawValue[key] != 'object') {
                            if ('beforeSetValue' in targetTemplate[key]) {
                                targetTemplate[key].beforeSetValue(targetTemplate[key], rawValue);
                            }
                            targetTemplate[key].control.setValue(
                            // Do not cast to string or boolean value will be broken
                            rawValue[key]);
                            if ('afterSetValue' in targetTemplate[key]) {
                                targetTemplate[key].afterSetValue(targetTemplate[key], rawValue);
                            }
                        }
                        else if (typeof rawValue[key] != 'undefined' || rawValue[key] != null) { // skip if rawValue[key] is null or undefined
                            // debugger;
                            // Something goes wrong
                        }
                    }
                    else {
                        // For Object
                        if (targetTemplate[key].groupType === 'object') {
                            // Let FormGroup to handle value setting
                            targetTemplate[key].setValue(rawValue[key]);
                        }
                        else {
                            // Even this field is array, rawValue[key] can be null
                            if (!rawValue[key])
                                continue;
                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }
                            let i = 0;
                            rawValue[key].forEach(function (each) {
                                if ('resolveFlexibleObjectArrayConfig' in targetTemplate[key]) {
                                    targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
                                }
                                targetTemplate[key].add();
                                let fixForPrimitiveArray = {};
                                fixForPrimitiveArray[key] = each;
                                targetTemplate[key].children[i].setValue(targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each);
                                i++;
                            });
                        }
                    }
                }
            }
        };
        return lambda;
    }
    static resolveTemplateConfigByType(attrMapping, templateObj) {
        if (attrMapping.type === 'boolean') {
            templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
        }
        else if (attrMapping.options) {
            if (attrMapping.options.length > 2 && attrMapping.maxChoices) {
                templateObj.renderType = attrMapping.expandOptions ? (attrMapping.maxChoices == 1 ?
                    'radio' : 'checkbox') : 'select';
            }
            else {
                templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
            }
        }
        else {
            templateObj.renderType = attrMapping.type;
            if (templateObj.type === 'string')
                templateObj.renderType = 'text';
        }
        Ng2FormFactory.setTemplatePreset(attrMapping, templateObj);
    }
    // Copy setting from OAT to templateConfig object
    static setTemplatePreset(attrMapping, templateObj) {
        [
            'label',
            'type',
            'useComponent',
            'beforeSetValue',
            'afterSetValue',
            'resolveFlexibleObjectArrayConfig',
            'maxChoices',
            'expandOptions',
            'options',
            'hints',
            'hide',
            'html',
            'renderType',
            'arrayType',
            'autocomplete',
            'matExtra',
        ].forEach(function (each) {
            if (attrMapping.formFactory && each in attrMapping.formFactory) {
                templateObj[each] = attrMapping.formFactory[each];
            }
        });
        templateObj.diContainer = Ng2FormFactory.diContainer;
    }
}
Ng2FormFactory.diContainer = new Map();

class MapToIterable {
    transform(object) {
        let result = [];
        for (let key of Object.keys(object)) {
            if (object.hasOwnProperty(key)) {
                result.push({ key, val: object[key] });
            }
        }
        return result;
    }
}
MapToIterable.ɵfac = function MapToIterable_Factory(t) { return new (t || MapToIterable)(); };
MapToIterable.ɵpipe = ɵɵdefinePipe({ name: "mapToIterable", type: MapToIterable, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MapToIterable, [{
        type: Pipe,
        args: [{
                name: 'mapToIterable'
            }]
    }], null, null); })();

const directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];
class HbFormModule {
}
HbFormModule.ɵmod = ɵɵdefineNgModule({ type: HbFormModule });
HbFormModule.ɵinj = ɵɵdefineInjector({ factory: function HbFormModule_Factory(t) { return new (t || HbFormModule)(); }, imports: [[
            FormsModule,
            ReactiveFormsModule,
            // Material Design
            BrowserAnimationsModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatExpansionModule,
            MatInputModule,
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule
        ],
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(HbFormModule, { declarations: [HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent,
        MapToIterable], imports: [FormsModule,
        ReactiveFormsModule,
        // Material Design
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule], exports: [BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent,
        MapToIterable] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(HbFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    // Material Design
                    BrowserAnimationsModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatDatepickerModule,
                    MatExpansionModule,
                    MatInputModule,
                    MatNativeDateModule,
                    MatRadioModule,
                    MatSelectModule
                ],
                declarations: directivesAndPipes,
                exports: [
                    BrowserAnimationsModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatDatepickerModule,
                    MatExpansionModule,
                    MatInputModule,
                    MatNativeDateModule,
                    MatRadioModule,
                    MatSelectModule,
                    ...directivesAndPipes,
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(HbFormArrayComponent, [ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkScrollable, MatAutocomplete, MatOption, MatOptgroup, MatAutocompleteTrigger, MatAutocompleteOrigin, Dir, MatButton, MatAnchor, MatButtonToggleGroup, MatButtonToggle, MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, MatCheckbox, MatCheckboxRequiredValidator, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent, CdkAutofill, CdkTextareaAutosize, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, MatInput, MatTextareaAutosize, MatRadioGroup, MatRadioButton, MatSelect, MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, MapToIterable]);
ɵɵsetComponentScope(HbFormMatArrayComponent, [ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkScrollable, MatAutocomplete, MatOption, MatOptgroup, MatAutocompleteTrigger, MatAutocompleteOrigin, Dir, MatButton, MatAnchor, MatButtonToggleGroup, MatButtonToggle, MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, MatCheckbox, MatCheckboxRequiredValidator, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent, CdkAutofill, CdkTextareaAutosize, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, MatInput, MatTextareaAutosize, MatRadioGroup, MatRadioButton, MatSelect, MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, MapToIterable]);
ɵɵsetComponentScope(HbFormObjectComponent, [ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkScrollable, MatAutocomplete, MatOption, MatOptgroup, MatAutocompleteTrigger, MatAutocompleteOrigin, Dir, MatButton, MatAnchor, MatButtonToggleGroup, MatButtonToggle, MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, MatCheckbox, MatCheckboxRequiredValidator, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent, CdkAutofill, CdkTextareaAutosize, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, MatInput, MatTextareaAutosize, MatRadioGroup, MatRadioButton, MatSelect, MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, MapToIterable]);
ɵɵsetComponentScope(HbFormMatObjectComponent, [ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, CdkScrollable, MatAutocomplete, MatOption, MatOptgroup, MatAutocompleteTrigger, MatAutocompleteOrigin, Dir, MatButton, MatAnchor, MatButtonToggleGroup, MatButtonToggle, MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, MatCheckbox, MatCheckboxRequiredValidator, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent, CdkAutofill, CdkTextareaAutosize, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, MatInput, MatTextareaAutosize, MatRadioGroup, MatRadioButton, MatSelect, MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, MapToIterable]);

/*
 * Public API Surface of hb-ng-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayOptions, ArrayOptionsSymbol, AutocompleteOptions, AutocompleteSymbol, ChoiceOptions, ChoiceOptionsSymbol, FlexibleObjectArray, FlexibleObjectArraySymbol, FormConfig, FormConfigSymbol, HbFormArrayComponent, HbFormMatArrayComponent, HbFormMatObjectComponent, HbFormMatWidgetComponent, HbFormModule, HbFormObjectComponent, HbFormWidgetComponent, MapToIterable, MatExtraOptions, MatExtraOptionsSymbol, MultipleChoicesOptions, MultipleChoicesOptionsSymbol, Ng2FormFactory, NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor, ObjectOptions, ObjectOptionsSymbol, OnOATResolved, OptionWrapper, PrimitiveTypeMeta, SetupConfig, TypeMeta, onOATResolved };
//# sourceMappingURL=hb-ng-form.js.map
