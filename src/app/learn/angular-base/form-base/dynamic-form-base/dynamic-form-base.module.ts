import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormBaseComponent } from './dynamic-form-base.component';
import  {DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './question.service';
// import { QuestionControlService } from './question-control.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicFormBaseComponent
      }
    ])
  ],
  declarations: [
    DynamicFormBaseComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  providers:[
    QuestionService,
    // QuestionControlService
  ]
})
export class DynamicFormBaseModule { }
