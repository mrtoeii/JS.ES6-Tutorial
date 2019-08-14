//Arrow Function

//part 1
//ใช้กรณีที่มีคำสั่งมากกว่า 1 ให้มีการ Return object
// const sorwor=(a,b)=>{
//     console.log('Processig....');
//     return a+b
// }

//part 2 ใช้กรณีมีคำสั่งมีเพียวหนึ่งเดียว ไม่ต้องใส่ {}
//ไม่มี () 
const sorwor=(a,b)=>a+b
let result = sorwor(500,50)
console.log(result);

const student  = name=>({
    ame:name,
    age:10
})
let resultS = student('Arkkarachat')
console.log(resultS);

