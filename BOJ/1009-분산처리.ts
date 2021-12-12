const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];
let count: number = 0;

rl.on("line", (line: string) => {
  if (!count) {
    count = Number(line);
  } else {
    input.push(line);
    if (input.length === count) {
      main();
      rl.close();
    }
  }
}).on("close", () => process.exit());

const main = () => {
  for (let i = 0; i < count; i++) {
    // map(Numbe) : str -> int로 일괄 변경
    let [a, b]: number[] = input[i].split(" ").map(Number);
    a %= 10;

    let tmp: number = a;

    for (let j = 0; j < b - 1; j++) {
      tmp = (tmp * a) % 10;
    }

    console.log(tmp ? tmp : 10);
  }
};

export {};
