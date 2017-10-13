import { IBaseFormConfig } from "./class/decorators/FormConfig";
import { IChoiceOptionsFormConfig } from "./class/decorators/ChoiceOptions";
import { IArrayOptionsFormConfig } from "./class/decorators/ArrayOptions";
export declare class HbFormModule {
}
export declare type TemplateObjectType = IBaseFormConfig | IChoiceOptionsFormConfig | IArrayOptionsFormConfig;
export interface ICustomComponent {
    templateObject: any;
}
export interface ICustomComponentConstructor {
    new (...deps: any[]): ICustomComponent;
}
