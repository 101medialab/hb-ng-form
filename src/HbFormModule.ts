import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
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
} from "@angular/material";
import { CommonModule } from "hb-ng-sdk";

import {
    HbFormArray,
    HbMatFormArray,
    HbFormObject,
    HbMatFormObject,
    HbFormWidget,
    HbMatFormWidget
} from './index';
import { IBaseFormConfig } from "./class/decorators/FormConfig";
import { IChoiceOptionsFormConfig } from "./class/decorators/ChoiceOptions";
import { IArrayOptionsFormConfig } from "./class/decorators/ArrayOptions";

let directivesAndPipes = [
        HbFormArray,
        HbMatFormArray,
        HbFormObject,
        HbMatFormObject,
        HbFormWidget,
        HbMatFormWidget
    ]
;

@NgModule({
    imports: [
        CommonModule,
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
        ...directivesAndPipes
    ]
})
export class HbFormModule {
}

// Actually template object is way more complicated. Types in here have not address all attributes but configurable only
export type TemplateObjectType = IBaseFormConfig | IChoiceOptionsFormConfig | IArrayOptionsFormConfig;

export interface ICustomComponent {
    // TemplateObjectType
    templateObject: any;
}

export interface ICustomComponentConstructor {
    new (...deps: any[]): ICustomComponent;
}