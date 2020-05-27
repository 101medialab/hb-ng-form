import { OnInit, ComponentFactoryResolver } from "@angular/core";
import { IMultipleChoicesOptionsFormConfig } from "../class/decorators/MultipleChoicesOptions";
import { IBaseFormConfig } from "../class/decorators/FormConfig";
import { IArrayOptionsFormConfig } from "../class/decorators/ArrayOptions";
import { IObjectOptionsFormConfig } from "../class/decorators/ObjectOptions";
import { IChoiceOptionsFormConfig } from "../class/decorators/ChoiceOptions";
export declare class HbFormWidgetComponent implements OnInit {
    private resolver;
    resolvedOptions: any;
    key: any;
    data: any & IBaseFormConfig & IMultipleChoicesOptionsFormConfig & IArrayOptionsFormConfig & IObjectOptionsFormConfig & IChoiceOptionsFormConfig;
    parent: any;
    static slugMap: any[];
    customBlock: any;
    constructor(resolver: ComponentFactoryResolver);
    log(...args: any[]): void;
    ngAfterViewInit(): void;
    isOptionSelectingComponent(): boolean;
    ngOnInit(): void;
    stringToBoolean(val: any): boolean;
    updateParentValue($event: any, option: any): void;
    typeof(input: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    slugifyString(input: string): any;
}
