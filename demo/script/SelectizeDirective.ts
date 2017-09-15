import { Directive, Input, Output, EventEmitter, OnChanges, ElementRef } from '@angular/core';
import 'selectize';
import { Observable } from "rxjs/Observable";

export interface ISelectizeOption {
    text: string;
    value: string;
}

@Directive({
    selector: '[hbSelectize]',
})
export class HbSelectizeDirective implements OnChanges {
    protected $el;
    protected selectizeInstance = null;

    protected setupFinished = false;
    @Input('hbSelectize') protected hbxSelectize: string;
    @Input('updateValue$') protected updateValue$: Observable<any>;
    @Output('onChange') onChange = new EventEmitter();

    constructor(protected el: ElementRef) {
        this.$el = $(el.nativeElement);
    }

    ngOnChanges({ hbxSelectize }: { hbxSelectize: any }) {
        let options = hbxSelectize;

        if (options.currentValue && !this.setupFinished) {
            if (typeof options.currentValue.subscribe === 'function') {
                options.currentValue.subscribe((options) => {
                    this.setupSelectize(options);
                });
            } else {
                this.setupSelectize(options.currentValue);
            }
        }
    }

    setupSelectize(options) {
        if (this.setupFinished) {
            this.selectizeInstance.clearOptions();

            options.options.forEach((each) => {
                this.selectizeInstance.addOption(each);
            });
        } else {
            if (options.onChange) {
                var onChangeCB = options.onChange;

                options.onChange = (value) => {
                    onChangeCB(value, this.selectizeInstance);
                };
            }

            this.$el.selectize(options);

            this.selectizeInstance = this.$el[0].selectize;

            if (options.defaultValue) {
                this.selectizeInstance.setValue(options.defaultValue);
            }

            if (options.updateOn) {
                options.updateOn
                    .debounceTime(200)
                    .distinctUntilChanged()
                    .subscribe((value) => {
                        this.selectizeInstance.setValue(value);
                    });
            }

            this.setupFinished = true;
        }
    }
}