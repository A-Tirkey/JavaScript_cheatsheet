const accountId=144553
let accountEmail = "abhijeet.google.com"
var accountPassword="12345";
accountCity="Jaipur" // it is possible but not declare variables like this
let accountState;

/*
prefer not to use Var because of issue in block scope and functional scope
*/

console.log("accountEmail"); // " " it will print as it is
console.log(accountEmail);  

accountEmail="hello.ggogle.com"
accountPassword="2121221"
accountCity="Vadodara"

// show in a tabuler manner
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);