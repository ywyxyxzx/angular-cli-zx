import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.scss']
})
export class HeroFormTemplateComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  constructor() { }

  ngOnInit(): void {

  }

}
