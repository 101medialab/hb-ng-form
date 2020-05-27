import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class MapToIterable {
    transform(object) {
        let result = [];
        for (let key of Object.keys(object)) {
            if (object.hasOwnProperty(key)) {
                result.push({ key, val: object[key] });
            }
        }
        return result;
    }
}
MapToIterable.ɵfac = function MapToIterable_Factory(t) { return new (t || MapToIterable)(); };
MapToIterable.ɵpipe = i0.ɵɵdefinePipe({ name: "mapToIterable", type: MapToIterable, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapToIterable, [{
        type: Pipe,
        args: [{
                name: 'mapToIterable'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVG9JdGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvcGlwZS9NYXBUb0l0ZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS25DLE1BQU0sT0FBTyxhQUFhO0lBQ3RCLFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzswRUFYUSxhQUFhO3FFQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLGVBQWU7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbWFwVG9JdGVyYWJsZSdcbn0pXG5leHBvcnQgY2xhc3MgTWFwVG9JdGVyYWJsZSB7XG4gICAgdHJhbnNmb3JtKG9iamVjdDogT2JqZWN0KTogQXJyYXk8YW55PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe2tleSwgdmFsOiBvYmplY3Rba2V5XX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=