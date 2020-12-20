import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicViewComponent } from './dynamic-view.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicViewComponent
      }
    ])
  ],
  entryComponents: [ 
    HeroJobAdComponent, 
    HeroProfileComponent 
  ],
  declarations: [
    DynamicViewComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective 
  ],
  providers: [AdService],
})
export class DynamicViewModule { }
