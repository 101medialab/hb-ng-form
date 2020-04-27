import { Component } from "@angular/core";
import { HbFormObjectComponent } from "./hb-form-object.component";

@Component({
    selector: 'hb-mat-form-object',
    templateUrl:  './hb-form-mat-object.tpl.html',
    inputs: ['id', 'key', 'data', 'parent']
})
export class HbFormMatObjectComponent extends HbFormObjectComponent {
}
