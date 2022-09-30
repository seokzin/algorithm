import { range } from './range';
import { prefixSum } from './prefixSum';

describe('prefixSum >', () => {
  it('return prefix sum list >', () => {
    expect(prefixSum(range(1, 6))).toEqual([0, 1, 3, 6, 10, 15]);
  });
});
