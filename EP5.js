//Spread Operator
//กระจายค่าจาก Array or Objaect

//Array
console.log('Array');

let fruit = ['มะม่วง','แตงโม']
console.log(fruit);

// let newFruit =[...fruit,'ทุเรียน','มังคุด']
// console.log(newFruit);

let food = ['ต้มยำ','ข้าวผัด']
let allfood = [...food,...fruit]
console.log(allfood);


//Object
console.log('Object');
let product = {
    name:'ทุเรียน',
    price: 200
}
console.log(product);

let newproduct={
    ...product,
    category:'ผลไม้'
}
console.log(newproduct);

let newprice={
    ...newproduct,price:500
}
console.log(newprice);



