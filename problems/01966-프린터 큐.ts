const fs = require('fs');

const input = (tc = '\n'.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());

// utils
const getDocument = (priorities: number[], target: number) => {
  // const shiftBack = (obj: [key : number] : number) => {
  //   if (obj[0] < Math.max(Object.values(obj))) {
  //     return obj;
  //   }
  // };

  const dic = priorities.reduce(
    (acc, cur, idx) => ({
      ...acc,
      [idx]: cur,
    }),
    {}
  );

  console.log(Object.values(dic));
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

  range(tc).forEach((i) => {
    const [n, m] = inputs[i * 2 + 1].split(' ').map(Number);
    const priorities = inputs[i * 2 + 2].split(' ').map(Number);
    return getDocument(priorities, m);
  });
};

console.log(solution(input()));

export {};
