const fs = require("fs");

const input: string[] = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin") : ``
)
  .toString()
  .trim()
  .split("\n");

const solution = (input: string[]): void => {
  return;
};

solution(input);

export {};
