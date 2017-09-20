import {Component} from "@angular/core";
import { HbFormObject } from "./HbFormObject";

@Component({
    selector: 'hb-md-form-object',
    template: `
        <md-card *ngIf="data.control != undefined && key != 'setValue'" [formGroup]="data.control" [ngClass]="'hb-form-obj_' + key" class="form-object">
            <md-card-header *ngIf="data.label != ''">
                <md-card-title *ngIf="!data.hideHeader">
                    {{ data.label }}
                </md-card-title>
            </md-card-header>
            <md-card-content class="hb-form-object-content">
                <div *ngFor="let each of data.children | mapToIterable" class="hb-form-obj-attr_{{ each.key }}">
                    <ng-container *ngIf="!each.hide && each.key != 'setValue'">
                        <hb-md-form-widget
                            *ngIf="each.val.groupType == undefined && each.key != 'setValue'"
                            [data]="each.val"
                            [key]="each.key"
                            [parent]="data">
                        </hb-md-form-widget>
                        <hb-md-form-array
                            *ngIf="each.val?.groupType == 'array'"
                            [data]="each.val"
                            [key]="each.key"
                            [formArrayName]="each.key"
                            [parent]="data">
                        </hb-md-form-array>
                        <hb-md-form-object
                            *ngIf="each.val?.groupType == 'object' && each.key != 'setValue'"
                            [data]="each.val"
                            [key]="each.key"
                            [parent]="data">
                        </hb-md-form-object>
                    </ng-container>
                </div>
                <span class="hints" *ngIf="data?.hints">
                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                </span>
            </md-card-content>
        </md-card>
    `,
    inputs: ['id', 'key', 'data', 'parent']
})
export class HbMdFormObject extends HbFormObject {}