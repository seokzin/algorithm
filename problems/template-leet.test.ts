import isPalindrome from './template-leet';

describe('9. Palindrome Number >', () => {
  it('tc #1 >', () => {
    const x = 121;
    const an = true;
    expect(isPalindrome(x)).toBe(an);
  });

  it('tc #2 >', () => {
    const x = -121;
    const an = false;
    expect(isPalindrome(x)).toBe(an);
  });

  it('tc #3 >', () => {
    const x = 10;
    const an = false;
    expect(isPalindrome(x)).toBe(an);
  });
});
