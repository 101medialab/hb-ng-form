import { HbFormWidgetComponent } from "./hb-form-widget.component";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hb-mat-form-widget',
    templateUrl: './hb-form-mat-widget.tpl.html',
    inputs: ['data', 'key', 'parent']
})
export class HbFormMatWidgetComponent extends HbFormWidgetComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();

        if (
            this.parent.arrayType == 'enum' &&
            this.parent.control.value.indexOf(this.data.options[0].value) > -1
        ) {
            this.data.control.setValue(
                this.data.options[0].value
            )
        }
    }
}
