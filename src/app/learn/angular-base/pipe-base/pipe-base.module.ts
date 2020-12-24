import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeBaseComponent } from './pipe-base.component';
import { RouterModule,Routes} from '@angular/router'
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipeBaseComponent 
      }
    ])
  ],
  declarations: [	PipeBaseComponent,
      ExponentialStrengthPipe
   ]
})
export class PipeBaseModule { }
