const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const binarySearch = (
  ascendingArray: number[],
  target: number,
  trees: number[]
) => {
  let start = 0;
  let end = ascendingArray.length - 1;
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const height = ascendingArray[mid];

    if (restOfTree(trees, height) >= target) {
      if (answer < height) {
        answer = height;
      }
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

const restOfTree = (trees: number[], height: number) => {
  let rest = 0;

  for (let i = 0; i < trees.length; i++) {
    rest += Math.max(0, trees[i] - height);
  }

  return rest;
};

const range = (start: number, end?: number, step: number = 1): number[] => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }

  return result;
};

// solution
export const solution = (inputs: string[]) => {
  const [, m] = inputs[0].split(' ').map(Number);
  const trees = inputs[1].split(' ').map(Number);

  return binarySearch(range(1, Math.max(...trees) + 1), m, trees);
};

console.log(solution(input()));

export {};
