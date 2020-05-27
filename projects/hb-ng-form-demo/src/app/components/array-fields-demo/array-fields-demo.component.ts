import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {
}

@Component({
    selector: 'app-array-fields-demo',
    templateUrl: './array-fields-demo.component.html',
    styleUrls: ['./array-fields-demo.component.scss']
})
export class ArrayFieldsDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});
    }
}
