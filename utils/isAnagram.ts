export const isAnagram = (str1: string, str2: string) => {
  const strArray = (str: string) => str.toLowerCase().split('').sort().join('');

  return strArray(str1) === strArray(str2);
};
