const alian=["jaadu","predator","thanos"]
const movies=["krish","alianvspredator","avengers"]
//alian.push(movies)
//console.log(alian);
//console.log(alian[3][1]);
//console.log(typeof (alian + movies));
 const allMovies = alian.concat(movies)
console.log(allMovies);
//const allMovies = [...alian,...movies]// spread operator    
//console.log(allMovies);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity) //flat method to flatten the array
console.log(real_another_array.sort());
console.log(Array.isArray("aditya")); 
console.log(Array.from("aditya"));
console.log(Array.from({name :"aditya"}))  //to check if the variable is an array or not    
let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3)); //to create an array from the given arguments
scores=[score,score2,score3]
console.log(scores);