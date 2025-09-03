const mysym=Symbol("key1")
const User={
    name:"ganesh",
    email:"ganesh@gmail",
    "full Name":"Ganesh Reddy",
    [mysym]:"mykey1",//syntax should be like this to act as symbol(unique)
    age:22,
    isLoggedin:false,
    lastloginday:["mon","tue","wed"]
}
// console.log(User.age);
// console.log(User["email"]);
// console.log(User[mysym]);

User.age=24;
console.log(User.age)
//Object.freeze(User)
User.age=29;
// console.log(User.age);
// console.log(User)

User.greeting=function(){
    console.log("Hii good morning....")
}
// console.log(User.greeting)//[Function (anonymous)]
// console.log(User.greeting());
// User.greeting2=function(){
//     console.log(`hi ${this.name}`)
// }
// console.log(User.greeting2())
//const tinderuser=new Object();//single ton object
const obj1={1:"a",2:"b",3:"c"}
const obj2={3:"a",4:"b",5:"c"}
const obj3={...obj1,...obj2}
// const obj=Object.assign({},obj1,obj2)
// console.log(obj===obj3);
// console.log(obj)

//console.log(obj3);
const users=[
    {
        name:"ganesh",
        id:"1"
    },
    {
        name:"ganesh",
        id:"1"
    },
    {
        name:"ganesh",
        id:"1"
    },
    {
        name:"ganesh",
        id:"1"
    },
    
]
users[1].id
// console.log(Object.values(User));
// console.log(Object.keys(User));

//+++Object Destructuring ++++++
const{name,email,age,isLoggedin,lastloginday,greeting}=User;
console.log(greeting())

