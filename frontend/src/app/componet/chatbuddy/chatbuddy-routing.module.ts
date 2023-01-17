import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatbuddyComponent } from './chatbuddy.component'


const routes: Routes = [
    { path: '', component: ChatbuddyComponent },


];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ChatbuddyRoutingModule { }