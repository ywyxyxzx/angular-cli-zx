import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBaseComponent } from './form-base.component';
import { RouterModule, Routes } from '@angular/router';

const childRouters: Routes = [
  {
    path: '',
    component: FormBaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reactive-forms'
      },
      {
        path: 'reactive-forms',
        loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsBaseModule)
      }
    
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRouters)
  ],
  declarations: [FormBaseComponent]
})
export class FormBaseModule { }
