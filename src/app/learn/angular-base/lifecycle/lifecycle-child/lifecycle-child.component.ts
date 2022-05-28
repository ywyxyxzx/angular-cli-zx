import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() surname: string;
  @Output() usernameChange = new EventEmitter<string>();
  username: string = '';
  // 属性与方法最先被定义
  constructor() {
    this.log('2- declaration');
    this.log('2- constructor');
  }
 
  log(str) {
    console.log(str)
    const spaceStr = '                        ';
    console.log(`${spaceStr}${(str + spaceStr + '   ').substr(0, 14)}       sub.surname='${this.surname}'  sub.username='${this.username}'`);
  }
 
  onUsernameInput($event) {
    console.log('子组件输入框发生了变化' + $event.target.value)
    this.usernameChange.emit($event.target.value);
  }
 
  // 当 Angular 设置或重新设置数据绑定的输入属性时响应
  // 时机 ngOnInit之前 或 输入属性的值发生变化后 如果没有输入属性 则不调用这个方法
  ngOnChanges(changes: SimpleChanges) {
    const changesRecord = []
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      changesRecord.push(`输入属性${propName}: ${prev} --> ${cur}`);
    }
    this.log('2- ngOnChanges'); // 因为组件没有input输入属性 所以不会调用ngOnChanges
  }
 
  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后 用于初始化指令/组件
  // 时机 在第一轮 ngOnChanges() 完成之后调用
  ngOnInit(): void {
    this.username = 'jin';
    console.log('给username赋值"jin"');
    this.log('2 - ngOnInit')
  }
 
  // 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
  // 时机 ngOnInit或ngOnChanges之后
  ngDoCheck() {
    this.log('2 - ngDoCheck');
  }
 
  // 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用
  // 时机 第一次 ngDoCheck() 之后
  ngAfterContentInit() {
    this.log('2 - ngAfterContentInit');
  }
 
  ngAfterContentChecked() {
    this.log('2 - ngAfterContentChecked')
  }

  ngOnDestroy() {
    this.log('2 - ngOnDestroy');
  }
}
 
