import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { HbFormArrayComponent, HbFormMatArrayComponent, HbFormObjectComponent, HbFormMatObjectComponent, HbFormWidgetComponent, HbFormMatWidgetComponent } from '../public-api';
import { MapToIterable } from "./pipe/MapToIterable";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/scrolling";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/cdk/bidi";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/button-toggle";
import * as i9 from "@angular/material/card";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/datepicker";
import * as i12 from "@angular/material/expansion";
import * as i13 from "@angular/cdk/text-field";
import * as i14 from "@angular/material/form-field";
import * as i15 from "@angular/material/input";
import * as i16 from "@angular/material/radio";
import * as i17 from "@angular/material/select";
var directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];
var HbFormModule = /** @class */ (function () {
    function HbFormModule() {
    }
    HbFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: HbFormModule });
    HbFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HbFormModule_Factory(t) { return new (t || HbFormModule)(); }, imports: [[
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
    return HbFormModule;
}());
export { HbFormModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HbFormModule, { declarations: [HbFormArrayComponent,
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HbFormModule, [{
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
                exports: __spread([
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
                ], directivesAndPipes)
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(HbFormArrayComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.CdkScrollable, i4.MatAutocomplete, i5.MatOption, i5.MatOptgroup, i4.MatAutocompleteTrigger, i4.MatAutocompleteOrigin, i6.Dir, i7.MatButton, i7.MatAnchor, i8.MatButtonToggleGroup, i8.MatButtonToggle, i9.MatCard, i9.MatCardHeader, i9.MatCardTitleGroup, i9.MatCardContent, i9.MatCardTitle, i9.MatCardSubtitle, i9.MatCardActions, i9.MatCardFooter, i9.MatCardSmImage, i9.MatCardMdImage, i9.MatCardLgImage, i9.MatCardImage, i9.MatCardXlImage, i9.MatCardAvatar, i10.MatCheckbox, i10.MatCheckboxRequiredValidator, i11.MatCalendar, i11.MatCalendarBody, i11.MatDatepicker, i11.MatDatepickerContent, i11.MatDatepickerInput, i11.MatDatepickerToggle, i11.MatDatepickerToggleIcon, i11.MatMonthView, i11.MatYearView, i11.MatMultiYearView, i11.MatCalendarHeader, i12.MatAccordion, i12.MatExpansionPanel, i12.MatExpansionPanelActionRow, i12.MatExpansionPanelHeader, i12.MatExpansionPanelTitle, i12.MatExpansionPanelDescription, i12.MatExpansionPanelContent, i13.CdkAutofill, i13.CdkTextareaAutosize, i14.MatError, i14.MatFormField, i14.MatHint, i14.MatLabel, i14.MatPlaceholder, i14.MatPrefix, i14.MatSuffix, i15.MatInput, i15.MatTextareaAutosize, i16.MatRadioGroup, i16.MatRadioButton, i17.MatSelect, i17.MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, MapToIterable]);
i0.ɵɵsetComponentScope(HbFormMatArrayComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.CdkScrollable, i4.MatAutocomplete, i5.MatOption, i5.MatOptgroup, i4.MatAutocompleteTrigger, i4.MatAutocompleteOrigin, i6.Dir, i7.MatButton, i7.MatAnchor, i8.MatButtonToggleGroup, i8.MatButtonToggle, i9.MatCard, i9.MatCardHeader, i9.MatCardTitleGroup, i9.MatCardContent, i9.MatCardTitle, i9.MatCardSubtitle, i9.MatCardActions, i9.MatCardFooter, i9.MatCardSmImage, i9.MatCardMdImage, i9.MatCardLgImage, i9.MatCardImage, i9.MatCardXlImage, i9.MatCardAvatar, i10.MatCheckbox, i10.MatCheckboxRequiredValidator, i11.MatCalendar, i11.MatCalendarBody, i11.MatDatepicker, i11.MatDatepickerContent, i11.MatDatepickerInput, i11.MatDatepickerToggle, i11.MatDatepickerToggleIcon, i11.MatMonthView, i11.MatYearView, i11.MatMultiYearView, i11.MatCalendarHeader, i12.MatAccordion, i12.MatExpansionPanel, i12.MatExpansionPanelActionRow, i12.MatExpansionPanelHeader, i12.MatExpansionPanelTitle, i12.MatExpansionPanelDescription, i12.MatExpansionPanelContent, i13.CdkAutofill, i13.CdkTextareaAutosize, i14.MatError, i14.MatFormField, i14.MatHint, i14.MatLabel, i14.MatPlaceholder, i14.MatPrefix, i14.MatSuffix, i15.MatInput, i15.MatTextareaAutosize, i16.MatRadioGroup, i16.MatRadioButton, i17.MatSelect, i17.MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, MapToIterable]);
i0.ɵɵsetComponentScope(HbFormObjectComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.CdkScrollable, i4.MatAutocomplete, i5.MatOption, i5.MatOptgroup, i4.MatAutocompleteTrigger, i4.MatAutocompleteOrigin, i6.Dir, i7.MatButton, i7.MatAnchor, i8.MatButtonToggleGroup, i8.MatButtonToggle, i9.MatCard, i9.MatCardHeader, i9.MatCardTitleGroup, i9.MatCardContent, i9.MatCardTitle, i9.MatCardSubtitle, i9.MatCardActions, i9.MatCardFooter, i9.MatCardSmImage, i9.MatCardMdImage, i9.MatCardLgImage, i9.MatCardImage, i9.MatCardXlImage, i9.MatCardAvatar, i10.MatCheckbox, i10.MatCheckboxRequiredValidator, i11.MatCalendar, i11.MatCalendarBody, i11.MatDatepicker, i11.MatDatepickerContent, i11.MatDatepickerInput, i11.MatDatepickerToggle, i11.MatDatepickerToggleIcon, i11.MatMonthView, i11.MatYearView, i11.MatMultiYearView, i11.MatCalendarHeader, i12.MatAccordion, i12.MatExpansionPanel, i12.MatExpansionPanelActionRow, i12.MatExpansionPanelHeader, i12.MatExpansionPanelTitle, i12.MatExpansionPanelDescription, i12.MatExpansionPanelContent, i13.CdkAutofill, i13.CdkTextareaAutosize, i14.MatError, i14.MatFormField, i14.MatHint, i14.MatLabel, i14.MatPlaceholder, i14.MatPrefix, i14.MatSuffix, i15.MatInput, i15.MatTextareaAutosize, i16.MatRadioGroup, i16.MatRadioButton, i17.MatSelect, i17.MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, MapToIterable]);
i0.ɵɵsetComponentScope(HbFormMatObjectComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.CdkScrollable, i4.MatAutocomplete, i5.MatOption, i5.MatOptgroup, i4.MatAutocompleteTrigger, i4.MatAutocompleteOrigin, i6.Dir, i7.MatButton, i7.MatAnchor, i8.MatButtonToggleGroup, i8.MatButtonToggle, i9.MatCard, i9.MatCardHeader, i9.MatCardTitleGroup, i9.MatCardContent, i9.MatCardTitle, i9.MatCardSubtitle, i9.MatCardActions, i9.MatCardFooter, i9.MatCardSmImage, i9.MatCardMdImage, i9.MatCardLgImage, i9.MatCardImage, i9.MatCardXlImage, i9.MatCardAvatar, i10.MatCheckbox, i10.MatCheckboxRequiredValidator, i11.MatCalendar, i11.MatCalendarBody, i11.MatDatepicker, i11.MatDatepickerContent, i11.MatDatepickerInput, i11.MatDatepickerToggle, i11.MatDatepickerToggleIcon, i11.MatMonthView, i11.MatYearView, i11.MatMultiYearView, i11.MatCalendarHeader, i12.MatAccordion, i12.MatExpansionPanel, i12.MatExpansionPanelActionRow, i12.MatExpansionPanelHeader, i12.MatExpansionPanelTitle, i12.MatExpansionPanelDescription, i12.MatExpansionPanelContent, i13.CdkAutofill, i13.CdkTextareaAutosize, i14.MatError, i14.MatFormField, i14.MatHint, i14.MatLabel, i14.MatPlaceholder, i14.MatPrefix, i14.MatSuffix, i15.MatInput, i15.MatTextareaAutosize, i16.MatRadioGroup, i16.MatRadioButton, i17.MatSelect, i17.MatSelectTrigger, HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, MapToIterable]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGJGb3JtTW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9IYkZvcm1Nb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUNILG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQzNCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0Is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Q3JCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsd0JBQXdCLHdOQUN4QixhQUFhO3VCQUhiLHdCQUF3QixvOURBSHhCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsd0JBQXdCLHdOQUN4QixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZVwiO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jYXJkXCI7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveFwiO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uXCI7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9yYWRpb1wiO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuXG5pbXBvcnQge1xuICAgIEhiRm9ybUFycmF5Q29tcG9uZW50LFxuICAgIEhiRm9ybU1hdEFycmF5Q29tcG9uZW50LFxuICAgIEhiRm9ybU9iamVjdENvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRPYmplY3RDb21wb25lbnQsXG4gICAgSGJGb3JtV2lkZ2V0Q29tcG9uZW50LFxuICAgIEhiRm9ybU1hdFdpZGdldENvbXBvbmVudFxufSBmcm9tICcuLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IElCYXNlRm9ybUNvbmZpZyB9IGZyb20gXCIuL2NsYXNzL2RlY29yYXRvcnMvRm9ybUNvbmZpZ1wiO1xuaW1wb3J0IHsgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4vY2xhc3MvZGVjb3JhdG9ycy9DaG9pY2VPcHRpb25zXCI7XG5pbXBvcnQgeyBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuL2NsYXNzL2RlY29yYXRvcnMvQXJyYXlPcHRpb25zXCI7XG5pbXBvcnQgeyBNYXBUb0l0ZXJhYmxlIH0gZnJvbSBcIi4vcGlwZS9NYXBUb0l0ZXJhYmxlXCI7XG5cbmNvbnN0IGRpcmVjdGl2ZXNBbmRQaXBlcyA9IFtcbiAgICBIYkZvcm1BcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRBcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1PYmplY3RDb21wb25lbnQsXG4gICAgSGJGb3JtTWF0T2JqZWN0Q29tcG9uZW50LFxuICAgIEhiRm9ybVdpZGdldENvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRXaWRnZXRDb21wb25lbnQsXG4gICAgTWFwVG9JdGVyYWJsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICAvLyBNYXRlcmlhbCBEZXNpZ25cbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRSYWRpb01vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXNBbmRQaXBlcyxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgLi4uZGlyZWN0aXZlc0FuZFBpcGVzLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtTW9kdWxlIHtcbn1cblxuLy8gQWN0dWFsbHkgdGVtcGxhdGUgb2JqZWN0IGlzIHdheSBtb3JlIGNvbXBsaWNhdGVkLiBUeXBlcyBpbiBoZXJlIGhhdmUgbm90IGFkZHJlc3MgYWxsIGF0dHJpYnV0ZXMgYnV0IGNvbmZpZ3VyYWJsZSBvbmx5XG5leHBvcnQgdHlwZSBUZW1wbGF0ZU9iamVjdFR5cGUgPSBJQmFzZUZvcm1Db25maWcgfCBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWcgfCBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQ29tcG9uZW50IHtcbiAgICAvLyBUZW1wbGF0ZU9iamVjdFR5cGVcbiAgICB0ZW1wbGF0ZU9iamVjdDogYW55O1xuICAgIHBhcmVudFRlbXBsYXRlT2JqZWN0OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUNvbXBvbmVudENvbnN0cnVjdG9yIHtcbiAgICBuZXcgKC4uLmRlcHM6IGFueVtdKTogSUN1c3RvbUNvbXBvbmVudDtcbn1cbiJdfQ==