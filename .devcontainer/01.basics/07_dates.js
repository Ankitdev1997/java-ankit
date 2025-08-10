//dates
// let myDate = new Date()
// console.log(myDate);//sahi date s pta nhi chalta so we have to change in strings
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,25)//0 ko jan mante h java 
console.log(myCreatedDate.toString());

// let otherdate = new Date("2025-08-10")
// console.log(otherdate.toString());
let myTimeStamp = Date.now
// console.log(myTimeStamp());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/ 1000));
let newDate = new Date()
console.log(newDate.getMonth()); // 0 se start hoga

console.log(newDate.getDay())
newDate.toLocaleString("default",{weekday:"long"})


