//Primitive

//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt


//Reference Type(Non Primitive)
// Array,objects,Functions



// Dynamic type language


//stack (Primitive)(work on copy)  Heap (Non primitive)(directly work on reference)

const name="ganesh reddy"
let changename=name;
// changename="aravind reddy"
// console.log(name);
// console.log(changename);
// const userdata={
//     name:"ganesh ressy",
//     email:"ganesg@gamil.com"
// };
// let data=userdata;
// data.email="aravind@gmail.com";
// console.log(userdata);
// console.log(data);
// ganesh reddy
// aravind reddy
// { name: 'ganesh ressy', email: 'aravind@gmail.com' }
// { name: 'ganesh ressy', email: 'aravind@gmail.com' }

const gameName="cricket";
console.log(gameName.concat("game"));
console.log(gameName.replace('r','g'));
console.log(gameName.replaceAll("cricket","football"));
console.log(gameName.substring(2));
console.log(gameName.slice(-2,7));



console.log(gameName);


