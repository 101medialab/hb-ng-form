/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "./hb-form-widget.component";
var styles_HbFormWidgetComponent = [];
var RenderType_HbFormWidgetComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_HbFormWidgetComponent, data: {} });
export { RenderType_HbFormWidgetComponent as RenderType_HbFormWidgetComponent };
function View_HbFormWidgetComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "hb-form-widget_", (_co.key ? _co.key : _co.data.slug), "-input"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.data.label; _ck(_v, 1, 0, currVal_1); }); }
function View_HbFormWidgetComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 5, "input", [], [[1, "id", 0], [8, "type", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_co.data.control.patchValue($event.target.value) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(4, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_p]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(6, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.data.control; _ck(_v, 4, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.key ? _co.key : _co.data.slug) + "-input"); var currVal_1 = (_co.data.renderType ? _co.data.renderType : "text"); var currVal_2 = ((_co.data.label !== undefined) ? _co.data.label : null); var currVal_3 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_4 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_5 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_6 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_7 = i0.ɵnov(_v, 6).ngClassValid; var currVal_8 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_9 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_HbFormWidgetComponent_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_HbFormWidgetComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_6)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(16777216, [["autocompleteBlock", 2]], null, 1, null, View_HbFormWidgetComponent_7)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.data.selectOptionsObservables == undefined); var currVal_1 = i0.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = (_co.data.autocomplete != undefined); _ck(_v, 4, 0, currVal_2); }, null); }
function View_HbFormWidgetComponent_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 6, "textarea", [["rows", "5"]], [[1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(4, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_p]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(6, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵted(-1, null, ["                "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.data.control; _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.key ? _co.key : (_co.data.slug + "-input")); var currVal_1 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_2 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_3 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_4 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_5 = i0.ɵnov(_v, 6).ngClassValid; var currVal_6 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_7 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_HbFormWidgetComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_HbFormWidgetComponent_5)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpad(3, 4), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_8)), i0.ɵdid(5, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_ck(_v, 3, 0, "select", "radio", "checkbox", "textarea").indexOf(_co.data.renderType) === (0 - 1)); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.data.renderType == "textarea"); _ck(_v, 5, 0, currVal_1); }, null); }
function View_HbFormWidgetComponent_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 6, "input", [["class", "example-radio-button"], ["type", "radio"]], [[8, "id", 0], [8, "checked", 0], [1, "name", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (i0.ɵnov(_v, 3).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (i0.ɵnov(_v, 3).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("change" === en)) {
        var pd_6 = (_co.updateParentValue($event, _v.parent.context.$implicit) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵdid(3, 212992, null, 0, i1.RadioControlValueAccessor, [i0.Renderer2, i0.ElementRef, i1.ɵangular_packages_forms_forms_n, i0.Injector], { value: [0, "value"] }, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i1.DefaultValueAccessor, i1.RadioControlValueAccessor]), i0.ɵdid(5, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_p]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(7, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _v.parent.context.$implicit.value; _ck(_v, 3, 0, currVal_10); var currVal_11 = _co.data.control; _ck(_v, 5, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "hb-form-widget_", (_co.key ? _co.key : _co.data.slug), "-input__option.name"); var currVal_1 = (((_co.data.control.value === _v.parent.context.$implicit.value) || (_v.parent.context.$implicit.id === _co.data.control.value)) ? true : null); var currVal_2 = ((_co.data.renderType == "radio") ? ((_co.key ? _co.key : _co.data.slug) + "-input") : null); var currVal_3 = i0.ɵnov(_v, 7).ngClassUntouched; var currVal_4 = i0.ɵnov(_v, 7).ngClassTouched; var currVal_5 = i0.ɵnov(_v, 7).ngClassPristine; var currVal_6 = i0.ɵnov(_v, 7).ngClassDirty; var currVal_7 = i0.ɵnov(_v, 7).ngClassValid; var currVal_8 = i0.ɵnov(_v, 7).ngClassInvalid; var currVal_9 = i0.ɵnov(_v, 7).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_HbFormWidgetComponent_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 5, "input", [["type", "checkbox"]], [[8, "value", 0], [8, "checked", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("change" === en)) {
        var pd_2 = (_co.updateParentValue($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.CheckboxControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.CheckboxControlValueAccessor]), i0.ɵdid(4, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_p]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(6, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.data.control; _ck(_v, 4, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.parent.context.$implicit.value; var currVal_1 = (((_co.data.control.value === _v.parent.parent.context.$implicit.value) || (_v.parent.parent.context.$implicit.id === _co.data.control.value)) ? true : null); var currVal_2 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_3 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_4 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_5 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_6 = i0.ɵnov(_v, 6).ngClassValid; var currVal_7 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_8 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_HbFormWidgetComponent_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.data.control.patchValue($event.source.checked) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.data.control.value ? true : null); _ck(_v, 0, 0, currVal_0); }); }
function View_HbFormWidgetComponent_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_14)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["booleanCheckBoxBlock", 2]], null, 0, null, View_HbFormWidgetComponent_15))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.parent == null) ? null : _co.parent.arrayType) == "enum"); var currVal_1 = i0.ɵnov(_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_HbFormWidgetComponent_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_12)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["checkBoxBlock", 2]], null, 0, null, View_HbFormWidgetComponent_13))], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.data.renderType == "radio"); var currVal_3 = i0.ɵnov(_v, 5); _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(2, "hb-form-widget_", (_co.key ? _co.key : _co.data.slug), "-input__", _co.slugifyString(_v.context.$implicit.name), ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_HbFormWidgetComponent_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_HbFormWidgetComponent_11)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 2, 0, i0.ɵnov(_v, 3).transform(_co.resolvedOptions)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HbFormWidgetComponent_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i1.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i1.ɵangular_packages_forms_forms_x, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = (_v.context.$implicit.name ? _v.context.$implicit.name : _v.context.$implicit.value); _ck(_v, 3, 0, currVal_2); }); }
function View_HbFormWidgetComponent_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "select", [], [[1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 16384, null, 0, i1.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.SelectControlValueAccessor]), i0.ɵdid(3, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_p]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(5, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_HbFormWidgetComponent_18)), i0.ɵdid(7, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.data.control; _ck(_v, 3, 0, currVal_8); var currVal_9 = i0.ɵunv(_v, 7, 0, i0.ɵnov(_v, 8).transform(_co.resolvedOptions)); _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.data.label != undefined) ? _co.data.label : null); var currVal_1 = i0.ɵnov(_v, 5).ngClassUntouched; var currVal_2 = i0.ɵnov(_v, 5).ngClassTouched; var currVal_3 = i0.ɵnov(_v, 5).ngClassPristine; var currVal_4 = i0.ɵnov(_v, 5).ngClassDirty; var currVal_5 = i0.ɵnov(_v, 5).ngClassValid; var currVal_6 = i0.ɵnov(_v, 5).ngClassInvalid; var currVal_7 = i0.ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_HbFormWidgetComponent_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_17)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.data.renderType == "select"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_HbFormWidgetComponent_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_10)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["selectBlock", 2]], null, 0, null, View_HbFormWidgetComponent_16))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.data.renderType != "select"); var currVal_1 = i0.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_HbFormWidgetComponent_19(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "hints"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.typeof(_co.data.hints) == "function") ? _co.data.hints(_co.data.diContainer, _co.data, _co.parent) : _co.data.hints); _ck(_v, 1, 0, currVal_0); }); }
function View_HbFormWidgetComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_3)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_4)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_HbFormWidgetComponent_9)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpad(7, 3), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_19)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.label; _ck(_v, 2, 0, currVal_0); var currVal_1 = (((_co.parent == null) ? null : _co.parent.arrayType) === "enum"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_ck(_v, 7, 0, "radio", "checkbox", "select").indexOf(_co.data.renderType) > (0 - 1)); _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_co.data == null) ? null : _co.data.hints); _ck(_v, 9, 0, currVal_3); }, null); }
function View_HbFormWidgetComponent_20(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_HbFormWidgetComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "error": 0, "hb-form-with-hints": 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_2)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(16777216, [[1, 3], ["customBlock", 2]], null, 0, null, View_HbFormWidgetComponent_20))], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(2, "expand-to-child hb-form-widget hb-form-widget_", _co.key, " ", ((_co.data == null) ? null : ((_co.data.html == null) ? null : _co.data.html.classAttr)), ""); var currVal_1 = _ck(_v, 2, 0, !_co.data.control.valid, _co.data.hints); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_co.data.useComponent; var currVal_3 = i0.ɵnov(_v, 5); _ck(_v, 4, 0, currVal_2, currVal_3); }, null); }
export function View_HbFormWidgetComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { customBlock: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HbFormWidgetComponent_1)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((((_co.data.control != undefined) && ((_co.data.groupType == undefined) || (_co.parent.arrayType == "enum"))) && (_co.key != "setValue")) && ((_co.data.hide == undefined) || !_co.data.hide)); _ck(_v, 2, 0, currVal_0); }, null); }
export function View_HbFormWidgetComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "hb-form-widget", [], null, null, null, View_HbFormWidgetComponent_0, RenderType_HbFormWidgetComponent)), i0.ɵdid(1, 4308992, null, 0, i3.HbFormWidgetComponent, [i0.ComponentFactoryResolver], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HbFormWidgetComponentNgFactory = i0.ɵccf("hb-form-widget", i3.HbFormWidgetComponent, View_HbFormWidgetComponent_Host_0, { data: "data", key: "key", parent: "parent" }, {}, []);
export { HbFormWidgetComponentNgFactory as HbFormWidgetComponentNgFactory };
//# sourceMappingURL=hb-form-widget.component.ngfactory.js.map