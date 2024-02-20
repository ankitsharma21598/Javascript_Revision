const score = 400;
// console.log(score); // 400

const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8996;
// console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000

// *************************** Maths *************************************
// Math library is by default in javascript

// console.log(Math.abs(-4)); // 4

// console.log(Math.round(120.6)); // 121
// console.log(Math.ceil(120.2)); // 121 (take only higher value)
// console.log(Math.floor(120.9)); // 120 (take only lower value)

// console.log(Math.random()); // range(0,1)
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
