import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Logger } from '../logger.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
  useFactory: (logger: Logger, userService: UserService) =>
      new HeroService(logger, userService.user.isAuthorized),
  deps: [Logger, UserService],
})
export class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) {
      debugger
     }

  getHeroes() {
    debugger
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
