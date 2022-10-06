import { input } from '../utils/input';
import { solution } from './04949-균형잡힌 세상';

describe('04949-균형잡힌 세상 >', () => {
  it('tc #1 >', () => {
    const tc = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;
    const an = `yes
yes
no
no
no
yes
yes`;
    expect(solution(input(tc))).toBe(an);
  });

  it('ctc #1 >', () => {
    const tc = `([)])
.`;
    const an = `no`;
    expect(solution(input(tc))).toBe(an);
  });
});

// FAIL 1. forEach 내부의 return은 forEach만 종료시키고, 외부의 함수는 종료되지 않음
// FAIL 2. input을 trim하는 것이 무조건 옳은 것은 아님. 의도적으로 공백을 제공할 수 있음.
