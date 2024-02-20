// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Ankit";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@example.com",
  fullName: {
    userFullName: {
      firstName: "Ankit",
      lastName: "Sharma",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};

// const objn = Object.assign({}, obj1, obj2, obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const objn = {...obj1, ...obj2, ...obj3};//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(objn);

const users = [
    {
        id:'1',
        name:'John',
        email:'john@example.com'
    },
    {
        id:'2',
        name:'sohn',
        email:'sohn@example.com'
    },
    {
        id:'3',
        name:'Mohn',
        email:'Mohn@example.com'
    }
]
// console.log(users[0].name); // John

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123', 'Ankit', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123' ], [ 'name', 'Ankit' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

const course ={
    courseName:"JS with Ankit",
    price:999,
    courseInstructor:"Ankit",
}
const {courseInstructor: instructor} = course; //
console.log(instructor); //Ankit


