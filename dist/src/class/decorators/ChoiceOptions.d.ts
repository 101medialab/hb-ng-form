import { IBaseFormConfig } from './FormConfig';
import { Observable } from "rxjs/Observable";
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
        (diContainer: Map<string, any>): Array<IChoice> | Observable<Array<IChoice>>;
    };
}
export declare const ChoiceOptionsSymbol: symbol;
export declare function ChoiceOptions(options: IChoiceOptionsFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
