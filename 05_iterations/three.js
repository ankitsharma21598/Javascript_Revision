// for

// ["", "", "", ""];
// [{}, {}, {}, {}, {}];
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log("arr: " + num);
// }

// const myName = "Ankit Sharma";
// for (const itr of myName) {
//     console.log(`Name character : ${itr}`);
// }

// Maps: Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
// const map = new Map();
// map.set("IN", "India");
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// // console.log(map); // Map(3) {'IN' => 'India','USA' => 'United States of America','Fr' => 'France'}
// for (const [key,value] of map) {
// //   console.log(key); // [ 'IN', 'India' ]["USA", "United States of America"][("Fr", "France")];
//   console.log(`${key} :- ${value}`); // IN :- India USA :- United States of America Fr :- France
// }

// const myObject ={
//     'game1':'NFS',
//     'game2':'Spiderman',
// }
// for (const [key,value] of myObject) {
//     console.log(key,value); // TypeError: myObject is not iterable
// }


//Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;

// Your function looks mostly correct. It iterates through the array and removes elements that match the given ele. However, there's a slight issue with your implementation. When you use splice() inside the loop, it alters the array length and index positions. This leads to skipping elements or skipping checking subsequent elements after deletion. To fix this, you should iterate through the array in reverse order. Here's the corrected version of your function:
function deleteOccur(arr, ele) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === ele) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];