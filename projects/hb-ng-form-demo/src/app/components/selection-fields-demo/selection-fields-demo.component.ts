import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {

}

@Component({
    selector: 'app-selection-fields-demo',
    templateUrl: './selection-fields-demo.component.html',
    styleUrls: ['./selection-fields-demo.component.scss']
})
export class SelectionFieldsDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});
    }
}
