const user = {
    username: "ankit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);      // this keyword current context  ko refer karta h matlab is object k curly braces k andar k content ko acces karna k liye
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); // empty object aa rha h print karne p kyoki global scope m kuch h hi nhi



// function chai(){
//     let username = "hitesh"
//     console.log(this.chai); //answer is undefined kyoki this ko object m hi access kar sakte h
    
// }
// chai()


// const chai = () => {                // arrow function ko ase likhte h. // first method to write agar curly m kra to return keyword likhna padega.     explicit return.  jab keyword lgana pde
// let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
// return num1 + num2
// }
// const addTwo = (num1,num2) =>  num1 + num2   // 2nd method likhne ka
// const addTwo = (num1,num2) =>  ( num1 + num2)  // 3rd method likhne ka// (parenthsis) m rakh sakte h  implicit return

const addTwo = (num1,num2) =>  ( {username: "hitesh"}) 


console.log( addTwo(3,4));




