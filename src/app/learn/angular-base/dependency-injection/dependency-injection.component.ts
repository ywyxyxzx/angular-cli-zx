import { Component, Injector, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { APP_CONFIG, AppConfig} from './app.config';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {
  title: string;
  constructor(private userService: UserService, @Inject(APP_CONFIG) config: AppConfig) { 
    this.title = config.title;
  }

  ngOnInit() {



  }

  nextUser() {
    this.userService.getNewUser(); 
  }
  get user()         { return this.userService.user; }
  get isAuthorized() { return this.user.isAuthorized; }
  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
    `${this.isAuthorized ? '' : 'not'} authorized. `;
}

}
