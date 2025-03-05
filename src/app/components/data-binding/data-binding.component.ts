import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  firstName: string = "Christopher";
  rollNo: number = 121;
  isActive: boolean = true;
  currentName: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  courseName: string = "Angular"
  currentDate: Date = new Date();
  studentObj: any = {
    name:"Lim",
    city:"Toronto",
    mobile:"019283019283"
  }

  constructor(private router: Router){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 19 Website")
  }

  onCityChanged(){
    console.log("City Changed");
  }

  navigateToHome(){
    this.router.navigateByUrl("/home")
  }

  hideShowDiv1(isShow: boolean) {
    this.div1Visible=isShow;
  }

}
