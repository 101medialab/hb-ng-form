import 'reflect-metadata';
export declare type AttributeType = 'string' | 'number' | 'boolean' | 'date' | 'array' | 'object' | 'any';
export declare class TypeMeta {
    protected _type: AttributeType;
    constructor(_type: AttributeType);
    get type(): AttributeType;
}
export declare class PrimitiveTypeMeta extends TypeMeta {
    protected _value: any;
    constructor(_value: any);
    get value(): any;
}
export declare class NonPrimitiveTypeMeta extends TypeMeta {
    private _mapping;
    private _value;
    constructor(type: 'object' | 'array' | 'date', _mapping?: any, // All attributes should be type of ExtractorResultType
    _value?: any);
    get mapping(): ExtractorResultType;
    get value(): any;
}
export declare type ExtractorResultType = NonPrimitiveTypeMeta | PrimitiveTypeMeta;
export declare function OnOATResolved(cb: (target: any, key: string, resolved: any) => void): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare class ObjectAttributeTypeExtractor {
    static generateMapping(input: any, options?: {
        keyNamingStrategy?: 'camelCase' | 'snake_case';
        stripUnderscore?: boolean;
        onResolved?: (target: any, key?: string, resolved?: any) => void;
    }): any;
    static generateObjectTypeMapping(object: any, key: any, options: any): any;
    static resolveAttributeKey(options: any, key: any, object: any): any;
    static fixNamingConvention(data: any, options: any): any;
    static convertDataToString(data: any, callbacks?: any): any;
    static convertStringToSnakeCase(value: any): any;
}
