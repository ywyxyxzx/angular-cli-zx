import { Component, Host, Inject, InjectionToken, OnInit, Optional } from '@angular/core';

export const VALUE_SERVICE = new InjectionToken<string>('value_service');

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.scss'],
  providers: [
    {
      provide: VALUE_SERVICE,
      useValue: 'bc-s'
    }
  ],
  viewProviders: [
    {
      provide: VALUE_SERVICE,
      useValue: 'bc-s2'
    }
  ],
})
export class BcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
