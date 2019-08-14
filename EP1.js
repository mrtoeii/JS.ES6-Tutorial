//Block Scope & Variable
//global , local -> block scope

let price = 20

//define
let fruit='มะม่วง'

if (price==20) {
    //update
    let fruit='ส้มโอ'    
    console.log('In block'+fruit);
}
console.log('Out block'+fruit);

//constrant ค่งคงที่ ไม่สามารถเปลี่ยนแปลงได้
//คือ cons

const person = {
    name:'Arkkarachat',
    last:'Siribout'
}
// Rename 
person.name='Mrtoeii'
console.log(person);


const total = 100
console.log(total);



