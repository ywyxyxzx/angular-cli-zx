import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBaseComponent } from './http-base.component';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HttpBaseComponent
      }
    ])

  ],
  declarations: [HttpBaseComponent]
})
export class HttpBaseModule { }
