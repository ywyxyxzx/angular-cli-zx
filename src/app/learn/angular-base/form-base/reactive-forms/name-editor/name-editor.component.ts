import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

 //name = new FormControl('');
 profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
});
constructor() { }

ngOnInit() {
  
}

// updateName() {
//   this.name.setValue('Nancy');
// }

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
}
