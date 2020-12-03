import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkBaseComponent } from './cdk-base.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: CdkBaseComponent,
        children: [
          {
            path: 'portal',
            loadChildren: ()=> import('./portal-base/portal-base.module').then(m => m.PortalBaseModule)
          },
          {
            path: 'overlay',
            loadChildren: () => import('./overlay-info/overlay-info.module').then(m => m.OverlayInfoModule)
          },
        ]
      }
    ])
  ],
  declarations: [CdkBaseComponent]
})
export class CdkBaseModule { }
