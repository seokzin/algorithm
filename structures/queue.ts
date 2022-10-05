export const queue = <T>(arr: T[] = []) => {
  const q: T[] = [...arr];

  return {
    enqueue: (item: T) => q.push(item),
    dequeue: () => q.shift(),
    peek: () => q[0],
    isEmpty: () => q.length === 0,
    size: () => q.length,
    getAll: () => q,
  };
};
