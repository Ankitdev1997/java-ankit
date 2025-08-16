// Immediately invoked Function expressions(iife)//inka kam h global scope ko block scope m mix hone s bachana
(function chai(){
    //named iife
    console.log(`DB connected`);   //parenthesis()lga diya bahar or ek last m execusion k liye taki iife kam kre
    
})();


(   (name) => {
    console.log(`db connected2 ${name}`);
    
}             )("ankit");      //yad s semicolan lgana h
