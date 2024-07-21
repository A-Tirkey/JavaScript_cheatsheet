const myArray = [0,1,2,3,4,5]
const myHeroes = ["Spiderman", "Batman"]

// another way to declare array
const myArray2 = new Array(1,2,3,4,5)

console.log(myArray[0]);

// Array methods

myArray.push(6) // to insert
myArray[7]=7    // to insert or change
console.log(myArray);
myArray.pop()
console.log(myArray);

//myArray.unshift(9) // put the 9 in start and shift the array 
//myArray.shift() 
console.log(myArray);
console.log(myArray.includes(10));
console.log(myArray.indexOf(3));

const newArr = myArray.join() // join() convert the array to string
console.log(newArr);
console.log(typeof newArr);
console.log("");

//+++++++++++++ slics , splice +++++++++
const myArr = [0,1,2,3,4,5]
console.log("Original Array ",myArr);

console.log(myArr.slice(1,3));  // it will not alter the original array
console.log("After Slice ", myArr);

console.log(myArr.splice(1,3)); // it will alter the original array
console.log("After Splice ", myArr);
