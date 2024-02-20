// array

const myArray = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArray2 = new Array(1,2,3,4);
// console.log(myArray[0]); // 0

// Array methods
// myArray.push(6)
// console.log(myArray); // [0, 1, 2, 3, 4, 5, 6]
// myArray.pop(); 
// console.log(myArray); // [0, 1, 2, 3, 4, 5]

// myArray.unshift(6); //Add to starting of array
// console.log(myArray); //[6, 0, 1, 2, 3, 4, 5]
// myArray.shift(); //Remove from starting of array
// console.log(myArray); //[0, 1, 2, 3, 4, 5]

// console.log(myArray.includes(2)); // true
// console.log(myArray.indexOf(2)); // 2

// const newArray = myArray.join();

// console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray);// 0,1,2,3,4,5
// console.log(typeof newArray);// string

// slice and splice difference
// splice include max range into it and manipulate the original array.
// slice doesn't include min and max range into it and doesn't manipulate the original array.
console.log("A",myArray); // A [ 0, 1, 2, 3, 4, 5 ]

console.log(myArray.slice(1,3)); //[ 1, 2 ]

console.log("B",myArray);// B [ 0, 1, 2, 3, 4, 5 ]

console.log(myArray.splice(1,3)); // [ 1, 2, 3 ]

console.log("C",myArray); // C [ 0, 4, 5 ]



