//array
const  myArr = [0,1,2,3,4,5,true,"hitesh"]//bracket k andar h elements ye koi bhi datatype ho skta h no.,strings etc
// console.log(myArr);
// const myHeros = ["shaktimaan","batman","spyderman"]
// const myArr2 = new Array(1,2,3,4)//index 0 s start hoga
// console.log(myArr2[1]);
//****Methods of arrays******** */
// myArr.push(6)//arrays m element add kar dega end m
// myArr.push(7)
// myArr.pop()//remove last element from array
// myArr.unshift(8)//agar starting m value change karni ho to
// myArr.shift()//opposite to shift
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()//array ko string m kar dega
// console.log(newArr);
// console.log(typeof newArr);


console.log(myArr);
// slice,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr)



const myn2 = myArr.splice(1,3)//splice original arrow m se hi uda deta h elements// end vala bhi include hota h
console.log(myn2);
console.log("C",myArr);




