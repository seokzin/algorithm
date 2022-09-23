import * as fs from 'fs';

export const input = (tc = '') =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .split('\n')
    .map((str) => str.trim());
