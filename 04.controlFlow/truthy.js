// const userEmail = "ankit2pra"
// if(userEmail){
//     console.log("got user email");     // koi condition nhi de to string ko hi truthy value man lega
    
// } else{
//     console.log("dont have user email");
    
// }  // truthy and falsy value chaiye


//falsy
//  false, 0 ,-0, bigint 0n, ""(emptystring), null, undefined,NaN


//baki sab true

//  [], "0"(string k andar 0 to truthy), "false"(string k andar to truthy)," "(space bhi de diya string m to truthy),{},function(){}

//empty array and object ko check karna
// const emptyArr = []
// if(emptyArr.length == 0){
//     console.log("that is empty array");
    
// }
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("that is empty object");
    
// }

// false == 0 ,  0 == "" , false == ""
// all above statement are true


// nullish coalescing operator(??): null , undefined k liye use karte h

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10


// val1 = undefined ?? 15    // in sabka matlab h agar value aa jati h to value show kar do varna null ya undefined de do

val1 = null ?? 15 ?? 10   //isme jo pahle value milegi vo assign kar dega


console.log(val1);


//terniary operator (?)

//condition ? true : false    syntax ase form m hoga

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

