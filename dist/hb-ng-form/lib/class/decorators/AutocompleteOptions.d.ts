import { Observable } from "rxjs";
export interface IAutocompleteOptions {
    onInit?: (childrenTemplate: any, diContainer: Map<string, any>) => void;
    options?: Observable<Array<{
        label: string;
        value: any;
    }>>;
}
export declare const AutocompleteSymbol: unique symbol;
export declare function AutocompleteOptions(options: IAutocompleteOptions): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
