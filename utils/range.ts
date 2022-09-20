export const range = (start: number, end?: number, step?: number): number[] => {
  if (end === undefined) {
    // one param defined
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
    return [];
  }

  let result = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }

  return result;
};
