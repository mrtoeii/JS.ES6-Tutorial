//Computed Property Name

// let food1={
//     name:'Cake',
//     price:'200'
// }
// console.log(food1);
// let food2={
//     'name':'Cookie',
//     'Price': 40
// }
// console.log(food2);

// let user= {
//     ['user'+1*10]:'Mrtoeii',
//     ['user'+2*5]:'Arkkarachat'
// }
// console.log(user);


// let name = 'Cake'
// let food ={
//     [name]:name+' Orange',
//     price:'25'
// }
// console.log(food);


let name = 'fruit'
let menu ={
    [name]:name+' ส้ม',
    [name+"Mix"]:'ผลส้ม'
}
let{
    fruit,
    fruitMix
}=menu
console.log(fruit);
console.log(fruitMix);
