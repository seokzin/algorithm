const fs = require('fs');

const input = (tc = '') =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const add = (a: number, b: number) => a + b;

// solution
export const solution = (inputs: string[]) => {
  const [a, b] = inputs[0].split(' ').map(Number);

  return add(a, b);
};

console.log(solution(input()));

export {};
