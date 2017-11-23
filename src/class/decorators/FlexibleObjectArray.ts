import { IBaseFormConfig } from "./FormConfig";

export interface IFlexibleObjectArrayFormConfig extends IBaseFormConfig {
    objectDefinitions: Array<{
        label: string,
        structure: any // The class with decorator or data object
    }>,
    expandOptions?: boolean
    // You need to specific which object definition you want to use for each value
    beforeSetValue: (template: any, rawValue) => void
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