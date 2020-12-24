import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ElementsComponent
      }
    ])
  ],
  declarations: [ElementsComponent, PopupComponent],
  entryComponents: [PopupComponent],
  providers: [PopupService],
})
export class ElementsModule { }
