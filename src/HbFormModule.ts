import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdExpansionModule,
    MdInputModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule
} from "@angular/material";
import { CommonModule } from "hb-ng2-sdk";

import {
    HbFormArray,
    HbMdFormArray,
    HbFormObject,
    HbMdFormObject,
    HbFormWidget,
    HbMdFormWidget
} from './index';
import { IBaseFormConfig } from "./class/decorators/FormConfig";
import { IMultipleOptionsFormConfig } from "./class/decorators/MultiOptions";
import { IArrayOptionsFormConfig } from "./class/decorators/ArrayOptions";

let directivesAndPipes = [
        HbFormArray,
        HbMdFormArray,
        HbFormObject,
        HbMdFormObject,
        HbFormWidget,
        HbMdFormWidget
    ]
;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // Material Design
        BrowserAnimationsModule,

        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdExpansionModule,
        MdInputModule,
        MdNativeDateModule,
        MdRadioModule,
        MdSelectModule
    ],
    declarations: directivesAndPipes,
    exports: [
        ...directivesAndPipes
    ]
})
export class HbFormModule {
}

// Actually template object is way more complicated. Types in here have not address all attributes but configurable only
export type TemplateObjectType = IBaseFormConfig | IMultipleOptionsFormConfig | IArrayOptionsFormConfig | ICustomComponent;

export interface ICustomComponent {
    templateObject: TemplateObjectType
}