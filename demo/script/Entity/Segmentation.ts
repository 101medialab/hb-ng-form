let a = {
    "name": "test1",
    "description": "description1",
    "flags": [
        "drops-flags--1243",
        "drops-flags--432"
    ],
    "profile": {
        "children": [{
            "condition": {
                "columnName": "b5ad96db-4c99-4257-9278-0fcc048abd24",
                "columnType": "CATEGORY",
                "operator": "GREATER_THAN",
                "value": 100.0
            },
            "type": "LEAF"
        }, {
            "condition": {
                "columnName": "af7ad6d1-7a1f-4352-a5a0-f42c11e92669",
                "columnType": "CATEGORY",
                "operator": "GREATER_THAN",
                "value": -1
            },
            "type": "LEAF"
        }],
        "type": "AND"
    },
    "subscriptions": [
        "fcca3134-b046-4737-b813-d29d6da33533",
        "34689234-a5a0-4352-7a1f-0fcc048abd24"
    ]
};

import {
    FormConfig, MultiOptions, SetupConfig, FlexibleObjectArray
} from '../../../src/index';

export class LeafNodeCondition {
    @SetupConfig()
    @MultiOptions({
        options: [{
            name: 'Category',
            value: 'CATEGORY'
        }, {
            name: 'Tag',
            value: 'TAG'
        }],
        renderType: 'select',
        optionsTemplate: '',
        maxChoices: 1,
        label: ''
    })
    columnType: 'CATEGORY' | 'TAG' = 'CATEGORY';

    @SetupConfig()
    @FormConfig({
        label: 'Name'
    })
    columnName: string = '';

    @SetupConfig()
    @MultiOptions({
        options: [{
            name: 'Greater than',
            value: 'GREATER_THAN'
        }, {
            name: 'Less than',
            value: 'LESS_THAN'
        }],
        renderType: 'select',
        optionsTemplate: '',
        maxChoices: 1,
        label: ''
    })
    operator: 'GREATER_THAN' | 'LESS_THAN' = 'GREATER_THAN';

    @SetupConfig()
    @FormConfig({
        'label': 'Score'
    })
    value: number = 0;
}

export class LeafNode {
    condition: LeafNodeCondition = new LeafNodeCondition();

    @SetupConfig()
    @FormConfig({
        hide: true
    })
    type: string = 'LEAF';
}

export class GroupNode {
    @SetupConfig()
    @FlexibleObjectArray({
        objectDefinitions: [{
            label: 'Condition',
            structure: LeafNode
        }, {
            label: 'Group',
            structure: GroupNode
        }],
        label: 'Conditions'
    })
    children: Array<LeafNode | GroupNode> = [];

    @SetupConfig()
    @MultiOptions({
        options: [{
            name: 'And',
            value: 'AND'
        }, {
            name: 'Or',
            value: 'OR'
        }],
        renderType: 'select',
        optionsTemplate: '',
        maxChoices: 1,
        label: ''
    })
    type: 'AND' | 'OR' = 'AND';
}

export default class Segmentation {
    @SetupConfig()
    @FormConfig({
        label: 'Segmentation Name'
    })
    name: string = '';

    @SetupConfig()
    @FormConfig({
        renderType: 'textarea'
    })
    description: string = '';

    @SetupConfig()
    @FlexibleObjectArray({
        objectDefinitions: [{
            label: 'When',
            structure: LeafNode
        }, {
            label: 'Group',
            structure: GroupNode
        }],
        label: 'Criteria'
    })
    profile: Array<LeafNode | GroupNode> = [];

    @SetupConfig()
    @FormConfig({
        label: 'Only subscribed (if any)'
    })
    subscriptions: string = '';
}