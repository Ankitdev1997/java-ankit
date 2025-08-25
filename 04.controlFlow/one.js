//if statement




// if(true){     }               //agar condition true hogi to hi  code execute hoga


// if(false){      }              //agar condition false hogi to hi  code execute nhi hoga


// //example
// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }
// if (3 != 2){ "executed"}          //yes statement true h to code execute hoga

// // <,>,<=(2<=2),==(check karne k liye),!=(notequalto), ===(strict check karne k liye datatype ko bhi check karta h),!==
  
// const temprature = 41
// // if (temprature<50){
// //     console.log("less than 50");
// } else {
//     console.log("greater than 50")
// }
// console.log("always executed"); // bahar vala to execute hoga hi kyoki iska andar s koi matlab nhi h



// if (temprature<40){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50")
// }

const score = 200       // es = ko bolte h assign karna
if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}
//  console.log(`User power: ${power}`);   // bahar execute nhi hoga kyoki scope s bahar h(block scope h andar)


const balance = 1000
// if (balance > 500) console.log("test"); //implicit scope ek hi line m execute ho sakta h bina curly braces k  always use semicolan


//nesting(bohot sari condition ek sath)

if (balance < 500) {
    console.log("less than 500");
    
} else if (balance < 750){
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
    
}


// const UserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if (UserLoggedIn && debitCard && 2 == 2) {          //(&&)and statement dono condition check krega dono true aani chahiye
//     console.log("allow to buy courses");      // agar tino m se ek bhi galat hui to execute nhi hoga
    
// }
// if (loggedInFromGoogle || loggedInFromEmail){         //(||)or statement check karne k liye ya to ye ya ye
//     console.log("user logged in");
    
// }

