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
    // checkbox is for boolean only
    renderType?: 'radio' | 'select' | 'checkbox';
    options: { (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): Array<IChoice> | Observable<
        Array<IChoice>
    > };
}

export const ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');

export function ChoiceOptions(options: IChoiceOptionsFormConfig) {
    return Reflect.metadata(
        ChoiceOptionsSymbol,
        Object.assign({
                maxChoices: 1
            },
            <IChoiceOptionsFormConfig>{
                renderType: 'select'
            }, options
        )
    );
}