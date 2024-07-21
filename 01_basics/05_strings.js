const name = "Abhijeet"
const repoCount = 50
//console.log("Hello my name is " + name + " and my repo count is " + repoCount);  // this type of writing should be avoided
// instead use this
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// ``(backtiks) provide string intercollision


// Anotherway to declare String using object
const gameNameOne = "Abhijeet"
console.log(typeof gameNameOne);
console.log(gameNameOne[0]);
console.log(gameNameOne.length);


const gameNameTwo = new String("Abhijeet") // new String("Abhijeet") creates a new 'String' object

console.log(typeof ggameNameTwo);
console.log(gameNameTwo[0]);
console.log(gameNameTwo.length);
console.log(gameNameTwo.toUpperCase());
console.log(gameNameTwo.charAt(2));
console.log(gameNameTwo.indexOf('j'));

const newString = gameNameTwo.substring(0,3) // index 3 character will not be included
console.log(newString);

const String1 = gameNameTwo.slice(-7,4);
const String2 = gameNameTwo.slice(0,4);
console.log(String1);
console.log(String2);

const NewStringTwo = "   Arpita   "
console.log(NewStringTwo);
console.log(NewStringTwo.trim());

const url = "https://abhieet.com/abhijeet%20tirkey"
console.log(url.replace('%20','-'));
console.log(url.includes('abhijeet'));
console.log(url.includes('arpita'));


const a = "Arpita-Tirkey-age-22"
console.log(a.split('-')); // split into array


//These are the example of String operations their are multiple String Operation

