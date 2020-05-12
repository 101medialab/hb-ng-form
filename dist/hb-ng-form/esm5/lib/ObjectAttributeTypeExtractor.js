import { __extends } from "tslib";
var TypeMeta = /** @class */ (function () {
    function TypeMeta(_type) {
        this._type = _type;
    }
    Object.defineProperty(TypeMeta.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return TypeMeta;
}());
export { TypeMeta };
var PrimitiveTypeMeta = /** @class */ (function (_super) {
    __extends(PrimitiveTypeMeta, _super);
    function PrimitiveTypeMeta(_value) {
        var _this = _super.call(this, ([
            'string',
            'number',
            'boolean'
        ].indexOf(typeof _value) > -1 ? typeof _value : 'any')) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(PrimitiveTypeMeta.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return PrimitiveTypeMeta;
}(TypeMeta));
export { PrimitiveTypeMeta };
var NonPrimitiveTypeMeta = /** @class */ (function (_super) {
    __extends(NonPrimitiveTypeMeta, _super);
    function NonPrimitiveTypeMeta(type, _mapping, // All attributes should be type of ExtractorResultType
    _value) {
        if (_mapping === void 0) { _mapping = null; }
        if (_value === void 0) { _value = null; }
        var _this = _super.call(this, type) || this;
        _this._mapping = _mapping;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(NonPrimitiveTypeMeta.prototype, "mapping", {
        get: function () {
            return this._mapping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonPrimitiveTypeMeta.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return NonPrimitiveTypeMeta;
}(TypeMeta));
export { NonPrimitiveTypeMeta };
var OnOATResolvedSymbol = 'OnOATResolved';
export function OnOATResolved(cb) {
    return Reflect.metadata(OnOATResolvedSymbol, cb);
}
var ObjectAttributeTypeExtractor = /** @class */ (function () {
    function ObjectAttributeTypeExtractor() {
    }
    ObjectAttributeTypeExtractor.generateMapping = function (input, options) {
        if (options === void 0) { options = {}; }
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        var mapping = {};
        var result = null;
        // input is an array, analyze the first cell only
        if (input instanceof Array) {
            mapping = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(input[0], options));
        }
        else {
            // Analyze attributes inside input object
            for (var key in input) {
                if (typeof input[key] !== 'function') {
                    var resolvedMeta = {};
                    // Array or Object
                    if (typeof input[key] === 'object') {
                        resolvedMeta = Extractor.generateObjectTypeMapping(input, key, options);
                        // Any primitive type
                    }
                    else if (typeof input[key] !== 'function') {
                        resolvedMeta = new PrimitiveTypeMeta(input[key]);
                    }
                    if (Reflect.hasMetadata(OnOATResolvedSymbol, input, key)) {
                        Reflect.getMetadata(OnOATResolvedSymbol, input, key)(input, key, resolvedMeta);
                    }
                    else if (typeof options.onResolved === 'function') {
                        options.onResolved(input, key, resolvedMeta);
                    }
                    // Finished, set resolved attribute metadata to result
                    mapping[Extractor.resolveAttributeKey(options, key, input)] = resolvedMeta;
                }
            }
        }
        if (typeof input === 'object') {
            if (!(input instanceof Date) && !(input instanceof Array)) {
                result = new NonPrimitiveTypeMeta('object', mapping);
            }
            else {
                result = mapping;
            }
        }
        else {
            result = { mapping: mapping };
        }
        if (Reflect.hasMetadata(OnOATResolvedSymbol, input.constructor)) {
            Reflect.getMetadata(OnOATResolvedSymbol, input.constructor)(input.constructor, null, result);
        }
        else if (typeof options.onResolved === 'function') {
            options.onResolved(input, null, result);
        }
        return result;
    };
    ObjectAttributeTypeExtractor.generateObjectTypeMapping = function (object, key, options) {
        var resolvedMeta = null;
        // Mark type as any if value is null
        if (object[key] === null) {
            resolvedMeta = new PrimitiveTypeMeta(null);
            // For Array
        }
        else if (object[key] instanceof Array) {
            var target = object[key];
            // For Primitive Array
            if (typeof target[0] !== 'object') {
                resolvedMeta = new NonPrimitiveTypeMeta('array', new PrimitiveTypeMeta(target[0]));
                // For Object Array
            }
            else {
                resolvedMeta = Extractor.generateMapping(target, options);
            }
            // For Date
        }
        else if (object[key] instanceof Date) {
            resolvedMeta = new NonPrimitiveTypeMeta('date', null, object[key]);
            // For Object
        }
        else {
            resolvedMeta = Extractor.generateMapping(object[key], options);
        }
        return resolvedMeta;
    };
    ObjectAttributeTypeExtractor.resolveAttributeKey = function (options, key, object) {
        var setterKey = key;
        // if set function exists, rename _attr to attr
        if (options.stripUnderscore && key.charAt(0) === '_') {
            var trimmedKey = key.substr(1, key.length);
            if (trimmedKey in object) {
                setterKey = trimmedKey;
            }
        }
        // Some serializer serialize data with snake_case
        // but JS Entity Classes name attributes with camelCase
        if (options.keyNamingStrategy === 'snake_case') {
            setterKey = Extractor.convertStringToSnakeCase(setterKey);
        }
        return setterKey;
    };
    // For naming convention changing. Not really related to this extractor
    ObjectAttributeTypeExtractor.fixNamingConvention = function (data, options) {
        var result = null;
        options = Object.assign({
            keyNamingStrategy: 'camelCase',
            stripUnderscore: false
        }, options);
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.fixNamingConvention(obj, options));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (var key in data) {
                if (!options.stripUnderscore || key.charAt(0) !== '_') {
                    var finalKey = key;
                    if (options.keyNamingStrategy === 'snake_case') {
                        finalKey = Extractor.convertStringToSnakeCase(key);
                    }
                    if (typeof data[key] === 'object') {
                        result[finalKey] = Extractor.fixNamingConvention(data[key], options);
                    }
                    else {
                        result[finalKey] = data[key];
                    }
                }
            }
        }
        return result;
    };
    // For JSON editor only. Should be extracted.
    ObjectAttributeTypeExtractor.convertDataToString = function (data, callbacks) {
        if (callbacks === void 0) { callbacks = {}; }
        var result = null;
        if (data instanceof Array) {
            result = [];
            data.forEach(function (obj) {
                result.push(Extractor.convertDataToString(obj));
            });
        }
        else if (typeof data === 'object') {
            result = {};
            for (var key in data) {
                if (typeof data[key] === 'object') {
                    if (data[key] instanceof Date) {
                        result[key] =
                            'date' in callbacks &&
                                callbacks.date instanceof Function ?
                                callbacks.date(data[key]) : data[key].yyyymmdd('-');
                    }
                    else {
                        result[key] = Extractor.convertDataToString(data[key]);
                    }
                }
                else if (typeof data[key] !== 'function') {
                    result[key] = data[key];
                }
            }
        }
        return result;
    };
    ObjectAttributeTypeExtractor.convertStringToSnakeCase = function (value) {
        var result = value.replace(/([A-Z]+)/g, "_$1").toLowerCase();
        return result;
    };
    return ObjectAttributeTypeExtractor;
}());
export { ObjectAttributeTypeExtractor };
var Extractor = ObjectAttributeTypeExtractor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0QXR0cmlidXRlVHlwZUV4dHJhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvT2JqZWN0QXR0cmlidXRlVHlwZUV4dHJhY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFDSSxrQkFBc0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUFHLENBQUM7SUFFOUMsc0JBQUksMEJBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNMLGVBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDtJQUF1QyxxQ0FBUTtJQUMzQywyQkFDYyxNQUFXO1FBRHpCLFlBR0ksa0JBQ21CLENBQUM7WUFDWixRQUFRO1lBQ1IsUUFBUTtZQUNSLFNBQVM7U0FDWixDQUFDLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3pELFNBQ0o7UUFUYSxZQUFNLEdBQU4sTUFBTSxDQUFLOztJQVN6QixDQUFDO0lBRUQsc0JBQUksb0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QyxRQUFRLEdBZ0I5Qzs7QUFFRDtJQUEwQyx3Q0FBUTtJQUM5Qyw4QkFDSSxJQUFpQyxFQUN6QixRQUFvQixFQUFFLHVEQUF1RDtJQUM3RSxNQUFrQjtRQURsQix5QkFBQSxFQUFBLGVBQW9CO1FBQ3BCLHVCQUFBLEVBQUEsYUFBa0I7UUFIOUIsWUFLSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUpXLGNBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsWUFBTSxHQUFOLE1BQU0sQ0FBWTs7SUFHOUIsQ0FBQztJQUVELHNCQUFJLHlDQUFP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TSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakUsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0FBQyxBQTlNRCxJQThNQzs7QUFFRCxJQUFJLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEF0dHJpYnV0ZVR5cGUgPSAnc3RyaW5nJyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nIHwgJ2RhdGUnIHwgJ2FycmF5JyB8ICdvYmplY3QnIHwgJ2FueSc7XG5cbmV4cG9ydCBjbGFzcyBUeXBlTWV0YSB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF90eXBlOiBBdHRyaWJ1dGVUeXBlKSB7fVxuXG4gICAgZ2V0IHR5cGUoKTogQXR0cmlidXRlVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVNZXRhIGV4dGVuZHMgVHlwZU1ldGEge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnlcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICA8QXR0cmlidXRlVHlwZT4oW1xuICAgICAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgICAgICdib29sZWFuJ1xuICAgICAgICAgICAgXS5pbmRleE9mKHR5cGVvZiBfdmFsdWUpID4gLTEgPyB0eXBlb2YgX3ZhbHVlIDogJ2FueScpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb25QcmltaXRpdmVUeXBlTWV0YSBleHRlbmRzIFR5cGVNZXRhIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHlwZTogJ29iamVjdCcgfCAnYXJyYXknIHwgJ2RhdGUnLFxuICAgICAgICBwcml2YXRlIF9tYXBwaW5nOiBhbnkgPSBudWxsLCAvLyBBbGwgYXR0cmlidXRlcyBzaG91bGQgYmUgdHlwZSBvZiBFeHRyYWN0b3JSZXN1bHRUeXBlXG4gICAgICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgIH1cblxuICAgIGdldCBtYXBwaW5nKCk6IEV4dHJhY3RvclJlc3VsdFR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwcGluZztcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHR5cGUgRXh0cmFjdG9yUmVzdWx0VHlwZSA9IE5vblByaW1pdGl2ZVR5cGVNZXRhIHwgUHJpbWl0aXZlVHlwZU1ldGE7XG5cbmNvbnN0IE9uT0FUUmVzb2x2ZWRTeW1ib2wgPSAnT25PQVRSZXNvbHZlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBPbk9BVFJlc29sdmVkKGNiOiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCByZXNvbHZlZDogYW55KSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoT25PQVRSZXNvbHZlZFN5bWJvbCwgY2IpO1xufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0QXR0cmlidXRlVHlwZUV4dHJhY3RvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlTWFwcGluZyhcbiAgICAgICAgaW5wdXQ6IGFueSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAga2V5TmFtaW5nU3RyYXRlZ3k/OiAnY2FtZWxDYXNlJyB8ICdzbmFrZV9jYXNlJyxcbiAgICAgICAgICAgIHN0cmlwVW5kZXJzY29yZT86IGJvb2xlYW4sXG4gICAgICAgICAgICBvblJlc29sdmVkPzogKHRhcmdldDogYW55LCBrZXk/OiBzdHJpbmcsIHJlc29sdmVkPzogYW55KSA9PiB2b2lkXG4gICAgICAgIH0gPSB7fVxuICAgICk6IGFueSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGtleU5hbWluZ1N0cmF0ZWd5OiAnY2FtZWxDYXNlJyxcbiAgICAgICAgICAgIHN0cmlwVW5kZXJzY29yZTogZmFsc2VcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgbGV0IG1hcHBpbmc6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBudWxsO1xuXG4gICAgICAgIC8vIGlucHV0IGlzIGFuIGFycmF5LCBhbmFseXplIHRoZSBmaXJzdCBjZWxsIG9ubHlcbiAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIG1hcHBpbmcgPSBuZXcgTm9uUHJpbWl0aXZlVHlwZU1ldGEoXG4gICAgICAgICAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgICAgICAgICBFeHRyYWN0b3IuZ2VuZXJhdGVNYXBwaW5nKGlucHV0WzBdLCBvcHRpb25zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFuYWx5emUgYXR0cmlidXRlcyBpbnNpZGUgaW5wdXQgb2JqZWN0XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0W2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkTWV0YTogYW55ID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb3IgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXRba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkTWV0YSA9IEV4dHJhY3Rvci5nZW5lcmF0ZU9iamVjdFR5cGVNYXBwaW5nKGlucHV0LCBrZXksIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFueSBwcmltaXRpdmUgdHlwZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dFtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZE1ldGEgPSBuZXcgUHJpbWl0aXZlVHlwZU1ldGEoaW5wdXRba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoUmVmbGVjdC5oYXNNZXRhZGF0YShPbk9BVFJlc29sdmVkU3ltYm9sLCBpbnB1dCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVmbGVjdC5nZXRNZXRhZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbk9BVFJlc29sdmVkU3ltYm9sLCBpbnB1dCwga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICApKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LCBrZXksIHJlc29sdmVkTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5vblJlc29sdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uUmVzb2x2ZWQoaW5wdXQsIGtleSwgcmVzb2x2ZWRNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmlzaGVkLCBzZXQgcmVzb2x2ZWQgYXR0cmlidXRlIG1ldGFkYXRhIHRvIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nW1xuICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmFjdG9yLnJlc29sdmVBdHRyaWJ1dGVLZXkob3B0aW9ucywga2V5LCBpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgXSA9IHJlc29sdmVkTWV0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSAmJiAhKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE5vblByaW1pdGl2ZVR5cGVNZXRhKCdvYmplY3QnLCBtYXBwaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbWFwcGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHsgbWFwcGluZyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFJlZmxlY3QuaGFzTWV0YWRhdGEoT25PQVRSZXNvbHZlZFN5bWJvbCwgaW5wdXQuY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmdldE1ldGFkYXRhKFxuICAgICAgICAgICAgICAgIE9uT0FUUmVzb2x2ZWRTeW1ib2wsIGlucHV0LmNvbnN0cnVjdG9yXG4gICAgICAgICAgICApKFxuICAgICAgICAgICAgICAgIGlucHV0LmNvbnN0cnVjdG9yLCBudWxsLCByZXN1bHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMub25SZXNvbHZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb3B0aW9ucy5vblJlc29sdmVkKGlucHV0LCBudWxsLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZU9iamVjdFR5cGVNYXBwaW5nKG9iamVjdDogYW55LCBrZXksIG9wdGlvbnM6IGFueSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWRNZXRhID0gbnVsbDtcblxuICAgICAgICAvLyBNYXJrIHR5cGUgYXMgYW55IGlmIHZhbHVlIGlzIG51bGxcbiAgICAgICAgaWYgKG9iamVjdFtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXNvbHZlZE1ldGEgPSBuZXcgUHJpbWl0aXZlVHlwZU1ldGEobnVsbCk7XG5cbiAgICAgICAgLy8gRm9yIEFycmF5XG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0W2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgLy8gRm9yIFByaW1pdGl2ZSBBcnJheVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRNZXRhID0gbmV3IE5vblByaW1pdGl2ZVR5cGVNZXRhKCdhcnJheScsIG5ldyBQcmltaXRpdmVUeXBlTWV0YSh0YXJnZXRbMF0pKTtcbiAgICAgICAgICAgIC8vIEZvciBPYmplY3QgQXJyYXlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRNZXRhID0gRXh0cmFjdG9yLmdlbmVyYXRlTWFwcGluZyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBEYXRlXG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0W2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXNvbHZlZE1ldGEgPSBuZXcgTm9uUHJpbWl0aXZlVHlwZU1ldGEoJ2RhdGUnLCBudWxsLCBvYmplY3Rba2V5XSk7XG5cbiAgICAgICAgLy8gRm9yIE9iamVjdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZWRNZXRhID0gRXh0cmFjdG9yLmdlbmVyYXRlTWFwcGluZyhvYmplY3Rba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZWRNZXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlQXR0cmlidXRlS2V5KG9wdGlvbnM6IGFueSwga2V5LCBvYmplY3Q6IGFueSkge1xuICAgICAgICBsZXQgc2V0dGVyS2V5ID0ga2V5O1xuXG4gICAgICAgIC8vIGlmIHNldCBmdW5jdGlvbiBleGlzdHMsIHJlbmFtZSBfYXR0ciB0byBhdHRyXG4gICAgICAgIGlmIChvcHRpb25zLnN0cmlwVW5kZXJzY29yZSAmJiBrZXkuY2hhckF0KDApID09PSAnXycpIHtcbiAgICAgICAgICAgIGxldCB0cmltbWVkS2V5ID0ga2V5LnN1YnN0cigxLCBrZXkubGVuZ3RoKTtcblxuICAgICAgICAgICAgaWYgKHRyaW1tZWRLZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyS2V5ID0gdHJpbW1lZEtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWUgc2VyaWFsaXplciBzZXJpYWxpemUgZGF0YSB3aXRoIHNuYWtlX2Nhc2VcbiAgICAgICAgLy8gYnV0IEpTIEVudGl0eSBDbGFzc2VzIG5hbWUgYXR0cmlidXRlcyB3aXRoIGNhbWVsQ2FzZVxuICAgICAgICBpZiAob3B0aW9ucy5rZXlOYW1pbmdTdHJhdGVneSA9PT0gJ3NuYWtlX2Nhc2UnKSB7XG4gICAgICAgICAgICBzZXR0ZXJLZXkgPSBFeHRyYWN0b3IuY29udmVydFN0cmluZ1RvU25ha2VDYXNlKHNldHRlcktleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0dGVyS2V5O1xuICAgIH1cblxuICAgIC8vIEZvciBuYW1pbmcgY29udmVudGlvbiBjaGFuZ2luZy4gTm90IHJlYWxseSByZWxhdGVkIHRvIHRoaXMgZXh0cmFjdG9yXG4gICAgc3RhdGljIGZpeE5hbWluZ0NvbnZlbnRpb24oZGF0YTogYW55LCBvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGtleU5hbWluZ1N0cmF0ZWd5OiAnY2FtZWxDYXNlJyxcbiAgICAgICAgICAgIHN0cmlwVW5kZXJzY29yZTogZmFsc2VcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goRXh0cmFjdG9yLmZpeE5hbWluZ0NvbnZlbnRpb24ob2JqLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdHJpcFVuZGVyc2NvcmUgfHwga2V5LmNoYXJBdCgwKSAhPT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbEtleSA9IGtleTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlOYW1pbmdTdHJhdGVneSA9PT0gJ3NuYWtlX2Nhc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEtleSA9IEV4dHJhY3Rvci5jb252ZXJ0U3RyaW5nVG9TbmFrZUNhc2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ZpbmFsS2V5XSA9IEV4dHJhY3Rvci5maXhOYW1pbmdDb252ZW50aW9uKGRhdGFba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbZmluYWxLZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBGb3IgSlNPTiBlZGl0b3Igb25seS4gU2hvdWxkIGJlIGV4dHJhY3RlZC5cbiAgICBzdGF0aWMgY29udmVydERhdGFUb1N0cmluZyhkYXRhOiBhbnksIGNhbGxiYWNrczogYW55ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goRXh0cmFjdG9yLmNvbnZlcnREYXRhVG9TdHJpbmcob2JqKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRlJyBpbiBjYWxsYmFja3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmRhdGUoZGF0YVtrZXldKSA6IGRhdGFba2V5XS55eXl5bW1kZCgnLScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBFeHRyYWN0b3IuY29udmVydERhdGFUb1N0cmluZyhkYXRhW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZlcnRTdHJpbmdUb1NuYWtlQ2FzZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXBsYWNlKC8oW0EtWl0rKS9nLCBcIl8kMVwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxubGV0IEV4dHJhY3RvciA9IE9iamVjdEF0dHJpYnV0ZVR5cGVFeHRyYWN0b3I7XG4iXX0=