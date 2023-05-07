import { describe, expect, it } from 'vitest';
import { reverseWords } from '.';

describe('reverseWords', () => {
  it('should be reverse words', () => {
    expect(reverseWords('David')).toEqual('divaD');
    expect(reverseWords('This is an example!')).toEqual('sihT si na !elpmaxe');
    expect(reverseWords('double spaces')).toEqual('elbuod secaps');
    expect(reverseWords('a b c d')).toEqual('a b c d');
    expect(reverseWords('apple')).toEqual('elppa');
  });
});
