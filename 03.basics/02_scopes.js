
//var c = 30 kabhi bhi use nhi karna kyoki ye andar ki value bhi bahar dikhata h


// {}            //scope bolte h   jo scope k bahar value h use bolte h global scope andar vali bahar nhi jani chaiye and bahar vali andrar nhi
//jo scope k andar h vo h block scope
let a = 300
if(true){
let a = 10 
const b = 20 

console.log("inner: ",a); // andar print kra to value a = 10 kyoki block scope

}

// console.log(a);// bahar console print kra to value 300 kyoki global scope 
// console.log(b);
