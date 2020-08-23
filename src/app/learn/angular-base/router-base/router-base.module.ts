import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBaseComponent } from './router-base.component'
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent }   from './crisis-list/crisis-list.component';
import { HeroListComponent }     from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouterBaseComponent,
        children: [

          { path: 'crisis-center', component: CrisisListComponent },
          { path: 'heroes', component: HeroListComponent },
          { path: '**', component: PageNotFoundComponent }  
        ]
      }
    ])

  ],
  declarations: [
    RouterBaseComponent
  ]
})
export class RouterBaseModule { }
