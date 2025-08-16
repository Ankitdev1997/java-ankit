const accountId = 14415
let accountEmail = "ankit2313@gmail.com"
var accontPassword = "12345"
accontCity = "jaipur"
let accountState;
// accountId = 2 not allowed to change const
/* do not use (var) ever because of issue in global scope and block scope*/
accountEmail = "hc@akki.com"
accontPassword = "21212121"
accontCity = "bengaluru"
console.log(accountId);
console.table([accountId,accontPassword,accontCity,accountEmail,accountState])


