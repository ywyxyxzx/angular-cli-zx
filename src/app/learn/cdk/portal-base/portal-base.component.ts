import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-base',
  templateUrl: './portal-base.component.html',
  styleUrls: []
})
export class PortalBaseComponent implements OnInit {
  showInner = true;
  showOuter = true;
  showOuterShare = true;
  showOuterShareC = true;
  constructor() { }

  ngOnInit() {
  }

}

