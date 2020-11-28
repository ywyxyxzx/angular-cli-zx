import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildComponent, Pane, Tab, ContentChildComp, ChildDirective, SomeDir } from './ContentChild.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {
        path: '',
        component: ContentChildComponent
      }
    ])
  ],
  declarations: [
    ContentChildComponent,
    Pane, 
    Tab, 
    ContentChildComp,
    ChildDirective, 
    SomeDir
  ]
})
export class ContentChildModule { }
