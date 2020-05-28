export class BaseThemeSettings<T> {
    id: {
        [p in keyof T]: string
    };

    class: {
        [p in keyof T]: string
    };
}
