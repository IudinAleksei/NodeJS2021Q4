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

export const CODING_RANGE_ARRAY = Object.values(CODING_RANGE_UTF8);

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

export const ERROR_MESSAGES = Object.freeze({
  noConfig: 'CLIARG: config not found, command line arguments',
  notValidConfig: `CLIARG: config not valid, only string with codes: ${CHIPERS_KEYS.join(
    ', ',
  )} divided by ${CONFIG_DIVIDER} acceptable`,
  noPairArgumnent: 'CLIARG: invalid arguments number, this tool accepts only paired arguments',
  duplicateArgument: 'CLIARG: arguments duplication found: next argument printed more than one time: ',
  ENOENT: 'FILEIO: file does not exist: ',
  EPERM: 'FILEIO: no permissions to access file: ',
});
