import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn.component';
import { RouterModule, Routes } from '@angular/router';

const learnChildRouters: Routes = [
  {
    path: 'async',
    loadChildren: ()=> import('./others/async/async.module').then(m => m.AsyncModule)
  },
  {
    path: 'cdk_overlay',
    loadChildren: () => import('./cdk/overlay-info/overlay-info.module').then(m => m.OverlayInfoModule)
  },
  {
    path: 'introduce',
    loadChildren: () => import('./introduce/introduce.module').then(m => m.IntroduceModule)
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
