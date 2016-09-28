import { Pipe, PipeTransform } from '@angular/core';

// 20 | my-pipe
// 20 years
@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  //args? ==> dont need to have args
  transform(value: any, args?: any): any {
    let unit:string = "year"
    if(typeof args == "string" && args.length>0)
      unit = args;
      
    if(value == 1)
      return value  + " year";
    else if(value > 1)
      return value + " years";
    else
      return "";
  }

}
