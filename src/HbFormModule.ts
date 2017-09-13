import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "hb-ng2-sdk";

import {
    HbFormArray,
    HbMdFormArray,
    HbFormObject,
    HbFormWidget
} from './index';


let directivesAndPipes = [
        HbFormArray,
        HbMdFormArray,
        HbFormObject,
        HbFormWidget
    ]
;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: directivesAndPipes,
    exports: [
        ...directivesAndPipes
    ]
})
export class HbFormModule {
}