import { Component, OnInit } from '@angular/core';
export type EditorType = 'name' | 'profile' | 'profile2';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {


  editor: EditorType = 'name';
  constructor(){}

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showProfileEditor2() {
    return this.editor === 'profile2';
  }
  ngOnInit(){
    
  }



  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
