export class User{
    name: string ;
    age:number ;
    weight:number ;
    height:number ;
    password:string ;  

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name;
        this.age = age;
        this.password = password;
        this.height = height;
        this.weight = weight;
    }

    isOld():boolean{
        if(this.age >= 100)
            return true;
        else   
            return false;
    }

    getBMI():number{
        return this.weight/((this.height/100)^2);
    }

    isHealthy():boolean{
        return(this.getBMI() >= 18.5 && this.getBMI()<=24.9);
    }
}