import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation.component';
import {  HeroFormTemplateComponent  } from './hero-form-template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { IdentityRevealedValidatorDirective } from './identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './alter-ego.directive';


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
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ]
})
export class FormValidationModule { }
