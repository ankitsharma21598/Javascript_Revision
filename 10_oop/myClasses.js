// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsernameToCaps(username){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const user = new User("ankit", "ankit@gmail.com","123");
// console.log(user.encrryptPassword()); //123abc
// console.log(user.changeUsernameToCaps()); //ANKIT


function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encrryptPassword= function(){
    return `${this.password}abc`;
}
User.prototype.changeUsernameToCaps= function(){
    return `${this.username.toUpperCase()}`;
}
const user = new User("ankit", "ankit@gmail.com","123");
console.log(user.encrryptPassword()); //123abc
console.log(user.changeUsernameToCaps()); //ANKIT

