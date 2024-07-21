// Immediately Invoked Function Expresion (IIFE)

// IIFE is used when we don't want the global scope to pollute the function

(function chai(){    // named iife
    console.log(`DB CONNECTED`);
})();

// ()(); => (yaha pr function likhenge)(execution call) 
// agar ; nahi lagayenge ge to iffe start to ho jayega but end nahi hoga and next iffe start nahi hoga
( () => {    // simple iife
    console.log(`DB CONNECTED TWO`);
})();


( (name) => {   // simple iffe with parameter
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");