import 'hammerjs';
import 'jquery';
import 'reflect-metadata';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { Component, NgModule, OnInit } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Segmentation from "./Entity/Segmentation";
import {
    ObjectAttributeTypeExtractor as Extractor,
    HbFormModule,
    Ng2FormFactory as Factory
} from '../../src/index';
import { MySelectizeComponent } from "./MySelectizeComponent";
import { HbSelectizeDirective } from "./SelectizeDirective";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'hb-form-demo',
    templateUrl: './boot.tpl.html'
})
class DemoBootComponent implements OnInit {
    public form;
    public template;

    constructor(
    ) {
        Factory.diContainer.set('domainStatus', {
            getCurrentRegion: () => {
                return {
                    channels: [{
                        "channelName": "General",
                        "defaultOptIn": true,
                        "id": "329548d3-542b-4b90-a7b3-c21969473bae",
                        "metaData": "General",
                        "needDeviceMatching": true,
                        "regionName": "en",
                        "relativeOrder": 0,
                        "systemName": "hypebeast"
                    }, {
                        "channelName": "Testing",
                        "defaultOptIn": false,
                        "id": "749f4573-cefa-49a4-8b72-dd898b38aebc",
                        "metaData": "Testing",
                        "needDeviceMatching": false,
                        "regionName": "en",
                        "relativeOrder": 0,
                        "systemName": "hypebeast"
                    }]
                }
            },
            getCurrentEnvironment: () => ({
                systemName: 'hypebeast'
            })
        });
    }

    ngOnInit() {
        let expected = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            Extractor.generateMapping(
                new Segmentation()
                // new Notification()
            )
        );

        this.form = new FormGroup(expected.ngFormControl);
        this.template = expected.templateConfig;

        this.template.control = this.form;

        console.log(this);
    }

    onSubmit(value) {
        console.log(value);
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
    entryComponents: [
        MySelectizeComponent
    ],
    declarations: [
        DemoBootComponent,
        MySelectizeComponent,
        HbSelectizeDirective
    ],
    bootstrap: [DemoBootComponent],
    exports: [
        HbSelectizeDirective
    ]
})
class HbFormDemoModule {
}

platformBrowserDynamic().bootstrapModule(HbFormDemoModule)
    .catch(err => console.error(err));
