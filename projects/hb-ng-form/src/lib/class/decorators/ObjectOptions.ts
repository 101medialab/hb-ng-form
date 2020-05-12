import { IBaseFormConfig } from './FormConfig';

export interface IObjectOptionsFormConfig extends IBaseFormConfig {
    onCreate: (childrenTemplate: any, diContainer: Map<string, any>) => void
}

export const ObjectOptionsSymbol = Symbol('IObjectOptionsFormConfig');

export function ObjectOptions(options: IObjectOptionsFormConfig) {
    return Reflect.metadata(
        ObjectOptionsSymbol,
        Object.assign(
            <IObjectOptionsFormConfig>{
            }, options
        )
    );
}
