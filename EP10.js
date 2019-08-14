//Class JavaScript ES6
//Old
// var user ={
//     name:'Mrtoeii',
//     age: 27,
//     SayHi:function(){
//         return 'Hello = '+this.name
//     }
// }
// console.log(user.SayHi());

// function User(name,age){
//     this.name=name,
//     this.age=age
// }

// User.prototype.SayHi=function(){
//     console.log('Hello ='+this.name+',Age = '+this.age);
    
// }

// var user1 = new User('Arkkarachat',27)
// user1.SayHi()

//New
class User{
    constructor(name,age){
        this.name=name,
        this.age = age
    }
    SayHi(){
        console.log('Hello ='+this.name+',Age = '+this.age);
        
    }
}
let user1 = new User('Arkkarachat',27)
user1.SayHi()