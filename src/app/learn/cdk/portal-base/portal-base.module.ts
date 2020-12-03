import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalBaseComponent } from './portal-base.component';
import { RouterModule } from '@angular/router';
import { PortalTemplateComponent } from './portal-template/portal-template.component';


@NgModule({

  
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PortalBaseComponent
      }
    ])
  ],
  declarations: [
    PortalBaseComponent,
    PortalTemplateComponent
  
  
  ]
})
export class PortalBaseModule { }
