import 'hammerjs';

import { Component, NgModule, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import 'core-js';
import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';

import 'hb-ng2-sdk/dist/reusable/hb-es-shim';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HbFormModule } from "../../src/HbFormModule";
import { CommonModule, ObjectAttributeTypeExtractor as Extractor } from "hb-ng2-sdk";
import Segmentation from "./Entity/Segmentation";
import { Ng2FormFactory as Factory } from "../../src/class/Ng2FormFactory";

@Component({
    selector: 'hb-form-demo',
    templateUrl: './boot.tpl.html'
})
class DemoBootComponent implements OnInit {
    public form;
    public template;

    ngOnInit() {
        let expected = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            Extractor.generateMapping(
                new Segmentation()
            )
        );

        this.form = new FormGroup(expected.ngFormControl);
        this.template = expected.templateConfig;

        console.log(this);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HbFormModule,

        // RouterModule.forRoot([{
        //     path: 'demo/basic',
        //     component: MainComponent
        // }, {
        //     path: 'system/:system/:region/new',
        //     component: NewComponent
        // }, {
        //     path: '',
        //     component: EditComponent
        // }, {
        //     path: '',
        //     component: DemoBootComponent
        // }, {
        //     path: '**',
        //     redirectTo: ''
        // }]),
    ],
    declarations: [DemoBootComponent],
    bootstrap: [DemoBootComponent]
})
class HbFormDemoModule {
}

platformBrowserDynamic().bootstrapModule(HbFormDemoModule);