import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.taran()
  }

  async chloe() {
    console.log("chloe");
    return 20;
  }

  async taran() {
    const age = await this.chloe(); // chloe函数执行返回出一个Promise对象，await拿到该对象resolve的参数20，赋值给age
    console.log("taran" + age);
  }

}
