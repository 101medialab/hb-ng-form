import { ICustomComponentConstructor } from "../../HbFormModule";
import { ValidatorFn } from "@angular/forms";

export type RenderTypeCompatible = 'text' | 'email' | 'number' | 'hidden' | 'radio' | 'checkbox' | 'textarea' | 'select';

export interface IBaseFormConfig {
    label?: string;
    defaultValue?: any;
    hints?: string | { (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): string };
    validators?: Array<ValidatorFn> | { (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): Array<ValidatorFn> };
    useValidators?: Array<string>;
    renderType?: RenderTypeCompatible;
    hide?: boolean;
    hideHeader?: boolean;
    useComponent?: ICustomComponentConstructor;
    html?: {
        idAttr?: string,
        classAttr?: string,
    }
}

export const FormConfigSymbol = Symbol('FormConfig');

export function FormConfig(options: IBaseFormConfig) {
    return Reflect.metadata(FormConfigSymbol,
        Object.assign({
            hiderHeader: false
        }, options)
    );
}
