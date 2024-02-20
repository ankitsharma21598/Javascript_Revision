const user ={
    username:"Ankit Sharma",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`User ${this.username}`);
    }
}
// user.getUserDetails();
// console.log(user.username);

function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.getUserDetails = function(){
        console.log(`Hello ${this.username}`);
    }
    return this;
}
const userOne = new User("Ankit",12,true);
const userTwo = new User("Sharma",12,true);
console.log(userOne.getUserDetails());
console.log(userTwo.getUserDetails());
