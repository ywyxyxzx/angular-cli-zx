import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherBaseComponent } from './other-base.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OtherBaseComponent,
        children: [
          {
            path: '',
            redirectTo: 'content-child',
            pathMatch: 'full'
          },
          {
            path: 'content-child',
            loadChildren: () => import('./ContentChild/ContentChild.module').then(m => m.ContentChildModule)
          }
        ]
      }
    ])
  ],
  declarations: [OtherBaseComponent]
})
export class OtherBaseModule { }
