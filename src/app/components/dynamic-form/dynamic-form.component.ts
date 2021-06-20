import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormArray} from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
 
  constructor(private fb:FormBuilder){}
  userProfile= this.fb.group({
    userName: ['',Validators.required],
    password : [''],
    email : [''],
    contact: [''],

    address: this.fb.group({
      city:[''],
      state:['']

    }),
    mobiles:this.fb.array([
      this.fb.control('')
    ])
  });

  ngOnInit(): void {
  }
  counter:number=0;
  onSubmit(){
    console.log(this.userProfile.value);
    // console.log(this.userProfile.controls['userName'].value);
    // console.log(this.userProfile.get('email')?.value);

    // console.log(this.userProfile.get(['address','city'])?.value);
    // console.log(this.userProfile.get('address')?.get('city')?.value);


    console.log(this.userProfile.get(['mobiles','0'])?.value);
    this.counter=0;
    for(let m of this.mobiles.controls ){
      console.log(this.userProfile.get(['mobiles',this.counter])?.value);
      this.counter=this.counter+1;
    }
   
  }
get mobiles(){
  return this.userProfile.get('mobiles') as FormArray;
}

  addNewMobile(){
    this.mobiles.push(this.fb.control(''));
  }

}
