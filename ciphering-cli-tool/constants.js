export const FLAGS = Object.freeze({
  input: ['--input', '-i'],
  output: ['--output', '-o'],
  config: ['--config', '-c'],
});

export const CONFIG_DIVIDER = '-';
export const CODING_RANGE_UTF8 = Object.freeze({
  UpperCaseEnglish: [65, 90],
  LowerCaseEnglish: [97, 122],
});

export const CIPHER_SHIFTS = Object.freeze({
  C0: -1,
  C1: 1,
  R0: -8,
  R1: 8,
});

export const SPECIFIC_CHIPERS = Object.freeze({
  A: true,
});

export const CHIPERS_KEYS = [...Object.keys(CIPHER_SHIFTS), ...Object.keys(SPECIFIC_CHIPERS)];
