import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayInfoComponent } from './overlay-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: OverlayInfoComponent
    }])
  ],
  declarations: [OverlayInfoComponent]
})
export class OverlayInfoModule { }
