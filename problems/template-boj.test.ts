import { input } from '../utils/input';
import { solution } from './template-boj';

describe('00000-template >', () => {
  it('tc #1 >', () => {
    const tc = `1 2`;
    const an = ['1 2'];
    expect(solution(input(tc))).toEqual(an);
  });

  it('tc #2 >', () => {
    const tc = `3 4`;
    const an = ['3 4'];
    expect(solution(input(tc))).toEqual(an);
  });
});
