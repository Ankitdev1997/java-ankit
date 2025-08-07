//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//************************************ */


// there are two types of memory
//stack(primitive m use hoti h)  jab bhi stack memmory use hogi to variable ki copy milegi
// and heap(non-primitive m use hoti h) but jab heap use hogi to original value ka refrence milega
let myYoutubename = "ankitprajapatdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);// isme hme copy di jati h to isme to change hoga but original m nhi
console.log(myYoutubename);
let userOne = {
    email: "user@google.com",
    upi:  "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);


