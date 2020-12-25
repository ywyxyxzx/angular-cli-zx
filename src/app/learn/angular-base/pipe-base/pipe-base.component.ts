import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HEROES } from './heroes';
@Component({
  selector: 'app-pipe-base',
  templateUrl: './pipe-base.component.html',
  styleUrls: ['./pipe-base.component.scss'],
  styles: ['#flyers, #all {font-style: italic}']
})
export class PipeBaseComponent implements OnInit {
  birthday = new Date(1988, 3, 15); 
  heroes: any[] = [];
  canFly = true;
  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  constructor() { 
    this.heroes = HEROES.slice();
    this.resend();
  }

  ngOnInit() {
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero)
  }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
