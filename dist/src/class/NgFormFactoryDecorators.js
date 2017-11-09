export * from './decorators/FormConfig';
export * from './decorators/ArrayOptions';
export * from './decorators/ObjectOptions';
export * from './decorators/AutocompleteOptions';
export * from './decorators/ChoiceOptions';
export * from './decorators/MultipleChoicesOptions';
export * from './decorators/HTMLSetting';
export * from './decorators/FlexibleObjectArray';
export * from './decorators/MatExtraOptions';
import { FormConfigSymbol } from './decorators/FormConfig';
import { ArrayOptionsSymbol } from './decorators/ArrayOptions';
import { ObjectOptionsSymbol } from './decorators/ObjectOptions';
import { AutocompleteSymbol } from './decorators/AutocompleteOptions';
import { ChoiceOptionsSymbol } from './decorators/ChoiceOptions';
import { MultipleChoicesOptionsSymbol } from './decorators/MultipleChoicesOptions';
import { HTMLSettingSymbol } from "./decorators/HTMLSetting";
import { FlexibleObjectArraySymbol } from "./decorators/FlexibleObjectArray";
import { MatExtraOptionsSymbol } from "./decorators/MatExtraOptions";
import { OnOATResolved } from "hb-ng-sdk";
export function SetupConfig() {
    return OnOATResolved(function (target, key, resolved) {
        if (!resolved.formFactory) {
            resolved.formFactory = {};
            [
                FormConfigSymbol,
                ArrayOptionsSymbol,
                ObjectOptionsSymbol,
                ChoiceOptionsSymbol,
                MultipleChoicesOptionsSymbol,
                HTMLSettingSymbol,
                FlexibleObjectArraySymbol,
                AutocompleteSymbol,
                MatExtraOptionsSymbol
            ].forEach(function (eachSymbol) {
                var getMetadataArgs = [eachSymbol, target];
                if (key) {
                    getMetadataArgs.push(key);
                }
                if (Reflect.hasMetadata.apply(Reflect, getMetadataArgs)) {
                    resolved.formFactory = Object.assign({}, resolved.formFactory, Reflect.getMetadata.apply(Reflect, getMetadataArgs));
                }
            });
        }
    });
}
//# sourceMappingURL=NgFormFactoryDecorators.js.map