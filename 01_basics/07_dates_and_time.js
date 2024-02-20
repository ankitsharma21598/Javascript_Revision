let myDate = new Date();
// console.log(myDate); // 2024-01-20T17:24:19.647Z
// console.log(myDate.toString()); // Sat Jan 20 2024 22:54:55 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Sat Jan 20 2024
// console.log(myDate.toLocaleString()); // 20/1/2024, 10:57:32 pm
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 22);
// console.log(myCreatedDate.toDateString()); // Mon Jan 22 2024
// let myCreatedDate = new Date(2024, 0, 20, 5, 30);
// console.log(myCreatedDate.toLocaleString()); // 20/1/2024, 5:30:00 am
// let myCreatedDate = new Date("2024-01-20");
// console.log(myCreatedDate.toLocaleString()); // 20/1/2024, 5:30:00 am

let myCreatedDate = new Date("01-20-2024");
// console.log(myCreatedDate.toLocaleString());//20/1/2024, 12:00:00 am

let myTimeStamp = Date.now(); 
// console.log(myTimeStamp); // 1705779114589
// console.log(myCreatedDate.getTime()); // 1705689000000

// console.log(Math.floor(Date.now())/1000); //1705779449.943 (Convert to seconds)

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})

