// for of loop

// ["", ""]   // array m strings
// [{},{},{}]  //array m objects

const arr = [1,2,3,4,5]
// for (const iterator of object) {       // iterator matlab variable and object matlab kispe loop lgana h  array p ye kisi bhi chiz p
    
// }    basic syntax (of) loop ka

for (const num of arr) {
    // console.log(num);
}                                // kuch nhi btana padta na hi condition na hi increment

const strings = "hello world"
for (const i of strings) {
    // console.log(`each char is ${i}`);
    
}

//Maps

const map = new Map()
map.set('IN' , 'india')
map.set('uk', 'united kingdom')
// console.log(map);    // map m unique value rehti h

for (const key of map) {
    console.log(key);
    
}      //key se sari value ayegi but

const map2 = new Map()
map.set('IN' , 'india')
map.set('uk', 'united kingdom')
// console.log(map);    // map m unique value rehti h

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}  //destructure of array

// const myObject = {                       // object p for of loop lgana   iterable nhi h
//     game1 : NFS ,
//     game2 : SPIDERMAN
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// }



