import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-router-base',
  templateUrl: './router-base.component.html',
  styleUrls: ['./router-base.component.scss'],
  animations: [ slideInAnimation ]
})
export class RouterBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getAnimationData(outlet: RouterOutlet) {
    // 
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
