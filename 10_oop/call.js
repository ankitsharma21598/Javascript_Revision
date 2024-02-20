// call and this in javascript
function setUserName(username){
    this.userName = username;
}
function createUser(username,email,password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}
let user = new createUser("ankit","ankit@gmail.com","123")
console.log(user);//{ userName: 'ankit', email: 'ankit@gmail.com', password: '123'}
