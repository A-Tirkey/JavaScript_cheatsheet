///// convert to Number
let score = "22"
console.log(typeof score);
let valueInNumber = Number(score)  // Number() is to covert it in number
console.log(typeof valueInNumber);


// for string or combination character and number
let a = "22a"  
let numberA = Number(a)
console.log(typeof numberA); // it convert 'a' into number even thoigh it is not a pure number
console.log(numberA); // it gives a value NaN

//for null
let b = null
let numberB = Number(b)
console.log(typeof numberB); 
console.log(numberB); // gives value 0


//for undefined
let c = undefined
let numberC = Number(c)
console.log(typeof numberC); 
console.log(numberC); // gives value NaN

//for boolean
let d = true
let numberD = Number(d)
console.log(typeof numberD); 
console.log(numberD); // gives value 1

/* convert to Number
 "33" => 33
 "33a" => NaN
 true => 1; false => 0
 null => 0
 undefined => NaN

*/

//// convert to Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); //gives  true

let e = ""
let booleanE = Boolean(e)
console.log(booleanE);  // gibve false

let f = "Abhijeet"
let booleanF = Boolean(f)
console.log(booleanF); // gives true

/*
 Convert to Boolean
 1 => true; 0 => false
 "" => false
 "Abhijeet" => true
*/

//// convert to string

let number=33
let stringNumber = String(number)
console.log(typeof stringNumber);
console.log(stringNumber);

// *********************** Operations *********************

let value = 3
let negValue = -value
console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //means 2^3
// console.log(2/3);
// console.log(2%3); // gives remainder

let str1 = "Hello"
let str2 = " Abhijeet"
let str3 = str1 + str2 // add the string
console.log(str3); 

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + 2 + "2" + 3 + 4);
