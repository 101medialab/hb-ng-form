import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimitiveFieldsDemoComponent } from "./components/primitive-fields-demo/primitive-fields-demo.component";
import { SelectionFieldsDemoComponent } from "./components/selection-fields-demo/selection-fields-demo.component";
import { ObjectFieldsDemoComponent } from "./components/object-fields-demo/object-fields-demo.component";
import { ArrayFieldsDemoComponent } from "./components/array-fields-demo/array-fields-demo.component";
import { CustomizedComponentFieldsDemoComponent } from "./components/customized-component-fields-demo/customized-component-fields-demo.component";
import { DiContainerDemoComponent } from "./components/di-container-demo/di-container-demo.component";
import { ThemesTutorialComponent } from "./components/themes-tutorial/themes-tutorial.component";

const routes: Routes = [{
    path: 'primitive-fields-demo',
    component: PrimitiveFieldsDemoComponent,
}, {
    path: 'selection-fields-demo',
    component: SelectionFieldsDemoComponent,
}, {
    path: 'object-fields-demo',
    component: ObjectFieldsDemoComponent,
}, {
    path: 'array-fields-demo',
    component: ArrayFieldsDemoComponent,
}, {
    path: 'customized-component-fields-demo',
    component: CustomizedComponentFieldsDemoComponent,
}, {
    path: 'di-container-demo',
    component: DiContainerDemoComponent,
}, {
    path: 'themes-tutorial',
    component: ThemesTutorialComponent,
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
