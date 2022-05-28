import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle.component';
import { LifecycleChildModule } from './lifecycle-child/lifecycle-child.module' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LifecycleChildModule,
    RouterModule.forChild([{
      path: '',
      component: LifecycleComponent
    }])
  ],
  declarations: [LifecycleComponent]
})
export class LifecycleModule { }
