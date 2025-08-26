const coding = ['js','ruby','java','python','cpp']

// coding.forEach(function (item){
//     console.log(item);
    
// })       // function s name hta lenge to vo callback function ban jayega

//arrow fuction ki form m
// coding.forEach( (item) => {
//     console.log(item);
// } )

//2nd method karne ka pehle function declare kar do

function printMe(item){
    console.log(item)
    
}
// coding.forEach(printMe)


// coding.forEach((item,index,Array) => {
//     console.log(item,index,Array);
    
// } )

const myCoding = [{
    languageName : "javascript",
    languageFileName : "js"
}, 
{languageName : "python",
    languageFileName : "py"

},
{
    languageName : "c++",
    languageFileName : "cpp"

}
]
myCoding.forEach((item) => {
console.log(item.languageName);

})