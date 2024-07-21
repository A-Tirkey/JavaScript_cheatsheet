

// Stack (primitive), Heap (Non-Primitive)

//stack memory
let nameOne = "Abhijeet"
let nameTwo = nameOne

nameTwo = "Suresh" //changing it will not reflect change in nameOne

console.log(nameOne);
console.log(nameTwo);

// Heap memory

let userOne = {
    email: "google.com",
    upi: "userOne.gpay"
}

let userTwo = userOne

userTwo.email="yahoo.com" // change will reflect on userOne also

console.log(userOne.email);
console.log(userTwo.email);