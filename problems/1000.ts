const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const add = (a, b) => a + b;

const [a, b] = input.map(Number);

console.log(add(a, b));
