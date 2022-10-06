const fs = require('fs');

const input = (tc = '') =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .trim()
    .split('\n');

// utils
const isBalanced = (str: string) => {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
  };

  for (const char of str.split('')) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === ']') {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (brackets[last] !== char) return false;
    }
  }

  return stack.length === 0;
};

// solution
export const solution = (inputs: string[]) => {
  const result = inputs
    .slice(0, -1)
    .map((str) => (isBalanced(str) ? 'yes' : 'no'));

  return result.join('\n');
};

console.log(solution(input()));

export {};
