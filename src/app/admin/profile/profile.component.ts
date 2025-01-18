import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  addProfileForm: UntypedFormGroup = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    // address: new FormControl(),
    // phoneNumber: new FormControl(),
    // country: new FormControl(),
    // state: new FormControl(),
    // city: new FormControl(),
  });

   profileeditmode: boolean = false;

  constructor() {}

  users={
    firstname:"",
    lastname:"",
  }

  ngOnInit(): void {
    this.addProfileForm 
  }


 }
