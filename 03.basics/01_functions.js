//jab same kam baar bbar krna ho to use fun ctions  (isko bolte h parenthesis) {curly bracket}
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}
//sayMyName ye  h refrence agar parenthesis lag gya to execosion ho jayega
// sayMyName()   //ye execute krane k liye

// function twoNumbers(number1, number2){    //number1,number2 are parameters jo ki kuch bhi ho skta h strins , boolean
//     console.log(number1 + number2);
    
// }
// twoNumbers(3,4)   //3,4 are arguments jo hamne answer k liye diye

function twoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
return number1 + number2 
}
const result = twoNumbers(3,5)
// console.log("result",result);





function loginUserMessage(username){
return `${username} just logged in`
}
console.log( loginUserMessage("ankit"));



