import { input } from '../utils/input';
import { solution } from './template';

describe('00000-template >', () => {
  it('tc #1 >', () => {
    const tc = `1 2`;
    const an = 3;
    expect(solution(input(tc))).toBe(an);
  });

  it('tc #2 >', () => {
    const tc = `3 4`;
    const an = 7;
    expect(solution(input(tc))).toBe(an);
  });
});
