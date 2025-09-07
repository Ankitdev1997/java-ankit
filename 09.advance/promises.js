// const promiseOne = new Promise(function (resolve, reject) {      //promise bnane k liye
//   //Do an async task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is compelete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {          //consume krane k liye .then
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Chai", email: "chai@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {    // user ya koi bhi variable le sakte h parameter m
//   console.log(user);
//   console.log(user.username);
  
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {         //then aata h resolve k liye
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {       //.catch aata h reject k liye
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));   // finally ata h default k liye

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()


const response = fetch("https://api.github.com/users/hiteshchoudhary")

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// // promise.all
// // yes this is also available, kuch reading aap b kro.
