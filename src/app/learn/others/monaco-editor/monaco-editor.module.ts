import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MonacoEditorComponent } from './monaco-editor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: MonacoEditorComponent
    }])
  ],
  declarations: [MonacoEditorComponent]
})
export class MonacoEditorModule { }
