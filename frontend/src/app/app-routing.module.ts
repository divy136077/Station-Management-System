import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [

  { path: '', loadChildren: () => import('./componet/login/login-routing.module').then(x => x.LoginRoutingModule) },
  { path: 'listview', loadChildren: () => import('./componet/list-view/list-view-routing.module').then(x => x.ListviewRoutingModule), canActivate: [AuthGuard] },
  { path: 'editview/:id', loadChildren: () => import('./componet/edit-view/edit-view-routing.module').then(x => x.EditviewRoutingModule), canActivate: [AuthGuard] },
  { path: 'addview', loadChildren: () => import('./componet/add-view/add-view-routing.module').then(x => x.AddviewRoutingModule)},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule ,BrowserModule, BrowserAnimationsModule,ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
