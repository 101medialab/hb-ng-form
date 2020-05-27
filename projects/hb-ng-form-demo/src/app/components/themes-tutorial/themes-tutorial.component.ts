import { Component } from '@angular/core';
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {

}

@Component({
    selector: 'app-themes-tutorial',
    templateUrl: './themes-tutorial.component.html',
    styleUrls: ['./themes-tutorial.component.scss']
})
export class ThemesTutorialComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});
    }
}
