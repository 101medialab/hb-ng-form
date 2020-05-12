import { FormGroup, FormControl, FormArray, Validators, } from '@angular/forms';
import { NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor as Extractor } from "../ObjectAttributeTypeExtractor";
export * from './NgFormFactoryDecorators';
export class Ng2FormFactory {
    static generateFormGroupByObject(formBuilder, object, resolveTypeAny = null, options = {}) {
        return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, Extractor.generateMapping(object, options), resolveTypeAny);
    }
    static generateLabel(key) {
        const fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');
        return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    }
    static generateFormGroupByOATMapping(formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
    resolveTypeAny = null, resolveTypeUndefined = null) {
        let result = {
            ngFormControl: {},
            templateConfig: {},
        };
        const isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
        let attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;
        for (let key in attrMapping) {
            // TODO: Skip attributes should be configurable
            if (['id'].indexOf(key) > -1)
                continue;
            let resolved = null;
            let currentTemplateConfig = null;
            let current = attrMapping[key];
            // Object or Array
            if (['object', 'array'].indexOf(current._type) > -1) {
                if (current._type === 'array') {
                    resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                }
                else {
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
                }
                else {
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
    }
    static resolveFormValidators(current) {
        let validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = [undefined, null].indexOf(current._value) === -1;
        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
        if (valueNotEmpty && validators.length === 0)
            validators.push(Validators.required);
        return { validators, valueNotEmpty };
    }
    static prepareAndCreateChildTemplateConfig(currentInput, key, formBuilder, isRaw = false) {
        const lambda = function () {
            let current = null;
            if (isRaw) {
                // Mock an array type with targeted Prototype
                current = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(new currentInput()));
            }
            else {
                current = currentInput;
            }
            let schemaTemp = null;
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
                let control = new FormControl('value' in current._mapping ? current._mapping.value : '', [Validators.required]), templateConfig = {};
                templateConfig[key] = {
                    label: Ng2FormFactory.generateLabel(key),
                    type: current._mapping.type,
                    control,
                };
                schemaTemp = {
                    ngFormControl: control,
                    templateConfig
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
        return lambda;
    }
    static handleArray(current, key, formBuilder) {
        let ngFormArrayControl = new FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
        let initChildren = [];
        let arrayType = null;
        let result = {
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
            let i = 0;
            current.formFactory.objectDefinitions.forEach(function (each) {
                initChildren[i] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                result.childrenConfigName[i] = each.label;
                i += 1;
            });
        }
        else {
            initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder);
        }
        let add = function () {
            let childConfig = initChildren[result.useConfig]();
            const control = ngFormArrayControl;
            control.push(childConfig.ngFormControl);
            result.children.push(childConfig.templateConfig);
            childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];
            if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                current.formFactory.onPush(childConfig.templateConfig, Ng2FormFactory.diContainer);
            }
        }, remove = function (i) {
            const control = ngFormArrayControl;
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
                            if ('beforeSetValue' in targetTemplate[key]) {
                                targetTemplate[key].beforeSetValue(targetTemplate[key], rawValue);
                            }
                            targetTemplate[key].control.setValue(
                            // Do not cast to string or boolean value will be broken
                            rawValue[key]);
                            if ('afterSetValue' in targetTemplate[key]) {
                                targetTemplate[key].afterSetValue(targetTemplate[key], rawValue);
                            }
                        }
                        else if (typeof rawValue[key] != 'undefined' || rawValue[key] != null) { // skip if rawValue[key] is null or undefined
                            // debugger;
                            // Something goes wrong
                        }
                    }
                    else {
                        // For Object
                        if (targetTemplate[key].groupType === 'object') {
                            // Let FormGroup to handle value setting
                            targetTemplate[key].setValue(rawValue[key]);
                        }
                        else {
                            // Even this field is array, rawValue[key] can be null
                            if (!rawValue[key])
                                continue;
                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }
                            let i = 0;
                            rawValue[key].forEach(function (each) {
                                if ('resolveFlexibleObjectArrayConfig' in targetTemplate[key]) {
                                    targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
                                }
                                targetTemplate[key].add();
                                let fixForPrimitiveArray = {};
                                fixForPrimitiveArray[key] = each;
                                targetTemplate[key].children[i].setValue(targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each);
                                i++;
                            });
                        }
                    }
                }
            }
        };
        return lambda;
    }
    static resolveTemplateConfigByType(attrMapping, templateObj) {
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
Ng2FormFactory.diContainer = new Map();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmcyRm9ybUZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYi1uZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2NsYXNzL05nMkZvcm1GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLDRCQUE0QixJQUFJLFNBQVMsRUFDNUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QyxjQUFjLDJCQUEyQixDQUFDO0FBRTFDLE1BQU0sT0FBTyxjQUFjO0lBQ3ZCLE1BQU0sQ0FBQyx5QkFBeUIsQ0FDNUIsV0FBd0IsRUFDeEIsTUFBVyxFQUNYLGlCQUdJLElBQUksRUFDUixVQUFlLEVBQUU7UUFFakIsT0FBTyxjQUFjLENBQUMsNkJBQTZCLENBQy9DLFdBQVcsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxjQUFjLENBQzFFLENBQUM7SUFDTixDQUFDO0lBSUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFcEUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQyw2QkFBNkIsQ0FDaEMsV0FBd0IsRUFDeEIsc0JBQTJCLEVBQUUsaUVBQWlFO0lBQzlGLGlCQUE0RixJQUFJLEVBQ2hHLHVCQUFrRyxJQUFJO1FBRXRHLElBQUksTUFBTSxHQUFRO1lBQ2QsYUFBYSxFQUFFLEVBQUU7WUFDakIsY0FBYyxFQUFFLEVBQUU7U0FDckIsQ0FBQztRQUNGLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1FBRWhHLEtBQUssSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFO1lBQ3pCLCtDQUErQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxTQUFTO1lBRXZDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0Isa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtvQkFDM0IsUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0gsZ0JBQWdCO29CQUNoQixJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsbUNBQW1DLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUU1RixRQUFRLEdBQUc7d0JBQ1AsU0FBUyxFQUFFLFFBQVE7d0JBQ25CLE9BQU8sRUFBRSxLQUFLLENBQUMsYUFBYSxZQUFZLFNBQVMsQ0FBQyxDQUFDOzRCQUMvQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUM7d0JBQ3BILFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYztxQkFDakMsQ0FBQztpQkFDTDthQUNKO1lBQ0QsMEJBQTBCO2lCQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUM5QixJQUFJLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLFdBQVcsRUFBRTtvQkFDaEUsSUFBSSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsR0FBRyxjQUFjLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRWxGLHFCQUFxQixHQUFHO3dCQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7d0JBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUM7cUJBQzVFLENBQUM7aUJBQ0w7cUJBQU07b0JBQ0gsUUFBUSxHQUFHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QjtpQkFDeEc7YUFDSjtZQUNELCtCQUErQjtpQkFDMUI7Z0JBQ0QsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsd0JBQXdCO2FBQzVGO1lBRUQsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckMsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFbkUsUUFBUSxHQUFHO29CQUNQLElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRSxNQUFNO29CQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsQ0FBQzthQUNMO1lBRUQsMENBQTBDO1lBQzFDLElBQUksUUFBUSxFQUFFO2dCQUNWLHFCQUFxQixHQUFHLFFBQVEsQ0FBQzthQUNwQztZQUVELHFCQUFxQixDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hFLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsaUNBQWlDLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN6RyxjQUFjLENBQUMsMkJBQTJCLENBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsQ0FDakMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQXFCLENBQUM7U0FDdEQ7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsaUNBQWlDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXpHLElBQUksa0JBQWtCLEVBQUU7WUFDcEIsTUFBTSxDQUFDLGNBQWMsR0FBRztnQkFDcEIsU0FBUyxFQUFFLHNCQUFzQixDQUFDLElBQUk7Z0JBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYzthQUNsQyxDQUFDO1lBRUYsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMscUJBQXFCLENBQUMsT0FBWTtRQUNyQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUN4RyxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyRSxVQUFVLEdBQUcsT0FBTyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFFcEcsSUFBSSxhQUFhLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU8sTUFBTSxDQUFDLG1DQUFtQyxDQUM5QyxZQUFpQixFQUNqQixHQUFXLEVBQ1gsV0FBd0IsRUFDeEIsUUFBZ0IsS0FBSztRQUVyQixNQUFNLE1BQU0sR0FBRztZQUNYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztZQUVuQixJQUFJLEtBQUssRUFBRTtnQkFDUCw2Q0FBNkM7Z0JBQzdDLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUM5QixPQUFPLEVBQ1AsU0FBUyxDQUFDLGVBQWUsQ0FDckIsSUFBSSxZQUFZLEVBQUUsQ0FDckIsQ0FDSixDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUMxQjtZQUVELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztZQUV0QixJQUNJLE1BQU0sSUFBSSxPQUFPLENBQUMsUUFBUTtnQkFDMUI7b0JBQ0ksS0FBSztvQkFDTCxRQUFRO29CQUNSLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixNQUFNO29CQUNOLEVBQUU7aUJBQ0wsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkM7Z0JBQ0UsMkJBQTJCO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FDekIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3pELENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUN4QixFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBRXZCLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDbEIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO29CQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUMzQixPQUFPO2lCQUNWLENBQUM7Z0JBRUYsVUFBVSxHQUFHO29CQUNULGFBQWEsRUFBRSxPQUFPO29CQUN0QixjQUFjO2lCQUNqQixDQUFDO2dCQUVGLGNBQWMsQ0FBQywyQkFBMkIsQ0FDdEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQ3hDLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxxQ0FBcUM7Z0JBQ3JDLFVBQVUsR0FBRyxjQUFjLENBQUMsNkJBQTZCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1RjtZQUVELFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFakgsSUFBSSxhQUFhLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO2dCQUNoRixPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDeEIsVUFBVSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUN4RCxDQUFDO2FBQ0w7WUFFRCxPQUFPO2dCQUNILGFBQWEsRUFDVCxVQUFVLENBQUMsYUFBYSxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO29CQUMxRSxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFCLDJCQUEyQjtvQkFDM0IsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUM1RyxjQUFjLEVBQUUsVUFBVSxDQUFDLGNBQWM7YUFDNUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQVksRUFBRSxHQUFXLEVBQUUsV0FBd0I7UUFDMUUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JHLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxNQUFNLEdBQUc7WUFDVCxTQUFTLEVBQUUsT0FBTztZQUNsQixTQUFTLEVBQ0wsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxTQUFTLENBQUMsQ0FBQztnQkFDWCxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QixXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFFbEMsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsRUFBRTtZQUNaLGtCQUFrQixFQUFDLEVBQUU7WUFDckIsU0FBUyxFQUFFLENBQUM7WUFDWixHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUVGLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1lBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtnQkFDeEQsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1NBQ2xHO1FBRUQsSUFBSSxHQUFHLEdBQUc7WUFDRixJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFFbkQsTUFBTSxPQUFPLEdBQWMsa0JBQWtCLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWpELFdBQVcsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRyxJQUFJLGFBQWEsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7Z0JBQzlFLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUN0QixXQUFXLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQ3pELENBQUM7YUFDTDtRQUNMLENBQUMsRUFDRCxNQUFNLEdBQUcsVUFBVSxDQUFTO1lBQ3hCLE1BQU0sT0FBTyxHQUFjLGtCQUFrQixDQUFDO1lBQzlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVOLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXZCLHFEQUFxRDtRQUVyRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLGNBQWM7UUFDbkQsTUFBTSxNQUFNLEdBQUcsVUFBVSxRQUFRO1lBQzdCLEtBQUssSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO2dCQUN0QixJQUFJLGNBQWMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBRXpGLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRTtvQkFDdkIsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO3dCQUMxQixJQUFJLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsRUFBRTs0QkFDbEMsSUFDSSxnQkFBZ0IsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQ3pDO2dDQUNFLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzZCQUNyRTs0QkFFRCxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVE7NEJBQ2hDLHdEQUF3RDs0QkFDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDOzRCQUVGLElBQ0ksZUFBZSxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFDeEM7Z0NBQ0UsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7NkJBQ3BFO3lCQUNKOzZCQUFNLElBQUksT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSw2Q0FBNkM7NEJBQ3BILFlBQVk7NEJBQ1osdUJBQXVCO3lCQUMxQjtxQkFDSjt5QkFBTTt3QkFDSCxhQUFhO3dCQUNiLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7NEJBQzVDLHdDQUF3Qzs0QkFDeEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDL0M7NkJBQU07NEJBQ0gsc0RBQXNEOzRCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQ0FBRSxTQUFTOzRCQUU3QixRQUFROzRCQUNSLHNCQUFzQjs0QkFDdEIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dDQUNwRCxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNqQzs0QkFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBRVYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7Z0NBQ2hDLElBQ0ksa0NBQWtDLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUMzRDtvQ0FDRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQ0FDOUY7Z0NBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dDQUUxQixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztnQ0FDOUIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dDQUVqQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNFLENBQUM7Z0NBRUYsQ0FBQyxFQUFFLENBQUM7NEJBQ1IsQ0FBQyxDQUFDLENBQUM7eUJBQ047cUJBQ0o7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLFdBQVc7UUFDdkQsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQzdFO2FBQU0sSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQzFELFdBQVcsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDakQsV0FBVyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQzNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUNoQjtpQkFBTTtnQkFDSCxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzdFO1NBQ0o7YUFBTTtZQUNILFdBQVcsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUTtnQkFBRSxXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUN0RTtRQUVELGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGlEQUFpRDtJQUNqRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVc7UUFDN0M7WUFDSSxPQUFPO1lBQ1AsTUFBTTtZQUNOLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtDQUFrQztZQUNsQyxZQUFZO1lBQ1osZUFBZTtZQUNmLFNBQVM7WUFDVCxPQUFPO1lBQ1AsTUFBTTtZQUNOLE1BQU07WUFDTixZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7WUFDZCxVQUFVO1NBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3BCLElBQUksV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRTtnQkFDNUQsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN6RCxDQUFDOztBQXJYTSwwQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZvcm1CdWlsZGVyLFxuICAgIEZvcm1Hcm91cCxcbiAgICBGb3JtQ29udHJvbCxcbiAgICBGb3JtQXJyYXksXG4gICAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgICBOb25QcmltaXRpdmVUeXBlTWV0YSxcbiAgICBPYmplY3RBdHRyaWJ1dGVUeXBlRXh0cmFjdG9yIGFzIEV4dHJhY3RvclxufSBmcm9tIFwiLi4vT2JqZWN0QXR0cmlidXRlVHlwZUV4dHJhY3RvclwiO1xuXG5leHBvcnQgKiBmcm9tICcuL05nRm9ybUZhY3RvcnlEZWNvcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE5nMkZvcm1GYWN0b3J5IHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVGb3JtR3JvdXBCeU9iamVjdChcbiAgICAgICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBvYmplY3Q6IGFueSxcbiAgICAgICAgcmVzb2x2ZVR5cGVBbnk6ICgpID0+IHtcbiAgICAgICAgICAgIG5nRm9ybUNvbnRyb2w6IGFueSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnOiBhbnlcbiAgICAgICAgfSA9IG51bGwsXG4gICAgICAgIG9wdGlvbnM6IGFueSA9IHt9XG4gICAgKSB7XG4gICAgICAgIHJldHVybiBOZzJGb3JtRmFjdG9yeS5nZW5lcmF0ZUZvcm1Hcm91cEJ5T0FUTWFwcGluZyhcbiAgICAgICAgICAgIGZvcm1CdWlsZGVyLCBFeHRyYWN0b3IuZ2VuZXJhdGVNYXBwaW5nKG9iamVjdCwgb3B0aW9ucyksIHJlc29sdmVUeXBlQW55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpQ29udGFpbmVyID0gbmV3IE1hcCgpO1xuXG4gICAgc3RhdGljIGdlbmVyYXRlTGFiZWwoa2V5KSB7XG4gICAgICAgIGNvbnN0IGZpeGVkS2V5ID0ga2V5LnJlcGxhY2UoLyhbQS1aXSspL2csIFwiICQxXCIpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuICAgICAgICByZXR1cm4gZml4ZWRLZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmaXhlZEtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVGb3JtR3JvdXBCeU9BVE1hcHBpbmcoXG4gICAgICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgYXR0cmlidXRlTWFwcGluZ09iamVjdDogYW55LCAvLyBZZXQgYWxsIGF0dHJpYnV0ZXMgaW5zaWRlIHNob3VsZCBiZSB0eXBlb2YgRXh0cmFjdG9yUmVzdWx0VHlwZVxuICAgICAgICByZXNvbHZlVHlwZUFueTogKGF0dHJNYXBwaW5nLCBrZXk6IHN0cmluZykgPT4geyBuZ0Zvcm1Db250cm9sOiBhbnksIHRlbXBsYXRlQ29uZmlnOiBhbnkgfSA9IG51bGwsXG4gICAgICAgIHJlc29sdmVUeXBlVW5kZWZpbmVkOiAoYXR0ck1hcHBpbmcsIGtleTogc3RyaW5nKSA9PiB7IG5nRm9ybUNvbnRyb2w6IGFueSwgdGVtcGxhdGVDb25maWc6IGFueSB9ID0gbnVsbFxuICAgICkge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7XG4gICAgICAgICAgICBuZ0Zvcm1Db250cm9sOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXNOb25QcmltaXRpdmVUeXBlID0gWydhcnJheScsICdvYmplY3QnXS5pbmRleE9mKGF0dHJpYnV0ZU1hcHBpbmdPYmplY3QuX3R5cGUpID4gLTE7XG4gICAgICAgIGxldCBhdHRyTWFwcGluZyA9IGlzTm9uUHJpbWl0aXZlVHlwZSA/IGF0dHJpYnV0ZU1hcHBpbmdPYmplY3QuX21hcHBpbmcgOiBhdHRyaWJ1dGVNYXBwaW5nT2JqZWN0O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyTWFwcGluZykge1xuICAgICAgICAgICAgLy8gVE9ETzogU2tpcCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb25maWd1cmFibGVcbiAgICAgICAgICAgIGlmIChbJ2lkJ10uaW5kZXhPZihrZXkpID4gLTEpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZW1wbGF0ZUNvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGF0dHJNYXBwaW5nW2tleV07XG5cbiAgICAgICAgICAgIC8vIE9iamVjdCBvciBBcnJheVxuICAgICAgICAgICAgaWYgKFsnb2JqZWN0JywgJ2FycmF5J10uaW5kZXhPZihjdXJyZW50Ll90eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3R5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBOZzJGb3JtRmFjdG9yeS5oYW5kbGVBcnJheShjdXJyZW50LCBrZXksIGZvcm1CdWlsZGVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IE5nMkZvcm1GYWN0b3J5LnByZXBhcmVBbmRDcmVhdGVDaGlsZFRlbXBsYXRlQ29uZmlnKGN1cnJlbnQsIGtleSwgZm9ybUJ1aWxkZXIpKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbDogY2hpbGQubmdGb3JtQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQubmdGb3JtQ29udHJvbCA6IG5ldyBGb3JtR3JvdXAoY2hpbGQubmdGb3JtQ29udHJvbCwgTmcyRm9ybUZhY3RvcnkucmVzb2x2ZUZvcm1WYWxpZGF0b3JzKGNoaWxkKS52YWxpZGF0b3JzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZC50ZW1wbGF0ZUNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByaW1pdGl2ZSB0eXBlIGFuZCBkYXRlXG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50Ll90eXBlICE9PSAnYW55Jykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3VycmVudC5fdHlwZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeyB2YWxpZGF0b3JzLCB2YWx1ZU5vdEVtcHR5IH0gPSBOZzJGb3JtRmFjdG9yeS5yZXNvbHZlRm9ybVZhbGlkYXRvcnMoY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY3VycmVudC5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbCh2YWx1ZU5vdEVtcHR5ID8gY3VycmVudC5fdmFsdWUgOiAnJywgdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVUeXBlVW5kZWZpbmVkID8gcmVzb2x2ZVR5cGVVbmRlZmluZWQoY3VycmVudCwga2V5KSA6IG51bGw7IC8vIFJlc29sdmUgYXMgbnVsbCBmaXJzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExhc3QgY2FzZTogTnVsbCB2YWx1ZSA9PiBhbnlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZVR5cGVBbnkgPyByZXNvbHZlVHlwZUFueShjdXJyZW50LCBrZXkpIDogbnVsbDsgLy8gUmVzb2x2ZSBhcyBudWxsIGZpcnN0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHJlc29sdmVkIGlzIHN0aWxsIG51bGwsIHNldCBpdCB0byBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRUZW1wbGF0ZUNvbmZpZyAmJiAhcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgeyB2YWxpZGF0b3JzIH0gPSBOZzJGb3JtRmFjdG9yeS5yZXNvbHZlRm9ybVZhbGlkYXRvcnMoY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogbmV3IEZvcm1Db250cm9sKCcnLCB2YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiB0aGlzIGNoZWNraW5nIG1pZ2h0IGJlIHJlZHVuZGFudFxuICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRlbXBsYXRlQ29uZmlnID0gcmVzb2x2ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUZW1wbGF0ZUNvbmZpZy5sYWJlbCA9IE5nMkZvcm1GYWN0b3J5LmdlbmVyYXRlTGFiZWwoa2V5KTtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wbGF0ZUNvbmZpZy5zZXRWYWx1ZSA9IE5nMkZvcm1GYWN0b3J5LmZhY3RvcnlTZXRWYWx1ZUZ1bmN0aW9uVG9UZW1wbGF0ZShjdXJyZW50VGVtcGxhdGVDb25maWcpO1xuICAgICAgICAgICAgTmcyRm9ybUZhY3RvcnkucmVzb2x2ZVRlbXBsYXRlQ29uZmlnQnlUeXBlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnQsIGN1cnJlbnRUZW1wbGF0ZUNvbmZpZ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmVzdWx0Lm5nRm9ybUNvbnRyb2xba2V5XSA9IGN1cnJlbnRUZW1wbGF0ZUNvbmZpZy5jb250cm9sO1xuICAgICAgICAgICAgcmVzdWx0LnRlbXBsYXRlQ29uZmlnW2tleV0gPSBjdXJyZW50VGVtcGxhdGVDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQudGVtcGxhdGVDb25maWcuc2V0VmFsdWUgPSBOZzJGb3JtRmFjdG9yeS5mYWN0b3J5U2V0VmFsdWVGdW5jdGlvblRvVGVtcGxhdGUocmVzdWx0LnRlbXBsYXRlQ29uZmlnKTtcblxuICAgICAgICBpZiAoaXNOb25QcmltaXRpdmVUeXBlKSB7XG4gICAgICAgICAgICByZXN1bHQudGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBUeXBlOiBhdHRyaWJ1dGVNYXBwaW5nT2JqZWN0LnR5cGUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlc3VsdC50ZW1wbGF0ZUNvbmZpZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgTmcyRm9ybUZhY3Rvcnkuc2V0VGVtcGxhdGVQcmVzZXQoYXR0cmlidXRlTWFwcGluZ09iamVjdCwgcmVzdWx0LnRlbXBsYXRlQ29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVGb3JtVmFsaWRhdG9ycyhjdXJyZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvcnMgPSBjdXJyZW50LmZvcm1GYWN0b3J5ICYmIGN1cnJlbnQuZm9ybUZhY3RvcnkudmFsaWRhdG9ycyA/IGN1cnJlbnQuZm9ybUZhY3RvcnkudmFsaWRhdG9ycyA6IFtdLFxuICAgICAgICAgICAgdmFsdWVOb3RFbXB0eSA9IFt1bmRlZmluZWQsIG51bGxdLmluZGV4T2YoY3VycmVudC5fdmFsdWUpID09PSAtMTtcblxuICAgICAgICB2YWxpZGF0b3JzID0gdHlwZW9mIHZhbGlkYXRvcnMgPT09ICdmdW5jdGlvbicgPyB2YWxpZGF0b3JzKE5nMkZvcm1GYWN0b3J5LmRpQ29udGFpbmVyKSA6IHZhbGlkYXRvcnM7XG5cbiAgICAgICAgaWYgKHZhbHVlTm90RW1wdHkgJiYgdmFsaWRhdG9ycy5sZW5ndGggPT09IDApIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblxuICAgICAgICByZXR1cm4geyB2YWxpZGF0b3JzLCB2YWx1ZU5vdEVtcHR5IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJlcGFyZUFuZENyZWF0ZUNoaWxkVGVtcGxhdGVDb25maWcoXG4gICAgICAgIGN1cnJlbnRJbnB1dDogYW55LFxuICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBpc1Jhdzpib29sZWFuID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgY29uc3QgbGFtYmRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoaXNSYXcpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2NrIGFuIGFycmF5IHR5cGUgd2l0aCB0YXJnZXRlZCBQcm90b3R5cGVcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV3IE5vblByaW1pdGl2ZVR5cGVNZXRhKFxuICAgICAgICAgICAgICAgICAgICAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICBFeHRyYWN0b3IuZ2VuZXJhdGVNYXBwaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGN1cnJlbnRJbnB1dCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudElucHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2NoZW1hVGVtcCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAndHlwZScgaW4gY3VycmVudC5fbWFwcGluZyAmJlxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2FueScsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgXS5pbmRleE9mKGN1cnJlbnQuX21hcHBpbmcudHlwZSkgPiAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHByaW1pdGl2ZSB0eXBlIGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZScgaW4gY3VycmVudC5fbWFwcGluZyA/IGN1cnJlbnQuX21hcHBpbmcudmFsdWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgICAgICAgKSwgdGVtcGxhdGVDb25maWcgPSB7fTtcblxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBOZzJGb3JtRmFjdG9yeS5nZW5lcmF0ZUxhYmVsKGtleSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnQuX21hcHBpbmcudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NoZW1hVGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmdGb3JtQ29udHJvbDogY29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb25maWdcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgTmcyRm9ybUZhY3RvcnkucmVzb2x2ZVRlbXBsYXRlQ29uZmlnQnlUeXBlKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Ll9tYXBwaW5nLCB0ZW1wbGF0ZUNvbmZpZ1trZXldXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHJlZmVyZW5jZSB0eXBlIGFycmF5IG9yIG9iamVjdFxuICAgICAgICAgICAgICAgIHNjaGVtYVRlbXAgPSBOZzJGb3JtRmFjdG9yeS5nZW5lcmF0ZUZvcm1Hcm91cEJ5T0FUTWFwcGluZyhmb3JtQnVpbGRlciwgY3VycmVudC5fbWFwcGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjaGVtYVRlbXAudGVtcGxhdGVDb25maWcuc2V0VmFsdWUgPSBOZzJGb3JtRmFjdG9yeS5mYWN0b3J5U2V0VmFsdWVGdW5jdGlvblRvVGVtcGxhdGUoc2NoZW1hVGVtcC50ZW1wbGF0ZUNvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmICgnZm9ybUZhY3RvcnknIGluIGN1cnJlbnQgJiYgdHlwZW9mIGN1cnJlbnQuZm9ybUZhY3Rvcnkub25DcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvcm1GYWN0b3J5Lm9uQ3JlYXRlKFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWFUZW1wLnRlbXBsYXRlQ29uZmlnLCBOZzJGb3JtRmFjdG9yeS5kaUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmdGb3JtQ29udHJvbDpcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hVGVtcC5uZ0Zvcm1Db250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgY3VycmVudC50eXBlID09PSAnb2JqZWN0JyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUZW1wLm5nRm9ybUNvbnRyb2wgOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHJlZmVyZW5jZSB0eXBlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHNjaGVtYVRlbXAubmdGb3JtQ29udHJvbCwgTmcyRm9ybUZhY3RvcnkucmVzb2x2ZUZvcm1WYWxpZGF0b3JzKHNjaGVtYVRlbXApLnZhbGlkYXRvcnMpLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnOiBzY2hlbWFUZW1wLnRlbXBsYXRlQ29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsYW1iZGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlQXJyYXkoY3VycmVudDogYW55LCBrZXk6IHN0cmluZywgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIGxldCBuZ0Zvcm1BcnJheUNvbnRyb2wgPSBuZXcgRm9ybUFycmF5KFtdLCBOZzJGb3JtRmFjdG9yeS5yZXNvbHZlRm9ybVZhbGlkYXRvcnMoY3VycmVudCkudmFsaWRhdG9ycyk7XG4gICAgICAgIGxldCBpbml0Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgbGV0IGFycmF5VHlwZSA9IG51bGw7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGdyb3VwVHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGFycmF5VHlwZTpcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvcm1GYWN0b3J5ICYmIGN1cnJlbnQuZm9ybUZhY3RvcnkuYXJyYXlUeXBlID9cbiAgICAgICAgICAgICAgICAgICAgYXJyYXlUeXBlIDpcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnIGluIGN1cnJlbnQuX21hcHBpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ByaW1pdGl2ZScgOiAnb2JqZWN0J1xuICAgICAgICAgICAgLFxuICAgICAgICAgICAgY29udHJvbDogbmdGb3JtQXJyYXlDb250cm9sLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW5Db25maWdOYW1lOltdLFxuICAgICAgICAgICAgdXNlQ29uZmlnOiAwLFxuICAgICAgICAgICAgYWRkOiBudWxsLFxuICAgICAgICAgICAgcmVtb3ZlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuZm9ybUZhY3RvcnkgJiYgY3VycmVudC5mb3JtRmFjdG9yeS5vYmplY3REZWZpbml0aW9ucykge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY3VycmVudC5mb3JtRmFjdG9yeS5vYmplY3REZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoKSB7XG4gICAgICAgICAgICAgICAgaW5pdENoaWxkcmVuW2ldID0gTmcyRm9ybUZhY3RvcnkucHJlcGFyZUFuZENyZWF0ZUNoaWxkVGVtcGxhdGVDb25maWcoZWFjaC5zdHJ1Y3R1cmUsICcnLCBmb3JtQnVpbGRlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoaWxkcmVuQ29uZmlnTmFtZVtpXSA9IGVhY2gubGFiZWw7XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0Q2hpbGRyZW5bMF0gPSBOZzJGb3JtRmFjdG9yeS5wcmVwYXJlQW5kQ3JlYXRlQ2hpbGRUZW1wbGF0ZUNvbmZpZyhjdXJyZW50LCBrZXksIGZvcm1CdWlsZGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb25maWcgPSBpbml0Q2hpbGRyZW5bcmVzdWx0LnVzZUNvbmZpZ10oKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5Pm5nRm9ybUFycmF5Q29udHJvbDtcbiAgICAgICAgICAgICAgICBjb250cm9sLnB1c2goY2hpbGRDb25maWcubmdGb3JtQ29udHJvbCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoaWxkcmVuLnB1c2goY2hpbGRDb25maWcudGVtcGxhdGVDb25maWcpO1xuXG4gICAgICAgICAgICAgICAgY2hpbGRDb25maWcudGVtcGxhdGVDb25maWcuZmxleGlibGVPYmplY3RUeXBlTmFtZSA9IHJlc3VsdC5jaGlsZHJlbkNvbmZpZ05hbWVbcmVzdWx0LnVzZUNvbmZpZ107XG5cbiAgICAgICAgICAgICAgICBpZiAoJ2Zvcm1GYWN0b3J5JyBpbiBjdXJyZW50ICYmIHR5cGVvZiBjdXJyZW50LmZvcm1GYWN0b3J5Lm9uUHVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmZvcm1GYWN0b3J5Lm9uUHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnLnRlbXBsYXRlQ29uZmlnLCBOZzJGb3JtRmFjdG9yeS5kaUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmUgPSBmdW5jdGlvbiAoaTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+bmdGb3JtQXJyYXlDb250cm9sO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wucmVtb3ZlQXQoaSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LmFkZCA9IGFkZDtcbiAgICAgICAgcmVzdWx0LnJlbW92ZSA9IHJlbW92ZTtcblxuICAgICAgICAvLyBOZzJGb3JtRmFjdG9yeS5zZXRUZW1wbGF0ZVByZXNldChjdXJyZW50LCByZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGZhY3RvcnlTZXRWYWx1ZUZ1bmN0aW9uVG9UZW1wbGF0ZSh0ZW1wbGF0ZU9iamVjdCkge1xuICAgICAgICBjb25zdCBsYW1iZGEgPSBmdW5jdGlvbiAocmF3VmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiByYXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUZW1wbGF0ZSA9IHRlbXBsYXRlT2JqZWN0Lmdyb3VwVHlwZSA/IHRlbXBsYXRlT2JqZWN0LmNoaWxkcmVuIDogdGVtcGxhdGVPYmplY3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHRhcmdldFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUZW1wbGF0ZVtrZXldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmF3VmFsdWVba2V5XSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JlZm9yZVNldFZhbHVlJyBpbiB0YXJnZXRUZW1wbGF0ZVtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uYmVmb3JlU2V0VmFsdWUodGFyZ2V0VGVtcGxhdGVba2V5XSwgcmF3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uY29udHJvbC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGNhc3QgdG8gc3RyaW5nIG9yIGJvb2xlYW4gdmFsdWUgd2lsbCBiZSBicm9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3VmFsdWVba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZnRlclNldFZhbHVlJyBpbiB0YXJnZXRUZW1wbGF0ZVtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uYWZ0ZXJTZXRWYWx1ZSh0YXJnZXRUZW1wbGF0ZVtrZXldLCByYXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmF3VmFsdWVba2V5XSAhPSAndW5kZWZpbmVkJyB8fCByYXdWYWx1ZVtrZXldICE9IG51bGwpIHsgLy8gc2tpcCBpZiByYXdWYWx1ZVtrZXldIGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGdvZXMgd3JvbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUZW1wbGF0ZVtrZXldLmdyb3VwVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQgRm9ybUdyb3VwIHRvIGhhbmRsZSB2YWx1ZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVtcGxhdGVba2V5XS5zZXRWYWx1ZShyYXdWYWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbiB0aGlzIGZpZWxkIGlzIGFycmF5LCByYXdWYWx1ZVtrZXldIGNhbiBiZSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyYXdWYWx1ZVtrZXldKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0YXJnZXRUZW1wbGF0ZVtrZXldLmNvbnRyb2wuY29udHJvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZW1wbGF0ZVtrZXldLnJlbW92ZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdWYWx1ZVtrZXldLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc29sdmVGbGV4aWJsZU9iamVjdEFycmF5Q29uZmlnJyBpbiB0YXJnZXRUZW1wbGF0ZVtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVtcGxhdGVba2V5XS51c2VDb25maWcgPSB0YXJnZXRUZW1wbGF0ZVtrZXldLnJlc29sdmVGbGV4aWJsZU9iamVjdEFycmF5Q29uZmlnKGVhY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVtcGxhdGVba2V5XS5hZGQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4Rm9yUHJpbWl0aXZlQXJyYXkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4Rm9yUHJpbWl0aXZlQXJyYXlba2V5XSA9IGVhY2g7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVtcGxhdGVba2V5XS5jaGlsZHJlbltpXS5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uYXJyYXlUeXBlICE9PSAnb2JqZWN0JyA/IGZpeEZvclByaW1pdGl2ZUFycmF5IDogZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYW1iZGE7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVUZW1wbGF0ZUNvbmZpZ0J5VHlwZShhdHRyTWFwcGluZywgdGVtcGxhdGVPYmopIHtcbiAgICAgICAgaWYgKGF0dHJNYXBwaW5nLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGVtcGxhdGVPYmoucmVuZGVyVHlwZSA9IGF0dHJNYXBwaW5nLmV4cGFuZE9wdGlvbnMgPyAncmFkaW8nIDogJ2NoZWNrYm94JztcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyTWFwcGluZy5vcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoYXR0ck1hcHBpbmcub3B0aW9ucy5sZW5ndGggPiAyICYmIGF0dHJNYXBwaW5nLm1heENob2ljZXMpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU9iai5yZW5kZXJUeXBlID0gYXR0ck1hcHBpbmcuZXhwYW5kT3B0aW9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgYXR0ck1hcHBpbmcubWF4Q2hvaWNlcyA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdyYWRpbycgOiAnY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgKSA6ICdzZWxlY3QnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU9iai5yZW5kZXJUeXBlID0gYXR0ck1hcHBpbmcuZXhwYW5kT3B0aW9ucyA/ICdyYWRpbycgOiAnY2hlY2tib3gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGxhdGVPYmoucmVuZGVyVHlwZSA9IGF0dHJNYXBwaW5nLnR5cGU7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGVPYmoudHlwZSA9PT0gJ3N0cmluZycpIHRlbXBsYXRlT2JqLnJlbmRlclR5cGUgPSAndGV4dCc7XG4gICAgICAgIH1cblxuICAgICAgICBOZzJGb3JtRmFjdG9yeS5zZXRUZW1wbGF0ZVByZXNldChhdHRyTWFwcGluZywgdGVtcGxhdGVPYmopO1xuICAgIH1cblxuICAgIC8vIENvcHkgc2V0dGluZyBmcm9tIE9BVCB0byB0ZW1wbGF0ZUNvbmZpZyBvYmplY3RcbiAgICBzdGF0aWMgc2V0VGVtcGxhdGVQcmVzZXQoYXR0ck1hcHBpbmcsIHRlbXBsYXRlT2JqKSB7XG4gICAgICAgIFtcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAndXNlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICdiZWZvcmVTZXRWYWx1ZScsXG4gICAgICAgICAgICAnYWZ0ZXJTZXRWYWx1ZScsXG4gICAgICAgICAgICAncmVzb2x2ZUZsZXhpYmxlT2JqZWN0QXJyYXlDb25maWcnLFxuICAgICAgICAgICAgJ21heENob2ljZXMnLFxuICAgICAgICAgICAgJ2V4cGFuZE9wdGlvbnMnLFxuICAgICAgICAgICAgJ29wdGlvbnMnLFxuICAgICAgICAgICAgJ2hpbnRzJyxcbiAgICAgICAgICAgICdoaWRlJyxcbiAgICAgICAgICAgICdodG1sJyxcbiAgICAgICAgICAgICdyZW5kZXJUeXBlJyxcbiAgICAgICAgICAgICdhcnJheVR5cGUnLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICAgICAnbWF0RXh0cmEnLFxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgICAgICAgIGlmIChhdHRyTWFwcGluZy5mb3JtRmFjdG9yeSAmJiBlYWNoIGluIGF0dHJNYXBwaW5nLmZvcm1GYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVPYmpbZWFjaF0gPSBhdHRyTWFwcGluZy5mb3JtRmFjdG9yeVtlYWNoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGVtcGxhdGVPYmouZGlDb250YWluZXIgPSBOZzJGb3JtRmFjdG9yeS5kaUNvbnRhaW5lcjtcbiAgICB9XG59XG4iXX0=