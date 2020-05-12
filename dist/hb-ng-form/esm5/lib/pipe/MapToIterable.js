import { __decorate, __values } from "tslib";
import { Pipe } from "@angular/core";
var MapToIterable = /** @class */ (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (object) {
        var e_1, _a;
        var result = [];
        try {
            for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (object.hasOwnProperty(key)) {
                    result.push({ key: key, val: object[key] });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    MapToIterable = __decorate([
        Pipe({
            name: 'mapToIterable'
        })
    ], MapToIterable);
    return MapToIterable;
}());
export { MapToIterable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVG9JdGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvcGlwZS9NYXBUb0l0ZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS25DO0lBQUE7SUFZQSxDQUFDO0lBWEcsaUNBQVMsR0FBVCxVQUFVLE1BQWM7O1FBQ3BCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7WUFFaEIsS0FBZ0IsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBaEMsSUFBSSxHQUFHLFdBQUE7Z0JBQ1IsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ3hDO2FBQ0o7Ozs7Ozs7OztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFYUSxhQUFhO1FBSHpCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxlQUFlO1NBQ3hCLENBQUM7T0FDVyxhQUFhLENBWXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ21hcFRvSXRlcmFibGUnXG59KVxuZXhwb3J0IGNsYXNzIE1hcFRvSXRlcmFibGUge1xuICAgIHRyYW5zZm9ybShvYmplY3Q6IE9iamVjdCk6IEFycmF5PGFueT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtrZXksIHZhbDogb2JqZWN0W2tleV19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl19