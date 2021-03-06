import {Pipe} from "@angular/core";

@Pipe({
    name: 'mapToIterable'
})
export class MapToIterable {
    transform(object: Object): Array<any> {
        let result = [];

        for (let key of Object.keys(object)) {
            if (object.hasOwnProperty(key)) {
                result.push({key, val: object[key]});
            }
        }

        return result;
    }
}
