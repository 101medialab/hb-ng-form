import { ICustomComponentConstructor } from "../../HbFormModule";
import { ValidatorFn } from "@angular/forms";

export type RenderType = 'text' | 'email' | 'number' | 'hidden' | 'radio' | 'checkbox' | 'textarea' | 'select';
export type HtmlElementAttribute = 'label' | 'input' | 'inputContainer' | 'widgetContainer';

type ObjectHtmlElementAttribute = 'objectHeaderContainer' | 'objectHeader' | HtmlElementAttribute;
type ArrayHtmlElementAttribute = 'arrayHeaderContainer' | 'arrayHeader' | HtmlElementAttribute;

export interface IBaseFormConfig {
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
        id?: {
            [key in HtmlElementAttribute]: string
        },
        class?: {
            [key in HtmlElementAttribute]: string
        },
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

export function FormConfig(options: IBaseFormConfig) {
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
