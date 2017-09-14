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