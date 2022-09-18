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
  return `강한친구 대한육군
강한친구 대한육군`;
};

console.log(solution());

// ignore redeclare error
export {};
