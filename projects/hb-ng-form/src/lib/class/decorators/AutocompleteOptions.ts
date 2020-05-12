import { Observable } from "rxjs";

export interface IAutocompleteOptions {
    onInit?: (childrenTemplate: any, diContainer: Map<string, any>) => void;

    // No being used yet
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
                }, options
            )
        }
    );
}
