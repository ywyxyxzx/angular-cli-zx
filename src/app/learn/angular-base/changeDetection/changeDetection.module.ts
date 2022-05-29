import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './changeDetection.component';
import { ChangeDetectionChildModule } from './changeDetection-child/changeDetection-child.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChangeDetectionChildModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChangeDetectionComponent
      }
    ])

  ],
  declarations: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
