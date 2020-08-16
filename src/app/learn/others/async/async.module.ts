import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async.component';
import { RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:AsyncComponent
    }])
  ],
  declarations: [AsyncComponent]
})
export class AsyncModule { }
