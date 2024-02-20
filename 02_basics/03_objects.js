// singleton
// Object.create

// object literals
const mySym = Symbol("key1");
const jsUser = {
    name:"Ankit",
    age:18,
    [mySym]:"myKey1",
    location:"Kurushetra",
    email:"ankit@gmail.com",
    isLogedIn:false,
    lastLoginDays:["Monday", "Tuesday", "Wednesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "ankit@yahoo.com";

// console.log(jsUser["email"]);
// console.log(jsUser);

// Object.freeze(jsUser); // freeze the object changes not allowed to the object

jsUser.email = "ankit@microsoft.com";

// console.log(jsUser);


jsUser.greeting = function() {
    console.log(`Hello JS User ${this.name}`);
};
jsUser.greeting();


