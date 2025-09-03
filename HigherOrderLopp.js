 const arr=[1,2,3,4,5];
// const  obj={
//     name:"ganesh",
//     age:"22",
//     gmail:"ganesh@gmail"

// }
// // for(const num in obj){
// //     console.log(num,obj[num])
// // }
// for(const key in arr){//index of an array . array has numbers as indexes by default
//     console.log(key,arr[key])
// }

// for (const element of arr) {
//     console.log(element);//here it will print elements in the array
    
    
// }
// arr.forEach((val)=>{
//     console.log(val)
// })

// const newnums =arr.filter((num)=> num>3)
// console.log(newnums);
const total=arr.reduce(((prev,curr)=> prev+curr),0)
console.log(total)