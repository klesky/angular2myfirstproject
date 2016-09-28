import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
  new User("Jack", 25, "jackie", 180, 80),
  new User("Pop", 30, "jackie", 162, 60),
  new User("Yom", 29, "jackie", 170,50),
  new User("Nick", 40, "jackie", 152, 50),
  new User("Miggie", 45, "jackie", 166, 70)
]

//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = "BMI Calculator";
  //user:User
  selectedUser:User;
  isEditMode:Boolean = false;
  users:Array<User>;
  

  constructor(){
    // this.user = new User;
    // this.user.name = "Ooi Soon Yoong";
    // this.user.age = 34;
    // this.user.weight = 87;
    // this.user.height = 185;
    this.selectedUser = USERS[0]
    this.users=USERS;
  }

  onCheckAge(){
    //if(this.user.age >= 100)
    if(this.selectedUser.isOld())
      alert("Too Old")
    else
      alert("Ok")
  }

  onCheckBMI(){
    alert("Your BMI: " + this.selectedUser.getBMI())
  }

  toggleEdit(){
    this.isEditMode = !this.isEditMode;
  }

  deleteUser(index){
    //alert(index);
    //delete this.users[index];
    this.users.splice(index,1);

    let tempUsers:Array<User>;
    tempUsers = [];
    this.users.forEach(item =>{
      tempUsers.push(item)
    })
    this.users = tempUsers
    console.log(this.users);
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name");
    tempUser.password = prompt("password");
    tempUser.age = Number(prompt("age"))
    tempUser.weight = Number(prompt("weight"));
    tempUser.height = Number(prompt("height"));
    this.users.push(new User(
      tempUser.name,
      tempUser.age,
      tempUser.password,
      tempUser.height,
      tempUser.weight
    ))

    let tempUsers:Array<User>;
    tempUsers = this.users.slice(0);
    // tempUsers = [];
    // this.users.forEach(item =>{
    //   tempUsers.push(item)
    // })
    this.users = tempUsers
    console.log(this.users);
  }
}
