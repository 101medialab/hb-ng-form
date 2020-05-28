import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';

@Component({
    selector: 'hb-form-array',
    templateUrl: './hb-form-array.tpl.html',
    inputs: ['key', 'data', 'parent', 'theme']
})
export class HbFormArrayComponent extends HbFormWidgetComponent {
}
