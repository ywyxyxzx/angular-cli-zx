import { Component, Host, Inject, InjectionToken, Injector, OnInit, Optional } from '@angular/core';
import { VALUE_SERVICE } from '../bc.component';


@Component({
  selector: 'app-bc2',
  templateUrl: './bc2.component.html',
  styleUrls: ['./bc2.component.scss'],
  // providers: [
  //   {
  //     provide: VALUE_SERVICE,
  //     useValue: 'bc-self'
  //   }
  // ],
  // viewProviders: [
  //   {
  //     provide: VALUE_SERVICE,
  //     useValue: 'bc-self2'
  //   }
  // ],
})
export class Bc2Component implements OnInit {
  content = 'undefined';
  constructor(@Inject(VALUE_SERVICE) @Host() @Optional() public cos: string) { 
    this.content = cos || 'undefined';
  }

  ngOnInit() {

  }

}
