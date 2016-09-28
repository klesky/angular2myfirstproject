import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user";

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    //find sum of users age
    let sum = 0;
    users.forEach((value:User, index:number, arr:User[])=>{
      sum+=value.age;
    })
   
    return sum;
  }

}
