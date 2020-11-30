import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBaseComponent } from './http-base.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { ConfigComponent } from './config/config.component';

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
    ConfigComponent
  ],
  providers: [
    ConfigService
  ]
})
export class HttpBaseModule { }
