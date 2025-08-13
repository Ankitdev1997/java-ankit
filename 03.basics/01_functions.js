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





// function loginUserMessage(username){
// //     if(username===undefined){console.log("please enter a user name")//both same   !sign dalne s true chiz false ho jati h aur false chiz true in if staement.
// // return
// //     }
//     if(!username){console.log("please enter a user name")
// return
//     }
// return `${username} just logged in`
// }
// // console.log( loginUserMessage("ankit"));
// console.log(loginUserMessage());




function loginUserMessage(username = "sam")//agar upar hi value de de to kabhi bhi undefine nhi ayegi
{
//     if(username===undefined){console.log("please enter a user name")//both same(niche vala bhi)   !sign dalne s true chiz false ho jati h aur false chiz true in if staement.
// return
//     }
    if(!username){console.log("please enter a user name")
return
    }
return `${username} just logged in`
}
// console.log( loginUserMessage("ankit"));
// console.log(loginUserMessage("hitesh"));



function calculateCartPrice(val1, val2 , ...num1){                     //... matlab rest or spread operator as used case dono m se kuch bhi bol skte h
    return num1
}
// console.log(calculateCartPrice(200,400,500,600,700));// isme val 1 ho gyi 200, and val2 ho gyi 400 and baki sari ...num1 k array m .


const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user) 
//2nd method direct object bhi rakh sakte h
handleObject(
    {
        username: "sam",
        price: 199
    }
)

const myNewArray = [200,400,600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(
    [200,400,600]
));

