import { IBaseFormConfig } from "./FormConfig";

export interface IFlexibleObjectArrayFormConfig extends IBaseFormConfig {
    objectDefinitions: Array<{
        label: string,
        structure: any // The class with decorator or data object
    }>,
    expandOptions?: boolean
}

export const FlexibleObjectArraySymbol = Symbol('IFlexibleObjectArrayFormConfig');

export function FlexibleObjectArray(options: IFlexibleObjectArrayFormConfig) {
    return Reflect.metadata(
        FlexibleObjectArraySymbol,
        Object.assign(
            {
                expandOptions: false,
            }, options, {
                arrayType: 'object',
            }
        )
    );
}