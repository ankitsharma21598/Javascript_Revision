function sayMyName(){
    console.log("Ankit Sharma");
}

// sayMyName();

function addTwoNumbers(num1,num2){
    return (num1 + num2);
}
// const result = addTwoNumbers(1,2);
// console.log("Result: " + result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username.");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in`;
}
const result = loginUserMessage("ankit@gmail.com");
// console.log("Result: " + result);

// Rest or Spread operators
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username:"ankit@gmail.com",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);//Username is ankit@gmail.com and price is 199.
}
// handleObject(user);


const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));




