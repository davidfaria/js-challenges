import { describe, expect, it } from 'vitest';
import { getCountVowel, getCountVowel2 } from '.';

describe('getCountVowel', () => {
  it('should able to vowel count', () => {
    expect(getCountVowel('abracadabra')).toBe(5);
    expect(getCountVowel('aBracAdAbRa')).toBe(5);
    expect(getCountVowel('piauiense')).toBe(6);
  });
});

describe('getCountVowel2', () => {
  it('should able to vowel count', () => {
    expect(getCountVowel2('abracadabra')).toBe(5);
    expect(getCountVowel2('aBracAdAbRa')).toBe(5);
    expect(getCountVowel2('piauiense')).toBe(6);
    expect(getCountVowel2('')).toBe(0);
  });
});
