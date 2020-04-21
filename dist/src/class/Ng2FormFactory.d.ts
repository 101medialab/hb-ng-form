import { FormBuilder } from '@angular/forms';
export * from './NgFormFactoryDecorators';
export declare class Ng2FormFactory {
    static generateFormGroupByObject(formBuilder: FormBuilder, object: any, resolveTypeAny?: () => {
        ngFormControl: any;
        templateConfig: any;
    }, options?: any): any;
    static diContainer: Map<any, any>;
    static generateLabel(key: any): any;
    static generateFormGroupByOATMapping(formBuilder: FormBuilder, attributeMappingObject: any, // Yet all attributes inside should be typeof ExtractorResultType
    resolveTypeAny?: (attrMapping: any, key: string) => {
        ngFormControl: any;
        templateConfig: any;
    }, resolveTypeUndefined?: (attrMapping: any, key: string) => {
        ngFormControl: any;
        templateConfig: any;
    }): any;
    static resolveFormValidators(current: any): {
        validators: any;
        valueNotEmpty: boolean;
    };
    private static prepareAndCreateChildTemplateConfig;
    private static handleArray;
    static factorySetValueFunctionToTemplate(templateObject: any): (rawValue: any) => void;
    static resolveTemplateConfigByType(attrMapping: any, templateObj: any): void;
    static setTemplatePreset(attrMapping: any, templateObj: any): void;
}
