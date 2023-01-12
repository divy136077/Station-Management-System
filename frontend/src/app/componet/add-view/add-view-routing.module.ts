import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddviewComponent } from './add-view.component'


const routes: Routes = [
    { path: '', component: AddviewComponent }


];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AddviewRoutingModule { }