const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .trim()
    .split('\n');

// utils

// solution
export const solution = (inputs: string[]) => {
  return inputs;
};

console.log(solution(input()));

export {};
