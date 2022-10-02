const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const binarySearch = (target: number, list: number[]) => {
  let start = 1;
  let end = Math.max(...list);
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (cutLine(list, mid) >= target) {
      answer = Math.max(answer, mid);
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

const cutLine = (list: number[], height: number) =>
  list.reduce((acc, cur) => acc + Math.floor(cur / height), 0);

// solution
export const solution = (inputs: string[]) => {
  const [, n] = inputs[0].split(' ').map(Number);
  const lines = inputs.slice(1).map(Number);

  return binarySearch(n, lines);
};

console.log(solution(input()));

export {};
