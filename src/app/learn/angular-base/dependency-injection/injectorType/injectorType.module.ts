import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectorTypeComponent } from './injectorType.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    InjectorTypeComponent
  ],
  declarations: [InjectorTypeComponent]
})
export class InjectorTypeModule { }
