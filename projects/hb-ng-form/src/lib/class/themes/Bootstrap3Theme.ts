import { BaseTheme } from "./BaseTheme";
import { ObjectThemeSettings } from "./ObjectThemeSettings";
import { ArrayThemeSettings } from "./ArrayThemeSettings";
import { WidgetThemeSettings } from "./WidgetThemeSettings";

export class Bootstrap3Theme extends BaseTheme {
    constructor() {
        let object: ObjectThemeSettings = new ObjectThemeSettings();
        let array: ArrayThemeSettings = new ArrayThemeSettings();
        let widget: WidgetThemeSettings = new WidgetThemeSettings();

        super(object, array, widget);
    }
}
