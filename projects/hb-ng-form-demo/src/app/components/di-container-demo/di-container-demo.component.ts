import { Component } from '@angular/core';
import { Ng2FormFactory as Factory } from "hb-ng-form";
import { BaseFormDemoComponent } from "../../reusable/class/BaseFormDemoComponent";

class MyForm {

}

@Component({
    selector: 'app-di-container-demo',
    templateUrl: './di-container-demo.component.html',
    styleUrls: ['./di-container-demo.component.scss']
})
export class DiContainerDemoComponent extends BaseFormDemoComponent<MyForm> {
    constructor() {
        super(MyForm, {});

        Factory.diContainer.set('domainStatus', {
            getCurrentRegion: () => {
                return {
                    channels: [{
                        "channelName": "General",
                        "defaultOptIn": true,
                        "id": "329548d3-542b-4b90-a7b3-c21969473bae",
                        "metaData": "General",
                        "needDeviceMatching": true,
                        "regionName": "en",
                        "relativeOrder": 0,
                        "systemName": "hypebeast"
                    }, {
                        "channelName": "Testing",
                        "defaultOptIn": false,
                        "id": "749f4573-cefa-49a4-8b72-dd898b38aebc",
                        "metaData": "Testing",
                        "needDeviceMatching": false,
                        "regionName": "en",
                        "relativeOrder": 0,
                        "systemName": "hypebeast"
                    }]
                }
            },
            getCurrentEnvironment: () => ({
                systemName: 'hypebeast'
            })
        });

    }

    ngOnInit(): void {
    }
}
