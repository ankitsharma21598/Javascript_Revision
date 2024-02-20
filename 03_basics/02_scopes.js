// let a = 10;
// const b = 20;
// var c = 30;

let a = 100;

if (true) {
    // console.log(a);
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // 100
// console.log(b); //b is not defined
// console.log(c); // 30

// const two1 = 2;

function one(){
    const username = "Ankit Sharma";
    function two(){
        const website ="youtube.com";
        console.log(username); // Ankit Sharma
    }
    // console.log(website); //website is not defined
    two(); // Ankit Sharma
}

// one(); //

if(true){
    const username = "Ankit";
    if(username === "Ankit"){
        const website ="youtube.com";
        // console.log(username , website); // Ankit youtube.com
    }
    // console.log(website); //website is not defined
}
// console.log(username); // username is not defined

// console.log(addone(5)); // 6
function addone(num){
    return num+1;
}
// console.log(addone(5)); // 6

console.log(addtwo(2)); // ReferenceError: Cannot access 'addtwo' before initialization 
const addtwo = function(num){
    return num+2;
}
// console.log(addtwo(2)); // 4
