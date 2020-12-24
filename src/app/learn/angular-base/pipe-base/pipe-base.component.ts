import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-base',
  templateUrl: './pipe-base.component.html',
  styleUrls: ['./pipe-base.component.scss']
})
export class PipeBaseComponent implements OnInit {
  birthday = new Date(1988, 3, 15); 
  constructor() { }

  ngOnInit() {
  }

}
