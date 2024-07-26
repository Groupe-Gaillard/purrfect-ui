import {describe, expect, it} from "vitest";
import {isVowel, ucfirst} from "src/utils/stringHelper";

describe('isVowel', () => {
  it('It returns true for vowels', () => {
    expect(isVowel('a')).toBe(true)
    expect(isVowel('e')).toBe(true)
    expect(isVowel('i')).toBe(true)
    expect(isVowel('o')).toBe(true)
    expect(isVowel('u')).toBe(true)
  })

  it('It returns false for consonants', () => {
    expect(isVowel('b')).toBe(false)
  })
})

describe('ucfirst', () => {
  it('Capitalizes the first letter ', () => {
    expect(ucfirst('hello')).toBe('Hello')
  });
})
