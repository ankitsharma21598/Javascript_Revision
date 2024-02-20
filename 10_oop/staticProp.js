class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `${this.username}123`;
    }
}
// const user = new User("ankit");
// console.log(user.createId());//TypeError: user.createId is not a function
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
};
const teach = new Teacher("ankit","ankit@gmail.com");
console.log(teach.createId());//TypeError: teach.createId is not a function
