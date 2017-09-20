import { FormBuilder } from '@angular/forms';
export * from './NgFormFactoryDecorators';
export declare class Ng2FormFactory {
    static generateFormGroupByObject(formBuilder: FormBuilder, object: any, resolveTypeAny?: () => {
        ngFormControl: any;
        templateConfig: any;
    }, options?: any): any;
    static diContainer: Map<any, any>;
    static generateLabel(key: any): any;
    static generateFormGroupByOATMapping(formBuilder: FormBuilder, attributeMappingObject: any, resolveTypeAny?: (attrMapping, key: string) => {
        ngFormControl: any;
        templateConfig: any;
    }, resolveTypeUndefined?: (attrMapping, key: string) => {
        ngFormControl: any;
        templateConfig: any;
    }): any;
    private static prepareAndCreateChildTemplateConfig(currentInput, key, formBuilder, isRaw?);
    private static handleArray(current, key, formBuilder);
    static setValueToTemplate(value: any): void;
    static resolveTemplateConfigByType(attrMapping: any, templateObj: any): void;
    static setTemplatePreset(attrMapping: any, templateObj: any): void;
}
