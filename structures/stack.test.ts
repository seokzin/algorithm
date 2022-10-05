import { stack } from './stack';
import { range } from '../utils/range';

describe('stack >', () => {
  it('push', () => {
    const s = stack(range(1, 6));
    s.push(6);
    expect(s.getAll()).toEqual(range(1, 7));
  });

  it('pop', () => {
    const s = stack(range(1, 6));
    s.pop();
    expect(s.getAll()).toEqual(range(1, 5));
  });

  it('peek', () => {
    const s = stack(range(1, 6));
    expect(s.peek()).toBe(5);
  });

  it('isEmpty', () => {
    const s = stack(range(1, 6));
    expect(s.isEmpty()).toBe(false);
  });

  it('size', () => {
    const s = stack(range(1, 6));
    expect(s.size()).toBe(5);
  });
});
