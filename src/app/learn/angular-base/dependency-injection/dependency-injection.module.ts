import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DependencyInjectionComponent
      }
    ])
  ],
  declarations: [DependencyInjectionComponent]
})
export class DependencyInjectionModule { }
