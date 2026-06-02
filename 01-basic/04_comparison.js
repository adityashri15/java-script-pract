//comparion operators
// console.log(1<2)  //less than
// console.log(1>2)  //greater than
// console.log(1<=2) //less than or equal to
// console.log(1>=2) //greater than or equal to
// console.log(1==1) //equal to
// console.log(1==2) //not equal to
// console.log(1!=2) //not equal to
// console.log(1===1) //strict equal to
// console.log(1===2) //strict not equal to
// console.log(1!==2) //strict not equal to
/**************comarison with different data types************/
console.log(1=="1")  //true because of type coercion
console.log(null>0)
console.log(null==0)
console.log(null>=0)//true because of type coercion but it is not greater than or equal to 0 because null is not a number but it is considered as 0 in type coercion
console.log(null<0)
console.log(1==="1") //false because of strict equality operator
console.log(undefined==null) //true because of type coercion
console.log(undefined===null) //false because of strict equality operator   
console.log(undefined>0) //false because undefined is not a number but it is considered as NaN in type coercion
console.log(undefined<0) //false because undefined is not a number but it is considered as NaN in type coercion
console.log(undefined==0) //false because of type coercion but it is not equal to 0 because undefined is not a number but it is considered as NaN in type coercion  
