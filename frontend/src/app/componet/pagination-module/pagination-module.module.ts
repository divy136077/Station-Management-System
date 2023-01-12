import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModuleRoutingModule  } from "./pagination-module-routing.module";
import { PaginationModuleComponent } from "./pagination-module.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PaginationModuleRoutingModule ,NgModule , ReactiveFormsModule],
    declarations: [PaginationModuleComponent]
  })
  export class PaginationModuleModule {}