import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifecycleChildComponent } from './lifecycle-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LifecycleChildComponent
  ],
  declarations: [
    LifecycleChildComponent
  ]
})
export class LifecycleChildModule { }
