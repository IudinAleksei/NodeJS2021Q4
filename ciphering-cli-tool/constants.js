export const INPUT_FLAG = ['--input', '-i'];
export const OUTPUT_FLAG = ['--output', '-o'];
export const CONFIG_FLAG = ['--config', '-c'];
export const CONFIG_DIVIDER = '-';
export const CODING_RANGE_UTF8 = Object.freeze({
  UpperCaseEnglish: [65, 90],
  LowerCaseEnglish: [97, 122],
});

export const CRYPT_TABLE = Object.freeze({
  C0: -1,
  C1: 1,
  A: 13,
  R0: -8,
  R1: 8,
});

export const CRYPT_KEYS = Object.keys(CRYPT_TABLE);
