import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Ng2FormFactory as Factory, ObjectAttributeTypeExtractor as Extractor } from "hb-ng-form";

export class BaseFormDemoComponent<TResource> implements OnInit {
    form: FormGroup;
    template: any;

    constructor(
        public resourcePrototype: { new (): TResource; },
        public data: TResource
    ) {
    }

    ngOnInit() {
        const { ngFormControl, templateConfig } = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            Extractor.generateMapping(
                new this.resourcePrototype()
            )
        );

        this.form = new FormGroup(ngFormControl);
        this.template = templateConfig;

        this.template.control = this.form;

        if (this.data) {
            this.template.children.setValue(this.data);
        }
    }

    onSubmit(value) {
        console.log(value);
    }
}
