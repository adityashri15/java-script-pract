// sigleton object
//object.create

//object litera
const mySym=Symbol("key1");

const jsuser={
    name:"aditya",
    "fulname":"aditya kumar",
    [mySym]: "myKey1",
    age:23,
    locTion:"delhi",
    email:"abc@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday"]

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log( jsuser[mySym]);
jsuser.email="def@gmail.com";
//Object.freeze(jsuser)
jsuser.email="ghijk@mailalal.com";
 //freeze the object to prevent modification
//console.log(jsuser);
jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting);
jsuser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting2())
// creating normal function

function greet() {
    console.log("hello");
    
}
console.log(greet())
 

///function with parameters
function greet2(name) {
console.log("heloo" +  name)    
}
let n=greet2("aditya")
console.log(n)
  // function with return values
function add(a,b){
    return a+b;
}
let result=add(2,4);
console.log(result)
// function expression used before 
 const greet3= function(){
    console.log("hello");
 }
 console.log(greet3())
 // arrow function
 const greet = () => {
  console.log("Hello!");
};

greet();
// short form const add = (a, b) => a + b;

console.log(add(2, 3)); // 5