import { IBaseFormConfig } from './FormConfig';
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { IChoice } from "./ChoiceOptions";
export declare class OptionWrapper {
    label: string;
    control: FormControl;
    renderType: string;
    options: any[];
    constructor(option: IChoice);
}
export interface IMultipleChoicesOptionsFormConfig extends IBaseFormConfig {
    maxChoices?: number;
    options: {
        (diContainer: Map<string, any>): Array<OptionWrapper> | Observable<Array<OptionWrapper>>;
    };
}
export declare const MultipleChoicesOptionsSymbol: symbol;
export declare function MultipleChoicesOptions(options: IMultipleChoicesOptionsFormConfig): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
