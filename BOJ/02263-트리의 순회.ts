const fs = require("fs");

const input: string[] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : `3
    1 2 3
    1 3 2`
)
  .toString()
  .split("\n")
  .map((x: string) => x.trim());

interface Param {
  inL: number;
  inR: number;
  postL: number;
  postR: number;
}

const solution = (input: string[]): string => {
  const [in1, in2, in3] = input;

  const n: number = Number(in1);
  const inOrder: number[] = in2.split(" ").map(Number);
  const postOrder: number[] = in3.split(" ").map(Number);
  const idx: number[] = new Array(n + 1).fill(0);
  const res: number[] = [];

  for (let i = 0; i < n; i++) {
    idx[inOrder[i]] = i;
  }

  const preOrder = (param: Param) => {
    // 범위 역전시 재귀 탈출
    if (param.inL > param.inR || param.postL > param.postR) {
      return;
    }

    const root = postOrder[param.postR];
    res.push(root);

    const left = idx[root] - param.inL;
    const right = param.inR - idx[root];

    const leftParam: Param = {
      inL: param.inL,
      inR: param.inL + left - 1,
      postL: param.postL,
      postR: param.postL + left - 1,
    };

    const rightParam: Param = {
      inL: param.inR - right + 1,
      inR: param.inR,
      postL: param.postR - right,
      postR: param.postR - 1,
    };

    preOrder(leftParam);
    preOrder(rightParam);
  };

  preOrder({ inL: 0, inR: n - 1, postL: 0, postR: n - 1 });

  return res.join(" ");
};

// node의 call stack 사이즈는 최대 1만이므로 재귀 풀이는 지양하자
console.log(solution(input));

export {};
