import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicFormBaseComponent } from './dynamic-form-base.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicFormBaseComponent
      }
    ])
  ],
  declarations: [DynamicFormBaseComponent]
})
export class DynamicFormBaseModule { }
