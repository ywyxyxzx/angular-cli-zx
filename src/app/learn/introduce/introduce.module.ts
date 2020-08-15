import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroduceComponent } from './introduce.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IntroduceComponent
      }
    ])
  ],
  declarations: [IntroduceComponent]
})
export class IntroduceModule { }
