import { IBaseFormConfig } from './FormConfig';

export interface IMatExtraOptionsFormConfig extends IBaseFormConfig {
    matSuffix: string;
    matPrefix: string;
}

export const MatExtraOptionsSymbol = Symbol('IMatExtraOptionsFormConfig');

export function MatExtraOptions(options: IMatExtraOptionsFormConfig) {
    return Reflect.metadata(
        MatExtraOptionsSymbol,
        Object.assign(
            <IMatExtraOptionsFormConfig>{
            }, options
        )
    );
}