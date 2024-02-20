class User{
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    get password(){
        return `${this._password.toUpperCase()}123`
    }
    set password(value){
        this._password = value
    }
}
const ankit = new User("ankit@gmail.com","ankit123");
console.log(ankit.password);

