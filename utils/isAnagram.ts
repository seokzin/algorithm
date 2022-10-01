export const isAnagram = (str1: string, str2: string) => {
  const strArray = (str: string) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return strArray(str1) === strArray(str2);
};
