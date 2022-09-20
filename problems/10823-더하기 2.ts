const fs = require('fs');

// test cases
const tc = `10,20,
3
0,50
,1
00`; // 210

// get inputs
const inputs: string[] = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc
)
  .toString()
  .trim()
  .split('\n');

// utils
const add = (...args: number[]) => [...args].reduce((a, b) => a + b);

// solution
const solution = () => {
  const numbers = inputs.join('').split(',').map(Number);
  return add(...numbers);
};

console.log(solution());

export {};
