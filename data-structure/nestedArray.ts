const numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

console.log(numbers.flat(2))
console.log(numbers.flat(Infinity))