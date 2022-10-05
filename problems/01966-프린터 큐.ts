const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const getDocument = (priorities: number[], target: number) => {
  const dic = priorities.reduce(
    (acc, cur, idx) => [...acc, { idx, priority: cur }],
    []
  );
  let printCount = 1;

  while (true) {
    const first = dic.shift();

    if (dic.some((doc) => first.priority < doc.priority)) {
      dic.push(first);
    } else if (first.idx === target) {
      return printCount;
    } else {
      printCount += 1;
    }
  }
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
  const tc = Number(inputs[0]);
  const result = [];

  range(tc).forEach((i) => {
    const [n, m] = inputs[i * 2 + 1].split(' ').map(Number);
    const priorities = inputs[i * 2 + 2].split(' ').map(Number);
    result.push(getDocument(priorities, m));
  });

  return result.join('\n');
};

console.log(solution(input()));

export {};
