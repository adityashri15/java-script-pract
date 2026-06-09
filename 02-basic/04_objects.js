//const tinderuser=new Object() //singalton object
 const tinderuser={}
 tinderuser.id=123
 tinderuser.name="aditya"
 tinderuser.isLoggedIn =false
// console.log(tinderuser);
 

const regularuser={
    email:"someperson@gmail.com",
    fullname:{
        userFullName:{
            firstname:"aditya",
            lastname:"shrivastwa"
        }
    }
}
 //console.log(regularuser.fullname.userFullName.firstname)
 const obj1={1: "a",2:"b"}
 const obj2={3: "a",4: "b"}

 const obj3={...obj1,...obj2 }
 //const obj3=Object.assign({},obj1,obj2)
 console.log(tinderuser)
 console.log(Object.keys(tinderuser)) // returns arrays of keys
 console.log(Object.values(tinderuser))
  console.log(Object.entries(tinderuser))
  console.log(tinderuser.hasOwnProperty(isLoggedIn))
//  console.log(obj3)