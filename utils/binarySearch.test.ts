import { binarySearch } from './binarySearch';
import { range } from './range';

describe('binarySearch >', () => {
  it("return target's index >", () => {
    expect(binarySearch(range(10), 5)).toBe(5);
    expect(binarySearch(range(0, 100, 5), 30)).toBe(6);
  });

  it('return -1 when target does not exist  >', () => {
    expect(binarySearch(range(10), 100)).toBe(-1);
  });
});
