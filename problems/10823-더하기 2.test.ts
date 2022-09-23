import { input } from '../utils/input';
import { solution } from './10823-더하기 2';

describe('10823-더하기 2 >', () => {
  it('tc #1 >', () => {
    const tc1 = `10,20,
    3
    0,50
    ,1
    00`;
    const an1 = 210;
    expect(solution(input(tc1))).toBe(an1);
  });
});
