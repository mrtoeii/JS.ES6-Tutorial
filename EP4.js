//Rest Operator

// const adduser =(name,last,...city)=>{
//     return name+' '+ last+ ' => '+ 'City: '+city
// } 
// console.log(adduser('Arkkarachat','Siribout','Udonthani'));
// console.log(adduser('Mrtoeii','.S','KK','BK','SN','UD'));


const addMessage=(first,...message)=>{
    return message.map(m=>first+message)
}
const addNumber = (...number)=>{
    return number.reduce((first,current)=>{
        return first+current
    })
}
console.log(addMessage('Hello','JS','React'));
console.log(addNumber(1,2,3,4,5,6,7,8,9));
console.log(addNumber(10,20,30,40,50,60));
