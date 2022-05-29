import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-foo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
      <h2>fooComment</h2>
      <p>father:{{father}}</p>
      <section>
        detail: {{detail}}
      </section>
  `,
})
export class ChangeDetectionChildComponent implements OnInit {
  // 传入参数
  @Input() father: string;

  public get detail() {
    console.log('get detail');
    return 'this is a detail string for test';
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log('foo ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('foo ngAfterViewChecked');
  }

}
