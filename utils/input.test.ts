import { input } from './input';

describe('input >', () => {
  it('return input lines array >', () => {
    const tc1 = `123`;
    const tc2 = `4 7
    20 15 10 17`;

    expect(input(tc1)).toEqual(['123']);
    expect(input(tc2)).toEqual(['4 7', '20 15 10 17']);
  });
});
