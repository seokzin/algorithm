import { matrix } from './matrix';

describe('matrix >', () => {
  it('n * n', () => {
    expect(matrix(2, 2, 1)).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it('n * m', () => {
    expect(matrix(4, 6, 2)).toEqual([
      [2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2],
    ]);
  });
});
