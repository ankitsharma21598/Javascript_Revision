// let name ="Ankit Sharma";

// console.log(name.length);


let myHeros =["thor","spiderman"];

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy hero power ${this.spiderman}`);
    }
}
Object.prototype.ankit = function(){
    console.log(`Ankit is present on all object`);
};

Array.prototype.heyAnkit = function(){
    console.log(`hey Ankit is present on Array`);
};

// heroPower.ankit(); //Ankit is present on all object
// myHeros.ankit(); //Ankit is present on all object

// myHeros.heyAnkit(); //hey Ankit is present on Array
// heroPower.heyAnkit(); //TypeError: heroPower.heyAnkit is not a function
// Object.heyAnkit(); //TypeError: Object.heyAnkit is not a function

// Inheritance
const User = {
    name : 'John',
    email:'john@example.com',
}
const Teacher ={
    makeVideo:true,
}
const TeachingSupport = {
    isAvailble:false,
}
const TASupport = {
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher);
 
let anotherUsername="Ankit Team       "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength();
"anotherUsername    ".trueLength();
