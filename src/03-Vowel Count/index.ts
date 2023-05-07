const vowels = ['a', 'e', 'i', 'o', 'u'];

export function getCountVowel(text: string) {
  let count = 0;
  const values = String(text).toLowerCase().split('');

  values?.forEach((vowel) => (vowels.includes(vowel) ? count++ : null));
  return count;
}

export function getCountVowel2(text: string) {
  const result = text.match(/[aeiou]/gi);
  return result ? result?.length : 0;
}
