import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit {
  monacoEditer: any;
  constructor() { }

  ngOnInit() {
    this.monacoEditer = monaco.editor.create(document.getElementById("container"), {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    });

  }

}
