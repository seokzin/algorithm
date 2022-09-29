export const dfs = (node, callback) => {
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    callback(current);
    current.children.forEach((child) => stack.push(child));
  }
};
