import { Component } from "@angular/core";
import { HbFormWidget } from "./HbFormWidget";

@Component({
    selector: 'hb-md-form-widget',
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
                <div class="input-control-container">
                    <ng-container *ngIf="['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1">
                        <md-form-field *ngIf="
                            data.selectOptionsObservables == undefined; else autocompleteBlock
                        ">
                            <input mdInput
                                   [attr.id]="key ? key : data.label.slugify() + '-input'"
                                   [type]="data.renderType ? data.renderType : 'text'"
                                   [attr.checked]="
                                       parent?.arrayType === 'enum' && 
                                       parent.control.value.indexOf(data.option.value) > -1 ? 
                                           true : null
                                   "
                                   (change)="
                                       parent?.arrayType === 'enum' ?
                                           updateParentValue($event, data.option) :
                                           data.control.patchValue(
                                               data.renderType === 'checkbox' ? $event.target.checked : $event.target.value
                                           );
                                   "
                                   placeholder="
                                       {{ data.renderType !== 'checkbox' || data.label !== undefined ? data.label : data.option.name }}
                                   "
                                   [formControl]="data.control" />

                            <md-hint align="start" *ngIf="data?.hints">
                                <strong>
                                    {{ data.hints }}
                                </strong>
                            </md-hint>
                        </md-form-field>

                        <ng-template #autocompleteBlock [ngIf]="data.autocomplete != undefined">
                            <md-form-field *ngIf="data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock">
                                <input mdInput
                                       [attr.id]="key ? key : data.label.slugify() + '-input'"
                                       [type]="data.renderType ? data.renderType : 'text'"
                                       (change)="
                                           data.control.patchValue(
                                               $event.target.value
                                           );
                                       "
                                       placeholder="
                                           {{ data.label !== undefined ? data.label : data.option.name }}
                                       "
                                       [formControl]="data.control"
                                       [mdAutocomplete]="auto" />

                                <md-autocomplete #auto="mdAutocomplete">
                                    <md-option *ngFor="let option of data.selectOptionsObservables | async" [value]="option.value">
                                        <span>{{ option.label }}</span>
                                    </md-option>
                                </md-autocomplete>

                                <md-hint align="start" *ngIf="data?.hints">
                                    <strong>
                                        {{ data.hints }}
                                    </strong>
                                </md-hint>
                            </md-form-field>
                        </ng-template>
                    </ng-container>

                    <md-form-field *ngIf="data.renderType === 'textarea'">
                        <textarea mdInput rows="5" [formControl]="data.control"
                                  placeholder="
                                      {{ data.label ? data.label : data.option.name }}
                                  "
                                  [attr.id]="key ? key : data.label.slugify() + '-input'">
                        </textarea>

                        <md-hint align="start"
                                 *ngIf="data?.hints">
                            <strong>
                                {{ data.hints }}
                            </strong>
                        </md-hint>
                    </md-form-field>
                </div>
            </div>
        
            <div *ngIf="!data.useComponent && data.renderType && data.expandOptions != undefined" class="options-group">
                <div *ngIf="['radio', 'checkbox'].indexOf(data.renderType) > -1; else select">
                    <md-radio-group
                        *ngIf="data.renderType == 'radio'; else checkbox"
                        [formControl]="data.control">
                        <md-radio-button
                            class="example-radio-button"
                            *ngFor="let option of data.options"
                            [value]="option.value"
                            [attr.checked]="data.control.value === option.value || option.id === data.control.value ? true : null"
                            [attr.name]="data.renderType == 'radio' ? (key ? key : data.label.slugify()) + '-input' : null"
                            (change)="updateParentValue($event, option)"
                        >
                            {{ option.name }}
                        </md-radio-button>
                    </md-radio-group>

                    <ng-template #checkbox>
                        <md-checkbox
                            class="example-radio-button"
                            *ngFor="let option of data.options"
                            [value]="option.value"
                            [attr.checked]="data.control.value === option.value || option.id === data.control.value ? true : null"
                            (change)="updateParentValue($event, option)"
                            [formControl]="data.control"
                        >
                            {{ option.name }}
                        </md-checkbox>
                    </ng-template>
                </div>
                
                <ng-template #select>
                    <md-select
                        *ngIf="data.renderType == 'select'"
                        [attr.multiple]="data.expandOptions ? true : null"
                        [formControl]="data.control"
                    >
                        <md-option *ngFor="let option of data.options" [value]="option.value">
                            {{ option.name ? option.name : option.value }}
                        </md-option>
                    </md-select>
                </ng-template>
            </div>
        </div>
    `,
    inputs: ['data', 'key', 'parent']
})
export class HbMdFormWidget extends HbFormWidget {
}