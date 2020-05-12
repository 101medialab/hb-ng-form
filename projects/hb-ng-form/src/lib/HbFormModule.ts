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

import {
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent
} from '../public-api';
import { IBaseFormConfig } from "./class/decorators/FormConfig";
import { IChoiceOptionsFormConfig } from "./class/decorators/ChoiceOptions";
import { IArrayOptionsFormConfig } from "./class/decorators/ArrayOptions";
import { MapToIterable } from "./pipe/MapToIterable";

const directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];

@NgModule({
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
})
export class HbFormModule {
}

// Actually template object is way more complicated. Types in here have not address all attributes but configurable only
export type TemplateObjectType = IBaseFormConfig | IChoiceOptionsFormConfig | IArrayOptionsFormConfig;

export interface ICustomComponent {
    // TemplateObjectType
    templateObject: any;
    parentTemplateObject: any;
}

export interface ICustomComponentConstructor {
    new (...deps: any[]): ICustomComponent;
}
