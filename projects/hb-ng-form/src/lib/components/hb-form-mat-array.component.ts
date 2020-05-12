import { Component } from "@angular/core";
import { HbFormArrayComponent } from "./hb-form-array.component";

@Component({
    selector: 'hb-mat-form-array',
    templateUrl: './hb-form-mat-array.tpl.html',
    inputs: ['key', 'data', 'parent']
})
export class HbFormMatArrayComponent extends HbFormArrayComponent {
}
