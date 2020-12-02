import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: []
})
export class ConfigComponent implements OnInit {

  constructor(private configService:ConfigService) { }
  config: Config;
  error: any;
  headers: string[];
  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        console.log(resp,'response',resp.body)
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
  
        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
}
