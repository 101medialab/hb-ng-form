import { IBaseFormConfig } from './FormConfig';
export interface IObjectOptionsFormConfig extends IBaseFormConfig {
    onCreate: (childrenTemplate: any, diContainer: Map<string, any>) => void;
}
export declare const ObjectOptionsSymbol: unique symbol;
export declare function ObjectOptions(options: IObjectOptionsFormConfig): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
