import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component: StructuralDirectivesComponent
      }
    ])
  ],
  declarations: [StructuralDirectivesComponent]
})
export class StructuralDirectivesModule { }
