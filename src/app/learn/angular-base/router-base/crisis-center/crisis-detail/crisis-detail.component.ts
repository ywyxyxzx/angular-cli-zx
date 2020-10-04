import { Component, OnInit, Input } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  hero$;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(params.get('id'))
      })
    );
  }
  gotoHeroes(hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //this.router.navigate(['/learn/angular-base/router/heroes', { id: heroId, foo: 'foo' }]);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
