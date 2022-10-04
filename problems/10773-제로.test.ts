import { input } from '../utils/input';
import { solution } from './10773-제로';

describe('10773-제로 >', () => {
  it('tc #1 >', () => {
    const tc = `4
    3
    0
    4
    0`;
    const an = 0;
    expect(solution(input(tc))).toBe(an);
  });

  it('tc #2 >', () => {
    const tc = `10
    1
    3
    5
    4
    0
    0
    7
    0
    0
    6`;
    const an = 7;
    expect(solution(input(tc))).toBe(an);
  });

  it('ctc #1 >', () => {
    const tc = `1
    0`;
    const an = 0;
    expect(solution(input(tc))).toBe(an);
  });
});

// FAIL 1. pop() 대신 slice(0, -1)를 사용해야 불변성이 유지된다.
// FAIL 2. slice(0, -1)는 메모리 초과를 유발한다.
// FAIL 3. k 대신 numbers.length를 쓰면 에러가 발생한다? 이해가 안감.. 💩
