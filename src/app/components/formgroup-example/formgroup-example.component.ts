import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-formgroup-example',
  templateUrl: './formgroup-example.component.html',
  styleUrls: ['./formgroup-example.component.css']
})
export class FormgroupExampleComponent implements OnInit {
  userProfile= new FormGroup({
    userName: new FormControl('',Validators.required),
    password : new FormControl(""),
    email : new FormControl(''),
    contact: new FormControl(''),

    address: new FormGroup({
          city: new FormControl("",Validators.required),
          state:new FormControl(''),
          pincode:new FormControl('')
    })

  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.userProfile.value);
    console.log(this.userProfile.controls['userName'].value);
    console.log(this.userProfile.get('email')?.value);

    console.log(this.userProfile.get(['address','city'])?.value);
    console.log(this.userProfile.get('address')?.get('city')?.value);
    
    
    

  }

}
