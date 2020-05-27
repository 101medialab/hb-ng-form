import { Component, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Observer } from "rxjs";
import { ICustomComponent } from "hb-ng-form";
import { map } from "rxjs/operators";

@Component({
    selector: 'mySelectize',
    template:  `<select *ngIf="isInitialized" [hbSelectize]="$selectize"></select>`
})
export class MySelectizeComponent implements ICustomComponent {
    /** Remember to mark templateObject as public attribute */
    @Input()
    public templateObject: any = null;
    public parentTemplateObject: any = null;
    $selectize = null;

    public isInitialized:boolean = false;

    ngAfterViewInit() {
        setTimeout(() => {
            this.$selectize = new Observable((o: Observer<any>) => {
                this.templateObject.selectOptionsObservables
                    .pipe(
                        map((optionsArray: any[]) =>{
                            optionsArray.forEach((each) => {
                                each.text = each.label;

                                delete each.label;
                            });

                            return optionsArray;
                        })
                    )
                    .subscribe((optionsResolved) => {
                        o.next({
                            sortField: 'name',
                            maxOptions: 1000,
                            onChange: (value) => {
                                this.templateObject.control.setValue(value);
                            },
                            placeholder: this.templateObject.label ? this.templateObject.label : '',
                            options: optionsResolved,
                            defaultValue: this.templateObject.control.value || ''
                        });
                    });
            });

            this.isInitialized = true;
        }, 100);
    }
}
