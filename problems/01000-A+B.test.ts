import { input } from '../utils/input';
import { solution } from './01000-A+B';

describe('01000-A+B >', () => {
  it('tc #1 >', () => {
    const tc1 = `1 2`;
    const an1 = 3;
    expect(solution(input(tc1))).toBe(an1);
  });
});
