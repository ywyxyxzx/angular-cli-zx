import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation.component';
import {  HeroFormTemplateComponent  } from './hero-form-template/hero-form-template.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    ForbiddenNameDirective,
  ]
})
export class FormValidationModule { }
