import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation.component';
import {  HeroFormTemplateComponent  } from './hero-form-template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormValidationComponent
      }
    ])
  ],
  declarations: [	
    FormValidationComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
  ]
})
export class FormValidationModule { }
