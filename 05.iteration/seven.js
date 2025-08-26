//filter and map m difference h ki filter true value p lagta h but map sbbpe lag jata h
const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNums.map((num) => num + 10 )      // agar ek line m likha to simple or agar scope open kiya to return likhna padega

// const newNums = myNums.map((num) => {
//     return num + 10 }
// )
// chaining  bahut sare mehtod ek sath. isme jab first p lagega to result jo milega uspe second function lgega

const newNums = myNums.map((num) => num * 10).map((num) => num + 1 ).filter((num) => num >= 40 )



console.log(newNums);




