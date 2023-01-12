import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddviewComponent } from './componet/add-view/add-view.component';
import { EditviewComponent } from './componet/edit-view/edit-view.component';
import { ListviewComponent } from './componet/list-view/list-view.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModuleComponent } from './componet/pagination-module/pagination-module.component';
import { LoginComponent } from './componet/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddviewComponent,
    EditviewComponent,
    ListviewComponent,
    PaginationModuleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
