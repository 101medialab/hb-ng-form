import { ICustomComponentConstructor } from "../../HbFormModule";
import { ValidatorFn } from "@angular/forms";

export type RenderType = 'text' | 'email' | 'number' | 'hidden' | 'radio' | 'checkbox' | 'textarea' | 'select';

export interface IBaseFormConfig<T> {
    label?: string;
    defaultValue?: any;
    hints?: string | { (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): string };
    validators?: Array<ValidatorFn> | { (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): Array<ValidatorFn> };
    useValidators?: Array<string>;
    renderType?: RenderType;
    hide?: boolean;
    hideHeader?: boolean;
    useComponent?: ICustomComponentConstructor;
    html?: {
        id?: T,
        class?: T,
        textarea?: {
            row?: number
        }
    };
    beforeSetValue?: {
        (currentTemplateObject, rawValue): void
    };
    afterSetValue?: {
        (currentTemplateObject, rawValue): void
    };
}

export const FormConfigSymbol = Symbol('FormConfig');

export function FormConfig<T>(options: IBaseFormConfig<T>) {
    let slug = null;

    if (options.label) {
        slug = options.label.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    return Reflect.metadata(FormConfigSymbol,
        Object.assign({
            hiderHeader: false,
            slug,
        }, options)
    );
}
