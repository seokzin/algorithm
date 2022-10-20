/**
 * 클로저 원리를 활용한 stack 구현
 * - 리턴되는 메서드에서 외부 변수 q에 접근하고 있어 클로저가 발생
 **/

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
