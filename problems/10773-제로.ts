const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const getSum = (numbers: number[], k: number) => {
  const stack = [];

  for (let i = 0; i < k; i++) {
    numbers[i] === 0 ? stack.pop() : stack.push(numbers[i]);
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};

// solution
export const solution = (inputs: string[]) => {
  const k = Number(inputs[0]);
  const numbers = inputs.slice(1).map(Number);

  return getSum(numbers, k);
};

console.log(solution(input()));

export {};
