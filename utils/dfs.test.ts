import { dfsWithStack, dfsWithRecursion } from './dfs';

describe('dfs', () => {
  it('should traverse tree in depth-first order', () => {
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
    dfsWithRecursion(tree, (node) => names.push(node.name));
    expect(names).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

    dfsWithStack(tree, (node) => names.push(node.name));
    expect(names).toEqual(['A', 'E', 'G', 'F', 'B', 'D', 'C']);
  });
});
