import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule } from "@angular/material";
import { CommonModule } from "hb-ng-sdk";
import { HbFormArray, HbMatFormArray, HbFormObject, HbMatFormObject, HbFormWidget, HbMatFormWidget } from './index';
var directivesAndPipes = [
    HbFormArray,
    HbMatFormArray,
    HbFormObject,
    HbMatFormObject,
    HbFormWidget,
    HbMatFormWidget
];
var HbFormModule = (function () {
    function HbFormModule() {
    }
    HbFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
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
                    exports: directivesAndPipes.slice()
                },] },
    ];
    return HbFormModule;
}());
export { HbFormModule };
//# sourceMappingURL=HbFormModule.js.map