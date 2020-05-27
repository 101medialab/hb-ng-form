import { __values } from "tslib";
import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
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
    MapToIterable.ɵfac = function MapToIterable_Factory(t) { return new (t || MapToIterable)(); };
    MapToIterable.ɵpipe = i0.ɵɵdefinePipe({ name: "mapToIterable", type: MapToIterable, pure: true });
    return MapToIterable;
}());
export { MapToIterable };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapToIterable, [{
        type: Pipe,
        args: [{
                name: 'mapToIterable'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVG9JdGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvcGlwZS9NYXBUb0l0ZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUVuQztJQUFBO0tBZUM7SUFYRyxpQ0FBUyxHQUFULFVBQVUsTUFBYzs7UUFDcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztZQUVoQixLQUFnQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFoQyxJQUFJLEdBQUcsV0FBQTtnQkFDUixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDeEM7YUFDSjs7Ozs7Ozs7O1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs4RUFYUSxhQUFhO3lFQUFiLGFBQWE7d0JBTDFCO0NBaUJDLEFBZkQsSUFlQztTQVpZLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLGVBQWU7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbWFwVG9JdGVyYWJsZSdcbn0pXG5leHBvcnQgY2xhc3MgTWFwVG9JdGVyYWJsZSB7XG4gICAgdHJhbnNmb3JtKG9iamVjdDogT2JqZWN0KTogQXJyYXk8YW55PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe2tleSwgdmFsOiBvYmplY3Rba2V5XX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=