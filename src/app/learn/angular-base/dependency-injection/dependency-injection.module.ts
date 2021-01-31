import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { BcComponent } from './bc/bc.component';
import { Bc2Component } from './bc/bc2/bc2.component';
import { InjectorTypeModule } from './injectorType/injectorType.module';
import { InjectorComponent } from './injector.component';
import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';

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
  declarations: [DependencyInjectionComponent,BcComponent, Bc2Component, InjectorComponent],
  providers: [
    { provide: VALUE_SERVICE, useValue: "Apples" },
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG}
  ]
})
export class DependencyInjectionModule { }
