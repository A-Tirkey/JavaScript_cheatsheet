// Dates

let myDate = new Date()
console.log(typeof myDate); // Object
console.log(myDate);
// console.log("  ");
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log("  ");
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log("  ");
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log("  ");
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log("  ");

let myCreatedDate = new Date(2024,0,12) //  month starts from zero here
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDateAndTime = new Date(2024,0,12,5,3) // add time
console.log(myCreatedDateAndTime.toLocaleString());

// another formate (yyyy-mm-dd) or (mm-dd-yyyy)
let CreatedDate = new Date("2555-01-30") // here correct month number is used
console.log(CreatedDate.toDateString());
console.log(CreatedDate.toLocaleString());

// Date.now() gives timestamp in milliseconds from January 1, 1970 till now
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/100)); // convert to sec

//This prints the number of milliseconds from January 1, 1970, to January 12, 2024.
console.log(myCreatedDate.getTime()); 
console.log(" ");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// in .toLocakeString() you can define everything

newDate.toLocaleString('defalut',{
    weekday: "long"
})

console.log(newDate.weekday);