import { IBaseFormConfig } from "./FormConfig";
export interface IFlexibleObjectArrayFormConfig extends IBaseFormConfig {
    objectDefinitions: Array<{
        label: string;
        structure: any;
    }>;
    expandOptions?: boolean;
    resolveFlexibleObjectArrayConfig: (template: any, rawValue: any) => void;
}
export declare const FlexibleObjectArraySymbol: unique symbol;
export declare function FlexibleObjectArray(options: IFlexibleObjectArrayFormConfig): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
