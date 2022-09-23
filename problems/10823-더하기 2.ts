const fs = require('fs');

const input = (tc = '') =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const add = (...args: number[]) => [...args].reduce((a, b) => a + b);

// solution
export const solution = (inputs: string[]) => {
  const numbers = inputs.join('').split(',').map(Number);
  return add(...numbers);
};

console.log(solution(input()));

export {};
