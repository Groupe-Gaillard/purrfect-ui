export const isVowel = (char: string) =>
  ["a", "e", "i", "o", "u"].includes(char.toLowerCase());

export const ucfirst = (str: string) => str[0].toUpperCase() + str.slice(1);
