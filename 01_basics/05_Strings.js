const name = "Ankit";
const repoCount = 50;

// console.log("Hello my name is"+ name + "and my repo count is" + repoCount); // Not recommended

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}.`); // Hello my name is Ankit and my repo count is 50.


const NewName =new String("Ankit Sharma"); //we use new 
// console.log(NewName);  // [String: 'Ankit Sharma']
// console.log(NewName.toUpperCase()[1]); // N
// console.log(NewName.charAt(0)); // A
// console.log(NewName.indexOf('t')); // 4

// const newString = NewName.substring(6,13);
// console.log(newString); // Sharma

const anotherString = NewName.slice(-6,12); // Difference from substring and slice we can give negative value to the slice.
// Negitive value start counting from backwards.
// console.log(anotherString); // Sharma

const anotherString1 = NewName.slice(-6,-1);

// console.log(anotherString1); // Sharm

// const newString1= "   Ankit   ";
// console.log(newString1); //    Ankit   
// console.log(newString1.trim()); // Ankit

const url = "http://ankit.com/ankit%20sharma";
// console.log(url.replace('%20','-')); // http://ankit.com/ankit-sharma

console.log(NewName.split(' '));
