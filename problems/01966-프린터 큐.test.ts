import { input } from '../utils/input';
import { solution } from './01966-프린터 큐';

describe('01966-프린터 큐 >', () => {
  it('tc #1 >', () => {
    const tc = `3
    1 0
    5
    4 2
    1 2 3 4
    6 0
    1 1 9 1 1 1`;
    const an = `1
    2
    5`;
    expect(solution(input(tc))).toBe(an);
  });
});
