export * from './decorators/FormConfig';
export * from './decorators/ArrayOptions';
export * from './decorators/ObjectOptions';
export * from './decorators/AutocompleteOptions';
export * from './decorators/ChoiceOptions';
export * from './decorators/MultipleChoicesOptions';
export * from './decorators/FlexibleObjectArray';
export * from './decorators/MatExtraOptions';
export declare function SetupConfig(): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};