import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";
import { ChoiceOptions, FormConfig, SetupConfig } from "hb-ng-form";

class MyForm {
    @SetupConfig()
    @FormConfig({
        hints: '112'
    })
    stringField?: string = '';
    textAreaField?: string = '';
    numberField?: number = 0;
    booleanField?: boolean = false;

    @SetupConfig()
    @ChoiceOptions({
        renderType: 'radio',
        options: [
            {
                name: '1',
                value: 1
            },
            {
                name: '2',
                value: 2
            }
        ]
    })
    radioButtonField?: number = 2;
    dateField?: Date = new Date();
}

@Component({
    selector: 'app-primitive-fields-demo',
    templateUrl: './primitive-fields-demo.component.html',
    styleUrls: ['./primitive-fields-demo.component.scss']
})
export class PrimitiveFieldsDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(
            MyForm, {
                numberField: 120,
                radioButtonField: 2
            }
        );
    }
}
