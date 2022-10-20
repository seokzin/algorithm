/**
 * 클로저 원리를 활용한 stack 구현
 * - 리턴되는 메서드에서 외부 변수 s에 접근하고 있어 클로저가 발생
 **/

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
