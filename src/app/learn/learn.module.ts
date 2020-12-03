import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn.component';
import { RouterModule, Routes } from '@angular/router';

const learnChildRouters: Routes = [
  {
    path: 'angular-base',
    loadChildren: ()=> import('./angular-base/angular-base.module').then(m => m.AngularBaseModule)
  },
  {
    path: 'async',
    loadChildren: ()=> import('./others/async/async.module').then(m => m.AsyncModule)
  },
  {
    path: 'introduce',
    loadChildren: () => import('./introduce/introduce.module').then(m => m.IntroduceModule)
  },
  {
    path: 'cdk',
    loadChildren: () => import('./cdk/cdk-base.module').then(m => m.CdkBaseModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'introduce',
  },
  {
    path: '**',
    redirectTo: 'introduce'
  }

]

const learnRoutes: Routes = [
  {
    path: '',
    component: LearnComponent,
    children: learnChildRouters
    
  }

]

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forChild(learnRoutes)
  ],
  declarations: [LearnComponent],
})
export class LearnModule { }
