import { dfsWithStack, dfsWithRecursion } from './dfs';

describe('dfs >', () => {
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

  it('should search tree in depth-first order (recursion)', () => {
    const result = [];
    dfsWithRecursion(tree, (node) => result.push(node.name));
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });

  it('should search tree in depth-first order (stack)', () => {
    const result = [];
    dfsWithStack(tree, (node) => result.push(node.name));
    expect(result).toEqual(['A', 'E', 'G', 'F', 'B', 'D', 'C']);
  });
});
