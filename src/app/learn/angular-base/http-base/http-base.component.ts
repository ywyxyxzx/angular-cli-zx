import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-base',
  templateUrl: './http-base.component.html',
  styleUrls: ['./http-base.component.scss']
})
export class HttpBaseComponent implements OnInit {
  showHeroes = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  constructor() { }

  ngOnInit() {
  }
  
  toggleHeroes() { this.showHeroes = !this.showHeroes; }
  toggleConfig() { this.showConfig = !this.showConfig; }
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  toggleUploader() { this.showUploader = !this.showUploader; }
  toggleSearch() { this.showSearch = !this.showSearch; }

}
