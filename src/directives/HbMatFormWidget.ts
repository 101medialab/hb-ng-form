import { HbFormWidget } from "./HbFormWidget";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hb-mat-form-widget',
    template: `
        <div *ngIf="
                data.control != undefined && 
                (
                    data.groupType == undefined || 
                    parent.arrayType == 'enum'
                ) && 
                key != 'setValue' && 
                (
                    data.hide == undefined ||  
                    !data.hide
                )
            "
             [ngClass]="{ 
                'error': !data.control.valid,
                'hb-form-with-hints' : data.hints
            }"
             class="expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}">
            <ng-template #customBlock></ng-template>

            <ng-container *ngIf="(
                !data.useComponent && 
                data.expandOptions == undefined
            ) || (
                parent?.arrayType === 'enum'
            )">
                <ng-container *ngIf="['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1">
                    <mat-form-field *ngIf="
                        (
                            parent?.arrayType === 'enum' || 
                            data.selectOptionsObservables == undefined
                        ); else autocompleteBlock
                    " class="hb-form-widget-input-field">
                        <div class="form-field-prefix"
                             matPrefix
                             *ngIf="data?.matExtra?.matPrefix"
                             [innerHtml]="data.matExtra.matPrefix"></div>

                        <!-- TODO: parent?.arrayType === 'enum' won't enter this condition -->

                        <input matInput
                               [attr.id]="(key ? key : data.label.slugify()) + '-input'"
                               [type]="data.renderType ? data.renderType : 'text'"
                               [attr.checked]="
                                   parent?.arrayType === 'enum' && 
                                   parent.control.value.indexOf(data.options[0].value) > -1 ?
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

                        <mat-hint align="start" *ngIf="data?.hints">
                            <strong>
                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                            </strong>
                        </mat-hint>
                        
                        <div class="form-field-suffix"
                             matSuffix
                             *ngIf="data?.matExtra?.matSuffix"
                             [innerHtml]="data.matExtra.matSuffix"></div>
                    </mat-form-field>

                    <ng-template #autocompleteBlock [ngIf]="data.autocomplete != undefined">
                        <mat-form-field *ngIf="data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock">
                            <input matInput
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
                                   [matAutocomplete]="auto" />

                            <mat-autocomplete #auto="matAutocomplete">
                                <mat-option *ngFor="let option of data.selectOptionsObservables | async" [value]="option.value">
                                    <span>{{ option.label }}</span>
                                </mat-option>
                            </mat-autocomplete>

                            <mat-hint align="start" *ngIf="data?.hints">
                                <strong>
                                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                                </strong>
                            </mat-hint>
                        </mat-form-field>
                    </ng-template>
                </ng-container>

                <mat-form-field *ngIf="data.renderType === 'textarea'">
                    <textarea matInput rows="5" [formControl]="data.control" placeholder="
                                  {{ data.label ? data.label : data.option.name }}
                              " [attr.id]="key ? key : data.label.slugify() + '-input'">
                    </textarea>

                    <mat-hint align="start" *ngIf="data?.hints">
                        <strong>
                            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                        </strong>
                    </mat-hint>
                </mat-form-field>    
            </ng-container>

            <ng-container *ngIf="!data.useComponent && ['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1">
                <div *ngIf="['radio', 'checkbox'].indexOf(data.renderType) > -1; else select">
                    <mat-radio-group
                        *ngIf="data.renderType == 'radio'; else checkbox"
                        [formControl]="data.control">
                        <mat-radio-button
                            class="example-radio-button"
                            *ngFor="let option of data.options"
                            [value]="option.value"
                            [attr.checked]="data.control.value === option.value || option.id === data.control.value ? true : null"
                            [attr.name]="data.renderType == 'radio' ? (key ? key : data.label.slugify()) + '-input' : null"
                            (change)="updateParentValue($event, option)"
                        >
                            {{ option.name }}
                        </mat-radio-button>
                    </mat-radio-group>

                    <ng-template #checkbox>
                        <!-- TODO: Enum array here -->
                        <mat-checkbox
                            *ngFor="let option of data.options"
                            [value]="option.value"
                            [attr.checked]="data.control.value === option.value || option.id === data.control.value ? true : null"
                            (change)="updateParentValue($event, option)"
                            [formControl]="data.control"
                        >
                            {{ option.name }}
                        </mat-checkbox>
                    </ng-template>
                </div>
                
                <ng-template #select>
                    <mat-form-field>
                        <mat-select
                            *ngIf="data.renderType == 'select'"
                            [formControl]="data.control"
                            [placeholder]="data.label != '' ? data.label : null"
                        >
                            <mat-option *ngFor="let option of resolvedOptions | async" [value]="option.value">
                                {{ option.name ? option.name : option.value }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-template>
            </ng-container>
        </div>
    `,
    inputs: ['data', 'key', 'parent']
})
export class HbMatFormWidget extends HbFormWidget implements OnInit {
    ngOnInit() {
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