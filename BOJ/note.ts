const fs = require("fs");

const input: string[] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim().split("\n")
    : ``
)
  .split("\n")
  .map((x: string) => x.trim());

const solution = (input: string[]) => {
  return input;
};

console.log(solution(input));

export {};
