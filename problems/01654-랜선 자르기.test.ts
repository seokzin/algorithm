import { input } from '../utils/input';
import { solution } from './01654-랜선 자르기';

describe('01654-랜선 자르기 >', () => {
  it('tc #1 >', () => {
    const tc = `4 11
    802
    743
    457
    539`;
    const an = 200;
    expect(solution(input(tc))).toBe(an);
  });
});

// FAIL 1. ctc1 > start가 0이 아닌 1로 시작해야 한다.
