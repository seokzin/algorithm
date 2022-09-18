const fs = require('fs');

// test cases
const tc = `3 2`;

// get inputs
const inputs: string[] = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc
)
  .toString()
  .trim()
  .split('\n');

// utils
const multiply = (a: number, b: number) => a * b;

// solution
const solution = () => {
  const [a, b] = inputs[0].split(' ').map(Number);

  return multiply(a, b);
};

console.log(solution());

// ignore redeclare error
export {};
