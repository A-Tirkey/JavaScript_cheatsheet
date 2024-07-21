

// if(true) {
//     let a=10 // scope=>local/block
//     const b=20 // scope=>local/block
//     var c=30  // scope=>Global
// }

// console.log(a); //error
// console.log(b); //error
// console.log(c); // print 30

let a=50
const b=50
var c=50

if(true) {
        a=10 // scope=> local/block
  const b=20 // scope=> local/block
        c=30  // scope=>Global
}

console.log(a); //print 50
console.log(b); //print 50
console.log(c); //print 30

// global scope in browser and in code environment is different

function one(){
    const username = "Abhijeet"

    function two(){
        const website = "youtube"
        console.log(username); // it can acces username (bcz for it username is global)
    }
    //console.log(website);  // it cannot access website (out of scope)

    two()
}

one()


if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        console.log((username + website));
    }
    //console.log(website); // out of scope
}
// console.log(username); // out of scope







//++++++++++++++++++++++++++ interesting +++++++++++++++++

// another way to define function  (declare the function and hold it in a variable)

// const addTwo = function(num){  // here addTwo is also called expresion ()
//     return num + 2
// }

// console.log(addTwo(5));

console.log(addOne(5)); // no error (it can access addOne() function before declaration)
function addOne(num){
    return num + 1
}

console.log(addTwo(5)); //  error (it cannot access addTwo before declaration)
const addTwo = function(num){  // here addTwo is also called expresion ()
    return num + 2
}


