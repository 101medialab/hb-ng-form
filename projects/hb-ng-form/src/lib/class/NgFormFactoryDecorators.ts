import { OnOATResolved } from "../ObjectAttributeTypeExtractor";

import { FormConfigSymbol } from './decorators/FormConfig';
import { ArrayOptionsSymbol } from './decorators/ArrayOptions';
import { ObjectOptionsSymbol } from './decorators/ObjectOptions';
import { AutocompleteSymbol } from './decorators/AutocompleteOptions';
import { ChoiceOptionsSymbol } from './decorators/ChoiceOptions';
import { MultipleChoicesOptionsSymbol } from './decorators/MultipleChoicesOptions';
import { FlexibleObjectArraySymbol } from "./decorators/FlexibleObjectArray";
import { MatExtraOptionsSymbol } from "./decorators/MatExtraOptions";

export function onOATResolved(target, key, resolved) {
    if (!resolved.formFactory) {
        resolved.formFactory = {};
        [
            FormConfigSymbol,
            ArrayOptionsSymbol,
            ObjectOptionsSymbol,
            ChoiceOptionsSymbol,
            MultipleChoicesOptionsSymbol,
            FlexibleObjectArraySymbol,
            AutocompleteSymbol,
            MatExtraOptionsSymbol
        ].forEach((eachSymbol) => {
            let getMetadataArgs = [eachSymbol, target];

            if (key) {
                getMetadataArgs.push(key);
            }

            if (
                Reflect.hasMetadata.apply(Reflect, getMetadataArgs)
            ) {
                resolved.formFactory = Object.assign({},
                    resolved.formFactory,
                    Reflect.getMetadata.apply(Reflect, getMetadataArgs)
                );
            }
        });
    }
}

export function SetupConfig() {
    return OnOATResolved(onOATResolved);
}
