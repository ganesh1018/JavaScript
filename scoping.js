//  let a =10;//functionally and block scoped
// var b=20; 
//  const c=300;//functionally and block scoped

// {
//   let a =100;
// var b=20;//globally scoped
// const c=30;
  
// }
// console.log(a,c,b);

// function outer(){
//     const username="ganesh";
//     function inner(){
//         const website="youtube";
//         console.log(username);//it can access the variables from outer functions
        
//     }
//     //console.log(website);//it cant access the variables from inner function
//     inner()
    
// }
// outer()

if(true){
    const name="ganesh"
    if(name){
        const website="youtube"
        console.log(name);
        
    }
    //console.log(website);
    
}
//console.log(name,website);

//+++hoisting++++
add(3);//we can access this regular function before initialization
function add(num1){
    return num1+1;
}
//add1(4)//Cannot access 'add1' before initialization
const add1=function(num1){
    return num1+1;

}
add1(4)