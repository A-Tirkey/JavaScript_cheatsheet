// Two ways to declare an object 
// 1) Literals
// 2) constructor => object from constructor is 'singleton'

const mySym = Symbol("key")

//object literals (non-singleton)
const JsUser = {    // object have key: value pair
    name: "Abhijeet", // behind the scene keys are stored as string
    "full name": "Abhijeet Tirkey",  // you cannot acces it using Jsuser.fullname
    age: 22,
    location: "Vadodara",
    //mySym: "mykey1",  // you cannot use Symbol directly as a key 
    [mySym]: "mykey1",  // correct syntax (you have to define is first outside object)
    email: "abhijeet.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//two ways to print

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]); // correct way to access full name
console.log(JsUser[mySym]); // access symbol inside object (" " => is not used)
console.log(JsUser);

JsUser["email"] = "Arpita.yahoo.com"
console.log(JsUser["email"]);
JsUser.email = "Tirkey.chatgpt.com"

// // object freeze
// Object.freeze(JsUser) // now you cannot make changes after it
// JsUser.email = "hgjahajsf.google.com" // this change will not registered
// console.log(JsUser);


// +++++++++ functions +++++++++

// you can treat functions as variables
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting); // returns the reference of function
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

