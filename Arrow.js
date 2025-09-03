const user={
    name:"ganesh",
    age:22,
    Welcomemessage:function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this)//this refers to current context
    }
};
// user.Welcomemessage()
// user.name="aravind"
// user.Welcomemessage()
//  console.log(this)//{}   rn we are in node environment , so it will execute an empty object 
//  function one(){
//     console.log(this);//global object
    
//  }
//  one()
//  const two=()=>{
//     console.log(this);//{}   arrow function gives empty object as output for current context
//  }
//  two()
// const addTwo=(num1,num2)=> {
//     return num1+num2;//explicit return //using return keyword when we are using curly braces
// }
// const addTWO=(num1,num2)=> num1+num2;//implicit return //when not using curly braces 

// ++++++ IIFE ++++++
(function chai(){
    console.log(`connecetd`);
    
})();

((name)=>{
    console.log(`conneceted  ${name}`);
    
})("ganesh");