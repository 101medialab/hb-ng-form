import { IBaseFormConfig } from './FormConfig';

export interface IBootstrap4ExtraOptionsFormConfig extends IBaseFormConfig {
    matExtra: {
        matPrefix?: string,
        matSuffix?: string,
    }
}

export const Bootstrap4ExtraOptionsFormSymbol = Symbol('Bootstrap4ExtraOptionsFormSymbol');

export function Bootstrap4ExtraOptions(options: IBootstrap4ExtraOptionsFormConfig) {
    return Reflect.metadata(
        Bootstrap4ExtraOptionsFormSymbol,
        Object.assign(
            <IBootstrap4ExtraOptionsFormConfig>{
            }, options
        )
    );
}
