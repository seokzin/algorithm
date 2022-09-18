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
  const [a, b] = inputs[0].split(' ').map(Number);

  return [a, b];
};

console.log(solution());

// ignore redeclare error
export {};
