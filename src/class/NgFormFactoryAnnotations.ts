export * from './decorators/FormConfig';
export * from './decorators/ArrayOptions';
export * from './decorators/ObjectOptions';
export * from './decorators/AutocompleteOptions';
export * from './decorators/MultiOptions';
export * from './decorators/HTMLSetting';
export * from './decorators/FlexibleObjectArray';

import { FormConfigSymbol } from './decorators/FormConfig';
import { ArrayOptionsSymbol } from './decorators/ArrayOptions';
import { ObjectOptionsSymbol } from './decorators/ObjectOptions';
import { AutocompleteSymbol } from './decorators/AutocompleteOptions';
import { MultiOptionsSymbol } from './decorators/MultiOptions';
import { HTMLSettingSymbol } from "./decorators/HTMLSetting";
import { FlexibleObjectArraySymbol } from "./decorators/FlexibleObjectArray";
import { OnOATResolved } from "hb-ng2-sdk";

export function SetupConfig() {
    return OnOATResolved((target, key, resolved) => {
        if (!resolved.formFactory) {
            resolved.formFactory = {};
        }

        [
            FormConfigSymbol,
            ArrayOptionsSymbol,
            ObjectOptionsSymbol,
            MultiOptionsSymbol,
            HTMLSettingSymbol,
            FlexibleObjectArraySymbol,
            AutocompleteSymbol
        ].forEach((eachSymbol) => {
            if (Reflect.hasMetadata(eachSymbol, target, key)) {
                resolved.formFactory = Object.assign({},
                    resolved.formFactory,
                    Reflect.getMetadata(eachSymbol, target, key)
                );
            }
        });
    });
}