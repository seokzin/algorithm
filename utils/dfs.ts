export const dfsWithRecursion = (node, callback) => {
  callback(node);
  node.children.forEach((child) => dfsWithRecursion(child, callback));
};

export const dfsWithStack = (node, callback) => {
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    callback(current);
    current.children.forEach((child) => stack.push(child));
  }
};
