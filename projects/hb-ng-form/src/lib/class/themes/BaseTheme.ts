import { ObjectThemeSettings } from "./ObjectThemeSettings";
import { ArrayThemeSettings } from "./ArrayThemeSettings";
import { WidgetThemeSettings } from "./WidgetThemeSettings";

export class BaseTheme {
    constructor(
        public object: ObjectThemeSettings,
        public array: ArrayThemeSettings,
        public widget: WidgetThemeSettings,
    ) {
    }
}
