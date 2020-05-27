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
}
export function SetupConfig() {
    return OnOATResolved(onOATResolved);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdGb3JtRmFjdG9yeURlY29yYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYi1uZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2NsYXNzL05nRm9ybUZhY3RvcnlEZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUTtJQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUN2QixRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUMxQjtZQUNJLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFDNUIseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixxQkFBcUI7U0FDeEIsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO1lBQ2pCLElBQUksZUFBZSxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTNDLElBQUksR0FBRyxFQUFFO2dCQUNMLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxJQUNJLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDckQ7Z0JBQ0UsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDbkMsUUFBUSxDQUFDLFdBQVcsRUFDcEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUN0RCxDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3ZCLE9BQU8sYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbk9BVFJlc29sdmVkIH0gZnJvbSBcIi4uL09iamVjdEF0dHJpYnV0ZVR5cGVFeHRyYWN0b3JcIjtcblxuaW1wb3J0IHsgRm9ybUNvbmZpZ1N5bWJvbCB9IGZyb20gJy4vZGVjb3JhdG9ycy9Gb3JtQ29uZmlnJztcbmltcG9ydCB7IEFycmF5T3B0aW9uc1N5bWJvbCB9IGZyb20gJy4vZGVjb3JhdG9ycy9BcnJheU9wdGlvbnMnO1xuaW1wb3J0IHsgT2JqZWN0T3B0aW9uc1N5bWJvbCB9IGZyb20gJy4vZGVjb3JhdG9ycy9PYmplY3RPcHRpb25zJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVN5bWJvbCB9IGZyb20gJy4vZGVjb3JhdG9ycy9BdXRvY29tcGxldGVPcHRpb25zJztcbmltcG9ydCB7IENob2ljZU9wdGlvbnNTeW1ib2wgfSBmcm9tICcuL2RlY29yYXRvcnMvQ2hvaWNlT3B0aW9ucyc7XG5pbXBvcnQgeyBNdWx0aXBsZUNob2ljZXNPcHRpb25zU3ltYm9sIH0gZnJvbSAnLi9kZWNvcmF0b3JzL011bHRpcGxlQ2hvaWNlc09wdGlvbnMnO1xuaW1wb3J0IHsgRmxleGlibGVPYmplY3RBcnJheVN5bWJvbCB9IGZyb20gXCIuL2RlY29yYXRvcnMvRmxleGlibGVPYmplY3RBcnJheVwiO1xuaW1wb3J0IHsgTWF0RXh0cmFPcHRpb25zU3ltYm9sIH0gZnJvbSBcIi4vZGVjb3JhdG9ycy9NYXRFeHRyYU9wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uT0FUUmVzb2x2ZWQodGFyZ2V0LCBrZXksIHJlc29sdmVkKSB7XG4gICAgaWYgKCFyZXNvbHZlZC5mb3JtRmFjdG9yeSkge1xuICAgICAgICByZXNvbHZlZC5mb3JtRmFjdG9yeSA9IHt9O1xuICAgICAgICBbXG4gICAgICAgICAgICBGb3JtQ29uZmlnU3ltYm9sLFxuICAgICAgICAgICAgQXJyYXlPcHRpb25zU3ltYm9sLFxuICAgICAgICAgICAgT2JqZWN0T3B0aW9uc1N5bWJvbCxcbiAgICAgICAgICAgIENob2ljZU9wdGlvbnNTeW1ib2wsXG4gICAgICAgICAgICBNdWx0aXBsZUNob2ljZXNPcHRpb25zU3ltYm9sLFxuICAgICAgICAgICAgRmxleGlibGVPYmplY3RBcnJheVN5bWJvbCxcbiAgICAgICAgICAgIEF1dG9jb21wbGV0ZVN5bWJvbCxcbiAgICAgICAgICAgIE1hdEV4dHJhT3B0aW9uc1N5bWJvbFxuICAgICAgICBdLmZvckVhY2goKGVhY2hTeW1ib2wpID0+IHtcbiAgICAgICAgICAgIGxldCBnZXRNZXRhZGF0YUFyZ3MgPSBbZWFjaFN5bWJvbCwgdGFyZ2V0XTtcblxuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGdldE1ldGFkYXRhQXJncy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBSZWZsZWN0Lmhhc01ldGFkYXRhLmFwcGx5KFJlZmxlY3QsIGdldE1ldGFkYXRhQXJncylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkLmZvcm1GYWN0b3J5ID0gT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQuZm9ybUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIFJlZmxlY3QuZ2V0TWV0YWRhdGEuYXBwbHkoUmVmbGVjdCwgZ2V0TWV0YWRhdGFBcmdzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNldHVwQ29uZmlnKCkge1xuICAgIHJldHVybiBPbk9BVFJlc29sdmVkKG9uT0FUUmVzb2x2ZWQpO1xufVxuIl19