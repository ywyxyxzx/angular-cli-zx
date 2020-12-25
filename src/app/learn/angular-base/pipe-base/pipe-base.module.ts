import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipeBaseComponent } from './pipe-base.component';
import { RouterModule,Routes} from '@angular/router'
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe  } from './flying-heroes.pipe';
import { FetchJsonPipe } from './fetch.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipeBaseComponent 
      }
    ])
  ],
  declarations: [			PipeBaseComponent,
      ExponentialStrengthPipe,
      FlyingHeroesPipe,
      FlyingHeroesImpurePipe,
      FetchJsonPipe
   ]
})
export class PipeBaseModule { }
