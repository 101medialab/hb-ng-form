import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { HbFormArrayComponent, HbFormMatArrayComponent, HbFormObjectComponent, HbFormMatObjectComponent, HbFormWidgetComponent, HbFormMatWidgetComponent } from '../public-api';
import { MapToIterable } from "./pipe/MapToIterable";
var directivesAndPipes = [
    HbFormArrayComponent,
    HbFormMatArrayComponent,
    HbFormObjectComponent,
    HbFormMatObjectComponent,
    HbFormWidgetComponent,
    HbFormMatWidgetComponent,
    MapToIterable,
];
var HbFormModule = /** @class */ (function () {
    function HbFormModule() {
    }
    HbFormModule = __decorate([
        NgModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                // Material Design
                BrowserAnimationsModule,
                MatAutocompleteModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatExpansionModule,
                MatInputModule,
                MatNativeDateModule,
                MatRadioModule,
                MatSelectModule
            ],
            declarations: directivesAndPipes,
            exports: __spread([
                BrowserAnimationsModule,
                MatAutocompleteModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatExpansionModule,
                MatInputModule,
                MatNativeDateModule,
                MatRadioModule,
                MatSelectModule
            ], directivesAndPipes)
        })
    ], HbFormModule);
    return HbFormModule;
}());
export { HbFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGJGb3JtTW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGItbmctZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9IYkZvcm1Nb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUNILG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQzNCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEIsQ0FBQztBQXNDRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFlBQVk7UUFwQ3hCLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxXQUFXO2dCQUNYLG1CQUFtQjtnQkFFbkIsa0JBQWtCO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBQ2QsZUFBZTthQUNsQjtZQUNELFlBQVksRUFBRSxrQkFBa0I7WUFDaEMsT0FBTztnQkFDSCx1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBQ2QsZUFBZTtlQUNaLGtCQUFrQixDQUN4QjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZVwiO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jYXJkXCI7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveFwiO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uXCI7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9yYWRpb1wiO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuXG5pbXBvcnQge1xuICAgIEhiRm9ybUFycmF5Q29tcG9uZW50LFxuICAgIEhiRm9ybU1hdEFycmF5Q29tcG9uZW50LFxuICAgIEhiRm9ybU9iamVjdENvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRPYmplY3RDb21wb25lbnQsXG4gICAgSGJGb3JtV2lkZ2V0Q29tcG9uZW50LFxuICAgIEhiRm9ybU1hdFdpZGdldENvbXBvbmVudFxufSBmcm9tICcuLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IElCYXNlRm9ybUNvbmZpZyB9IGZyb20gXCIuL2NsYXNzL2RlY29yYXRvcnMvRm9ybUNvbmZpZ1wiO1xuaW1wb3J0IHsgSUNob2ljZU9wdGlvbnNGb3JtQ29uZmlnIH0gZnJvbSBcIi4vY2xhc3MvZGVjb3JhdG9ycy9DaG9pY2VPcHRpb25zXCI7XG5pbXBvcnQgeyBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZyB9IGZyb20gXCIuL2NsYXNzL2RlY29yYXRvcnMvQXJyYXlPcHRpb25zXCI7XG5pbXBvcnQgeyBNYXBUb0l0ZXJhYmxlIH0gZnJvbSBcIi4vcGlwZS9NYXBUb0l0ZXJhYmxlXCI7XG5cbmNvbnN0IGRpcmVjdGl2ZXNBbmRQaXBlcyA9IFtcbiAgICBIYkZvcm1BcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRBcnJheUNvbXBvbmVudCxcbiAgICBIYkZvcm1PYmplY3RDb21wb25lbnQsXG4gICAgSGJGb3JtTWF0T2JqZWN0Q29tcG9uZW50LFxuICAgIEhiRm9ybVdpZGdldENvbXBvbmVudCxcbiAgICBIYkZvcm1NYXRXaWRnZXRDb21wb25lbnQsXG4gICAgTWFwVG9JdGVyYWJsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICAvLyBNYXRlcmlhbCBEZXNpZ25cbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRSYWRpb01vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXNBbmRQaXBlcyxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgLi4uZGlyZWN0aXZlc0FuZFBpcGVzLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSGJGb3JtTW9kdWxlIHtcbn1cblxuLy8gQWN0dWFsbHkgdGVtcGxhdGUgb2JqZWN0IGlzIHdheSBtb3JlIGNvbXBsaWNhdGVkLiBUeXBlcyBpbiBoZXJlIGhhdmUgbm90IGFkZHJlc3MgYWxsIGF0dHJpYnV0ZXMgYnV0IGNvbmZpZ3VyYWJsZSBvbmx5XG5leHBvcnQgdHlwZSBUZW1wbGF0ZU9iamVjdFR5cGUgPSBJQmFzZUZvcm1Db25maWcgfCBJQ2hvaWNlT3B0aW9uc0Zvcm1Db25maWcgfCBJQXJyYXlPcHRpb25zRm9ybUNvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQ29tcG9uZW50IHtcbiAgICAvLyBUZW1wbGF0ZU9iamVjdFR5cGVcbiAgICB0ZW1wbGF0ZU9iamVjdDogYW55O1xuICAgIHBhcmVudFRlbXBsYXRlT2JqZWN0OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUNvbXBvbmVudENvbnN0cnVjdG9yIHtcbiAgICBuZXcgKC4uLmRlcHM6IGFueVtdKTogSUN1c3RvbUNvbXBvbmVudDtcbn1cbiJdfQ==