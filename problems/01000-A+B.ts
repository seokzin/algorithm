const fs = require('fs');

// test cases
const tc = `1 2`;

// get inputs
const inputs: string[] = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc
)
  .toString()
  .trim()
  .split('\n');

// utils
const add = (a: number, b: number) => a + b;

// solution
const solution = () => {
  const [a, b] = inputs[0].split(' ').map(Number);

  return add(a, b);
};

console.log(solution());

export {};
