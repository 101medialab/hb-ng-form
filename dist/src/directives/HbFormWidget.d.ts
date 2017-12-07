import { OnInit, ComponentFactoryResolver } from "@angular/core";
import { BaseClass } from 'hb-ng-sdk';
export declare class HbFormWidget extends BaseClass implements OnInit {
    private resolver;
    resolvedOptions: any;
    key: any;
    data: any;
    parent: any;
    customBlock: any;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    stringToBoolean(val: any): boolean;
    updateParentValue($event: any, option: any): void;
}
