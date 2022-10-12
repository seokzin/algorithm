import { dictionary } from './dictionary';

describe('dictionary >', () => {
  it('keys & value', () => {
    expect(dictionary(['a', 'b', 'c'], 1)).toEqual({
      a: 1,
      b: 1,
      c: 1,
    });
  });

  it('empty key & value', () => {
    expect(dictionary([], 1)).toEqual({});
  });

  it('Object.fromEntries() >', () => {
    expect(
      Object.fromEntries([
        ['a', 1],
        ['b', 1],
        ['c', 1],
      ])
    ).toEqual({
      a: 1,
      b: 1,
      c: 1,
    });
  });
});
