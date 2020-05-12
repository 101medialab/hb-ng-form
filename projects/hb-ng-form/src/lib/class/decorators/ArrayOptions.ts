import { IBaseFormConfig } from './FormConfig';

export interface IArrayOptionsFormConfig extends IBaseFormConfig {
    onPush?: (childrenTemplate: any, diContainer: Map<string, any>) => void
    arrayType?: 'object' | 'primitive' | 'enum'
}

export const ArrayOptionsSymbol = Symbol('IArrayOptionsFormConfig');

export function ArrayOptions(options: IArrayOptionsFormConfig) {
    return Reflect.metadata(
        ArrayOptionsSymbol,
        Object.assign(
            <IArrayOptionsFormConfig>{
            }, options
        )
    );
}
