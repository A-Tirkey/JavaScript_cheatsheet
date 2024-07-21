
const user = {
    username: "Abhijeet",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcomme to website`);  // in current context to access "username" we use "this" keyword
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); // empty (bcs it is in node environment)
// // global object in browser in window object


// function chai(){
//       let username = "abhijeet"
//     console.log(this);
//     console.log(this.username); // undefined
// }

// chai()


// const chai = function (){
//     let username = "abhijeet"
//         console.log(this);
//         console.log(this.username); // undefined
// }
// chai()

//++++++++++++++++ '=>' Arrow function ++++++++++


// const chai =  () => {
//     let username = "abhijeet"
//         console.log(this); // {}
//         console.log(this.username); // undefined
// }

// chai()
//                             
// const addTwo = (num1, num2) => {
//     return num1 + num2    //++++++++ explicit return
// }
// console.log(addTwo(3,4));

//++++++++ implicit return     => arrow ke baad directly likh diya to return likhne ki jarurat nahi
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // if {} is used return should be used otherwise need to write return
// console.log(addTwo(3,4));


//+++++++ implicite return for object inside function
const addTwo1 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo1(3,4));


