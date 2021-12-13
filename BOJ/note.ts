const fs = require("fs");

const input: string[] = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin") : ``
)
  .toString()
  .split("\n")
  .map((x: string) => x.trim());

const solution = (input: string[]): void => {
  return;
};

console.log(solution(input));

export {};
