import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalBaseComponent } from './portal-base.component';
import { RouterModule } from '@angular/router';
import { PortalTemplateComponent ,DialogComponent} from './portal-template/portal-template.component';
import { OutletElementComponent} from './portal-template/outlet-element.compontent'
import { OuterShareComponent } from './outer-share/outer-share.component';
import { OutShareComponetComponent,DialogComponentWithSharingData } from './out-share-componet/out-share-componet.component';


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
  entryComponents: [
    DialogComponent,
    DialogComponentWithSharingData
  ],
  declarations: [
    PortalBaseComponent,
    DialogComponent,
    PortalTemplateComponent,
    OutletElementComponent,
    OuterShareComponent,
    OutShareComponetComponent,
    DialogComponentWithSharingData
  ]
})
export class PortalBaseModule { }
