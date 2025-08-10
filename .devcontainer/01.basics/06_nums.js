// const score = 400
// console.log(score);


// const balance = new Number(100)// new pattern k hisab s define bhi kar sakte h ki hme number m hi value chaiye
// console.log(balance);


// console.log(balance.toString().length);//ye ab string m change ho gya to ham .lenth puch sakte h
// const balance = new Number(100.25)//hamesha N capital
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));//important h kha precison dena h agar 4 pe de denge to 4th k hisab s precise krega


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));//indian no. system k hisab by default american k hisab s h

//******Maths************* */

console.log(Math);   // M capital rahega by default
// console.log(Math.abs(-4));// ngative +ve m change ho jayega
// console.log(Math.round(4.6));// rond off kar dega 4.6 ko 5
// console.log(Math.ceil(4.2));//upper value lega 4.2 ka bhi 5
// console.log(Math.floor(4.6));// lower value lega 4.6 ka bhi 4
// console.log(Math.sqrt(2));//square root 2 ka 1.41421
// console.log(Math.pow(2,5));//2 ki power 5 = 32
// console.log(Math.min(2,3,4,9,6));//array ki minimum value jo ki 2 h same for max value
// console.log(Math.random())
// console.log((Math.random() * 10 ) + 1)
// console.log(Math.floor(Math.random()* 10) + 1);


// console.log((Math.random()*10 )+ 1);// ase random value milti h 0to 1uske bad 10 s multiply then +1 taki dice game m use kar ske
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );

