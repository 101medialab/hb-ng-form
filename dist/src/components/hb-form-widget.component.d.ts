import { OnInit, ComponentFactoryResolver } from "@angular/core";
export declare class HbFormWidgetComponent implements OnInit {
    private resolver;
    resolvedOptions: any;
    key: any;
    data: any;
    parent: any;
    static slugMap: any[];
    customBlock: any;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    stringToBoolean(val: any): boolean;
    updateParentValue($event: any, option: any): void;
    typeof(input: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    slugifyString(input: string): any;
}
