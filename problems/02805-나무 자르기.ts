const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const binarySearch = (target: number, trees: number[]) => {
  let start = 0;
  let end = Math.max(...trees);
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (restOfTree(trees, mid) >= target) {
      answer = Math.max(answer, mid);
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

const restOfTree = (trees: number[], height: number) =>
  trees.reduce((acc, cur) => acc + Math.max(0, cur - height), 0);

// solution
export const solution = (inputs: string[]) => {
  const [, m] = inputs[0].split(' ').map(Number);
  const trees = inputs[1].split(' ').map(Number);

  return binarySearch(m, trees);
};

console.log(solution(input()));

export {};
