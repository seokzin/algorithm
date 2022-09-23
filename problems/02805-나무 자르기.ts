const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
export const binarySearch = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return -1;
};

// solution
export const solution = (inputs: string[]) => {
  const [n, m] = inputs[0].split(' ').map(Number);
  const trees = inputs[1].split(' ').map(Number);
  let result = Math.min(...trees);

  for (let i = Math.min(...trees); i < Math.max(...trees); i++) {
    result += 1;
    let rest = 0;

    for (let j = 0; j < n; j++) {
      rest += Math.max(0, trees[j] - result);
    }

    // console.log(rest, result);

    if (rest <= m) {
      return result;
    }
  }
};

console.log(solution(input()));

export {};
