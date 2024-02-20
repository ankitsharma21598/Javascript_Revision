const user = {
  username: "ankit",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "ankit sharma";
// user.welcomeMessage();

// console.log(this);

function example() {
  let username = "ankit";
  console.log(this.username); // undefined
  /*
    Inside the function 'this' is not create any context by in case of object 'this' is create an context/
    */
}
// example();

const example1 = function () {
  let username = "ankit";
  console.log(this.username); // undefined
};
// example1();

const example2 = () => {
  let username = "ankit";
  console.log(this.username); // undefined
};
// example2();

const addTwo = (num1,num2) =>{
    return num1 + num2; // explicitly return
}
// console.log(addTwo(4,2)); // 6

const addTwo1 = (num1,num2) => num1 + num2 // Implicitly return 
// console.log(addTwo1(4,2)); // 6

const addTwo2 = (num1,num2) => ({username:"ankit"}) // Implicitly return 
console.log(addTwo2(4,2)); // { username: 'ankit' }

