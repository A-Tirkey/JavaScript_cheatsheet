const userEmail = "hi@gmail.com"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//+++++++ falsy values
// false, 0, -0, BigInt 0n, "", null, undefined,NaN

//++++++++ truthy values
// "0", 'false, " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){  // Object.keys() se keys ka array aa jata hai uspe length property lagake oobject empty hai ki nahi check kr sakte hai
    console.log("object is empty");
}

//+++++ Nullish Coalescing Operator (??): nulll undefined

// basically it is a callback ki error aai to uske kis tarah se handle kare
let val1
// val1 = 5 ?? 10
// console.log(val1);  //print 5
// val1 = null ?? 10
// console.log(val1); // print 10

// val1 = undefined ?? 15
// console.log(val1); // print 15

val1= null ?? 15 ?? 20
console.log(val1);

//+++++ Terniary Operator

// conditon ? true : false

const iceTeePrice = 100
iceTeePrice >= 80 ? console.log("more than 80") : console.log("less than 80")