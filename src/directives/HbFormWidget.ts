import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'hb-form-widget',
    template: `
        <div *ngIf="
                data.control != undefined && 
                data.groupType == undefined && 
                key != 'setValue' && (
                    data.hide == undefined ||  
                    !data.hide
                )
            "
            [ngClass]="{ 'error': !data.control.valid }" class="expand-to-child hb-form-widget">
            <ng-template #customBlock></ng-template>

            <div *ngIf="!data.useComponent && data.expandOptions == undefined">
                <label for="{{ key ? key : data.label.slugify() }}-input">{{ data.renderType !== 'checkbox' || data.label !== undefined ? data.label : data.option.name }}</label>
        
                <div class="input-control-container">
                    
              
                    <input id="{{ key ? key : data.label.slugify() }}-input"
                           *ngIf="!data.renderType || ['select', 'textarea'].indexOf(data.renderType) === -1"
                           [type]="data.renderType ? data.renderType : 'text'"
                           [attr.checked]="
                               parent?.arrayType === 'enum' && parent.control.value.indexOf(data.options[0].value) > -1 ? true : null
                           "
                           (change)="
                               parent?.arrayType === 'enum' ?
                                   updateParentValue($event, data.option) :
                                   data.control.patchValue(
                                       data.renderType === 'checkbox' ? $event.target.checked : $event.target.value
                                   );
                           "
                           placeholder="{{ data.label }}" [formControl]="data.control"/>
        
                    <textarea *ngIf="data.renderType === 'textarea'" [formControl]="data.control"
                              id="{{ key ? key : data.label.slugify() }}-input" rows="5"></textarea>
        
                    <span class="hints" *ngIf="data?.hints">
                        {{ data.hints }}
                    </span>
                </div>
            </div>
        
            <div *ngIf="!data.useComponent && data.renderType && data.expandOptions != undefined" class="options-group">
                <div *ngIf="data.renderType != 'select'">
                    <div *ngFor="let option of data.options">
                        <label for="{{ key ? key : data.label.slugify() }}-input">{{ option.name }}</label>
                        <input [type]="data.renderType" [value]="option.value"
                               [attr.checked]="data.control.value === option.value || option.id === data.control.value ? true : null"
                               [attr.name]="data.renderType == 'radio' ? (key ? key : data.label.slugify()) + '-input' : null"
                               (change)="updateParentValue($event, option)"
                               [formControl]="data.control"
                        />
                    </div>
                </div>
        
                <select *ngIf="data.renderType == 'select'" id=""
                        [attr.multiple]="data.expandOptions ? true : null"
                        [formControl]="data.control">
                    <option *ngFor="let option of data.options" [value]="option.value">
                        {{ option.name ? option.name : option.value }}
                    </option>
                </select>
            </div>
        </div>
    `,
    inputs: ['data', 'key', 'parent']
})
export class HbFormWidget implements OnInit {
    public resolvedOptions;
    public key;
    public data;
    public parent;

    @ViewChild("customBlock", { read: ViewContainerRef }) customBlock;

    constructor(
        private resolver: ComponentFactoryResolver
    ) {
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

    ngOnInit() {
        let data = this.data;

        let result = null;
        let resolved = null;
        const options = data.options;

        if (typeof options === 'function') {
            resolved = options(data.diContainer, this.data, this.parent);
        } else if (!(result instanceof Observable)) {
            resolved = options;
        }

        result = resolved;

        if (!(resolved instanceof Observable)) {
            result = Observable.create((o)=> {
                o.next(resolved);
            });
        }

        this.resolvedOptions = result;
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
}
