import { FormGroup, FormControl, FormArray, Validators, } from '@angular/forms';
import { NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor as Extractor } from "../ObjectAttributeTypeExtractor";
export * from './NgFormFactoryDecorators';
var Ng2FormFactory = /** @class */ (function () {
    function Ng2FormFactory() {
    }
    Ng2FormFactory.generateFormGroupByObject = function (formBuilder, object, resolveTypeAny, options) {
        if (resolveTypeAny === void 0) { resolveTypeAny = null; }
        if (options === void 0) { options = {}; }
        return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, Extractor.generateMapping(object, options), resolveTypeAny);
    };
    Ng2FormFactory.generateLabel = function (key) {
        var fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');
        return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    };
    Ng2FormFactory.generateFormGroupByOATMapping = function (formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
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
            // Primitive type and date
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
            // Last case: Null value => any
            else {
                resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
            }
            // If resolved is still null, set it to default
            if (!currentTemplateConfig && !resolved) {
                var validators = Ng2FormFactory.resolveFormValidators(current).validators;
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
    };
    Ng2FormFactory.resolveFormValidators = function (current) {
        var validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = [undefined, null].indexOf(current._value) === -1;
        validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
        if (valueNotEmpty && validators.length === 0)
            validators.push(Validators.required);
        return { validators: validators, valueNotEmpty: valueNotEmpty };
    };
    Ng2FormFactory.prepareAndCreateChildTemplateConfig = function (currentInput, key, formBuilder, isRaw) {
        if (isRaw === void 0) { isRaw = false; }
        var lambda = function () {
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
        return lambda;
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
        var lambda = function (rawValue) {
            var _loop_1 = function () {
                var targetTemplate = templateObject.groupType ? templateObject.children : templateObject;
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
                                return "continue";
                            // Array
                            // Remove all elements
                            while (targetTemplate[key].control.controls.length > 0) {
                                targetTemplate[key].remove(0);
                            }
                            var i_2 = 0;
                            rawValue[key].forEach(function (each) {
                                if ('resolveFlexibleObjectArrayConfig' in targetTemplate[key]) {
                                    targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
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
        return lambda;
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
    Ng2FormFactory.setTemplatePreset = function (attrMapping, templateObj) {
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
    };
    Ng2FormFactory.diContainer = new Map();
    return Ng2FormFactory;
}());
export { Ng2FormFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmcyRm9ybUZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYi1uZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2NsYXNzL05nMkZvcm1GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLDRCQUE0QixJQUFJLFNBQVMsRUFDNUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QyxjQUFjLDJCQUEyQixDQUFDO0FBRTFDO0lBQUE7SUFxWUEsQ0FBQztJQXBZVSx3Q0FBeUIsR0FBaEMsVUFDSSxXQUF3QixFQUN4QixNQUFXLEVBQ1gsY0FHUSxFQUNSLE9BQWlCO1FBSmpCLCtCQUFBLEVBQUEscUJBR1E7UUFDUix3QkFBQSxFQUFBLFlBQWlCO1FBRWpCLE9BQU8sY0FBYyxDQUFDLDZCQUE2QixDQUMvQyxXQUFXLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsY0FBYyxDQUMxRSxDQUFDO0lBQ04sQ0FBQztJQUlNLDRCQUFhLEdBQXBCLFVBQXFCLEdBQUc7UUFDcEIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVwRSxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sNENBQTZCLEdBQXBDLFVBQ0ksV0FBd0IsRUFDeEIsc0JBQTJCLEVBQUUsaUVBQWlFO0lBQzlGLGNBQWdHLEVBQ2hHLG9CQUFzRztRQUR0RywrQkFBQSxFQUFBLHFCQUFnRztRQUNoRyxxQ0FBQSxFQUFB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QyxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUTtnQkFBRSxXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUN0RTtRQUVELGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGlEQUFpRDtJQUMxQyxnQ0FBaUIsR0FBeEIsVUFBeUIsV0FBVyxFQUFFLFdBQVc7UUFDN0M7WUFDSSxPQUFPO1lBQ1AsTUFBTTtZQUNOLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtDQUFrQztZQUNsQyxZQUFZO1lBQ1osZUFBZTtZQUNmLFNBQVM7WUFDVCxPQUFPO1lBQ1AsTUFBTTtZQUNOLE1BQU07WUFDTixZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7WUFDZCxVQUFVO1NBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3BCLElBQUksV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRTtnQkFDNUQsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN6RCxDQUFDO0lBclhNLDBCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXNYbkMscUJBQUM7Q0FBQSxBQXJZRCxJQXFZQztTQXJZWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBGb3JtQnVpbGRlcixcbiAgICBGb3JtR3JvdXAsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybUFycmF5LFxuICAgIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gICAgTm9uUHJpbWl0aXZlVHlwZU1ldGEsXG4gICAgT2JqZWN0QXR0cmlidXRlVHlwZUV4dHJhY3RvciBhcyBFeHRyYWN0b3Jcbn0gZnJvbSBcIi4uL09iamVjdEF0dHJpYnV0ZVR5cGVFeHRyYWN0b3JcIjtcblxuZXhwb3J0ICogZnJvbSAnLi9OZ0Zvcm1GYWN0b3J5RGVjb3JhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBOZzJGb3JtRmFjdG9yeSB7XG4gICAgc3RhdGljIGdlbmVyYXRlRm9ybUdyb3VwQnlPYmplY3QoXG4gICAgICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgb2JqZWN0OiBhbnksXG4gICAgICAgIHJlc29sdmVUeXBlQW55OiAoKSA9PiB7XG4gICAgICAgICAgICBuZ0Zvcm1Db250cm9sOiBhbnksXG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZzogYW55XG4gICAgICAgIH0gPSBudWxsLFxuICAgICAgICBvcHRpb25zOiBhbnkgPSB7fVxuICAgICkge1xuICAgICAgICByZXR1cm4gTmcyRm9ybUZhY3RvcnkuZ2VuZXJhdGVGb3JtR3JvdXBCeU9BVE1hcHBpbmcoXG4gICAgICAgICAgICBmb3JtQnVpbGRlciwgRXh0cmFjdG9yLmdlbmVyYXRlTWFwcGluZyhvYmplY3QsIG9wdGlvbnMpLCByZXNvbHZlVHlwZUFueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaUNvbnRhaW5lciA9IG5ldyBNYXAoKTtcblxuICAgIHN0YXRpYyBnZW5lcmF0ZUxhYmVsKGtleSkge1xuICAgICAgICBjb25zdCBmaXhlZEtleSA9IGtleS5yZXBsYWNlKC8oW0EtWl0rKS9nLCBcIiAkMVwiKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cbiAgICAgICAgcmV0dXJuIGZpeGVkS2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZml4ZWRLZXkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRm9ybUdyb3VwQnlPQVRNYXBwaW5nKFxuICAgICAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIGF0dHJpYnV0ZU1hcHBpbmdPYmplY3Q6IGFueSwgLy8gWWV0IGFsbCBhdHRyaWJ1dGVzIGluc2lkZSBzaG91bGQgYmUgdHlwZW9mIEV4dHJhY3RvclJlc3VsdFR5cGVcbiAgICAgICAgcmVzb2x2ZVR5cGVBbnk6IChhdHRyTWFwcGluZywga2V5OiBzdHJpbmcpID0+IHsgbmdGb3JtQ29udHJvbDogYW55LCB0ZW1wbGF0ZUNvbmZpZzogYW55IH0gPSBudWxsLFxuICAgICAgICByZXNvbHZlVHlwZVVuZGVmaW5lZDogKGF0dHJNYXBwaW5nLCBrZXk6IHN0cmluZykgPT4geyBuZ0Zvcm1Db250cm9sOiBhbnksIHRlbXBsYXRlQ29uZmlnOiBhbnkgfSA9IG51bGxcbiAgICApIHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge1xuICAgICAgICAgICAgbmdGb3JtQ29udHJvbDoge30sXG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZzoge30sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGlzTm9uUHJpbWl0aXZlVHlwZSA9IFsnYXJyYXknLCAnb2JqZWN0J10uaW5kZXhPZihhdHRyaWJ1dGVNYXBwaW5nT2JqZWN0Ll90eXBlKSA+IC0xO1xuICAgICAgICBsZXQgYXR0ck1hcHBpbmcgPSBpc05vblByaW1pdGl2ZVR5cGUgPyBhdHRyaWJ1dGVNYXBwaW5nT2JqZWN0Ll9tYXBwaW5nIDogYXR0cmlidXRlTWFwcGluZ09iamVjdDtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0ck1hcHBpbmcpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFNraXAgYXR0cmlidXRlcyBzaG91bGQgYmUgY29uZmlndXJhYmxlXG4gICAgICAgICAgICBpZiAoWydpZCddLmluZGV4T2Yoa2V5KSA+IC0xKSBjb250aW51ZTtcblxuICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGVtcGxhdGVDb25maWcgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBhdHRyTWFwcGluZ1trZXldO1xuXG4gICAgICAgICAgICAvLyBPYmplY3Qgb3IgQXJyYXlcbiAgICAgICAgICAgIGlmIChbJ29iamVjdCcsICdhcnJheSddLmluZGV4T2YoY3VycmVudC5fdHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Ll90eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gTmcyRm9ybUZhY3RvcnkuaGFuZGxlQXJyYXkoY3VycmVudCwga2V5LCBmb3JtQnVpbGRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBOZzJGb3JtRmFjdG9yeS5wcmVwYXJlQW5kQ3JlYXRlQ2hpbGRUZW1wbGF0ZUNvbmZpZyhjdXJyZW50LCBrZXksIGZvcm1CdWlsZGVyKSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBUeXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IGNoaWxkLm5nRm9ybUNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLm5nRm9ybUNvbnRyb2wgOiBuZXcgRm9ybUdyb3VwKGNoaWxkLm5nRm9ybUNvbnRyb2wsIE5nMkZvcm1GYWN0b3J5LnJlc29sdmVGb3JtVmFsaWRhdG9ycyhjaGlsZCkudmFsaWRhdG9ycyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGQudGVtcGxhdGVDb25maWdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmltaXRpdmUgdHlwZSBhbmQgZGF0ZVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudC5fdHlwZSAhPT0gJ2FueScpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGN1cnJlbnQuX3R5cGUgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgdmFsaWRhdG9ycywgdmFsdWVOb3RFbXB0eSB9ID0gTmcyRm9ybUZhY3RvcnkucmVzb2x2ZUZvcm1WYWxpZGF0b3JzKGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wbGF0ZUNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnQuX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sOiBuZXcgRm9ybUNvbnRyb2wodmFsdWVOb3RFbXB0eSA/IGN1cnJlbnQuX3ZhbHVlIDogJycsIHZhbGlkYXRvcnMpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlVHlwZVVuZGVmaW5lZCA/IHJlc29sdmVUeXBlVW5kZWZpbmVkKGN1cnJlbnQsIGtleSkgOiBudWxsOyAvLyBSZXNvbHZlIGFzIG51bGwgZmlyc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMYXN0IGNhc2U6IE51bGwgdmFsdWUgPT4gYW55XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVUeXBlQW55ID8gcmVzb2x2ZVR5cGVBbnkoY3VycmVudCwga2V5KSA6IG51bGw7IC8vIFJlc29sdmUgYXMgbnVsbCBmaXJzdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiByZXNvbHZlZCBpcyBzdGlsbCBudWxsLCBzZXQgaXQgdG8gZGVmYXVsdFxuICAgICAgICAgICAgaWYgKCFjdXJyZW50VGVtcGxhdGVDb25maWcgJiYgIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgdmFsaWRhdG9ycyB9ID0gTmcyRm9ybUZhY3RvcnkucmVzb2x2ZUZvcm1WYWxpZGF0b3JzKGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUeXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbCgnJywgdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGSVhNRTogdGhpcyBjaGVja2luZyBtaWdodCBiZSByZWR1bmRhbnRcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wbGF0ZUNvbmZpZyA9IHJlc29sdmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGVtcGxhdGVDb25maWcubGFiZWwgPSBOZzJGb3JtRmFjdG9yeS5nZW5lcmF0ZUxhYmVsKGtleSk7XG4gICAgICAgICAgICBjdXJyZW50VGVtcGxhdGVDb25maWcuc2V0VmFsdWUgPSBOZzJGb3JtRmFjdG9yeS5mYWN0b3J5U2V0VmFsdWVGdW5jdGlvblRvVGVtcGxhdGUoY3VycmVudFRlbXBsYXRlQ29uZmlnKTtcbiAgICAgICAgICAgIE5nMkZvcm1GYWN0b3J5LnJlc29sdmVUZW1wbGF0ZUNvbmZpZ0J5VHlwZShcbiAgICAgICAgICAgICAgICBjdXJyZW50LCBjdXJyZW50VGVtcGxhdGVDb25maWdcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5uZ0Zvcm1Db250cm9sW2tleV0gPSBjdXJyZW50VGVtcGxhdGVDb25maWcuY29udHJvbDtcbiAgICAgICAgICAgIHJlc3VsdC50ZW1wbGF0ZUNvbmZpZ1trZXldID0gY3VycmVudFRlbXBsYXRlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlQ29uZmlnLnNldFZhbHVlID0gTmcyRm9ybUZhY3RvcnkuZmFjdG9yeVNldFZhbHVlRnVuY3Rpb25Ub1RlbXBsYXRlKHJlc3VsdC50ZW1wbGF0ZUNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGlzTm9uUHJpbWl0aXZlVHlwZSkge1xuICAgICAgICAgICAgcmVzdWx0LnRlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGdyb3VwVHlwZTogYXR0cmlidXRlTWFwcGluZ09iamVjdC50eXBlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZXN1bHQudGVtcGxhdGVDb25maWdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIE5nMkZvcm1GYWN0b3J5LnNldFRlbXBsYXRlUHJlc2V0KGF0dHJpYnV0ZU1hcHBpbmdPYmplY3QsIHJlc3VsdC50ZW1wbGF0ZUNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlRm9ybVZhbGlkYXRvcnMoY3VycmVudDogYW55KSB7XG4gICAgICAgIGxldCB2YWxpZGF0b3JzID0gY3VycmVudC5mb3JtRmFjdG9yeSAmJiBjdXJyZW50LmZvcm1GYWN0b3J5LnZhbGlkYXRvcnMgPyBjdXJyZW50LmZvcm1GYWN0b3J5LnZhbGlkYXRvcnMgOiBbXSxcbiAgICAgICAgICAgIHZhbHVlTm90RW1wdHkgPSBbdW5kZWZpbmVkLCBudWxsXS5pbmRleE9mKGN1cnJlbnQuX3ZhbHVlKSA9PT0gLTE7XG5cbiAgICAgICAgdmFsaWRhdG9ycyA9IHR5cGVvZiB2YWxpZGF0b3JzID09PSAnZnVuY3Rpb24nID8gdmFsaWRhdG9ycyhOZzJGb3JtRmFjdG9yeS5kaUNvbnRhaW5lcikgOiB2YWxpZGF0b3JzO1xuXG4gICAgICAgIGlmICh2YWx1ZU5vdEVtcHR5ICYmIHZhbGlkYXRvcnMubGVuZ3RoID09PSAwKSB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cbiAgICAgICAgcmV0dXJuIHsgdmFsaWRhdG9ycywgdmFsdWVOb3RFbXB0eSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHByZXBhcmVBbmRDcmVhdGVDaGlsZFRlbXBsYXRlQ29uZmlnKFxuICAgICAgICBjdXJyZW50SW5wdXQ6IGFueSxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgaXNSYXc6Ym9vbGVhbiA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGxhbWJkYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGlzUmF3KSB7XG4gICAgICAgICAgICAgICAgLy8gTW9jayBhbiBhcnJheSB0eXBlIHdpdGggdGFyZ2V0ZWQgUHJvdG90eXBlXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG5ldyBOb25QcmltaXRpdmVUeXBlTWV0YShcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgRXh0cmFjdG9yLmdlbmVyYXRlTWFwcGluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjdXJyZW50SW5wdXQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRJbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNjaGVtYVRlbXAgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgJ3R5cGUnIGluIGN1cnJlbnQuX21hcHBpbmcgJiZcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdhbnknLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgIF0uaW5kZXhPZihjdXJyZW50Ll9tYXBwaW5nLnR5cGUpID4gLTFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIEZvciBwcmltaXRpdmUgdHlwZSBhcnJheVxuICAgICAgICAgICAgICAgIGxldCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnIGluIGN1cnJlbnQuX21hcHBpbmcgPyBjdXJyZW50Ll9tYXBwaW5nLnZhbHVlIDogJycsXG4gICAgICAgICAgICAgICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICAgICAgICAgICksIHRlbXBsYXRlQ29uZmlnID0ge307XG5cbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZ1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogTmcyRm9ybUZhY3RvcnkuZ2VuZXJhdGVMYWJlbChrZXkpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjdXJyZW50Ll9tYXBwaW5nLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHNjaGVtYVRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5nRm9ybUNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIE5nMkZvcm1GYWN0b3J5LnJlc29sdmVUZW1wbGF0ZUNvbmZpZ0J5VHlwZShcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5fbWFwcGluZywgdGVtcGxhdGVDb25maWdba2V5XVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciByZWZlcmVuY2UgdHlwZSBhcnJheSBvciBvYmplY3RcbiAgICAgICAgICAgICAgICBzY2hlbWFUZW1wID0gTmcyRm9ybUZhY3RvcnkuZ2VuZXJhdGVGb3JtR3JvdXBCeU9BVE1hcHBpbmcoZm9ybUJ1aWxkZXIsIGN1cnJlbnQuX21hcHBpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY2hlbWFUZW1wLnRlbXBsYXRlQ29uZmlnLnNldFZhbHVlID0gTmcyRm9ybUZhY3RvcnkuZmFjdG9yeVNldFZhbHVlRnVuY3Rpb25Ub1RlbXBsYXRlKHNjaGVtYVRlbXAudGVtcGxhdGVDb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoJ2Zvcm1GYWN0b3J5JyBpbiBjdXJyZW50ICYmIHR5cGVvZiBjdXJyZW50LmZvcm1GYWN0b3J5Lm9uQ3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JtRmFjdG9yeS5vbkNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hVGVtcC50ZW1wbGF0ZUNvbmZpZywgTmcyRm9ybUZhY3RvcnkuZGlDb250YWluZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5nRm9ybUNvbnRyb2w6XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVRlbXAubmdGb3JtQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IGN1cnJlbnQudHlwZSA9PT0gJ29iamVjdCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVGVtcC5uZ0Zvcm1Db250cm9sIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciByZWZlcmVuY2UgdHlwZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEZvcm1Hcm91cChzY2hlbWFUZW1wLm5nRm9ybUNvbnRyb2wsIE5nMkZvcm1GYWN0b3J5LnJlc29sdmVGb3JtVmFsaWRhdG9ycyhzY2hlbWFUZW1wKS52YWxpZGF0b3JzKSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZzogc2NoZW1hVGVtcC50ZW1wbGF0ZUNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbGFtYmRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGhhbmRsZUFycmF5KGN1cnJlbnQ6IGFueSwga2V5OiBzdHJpbmcsIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBsZXQgbmdGb3JtQXJyYXlDb250cm9sID0gbmV3IEZvcm1BcnJheShbXSwgTmcyRm9ybUZhY3RvcnkucmVzb2x2ZUZvcm1WYWxpZGF0b3JzKGN1cnJlbnQpLnZhbGlkYXRvcnMpO1xuICAgICAgICBsZXQgaW5pdENoaWxkcmVuID0gW107XG4gICAgICAgIGxldCBhcnJheVR5cGUgPSBudWxsO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICBncm91cFR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBhcnJheVR5cGU6XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JtRmFjdG9yeSAmJiBjdXJyZW50LmZvcm1GYWN0b3J5LmFycmF5VHlwZSA/XG4gICAgICAgICAgICAgICAgICAgIGFycmF5VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJyBpbiBjdXJyZW50Ll9tYXBwaW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdwcmltaXRpdmUnIDogJ29iamVjdCdcbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIGNvbnRyb2w6IG5nRm9ybUFycmF5Q29udHJvbCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGNoaWxkcmVuQ29uZmlnTmFtZTpbXSxcbiAgICAgICAgICAgIHVzZUNvbmZpZzogMCxcbiAgICAgICAgICAgIGFkZDogbnVsbCxcbiAgICAgICAgICAgIHJlbW92ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjdXJyZW50LmZvcm1GYWN0b3J5ICYmIGN1cnJlbnQuZm9ybUZhY3Rvcnkub2JqZWN0RGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnQuZm9ybUZhY3Rvcnkub2JqZWN0RGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZWFjaCkge1xuICAgICAgICAgICAgICAgIGluaXRDaGlsZHJlbltpXSA9IE5nMkZvcm1GYWN0b3J5LnByZXBhcmVBbmRDcmVhdGVDaGlsZFRlbXBsYXRlQ29uZmlnKGVhY2guc3RydWN0dXJlLCAnJywgZm9ybUJ1aWxkZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlbkNvbmZpZ05hbWVbaV0gPSBlYWNoLmxhYmVsO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5pdENoaWxkcmVuWzBdID0gTmcyRm9ybUZhY3RvcnkucHJlcGFyZUFuZENyZWF0ZUNoaWxkVGVtcGxhdGVDb25maWcoY3VycmVudCwga2V5LCBmb3JtQnVpbGRlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkQ29uZmlnID0gaW5pdENoaWxkcmVuW3Jlc3VsdC51c2VDb25maWddKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT5uZ0Zvcm1BcnJheUNvbnRyb2w7XG4gICAgICAgICAgICAgICAgY29udHJvbC5wdXNoKGNoaWxkQ29uZmlnLm5nRm9ybUNvbnRyb2wpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlbi5wdXNoKGNoaWxkQ29uZmlnLnRlbXBsYXRlQ29uZmlnKTtcblxuICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnLnRlbXBsYXRlQ29uZmlnLmZsZXhpYmxlT2JqZWN0VHlwZU5hbWUgPSByZXN1bHQuY2hpbGRyZW5Db25maWdOYW1lW3Jlc3VsdC51c2VDb25maWddO1xuXG4gICAgICAgICAgICAgICAgaWYgKCdmb3JtRmFjdG9yeScgaW4gY3VycmVudCAmJiB0eXBlb2YgY3VycmVudC5mb3JtRmFjdG9yeS5vblB1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5mb3JtRmFjdG9yeS5vblB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZy50ZW1wbGF0ZUNvbmZpZywgTmcyRm9ybUZhY3RvcnkuZGlDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24gKGk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5Pm5nRm9ybUFycmF5Q29udHJvbDtcbiAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUF0KGkpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJlc3VsdC5hZGQgPSBhZGQ7XG4gICAgICAgIHJlc3VsdC5yZW1vdmUgPSByZW1vdmU7XG5cbiAgICAgICAgLy8gTmcyRm9ybUZhY3Rvcnkuc2V0VGVtcGxhdGVQcmVzZXQoY3VycmVudCwgcmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBmYWN0b3J5U2V0VmFsdWVGdW5jdGlvblRvVGVtcGxhdGUodGVtcGxhdGVPYmplY3QpIHtcbiAgICAgICAgY29uc3QgbGFtYmRhID0gZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmF3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VGVtcGxhdGUgPSB0ZW1wbGF0ZU9iamVjdC5ncm91cFR5cGUgPyB0ZW1wbGF0ZU9iamVjdC5jaGlsZHJlbiA6IHRlbXBsYXRlT2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiB0YXJnZXRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VGVtcGxhdGVba2V5XS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJhd1ZhbHVlW2tleV0gIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZWZvcmVTZXRWYWx1ZScgaW4gdGFyZ2V0VGVtcGxhdGVba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZW1wbGF0ZVtrZXldLmJlZm9yZVNldFZhbHVlKHRhcmdldFRlbXBsYXRlW2tleV0sIHJhd1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZW1wbGF0ZVtrZXldLmNvbnRyb2wuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjYXN0IHRvIHN0cmluZyBvciBib29sZWFuIHZhbHVlIHdpbGwgYmUgYnJva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd1ZhbHVlW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJTZXRWYWx1ZScgaW4gdGFyZ2V0VGVtcGxhdGVba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZW1wbGF0ZVtrZXldLmFmdGVyU2V0VmFsdWUodGFyZ2V0VGVtcGxhdGVba2V5XSwgcmF3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJhd1ZhbHVlW2tleV0gIT0gJ3VuZGVmaW5lZCcgfHwgcmF3VmFsdWVba2V5XSAhPSBudWxsKSB7IC8vIHNraXAgaWYgcmF3VmFsdWVba2V5XSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBnb2VzIHdyb25nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VGVtcGxhdGVba2V5XS5ncm91cFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV0IEZvcm1Hcm91cCB0byBoYW5kbGUgdmFsdWUgc2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uc2V0VmFsdWUocmF3VmFsdWVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW4gdGhpcyBmaWVsZCBpcyBhcnJheSwgcmF3VmFsdWVba2V5XSBjYW4gYmUgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmF3VmFsdWVba2V5XSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGFyZ2V0VGVtcGxhdGVba2V5XS5jb250cm9sLmNvbnRyb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVtcGxhdGVba2V5XS5yZW1vdmUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3VmFsdWVba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXNvbHZlRmxleGlibGVPYmplY3RBcnJheUNvbmZpZycgaW4gdGFyZ2V0VGVtcGxhdGVba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0udXNlQ29uZmlnID0gdGFyZ2V0VGVtcGxhdGVba2V5XS5yZXNvbHZlRmxleGlibGVPYmplY3RBcnJheUNvbmZpZyhlYWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uYWRkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeEZvclByaW1pdGl2ZUFycmF5ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeEZvclByaW1pdGl2ZUFycmF5W2tleV0gPSBlYWNoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFRlbXBsYXRlW2tleV0uY2hpbGRyZW5baV0uc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZW1wbGF0ZVtrZXldLmFycmF5VHlwZSAhPT0gJ29iamVjdCcgPyBmaXhGb3JQcmltaXRpdmVBcnJheSA6IGVhY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFtYmRhO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlVGVtcGxhdGVDb25maWdCeVR5cGUoYXR0ck1hcHBpbmcsIHRlbXBsYXRlT2JqKSB7XG4gICAgICAgIGlmIChhdHRyTWFwcGluZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlT2JqLnJlbmRlclR5cGUgPSBhdHRyTWFwcGluZy5leHBhbmRPcHRpb25zID8gJ3JhZGlvJyA6ICdjaGVja2JveCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0ck1hcHBpbmcub3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKGF0dHJNYXBwaW5nLm9wdGlvbnMubGVuZ3RoID4gMiAmJiBhdHRyTWFwcGluZy5tYXhDaG9pY2VzKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVPYmoucmVuZGVyVHlwZSA9IGF0dHJNYXBwaW5nLmV4cGFuZE9wdGlvbnMgPyAoXG4gICAgICAgICAgICAgICAgICAgIGF0dHJNYXBwaW5nLm1heENob2ljZXMgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAncmFkaW8nIDogJ2NoZWNrYm94J1xuICAgICAgICAgICAgICAgICkgOiAnc2VsZWN0JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVPYmoucmVuZGVyVHlwZSA9IGF0dHJNYXBwaW5nLmV4cGFuZE9wdGlvbnMgPyAncmFkaW8nIDogJ2NoZWNrYm94JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBsYXRlT2JqLnJlbmRlclR5cGUgPSBhdHRyTWFwcGluZy50eXBlO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlT2JqLnR5cGUgPT09ICdzdHJpbmcnKSB0ZW1wbGF0ZU9iai5yZW5kZXJUeXBlID0gJ3RleHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgTmcyRm9ybUZhY3Rvcnkuc2V0VGVtcGxhdGVQcmVzZXQoYXR0ck1hcHBpbmcsIHRlbXBsYXRlT2JqKTtcbiAgICB9XG5cbiAgICAvLyBDb3B5IHNldHRpbmcgZnJvbSBPQVQgdG8gdGVtcGxhdGVDb25maWcgb2JqZWN0XG4gICAgc3RhdGljIHNldFRlbXBsYXRlUHJlc2V0KGF0dHJNYXBwaW5nLCB0ZW1wbGF0ZU9iaikge1xuICAgICAgICBbXG4gICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ3VzZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAnYmVmb3JlU2V0VmFsdWUnLFxuICAgICAgICAgICAgJ2FmdGVyU2V0VmFsdWUnLFxuICAgICAgICAgICAgJ3Jlc29sdmVGbGV4aWJsZU9iamVjdEFycmF5Q29uZmlnJyxcbiAgICAgICAgICAgICdtYXhDaG9pY2VzJyxcbiAgICAgICAgICAgICdleHBhbmRPcHRpb25zJyxcbiAgICAgICAgICAgICdvcHRpb25zJyxcbiAgICAgICAgICAgICdoaW50cycsXG4gICAgICAgICAgICAnaGlkZScsXG4gICAgICAgICAgICAnaHRtbCcsXG4gICAgICAgICAgICAncmVuZGVyVHlwZScsXG4gICAgICAgICAgICAnYXJyYXlUeXBlJyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAgICAgJ21hdEV4dHJhJyxcbiAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoKSB7XG4gICAgICAgICAgICBpZiAoYXR0ck1hcHBpbmcuZm9ybUZhY3RvcnkgJiYgZWFjaCBpbiBhdHRyTWFwcGluZy5mb3JtRmFjdG9yeSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlT2JqW2VhY2hdID0gYXR0ck1hcHBpbmcuZm9ybUZhY3RvcnlbZWFjaF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRlbXBsYXRlT2JqLmRpQ29udGFpbmVyID0gTmcyRm9ybUZhY3RvcnkuZGlDb250YWluZXI7XG4gICAgfVxufVxuIl19