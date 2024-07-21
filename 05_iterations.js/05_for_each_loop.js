const coding = ["js", "rb", "py", "java", "cpp"]

// //for each

// coding.forEach( function (val) {  // forEach( callback function without name)  , function(val) => val will iterate over array
//      console.log(val);
// } )

// // for eack using => function

// coding.forEach( (val)=>{
//     console.log(val);
// }) 

// // function of function

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    //console.log(item,index,arr);
})

// object inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})