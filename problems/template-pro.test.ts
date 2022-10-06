import solution from './template-pro';

describe('programmers >', () => {
  it('tc #1 >', () => {
    const num1 = 10;
    const num2 = 5;
    const an = 2;
    expect(solution(num1, num2)).toBe(an);
  });

  it('tc #2 >', () => {
    const num1 = 7;
    const num2 = 2;
    const an = 3;
    expect(solution(num1, num2)).toBe(an);
  });
});
