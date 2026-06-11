
 function saymyname(){
     console.log ("a");
 console.log("d");
 console.log("i");
 console.log("t");
 console.log("y");
console.log("a");
 }
 //saymyname()
 //function add(n1,n2){
//     console.log( n1+n2);
//  }
//   const result=add(4,3)
// console.log("result=",result)
///correct way


function add(num1,num2){
    return num1+num2;
}
result = add(4,5)
// console.log("result===",result)
   
function loginUserMessage(username="aman"){
    if(username === undefined){//(!undefined)
        console.log("please enter a username")
        return
    }
return `${username} just logged in`
}
const name=loginUserMessage("aditya") // if the value is not passed it will return undefine
console.log(name)