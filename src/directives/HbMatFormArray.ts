import { Component } from "@angular/core";
import { HbFormArray } from "./HbFormArray";

@Component({
    selector: 'hb-mat-form-array',
    template: `
        <mat-card class="hb-form-array hb-array-type_{{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}"
                  [attr.id]="data.id"
                  *ngIf="data.control != undefined && key != 'setValue'"
                  [formGroup]="data.control"
                  [ngClass]="{
                      'hb-form-with-hints' : data.hints
                  }">
            <mat-card-header>
                <mat-card-title *ngIf="!data.hideHeader">
                    <h2 *ngIf="data.label != ''">{{ data.label }}</h2>

                    <ng-container *ngIf="data.childrenConfigName.length > 0">
                        <ng-container *ngIf="!data.expandOptions; else expandedArrayPushOptions">
                            <mat-form-field>
                                <mat-select class="hb-form-array-config-switch"
                                            [(ngModel)]="data.useConfig"
                                            [ngModelOptions]="{standalone: true}">
                                    <mat-option *ngFor="let configName of data.childrenConfigName; let i = index"
                                                [value]="i">
                                        {{ configName }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>

                            <button mat-raised-button
                                    type="button"
                                    class="btn btn-default hb-form-add-btn"
                                    *ngIf="data.arrayType != 'enum'"
                                    (click)="data.add()">
                                Add
                            </button>
                        </ng-container>

                        <ng-template #expandedArrayPushOptions>
                            <button mat-raised-button
                                    type="button"
                                    *ngFor="let configName of data.childrenConfigName; let i = index"
                                    (click)="data.useConfig = i; data.add();">
                                &#x253C; {{ configName }}
                            </button>
                        </ng-template>
                    </ng-container>
                </mat-card-title>
            </mat-card-header>

            <mat-card-content>
                <div [attr.id]="data.id + '-' + i"
                     class="hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}"
                     *ngFor="let cell of 
                        data.arrayType != 'enum' ? 
                            data.children : resolvedOptions | async
                    ; let i=index">
                    <hb-mat-form-widget *ngIf="data.arrayType == 'enum'"
                                        [data]="cell"
                                        [key]="i"
                                        [parent]="data"></hb-mat-form-widget>

                    <ng-container *ngIf="data.arrayType != 'enum'">
                        <div *ngFor="let each of cell.children | mapToIterable;"
                             class="hb-form-array-cell-attr_{{ each.key }}">
                            <ng-container *ngIf="!each.hide && each.key != 'setValue'">
                                <hb-mat-form-widget *ngIf="each.val.groupType == undefined"
                                                    [data]="each.val"
                                                    [key]="i"
                                                    [parent]="data"></hb-mat-form-widget>
                                <hb-mat-form-array *ngIf="each.val?.groupType == 'array'"
                                                   [data]="each.val"
                                                   [key]="each.key"
                                                   [parent]="data"></hb-mat-form-array>
                                <hb-mat-form-object *ngIf="each.val?.groupType == 'object'"
                                                    [data]="each.val"
                                                    [key]="each.key"
                                                    [parent]="data"></hb-mat-form-object>
                            </ng-container>
                        </div>
                    </ng-container>

                    <button mat-mini-fab
                            color="primary"
                            class="hb-form-remove-btn"
                            type="button"
                            *ngIf="data.arrayType != 'enum'"
                            (click)="data.remove(i)">
                        &#x2715;
                    </button>
                </div>

                <div class="hints"
                     *ngIf="data?.hints">
                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                </div>
            </mat-card-content>
        </mat-card>
    `,
    inputs: ['key', 'data', 'parent']
})
export class HbMatFormArray extends HbFormArray {
}
