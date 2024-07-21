// difference between filter and forEach => forEach doesnot return value ,filter return value

const myNums = [1,2,3,4,5,6,7,8,9,10]

// filtter operation  it returns the vlaue unlike forEach function
const newNums = myNums.filter( (num)=> num > 4) // filter ke under ek callback function hota hai jo ki har item ko access karega and hame kuch condition dena padega
console.log(newNums);

// another way to write above code
const newNums2 = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums2);

// // same functionality using forEach loop
// const newNums3 = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums3.push(num)
//     }
// })
// console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);
const userBooks2 = books.filter( (bk) => bk.publish >= 1995 && bk.genre == 'History')
console.log(userBooks2);



