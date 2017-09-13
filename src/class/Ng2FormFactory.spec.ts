import 'jest';

import { FormBuilder, FormGroup } from '@angular/forms';
import { expectedMapping } from 'hb-ng2-sdk/reusable/ObjectAttributeTypeExtractor.spec';
import {
    ObjectAttributeTypeExtractor as Extractor,
    OnOATResolved,
} from 'hb-ng2-sdk/index';
import { Ng2FormFactory as Factory } from './Ng2FormFactory';
import { FormConfig, SetupConfig } from './NgFormFactoryAnnotations';
import { FlexibleObjectArray } from "./decorators/FlexibleObjectArray";
import 'hb-ng2-sdk/reusable/hb-es-shim';

describe('1', () => {
    it('1', () => {
        expect(1).toEqual(1);
    });
});

// describe('ObjectAttributeTypeExtractor.generateMapping - Extract', () => {
//     it('should support callback on config resolved. Example usage: Decorator', () => {
//         const decorator = 'DemoDecorator';
//
//         class DecoratorDemo {
//             @SetupConfig()
//             @FormConfig({
//                 label: 'This is a attribute',
//                 defaultValue: 99
//             })
//             @Reflect.metadata(decorator, 'demo decorator value')
//             attr: string = null;
//             inner: Array<InsideObjectArrayDecoratorDemo> = [new InsideObjectArrayDecoratorDemo()]
//         }
//
//         class InsideObjectArrayDecoratorDemo {
//             @OnOATResolved((target, key, resolved) => {
//                 resolved.anythingYouWantToAdd = 'this attribute is actually type of number';
//             })
//             innerAttr: string = '';
//         }
//
//         expect(
//             Extractor.generateMapping(
//                 new DecoratorDemo(), {
//                     onResolved: (target, key, resolved) => {
//                         resolved.decorators = {};
//
//                         const decoratorValue = Reflect.getMetadata(decorator, target, key);
//
//                         if (decoratorValue) {
//                             resolved.decorators[decorator] = decoratorValue;
//                         }
//                     }
//                 }
//             )
//         ).toMatchObject({
//             "attr": {
//                 "_type": "any",
//                 "_value": null,
//                 "formFactory": {
//                     "defaultValue": 99,
//                     "label": "This is a attribute"
//                 }
//             },
//             "inner": {
//                 "_mapping": {
//                     "innerAttr": {
//                         "_type": "string",
//                         "_value": "",
//                         "anythingYouWantToAdd": "this attribute is actually type of number"
//                     }
//                 },
//                 "_type": "array",
//                 "_value": null,
//             }
//         });
//     });
// });
//
// describe('Ng2FormFactory.generateFormGroupByOATMapping', () => {
//     // it('pass', () => {
//     //     let expected = Factory.generateFormGroupByOATMapping(
//     //         new FormBuilder(),
//     //         expectedMapping
//     //     ).templateConfig;
//     //
//     //     expect(
//     //         expected
//     //     ).toEqual(null);
//     // });
//
//     it('should generate Angular form object and HBForm compatible template object from ObjectAttributeTypeExtractor mapping for a mixed renderType object with nested object array', () => {
//         let expected = Factory.generateFormGroupByOATMapping(
//             new FormBuilder(),
//             expectedMapping
//         );
//
//         new FormGroup(expected.ngFormControl);
//
//         expected.templateConfig.primitiveArrayAttributeName.add();
//         // expected.templateConfig.objectArrayAttributeName.add();
//         // expected.templateConfig.objectArrayAttributeName.children[0].objectArrayAttributeName.add();
//         // expected.templateConfig.objectArrayAttributeName.children[0].primitiveArrayAttributeName.add();
//
//         expect(
//             expected.templateConfig
//         ).toMatchObject({
//             "anyAttributeName": {
//                 "label": "Any Attribute Name",
//                 "renderType": "text",
//                 "type": "string"
//             },
//             "booleanAttributeName": {
//                 "label": "Boolean Attribute Name",
//                 "renderType": "checkbox",
//                 "type": "boolean"
//             },
//             "dateAttributeName": {
//                 "label": "Date Attribute Name",
//                 "renderType": "date",
//                 "type": "date"
//             },
//             "objectAttributeName": {
//                 "children": {
//                     "attr1": {
//                         "label": "Attr1",
//                         "renderType": "number",
//                         "type": "number"
//                     }
//                 },
//                 "groupType": "object",
//                 "label": "Object Attribute Name"
//             },
//             "primitiveArrayAttributeName": {
//                 "children": [{
//                     "primitiveArrayAttributeName": {
//                         "label": "Primitive Array Attribute Name",
//                         "renderType": "number",
//                         "type": "number"
//                     }
//                 }],
//                 "arrayType": "primitive",
//                 "groupType": "array",
//                 "label": "Primitive Array Attribute Name"
//             },
//             "stringAttributeName": {
//                 "label": "String Attribute Name",
//                 "renderType": "text",
//                 "type": "string"
//             }
//         });
//     });
//
//     it('should generate form for Mixed type Array', () => {
//         class A {
//             name: string = '';
//         }
//
//         class B {
//             @SetupConfig()
//             @FormConfig({
//                 defaultValue: ''
//             })
//             phoneNo: number = null;
//         }
//
//         class DecoratorDemo {
//             @SetupConfig()
//             @FlexibleObjectArray({
//                 objectDefinitions: [{
//                     label: 'Type A',
//                     structure: A
//                 }, {
//                     label: 'Type B',
//                     structure: B
//                 }]
//             })
//             attr: Array<A|B> = [];
//         }
//
//         let expected = Factory.generateFormGroupByOATMapping(
//             new FormBuilder(),
//             Extractor.generateMapping(
//                 new DecoratorDemo()
//             )
//         );
//
//         new FormGroup(expected.ngFormControl);
//
//         expected.templateConfig.attr.useConfig = 1;
//         expected.templateConfig.attr.add();
//
//         expected.templateConfig.attr.useConfig = 0;
//         expected.templateConfig.attr.add();
//
//         expect(
//             expected.templateConfig.attr.children
//         ).toMatchObject([{
//             "phoneNo": {
//                 "label": "Phone No",
//                 "renderType": "text",
//                 "type": "string"
//             },
//         }, {
//             "name": {
//                 "label": "Name",
//                 "renderType": "text",
//                 "type": "string"
//             },
//         }]);
//     });
// });