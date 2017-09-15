import { Observable } from "rxjs/Observable";

export interface IAutocompleteOptions {
    renderType: 'custom' | 'default';
    onInit?: (childrenTemplate: any, diContainer: Map<string, any>) => void;
    useComponent?: any; /** You must implement ICustomComponent */
    options?: Observable<
        Array<{
            label:string,
            value: any
        }>
    >
}

export const AutocompleteSymbol = Symbol('IAutocompleteOptions');

export function AutocompleteOptions(options: IAutocompleteOptions) {
    return Reflect.metadata(
        AutocompleteSymbol, {
            autocomplete: Object.assign(
                <IAutocompleteOptions>{
                    renderType: 'default'
                }, options
            )
        }
    );
}