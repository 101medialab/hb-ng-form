import { IBaseFormConfig } from './FormConfig';
import { Observable } from "rxjs";
export interface IChoice {
    name: string;
    value: any;
}
/**
 *  For Form field accepts one value only out of multiple available options
 */
export interface IChoiceOptionsFormConfig extends IBaseFormConfig {
    renderType?: 'radio' | 'select' | 'checkbox';
    options: {
        (diContainer: Map<string, any>, currentTemplateObject: any, parentTemplateObject: any): Array<IChoice> | Observable<Array<IChoice>>;
    } | Array<IChoice> | Observable<Array<IChoice>>;
}
export declare const ChoiceOptionsSymbol: unique symbol;
export declare function ChoiceOptions(options: IChoiceOptionsFormConfig): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
