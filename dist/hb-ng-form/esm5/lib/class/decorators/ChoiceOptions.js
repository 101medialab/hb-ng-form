export var ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');
export function ChoiceOptions(options) {
    return Reflect.metadata(ChoiceOptionsSymbol, Object.assign({
        maxChoices: 1
    }, {
        renderType: 'select'
    }, options));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hvaWNlT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvY2xhc3MvZGVjb3JhdG9ycy9DaG9pY2VPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV0RSxNQUFNLFVBQVUsYUFBYSxDQUFDLE9BQWlDO0lBQzNELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FDbkIsbUJBQW1CLEVBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDTixVQUFVLEVBQUUsQ0FBQztLQUNoQixFQUN5QjtRQUN0QixVQUFVLEVBQUUsUUFBUTtLQUN2QixFQUFFLE9BQU8sQ0FDYixDQUNKLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUJhc2VGb3JtQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaG9pY2Uge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogYW55O1xufVxuXG4vKipcbiAqICBGb3IgRm9ybSBmaWVsZCBhY2NlcHRzIG9uZSB2YWx1ZSBvbmx5IG91dCBvZiBtdWx0aXBsZSBhdmFpbGFibGUgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZyBleHRlbmRzIElCYXNlRm9ybUNvbmZpZyB7XG4gICAgLy8gY2hlY2tib3ggaXMgZm9yIGJvb2xlYW4gb25seVxuICAgIHJlbmRlclR5cGU/OiAncmFkaW8nIHwgJ3NlbGVjdCcgfCAnY2hlY2tib3gnO1xuICAgIG9wdGlvbnM6IHsgKGRpQ29udGFpbmVyOiBNYXA8c3RyaW5nLCBhbnk+LCBjdXJyZW50VGVtcGxhdGVPYmplY3QsIHBhcmVudFRlbXBsYXRlT2JqZWN0KTogQXJyYXk8SUNob2ljZT4gfCBPYnNlcnZhYmxlPEFycmF5PElDaG9pY2U+PiB9O1xufVxuXG5leHBvcnQgY29uc3QgQ2hvaWNlT3B0aW9uc1N5bWJvbCA9IFN5bWJvbCgnSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaG9pY2VPcHRpb25zKG9wdGlvbnM6IElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZykge1xuICAgIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKFxuICAgICAgICBDaG9pY2VPcHRpb25zU3ltYm9sLFxuICAgICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBtYXhDaG9pY2VzOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgPElDaG9pY2VPcHRpb25zRm9ybUNvbmZpZz57XG4gICAgICAgICAgICAgICAgcmVuZGVyVHlwZTogJ3NlbGVjdCdcbiAgICAgICAgICAgIH0sIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICk7XG59XG4iXX0=