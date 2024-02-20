// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptography, network calls
//     setTimeout(() =>{
//         console.log('Asyn tasks complete');
//         resolve();
//     },1000)
// });
// promiseOne.then(() => {
//     console.log("Promise consumed successfully");
// });

// new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log('Asyn tasks 2 complete');
//         resolve();
//     },1000)
// }).then(() => {
//     console.log("Promise 2 consumed successfully");
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log('Asyn tasks 3 complete');
//         resolve({username:"Ankit Sharma",email:"ankit123@gmail.com"});
//     },1000)
// });
// promiseThree.then((user) => {
//     console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("Asyn tasks 4 complete");
//       resolve({ username: "Ankit Sharma", email: "ankit123@gmail.com" });
//     }else{
//         reject("Error:Something went wrong");
//     }
//   }, 1000);
// });
// promiseFour.then((user) => {
//   console.log(user);
//   return user.username;
// }).then((user) => {
//     console.log(user);
// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("Asyn tasks 4 complete");
//       resolve({ username: "Ankit Sharma", email: "ankit123@gmail.com" });
//     } else {
//       reject("Error:Something went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();
// Asyn Await Method:
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();
// .then() .catch() method:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
