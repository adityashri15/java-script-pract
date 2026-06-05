//array
 const arr=[0,1,2,3,4,5]
 const myheros = ['thor','spiderman','ironman','captain america']
 const myarr2 = new Array(0,1,2,3,4,5)
//  console.log(myheros[3])
  


 /////array methods
//  myarr2.push(6)    //add element at the end of the array
//  myarr2.pop() //remove last element of the array
myarr2.unshift(12) //add element at the beginning of the array
myarr2.shift() //remove element at the beginning of the array
//  console.log(myarr2); //add element at the end of the array
// console.log(myarr2.includes(12)); //remove last element of the array
// console.log(myarr2.indexOf(3)); //add element at the beginning of the array
// const newarr= myarr2.join() //remove element at the beginning of the array convert array to string
// console.log(newarr);
 const my1= arr.slice(1,3)
    console.log(my1);
    console.log( "A",arr);
const my2=arr.splice(1,3) //remove element from the array and return the removed element
console.log(my2);
console.log("B",arr);