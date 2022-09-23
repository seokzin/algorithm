import { input } from '../utils/input';
import { solution } from './template';

describe('00000-template >', () => {
  it('tc #1 >', () => {
    const tc1 = `1 2`;
    const an1 = 3;
    expect(solution(input(tc1))).toBe(an1);
  });

  it('tc #2 >', () => {
    const tc2 = `3 4`;
    const an2 = 7;
    expect(solution(input(tc2))).toBe(an2);
  });
});
