import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddviewRoutingModule } from "./add-view-routing.module";
import { AddviewComponent } from "./add-view.component";

@NgModule({
  imports: [CommonModule, AddviewRoutingModule, NgModule],
  declarations: [AddviewComponent]
})
export class AddviewModule { }