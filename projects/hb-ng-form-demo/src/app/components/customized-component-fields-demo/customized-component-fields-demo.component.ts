import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {

}

@Component({
    selector: 'app-customized-component-fields-demo',
    templateUrl: './customized-component-fields-demo.component.html',
    styleUrls: ['./customized-component-fields-demo.component.scss']
})
export class CustomizedComponentFieldsDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});
    }
}
