import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditviewRoutingModule } from "./edit-view-routing.module";
import { EditviewComponent } from "./edit-view.component";
console.warn("EditviewComponent")
@NgModule({
  imports: [CommonModule, EditviewRoutingModule, NgModule],
  declarations: [EditviewComponent]
})
export class EditviewviewModule { }