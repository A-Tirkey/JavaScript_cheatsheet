
// // // using constructor
// // const tinderUser = new Object()  //singleton

// const tinderUser = {}  //empty object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// const mySym = Symbol("123")
// tinderUser[mySym] = "465"

// console.log(tinderUser);
// console.log("");

// // object insied objcet
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userFullname: {
//             firstname: "Abhijeet",
//             lastname: "Tirkey"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.lastname);
// console.log("");

// // combine objects 

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 3: "d"}

// // const obj3 = {obj1, obj2}  // object inside object problem

// //+++++++++++++ Assign method

// // const obj3 = Object.assign(obj1, obj2) // here obj1 => target  obj2 => source  , here obj1 will be altered
// // console.log(obj3);
// // console.log(obj1);

// // const obj3 = Object.assign({},obj1, obj2) // also correct {} is optinal parameter but its a good practice
// // //------------------------(target,source)  here {}=> target , obj1 and obj2 => source as it will not alter the source parameters
// // console.log(obj3);
// // console.log(obj1);

// //+++++++++++ spread metthod  (mostly used)

// const obj3 ={...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);

// console.log("");

// // when values comes from database => array of objects
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 2,
//         email: "h@yahoo.com"
//     },
    
//     {
//         id: 2,
//         email: "h@nsut.com"
//     },
    
// ]
// console.log(users[1].email);
// console.log("");

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // datatype array
// console.log("");
// console.log(Object.values(tinderUser));
// console.log("");
// console.log(Object.entries(tinderUser));
// console.log("");

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // before using the property use this method to check if it actually exist or not
// console.log(tinderUser.hasOwnProperty('place'));


const course ={
    coursename: "Js in hindi",
    price: 999,
    courseInstructor: "Hitesh"

}

// // anotherway to print courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor);

// de-structure using {}
const {courseInstructor: instructor} = course
console.log(instructor); // instead of courseInstructor we can use instructor

// documents stored in API in json formate

// json syntax (object without name)
// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "free"

// }

// when we call API we get API in the formate of array
    // [
    //     {},
    //     {},
    // ]

// API Tools
// 1) randomuser.me    : to get API
// 2) jasonformatter  : to make json understandable    