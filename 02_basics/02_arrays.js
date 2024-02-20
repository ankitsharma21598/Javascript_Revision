const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]

// const allHeros =  marvel_heros.concat(dc_heros);

// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const allNewHeros = [...marvel_heros, ...dc_heros]

// console.log(allNewHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const anotheArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const newAnotherArray = anotheArray.flat(Infinity);
// console.log(newAnotherArray);// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Ankit")); // False
// console.log(Array.from("Ankit")); // [ 'A', 'n', 'k', 'i', 't' ]

// console.log(Array.from({ name: "Ankit" })); // []
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

console.log(typeof marvel_heros);
