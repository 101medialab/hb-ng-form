export var FormConfigSymbol = Symbol('FormConfig');
export function FormConfig(options) {
    var slug = null;
    if (options.label) {
        slug = options.label.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    return Reflect.metadata(FormConfigSymbol, Object.assign({
        hiderHeader: false,
        slug: slug,
    }, options));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hiLW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvY2xhc3MvZGVjb3JhdG9ycy9Gb3JtQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFckQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxPQUF3QjtJQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFFaEIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2FBQzdCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEM7SUFFRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDVixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLE1BQUE7S0FDUCxFQUFFLE9BQU8sQ0FBQyxDQUNkLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUN1c3RvbUNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL0hiRm9ybU1vZHVsZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuZXhwb3J0IHR5cGUgUmVuZGVyVHlwZSA9ICd0ZXh0JyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICdoaWRkZW4nIHwgJ3JhZGlvJyB8ICdjaGVja2JveCcgfCAndGV4dGFyZWEnIHwgJ3NlbGVjdCc7XG5leHBvcnQgdHlwZSBIdG1sRWxlbWVudEF0dHJpYnV0ZSA9ICdsYWJlbCcgfCAnaW5wdXQnIHwgJ2lucHV0Q29udGFpbmVyJyB8ICd3aWRnZXRDb250YWluZXInO1xuXG50eXBlIE9iamVjdEh0bWxFbGVtZW50QXR0cmlidXRlID0gJ29iamVjdEhlYWRlckNvbnRhaW5lcicgfCAnb2JqZWN0SGVhZGVyJyB8IEh0bWxFbGVtZW50QXR0cmlidXRlO1xudHlwZSBBcnJheUh0bWxFbGVtZW50QXR0cmlidXRlID0gJ2FycmF5SGVhZGVyQ29udGFpbmVyJyB8ICdhcnJheUhlYWRlcicgfCBIdG1sRWxlbWVudEF0dHJpYnV0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUZvcm1Db25maWcge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIGRlZmF1bHRWYWx1ZT86IGFueTtcbiAgICBoaW50cz86IHN0cmluZyB8IHsgKGRpQ29udGFpbmVyOiBNYXA8c3RyaW5nLCBhbnk+LCBjdXJyZW50VGVtcGxhdGVPYmplY3QsIHBhcmVudFRlbXBsYXRlT2JqZWN0KTogc3RyaW5nIH07XG4gICAgdmFsaWRhdG9ycz86IEFycmF5PFZhbGlkYXRvckZuPiB8IHsgKGRpQ29udGFpbmVyOiBNYXA8c3RyaW5nLCBhbnk+LCBjdXJyZW50VGVtcGxhdGVPYmplY3QsIHBhcmVudFRlbXBsYXRlT2JqZWN0KTogQXJyYXk8VmFsaWRhdG9yRm4+IH07XG4gICAgdXNlVmFsaWRhdG9ycz86IEFycmF5PHN0cmluZz47XG4gICAgcmVuZGVyVHlwZT86IFJlbmRlclR5cGU7XG4gICAgaGlkZT86IGJvb2xlYW47XG4gICAgaGlkZUhlYWRlcj86IGJvb2xlYW47XG4gICAgdXNlQ29tcG9uZW50PzogSUN1c3RvbUNvbXBvbmVudENvbnN0cnVjdG9yO1xuICAgIGh0bWw/OiB7XG4gICAgICAgIGlkPzoge1xuICAgICAgICAgICAgW2tleSBpbiBIdG1sRWxlbWVudEF0dHJpYnV0ZV06IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBjbGFzcz86IHtcbiAgICAgICAgICAgIFtrZXkgaW4gSHRtbEVsZW1lbnRBdHRyaWJ1dGVdOiBzdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dGFyZWE/OiB7XG4gICAgICAgICAgICByb3c/OiBudW1iZXJcbiAgICAgICAgfVxuICAgIH07XG4gICAgYmVmb3JlU2V0VmFsdWU/OiB7XG4gICAgICAgIChjdXJyZW50VGVtcGxhdGVPYmplY3QsIHJhd1ZhbHVlKTogdm9pZFxuICAgIH07XG4gICAgYWZ0ZXJTZXRWYWx1ZT86IHtcbiAgICAgICAgKGN1cnJlbnRUZW1wbGF0ZU9iamVjdCwgcmF3VmFsdWUpOiB2b2lkXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1Db25maWdTeW1ib2wgPSBTeW1ib2woJ0Zvcm1Db25maWcnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1Db25maWcob3B0aW9uczogSUJhc2VGb3JtQ29uZmlnKSB7XG4gICAgbGV0IHNsdWcgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgc2x1ZyA9IG9wdGlvbnMubGFiZWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcc18tXSsvZywgJy0nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKEZvcm1Db25maWdTeW1ib2wsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgaGlkZXJIZWFkZXI6IGZhbHNlLFxuICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgfSwgb3B0aW9ucylcbiAgICApO1xufVxuIl19