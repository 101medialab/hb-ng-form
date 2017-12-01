import { FormGroup, FormControl, FormArray, Validators, } from '@angular/forms';
import { NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor as Extractor } from 'hb-ng-sdk';
export * from './NgFormFactoryDecorators';
var Ng2FormFactory = (function () {
    function Ng2FormFactory() {
    }
    Ng2FormFactory.generateFormGroupByObject = function (formBuilder, object, resolveTypeAny, options) {
        if (resolveTypeAny === void 0) { resolveTypeAny = null; }
        if (options === void 0) { options = {}; }
        return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, Extractor.generateMapping(object, options), resolveTypeAny);
    };
    Ng2FormFactory.generateLabel = function (key) {
        return key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ').capitalize();
    };
    Ng2FormFactory.generateFormGroupByOATMapping = function (formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
        // Yet all attributes inside should be typeof ExtractorResultType
        resolveTypeAny, resolveTypeUndefined) {
        if (resolveTypeAny === void 0) { resolveTypeAny = null; }
        if (resolveTypeUndefined === void 0) { resolveTypeUndefined = null; }
        var result = {
            ngFormControl: {},
            templateConfig: {},
        };
        var isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
        var attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;
        for (var key in attrMapping) {
            // TODO: Skip attributes should be configurable
            if (['id'].indexOf(key) > -1)
                continue;
            var resolved = null;
            var currentTemplateConfig = null;
            var current = attrMapping[key];
            // Object or Array
            if (['object', 'array'].indexOf(current._type) > -1) {
                if (current._type === 'array') {
                    resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                }
                else {
                    // Handle Object
                    var child = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)();
                    resolved = {
                        groupType: 'object',
                        control: child.ngFormControl instanceof FormGroup ?
                            child.ngFormControl : new FormGroup(child.ngFormControl, Ng2FormFactory.resolveFormValidators(child).validators),
                        children: child.templateConfig
                    };
                }
            }
            else if (current._type !== 'any') {
                if (current !== 'undefined' && typeof current._type != 'undefined') {
                    var _a = Ng2FormFactory.resolveFormValidators(current), validators = _a.validators, valueNotEmpty = _a.valueNotEmpty;
                    currentTemplateConfig = {
                        type: current._type,
                        control: new FormControl(valueNotEmpty ? current._value : '', validators)
                    };
                }
                else {
                    resolved = resolveTypeUndefined ? resolveTypeUndefined(current, key) : null; // Resolve as null first
                }
            }
            else {
                resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
            }
            // If resolved is still null, set it to default
            if (!currentTemplateConfig && !resolved) {
                resolved = {
                    type: 'string',
                    renderType: 'text',
                    control: new FormControl('')
                };
            }
            // FIXME: this checking might be redundant
            if (resolved) {
                currentTemplateConfig = resolved;
            }
            currentTemplateConfig.label = Ng2FormFactory.generateLabel(key);
            currentTemplateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(currentTemplateConfig);
            Ng2FormFactory.resolveTemplateConfigByType(current, currentTemplateConfig);
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
    };
    Ng2FormFactory.resolveFormValidators = function (current) {
        var validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = current._value !== undefined;
        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
        if (valueNotEmpty && validators.length === 0)
            validators.push(Validators.required);
        return { validators: validators, valueNotEmpty: valueNotEmpty };
    };
    Ng2FormFactory.prepareAndCreateChildTemplateConfig = function (currentInput, key, formBuilder, isRaw) {
        if (isRaw === void 0) { isRaw = false; }
        return function () {
            var current = null;
            if (isRaw) {
                // Mock an array type with targeted Prototype
                current = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(new currentInput()));
            }
            else {
                current = currentInput;
            }
            var schemaTemp = null;
            if ('type' in current._mapping &&
                [
                    'any',
                    'string',
                    'boolean',
                    'number',
                    'date',
                    ''
                ].indexOf(current._mapping.type) > -1) {
                // For primitive type array
                var control = new FormControl('value' in current._mapping ? current._mapping.value : '', [Validators.required]), templateConfig = {};
                templateConfig[key] = {
                    label: Ng2FormFactory.generateLabel(key),
                    type: current._mapping.type,
                    control: control,
                };
                schemaTemp = {
                    ngFormControl: control,
                    templateConfig: templateConfig
                };
                Ng2FormFactory.resolveTemplateConfigByType(current._mapping, templateConfig[key]);
            }
            else {
                // For reference type array or object
                schemaTemp = Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, current._mapping);
            }
            schemaTemp.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(schemaTemp.templateConfig);
            if ('formFactory' in current && typeof current.formFactory.onCreate === 'function') {
                current.formFactory.onCreate(schemaTemp.templateConfig, Ng2FormFactory.diContainer);
            }
            return {
                ngFormControl: schemaTemp.ngFormControl instanceof FormControl || current.type === 'object' ?
                    schemaTemp.ngFormControl :
                    // For reference type array
                    new FormGroup(schemaTemp.ngFormControl, Ng2FormFactory.resolveFormValidators(schemaTemp).validators),
                templateConfig: schemaTemp.templateConfig
            };
        };
    };
    Ng2FormFactory.handleArray = function (current, key, formBuilder) {
        var ngFormArrayControl = new FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
        var initChildren = [];
        var arrayType = null;
        var result = {
            groupType: 'array',
            arrayType: current.formFactory && current.formFactory.arrayType ?
                arrayType :
                'type' in current._mapping ?
                    'primitive' : 'object',
            control: ngFormArrayControl,
            children: [],
            childrenConfigName: [],
            useConfig: 0,
            add: null,
            remove: null
        };
        if (current.formFactory && current.formFactory.objectDefinitions) {
            var i_1 = 0;
            current.formFactory.objectDefinitions.forEach(function (each) {
                initChildren[i_1] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                result.childrenConfigName[i_1] = each.label;
                i_1 += 1;
            });
        }
        else {
            initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder);
        }
        var add = function () {
            var childConfig = initChildren[result.useConfig]();
            var control = ngFormArrayControl;
            control.push(childConfig.ngFormControl);
            result.children.push(childConfig.templateConfig);
            childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];
            if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                current.formFactory.onPush(childConfig.templateConfig, Ng2FormFactory.diContainer);
            }
        }, remove = function (i) {
            var control = ngFormArrayControl;
            control.removeAt(i);
            result.children.splice(i, 1);
        };
        result.add = add;
        result.remove = remove;
        // Ng2FormFactory.setTemplatePreset(current, result);
        return result;
    };
    Ng2FormFactory.factorySetValueFunctionToTemplate = function (templateObject) {
        return function (rawValue) {
            var _loop_1 = function () {
                var targetTemplate = templateObject.groupType ? templateObject.children : templateObject;
                if (key in targetTemplate) {
                    if (targetTemplate[key].type) {
                        if (typeof rawValue[key] != 'object') {
                            targetTemplate[key].control.setValue(String(rawValue[key]));
                        }
                    }
                    else {
                        // For Object
                        if (targetTemplate[key].groupType === 'object') {
                            // Let FormGroup to handle value setting
                            targetTemplate[key].setValue(rawValue[key]);
                        }
                        else {
                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }
                            var i_2 = 0;
                            rawValue[key].forEach(function (each) {
                                if ('beforeSetValue' in targetTemplate[key]) {
                                    targetTemplate[key].useConfig = targetTemplate[key].beforeSetValue(each);
                                }
                                targetTemplate[key].add();
                                var fixForPrimitiveArray = {};
                                fixForPrimitiveArray[key] = each;
                                targetTemplate[key].children[i_2].setValue(targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each);
                                i_2++;
                            });
                        }
                    }
                }
            };
            for (var key in rawValue) {
                _loop_1();
            }
        };
    };
    Ng2FormFactory.resolveTemplateConfigByType = function (attrMapping, templateObj) {
        if (attrMapping.type === 'boolean') {
            templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
        }
        else if (attrMapping.options) {
            if (attrMapping.options.length > 2 && attrMapping.maxChoices) {
                templateObj.renderType = attrMapping.expandOptions ? (attrMapping.maxChoices == 1 ?
                    'radio' : 'checkbox') : 'select';
            }
            else {
                templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
            }
        }
        else {
            templateObj.renderType = attrMapping.type;
            if (templateObj.type === 'string')
                templateObj.renderType = 'text';
        }
        Ng2FormFactory.setTemplatePreset(attrMapping, templateObj);
    };
    // Copy setting from OAT to templateConfig object
    // Copy setting from OAT to templateConfig object
    Ng2FormFactory.setTemplatePreset = 
    // Copy setting from OAT to templateConfig object
    function (attrMapping, templateObj) {
        [
            'label',
            'type',
            'useComponent',
            'beforeSetValue',
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
    };
    Ng2FormFactory.diContainer = new Map();
    return Ng2FormFactory;
}());
export { Ng2FormFactory };
//# sourceMappingURL=Ng2FormFactory.js.map