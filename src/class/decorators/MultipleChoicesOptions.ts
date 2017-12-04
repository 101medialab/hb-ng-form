import { IBaseFormConfig } from './FormConfig';
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { IChoice } from "./ChoiceOptions";

export class OptionWrapper {
    label = '';
    control = new FormControl();
    renderType = 'checkbox';
    options = [];

    constructor(option: IChoice) {
        this.options.push(option);
    }
}

export interface IMultipleChoicesOptionsFormConfig extends IBaseFormConfig {
    maxChoices?: number;
    options: {
        (diContainer: Map<string, any>, currentTemplateObject, parentTemplateObject): Array<OptionWrapper> |
        Observable<
            Array<OptionWrapper>
        >
    };
}

export const MultipleChoicesOptionsSymbol = Symbol('IMultipleChoicesOptionsFormConfig');

export function MultipleChoicesOptions(options: IMultipleChoicesOptionsFormConfig) {
    return Reflect.metadata(
        MultipleChoicesOptionsSymbol,
        Object.assign({
                arrayType: 'enum'
            },
            <IMultipleChoicesOptionsFormConfig>{
                maxChoices: null,
            }, options
        )
    );
}