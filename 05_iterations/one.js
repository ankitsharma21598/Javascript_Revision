//  for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);
// }

// for (let i = 10; i <= 20; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Outer loop value: ${i} and inner loop ${j}`); 
//         console.log(i + '*' + j + '=' + i * j);
//     }
// }

let myArray = ["flash","batman","superman"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log("element: " + element);    
// }

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        break;
    }
    console.log(`Value of i is ${index}`);     
}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`Value of i is ${index}`);     
}

