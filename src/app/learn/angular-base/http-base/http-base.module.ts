import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBaseComponent } from './http-base.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './heroes/heroes.component';
import {MessageService} from "./message.service";
import { HttpErrorHandler} from './http-error-handler.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HttpBaseComponent
      }
    ])

  ],
  declarations: [
    HttpBaseComponent,
    ConfigComponent,
    HeroesComponent,
  ],
  providers: [
    ConfigService,
    MessageService,
    HttpErrorHandler
  ]
})
export class HttpBaseModule { }
