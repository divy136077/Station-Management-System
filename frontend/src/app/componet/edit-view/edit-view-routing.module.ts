import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditviewComponent } from './edit-view.component'


const routes: Routes = [ { path: '', component: EditviewComponent }];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class EditviewRoutingModule { }