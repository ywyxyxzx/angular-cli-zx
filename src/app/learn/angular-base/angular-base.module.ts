import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularBaseComponent } from './angular-base.component';
import { RouterModule,Routes} from '@angular/router'

const baseRoutes : Routes = [
  {
    path: 'lifecycle-hooks',
    loadChildren: ()=> import('./lifecycle/lifecycle.module').then(m =>m.LifecycleModule)
  },
  {
    path: 'router',
    loadChildren: ()=> import('./router-base/router-base.module').then(m =>m.RouterBaseModule)
  },{
    path: 'form',
    loadChildren: ()=> import('./form-base/form-base.module').then(m =>m.FormBaseModule)
  },
  {
    path: 'others',
    loadChildren: ()=> import('./other-base/other-base.module').then(m => m.OtherBaseModule)
  },
  {
    path: 'http',
    loadChildren: ()=> import('./http-base/http-base.module').then(m => m.HttpBaseModule)
  },
  {
    path: 'dynamic-view',
    loadChildren: ()=> import('./dynamic-view/dynamic-view.module').then(m => m.DynamicViewModule)
  },
  {
    path: 'elements',
    loadChildren: ()=> import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'pipes',
    loadChildren: ()=> import('./pipe-base/pipe-base.module').then(m => m.PipeBaseModule)
  },
  {
    path: 'structual-directive',
    loadChildren: ()=> import('./structural-directives/structural-directives.module').then(m => m.StructuralDirectivesModule)
  },
  {
    path: 'dependency-injection',
    loadChildren: ()=> import('./dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule)
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'router'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',
      component: AngularBaseComponent,
      children: baseRoutes 
      }
    ])
  ],
  declarations: [AngularBaseComponent]
})
export class AngularBaseModule { }
