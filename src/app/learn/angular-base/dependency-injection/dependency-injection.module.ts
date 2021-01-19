import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { BcComponent } from './bc/bc.component';
import { Bc2Component } from './bc/bc2/bc2.component';
import { InjectorTypeModule } from './injectorType/injectorType.module';

export const VALUE_SERVICE = new InjectionToken<string>('value_service');

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DependencyInjectionComponent
      }
    ]),
    InjectorTypeModule
  ],
  declarations: [DependencyInjectionComponent,BcComponent, Bc2Component, ],
  providers: [
    { provide: VALUE_SERVICE, useValue: "Apples" }
  ]
})
export class DependencyInjectionModule { }
