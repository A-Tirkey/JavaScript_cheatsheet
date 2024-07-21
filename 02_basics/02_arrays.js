const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes) // put array inside array 
// console.log(marvelHeroes); 
// console.log("");
// console.log("3rd element ", marvelHeroes[3]);
// console.log(marvelHeroes[3][1]);

// const CombineArray = marvelHeroes.concat(dcHeroes) // not alter the original arrray
// console.log("combine array ", CombineArray);


//  ... spread operator

const indianHeroes = ["nagraj", "doga"]
const allNewHeroes = [...marvelHeroes, ...dcHeroes, ...indianHeroes]  // to combine array
console.log(allNewHeroes);

// array inside array with anothe inside array
const another_arrray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_arrray.flat(Infinity) // to fix it

console.log(real_another_array);

console.log(Array.isArray("Abhijeet")); // check if array or not

// convert to Array
console.log(Array.from("Abhijeet"));  

// for object
console.log(Array.from({name: "abhijeet"})); // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

// make array from set of elements
console.log(Array.of(score1, score2 ,score3));