/**
 *  Reminder: For all decorators' identifiers we use Symbol, so you MUST import annotations from compiled `hb-ng-sdk`
 *  Symbol is unique and you can get the same one ONLY from where it creates. Importing from src means you imported are wrong one
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'jest';
import { FormBuilder, FormGroup } from '@angular/forms';
import { expectedMapping } from 'hb-ng-sdk/reusable/ObjectAttributeTypeExtractor.spec';
import { NonPrimitiveTypeMeta, ObjectAttributeTypeExtractor as Extractor, OnOATResolved, } from 'hb-ng-sdk';
import { Ng2FormFactory as Factory } from './Ng2FormFactory';
import { FormConfig, SetupConfig } from './NgFormFactoryDecorators';
import { FlexibleObjectArray } from "./decorators/FlexibleObjectArray";
import 'hb-ng-sdk/reusable/hb-es-shim';
describe('ObjectAttributeTypeExtractor.generateMapping - Extract', function () {
    it('should support callback on config resolved. Example usage: Decorator', function () {
        var decorator = 'DemoDecorator';
        var DecoratorDemo = /** @class */ (function () {
            function DecoratorDemo() {
                this.attr = null;
                this.inner = [new InsideObjectArrayDecoratorDemo()];
            }
            __decorate([
                SetupConfig(),
                FormConfig({
                    label: 'This is a attribute',
                    defaultValue: 99
                }),
                Reflect.metadata(decorator, 'demo decorator value'),
                __metadata("design:type", String)
            ], DecoratorDemo.prototype, "attr", void 0);
            DecoratorDemo = __decorate([
                SetupConfig(),
                FormConfig({
                    html: {
                        classAttr: 'a-class'
                    }
                })
            ], DecoratorDemo);
            return DecoratorDemo;
        }());
        var InsideObjectArrayDecoratorDemo = /** @class */ (function () {
            function InsideObjectArrayDecoratorDemo() {
                this.innerAttr = '';
            }
            __decorate([
                OnOATResolved(function (target, key, resolved) {
                    resolved.anythingYouWantToAdd = 'this attribute is actually type of number';
                }),
                __metadata("design:type", String)
            ], InsideObjectArrayDecoratorDemo.prototype, "innerAttr", void 0);
            return InsideObjectArrayDecoratorDemo;
        }());
        expect(Extractor.generateMapping(new DecoratorDemo(), {
            onResolved: function (target, key, resolved) {
                resolved.decorators = {};
                var getMetadataArgs = [decorator, target];
                if (key) {
                    getMetadataArgs.push(key);
                }
                var decoratorValue = Reflect.getMetadata.apply(Reflect, getMetadataArgs);
                if (decoratorValue) {
                    resolved.decorators[decorator] = decoratorValue;
                }
            }
        })).toMatchObject({
            _type: 'object',
            _mapping: {
                "attr": {
                    "_type": "any",
                    "_value": null,
                    "formFactory": {
                        "defaultValue": 99,
                        "label": "This is a attribute"
                    }
                },
                "inner": {
                    "_mapping": new NonPrimitiveTypeMeta('object', {
                        "innerAttr": {
                            "_type": "string",
                            "_value": "",
                            "anythingYouWantToAdd": "this attribute is actually type of number"
                        }
                    }),
                    "_type": "array",
                    "_value": null,
                }
            },
            formFactory: {
                "hiderHeader": false,
                "html": {
                    "classAttr": "a-class"
                }
            }
        });
    });
});
describe('Ng2FormFactory.generateFormGroupByOATMapping', function () {
    // it('pass', () => {
    //     let expected = Factory.generateFormGroupByOATMapping(
    //         new FormBuilder(),
    //         expectedMapping
    //     ).templateConfig;
    //
    //     expect(
    //         expected
    //     ).toEqual(null);
    // });
    it('should generate Angular form object and HBForm compatible template object from ObjectAttributeTypeExtractor mapping for a mixed renderType object with nested object array', function () {
        var expected = Factory.generateFormGroupByOATMapping(new FormBuilder(), expectedMapping);
        new FormGroup(expected.ngFormControl);
        expected.templateConfig.children.primitiveArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.children[0].objectArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.children[0].primitiveArrayAttributeName.add();
        expect(expected.templateConfig).toMatchObject({
            "groupType": "object",
            "children": {
                "anyAttributeName": {
                    "label": "Any Attribute Name",
                    "renderType": "text",
                    "type": "string"
                },
                "booleanAttributeName": {
                    "label": "Boolean Attribute Name",
                    "renderType": "checkbox",
                    "type": "boolean"
                },
                "dateAttributeName": {
                    "label": "Date Attribute Name",
                    "renderType": "date",
                    "type": "date"
                },
                "objectAttributeName": {
                    "children": {
                        "attr1": {
                            "label": "Attr1",
                            "renderType": "number",
                            "type": "number"
                        }
                    },
                    "groupType": "object",
                    "label": "Object Attribute Name"
                },
                "primitiveArrayAttributeName": {
                    "children": [{
                            "primitiveArrayAttributeName": {
                                "label": "Primitive Array Attribute Name",
                                "renderType": "number",
                                "type": "number"
                            }
                        }],
                    "arrayType": "primitive",
                    "groupType": "array",
                    "label": "Primitive Array Attribute Name"
                },
                "stringAttributeName": {
                    "label": "String Attribute Name",
                    "renderType": "text",
                    "type": "string"
                }
            }
        });
    });
    it('should generate form for Mixed type Array', function () {
        var A = /** @class */ (function () {
            function A() {
                this.name = '';
            }
            return A;
        }());
        var B = /** @class */ (function () {
            function B() {
                this.phoneNo = null;
            }
            __decorate([
                SetupConfig(),
                FormConfig({
                    defaultValue: ''
                }),
                __metadata("design:type", Number)
            ], B.prototype, "phoneNo", void 0);
            return B;
        }());
        var DecoratorDemo = /** @class */ (function () {
            function DecoratorDemo() {
                this.attr = [];
            }
            __decorate([
                SetupConfig(),
                FlexibleObjectArray({
                    objectDefinitions: [{
                            label: 'Type A',
                            structure: A
                        }, {
                            label: 'Type B',
                            structure: B
                        }]
                }),
                __metadata("design:type", Array)
            ], DecoratorDemo.prototype, "attr", void 0);
            return DecoratorDemo;
        }());
        var expected = Factory.generateFormGroupByOATMapping(new FormBuilder(), Extractor.generateMapping(new DecoratorDemo()));
        new FormGroup(expected.ngFormControl);
        expected.templateConfig.children.attr.useConfig = 1;
        expected.templateConfig.children.attr.add();
        expected.templateConfig.children.attr.useConfig = 0;
        expected.templateConfig.children.attr.add();
        expect(expected.templateConfig.children.attr.children).toMatchObject([{
                children: {
                    "phoneNo": {
                        "label": "Phone No",
                        "renderType": "text",
                        "type": "string"
                    }
                },
            }, {
                children: {
                    "name": {
                        "label": "Name",
                        "renderType": "text",
                        "type": "string"
                    }
                },
            }]);
    });
});
//# sourceMappingURL=Ng2FormFactory.spec.js.map