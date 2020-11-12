import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component'
import { PlrofieEditorComponent } from './plrofie-editor/plrofie-editor.component';
import { ProfileEditer2Component } from './profile-editer2/profile-editer2.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormsComponent
      }
    ])
  ],
  declarations: [
    ReactiveFormsComponent,
    NameEditorComponent,
    PlrofieEditorComponent,
    ProfileEditer2Component 
  ]
})
export class ReactiveFormsBaseModule { }
