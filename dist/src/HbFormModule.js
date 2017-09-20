import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdExpansionModule, MdInputModule, MdNativeDateModule, MdRadioModule, MdSelectModule } from "@angular/material";
import { CommonModule } from "hb-ng-sdk";
import { HbFormArray, HbMdFormArray, HbFormObject, HbMdFormObject, HbFormWidget, HbMdFormWidget } from './index';
var directivesAndPipes = [
    HbFormArray,
    HbMdFormArray,
    HbFormObject,
    HbMdFormObject,
    HbFormWidget,
    HbMdFormWidget
];
var HbFormModule = /** @class */ (function () {
    function HbFormModule() {
    }
    HbFormModule.decorators = [
        { type: NgModule, args: [{
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
                    exports: directivesAndPipes.slice()
                },] },
    ];
    /** @nocollapse */
    HbFormModule.ctorParameters = function () { return []; };
    return HbFormModule;
}());
export { HbFormModule };
//# sourceMappingURL=HbFormModule.js.map