import { OnInit, ComponentFactoryResolver } from "@angular/core";
import { IMultipleChoicesOptionsFormConfig } from "../class/decorators/MultipleChoicesOptions";
import { IBaseFormConfig } from "../class/decorators/FormConfig";
import { IArrayOptionsFormConfig } from "../class/decorators/ArrayOptions";
import { IObjectOptionsFormConfig } from "../class/decorators/ObjectOptions";
import { IChoiceOptionsFormConfig } from "../class/decorators/ChoiceOptions";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<HbFormWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HbFormWidgetComponent, "hb-form-widget", never, { "data": "data"; "key": "key"; "parent": "parent"; }, {}, never, never>;
}
