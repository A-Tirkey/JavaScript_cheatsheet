
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
}

//sayMyName()


// function addTwoNumbers(number1, number2){   // here number1 and number2 are parameters
//    console.log( number1 + number2);
// }

// addTwoNumbers(3,4)   // here 3 and 4 are arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2){   
    //    let result = number1 + number2
    //    return result
    return number1 + number2
    }

const result = addTwoNumbers(3,4)  
console.log(`Result: ${result}`);  



// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Abhijeet"));
// console.log(loginUserMessage()); // no argument passed => undefined just logged in

// function loginUserMessage(username){
   
//     if(!username){
//         return `Please enter a username`
//     }
   
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Abhijeet")); // Abhijeet just logged in
// console.log(loginUserMessage()); // Please enter a username

function loginUserMessage(username = "SAM"){
   
    if(!username){
        return `Please enter a username`
    }
   
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhijeet")); // Abhijeet just logged in
console.log(loginUserMessage()); // SAM just logged in

// // ... => rest operater (takes more than 1 argument during function CALL AND store it in array)
// function calculateCartPrice(...num1){ // 
//          return num1
// }
// console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(val1,val2,...num1){ // 
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));


// object as parameter
const user = {
    username: "abhijeet",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({    // you can directly pass an object in argument
    username: "sam",
    price: 399
})

// array as parameter
const myArray = [200,400,600]

function returnSeconsValue(getArray){
    return getArray[1]
}

console.log(returnSeconsValue(myArray));

console.log(returnSeconsValue([1,2,3,4]));  // directly pass array as argument