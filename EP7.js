//Template Literals

//old
// console.log('Old');
// var person = {
//     name:'Mrtoeii',
//     skill:'JSES6,PHP,Python'
// }
// var name = person.name
// var skill = person.skill
// console.log(`Name ${name}, Skill: ${skill}`);


//new
console.log('New');
var player ={
    name:'Mrtoeii',
    skill:'JSES6,PHP,Python'
}
let{name,skill} = player
console.log(`Name ${name}, Skill: ${skill}`);

