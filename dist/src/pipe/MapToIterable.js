var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from "@angular/core";
var MapToIterable = /** @class */ (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (object) {
        var result = [];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                result.push({ key: key, val: object[key] });
            }
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
//# sourceMappingURL=MapToIterable.js.map