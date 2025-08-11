//objects and events are most important in java
//singleton jab bhi ham constructor s banenge to sinleton object banega example = object.constructor

//object literals
const mySym = Symbol("key1")//sym ko define krne k liye

const JsUser = {
    name: "ankit" ,   //name is key and ankit is value object m dono ko define kar sakte h
    age: 27,
    "full name": "ankit prasjapati",
    [mySym]: "mykey1",//symbol ko ase [] denoite krna padega vrna ye string hi bnega
    location: "jaipur",
    email: "ankit@goggle.com",
    isLoggedIn: false ,
    lastLoginDate: ["monday", "saturday"]
}
// console.log(JsUser.email);     //method1
// console.log(JsUser["email"]);// method2 "full name vali value dot s excess nhi hogi to 2nd method"
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com" // value change krne k liye


// console.log(JsUser.email);


// Object.freeze(JsUser)//js user ko rok dega change hone s
// JsUser.email = "hitesh@microsoft.com"



JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting2());


