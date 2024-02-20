// const userEmail = "ankit@gmail.com";
// const userEmail = [];
// const userEmail = "";
// if(userEmail){
//     console.log("Got user email", userEmail);
// }else{
//     console.log("Don't have a user email");
// }

// List of Falsy values
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// List of truthy values
// 1. "0"
// 2. "false"
// 3. " "
// 4. []
// 5. {}
// 6. function(){}


// How to check array is empty or not
// const array = [];
// if(array.length === 0){
//     console.log("Array is empty");
// }else{
//     console.log("Array is not empty");
// }

// How to check object is empty or not
// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }else{
//     console.log("Object is not empty");
// }

// false == 0; //true
// false == ''; //true
// 0 == ''; //true

// Nullish Coalescing Operator (??):
let val;
// val = 5 ?? 10; // 5
// val = null ?? 10; // 10
// val = undefined ?? 15; // 15
val = null ?? undefined ?? 5 ?? 10; // 5
console.log(val);

// Terniary Operators
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
