import { Component } from "@angular/core";
import { HbFormWidgetComponent } from './hb-form-widget.component';

@Component({
    selector: 'hb-form-object',
    templateUrl:  './hb-form-object.tpl.html',
    inputs: ['id', 'key', 'data', 'parent', 'theme']
})
export class HbFormObjectComponent extends HbFormWidgetComponent {
}
