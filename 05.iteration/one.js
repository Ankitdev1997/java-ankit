//for loop
// block scope h to andar ki value bahar nhi jayegi //  sabse pahle ek var declare kara jo ki index h uski value h 0 then phir condition check krani h ki index<array.length jab ye contion sahi hogi to andar ka (element) var execute hoga  // phir execute hone s pahle loop index++ ek value bda dega jabtak condition match hogi

// for (let index = 0; index < array.length; index++) {            // basic structue for loop
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {      
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i < 10; i++) {      
//     const element = i;
//     if (element == 5 )
//     {
//         console.log("5 is best number");      //loop k andar if else vali condition
        
     
        
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {                         //loop k andar loop

//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and inner loop ${i}`);  //isme i value bhi kar sakte h kyoki ye scope child h i vale scope ka
//         console.log(i + "*" + j + " = " + i * j );
        
        
//     }
    
// }

// let myArr = ["flash", "batman","superman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
    
// }


//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index ==5) {
//         console.log(`detected 5 `);
//         break  // break lga dega vhi aage nhi jayega
        
        
//     }
// }



for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log(`detected 5 `);
        continue        // ek condition k liye maaf kr dega phir continue but ye print nhi hoga
        
        
    }
    console.log(`value of index is ${index}`);
    
}
