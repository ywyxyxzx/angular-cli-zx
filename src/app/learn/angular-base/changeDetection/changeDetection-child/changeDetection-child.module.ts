import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionChildComponent } from './changeDetection-child.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChangeDetectionChildComponent
  ],
  declarations: [ChangeDetectionChildComponent]
})
export class ChangeDetectionChildModule { }
