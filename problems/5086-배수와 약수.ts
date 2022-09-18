const fs = require("fs");

const input: string[] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : `8 16
100 27
5 200
200 5
0 0`
)
  .toString()
  .trim()
  .split("\n");

// 종료 조건 "0 0" 제거
input.pop();

const compare = ([a, b]: number[]) => {
  if (a % b === 0) return "multiple";
  if (b % a === 0) return "factor";
  return "neither";
};

const solution = (input: string[]) => {
  input
    .map((arr) => arr.split(" ").map(Number))
    .forEach((arr) => console.log(compare(arr)));
};

solution(input);

export {};
