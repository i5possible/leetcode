const array = [];

array.push('1');
array.push('2');
array.push('3');
array.push('4');
array.pop();

console.log(array.length);
array.map(value => `${value} + ${value}`).map((value) => console.log(value))

array.filter(value => parseInt(value) % 2 === 1).map(value => console.log(value));

console.log(array.includes('3'));
console.log(array.indexOf('2'));
console.log(array.join(','));
console.log(array.reverse());

// ASC
console.log(array.sort((a, b) => parseInt(a) - parseInt(b)))
// DESC
console.log(array.sort((a, b) => parseInt(b) - parseInt(a)))