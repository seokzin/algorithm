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

// FAIL 1. forEach 내에서 배열에 변화가 생기면 인덱스는 그대로지만 배열의 길이는 변화하여 예상치 못한 결과가 나옴
//         불가피하게 while로 외부 배열에 접근하는 방식으로 풀이. (마음에 안들지만..)
