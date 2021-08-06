import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  {
    path:"", component:DashComponent  
  },
  {
    path:"form1", component:Form1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
