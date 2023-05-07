export function reverseWords(str: string) {
  if (str.split(' ').length < 2) {
    return str.split('').reverse().join('');
  }

  const words = str.split(' ').map((word) => word.split('').reverse().join(''));
  return words.join(' ');
}
