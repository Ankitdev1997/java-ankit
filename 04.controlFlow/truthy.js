const userEmail = "ankit2pra"
if(userEmail){
    console.log("got user email");     // koi condition nhi de to string ko hi truthy value man lega
    
} else{
    console.log("dont have user email");
    
}  // truthy and falsy value chaiye


//falsy
//  false, 0 ,-0, bigint 0n, ""(emptystring), null, undefined,NaN


//baki sab true

//  [], "0"(string k andar 0 to truthy), "false"(string k andar to truthy)," "(space bhi de diya string m to truthy),{},function(){}

//empty array and object ko check karna
const emptyArr = []
if(emptyArr.length == 0){
    console.log("that is empty array");
    
}
const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("that is empty object");
    
}
