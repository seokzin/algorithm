import { bfs } from './bfs';

describe('bfs >', () => {
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

  it('search tree in breadth-first order >', () => {
    const result = [];
    bfs(tree, (node) => result.push(node.name));
    expect(result).toEqual(['A', 'B', 'E', 'C', 'D', 'F', 'G']);
  });
});
