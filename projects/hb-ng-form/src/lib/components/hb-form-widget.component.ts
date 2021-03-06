import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef
} from "@angular/core";
import { Observable } from "rxjs";
import { IMultipleChoicesOptionsFormConfig } from "../class/decorators/MultipleChoicesOptions";
import { IBaseFormConfig } from "../class/decorators/FormConfig";
import { IArrayOptionsFormConfig } from "../class/decorators/ArrayOptions";
import { IObjectOptionsFormConfig } from "../class/decorators/ObjectOptions";
import { IChoiceOptionsFormConfig } from "../class/decorators/ChoiceOptions";

@Component({
    selector: 'hb-form-widget',
    templateUrl: './hb-form-widget.tpl.html',
    inputs: ['data', 'key', 'parent']
})
export class HbFormWidgetComponent implements OnInit {
    public resolvedOptions;
    public key;
    public data: any & IBaseFormConfig & IMultipleChoicesOptionsFormConfig & IArrayOptionsFormConfig & IObjectOptionsFormConfig & IChoiceOptionsFormConfig;
    public parent;
    static slugMap = [];

    @ViewChild("customBlock", { read: ViewContainerRef, static: true }) customBlock;

    constructor(
        private resolver: ComponentFactoryResolver
    ) {
    }

    log(...args) {
        console.log(...args);
    }

    ngAfterViewInit() {
        if (!this.data.hide && this.data.useComponent) {
            const factory = this.resolver.resolveComponentFactory(
                this.data.useComponent
            );
            const ref = this.customBlock.createComponent(factory);
            ref.instance.templateObject = this.data;
            ref.instance.parentTemplateObject = this.parent;

            ref.changeDetectorRef.detectChanges();
        }
    }

    isOptionSelectingComponent() {
        return ['radio', 'checkbox', 'select'].indexOf(this.data.renderType) > -1;
    }

    ngOnInit() {
        if (this.isOptionSelectingComponent()) {
            let data = this.data;

            let result = null;
            let resolved = null;

            let options: any = [];
            if (
                data.options && (
                    data.options.length ||
                    typeof data.options === 'function'
                )
            ) {
                options = data.options
            } else if (
                data.type === 'boolean' &&
                data.renderType === 'checkbox'
            ) {
                options = [{
                    name: data.label,
                    value: true,
                }];
            }

            if (options.length === 0) {
                throw new Error('No options set for ' + data.key + ' in ' + this.parent.key);
            }

            if (typeof options === 'function') {
                resolved = options(data.diContainer, this.data, this.parent);
            } else if (!(result instanceof Observable)) {
                resolved = options;
            }

            result = resolved;

            if (!(resolved instanceof Observable)) {
                result = new Observable((o) => {
                    o.next(resolved);
                    o.complete();
                });
            }

            this.resolvedOptions = result;
        }
    }

    stringToBoolean(val) {
        return val === 'true'
    }

    updateParentValue($event, option) {
        const target = $event.target ? $event.target : $event.source;
        let isChecked = target.checked;

        switch (this.data.renderType) {
            case 'checkbox':
                let parentControls = this.parent.control.controls;

                if (isChecked) {
                    this.parent.add();

                    parentControls[parentControls.length - 1].setValue(option.value);
                } else {
                    let i = 0;

                    for (; i < parentControls.length; i++) {
                        if (parentControls[i].value == option.value) break;
                    }

                    this.parent.remove(i);
                }

                break;

            case 'radio':
                if (isChecked) this.data.control.patchValue(target.value);

                break;
        }
    }

    typeof(input) {
        return typeof input;
    }

    slugifyString(input: string) {
        if (input in HbFormWidgetComponent.slugMap) {
            return HbFormWidgetComponent.slugMap[input];
        }

        if (input) {
            return HbFormWidgetComponent.slugMap[input] = input
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        } else {
            throw new Error('Cannot slugify input, input is undefined.')
        }
    }
}
