export const stack = <T>(arr: T[] = []) => {
  const s: T[] = [...arr];

  return {
    push: (item: T) => s.push(item),
    pop: () => s.pop(),
    peek: () => s[s.length - 1],
    isEmpty: () => s.length === 0,
    size: () => s.length,
    getAll: () => s,
  };
};
