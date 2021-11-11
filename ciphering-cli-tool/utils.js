import { CODING_RANGE_UTF8 } from './constants.js';

export const parseConfig = (configString, divider) => {
  return configString.split(divider);
};

const shiftLetterCycle = (startTableIndex, AlphabetLength, charIndex) => {
  const result = ((charIndex - startTableIndex) % AlphabetLength) + startTableIndex;

  return result < startTableIndex ? result + AlphabetLength : result;
};

const reverseLetterCode = (startTableIndex, AlphabetLength, charIndex) => {
  const result = AlphabetLength - (charIndex - startTableIndex) - 1 + startTableIndex;

  return result;
};

const mapString = (string, callback) => {
  return string
    .split('')
    .map((char) => callback(char))
    .join('');
};

const transformChar = (char, transformHook) => {
  const charCode = char.charCodeAt();
  const codeRange = Object.values(CODING_RANGE_UTF8).find((range) => charCode >= range[0] && charCode <= range[1]);
  if (codeRange?.length) {
    const rangeLength = codeRange[1] - codeRange[0] + 1;
    const newCode = transformHook(codeRange[0], rangeLength, charCode);
    return String.fromCharCode(newCode);
  }
  return char;
};

const shiftUTFChar = (char, shift) =>
  transformChar(char, (startTableIndex, AlphabetLength, charIndex) =>
    shiftLetterCycle(startTableIndex, AlphabetLength, charIndex + shift),
  );

export const shiftStringChars = (string, shift) => mapString(string, (char) => shiftUTFChar(char, shift));

const atbashTransformChar = (char) => transformChar(char, reverseLetterCode);

export const atbashStringChars = (string) => mapString(string, atbashTransformChar);
