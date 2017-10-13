import { Observable } from "rxjs/Observable";
export interface IAutocompleteOptions {
    onInit?: (childrenTemplate: any, diContainer: Map<string, any>) => void;
    options?: Observable<Array<{
        label: string;
        value: any;
    }>>;
}
export declare const AutocompleteSymbol: symbol;
export declare function AutocompleteOptions(options: IAutocompleteOptions): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
