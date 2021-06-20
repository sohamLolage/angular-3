import { Component, OnInit , DoCheck, AfterContentInit, AfterContentChecked,  
  AfterViewInit,  
  AfterViewChecked,  
  OnDestroy,OnChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,  
AfterViewInit,  
AfterViewChecked,  
OnDestroy,OnChanges  {
  data:any=100;
  constructor() { }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
}
ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
}
ngDoCheck() {
    console.log("********************");
    console.log("in doCheck =>ngDoCheck")
}
ngAfterContentInit() {
    console.log("ngAfterContentInit");
}
ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
}
ngAfterViewInit() {
    console.log("ngAfterViewInit");
}
ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
    console.log("********************");
}
ngOnDestroy() {
    console.log("ngOnDestroy");
}
fnAddNumber():void{
    this.data+=100;
}
deleteNumber():void{
    this.data -=10;
}

}
