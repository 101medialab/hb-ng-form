import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    Validators,
} from '@angular/forms';
import {
    NonPrimitiveTypeMeta,
    ObjectAttributeTypeExtractor as Extractor
} from "../ObjectAttributeTypeExtractor";

export * from './NgFormFactoryDecorators';

export class Ng2FormFactory {
    static generateFormGroupByObject(
        formBuilder: FormBuilder,
        object: any,
        resolveTypeAny: () => {
            ngFormControl: any,
            templateConfig: any
        } = null,
        options: any = {}
    ) {
        return Ng2FormFactory.generateFormGroupByOATMapping(
            formBuilder, Extractor.generateMapping(object, options), resolveTypeAny
        );
    }

    static diContainer = new Map();

    static generateLabel(key) {
        const fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');

        return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    }

    static generateFormGroupByOATMapping(
        formBuilder: FormBuilder,
        attributeMappingObject: any, // Yet all attributes inside should be typeof ExtractorResultType
        resolveTypeAny: (attrMapping, key: string) => { ngFormControl: any, templateConfig: any } = null,
        resolveTypeUndefined: (attrMapping, key: string) => { ngFormControl: any, templateConfig: any } = null
    ) {
        let result: any = {
            ngFormControl: {},
            templateConfig: {},
        };
        const isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
        let attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;

        for (let key in attrMapping) {
            // TODO: Skip attributes should be configurable
            if (['id'].indexOf(key) > -1) continue;

            let resolved = null;
            let currentTemplateConfig = null;
            let current = attrMapping[key];

            // Object or Array
            if (['object', 'array'].indexOf(current._type) > -1) {
                if (current._type === 'array') {
                    resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                } else {
                    // Handle Object
                    let child = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)();

                    resolved = {
                        groupType: 'object',
                        control: child.ngFormControl instanceof FormGroup ?
                            child.ngFormControl : new FormGroup(child.ngFormControl, Ng2FormFactory.resolveFormValidators(child).validators),
                        children: child.templateConfig
                    };
                }
            }
            // Primitive type and date
            else if (current._type !== 'any') {
                if (current !== 'undefined' && typeof current._type != 'undefined') {
                    let { validators, valueNotEmpty } = Ng2FormFactory.resolveFormValidators(current);

                    currentTemplateConfig = {
                        type: current._type,
                        control: new FormControl(valueNotEmpty ? current._value : '', validators)
                    };
                } else {
                    resolved = resolveTypeUndefined ? resolveTypeUndefined(current, key) : null; // Resolve as null first
                }
            }
            // Last case: Null value => any
            else {
                resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
            }

            // If resolved is still null, set it to default
            if (!currentTemplateConfig && !resolved) {
                let { validators } = Ng2FormFactory.resolveFormValidators(current);

                resolved = {
                    type: 'string',
                    renderType: 'text',
                    control: new FormControl('', validators)
                };
            }

            // FIXME: this checking might be redundant
            if (resolved) {
                currentTemplateConfig = resolved;
            }

            currentTemplateConfig.label = Ng2FormFactory.generateLabel(key);
            currentTemplateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(currentTemplateConfig);
            Ng2FormFactory.resolveTemplateConfigByType(
                current, currentTemplateConfig
            );

            result.ngFormControl[key] = currentTemplateConfig.control;
            result.templateConfig[key] = currentTemplateConfig;
        }

        result.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(result.templateConfig);

        if (isNonPrimitiveType) {
            result.templateConfig = {
                groupType: attributeMappingObject.type,
                children: result.templateConfig
            };

            Ng2FormFactory.setTemplatePreset(attributeMappingObject, result.templateConfig);
        }

        return result;
    }

    static resolveFormValidators(current: any) {
        let validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [],
            valueNotEmpty = [undefined, null].indexOf(current._value) === -1;

        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;

        if (valueNotEmpty && validators.length === 0) validators.push(Validators.required);

        return { validators, valueNotEmpty };
    }

    private static prepareAndCreateChildTemplateConfig(
        currentInput: any,
        key: string,
        formBuilder: FormBuilder,
        isRaw:boolean = false
    ) {
        const lambda = function () {
            let current = null;

            if (isRaw) {
                // Mock an array type with targeted Prototype
                current = new NonPrimitiveTypeMeta(
                    'array',
                    Extractor.generateMapping(
                        new currentInput()
                    )
                );
            } else {
                current = currentInput;
            }

            let schemaTemp = null;

            if (
                'type' in current._mapping &&
                [
                    'any',
                    'string',
                    'boolean',
                    'number',
                    'date',
                    ''
                ].indexOf(current._mapping.type) > -1
            ) {
                // For primitive type array
                let control = new FormControl(
                    'value' in current._mapping ? current._mapping.value : '',
                    [Validators.required]
                ), templateConfig = {};

                templateConfig[key] = {
                    label: Ng2FormFactory.generateLabel(key),
                    type: current._mapping.type,
                    control,
                };

                schemaTemp = {
                    ngFormControl: control,
                    templateConfig
                };

                Ng2FormFactory.resolveTemplateConfigByType(
                    current._mapping, templateConfig[key]
                );
            } else {
                // For reference type array or object
                schemaTemp = Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, current._mapping);
            }

            schemaTemp.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(schemaTemp.templateConfig);

            if ('formFactory' in current && typeof current.formFactory.onCreate === 'function') {
                current.formFactory.onCreate(
                    schemaTemp.templateConfig, Ng2FormFactory.diContainer
                );
            }

            return {
                ngFormControl:
                    schemaTemp.ngFormControl instanceof FormControl || current.type === 'object' ?
                        schemaTemp.ngFormControl :
                        // For reference type array
                        new FormGroup(schemaTemp.ngFormControl, Ng2FormFactory.resolveFormValidators(schemaTemp).validators),
                templateConfig: schemaTemp.templateConfig
            };
        };

        return lambda;
    }

    private static handleArray(current: any, key: string, formBuilder: FormBuilder) {
        let ngFormArrayControl = new FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
        let initChildren = [];
        let arrayType = null;

        let result = {
            groupType: 'array',
            arrayType:
                current.formFactory && current.formFactory.arrayType ?
                    arrayType :
                    'type' in current._mapping ?
                        'primitive' : 'object'
            ,
            control: ngFormArrayControl,
            children: [],
            childrenConfigName:[],
            useConfig: 0,
            add: null,
            remove: null
        };

        if (current.formFactory && current.formFactory.objectDefinitions) {
            let i = 0;
            current.formFactory.objectDefinitions.forEach(function (each) {
                initChildren[i] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                result.childrenConfigName[i] = each.label;
                i += 1;
            });
        } else {
            initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)
        }

        let add = function () {
                let childConfig = initChildren[result.useConfig]();

                const control = <FormArray>ngFormArrayControl;
                control.push(childConfig.ngFormControl);
                result.children.push(childConfig.templateConfig);

                childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];

                if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                    current.formFactory.onPush(
                        childConfig.templateConfig, Ng2FormFactory.diContainer
                    );
                }
            },
            remove = function (i: number) {
                const control = <FormArray>ngFormArrayControl;
                control.removeAt(i);
                result.children.splice(i, 1);
            };

        result.add = add;
        result.remove = remove;

        // Ng2FormFactory.setTemplatePreset(current, result);

        return result;
    }

    static factorySetValueFunctionToTemplate(templateObject) {
        const lambda = function (rawValue) {
            for (var key in rawValue) {
                let targetTemplate = templateObject.groupType ? templateObject.children : templateObject;

                if (key in targetTemplate) {
                    if (targetTemplate[key].type) {
                        if (typeof rawValue[key] != 'object') {
                            if (
                                'beforeSetValue' in targetTemplate[key]
                            ) {
                                targetTemplate[key].beforeSetValue(targetTemplate[key], rawValue);
                            }

                            targetTemplate[key].control.setValue(
                                // Do not cast to string or boolean value will be broken
                                rawValue[key]
                            );

                            if (
                                'afterSetValue' in targetTemplate[key]
                            ) {
                                targetTemplate[key].afterSetValue(targetTemplate[key], rawValue);
                            }
                        } else if (typeof rawValue[key] != 'undefined' || rawValue[key] != null) { // skip if rawValue[key] is null or undefined
                            // debugger;
                            // Something goes wrong
                        }
                    } else {
                        // For Object
                        if (targetTemplate[key].groupType === 'object') {
                            // Let FormGroup to handle value setting
                            targetTemplate[key].setValue(rawValue[key]);
                        } else {
                            // Even this field is array, rawValue[key] can be null
                            if (!rawValue[key]) continue;

                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }

                            let i = 0;

                            rawValue[key].forEach(function (each) {
                                if (
                                    'resolveFlexibleObjectArrayConfig' in targetTemplate[key]
                                ) {
                                    targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
                                }

                                targetTemplate[key].add();

                                let fixForPrimitiveArray = {};
                                fixForPrimitiveArray[key] = each;

                                targetTemplate[key].children[i].setValue(
                                    targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each
                                );

                                i++;
                            });
                        }
                    }
                }
            }
        }

        return lambda;
    }

    static resolveTemplateConfigByType(attrMapping, templateObj) {
        if (attrMapping.type === 'boolean') {
            templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
        } else if (attrMapping.options) {
            if (attrMapping.options.length > 2 && attrMapping.maxChoices) {
                templateObj.renderType = attrMapping.expandOptions ? (
                    attrMapping.maxChoices == 1 ?
                        'radio' : 'checkbox'
                ) : 'select';
            } else {
                templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
            }
        } else {
            templateObj.renderType = attrMapping.type;
            if (templateObj.type === 'string') templateObj.renderType = 'text';
        }

        Ng2FormFactory.setTemplatePreset(attrMapping, templateObj);
    }

    // Copy setting from OAT to templateConfig object
    static setTemplatePreset(attrMapping, templateObj) {
        [
            'label',
            'type',
            'useComponent',
            'beforeSetValue',
            'afterSetValue',
            'resolveFlexibleObjectArrayConfig',
            'maxChoices',
            'expandOptions',
            'options',
            'hints',
            'hide',
            'html',
            'renderType',
            'arrayType',
            'autocomplete',
            'matExtra',
        ].forEach(function (each) {
            if (attrMapping.formFactory && each in attrMapping.formFactory) {
                templateObj[each] = attrMapping.formFactory[each];
            }
        });

        templateObj.diContainer = Ng2FormFactory.diContainer;
    }
}
