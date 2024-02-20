// reduce
const myNums = [2, 2, 3, 4, 5];
// const myTotal = myNums.reduce((acc, currVal) => {
//   console.log(`acc: ${acc}`); // by default accumulator takes arrays first element.
//   console.log(`currVal: ${currVal}`);
//   return acc + currVal;
// }, 5); // we can change accumulator initial value by adding here
// console.log(myTotal); // 16
// console.log(myTotal); // 21

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const totalPrice = shoppingCart.reduce((acc, curr) => {
  return acc + curr.price;
},0);
console.log(`Price to pay: ${totalPrice}`);

