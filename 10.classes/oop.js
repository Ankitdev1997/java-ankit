// object literals
const user = {
    username: "hitesh",
    loginCount: 8,
    singedIn: true,
    getUserDetails: function(){
        // console.log("Got User deatils from database");
        //.this keyword use karte h apne current context k liye
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
    }
}
//method hote h functions
//properties hoti h jase .length
// console.log(user.username);
// console.log(user.getUserDetails());//method h to () lgana padega
// console.log(this); //global scope m node js terminal p current context empty h but jab browser p dalenge this to bahut sara data milega


// constructor functions

const promiseOne = new Promise()
const date = new Date() //new keyword nya context bnane k kam aata h

function user(username,loginCount,isLoggedIn) {
    this.username = username  ;         //left vala variable h and right vala argument jo parameter m pass kiya h
    this.isLoggedIn = isLoggedIn
this.loginCount = loginCount
return this
}


// const userOne = User("hitesh",12,true)     // agar khali dono m user likhenge to result m overwrite kar dega isiliye hum  (new) constructor ka use karte h isse har bar nya istance milta h.
// const userTwo =  User("chai",11,false)

const userOne = new User("hitesh",12,true)
const userTwo = new User("chai",11,false)


console.log(userOne);
