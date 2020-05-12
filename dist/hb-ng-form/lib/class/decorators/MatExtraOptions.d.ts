import { IBaseFormConfig } from './FormConfig';
export interface IMatExtraOptionsFormConfig extends IBaseFormConfig {
    matExtra: {
        matPrefix?: string;
        matSuffix?: string;
    };
}
export declare const MatExtraOptionsSymbol: unique symbol;
export declare function MatExtraOptions(options: IMatExtraOptionsFormConfig): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
