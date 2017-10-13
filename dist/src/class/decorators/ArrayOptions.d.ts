import { IBaseFormConfig } from './FormConfig';
export interface IArrayOptionsFormConfig extends IBaseFormConfig {
    onPush?: (childrenTemplate: any, diContainer: Map<string, any>) => void;
    arrayType?: 'object' | 'primitive' | 'enum';
}
export declare const ArrayOptionsSymbol: symbol;
export declare function ArrayOptions(options: IArrayOptionsFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
