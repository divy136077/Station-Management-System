import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListviewRoutingModule } from "./list-view-routing.module";
import { ListviewComponent } from "./list-view.component";

@NgModule({
  imports: [CommonModule, ListviewRoutingModule, NgModule],
  declarations: [ListviewComponent]
})
export class ListviewviewModule { }