//+++ iteration of object
// for in loop

const myObject = {
    js: 'javascipt',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// print key
for (const key in myObject) {
   console.log(key);
}

console.log("");

//print value
for (const key in myObject) {
    console.log(myObject[key]);
 }


 // +++++ for in loop in array
 const programming = ["js", "rb", "py", "java", "cpp"]

 // for in
 for (const key in programming){
    console.log(key); // print index
 }
// for of 
 for (const key of programming){
    console.log(key); // print value
 }

 // ++++++ for in loop in map
 const map =new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") 

// it will not print anything becaus emap is not iteratable
for(const key in map){
    console.log(key); 
}






