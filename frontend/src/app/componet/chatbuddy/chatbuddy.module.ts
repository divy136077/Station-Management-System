import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatbuddyRoutingModule  } from "./chatbuddy-routing.module";
import { ChatbuddyComponent } from "./chatbuddy.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ChatbuddyRoutingModule ,NgModule , ReactiveFormsModule],
    declarations: [ChatbuddyComponent]
  })
  export class ChatbuddyModule {}