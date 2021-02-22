import { Component, OnInit } from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'app-heros',
  providers: [ heroServiceProvider ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HerosComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

}
