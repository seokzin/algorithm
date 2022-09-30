import { range } from './range';
import { twoPointer } from './twoPointer';

describe('twoPointer >', () => {
  it('return subarray of target sum >', () => {
    expect(twoPointer(range(1, 11), 15)).toEqual([
      [1, 2, 3, 4, 5],
      [4, 5, 6],
      [7, 8],
    ]);
  });

  it('return empty array if there is no subarray of target sum >', () => {
    expect(twoPointer(range(1, 11), 100)).toEqual([]);
  });
});
