const fs = require('fs');

// test cases
const tc = ``;

// get inputs
const inputs: string[] = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc
)
  .toString()
  .trim()
  .split('\n');

// utils

// solution
const solution = () => {
  return 'Hello World!';
};

console.log(solution());

// ignore redeclare error
export {};
