import { HttpClient } from "@angular/common/http";

import {
    FormConfig,
    ChoiceOptions,
    SetupConfig,
    FlexibleObjectArray,
    ObjectOptions
} from '../../../src/index';
import { Observable } from 'rxjs';
import { Observer } from "rxjs/Observer";
import { FormControl } from "@angular/forms";
import { MySelectizeComponent } from "../MySelectizeComponent";
import { ArrayOptions } from "../../../src/class/decorators/ArrayOptions";

export class LeafNodeCondition {
    @SetupConfig()
    @ChoiceOptions({
        options: () => [{
            name: 'Category',
            value: 'CATEGORY'
        }, {
            name: 'Tag',
            value: 'TAG'
        }],
        label: ''
    })
    columnType: 'CATEGORY' | 'TAG' = 'CATEGORY';

    @SetupConfig()
    @FormConfig({
        label: 'Name',
        useComponent: MySelectizeComponent
    })
    columnName: string = '';

    @SetupConfig()
    @ChoiceOptions({
        options: () => [{
            name: '≥',
            value: 'GREATER_THAN'
        }, {
            name: '≤',
            value: 'LESS_THAN'
        }],
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
    @FormConfig({
        hideHeader: true
    })
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
                            ''
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

@SetupConfig()
@FormConfig({
    label: '',
    html: {
        classAttr: 'mat-card'
    }
})
export class GroupNode {
    @SetupConfig()
    @ChoiceOptions({
        options: () => [{
            name: 'And',
            value: 'AND'
        }, {
            name: 'Or',
            value: 'OR'
        }],
        label: 'Condition group: '
    })
    type: 'AND' | 'OR' = 'AND';

    @SetupConfig()
    @FlexibleObjectArray({
        label: '',
        objectDefinitions: [{
            label: 'Condition',
            structure: LeafNode
        }, {
            label: 'Group',
            structure: GroupNode
        }],
        expandOptions: true,
        beforeSetValue: (rawValue) => {
            return rawValue.type === 'LEAF' ? 0 : 1
        }
    })
    @ArrayOptions({
        onPush: (childrenTemplate) => {
            if (childrenTemplate.flexibleObjectTypeName === 'Group') {
                childrenTemplate.children.children.add();
            }
        }
    })
    @FormConfig({
        html: {
            classAttr: 'mat-elevation-z'
        }
    })
    children: Array<LeafNode | GroupNode> = [];
}

export default class Segmentation {
    @SetupConfig()
    @FormConfig({
        label: 'Segmentation Name',
    })
    name: string = '';

    @SetupConfig()
    @FormConfig({
        renderType: 'textarea'
    })
    description: string = '';

    profile: GroupNode = new GroupNode();

    @SetupConfig()
    @FormConfig({
        label: 'Only subscribed (if any)'
    })
    subscriptions: string = '';

    isSendNow: boolean = true;
}