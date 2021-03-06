import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayInfoComponent } from './overlay-info.component';
import { OverlayPannelModule } from './overlay-pannel/overlay-pannel.module';
import {PortalModule} from "@angular/cdk/portal";
import {OverlayModule} from '@angular/cdk/overlay';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: OverlayInfoComponent
    }]),
    OverlayModule,
    PortalModule,
    OverlayPannelModule
  ],
  declarations: [OverlayInfoComponent]
})
export class OverlayInfoModule { }
