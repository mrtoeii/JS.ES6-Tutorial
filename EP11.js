//Inheritance (การสืบทอดคุณสมบัติ)
class Admin{
    constructor(){
        console.log('Call Constructor');
    }
    idPermission(){
        console.log('Read Write Data from Database');        
    }
}
class User extends Admin {
    constructor(name,age){
        super() //เรียก constructor ใน class แม่
        this.name=name,
        this.age = age
    }
    SayHi(){
        console.log('Hello ='+this.name+',Age = '+this.age);
        
    }
}
let user1 = new User('Arkkarachat',27)
user1.SayHi()
user1.idPermission()