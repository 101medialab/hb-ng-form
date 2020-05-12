/**
 *  Reminder: For all decorators' identifiers we use Symbol, so you MUST import annotations from compiled `hb-ng-sdk`
 *  Symbol is unique and you can get the same one ONLY from where it creates. Importing from src means you imported are wrong one
 */
import 'reflect-metadata';
import 'jest';
import {describe, expect, it} from '@jest/globals';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Ng2FormFactory as Factory } from './Ng2FormFactory';
import { SetupConfig } from './NgFormFactoryDecorators';
import { FlexibleObjectArray } from "./decorators/FlexibleObjectArray";
import { MultipleChoicesOptions, OptionWrapper } from "./decorators/MultipleChoicesOptions";
import {
    NonPrimitiveTypeMeta,
    ObjectAttributeTypeExtractor as Extractor,
    OnOATResolved
} from "../ObjectAttributeTypeExtractor";

import { expectedMapping } from "../ObjectAttributeTypeExtractor.spec";
import { FormConfig } from "./decorators/FormConfig";

describe('ObjectAttributeTypeExtractor.generateMapping - Extract', () => {
    it('should support callback on config resolved. Example usage: Decorator', () => {
        const decorator = 'DemoDecorator';

        @SetupConfig()
        @FormConfig({
            html: {
                classAttr: 'a-class'
            }
        })
        class DecoratorDemo {
            @SetupConfig()
            @FormConfig({
                label: 'This is a attribute',
                defaultValue: 99
            })
            @Reflect.metadata(decorator, 'demo decorator value')
            attr: string = null;
            inner: Array<InsideObjectArrayDecoratorDemo> = [new InsideObjectArrayDecoratorDemo()]
        }

        class InsideObjectArrayDecoratorDemo {
            @OnOATResolved((target, key, resolved) => {
                resolved.anythingYouWantToAdd = 'this attribute is actually type of number';
            })
            innerAttr: string = '';
        }

        expect(
            JSON.parse(JSON.stringify(
                Extractor.generateMapping(
                    new DecoratorDemo(), {
                        onResolved: (target, key, resolved) => {
                            resolved.decorators = {};

                            let getMetadataArgs = [decorator, target];

                            if (key) {
                                getMetadataArgs.push(key);
                            }

                            const decoratorValue = Reflect.getMetadata.apply(Reflect, getMetadataArgs);

                            if (decoratorValue) {
                                resolved.decorators[decorator] = decoratorValue;
                            }
                        }
                    }
                )
            ))
        ).toMatchObject(
            JSON.parse(JSON.stringify(
                {
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
                }
            ))
        );
    });
});

describe('Ng2FormFactory.generateFormGroupByOATMapping', () => {
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

    it('should handle enum array initial value setting', () => {
        class EnumArrayDemo {
            @SetupConfig()
            @MultipleChoicesOptions({
                options: () => {
                    let result: Array<OptionWrapper> = [];

                    [
                        {
                            "id": 1,
                            "name": "Murthwaite"
                        }, {
                            "id": 2,
                            "name": "D'Alessandro"
                        }, {
                            "id": 3,
                            "name": "Fibbings"
                        }, {
                            "id": 4,
                            "name": "Burras"
                        }, {
                            "id": 5,
                            "name": "Mathouse"
                        }, {
                            "id": 6,
                            "name": "Unwins"
                        }, {
                            "id": 7,
                            "name": "McArthur"
                        }, {
                            "id": 8,
                            "name": "Langtree"
                        }, {
                            "id": 9,
                            "name": "Discombe"
                        }, {
                            "id": 10,
                            "name": "Kindleysides"
                        }
                    ].forEach((each) => {
                        result.push(
                            new OptionWrapper({
                                name: each.name,
                                value: each.id
                            })
                        );
                    });

                    return result;
                },
            })
            subscriptions: Array<string> = [];
        }

        let expected = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            Extractor.generateMapping(
                new EnumArrayDemo()
            )
        );

        const form = new FormGroup(expected.ngFormControl);

        expected.templateConfig.children.setValue({
            subscriptions: ['2', '5']
        });

        expect(
            expected.templateConfig.children.subscriptions.children.length
        ).toEqual(2);

        expect(
            form.value
        ).toMatchObject({
            subscriptions: ['2', '5']
        });
    });

    it('should generate Angular form object and HBForm compatible template object from ObjectAttributeTypeExtractor mapping for a mixed renderType object with nested object array', () => {
        let expected = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            expectedMapping
        );

        new FormGroup(expected.ngFormControl);

        expected.templateConfig.children.primitiveArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.children[0].objectArrayAttributeName.add();
        // expected.templateConfig.objectArrayAttributeName.children[0].primitiveArrayAttributeName.add();

        expect(
            expected.templateConfig
        ).toMatchObject({
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

    it('should generate form for Mixed type Array', () => {
        class A {
            name: string = '';
        }

        class B {
            @SetupConfig()
            @FormConfig({
                defaultValue: ''
            })
            phoneNo: number = null;
        }

        class DecoratorDemo {
            @SetupConfig()
            @FlexibleObjectArray({
                objectDefinitions: [{
                    label: 'Type A',
                    structure: A
                }, {
                    label: 'Type B',
                    structure: B
                }],
                resolveFlexibleObjectArrayConfig: (raw) => 'name' in raw ? 0 : 1
            })
            mixedArray: Array<A|B> = [];
        }

        let expected = Factory.generateFormGroupByOATMapping(
            new FormBuilder(),
            Extractor.generateMapping(
                new DecoratorDemo()
            )
        );

        new FormGroup(expected.ngFormControl);

        expected.templateConfig.children.setValue({
            mixedArray: [{
                name: 'Yo'
            }, {
                phoneNo: '99999999'
            }]
        });

        expected.templateConfig.children.mixedArray.useConfig = 1;
        expected.templateConfig.children.mixedArray.add();

        expected.templateConfig.children.mixedArray.useConfig = 0;
        expected.templateConfig.children.mixedArray.add();

        expect(
            expected.templateConfig.children.mixedArray.children
        ).toMatchObject([{
            children: {
                "name": {
                    "label": "Name",
                    "renderType": "text",
                    "type": "string"
                }
            },
        }, {
            children: {
                "phoneNo": {
                    "label": "Phone No",
                    "renderType": "text",
                    "type": "string"
                }
            },
        }, {
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
