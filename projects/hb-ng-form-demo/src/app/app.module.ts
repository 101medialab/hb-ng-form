import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HbFormModule } from "hb-ng-form";

import { HbFormDemoComponent } from "./hb-form-demo.component";
import { MySelectizeComponent } from "./MySelectizeComponent";
import { HbSelectizeDirective } from "./SelectizeDirective";
import { AppRoutingModule } from "./app-routing.module";
import { PrimitiveFieldsDemoComponent } from './components/primitive-fields-demo/primitive-fields-demo.component';
import { SelectionFieldsDemoComponent } from './components/selection-fields-demo/selection-fields-demo.component';
import { ObjectFieldsDemoComponent } from './components/object-fields-demo/object-fields-demo.component';
import { ArrayFieldsDemoComponent } from './components/array-fields-demo/array-fields-demo.component';
import { CustomizedComponentFieldsDemoComponent } from './components/customized-component-fields-demo/customized-component-fields-demo.component';
import { DiContainerDemoComponent } from './components/di-container-demo/di-container-demo.component';
import { ThemesTutorialComponent } from './components/themes-tutorial/themes-tutorial.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HbFormModule,
        AppRoutingModule,
    ],
    entryComponents: [
        MySelectizeComponent
    ],
    declarations: [
        HbFormDemoComponent,
        MySelectizeComponent,
        HbSelectizeDirective,
        PrimitiveFieldsDemoComponent,
        SelectionFieldsDemoComponent,
        ObjectFieldsDemoComponent,
        ArrayFieldsDemoComponent,
        CustomizedComponentFieldsDemoComponent,
        DiContainerDemoComponent,
        ThemesTutorialComponent,
    ],
    bootstrap: [HbFormDemoComponent],
    exports: [
        HbSelectizeDirective
    ]
})
export class HbFormDemoModule {
}
