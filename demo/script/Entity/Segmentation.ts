import { HttpClient, HttpHeaders } from "@angular/common/http";

import {
    FormConfig,
    MultiOptions,
    SetupConfig,
    FlexibleObjectArray,
    ObjectOptions,
    AutocompleteOptions
} from '../../../src/index';
import { Observable } from 'rxjs';
import { Observer } from "rxjs/Observer";
import { FormControl } from "@angular/forms";
import { MySelectizeComponent } from "../MySelectizeComponent";

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
    @AutocompleteOptions({
        renderType: 'custom',
        useComponent: MySelectizeComponent
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
    @SetupConfig()
    @ObjectOptions({
        onCreate: (childrenTemplate, diContainer: Map<string, any>) => {
            childrenTemplate.columnName.selectOptionsObservables = Observable.create((observer: Observer<any>) => {
                let url = '';

                const typeControl: FormControl = childrenTemplate.columnType.control;
                typeControl.valueChanges.subscribe((value) => {
                    switch (value) {
                        case 'CATEGORY':
                            url = '/v1/categories';

                            break;

                        case 'TAG':
                            url = '/v1/tags';

                            break;
                    }

                    const httpClient = <HttpClient>diContainer.get('httpClient');

                    httpClient
                        .get(
                        )
                        .subscribe((value: any) => {
                            let result = [];

                            value.data.forEach((each) => {
                                result.push({
                                    label: each.name,
                                    value: each.id
                                });
                            });

                            observer.next(result);
                        });
                });

                setTimeout(() => {
                    typeControl.setValue(
                        typeControl.value
                    );
                }, 100);
            });
        }
    })
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