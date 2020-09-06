import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$;
  @Input() hero: Hero;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(params.get('id'))
      })
    );
  }
  gotoHeroes(hero) {
    debugger
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //this.router.navigate(['/learn/angular-base/router/heroes', { id: heroId, foo: 'foo' }]);
    this.router.navigateByUrl('heroes')
  }
}
