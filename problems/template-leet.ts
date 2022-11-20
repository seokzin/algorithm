function isPalindrome(x: number): boolean {
  const str = x.toString();
  const reverseStr = str.split('').reverse().join('');

  return reverseStr === str;
}

export default isPalindrome;
