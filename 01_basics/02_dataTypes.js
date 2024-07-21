"use strict"; // treat all js code as newer version

// alert(3+3) // it gives 6 in browser but we are using nodejs so it will not work

console.log(3+3);
console.log("hello")  

/*
JavaScript has a feature known as "automatic semicolon insertion" (ASI).
 However, while the language will generally insert semicolons where it thinks they are needed, 
 it can sometimes lead to unexpected results.
*/

let name = "Abhijeet" // string in "" or ''
let age = 22 // Number range '-(2^53 - 1) to 2^53 - 1'
let isLoggedIn = false // boolean true/false
let state = null // null => standalone value (representation of empty value)
let place; // undefined => means value is not defined

// symbol => use for uniqueness
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id); //retuns symbol
console.log(id === anotherId); // gives false bcz return value of Symbol will be different



// BigInt  => represent big number (put 'n' at last to represent it)
const bigNumber= 345678778267624n
console.log(typeof bigNumber);

// Array
const heroes = ["shaktiman", "nagraj", "doga"];
console.log(typeof heroes); // returns object

// object  => everything inside { } is object
let myObj = {
    name: "Abhijeet",
    age: 22,
}

// Function  ( you can also store the function)
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction); // function always returns a function but that is object function

console.log(typeof  "Abhijeet");
console.log(typeof age);
console.log(typeof (age)); 
console.log(typeof null); // null is an object
console.log(typeof undefined); // undefined

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function(object)
       Object  =>  object
*/


