class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New Course added by ${this.username}`);
    }
};
let teach=new Teacher("ankit","ankit@gmail.com","123");
teach.addCourse();//New Course added by ankit
teach.logMe();//User ankit

let user = new User("ankit");
user.logMe();//User ankit

// console.log(teach === Teacher);//false
// console.log(teach instanceof Teacher);//true
// console.log(teach === user);//false
// console.log(teach instanceof User);//true

