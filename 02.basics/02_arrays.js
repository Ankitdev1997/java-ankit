const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);//ase merge nhi hote
// console.log(marvel_heros[2]);//usko bhi ek string ki traha manega     
 const allHeros = marvel_heros.concat(dc_heros)//concat merge kar dega arrays 
 console.log(allHeros);




//  new method
 const all_new_heros = [...marvel_heros, ...dc_heros]//spred operator
 console.log(all_new_heros);




//  const anotherArray = [1,2,3, [4,5,6],[6,7,[4,5]]]
//  const real_array = anotherArray.flat(Infinity)//jab bahut sare array combine karne ho to flat
//  console.log(real_array);

console.log(Array.isArray("ankit"));//sawal puch rha h ki array h kya

console.log(Array.from("ankit"));//array m convert kar diya
console.log(Array.from({name: "ankit"}));// intersting case isme only array box de dega kyoki mention karna padega ki kiska array chaiye

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



 
 
 


