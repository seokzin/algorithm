import { input } from '../utils/input';
import { solution } from './02805-나무 자르기';

describe('02805-나무 자르기 >', () => {
  it('tc #1 >', () => {
    const tc1 = `4 7
    20 15 10 17`;
    const an1 = 15;
    expect(solution(input(tc1))).toBe(an1);
  });

  it('tc #2 >', () => {
    const tc2 = `5 20
    4 42 40 26 46`;
    const an2 = 36;
    expect(solution(input(tc2))).toBe(an2);
  });
});
