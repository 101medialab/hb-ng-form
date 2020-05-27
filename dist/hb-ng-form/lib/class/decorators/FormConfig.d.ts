import { ICustomComponentConstructor } from "../../HbFormModule";
import { ValidatorFn } from "@angular/forms";
export declare type RenderType = 'text' | 'email' | 'number' | 'hidden' | 'radio' | 'checkbox' | 'textarea' | 'select';
export declare type HtmlElementAttribute = 'label' | 'input' | 'inputContainer' | 'widgetContainer';
export interface IBaseFormConfig {
    label?: string;
    defaultValue?: any;
    hints?: string | {
        (diContainer: Map<string, any>, currentTemplateObject: any, parentTemplateObject: any): string;
    };
    validators?: Array<ValidatorFn> | {
        (diContainer: Map<string, any>, currentTemplateObject: any, parentTemplateObject: any): Array<ValidatorFn>;
    };
    useValidators?: Array<string>;
    renderType?: RenderType;
    hide?: boolean;
    hideHeader?: boolean;
    useComponent?: ICustomComponentConstructor;
    html?: {
        id?: {
            [key in HtmlElementAttribute]: string;
        };
        class?: {
            [key in HtmlElementAttribute]: string;
        };
        textarea?: {
            row?: number;
        };
    };
    beforeSetValue?: {
        (currentTemplateObject: any, rawValue: any): void;
    };
    afterSetValue?: {
        (currentTemplateObject: any, rawValue: any): void;
    };
}
export declare const FormConfigSymbol: unique symbol;
export declare function FormConfig(options: IBaseFormConfig): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
