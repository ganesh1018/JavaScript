const arr=[2,3,4,5,{"name":"aravind"}]
//console.log(arr[1]);
// arr.push("ganesh");

// arr.unshift(2)

// arr.shift()
// const arr1=arr.slice(1,3) no changes in original array
// console.log(arr1)
// console.log(arr)
// const arr2=arr.splice(1,3) 1 to 3 elemets will be removed from from original array 
// console.log(arr2)

//console.log(arr)

const marvel_heros=["thor","Ironman","groot","c_america"]
const dc_heros=["superman","Batman","flash"]
// marvel_heros.push(dc_heros)// changes will be happpened in existing array
// console.log(marvel_heros);
// console.log(marvel_heros[4][1])
const superheros=marvel_heros.concat(dc_heros);//it returns new array
//console.log(marvel_heros);
//console.log(superheros);

//spread operator

const allheros=[...dc_heros,...marvel_heros]
//console.log(allheros);
const another_arr=[1,2,3,4,[6,7,8,[9,10,11]]]
const real_another_arr=another_arr.flat(Infinity);
console.log(real_another_arr);
console.log(Array.isArray("ganesh"))
console.log(Array.from("ganesh"))
console.log(Array.from({name:"ganesh"}))//interesting
let scores1=100
let scores2=100
let scores3=100
console.log(Array.of(scores1,scores2,scores3))



