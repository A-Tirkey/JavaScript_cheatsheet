// if

const isUserLoggedIn = true
const temperature = 41

if( temperature < 50 ){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}



if(isUserLoggedIn){

}

// operators <, >, >=, <=, ==, !=, ===, !==

// == will not compare the datatype (javascript automatically convert "2" to int)
if( 2 == "2"){
    console.log("Executed One");
}

// === strict checking it also checks if datatype is equal or not
if( 2 === "2"){
    console.log("Executed Two");
}

// shorthand method


const balancce = 1000
// // implicit scope  => not preffered
// if(balance > 500) console.log("test");

// if(balance < 500){
//         console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn  = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}