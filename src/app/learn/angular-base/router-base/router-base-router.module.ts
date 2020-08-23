import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterBaseComponent } from './router-base.component';

const baseRouter: Routes = [
  {
    path: '',
    component: RouterBaseComponent,
   
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(baseRouter)
  ], 
  exports:[
    RouterModule
  ]
})
export class RouterBaseRouterModule { }
