import { Component, OnInit } from '@angular/core';
import { Car, Engine, Tires} from './car';
import { Car as CarNoDI } from './car-no-di';
import { useInjector } from './car-injector';
import { CarFactory } from './car-factory';


@Component({
  selector: 'app-injectorType',
  templateUrl: './injectorType.component.html',
  styleUrls: ['./injectorType.component.scss'],
  providers:[Car, Engine, Tires]
})
export class InjectorTypeComponent implements OnInit {
  carNoDI = new CarNoDI();
  injectorCar = useInjector();
  carFactory = (new CarFactory()).createCar();
  constructor(public car: Car) { }

  ngOnInit() {


  }

}
