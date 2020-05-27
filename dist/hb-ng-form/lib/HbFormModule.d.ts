import { IBaseFormConfig } from "./class/decorators/FormConfig";
import { IChoiceOptionsFormConfig } from "./class/decorators/ChoiceOptions";
import { IArrayOptionsFormConfig } from "./class/decorators/ArrayOptions";
import * as i0 from "@angular/core";
import * as i1 from "./components/hb-form-array.component";
import * as i2 from "./components/hb-form-mat-array.component";
import * as i3 from "./components/hb-form-object.component";
import * as i4 from "./components/hb-form-mat-object.component";
import * as i5 from "./components/hb-form-widget.component";
import * as i6 from "./components/hb-form-mat-widget.component";
import * as i7 from "./pipe/MapToIterable";
import * as i8 from "@angular/forms";
import * as i9 from "@angular/platform-browser/animations";
import * as i10 from "@angular/material/autocomplete";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/button-toggle";
import * as i13 from "@angular/material/card";
import * as i14 from "@angular/material/checkbox";
import * as i15 from "@angular/material/datepicker";
import * as i16 from "@angular/material/expansion";
import * as i17 from "@angular/material/input";
import * as i18 from "@angular/material/core";
import * as i19 from "@angular/material/radio";
import * as i20 from "@angular/material/select";
export declare class HbFormModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<HbFormModule, [typeof i1.HbFormArrayComponent, typeof i2.HbFormMatArrayComponent, typeof i3.HbFormObjectComponent, typeof i4.HbFormMatObjectComponent, typeof i5.HbFormWidgetComponent, typeof i6.HbFormMatWidgetComponent, typeof i7.MapToIterable], [typeof i8.FormsModule, typeof i8.ReactiveFormsModule, typeof i9.BrowserAnimationsModule, typeof i10.MatAutocompleteModule, typeof i11.MatButtonModule, typeof i12.MatButtonToggleModule, typeof i13.MatCardModule, typeof i14.MatCheckboxModule, typeof i15.MatDatepickerModule, typeof i16.MatExpansionModule, typeof i17.MatInputModule, typeof i18.MatNativeDateModule, typeof i19.MatRadioModule, typeof i20.MatSelectModule], [typeof i9.BrowserAnimationsModule, typeof i10.MatAutocompleteModule, typeof i11.MatButtonModule, typeof i12.MatButtonToggleModule, typeof i13.MatCardModule, typeof i14.MatCheckboxModule, typeof i15.MatDatepickerModule, typeof i16.MatExpansionModule, typeof i17.MatInputModule, typeof i18.MatNativeDateModule, typeof i19.MatRadioModule, typeof i20.MatSelectModule, typeof i1.HbFormArrayComponent, typeof i2.HbFormMatArrayComponent, typeof i3.HbFormObjectComponent, typeof i4.HbFormMatObjectComponent, typeof i5.HbFormWidgetComponent, typeof i6.HbFormMatWidgetComponent, typeof i7.MapToIterable]>;
    static ɵinj: i0.ɵɵInjectorDef<HbFormModule>;
}
export declare type TemplateObjectType = IBaseFormConfig | IChoiceOptionsFormConfig | IArrayOptionsFormConfig;
export interface ICustomComponent {
    templateObject: any;
    parentTemplateObject: any;
}
export interface ICustomComponentConstructor {
    new (...deps: any[]): ICustomComponent;
}
