import { Component, Injector, OnInit } from '@angular/core';
import { Car, Engine, Tires } from './injectorType/car';
import { HerosInjectorService } from './heros-injector.service';
import { Hero } from './hero';

@Component({
  selector: 'app-injector',
  template: `
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
  providers: [Car, Engine, Tires]
})
export class InjectorComponent implements OnInit {
  car: Car;
  heroService: HerosInjectorService;
  hero:Hero
  constructor(private injector: Injector) { }

  ngOnInit() {
    this.car = this.injector.get(Car); // 关键点
    // 扩展一
    const carInjector = Injector.create({
      providers:[
        { provide: Car, deps: [Engine, Tires] },
        { provide: Engine },
        { provide: Tires },
      ]
    })
    console.warn(carInjector.get(Car).drive()) //test
    // end
    this.heroService = this.injector.get(HerosInjectorService);
    this.hero = this.heroService.getHeroes()[0];

  }

  get rodent() {
    const rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
    return this.injector.get(ROUS, rousDontExist);
  }



}

class ROUS { }
