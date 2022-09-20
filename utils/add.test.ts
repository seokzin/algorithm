import { add } from './add';
import { range } from './range';

describe('add >', () => {
  it('two arguments >', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('multiple arguments >', () => {
    expect(add(...range(10))).toBe(45);
  });
});
