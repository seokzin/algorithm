import { queue } from './queue';
import { range } from '../utils/range';

describe('queue >', () => {
  it('enqueue', () => {
    const q = queue(range(1, 6));
    q.enqueue(6);
    expect(q.getAll()).toEqual(range(1, 7));
  });

  it('dequeue', () => {
    const q = queue(range(1, 6));
    q.dequeue();
    expect(q.getAll()).toEqual(range(2, 6));
  });

  it('peek', () => {
    const q = queue(range(1, 6));
    expect(q.peek()).toBe(1);
  });

  it('isEmpty', () => {
    const q = queue(range(1, 6));
    expect(q.isEmpty()).toBe(false);
  });

  it('size', () => {
    const q = queue(range(1, 6));
    expect(q.size()).toBe(5);
  });
});
