import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {

}

@Component({
    selector: 'app-object-fields-demo',
    templateUrl: './object-fields-demo.component.html',
    styleUrls: ['./object-fields-demo.component.scss']
})
export class ObjectFieldsDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});
    }
}
