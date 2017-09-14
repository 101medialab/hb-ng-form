import {Component} from "@angular/core";
import { HbFormObject } from "./HbFormObject";

@Component({
    selector: 'hb-md-form-object',
    template: `
        <md-card *ngIf="data.control != undefined && key != 'setValue'" [formGroup]="data.control" [ngClass]="key" class="form-object">
            <md-card-header>
                <md-card-title>
                    {{ data.label }}
                </md-card-title>
            </md-card-header>
            <md-card-content class="form-object-content">
                <div *ngFor="let each of data.children | mapToIterable" class="{{ each.key }}">
                    <hb-md-form-widget
                        class="expand-to-child"
                        *ngIf="each.val.groupType == undefined && each.key != 'setValue'"
                        [data]="each.val"
                        [key]="each.key"
                        [parent]="data">
                    </hb-md-form-widget>
                    <hb-md-form-array
                        class="expand-to-child"
                        *ngIf="each.val?.groupType == 'array'"
                        [data]="each.val"
                        [key]="each.key"
                        [formArrayName]="each.key"
                        [parent]="data">
                    </hb-md-form-array>
                    <hb-md-form-object
                        class="expand-to-child"
                        *ngIf="each.val?.groupType == 'object' && each.key != 'setValue'"
                        [data]="each.val"
                        [key]="each.key"
                        [parent]="data">
                    </hb-md-form-object>
                </div>
                <span class="hints" *ngIf="data?.hints">
                    {{ data.hints }}
                </span>
            </md-card-content>
        </md-card>
    `,
    inputs: ['id', 'key', 'data', 'parent']
})
export class HbMdFormObject extends HbFormObject {}