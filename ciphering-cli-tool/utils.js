const shiftUTFChar = (char, shift) => {
  const charCode = char.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    const shiftedCode = ((charCode + shift - 65) % 26) + 65;
    return String.fromCharCode(shiftedCode);
  }
  if (charCode >= 97 && charCode <= 122) {
    const shiftedCode = ((charCode + shift - 97) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }
  return char;
};

export const chiperString = (string, shift) => {
  return string
    .split('')
    .map((char) => shiftUTFChar(char, shift))
    .join('');
};

const shiftLetterCycle = (startTableIndex, AlphabetLength, charIndex) => {
  return charIndex;
};
