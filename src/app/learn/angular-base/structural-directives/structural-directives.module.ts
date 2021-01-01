import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path : '',
        component: StructuralDirectivesComponent
      }
    ])
  ],
  declarations: [	StructuralDirectivesComponent,
      UnlessDirective
   ]
})
export class StructuralDirectivesModule { }
