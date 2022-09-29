import { bfs } from './bfs';

describe('bfs', () => {
  it('should search tree in breadth-first order', () => {
    const tree = {
      name: 'A',
      children: [
        {
          name: 'B',
          children: [
            { name: 'C', children: [] },
            { name: 'D', children: [] },
          ],
        },
        {
          name: 'E',
          children: [
            { name: 'F', children: [] },
            { name: 'G', children: [] },
          ],
        },
      ],
    };

    const names = [];
    bfs(tree, (node) => names.push(node.name));
    expect(names).toEqual(['A', 'B', 'E', 'C', 'D', 'F', 'G']);
  });
});
