import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "BMI Calculator";
  user:User
  isEditMode:Boolean = false;

  constructor(){
    this.user = new User;
    this.user.name = "Ooi Soon Yoong";
    this.user.age = 34;
    this.user.weight = 87;
    this.user.height = 185;
  }

  onCheckAge(){
    //if(this.user.age >= 100)
    if(this.user.isOld())
      alert("Too Old")
    else
      alert("Ok")
  }

  onCheckBMI(){
    alert("Your BMI: " + this.user.getBMI())
  }

  toggleEdit(){
    this.isEditMode = !this.isEditMode;
  }


}
