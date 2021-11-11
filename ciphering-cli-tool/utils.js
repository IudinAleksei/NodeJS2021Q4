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

/** code below need to be refactor */

const shiftUTFChar = (char, shift) => {
  const charCode = char.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    const shiftedCode = shiftLetterCycle(65, 26, charCode + shift);
    return String.fromCharCode(shiftedCode);
  }
  if (charCode >= 97 && charCode <= 122) {
    const shiftedCode = shiftLetterCycle(97, 26, charCode + shift);
    return String.fromCharCode(shiftedCode);
  }
  return char;
};

export const shiftStringChars = (string, shift) => {
  return string
    .split('')
    .map((char) => shiftUTFChar(char, shift))
    .join('');
};

const atbashTransformChar = (char) => {
  const charCode = char.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    const shiftedCode = reverseLetterCode(65, 26, charCode);
    return String.fromCharCode(shiftedCode);
  }
  if (charCode >= 97 && charCode <= 122) {
    const shiftedCode = reverseLetterCode(97, 26, charCode);
    return String.fromCharCode(shiftedCode);
  }
  return char;
};

export const atbashStringChars = (string) => {
  return string
    .split('')
    .map((char) => atbashTransformChar(char))
    .join('');
};
