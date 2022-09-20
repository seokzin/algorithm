export const binarySearch = (ascendingArray: number[], target: number) => {
  let start = 0;
  let end = ascendingArray.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (ascendingArray[mid] === target) {
      return mid;
    } else if (ascendingArray[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return -1;
};
