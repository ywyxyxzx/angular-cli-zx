import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPannelComponent } from './overlay-pannel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OverlayPannelComponent
  ],
  declarations: [OverlayPannelComponent],
  entryComponents: [
    OverlayPannelComponent
  ]
})
export class OverlayPannelModule { }
