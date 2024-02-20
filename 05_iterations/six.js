const coding = ["js", "css", "html", "java", "python"];
// foreach is not returning anything it just returns undefined
// const values= coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values); // undefined

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumber.filter((num) => {
// //   if (num > 4) {
// //     return num;
// //   }
//     return num > 4;
// });
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// If you want to do it with foreach only.
// const newNums = []; // create a new empty array
// myNumber.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
let userBooks = books.filter((book) => {
    return book.genre==="History"
});
// console.log(userBooks);
userBooks = books.filter((book) => {
    return book.publish>=1995 && book.genre==="History";
});
console.log(userBooks);



