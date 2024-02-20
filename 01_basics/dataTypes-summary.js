// Primitive data types (Call by value data type)
            // Return type
// 1. String  => string
// 2. Number => number
// 3. Boolean  => boolean
// 4. null  => object
// 5. undefined  =>  undefined
// 6. Symbol  =>  symbol (Use to make a unique value)
    
    // const id = Symbol('123')
    // const anotherId = Symbol('123')
    // console.log("id:",id);
    // console.log("anotherId:",anotherId);
    // console.log(id == anotherId); // false
    // console.log(id === anotherId); // false
    // console.log(typeof anotherId); // symbol

    

// 7. BigInt  =>  bigint 
    // const num = 3443832636594952564n;
    // console.log(typeof num); // bigint

// Non primitive data types OR (Reference data types)
            // Return type
// 1. Arrays  =>  object
// 2. Object  =>  object
// 3. Function  =>  function

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObject={
//     name: "Ankit",
//     age: 25,
// }

// const myFunction = function() {
//     console.log("Hello world");
// };

// console.log(typeof heros); // object
// console.log(typeof myObject); // object
// console.log(typeof myFunction); // Function


// For More information
//https://262.ecma-international.org/5.1/#sec-11.4.3


// **************************** Memory ************************************

// Stack (Primitive type), Heap (Non-primitive type)

// Example of Call by Value
let myName = "Ankit";
let newName = myName;
console.log("Assigned",newName); // Assigned Ankit

newName = "Sharma";
console.log(myName); // Ankit
console.log("Updated",newName); //Updated Sharma

// Example of Call by Reference
let user ={
    email: "user@gmail.com",
    upi:"user@oksbi"
}

let userTwo =user;

userTwo.email = "updated@gmail.com";

console.log(user.email); //updated@gmail.com
console.log(userTwo.email); //updated@gmail.com


