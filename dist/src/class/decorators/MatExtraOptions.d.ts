import { IBaseFormConfig } from './FormConfig';
export interface IMatExtraOptionsFormConfig extends IBaseFormConfig {
    matExtra: {
        matPrefix?: string;
        matSuffix?: string;
    };
}
export declare const MatExtraOptionsSymbol: symbol;
export declare function MatExtraOptions(options: IMatExtraOptionsFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
