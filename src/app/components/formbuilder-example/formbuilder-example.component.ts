import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-formbuilder-example',
  templateUrl: './formbuilder-example.component.html',
  styleUrls: ['./formbuilder-example.component.css']
})
export class FormbuilderExampleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userProfile= this.fb.group({
    userName: ['',Validators.required],
    password : [''],
    email : [''],
    contact: [''],

    address: this.fb.group({
      city:[''],
      state:['']

    })
  });

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userProfile.value);
    console.log(this.userProfile.controls['userName'].value);
    console.log(this.userProfile.get('email')?.value);

    console.log(this.userProfile.get(['address','city'])?.value);
    console.log(this.userProfile.get('address')?.get('city')?.value);
    
    
  }

}
