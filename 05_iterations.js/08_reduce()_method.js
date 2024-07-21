
// first time accumulator initialValue ko leta hai uske baad jo sum ata hai ( accumulator + currrentValue) usko accumulator me le leta hai and so on till array
// here currentValue iterarte on element of array

// const array1 = [1,2,3,4]

// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue , initialValue
// )
// console.log(sumWithInitial);

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

const myTotal =myNums.reduce( (acc,currval) => acc + currval , 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "moile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);