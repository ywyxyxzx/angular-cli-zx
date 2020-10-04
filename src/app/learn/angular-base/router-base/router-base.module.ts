import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {  FormsModule} from '@angular/forms';
import { RouterBaseComponent } from './router-base.component'
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HeroesRoutingModule } from './heroes-routing.module';
import { MessageService}  from './message.service';
import {HeroService} from './hero.service';
import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CrisisCenterModule }      from './crisis-center/crisis-center.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    CrisisCenterModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouterBaseComponent,
        children: [
          { path: '**', component: PageNotFoundComponent }  
        ]
      }
    ])

  ],
  declarations: [
    RouterBaseComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  providers:[
    MessageService,
    HeroService
  ]
})
export class RouterBaseModule { }
