import { IBaseFormConfig } from "./FormConfig";
export interface IFlexibleObjectArrayFormConfig extends IBaseFormConfig {
    objectDefinitions: Array<{
        label: string;
        structure: any;
    }>;
    expandOptions?: boolean;
    beforeSetValue: (template: any, rawValue) => void;
}
export declare const FlexibleObjectArraySymbol: symbol;
export declare function FlexibleObjectArray(options: IFlexibleObjectArrayFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
