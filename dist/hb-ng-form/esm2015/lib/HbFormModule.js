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
const directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];
export class HbFormModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGJGb3JtTW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9IYkZvcm1Nb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixD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Qix3TkFDeEIsYUFBYTt1QkFIYix3QkFBd0IsbzlEQUh4QixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHdCQUF3Qix3TkFDeEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHsgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGVcIjtcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZFwiO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3hcIjtcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvblwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW9cIjtcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcblxuaW1wb3J0IHtcbiAgICBIYkZvcm1BcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRBcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1PYmplY3RDb21wb25lbnQsXG4gICAgSGJGb3JtTWF0T2JqZWN0Q29tcG9uZW50LFxuICAgIEhiRm9ybVdpZGdldENvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRXaWRnZXRDb21wb25lbnRcbn0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5pbXBvcnQgeyBJQmFzZUZvcm1Db25maWcgfSBmcm9tIFwiLi9jbGFzcy9kZWNvcmF0b3JzL0Zvcm1Db25maWdcIjtcbmltcG9ydCB7IElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuL2NsYXNzL2RlY29yYXRvcnMvQ2hvaWNlT3B0aW9uc1wiO1xuaW1wb3J0IHsgSUFycmF5T3B0aW9uc0Zvcm1Db25maWcgfSBmcm9tIFwiLi9jbGFzcy9kZWNvcmF0b3JzL0FycmF5T3B0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVG9JdGVyYWJsZSB9IGZyb20gXCIuL3BpcGUvTWFwVG9JdGVyYWJsZVwiO1xuXG5jb25zdCBkaXJlY3RpdmVzQW5kUGlwZXMgPSBbXG4gICAgSGJGb3JtQXJyYXlDb21wb25lbnQsXG4gICAgSGJGb3JtTWF0QXJyYXlDb21wb25lbnQsXG4gICAgSGJGb3JtT2JqZWN0Q29tcG9uZW50LFxuICAgIEhiRm9ybU1hdE9iamVjdENvbXBvbmVudCxcbiAgICBIYkZvcm1XaWRnZXRDb21wb25lbnQsXG4gICAgSGJGb3JtTWF0V2lkZ2V0Q29tcG9uZW50LFxuICAgIE1hcFRvSXRlcmFibGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgLy8gTWF0ZXJpYWwgRGVzaWduXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBkaXJlY3RpdmVzQW5kUGlwZXMsXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIC4uLmRpcmVjdGl2ZXNBbmRQaXBlcyxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhiRm9ybU1vZHVsZSB7XG59XG5cbi8vIEFjdHVhbGx5IHRlbXBsYXRlIG9iamVjdCBpcyB3YXkgbW9yZSBjb21wbGljYXRlZC4gVHlwZXMgaW4gaGVyZSBoYXZlIG5vdCBhZGRyZXNzIGFsbCBhdHRyaWJ1dGVzIGJ1dCBjb25maWd1cmFibGUgb25seVxuZXhwb3J0IHR5cGUgVGVtcGxhdGVPYmplY3RUeXBlID0gSUJhc2VGb3JtQ29uZmlnIHwgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnIHwgSUFycmF5T3B0aW9uc0Zvcm1Db25maWc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUNvbXBvbmVudCB7XG4gICAgLy8gVGVtcGxhdGVPYmplY3RUeXBlXG4gICAgdGVtcGxhdGVPYmplY3Q6IGFueTtcbiAgICBwYXJlbnRUZW1wbGF0ZU9iamVjdDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21Db21wb25lbnRDb25zdHJ1Y3RvciB7XG4gICAgbmV3ICguLi5kZXBzOiBhbnlbXSk6IElDdXN0b21Db21wb25lbnQ7XG59XG4iXX0=