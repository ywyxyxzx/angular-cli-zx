import { Component, Injector, OnInit } from '@angular/core';
import { Car, Engine, Tires } from './injectorType/car';

@Component({
  selector: 'app-injector',
  template: `
  <div id="car">{{car.drive()}}</div>`,
  providers: [Car, Engine, Tires]
})
export class InjectorComponent implements OnInit {
  car: Car;
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
  }


}
