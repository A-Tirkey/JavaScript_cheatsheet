console.log("2" > 1); // gives true
console.log("02" > 1); // gives true
// // "2" and "02" will automatically be converted to Number

console.log(null > 0); // gives false
console.log(null == 0); // gives false
console.log(null >= 0); // gives false
/* euality check == and comparisions >,<,>=,<= works differently
Comparisions convert null to a number,treating it as 0.
 That's why null>=0 gives true and null>0 gives false
*/

 // ===  also called strict check
 // it checks the value and datatype 

 console.log("2" == 2); // gives true
 console.log("2" === 2); // gives false