import { Component, OnInit, AfterContentInit, ContentChild, Directive, Input } from '@angular/core';

@Component({
  selector: 'app-ContentChild',
  templateUrl: './ContentChild.component.html',
  styleUrls: ['./ContentChild.component.scss']
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive(
  {
    selector: 'pane'
  })
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div>
  `
})
export class Tab implements AfterContentInit{
  @ContentChild(Pane) pane!: Pane;
  ngAfterContentInit(){
    console.log(this.pane,123)
  }


}

@Component({
  selector: 'example-app',
  template: `
    <tab>
      <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane>
    </tab>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComp {
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}

@Directive({selector: 'child-dire'})
export class ChildDirective {
  @Input() id: string;
}

@Directive({selector: 'someDir'})
export class SomeDir implements AfterContentInit {
  @ContentChild(ChildDirective) contentChild!: ChildDirective;
  ngAfterContentInit() {
    // contentChild is set
    console.log(this.contentChild,this.contentChild.id)
    
  }
}
