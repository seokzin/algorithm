export const matrix = (row: number, col: number, val: number) =>
  Array.from({ length: row }, () => Array(col).fill(val));
