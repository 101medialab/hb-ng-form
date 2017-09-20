import { Component } from "@angular/core";
import { HbFormArray } from "./HbFormArray";

@Component({
    selector: 'hb-md-form-array',
    template: `        
        <md-card
            class="hb-form-array hb-array-type_{{ data.arrayType }} {{ 'hb-form-array_' + key }} {{ data?.html?.classAttr }}"
            [attr.id]="data.id"
            *ngIf="data.control != undefined && key != 'setValue'" 
            [formGroup]="data.control" [ngClass]="key"
        >
            <md-card-header>
                <md-card-title *ngIf="!data.hideHeader">
                    <h2 *ngIf="data.label != ''">{{ data.label }}</h2>
                    
                    <ng-container *ngIf="data.childrenConfigName.length > 0">
                        <ng-container *ngIf="!data.expandOptions; else expandedArrayPushOptions" >
                            <md-select class="hb-form-array-config-switch"
                                       [(ngModel)]="data.useConfig" [ngModelOptions]="{standalone: true}">
                                <md-option *ngFor="let configName of data.childrenConfigName; let i = index" [value]="i">
                                    {{ configName }}
                                </md-option>
                            </md-select>

                            <button type="button" class="btn btn-default hb-form-add-btn" *ngIf="data.arrayType != 'enum'" type="button" (click)="data.add()">Add</button>
                        </ng-container>
                        
                        <ng-template #expandedArrayPushOptions>
                            <button
                                md-button 
                                type="button"
                                *ngFor="let configName of data.childrenConfigName; let i = index"
                                (click)="data.useConfig = i; data.add();"
                            >
                                &#x253C; {{ configName }}
                            </button>
                        </ng-template>
                    </ng-container>
                </md-card-title>
            </md-card-header>

            <md-card-content>
                <div [attr.id]="data.id + '-' + i" class="hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}"
                    *ngFor="let cell of 
                        data.arrayType != 'enum' ? 
                            data.children : resolvedOptions | async
                    ; let i=index">
                    <hb-md-form-widget *ngIf="data.arrayType == 'enum'"
                                       [data]="cell" [key]="i" [parent]="data"></hb-md-form-widget>
    
                    <ng-container *ngIf="data.arrayType != 'enum'">
                        <div *ngFor="let each of cell.children | mapToIterable;" class="hb-form-array-cell-attr_{{ each.key }}">
                            <ng-container *ngIf="!each.hide && each.key != 'setValue'">
                                <hb-md-form-widget
                                    *ngIf="each.val.groupType == undefined"
                                    [data]="each.val" 
                                    [key]="i"
                                    [parent]="data"
                                ></hb-md-form-widget>
                                <hb-md-form-array
                                    *ngIf="each.val?.groupType == 'array'"
                                    [data]="each.val" 
                                    [key]="each.key"
                                    [parent]="data"
                                ></hb-md-form-array>
                                <hb-md-form-object
                                    *ngIf="each.val?.groupType == 'object'"
                                    [data]="each.val" 
                                    [key]="each.key"
                                    [parent]="data"
                                ></hb-md-form-object>
                            </ng-container>
                        </div>
                    </ng-container>
                    
                    <button md-mini-fab color="primary" class="hb-form-remove-btn"
                            type="button"
                            *ngIf="data.arrayType != 'enum'"
                            (click)="data.remove(i)">
                        &#x2715;
                    </button>
                </div>
                
                <div class="hints" *ngIf="data?.hints">
                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}
                </div>
            </md-card-content>
        </md-card>
    `,
    inputs: ['key', 'data', 'parent']
})
export class HbMdFormArray extends HbFormArray {
}
