// number to string
let number=12;
let stringNumber=String(number)
// console.log(stringNumber)
// console.log(typeof stringNumber)
// string to number
let string="1234abc"   //but if we write string="1234abc" then it will give NaN but it will convert the string to number type of data type
let numberString=Number(string)
// console.log(numberString)
// console.log(typeof numberString)
//boolean to string
let isValue=true;
let stringValue=String(isValue)
// console.log(stringValue)
// console.log(typeof stringValue)
//string to boolean
let stringvalue="true"
let booleanValue=Boolean(stringvalue)
// console.log(booleanValue)
// console.log(typeof booleanValue)
//nuber to boolean
let num=1;
let booleanNum=Boolean(num)
// console.log(booleanNum)
// console.log(typeof booleanNum)
//boolean to number
let bool=true;
let numBool=Number(bool)
// console.log(numBool)
// console.log(typeof numBool)
//null to string
 let nullValue=null;
 let stringNull=String(nullValue)
// console.log(stringNull)
// console.log(typeof stringNull)

/****************** operations *************/
let value=12;
let negValue=-value
// console.log(negValue)
//operators
// console.log(5+5)  //addition
// console.log(5-5)  //subtraction
// console.log(5*5)  //multiplication
// console.log(5/5)  //division
// console.log(5%2)  //modulus
// console.log(5**2) //exponentiation   
console.log(5+5*2)  //operator precedence
console.log((5+5)*2)  //parenthesis
console.log(5+5*2-10/2)  //operator precedence
console.log(5+5*2-10/2**2)  //operator precedence
console.log("1"+1)
console.log(1+"1")
console.log("1"+1+1)
console.log(1+1+"1") // first it will add 1+1 and then it will concatenate with "1" because of operator precedence and associativity
let str1="aditya"   
let str2=" kumar"
console.log(str1+str2)  //string concatenation


