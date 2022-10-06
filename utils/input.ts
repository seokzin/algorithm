import * as fs from 'fs';

export const input = (tc = ''.repeat(100)) =>
  (process.platform === 'linux' ? fs.readFileSync('/dev/stdin') : tc)
    .toString()
    .trim()
    .split('\n');
