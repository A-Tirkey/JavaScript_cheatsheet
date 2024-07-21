// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 10){
        console.log(`Detected 10`);
        break
    }

    if(index == 5){
        
        continue;    // skip the below code
    }

    console.log(`value of i is ${index}`);
    
}