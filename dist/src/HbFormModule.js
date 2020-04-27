var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
import { HbFormArrayComponent, HbFormMatArrayComponent, HbFormObjectComponent, HbFormMatObjectComponent, HbFormWidgetComponent, HbFormMatWidgetComponent } from './index';
import { MapToIterable } from "./pipe/MapToIterable";
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
    HbFormModule = __decorate([
        NgModule({
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
            exports: __spreadArrays(directivesAndPipes)
        })
    ], HbFormModule);
    return HbFormModule;
}());
export { HbFormModule };
//# sourceMappingURL=HbFormModule.js.map