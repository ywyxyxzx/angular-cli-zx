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
      },
      {
        path: 'form-validation',
        loadChildren: ()=> import('./form-validation/form-validation.module').then(m => m.FormValidationModule)
      },
      {
        path: 'dynamic-form',
        loadChildren: ()=> import('./dynamic-form-base/dynamic-form-base.module').then(m => m.DynamicFormBaseModule)
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
