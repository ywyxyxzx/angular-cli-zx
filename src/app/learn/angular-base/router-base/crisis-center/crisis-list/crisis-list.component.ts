import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
// import { MessageService } from '../message.service';
@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  selectedHero: Crisis;

  heroes: Crisis[];

  constructor(private crisisService: CrisisService, 
    //private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Crisis): void {
    this.selectedHero = hero;
    // this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {

    this.crisisService.getHeroes()
        .subscribe(heroes => {
          this.heroes = heroes;
          console.log(this.heroes)
        });
  }
}