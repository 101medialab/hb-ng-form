import { FormControl, Validators } from '@angular/forms';

import {
    SetupConfig,
    FormConfig,
    MultipleChoicesOptions
} from '../../../src';
import { ChoiceOptions } from "../../../hb-ng-form/src/lib/class/decorators/ChoiceOptions";
import { OptionWrapper } from "../../../hb-ng-form/src/lib/class/decorators/MultipleChoicesOptions";

export class DataPayload {
    @SetupConfig()
    @FormConfig({
        validators: (diContainer: Map<string, any>) => {
            return [
                Validators.pattern('.*(' +
                    diContainer.get('domainStatus').getCurrentEnvironment().systemName
                + '\.com).*')
            ];
        },
        hints: (diContainer: Map<string, any>) => {
            return 'Any ' + diContainer.get('domainStatus').getCurrentEnvironment().systemName.toUpperCase() + ' Link'
        }
    })
    link: string = '';
}

export class Criteria {
    @SetupConfig()
    @MultipleChoicesOptions({
        hints: 'Select at least 1',
        options: (diContainer: Map<string, any>) => {
            let result: Array<OptionWrapper> = [];

            diContainer.get('domainStatus').getCurrentRegion().channels.forEach((each) => {
                result.push(
                    new OptionWrapper({
                        name: each.channelName,
                        value: each.id
                    })
                );
            });

            return result;
        },
    })
    channels: Array<string> = [];
}

export class Notification {
    @SetupConfig()
    @FormConfig({
        hide: true
    })
    id: string = '';

    @SetupConfig()
    @FormConfig({
        hide: true
    })
    systemName: string = '';

    @SetupConfig()
    @FormConfig({
        hide: true
    })
    regionName: string = '';

    @SetupConfig()
    @FormConfig({
        hide: true
    })
    status: 'DRAFT' | 'PENDING' | 'CANCELLED' = 'DRAFT';

    title: string = null;

    @SetupConfig()
    @FormConfig({
        label: 'Message Text',
        renderType: 'textarea'
    })
    body: string = '';

    criteria: Criteria = new Criteria();

    @SetupConfig()
    @FormConfig({
        label: ''
    })
    dataPayload: DataPayload = new DataPayload();

    @SetupConfig()
    @FormConfig({
        label: ''
    })
    timeToLive: Number = 1800;

    // badge: boolean = null;
    // icon: string = null;
    // color: string = null;
    // sound: string = null;

    // createBy: string = '';
    // createTime: string = '';
    scheduleTime: Date = new Date();

    @SetupConfig()
    @ChoiceOptions({
        options: () => {
            let result: Array<{
                name: string,
                value: any,
            }> = [];

            let init = -12;
            while (init <= 14) {
                let abs = Math.abs(init);

                let hourToString = (init > 0 ? '+' : '-') + (abs < 10 ? '0' : '') + abs.toString(),
                    timezone = {
                        name: hourToString + ':00',
                        value: hourToString
                    };

                result.push(timezone);

                init++;
            }

            return result;
        }
    })
    startingTimezone: Number = 0;

    // userEstimate: Number = 0;
    // userSent: Number = 0;
    // deviceSent: Number = 0;
}
