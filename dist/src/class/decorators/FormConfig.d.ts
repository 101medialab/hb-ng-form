import { ICustomComponentConstructor } from "../../HbFormModule";
import { ValidatorFn } from "@angular/forms";
export declare type RenderTypeCompatible = 'text' | 'email' | 'number' | 'hidden' | 'radio' | 'checkbox' | 'textarea' | 'select';
export interface IBaseFormConfig {
    label?: string;
    defaultValue?: any;
    hints?: string | {
        (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): string;
    };
    validators?: Array<ValidatorFn> | {
        (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): Array<ValidatorFn>;
    };
    useValidators?: Array<string>;
    renderType?: RenderTypeCompatible;
    hide?: boolean;
    hideHeader?: boolean;
    useComponent?: ICustomComponentConstructor;
    html?: {
        idAttr?: string;
        classAttr?: string;
    };
    beforeSetValue?: {
        (currentTemplateObject, rawValue): void;
    };
    afterSetValue?: {
        (currentTemplateObject, rawValue): void;
    };
}
export declare const FormConfigSymbol: symbol;
export declare function FormConfig(options: IBaseFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
