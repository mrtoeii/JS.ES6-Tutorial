//Template Literals
const name = 'Arkkarchat'
const last = 'Siribout'
const city = 'SN'

//old
console.log('Old');

const all = name+' '+last+' => City: '+city
const allNew = name+' '+last+'\n City: '+city
console.log(all);
console.log(allNew);


//new
console.log('New');

const allname1 = `${name+' '+last} => City: ${city}`
const allname2 = `${name+' '+last}
City: ${city}`
console.log(allname1);
console.log(allname2);



