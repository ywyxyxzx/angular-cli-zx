import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-profile-editer2',
  templateUrl: './profile-editer2.component.html',
  styleUrls: ['./profile-editer2.component.scss']
})
export class ProfileEditer2Component implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
