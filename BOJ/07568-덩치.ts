const fs = require("fs");

const input: string[] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : `5
  55 185
  58 183
  88 186
  60 175
  46 155`
)
  .toString()
  .trim()
  .split("\n")
  .map((x: string) => x.trim());

const solution = (input: string[]): string => {
  let [in1, ...arr] = input;
  let n = Number(in1);

  let res: number[] = [];

  for (let i = 0; i < n; i++) {
    let rank = 1;

    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }

      const [aw, ah] = arr[i].split(" ").map(Number);
      const [bw, bh] = arr[j].split(" ").map(Number);

      if (aw < bw && ah < bh) {
        rank += 1;
      }
    }
    res.push(rank);
  }
  return res.join(" ");
};

console.log(solution(input));

export {};
