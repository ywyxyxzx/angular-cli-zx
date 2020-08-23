import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBaseRouterModule } from './router-base-router.module'
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterBaseRouterModule
  ],
 
})
export class RouterBaseModule { }
