export const bfs = (node, callback) => {
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    callback(current);
    current.children.forEach((child) => queue.push(child));
  }
};
