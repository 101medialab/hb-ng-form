import {Component} from "@angular/core";
import { HbFormObject } from "./HbFormObject";

@Component({
    selector: 'hb-mat-form-object',
    template: `
        <mat-card *ngIf="
            data.control != undefined && 
            key != 'setValue' && (
                data.hide == undefined ||
                !data.hide
            )" 
                  [formGroup]="data.control"
                  [ngClass]="{ 
                      'error': !data.control.valid,
                      'hb-form-with-hints' : data.hints
                  }"
                  class="form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}">
            <mat-card-header *ngIf="typeof(data.label) == 'string' && data.label != '' && !data.hideHeader">
                <mat-card-title>
                    {{ data.label }}
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="hb-form-object-content">
                <div *ngFor="let each of data.children | mapToIterable" class="hb-form-obj-attr_{{ each.key }}">
                    <ng-container *ngIf="!each.hide && each.key != 'setValue'">
                        <hb-mat-form-widget
                            *ngIf="each.val.groupType == undefined && each.key != 'setValue'"
                            [data]="each.val"
                            [key]="each.key"
                            [parent]="data">
                        </hb-mat-form-widget>
                        <hb-mat-form-array
                            *ngIf="each.val?.groupType == 'array'"
                            [data]="each.val"
                            [key]="each.key"
                            [formArrayName]="each.key"
                            [parent]="data">
                        </hb-mat-form-array>
                        <hb-mat-form-object
                            *ngIf="each.val?.groupType == 'object' && each.key != 'setValue'"
                            [data]="each.val"
                            [key]="each.key"
                            [parent]="data">
                        </hb-mat-form-object>
                    </ng-container>
                </div>
                <strong class="mat-hint" *ngIf="data?.hints">
                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                </strong>
            </mat-card-content>
        </mat-card>
    `,
    inputs: ['id', 'key', 'data', 'parent']
})
export class HbMatFormObject extends HbFormObject {}