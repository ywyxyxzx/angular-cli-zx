import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularBaseComponent } from './angular-base.component';
import { RouterModule,Routes} from '@angular/router'

const baseRoutes : Routes = [
  {
    path: 'router',
    loadChildren: ()=> import('./router-base/router-base.module').then(m =>m.RouterBaseModule)
  },{
    path: 'form',
    loadChildren: ()=> import('./form-base/form-base.module').then(m =>m.FormBaseModule)
  },
  {
    path: 'others',
    loadChildren: ()=> import('./other-base/other-base.module').then(m => m.OtherBaseModule)
    
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'router'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',
      component: AngularBaseComponent,
      children: baseRoutes 
      }
    ])
  ],
  declarations: [AngularBaseComponent]
})
export class AngularBaseModule { }
