import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-changeDetection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <h2>changeComponent</h2>
    <hr>
    input in father component
    <input type="text" [(ngModel)]="value">

    <button (click)="changeName()">
      change name
    </button>
    <hr>
    <app-foo [father]="name"></app-foo>
  `,

})
export class ChangeDetectionComponent implements OnInit {
  private _name:string = 'foo';
  get name(): string {
    // console.log('get name');
    return this._name;
  }
  set name (value) {
    this._name = value;
  }
  value: string;
  items: Array<any> = ['Really', 'Super', 'Greater'];

  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    //
    this.name = "chened name";
  }
}