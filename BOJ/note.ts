const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  console.log(line);
  rl.close();
}).on("close", () => {
  process.exit();
});

// Cannot redeclare block-scoped variable 'readline' 오류 해결
export {};
