//Shorthand Property & Method
let name ='Mrtoeii'
let last ='Arkkarachat'
let age = 27
//Old
// let user={
//     name:name,
//     last:last
// }
// console.log(user);

//New
//P.1
// let user={
//    name,last,age
// }
// console.log(user);

//P.2
function user(name,last,age){
    return {
        name, last, age
    }
}
console.log(user(name,last,age));
